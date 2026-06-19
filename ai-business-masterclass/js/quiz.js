// ── Quiz / Assessment Engine ──────────────────────────────────

const Quiz = (() => {
    let _questions  = [];
    let _current    = 0;
    let _answers    = {};
    let _submitted  = {};
    let _score      = 0;
    let _onComplete = null;

    function shuffle(arr) {
        const a = [...arr];
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    function start(onComplete) {
        _onComplete = onComplete;
        // Draw questions: aim for even spread across modules
        const byModule = {};
        QUESTIONS.forEach(q => {
            if (!byModule[q.module]) byModule[q.module] = [];
            byModule[q.module].push(q);
        });
        const total   = CONFIG.QUESTIONS_PER_EXAM;
        const modules = Object.keys(byModule);
        const perMod  = Math.floor(total / modules.length);
        let picked    = [];
        modules.forEach(m => {
            picked = picked.concat(shuffle(byModule[m]).slice(0, perMod));
        });
        // Top up if rounding left us short
        while (picked.length < total) {
            const all = shuffle(QUESTIONS).find(q => !picked.includes(q));
            if (all) picked.push(all); else break;
        }
        _questions = shuffle(picked).slice(0, total);
        _current   = 0;
        _answers   = {};
        _submitted = {};
        _score     = 0;
        renderQuestion();
    }

    function renderQuestion() {
        const container = document.getElementById('view-assessment');
        if (!container) return;

        if (_current >= _questions.length) {
            showResults(container);
            return;
        }

        const q    = _questions[_current];
        const idx  = _current + 1;
        const pct  = Math.round((idx - 1) / _questions.length * 100);
        const mods = { 1:'Module 1', 2:'Module 2', 3:'Module 3', 4:'Module 4', 5:'Module 5', 6:'Module 6', 7:'Module 7' };

        container.innerHTML = `
<div class="assessment-container">
  <div class="assessment-header">
    <h1>🎯 Final Assessment</h1>
    <p>Answer all ${_questions.length} questions. Pass mark: ${CONFIG.PASS_MARK}%</p>
  </div>
  <div class="quiz-progress-bar-wrap">
    <div class="quiz-progress-label"><span>Question ${idx} of ${_questions.length}</span><span>${pct}% complete</span></div>
    <div class="quiz-progress-track"><div class="quiz-progress-fill" style="width:${pct}%"></div></div>
  </div>
  <div class="question-card">
    <div class="question-header">
      <div class="question-num">${idx}</div>
      <div class="question-type-badge">${q.type === 'tf' ? 'True / False' : q.type === 'scenario' ? 'Scenario' : 'Multiple Choice'}</div>
      <div class="question-module-badge">${mods[q.module] || 'General'}</div>
    </div>
    <div class="question-text">${q.question}</div>
    <div class="options-grid" id="options-grid">
      ${q.options.map((opt, i) => `
        <button class="option-btn" data-idx="${i}" onclick="Quiz.selectOption(${i})">
          <div class="option-letter">${String.fromCharCode(65+i)}</div>
          <div class="option-text">${opt}</div>
        </button>`).join('')}
    </div>
    <div class="feedback-box" id="feedback-box">
      <div class="feedback-title" id="feedback-title"></div>
      <div class="feedback-explanation" id="feedback-exp"></div>
    </div>
    <div class="question-actions">
      <button class="submit-btn" id="submit-btn" disabled onclick="Quiz.submitAnswer()">Submit Answer</button>
      <button class="next-question-btn" id="next-btn" onclick="Quiz.nextQuestion()">
        ${_current < _questions.length - 1 ? 'Next Question →' : 'See Results'}
      </button>
    </div>
  </div>
</div>`;

        // Restore previous selection in this session if navigating back (not implemented but safe)
        _answers[q.id] !== undefined && selectOption(_answers[q.id], true);
        if (_submitted[q.id] !== undefined) _revealFeedback(q.id);
    }

    function selectOption(idx, silent) {
        const q = _questions[_current];
        if (_submitted[q.id] !== undefined) return; // already answered
        _answers[q.id] = idx;

        document.querySelectorAll('.option-btn').forEach((btn, i) => {
            btn.classList.toggle('selected', i === idx);
        });
        const submitBtn = document.getElementById('submit-btn');
        if (submitBtn) submitBtn.disabled = false;
    }

    function submitAnswer() {
        const q = _questions[_current];
        if (_answers[q.id] === undefined) return;
        if (_submitted[q.id] !== undefined) return;

        const chosen  = _answers[q.id];
        const correct = q.correct;
        const isRight = chosen === correct;

        _submitted[q.id] = isRight;
        if (isRight) _score++;

        // Style options
        document.querySelectorAll('.option-btn').forEach((btn, i) => {
            btn.disabled = true;
            btn.classList.remove('selected');
            if (i === correct)           btn.classList.add('correct');
            else if (i === chosen && !isRight) btn.classList.add('wrong');
        });

        _revealFeedback(q.id);

        const submitBtn = document.getElementById('submit-btn');
        const nextBtn   = document.getElementById('next-btn');
        if (submitBtn) submitBtn.style.display = 'none';
        if (nextBtn)   nextBtn.style.display   = 'block';

        // Voice narrate explanation
        if (Voice.supported) {
            Voice.setScript((isRight ? 'Correct! ' : 'Not quite. ') + q.explanation);
            Voice.play();
        }
    }

    function _revealFeedback(qid) {
        const q       = _questions.find(x => x.id === qid);
        const isRight = _submitted[qid];
        const box     = document.getElementById('feedback-box');
        const title   = document.getElementById('feedback-title');
        const exp     = document.getElementById('feedback-exp');
        if (!box || !q) return;

        box.style.display = 'block';
        box.className = 'feedback-box ' + (isRight ? 'correct' : 'wrong');
        if (title) title.textContent = isRight ? '✅ Correct!' : '❌ Incorrect';
        if (exp)   exp.textContent   = q.explanation;
    }

    function nextQuestion() {
        Voice.stop();
        _current++;
        renderQuestion();
    }

    function showResults(container) {
        Voice.stop();
        const total   = _questions.length;
        const pct     = Math.round((_score / total) * 100);
        const passed  = pct >= CONFIG.PASS_MARK;
        const correct = _score;
        const wrong   = total - correct;

        Store.saveAssessmentResult(pct, passed, _answers);

        container.innerHTML = `
<div class="assessment-container">
  <div class="results-card">
    <div class="results-icon">${passed ? '🏆' : '📚'}</div>
    <h1 class="results-title">${passed ? 'Congratulations!' : 'Keep Learning'}</h1>
    <p class="results-subtitle">${passed
      ? 'You have passed the AI For Business Growth Masterclass!'
      : `You scored ${pct}% — you need ${CONFIG.PASS_MARK}% to pass. Review the modules and try again.`}</p>
    <div class="score-circle ${passed ? 'passed' : 'failed'}">
      <div class="score-number">${pct}%</div>
      <div class="score-label">Score</div>
    </div>
    <div class="results-stats">
      <div class="result-stat"><div class="result-stat-num">${correct}</div><div class="result-stat-lbl">Correct</div></div>
      <div class="result-stat"><div class="result-stat-num">${wrong}</div><div class="result-stat-lbl">Incorrect</div></div>
      <div class="result-stat"><div class="result-stat-num">${total}</div><div class="result-stat-lbl">Total Questions</div></div>
      <div class="result-stat"><div class="result-stat-num">${CONFIG.PASS_MARK}%</div><div class="result-stat-lbl">Pass Mark</div></div>
    </div>
    <div class="results-actions">
      ${passed
        ? `<button class="btn-success" onclick="App.showCertificate()">🎓 Get Your Certificate</button>`
        : `<button class="btn-primary" onclick="Quiz.start(null)">Retake Assessment</button>
           <button class="btn-secondary" onclick="App.showHome()">Review Modules</button>`}
    </div>
  </div>
</div>`;

        if (passed) App.toast('🎉 Congratulations — you passed! Your certificate is ready.', 'success');
    }

    return { start, selectOption, submitAnswer, nextQuestion };
})();
