// ══════════════════════════════════════════════════════════════
// Main Application — AI For Business Growth Masterclass
// ══════════════════════════════════════════════════════════════

const App = (() => {

    let _currentModuleId = null;
    let _currentLessonId = null;
    let _timeInterval    = null;
    let _lessonTimer     = null;
    let _lessonSeconds   = 0;

    // ── Bootstrap ─────────────────────────────────────────────
    function init() {
        // Animate loading bar then reveal app
        setTimeout(async () => {
            await Auth.init();
            await _checkPaymentReturn();

            // Rebuild sidebar nav
            _renderSidebarNav();

            // Set up controls
            _bindGlobalControls();

            // Check auth state and route accordingly
            const isDemoMode = !CONFIG.SUPABASE_URL || CONFIG.SUPABASE_URL.includes('YOUR_PROJECT_REF');
            if (isDemoMode) {
                Store.set('enrolled', 'true');
                _showCourseHome();
                setTimeout(_showNeedsAssessment, 600);
            } else {
                const user = await Auth.getUser();
                if (user) {
                    _onLoggedIn(user);
                } else {
                    _showAuthModal();
                }
            }

            // Hide loading, show app
            document.getElementById('loading-screen').style.display = 'none';
            const app = document.getElementById('app');
            app.removeAttribute('hidden');
            app.style.opacity = '0';
            requestAnimationFrame(() => {
                app.style.transition = 'opacity .5s';
                app.style.opacity    = '1';
            });

            _startTimeTracking();
        }, 1800);
    }

    async function _checkPaymentReturn() {
        const status = await Payment.handleReturn();
        if (status === 'success') toast('Payment successful! Welcome to the course.', 'success');
        if (status === 'cancelled') toast('Payment was cancelled. Try again when ready.', 'error');
    }

    async function _onLoggedIn(user) {
        _updateAuthUI(user);
        const enrolled = await Auth.isEnrolled();
        if (!enrolled) {
            _showPaymentWall();
        } else {
            _showCourseHome();
            setTimeout(_showNeedsAssessment, 600);
        }
    }

    // ── Authentication Modal ──────────────────────────────────
    function _showAuthModal(defaultTab) {
        const existing = document.getElementById('auth-modal');
        if (existing) existing.remove();

        const modal = document.createElement('div');
        modal.id        = 'auth-modal';
        modal.className = 'modal-overlay';
        modal.innerHTML = `
<div class="modal-box auth-modal-box" role="dialog" aria-modal="true" aria-label="Sign in or register">
  <div class="modal-header">
    <img src="img/penshaw-view-logo.svg" alt="Penshaw View Training" class="modal-logo-img">
    <h2>AI For Business Growth Masterclass</h2>
    <p class="modal-sub">Sign in or create a free account to begin</p>
  </div>
  <div class="modal-tabs">
    <button class="modal-tab ${defaultTab === 'register' ? '' : 'active'}" data-tab="login"  onclick="App._switchTab('login')">Sign In</button>
    <button class="modal-tab ${defaultTab === 'register' ? 'active' : ''}" data-tab="register" onclick="App._switchTab('register')">Create Account</button>
  </div>

  <!-- Login -->
  <form id="form-login"  class="modal-form ${defaultTab === 'register' ? 'hidden' : ''}" onsubmit="App._handleLogin(event)">
    <div class="form-group">
      <label for="login-email">Email Address</label>
      <input id="login-email"  type="email" required placeholder="your@email.com" autocomplete="email" class="form-input"/>
    </div>
    <div class="form-group">
      <label for="login-pass">Password</label>
      <input id="login-pass" type="password" required placeholder="••••••••" autocomplete="current-password" class="form-input"/>
    </div>
    <div class="form-error" id="login-error"></div>
    <button type="submit" class="btn-primary form-submit-btn" id="login-btn">Sign In →</button>
    <button type="button" class="forgot-link" onclick="App._handleForgot()">Forgot password?</button>
  </form>

  <!-- Register -->
  <form id="form-register" class="modal-form ${defaultTab === 'register' ? '' : 'hidden'}" onsubmit="App._handleRegister(event)">
    <div class="form-group">
      <label for="reg-name">Full Name</label>
      <input id="reg-name" type="text" required placeholder="Jane Smith" autocomplete="name" class="form-input"/>
    </div>
    <div class="form-group">
      <label for="reg-email">Email Address</label>
      <input id="reg-email" type="email" required placeholder="your@email.com" autocomplete="email" class="form-input"/>
    </div>
    <div class="form-group">
      <label for="reg-pass">Password <span style="color:var(--text-muted);font-size:.75rem">(min. 8 characters)</span></label>
      <input id="reg-pass" type="password" required minlength="8" placeholder="Choose a secure password" autocomplete="new-password" class="form-input"/>
    </div>
    <div class="form-error" id="reg-error"></div>
    <button type="submit" class="btn-primary form-submit-btn" id="reg-btn">Create Account →</button>
    <p class="form-small">By registering you agree to our terms. Your progress and certificate are stored securely.</p>
  </form>
</div>`;

        document.body.appendChild(modal);
        setTimeout(() => modal.classList.add('visible'), 10);

        // Focus first field
        const firstInput = modal.querySelector('input:not([type=hidden])');
        if (firstInput) firstInput.focus();
    }

    function _switchTab(tab) {
        document.querySelectorAll('.modal-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
        document.getElementById('form-login').classList.toggle('hidden',    tab !== 'login');
        document.getElementById('form-register').classList.toggle('hidden', tab !== 'register');
    }

    async function _handleLogin(e) {
        e.preventDefault();
        const email = document.getElementById('login-email').value.trim();
        const pass  = document.getElementById('login-pass').value;
        const btn   = document.getElementById('login-btn');
        const err   = document.getElementById('login-error');
        err.textContent = '';
        btn.disabled = true; btn.textContent = 'Signing in…';
        try {
            const user = await Auth.login(email, pass);
            _closeAuthModal();
            _onLoggedIn(user);
        } catch (ex) {
            err.textContent = ex.message || 'Login failed. Please try again.';
            btn.disabled = false; btn.textContent = 'Sign In →';
        }
    }

    async function _handleRegister(e) {
        e.preventDefault();
        const name  = document.getElementById('reg-name').value.trim();
        const email = document.getElementById('reg-email').value.trim();
        const pass  = document.getElementById('reg-pass').value;
        const btn   = document.getElementById('reg-btn');
        const err   = document.getElementById('reg-error');
        err.textContent = '';
        btn.disabled = true; btn.textContent = 'Creating account…';
        try {
            const user = await Auth.register(email, pass, name);
            _closeAuthModal();
            _onLoggedIn(user);
        } catch (ex) {
            err.textContent = ex.message || 'Registration failed. Please try again.';
            btn.disabled = false; btn.textContent = 'Create Account →';
        }
    }

    async function _handleForgot() {
        const email = document.getElementById('login-email')?.value?.trim();
        if (!email) { document.getElementById('login-error').textContent = 'Enter your email address first.'; return; }
        try {
            await Auth.resetPassword(email);
            toast('Password reset link sent. Check your inbox.', 'success');
        } catch (ex) {
            toast(ex.message || 'Could not send reset email.', 'error');
        }
    }

    function _closeAuthModal() {
        const m = document.getElementById('auth-modal');
        if (m) { m.classList.remove('visible'); setTimeout(() => m.remove(), 300); }
    }

    // ── Helpers ───────────────────────────────────────────────
    function _isEnrolled() { return Store.get('enrolled') === 'true'; }
    function _isPreviewLesson(lessonId) { return lessonId === '1.1'; }

    // ── Payment Wall ──────────────────────────────────────────
    function _showPaymentWall() {
        _showView('home');
        const content = document.getElementById('view-home');
        if (!content) return;

        // Insert payment banner above the hero
        const existing = document.getElementById('payment-banner');
        if (existing) existing.remove();

        const banner = document.createElement('div');
        banner.id        = 'payment-banner';
        banner.className = 'payment-banner';
        banner.innerHTML = `
<div class="payment-banner-inner">
  <div class="payment-banner-text">
    <div class="payment-banner-title">🔒 One-Time Enrolment Required</div>
    <div class="payment-banner-sub">Get full lifetime access to all 8 modules, 100+ quiz questions, and your certificate for a single payment of <strong><span id="enrol-price-label">${CONFIG.COURSE_PRICE_LABEL}</span></strong>. <em>First lesson free to preview.</em></div>
  </div>
  <div class="payment-banner-actions">
    <button class="btn-primary" id="enrol-btn" onclick="App.startPayment()">
      💳 Enrol Now — <span class="enrol-btn-price">${CONFIG.COURSE_PRICE_LABEL}</span>
    </button>
    <button class="btn-outline-dark" onclick="App._demoAccess()">Demo Access (No Payment)</button>
  </div>
  <div class="promo-code-wrap">
    <input type="text" id="promo-code-input" class="promo-input" placeholder="Have a promo code?" maxlength="20">
    <button class="btn-promo" onclick="App._applyPromo()">Apply</button>
  </div>
  <div id="promo-status" class="promo-status"></div>
</div>`;

        // Prepend to home view
        content.prepend(banner);
        _showCourseHome(false); // show home but locked
    }

    async function startPayment() {
        const btn = document.getElementById('enrol-btn');
        if (btn) { btn.disabled = true; btn.textContent = 'Redirecting to payment…'; }
        const discountPct = parseInt(Store.get('promo_pct') || '0', 10);
        try {
            await Payment.startCheckout(discountPct);
        } catch (ex) {
            toast('Payment unavailable: ' + (ex.message || 'Please try again.'), 'error');
            if (btn) { btn.disabled = false; btn.innerHTML = '💳 Enrol Now — <span class="enrol-btn-price">' + (Store.get('promo_price_label') || CONFIG.COURSE_PRICE_LABEL) + '</span>'; }
        }
    }

    function _applyPromo() {
        const code = (document.getElementById('promo-code-input')?.value || '').trim();
        if (!code) return;
        const pct = Payment.applyDiscount(code);
        const statusEl = document.getElementById('promo-status');
        if (pct > 0) {
            const newPence = Math.round(CONFIG.COURSE_PRICE_PENCE * (1 - pct / 100));
            const newLabel = '£' + Math.round(newPence / 100);
            Store.set('promo_code', code);
            Store.set('promo_pct', String(pct));
            Store.set('promo_price_label', newLabel);
            if (statusEl) statusEl.innerHTML = '<span class="promo-success">✓ ' + pct + '% discount applied — new price: ' + newLabel + '</span>';
            const btn = document.getElementById('enrol-btn');
            if (btn) btn.innerHTML = '💳 Enrol Now — <span class="enrol-btn-price">' + newLabel + '</span>';
            const lbl = document.getElementById('enrol-price-label');
            if (lbl) lbl.textContent = newLabel;
        } else {
            if (statusEl) statusEl.innerHTML = '<span class="promo-error">Code not recognised. Please check and try again.</span>';
        }
    }

    async function _demoAccess() {
        await Payment.activateDemoAccess();
        const banner = document.getElementById('payment-banner');
        if (banner) banner.remove();
        toast('Demo mode activated — explore the full course!', 'success');
        _showCourseHome();
    }

    // ── Course Home ───────────────────────────────────────────
    function _showCourseHome(interactive = true) {
        _showView('home');
        _setBreadcrumb('Home');

        const grid = document.getElementById('home-modules-grid');
        if (!grid) return;

        const totalLessons = MODULES.reduce((s, m) => s + m.lessons.length, 0);
        const doneLessons  = Store.countCompleted();

        grid.innerHTML = MODULES.map(mod => {
            const modDone   = mod.lessons.filter(l => Store.isLessonComplete(l.id)).length;
            const modTotal  = mod.lessons.length;
            const modPct    = modTotal ? Math.round(modDone / modTotal * 100) : 0;
            const completed = modPct === 100;
            const clickable  = interactive || mod.id === 1;
            return `
<div class="module-card ${completed ? 'completed' : ''} ${!interactive && mod.id !== 1 ? 'locked' : ''}"
     style="--module-color:${mod.color}"
     onclick="${clickable ? `App.showModule(${mod.id})` : ''}"
     role="button" tabindex="0"
     onkeydown="if(event.key==='Enter'||event.key===' ')${clickable ? `App.showModule(${mod.id})` : ''}">
  ${!interactive && mod.id !== 1 ? '<div class="module-locked-badge">🔒 Locked</div>' : ''}
  ${completed ? '<div class="module-completed-badge">✓ Done</div>' : ''}
  ${!interactive && mod.id === 1 ? '<div class="module-preview-badge">🎬 Free Preview</div>' : ''}
  <div class="module-card-header">
    <div class="module-card-icon" style="background:${mod.color}20">${mod.icon}</div>
    <div class="module-card-meta">
      <div class="module-card-num">Module ${mod.id}</div>
      <div class="module-card-title">${mod.title}</div>
    </div>
  </div>
  <div class="module-card-desc">${mod.description}</div>
  <div class="module-card-footer">
    <div class="module-card-stats">${modTotal} lessons · ${mod.estimatedTime}</div>
    <div class="module-card-progress">
      <div class="mini-progress-track"><div class="mini-progress-fill" style="width:${modPct}%"></div></div>
      <span class="module-card-pct">${modPct}%</span>
    </div>
  </div>
</div>`;
        }).join('');

        // Assessment card
        const result     = Store.getAssessmentResult();
        const allDone    = doneLessons >= totalLessons * 0.8;
        const assessPct  = result ? result.score + '%' : '0%';
        grid.innerHTML += `
<div class="module-card ${result?.passed ? 'completed' : ''}"
     style="--module-color:#EC4899"
     onclick="App.startAssessment()"
     role="button" tabindex="0">
  ${result?.passed ? '<div class="module-completed-badge">✓ Passed</div>' : ''}
  <div class="module-card-header">
    <div class="module-card-icon" style="background:#EC489920">📝</div>
    <div class="module-card-meta">
      <div class="module-card-num">Module 8</div>
      <div class="module-card-title">Final Assessment</div>
    </div>
  </div>
  <div class="module-card-desc">${ASSESSMENT_CONFIG.description}</div>
  <div class="module-card-footer">
    <div class="module-card-stats">${CONFIG.QUESTIONS_PER_EXAM} questions · 30 min</div>
    <div class="module-card-progress">
      <div class="mini-progress-track"><div class="mini-progress-fill" style="width:${result ? result.score : 0}%"></div></div>
      <span class="module-card-pct">${result ? assessPct : 'Not taken'}</span>
    </div>
  </div>
</div>`;

        // Show continue button if in progress
        const startBtn    = document.getElementById('start-course-btn');
        const continueBtn = document.getElementById('continue-course-btn');
        if (doneLessons > 0 && doneLessons < totalLessons) {
            if (startBtn)    startBtn.style.display    = 'none';
            if (continueBtn) continueBtn.style.display = 'inline-flex';
            if (continueBtn) continueBtn.onclick       = _resumeCourse;
        }

        _updateProgress();
    }

    function _resumeCourse() {
        // Find first incomplete lesson
        for (const mod of MODULES) {
            for (const lesson of mod.lessons) {
                if (!Store.isLessonComplete(lesson.id)) {
                    showLesson(mod.id, lesson.id);
                    return;
                }
            }
        }
        startAssessment();
    }

    // ── Module Overview ───────────────────────────────────────
    function showModule(moduleId) {
        const mod = MODULES.find(m => m.id === moduleId);
        if (!mod) return;
        _currentModuleId = moduleId;

        _showView('module');
        _setBreadcrumb(`Module ${mod.id}: ${mod.title}`);
        _openSidebarModule(moduleId);

        const container  = document.getElementById('view-module');
        const modDone    = mod.lessons.filter(l => Store.isLessonComplete(l.id)).length;
        const worksheet  = MODULE_WORKSHEETS[mod.id];
        const wsHtml     = worksheet ? _renderWorksheet(mod.id, worksheet) : '';
        const enrolled   = _isEnrolled();
        const videoHtml  = mod.videoUrl ? _renderModuleVideo(mod) : '';

        container.innerHTML = `
<div class="module-overview">
  <div class="module-ov-header">
    <div class="module-ov-icon" style="background:${mod.color}20">${mod.icon}</div>
    <div class="module-ov-meta">
      <div class="module-ov-num">Module ${mod.id} of 7</div>
      <h1 class="module-ov-title">${mod.title}</h1>
      <p class="module-ov-desc">${mod.description}</p>
      <div class="module-ov-stats">
        <div class="ov-stat">📚 ${mod.lessons.length} lessons</div>
        <div class="ov-stat">⏱ ${mod.estimatedTime}</div>
        <div class="ov-stat">✅ ${modDone}/${mod.lessons.length} completed</div>
      </div>
      ${_renderLearningOutcomes(mod.id)}
    </div>
  </div>
  ${videoHtml}
  <div class="module-resources-bar">
    <button class="btn-outline resource-btn" onclick="App._downloadCheatSheet(${mod.id})">
      📄 Download Module Cheat Sheet
    </button>
  </div>
  <div class="lessons-list">
    ${mod.lessons.map((lesson, idx) => {
        const done      = Store.isLessonComplete(lesson.id);
        const isPreview = _isPreviewLesson(lesson.id);
        const locked    = !enrolled && !isPreview;
        return `
<div class="lesson-list-item ${done ? 'completed' : ''} ${locked ? 'lesson-locked' : ''}"
     onclick="${locked ? '' : `App.showLesson(${mod.id},'${lesson.id}')`}"
     role="button" tabindex="0"
     onkeydown="if(event.key==='Enter')${locked ? '' : `App.showLesson(${mod.id},'${lesson.id}')`}">
  <div class="lesson-num">${done ? '✓' : idx + 1}</div>
  <div class="lesson-list-info">
    <div class="lesson-list-title">${lesson.title}${isPreview && !enrolled ? ' <span class="lesson-preview-tag">Free Preview</span>' : ''}</div>
    <div class="lesson-list-meta">${lesson.duration}${done ? ' · Completed' : ''}${locked ? ' · 🔒 Enrol to unlock' : ''}</div>
  </div>
  <div class="lesson-list-dur">${done ? '✅' : locked ? '🔒' : '▶'}</div>
</div>`;
    }).join('')}
  </div>
  ${wsHtml}
</div>`;
    }

    // ── Lesson View ───────────────────────────────────────────
    function showLesson(moduleId, lessonId) {
        const mod    = MODULES.find(m => m.id === moduleId);
        if (!mod) return;
        const lesson = mod.lessons.find(l => l.id === lessonId);
        if (!lesson) return;

        // Gate: non-enrolled users may only view the free preview lesson
        if (!_isEnrolled() && !_isPreviewLesson(lessonId)) {
            toast('Enrol to access the full course. Lesson 1.1 is free to preview.', 'error');
            _showPaymentWall();
            return;
        }

        _currentModuleId = moduleId;
        _currentLessonId = lessonId;

        _showView('lesson');
        Voice.stop();

        // Breadcrumb
        _setBreadcrumb(`Module ${mod.id}: ${mod.title}`, lesson.title);

        // Populate lesson
        document.getElementById('lesson-badge').textContent    = `Module ${mod.id} · ${mod.title}`;
        document.getElementById('lesson-dur').textContent      = lesson.duration;
        document.getElementById('lesson-heading').textContent  = lesson.title;
        document.getElementById('lesson-content').innerHTML    = lesson.content;

        // Key points
        const kpList = document.getElementById('keypoints-list');
        kpList.innerHTML = lesson.keyPoints.map(p => `<li>${p}</li>`).join('');

        // Module progress
        const modDone  = mod.lessons.filter(l => Store.isLessonComplete(l.id)).length;
        const modTotal = mod.lessons.length;
        const modPct   = Math.round(modDone / modTotal * 100);
        document.getElementById('mod-progress-fill').style.width = modPct + '%';
        document.getElementById('mod-progress-text').textContent = `${modDone} of ${modTotal} lessons completed`;

        // Mark sidebar lesson as active
        _updateSidebarActiveLesson(lessonId);

        // Voice
        Voice.stop();
        Voice.setScript(lesson.voiceScript || '');
        Voice.attachControls();

        // Navigation buttons
        _setupLessonNav(mod, lesson);

        // Start lesson timer
        _startLessonTimer();

        // Scroll to top
        document.querySelector('.content-area')?.scrollTo(0, 0);
    }

    function _setupLessonNav(mod, lesson) {
        const lessons  = mod.lessons;
        const idx      = lessons.findIndex(l => l.id === lesson.id);
        const prevBtn  = document.getElementById('prev-lesson-btn');
        const nextBtn  = document.getElementById('next-lesson-btn');
        const doneBtn  = document.getElementById('complete-lesson-btn');

        // Previous
        if (prevBtn) {
            if (idx > 0) {
                prevBtn.disabled = false;
                prevBtn.onclick  = () => showLesson(mod.id, lessons[idx - 1].id);
            } else if (mod.id > 1) {
                prevBtn.disabled = false;
                prevBtn.onclick  = () => showModule(mod.id - 1);
            } else {
                prevBtn.disabled = false;
                prevBtn.onclick  = showHome;
            }
        }

        // Next
        if (nextBtn) {
            if (idx < lessons.length - 1) {
                nextBtn.disabled = false;
                nextBtn.onclick  = () => showLesson(mod.id, lessons[idx + 1].id);
            } else if (mod.id < MODULES.length) {
                nextBtn.textContent = `Module ${mod.id + 1} →`;
                nextBtn.disabled    = false;
                nextBtn.onclick     = () => showModule(mod.id + 1);
            } else {
                nextBtn.textContent = 'Final Assessment →';
                nextBtn.onclick     = startAssessment;
            }
        }

        // Complete lesson
        const isComplete = Store.isLessonComplete(lesson.id);
        if (doneBtn) {
            doneBtn.textContent = isComplete ? '✓ Completed' : 'Mark Complete ✓';
            doneBtn.style.background = isComplete ? 'var(--success)' : '';
            doneBtn.onclick = () => _completeLesson(mod, lesson, doneBtn);
        }
    }

    function _completeLesson(mod, lesson, btn) {
        Store.markLessonComplete(lesson.id);
        if (btn) {
            btn.textContent = '✓ Completed';
            btn.style.background = 'var(--success)';
        }
        _updateProgress();
        _updateSidebarLessonStatus(lesson.id, true);

        const lessons = mod.lessons;
        const idx     = lessons.findIndex(l => l.id === lesson.id);
        if (idx < lessons.length - 1) {
            toast(`Lesson complete! Moving to next lesson…`, 'success');
            setTimeout(() => showLesson(mod.id, lessons[idx + 1].id), 800);
        } else {
            toast(`Module ${mod.id} complete! 🎉`, 'success');
            setTimeout(() => {
                if (mod.id < MODULES.length) showModule(mod.id + 1);
                else startAssessment();
            }, 1200);
        }
    }

    // ── Assessment ────────────────────────────────────────────
    function startAssessment() {
        _showView('assessment');
        _setBreadcrumb('Final Assessment');
        Voice.stop();
        Quiz.start(_onAssessmentComplete);
    }

    function _onAssessmentComplete(score, passed) {
        _updateProgress();
        if (passed) {
            setTimeout(() => {
                toast('Assessment passed! Download your personalised AI Action Plan below.', 'success');
            }, 1500);
        }
    }

    // ── Certificate ───────────────────────────────────────────
    function showCertificate() {
        const result = Store.getAssessmentResult();
        if (!result?.passed) {
            toast('Complete and pass the assessment (70%+) to unlock your certificate.', 'error');
            return;
        }
        _showView('certificate');
        _setBreadcrumb('Certificate');
        Cert.show();
    }

    // ── Sidebar Rendering ─────────────────────────────────────
    function _renderSidebarNav() {
        const nav = document.getElementById('module-nav');
        if (!nav) return;

        nav.innerHTML = MODULES.map(mod => {
            const modDone  = mod.lessons.filter(l => Store.isLessonComplete(l.id)).length;
            const modTotal = mod.lessons.length;
            const modPct   = modTotal ? Math.round(modDone / modTotal * 100) : 0;
            const allDone  = modDone === modTotal && modTotal > 0;

            return `
<div class="nav-module" id="nav-mod-${mod.id}">
  <div class="nav-module-header" onclick="App._toggleSidebarModule(${mod.id})" role="button" aria-expanded="false">
    <div class="nav-module-icon">${mod.icon}</div>
    <div class="nav-module-info">
      <span class="nav-module-title">Module ${mod.id}: ${mod.title}</span>
      <div class="nav-mod-meta">
        <span class="nav-mod-progress">${modDone}/${modTotal}</span>
        ${allDone ? '<span class="nav-mod-check">✓</span>' : ''}
      </div>
    </div>
    <svg class="nav-module-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
  </div>
  <div class="nav-lessons">
    ${mod.lessons.map(lesson => {
        const done = Store.isLessonComplete(lesson.id);
        return `<div class="nav-lesson ${done ? 'completed' : ''}" id="nav-lesson-${lesson.id}"
                  onclick="App.showLesson(${mod.id},'${lesson.id}')" role="button">
          <span class="nav-lesson-check">${done ? '✓' : '○'}</span>
          <span class="nav-lesson-title">${lesson.title}</span>
          <span class="nav-lesson-dur">${lesson.duration}</span>
        </div>`;
    }).join('')}
  </div>
</div>`;
        }).join('');

        // Assessment nav item
        const result = Store.getAssessmentResult();
        nav.innerHTML += `
<div class="nav-assessment-btn" onclick="App.startAssessment()" role="button">
  <span>📝</span>
  <span>Final Assessment ${result ? '(' + result.score + '%)' : ''}</span>
</div>`;
        if (result?.passed) {
            nav.innerHTML += `
<div class="nav-assessment-btn" onclick="App.showCertificate()" role="button" style="background:rgba(16,185,129,.15)">
  <span>🏆</span><span>Download Certificate</span>
</div>`;
        }

        // Resources & Info
        nav.innerHTML += `
<div class="nav-divider"></div>
<div class="nav-assessment-btn nav-resource-btn" onclick="App.showPromptLibrary()" role="button">
  <span>💬</span><span>Prompt Library</span>
</div>
<div class="nav-assessment-btn nav-resource-btn" onclick="App.showFeedback()" role="button">
  <span>⭐</span><span>Leave Feedback</span>
</div>
<div class="nav-assessment-btn nav-resource-btn" onclick="App.showTeamPricing()" role="button">
  <span>👥</span><span>Team & Corporate</span>
</div>
<div class="nav-divider"></div>
<div class="nav-assessment-btn nav-info-btn" onclick="App.showAbout()" role="button">
  <span>🎓</span><span>About / CPD Info</span>
</div>
<div class="nav-assessment-btn nav-info-btn" onclick="App.showPolicy('accessibility')" role="button">
  <span>♿</span><span>Accessibility</span>
</div>
<div class="nav-assessment-btn nav-info-btn" onclick="App.showPolicy('complaints')" role="button">
  <span>📋</span><span>Complaints Procedure</span>
</div>
<div class="nav-assessment-btn nav-info-btn" onclick="App.showPolicy('privacy')" role="button">
  <span>🔒</span><span>Privacy Policy</span>
</div>`;
    }

    function _toggleSidebarModule(modId) {
        const el = document.getElementById(`nav-mod-${modId}`);
        if (!el) return;
        el.classList.toggle('open');
        const header = el.querySelector('.nav-module-header');
        if (header) header.setAttribute('aria-expanded', el.classList.contains('open'));
    }

    function _openSidebarModule(modId) {
        document.querySelectorAll('.nav-module').forEach(el => el.classList.remove('open'));
        const el = document.getElementById(`nav-mod-${modId}`);
        if (el) {
            el.classList.add('open');
            const header = el.querySelector('.nav-module-header');
            if (header) { header.classList.add('active'); header.setAttribute('aria-expanded', 'true'); }
        }
    }

    function _updateSidebarActiveLesson(lessonId) {
        document.querySelectorAll('.nav-lesson').forEach(el => el.classList.remove('active'));
        const el = document.getElementById(`nav-lesson-${lessonId}`);
        if (el) {
            el.classList.add('active');
            el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }
    }

    function _updateSidebarLessonStatus(lessonId, complete) {
        const el = document.getElementById(`nav-lesson-${lessonId}`);
        if (!el) return;
        el.classList.toggle('completed', complete);
        const check = el.querySelector('.nav-lesson-check');
        if (check) check.textContent = complete ? '✓' : '○';
    }

    // ── Global Controls ───────────────────────────────────────
    function _bindGlobalControls() {
        // Theme toggle
        document.getElementById('theme-toggle')?.addEventListener('click', _toggleTheme);

        // Font size
        document.getElementById('font-increase')?.addEventListener('click', () => _changeFont(1));
        document.getElementById('font-decrease')?.addEventListener('click', () => _changeFont(-1));

        // Sidebar mobile toggle
        document.getElementById('menu-toggle')?.addEventListener('click', _toggleMobileSidebar);
        document.getElementById('sidebar-close')?.addEventListener('click', _closeMobileSidebar);
        document.getElementById('sidebar-overlay')?.addEventListener('click', _closeMobileSidebar);

        // Start / continue buttons
        document.getElementById('start-course-btn')?.addEventListener('click', () => showModule(1));

        // Keyboard navigation
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape') Voice.stop();
        });

        // Apply saved theme
        const savedTheme = Store.get('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        _updateThemeIcon(savedTheme);

        // Apply saved font size
        const savedFontSize = parseInt(Store.get('font_size') || '16', 10);
        document.documentElement.style.fontSize = savedFontSize + 'px';
    }

    function _toggleTheme() {
        const current = document.documentElement.getAttribute('data-theme') || 'light';
        const next    = current === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', next);
        Store.set('theme', next);
        _updateThemeIcon(next);
    }

    function _updateThemeIcon(theme) {
        const sun  = document.querySelector('.icon-sun');
        const moon = document.querySelector('.icon-moon');
        if (sun)  sun.style.display  = theme === 'light' ? 'block' : 'none';
        if (moon) moon.style.display = theme === 'dark'  ? 'block' : 'none';
    }

    function _changeFont(delta) {
        const current = parseInt(Store.get('font_size') || '16', 10);
        const next    = Math.min(22, Math.max(12, current + delta));
        document.documentElement.style.fontSize = next + 'px';
        Store.set('font_size', next);
    }

    function _toggleMobileSidebar() {
        document.getElementById('sidebar')?.classList.add('mobile-open');
        document.getElementById('sidebar-overlay')?.classList.add('visible');
    }

    function _closeMobileSidebar() {
        document.getElementById('sidebar')?.classList.remove('mobile-open');
        document.getElementById('sidebar-overlay')?.classList.remove('visible');
    }

    // ── Progress Tracking ─────────────────────────────────────
    function _updateProgress() {
        const totalLessons = MODULES.reduce((s, m) => s + m.lessons.length, 0);
        const doneLessons  = Store.countCompleted();
        const pct          = totalLessons ? Math.round(doneLessons / totalLessons * 100) : 0;
        const pctStr       = pct + '%';

        document.getElementById('overall-fill')?.style && (document.getElementById('overall-fill').style.width = pctStr);
        document.getElementById('overall-pct') && (document.getElementById('overall-pct').textContent = pctStr);
        document.getElementById('header-progress-fill')?.style && (document.getElementById('header-progress-fill').style.width = pctStr);
        document.getElementById('header-pct') && (document.getElementById('header-pct').textContent = pctStr);
        document.getElementById('lessons-done') && (document.getElementById('lessons-done').textContent = doneLessons);
        document.getElementById('lessons-total') && (document.getElementById('lessons-total').textContent = totalLessons);
    }

    function _startTimeTracking() {
        _timeInterval = setInterval(() => {
            Store.addTime(5);
            const el = document.getElementById('time-display');
            if (el) el.textContent = Store.formatTime(Store.getTime()) + ' learning time';
        }, 5000);
    }

    function _startLessonTimer() {
        if (_lessonTimer) clearInterval(_lessonTimer);
        _lessonSeconds = 0;
        _lessonTimer   = setInterval(() => { _lessonSeconds++; }, 1000);
    }

    // ── Worksheet ─────────────────────────────────────────────
    function _renderWorksheet(modId, ws) {
        const saved = JSON.parse(Store.get('worksheet_' + modId) || '{}');
        return `
<div class="worksheet-section" id="worksheet-mod-${modId}">
  <div class="worksheet-header">
    <div class="worksheet-icon">📋</div>
    <div>
      <h2 class="worksheet-title">${ws.title}</h2>
      <p class="worksheet-subtitle">${ws.subtitle}</p>
    </div>
  </div>
  <div class="worksheet-questions">
    ${ws.questions.map(q => `
    <div class="worksheet-q">
      <label class="worksheet-label">${q.label}</label>
      <textarea class="worksheet-textarea" id="ws-${modId}-${q.id}"
        placeholder="${q.placeholder}"
        oninput="App._saveWorksheet(${modId})">${_esc(saved[q.id] || '')}</textarea>
    </div>`).join('')}
  </div>
  <div class="worksheet-actions">
    <button class="btn-primary ws-save-btn" onclick="App._saveWorksheet(${modId}, true)">
      💾 Save Answers
    </button>
    <button class="btn-outline ws-print-btn" onclick="App._printWorksheet(${modId})">
      🖨 Print Worksheet
    </button>
  </div>
</div>`;
    }

    function _saveWorksheet(modId, notify) {
        const ws = MODULE_WORKSHEETS[modId];
        if (!ws) return;
        const data = {};
        ws.questions.forEach(q => {
            const el = document.getElementById(`ws-${modId}-${q.id}`);
            if (el) data[q.id] = el.value;
        });
        Store.set('worksheet_' + modId, JSON.stringify(data));
        if (notify) toast('Worksheet saved!', 'success');
    }

    function _printWorksheet(modId) {
        const ws  = MODULE_WORKSHEETS[modId];
        if (!ws) return;
        const saved = JSON.parse(Store.get('worksheet_' + modId) || '{}');
        const rows  = ws.questions.map(q => `
          <div style="margin-bottom:24px">
            <p style="font-weight:700;margin-bottom:8px;color:#0A1E2D">${q.label}</p>
            <div style="border:1px solid #C8DDE6;border-radius:8px;padding:12px;min-height:80px;font-size:14px;color:#1B6B8A;white-space:pre-wrap">${_esc(saved[q.id] || '')}</div>
          </div>`).join('');
        const win = window.open('', '_blank');
        win.document.write(`<!DOCTYPE html><html><head><title>${ws.title}</title>
<style>*{box-sizing:border-box;margin:0;padding:0}body{font-family:-apple-system,Segoe UI,Arial,sans-serif;padding:40px;max-width:800px;margin:0 auto;color:#0A1E2D}
h1{font-size:22px;margin-bottom:6px;color:#1B6B8A}p.sub{color:#7BA3B5;margin-bottom:32px;font-size:14px}
@media print{body{padding:20px}}</style></head>
<body><h1>${ws.title}</h1><p class="sub">${ws.subtitle} — Penshaw View Training</p>${rows}
<p style="margin-top:32px;font-size:11px;color:#7BA3B5">AI For Business Growth Masterclass · Penshaw View Training</p>
<script>setTimeout(()=>{window.print();window.close()},400)<\/script></body></html>`);
        win.document.close();
    }

    function _esc(str) {
        return String(str).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    }

    // ── Learning Outcomes ─────────────────────────────────────
    function _renderLearningOutcomes(modId) {
        const lo = MODULE_LEARNING_OUTCOMES[modId];
        if (!lo) return '';
        return `
<div class="learning-outcomes">
  <h3 class="lo-title">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
    Learning Outcomes
  </h3>
  <p class="lo-intro">${lo.intro}</p>
  <ol class="lo-list">
    ${lo.outcomes.map(o => `<li>${o}</li>`).join('')}
  </ol>
</div>`;
    }

    // ── About / CPD Info ──────────────────────────────────────
    function showAbout() {
        _showView('about');
        _setBreadcrumb('About & CPD Information');
        Voice.stop();
        const container = document.getElementById('view-about');
        if (!container) return;
        container.innerHTML = `<div class="policy-page">${POLICY_TEXT.about}</div>`;
    }

    // ── Policy Pages ──────────────────────────────────────────
    function showPolicy(key) {
        const labels = { privacy: 'Privacy Policy', accessibility: 'Accessibility Statement', complaints: 'Complaints Procedure' };
        _showView('policy');
        _setBreadcrumb(labels[key] || 'Policy');
        Voice.stop();
        const container = document.getElementById('view-policy');
        if (!container) return;
        container.innerHTML = `<div class="policy-page">${POLICY_TEXT[key] || '<p>Policy not found.</p>'}</div>`;
    }

    // ── Learner Feedback ──────────────────────────────────────
    function showFeedback() {
        _showView('feedback');
        _setBreadcrumb('Course Feedback');
        Voice.stop();
        const container = document.getElementById('view-feedback');
        if (!container) return;
        const saved = Store.get('feedback_submitted');
        if (saved) {
            container.innerHTML = `
<div class="feedback-page">
  <div class="feedback-thankyou">
    <div class="feedback-ty-icon">⭐</div>
    <h2>Thank you for your feedback!</h2>
    <p>Your responses help us improve the course for future learners.</p>
    <button class="btn-outline" onclick="App._resetFeedback()">Submit New Feedback</button>
  </div>
</div>`;
            return;
        }
        container.innerHTML = `
<div class="feedback-page">
  <div class="feedback-header">
    <h1 class="feedback-title">⭐ Course Feedback</h1>
    <p class="feedback-desc">Your feedback helps us maintain the quality of this programme and is used in our annual CPD review. It takes less than 2 minutes.</p>
  </div>
  <form class="feedback-form" onsubmit="App._submitFeedback(event)">
    <div class="feedback-q">
      <label>Overall, how would you rate this course?</label>
      <div class="star-rating" id="star-rating">
        ${[5,4,3,2,1].map(n=>`<label class="star-label"><input type="radio" name="rating" value="${n}" required><span>${'★'.repeat(n)}</span></label>`).join('')}
      </div>
    </div>
    <div class="feedback-q">
      <label>How relevant was the content to your business needs?</label>
      <div class="feedback-scale">
        ${['Not at all relevant','Slightly relevant','Quite relevant','Very relevant','Extremely relevant'].map((l,i)=>`
        <label class="scale-opt"><input type="radio" name="relevance" value="${i+1}" required><span>${l}</span></label>`).join('')}
      </div>
    </div>
    <div class="feedback-q">
      <label>How likely are you to recommend this course to a colleague?</label>
      <div class="feedback-scale feedback-scale-row">
        ${[1,2,3,4,5,6,7,8,9,10].map(n=>`
        <label class="scale-num"><input type="radio" name="nps" value="${n}" required><span>${n}</span></label>`).join('')}
      </div>
      <div class="scale-endpoints"><span>Not at all likely</span><span>Extremely likely</span></div>
    </div>
    <div class="feedback-q">
      <label>Which module did you find most valuable and why?</label>
      <textarea name="best_module" class="worksheet-textarea" rows="2" placeholder="e.g. Module 3 — AI Marketing, because it gave me immediately actionable content ideas..."></textarea>
    </div>
    <div class="feedback-q">
      <label>What could we improve or add to make this course even better?</label>
      <textarea name="improvements" class="worksheet-textarea" rows="3" placeholder="Any content gaps, pace issues, technical problems, or suggestions..."></textarea>
    </div>
    <div class="feedback-q">
      <label>Would you like to share a testimonial we can use on our website? (optional)</label>
      <textarea name="testimonial" class="worksheet-textarea" rows="2" placeholder="Your name and a sentence about your experience (leave blank to skip)..."></textarea>
    </div>
    <button type="submit" class="btn-primary feedback-submit-btn">Submit Feedback</button>
  </form>
</div>`;
    }

    function _submitFeedback(e) {
        e.preventDefault();
        const fd = new FormData(e.target);
        const data = {};
        fd.forEach((v, k) => { data[k] = v; });
        data.submitted_at = new Date().toISOString();
        data.progress = Store.countCompleted() + ' lessons completed';
        Store.set('feedback_submitted', 'true');
        Store.set('feedback_data', JSON.stringify(data));
        showFeedback(); // re-render thank-you state
        toast('Thank you! Your feedback has been recorded.', 'success');
    }

    function _resetFeedback() {
        Store.set('feedback_submitted', '');
        showFeedback();
    }

    // ── Pre-Course Needs Assessment ───────────────────────────
    function _showNeedsAssessment() {
        if (Store.get('needs_assessment_done')) return;
        const modal = document.createElement('div');
        modal.id        = 'needs-modal';
        modal.className = 'modal-overlay';
        modal.innerHTML = `
<div class="modal-box needs-modal-box" role="dialog" aria-modal="true">
  <div class="needs-modal-header">
    <img src="img/penshaw-view-logo.svg" alt="Penshaw View Training" class="modal-logo-img" style="width:160px">
    <h2>Welcome to the AI For Business Growth Masterclass</h2>
    <p class="modal-sub">Before you begin, please answer 4 quick questions to help us understand your starting point. This takes under a minute.</p>
  </div>
  <form class="needs-form" onsubmit="App._submitNeedsAssessment(event)">
    ${PRE_ASSESSMENT_QUESTIONS.map(q => `
    <div class="needs-q">
      <label class="needs-label">${q.question}</label>
      ${q.type === 'radio' ? `
      <div class="needs-options">
        ${q.options.map(o => `<label class="needs-opt"><input type="radio" name="${q.id}" value="${o}" ${q.id !== 'challenge' ? 'required' : ''}><span>${o}</span></label>`).join('')}
      </div>` : `
      <textarea name="${q.id}" class="worksheet-textarea" rows="2" placeholder="${q.placeholder}"></textarea>`}
    </div>`).join('')}
    <button type="submit" class="btn-primary needs-submit-btn">Start Course →</button>
  </form>
</div>`;
        document.body.appendChild(modal);
        setTimeout(() => modal.classList.add('visible'), 10);
    }

    function _submitNeedsAssessment(e) {
        e.preventDefault();
        const fd = new FormData(e.target);
        const data = {};
        fd.forEach((v, k) => { data[k] = v; });
        Store.set('needs_assessment_done', 'true');
        Store.set('needs_assessment_data', JSON.stringify(data));
        const m = document.getElementById('needs-modal');
        if (m) { m.classList.remove('visible'); setTimeout(() => m.remove(), 300); }
    }

    // ── Module Intro Video ────────────────────────────────
    function _renderModuleVideo(mod) {
        return `
<div class="module-video-section">
  <div class="module-video-label">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
    Module Introduction Video
  </div>
  <div class="module-video-wrap">
    <iframe
      src="${mod.videoUrl}"
      title="Module ${mod.id} Introduction — ${_esc(mod.title)}"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      loading="lazy"
      class="module-video-iframe">
    </iframe>
  </div>
</div>`;
    }

    // ── Cheat Sheet Download ──────────────────────────────
    function _downloadCheatSheet(modId) {
        const mod = MODULES.find(m => m.id === modId);
        if (!mod) return;
        let text = mod.title.toUpperCase() + ' — QUICK REFERENCE CHEAT SHEET\n';
        text += 'AI For Business Growth Masterclass — Penshaw View Training\n';
        text += '='.repeat(60) + '\n\n';
        mod.lessons.forEach(lesson => {
            text += lesson.title + '\n' + '─'.repeat(40) + '\n';
            lesson.keyPoints.forEach(p => { text += '• ' + p + '\n'; });
            text += '\n';
        });
        const lo = (typeof MODULE_LEARNING_OUTCOMES !== 'undefined') && MODULE_LEARNING_OUTCOMES[modId];
        if (lo) {
            text += 'LEARNING OUTCOMES\n' + '─'.repeat(40) + '\n';
            lo.outcomes.forEach(o => { text += '• ' + o + '\n'; });
        }
        text += '\n' + '─'.repeat(60) + '\nPenshaw View Training | training@penshawview.co.uk\n';
        const blob = new Blob([text], { type: 'text/plain' });
        const url  = URL.createObjectURL(blob);
        const a    = document.createElement('a');
        a.href = url; a.download = 'Module-' + modId + '-Cheat-Sheet-AI-Masterclass.txt';
        a.click(); URL.revokeObjectURL(url);
        toast('Cheat sheet downloaded!', 'success');
    }

    // ── AI Action Plan Download ───────────────────────────
    function _downloadActionPlan() {
        let text = 'MY AI BUSINESS ACTION PLAN\n';
        text += 'AI For Business Growth Masterclass — Penshaw View Training\n';
        text += 'Generated: ' + new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) + '\n';
        text += '='.repeat(60) + '\n\n';
        const result = Store.getAssessmentResult();
        if (result) text += 'Assessment Score: ' + result.score + '%' + (result.passed ? ' — PASSED' : '') + '\n\n';
        MODULES.forEach(mod => {
            const ws = (typeof MODULE_WORKSHEETS !== 'undefined') && MODULE_WORKSHEETS[mod.id];
            if (!ws) return;
            const saved = JSON.parse(Store.get('worksheet_' + mod.id) || '{}');
            text += 'MODULE ' + mod.id + ': ' + mod.title.toUpperCase() + '\n';
            text += '─'.repeat(40) + '\n';
            ws.questions.forEach(q => {
                text += '\n' + q.label + '\n';
                text += (saved[q.id] || '[Not completed]') + '\n';
            });
            text += '\n';
        });
        text += '='.repeat(60) + '\nPenshaw View Training | training@penshawview.co.uk\n';
        const blob = new Blob([text], { type: 'text/plain' });
        const url  = URL.createObjectURL(blob);
        const a    = document.createElement('a');
        a.href = url; a.download = 'My-AI-Business-Action-Plan-PenshawView.txt';
        a.click(); URL.revokeObjectURL(url);
        toast('Action plan downloaded!', 'success');
    }

    // ── LinkedIn Share ────────────────────────────────────
    function _shareOnLinkedIn() {
        const name    = (document.getElementById('cert-name-field')?.value || '').trim();
        const url     = encodeURIComponent(CONFIG.COURSE_URL || window.location.href);
        const title   = encodeURIComponent('AI For Business Growth Masterclass Certificate');
        const summary = encodeURIComponent(
            'I have just completed the AI For Business Growth Masterclass by Penshaw View Training, ' +
            'earning 3.5 CPD hours in AI tools, strategy, marketing, and automation for business.' +
            (name ? ' Completed by ' + name + '.' : '')
        );
        window.open(
            'https://www.linkedin.com/shareArticle?mini=true&url=' + url + '&title=' + title + '&summary=' + summary,
            '_blank', 'width=600,height=600,noopener'
        );
    }

    // ── Team / Corporate Pricing ──────────────────────────
    function showTeamPricing() {
        _showView('team-pricing');
        _setBreadcrumb('Team & Corporate Pricing');
        Voice.stop();
        const container = document.getElementById('view-team-pricing');
        if (!container) return;
        container.innerHTML = `
<div class="team-pricing-page">
  <div class="team-pricing-hero">
    <h1 class="team-pricing-title">Team & Corporate Pricing</h1>
    <p class="team-pricing-desc">Training your team in AI is one of the highest-ROI investments you can make. We offer discounted group licensing for businesses buying 3 or more seats, with full progress tracking and centralised reporting.</p>
  </div>
  <div class="team-tiers-grid">
    <div class="team-tier">
      <div class="team-tier-name">Individual</div>
      <div class="team-tier-price">£97 <span>per person</span></div>
      <ul class="team-tier-features">
        <li>✓ Full course access</li>
        <li>✓ CPD certificate</li>
        <li>✓ Prompt library & worksheets</li>
        <li>✓ Lifetime access</li>
      </ul>
      <button class="btn-primary" onclick="App.startPayment()">Enrol Now</button>
    </div>
    <div class="team-tier featured">
      <div class="team-tier-badge">Most Popular</div>
      <div class="team-tier-name">Team (5–20 seats)</div>
      <div class="team-tier-price">£67 <span>per person</span></div>
      <ul class="team-tier-features">
        <li>✓ Everything in Individual</li>
        <li>✓ 30% group discount</li>
        <li>✓ Manager progress dashboard</li>
        <li>✓ Team completion report</li>
        <li>✓ Branded certificates</li>
      </ul>
      <a class="btn-primary" href="mailto:${CONFIG.TEAM_CONTACT_EMAIL}?subject=Team%20Licensing%20Enquiry&body=Hi%2C%20I%20am%20interested%20in%20team%20licensing%20for%20the%20AI%20For%20Business%20Growth%20Masterclass.%20Number%20of%20seats%20needed%3A">Contact Us</a>
    </div>
    <div class="team-tier">
      <div class="team-tier-name">Corporate (20+ seats)</div>
      <div class="team-tier-price">Custom <span>pricing</span></div>
      <ul class="team-tier-features">
        <li>✓ Everything in Team</li>
        <li>✓ Volume discount (40%+)</li>
        <li>✓ Custom branding option</li>
        <li>✓ Dedicated account manager</li>
        <li>✓ Bespoke content modules</li>
        <li>✓ Invoice payment available</li>
      </ul>
      <a class="btn-primary" href="mailto:${CONFIG.TEAM_CONTACT_EMAIL}?subject=Corporate%20Licensing%20Enquiry">Get a Quote</a>
    </div>
  </div>
  <div class="team-guarantee">
    <div class="team-guarantee-icon">🛡</div>
    <div>
      <strong>14-Day Money-Back Guarantee</strong>
      <p>If your team is not satisfied within 14 days of enrolment and fewer than 20% of lessons have been completed, we offer a full refund.</p>
    </div>
  </div>
  <div class="team-contact-box">
    <h3>Have a question before buying?</h3>
    <p>Email us at <a href="mailto:${CONFIG.TEAM_CONTACT_EMAIL}">${CONFIG.TEAM_CONTACT_EMAIL}</a> and we will respond within one working day.</p>
  </div>
</div>`;
    }

    // ── Prompt Library ────────────────────────────────────────
    function showPromptLibrary() {
        _showView('prompts');
        _setBreadcrumb('Prompt Library');
        Voice.stop();

        const container = document.getElementById('view-prompts');
        if (!container) return;

        container.innerHTML = `
<div class="prompts-page">
  <div class="prompts-hero">
    <h1 class="prompts-hero-title">💬 Business AI Prompt Library</h1>
    <p class="prompts-hero-desc">70+ ready-to-use prompts across every business function. Click any prompt to copy it, then paste straight into ChatGPT, Claude, or Gemini. Replace the <span class="prompt-placeholder-badge">[BRACKETS]</span> with your own details.</p>
    <div class="prompts-search-wrap">
      <input type="text" class="prompts-search" id="prompt-search" placeholder="Search prompts..." oninput="App._filterPrompts(this.value)">
    </div>
  </div>
  <div class="prompts-categories" id="prompts-categories">
    ${PROMPT_LIBRARY.map((cat, ci) => `
    <div class="prompt-cat-section" data-category="${ci}">
      <div class="prompt-cat-header">
        <span class="prompt-cat-icon">${cat.icon}</span>
        <h2 class="prompt-cat-title">${cat.category}</h2>
        <span class="prompt-cat-count">${cat.prompts.length} prompts</span>
      </div>
      <div class="prompt-cards-grid">
        ${cat.prompts.map((p, pi) => `
        <div class="prompt-card" data-title="${_esc(p.title.toLowerCase())}" data-text="${_esc(p.prompt.toLowerCase())}">
          <div class="prompt-card-title">${p.title}</div>
          <div class="prompt-card-preview">${_esc(p.prompt.substring(0, 120))}...</div>
          <button class="prompt-copy-btn" onclick="App._copyPrompt(${ci},${pi},this)" style="--cat-color:${cat.color}">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
            Copy Prompt
          </button>
        </div>`).join('')}
      </div>
    </div>`).join('')}
  </div>
  <div class="prompts-download-bar">
    <span>Want all prompts as a document?</span>
    <button class="btn-primary" onclick="App._downloadPrompts()">⬇ Download Full Prompt Pack</button>
  </div>
</div>`;
    }

    function _copyPrompt(catIdx, promptIdx, btn) {
        const text = PROMPT_LIBRARY[catIdx].prompts[promptIdx].prompt;
        navigator.clipboard.writeText(text).then(() => {
            btn.innerHTML = '✓ Copied!';
            btn.classList.add('copied');
            setTimeout(() => {
                btn.innerHTML = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copy Prompt`;
                btn.classList.remove('copied');
            }, 2000);
        }).catch(() => {
            // Fallback for file:// protocol
            const ta = document.createElement('textarea');
            ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
            document.body.appendChild(ta); ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
            btn.innerHTML = '✓ Copied!'; btn.classList.add('copied');
            setTimeout(() => {
                btn.innerHTML = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copy Prompt`;
                btn.classList.remove('copied');
            }, 2000);
        });
    }

    function _filterPrompts(query) {
        const q = query.toLowerCase().trim();
        document.querySelectorAll('.prompt-card').forEach(card => {
            const match = !q || card.dataset.title.includes(q) || card.dataset.text.includes(q);
            card.style.display = match ? '' : 'none';
        });
        document.querySelectorAll('.prompt-cat-section').forEach(section => {
            const visible = [...section.querySelectorAll('.prompt-card')].some(c => c.style.display !== 'none');
            section.style.display = visible ? '' : 'none';
        });
    }

    function _downloadPrompts() {
        let text = 'AI FOR BUSINESS GROWTH MASTERCLASS\nBusiness AI Prompt Library — Penshaw View Training\n';
        text += '='.repeat(60) + '\n\n';
        PROMPT_LIBRARY.forEach(cat => {
            text += `\n${cat.icon} ${cat.category.toUpperCase()}\n${'─'.repeat(40)}\n\n`;
            cat.prompts.forEach(p => {
                text += `${p.title}\n${p.prompt}\n\n`;
            });
        });
        const blob = new Blob([text], { type: 'text/plain' });
        const url  = URL.createObjectURL(blob);
        const a    = document.createElement('a');
        a.href = url; a.download = 'AI-Business-Prompt-Library-PenshawView.txt';
        a.click(); URL.revokeObjectURL(url);
        toast('Prompt pack downloaded!', 'success');
    }

    // ── View Management ───────────────────────────────────────
    function _showView(name) {
        ['home','module','lesson','assessment','certificate','prompts','about','policy','feedback','team-pricing'].forEach(v => {
            const el = document.getElementById(`view-${v}`);
            if (!el) return;
            if (v === name) {
                el.style.display = 'block';
                el.classList.add('active');
            } else {
                el.style.display = 'none';
                el.classList.remove('active');
            }
        });
        _closeMobileSidebar();
    }

    function _setBreadcrumb(part1, part2) {
        const bc = document.getElementById('breadcrumb');
        if (!bc) return;
        if (!part2) {
            bc.innerHTML = `<span class="bc-current">${part1}</span>`;
        } else {
            bc.innerHTML = `<span onclick="App.showModule(${_currentModuleId})" style="cursor:pointer">${part1}</span><span class="bc-sep">›</span><span class="bc-current">${part2}</span>`;
        }
    }

    function _updateAuthUI(user) {
        // Show logged-in state — could add user name display to header
        const timeEl = document.getElementById('time-display');
        if (timeEl) timeEl.title = `Logged in as ${Auth.getUserName()}`;
    }

    // ── Public API ────────────────────────────────────────────
    function showHome() {
        _showCourseHome();
        _setBreadcrumb('Home');
    }

    function toast(msg, type) {
        const el = document.getElementById('toast');
        if (!el) return;
        el.textContent  = msg;
        el.className    = `toast show ${type || ''}`;
        clearTimeout(el._timer);
        el._timer = setTimeout(() => el.classList.remove('show'), 4000);
    }

    return {
        init, showHome, showModule, showLesson, startAssessment, showCertificate,
        showPromptLibrary, showAbout, showPolicy, showFeedback, showTeamPricing, startPayment, toast,
        _switchTab, _handleLogin, _handleRegister, _handleForgot, _demoAccess,
        _toggleSidebarModule, _onAssessmentComplete, _applyPromo,
        _saveWorksheet, _printWorksheet, _copyPrompt, _filterPrompts, _downloadPrompts,
        _downloadCheatSheet, _downloadActionPlan, _shareOnLinkedIn,
        _submitFeedback, _resetFeedback, _submitNeedsAssessment,
    };

})();

// ── Entry Point ───────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    Payment.init();
    Voice.attachControls();
    App.init();
    _updateProgress_global();
});

function _updateProgress_global() {
    // Called at startup to sync progress UI before auth resolves
    const total = MODULES.reduce((s, m) => s + m.lessons.length, 0);
    const done  = Store.countCompleted();
    const pct   = total ? Math.round(done / total * 100) : 0;
    const el    = document.getElementById('overall-fill');
    if (el) el.style.width = pct + '%';
    const pctEl = document.getElementById('overall-pct');
    if (pctEl) pctEl.textContent = pct + '%';
    const timeEl = document.getElementById('time-display');
    if (timeEl) timeEl.textContent = Store.formatTime(Store.getTime()) + ' learning time';
}
