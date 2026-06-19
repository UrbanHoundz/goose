// ── Voice Narration Engine (Web Speech API) ───────────────────

const Voice = (() => {
    let _utterance = null;
    let _script    = '';
    let _rate      = 1.0;
    let _playing   = false;
    let _paused    = false;
    let _onProgress = null;
    let _progressTimer = null;
    let _startTime = 0;
    let _estimatedDuration = 0;

    const supported = 'speechSynthesis' in window;

    function setScript(text) {
        stop();
        _script = text || '';
    }

    function play() {
        if (!supported || !_script) return;
        if (_paused && window.speechSynthesis.paused) {
            window.speechSynthesis.resume();
            _paused = false;
            _playing = true;
            _startProgressTimer();
            _updateUI('playing');
            return;
        }
        stop();
        _utterance = new SpeechSynthesisUtterance(_script);
        _utterance.rate  = _rate;
        _utterance.pitch = 1.0;
        _utterance.lang  = 'en-GB';

        // Pick a quality voice if available
        const voices = window.speechSynthesis.getVoices();
        const preferred = voices.find(v =>
            (v.name.includes('Daniel') || v.name.includes('Karen') ||
             v.name.includes('Google UK') || v.name.includes('Microsoft George') ||
             v.name.includes('Samantha')) && v.lang.startsWith('en')
        ) || voices.find(v => v.lang.startsWith('en-GB'))
          || voices.find(v => v.lang.startsWith('en'));
        if (preferred) _utterance.voice = preferred;

        _utterance.onstart = () => {
            _playing = true; _paused = false;
            _estimatedDuration = (_script.length / 15) * (1 / _rate) * 1000;
            _startTime = Date.now();
            _startProgressTimer();
            _updateUI('playing');
        };
        _utterance.onend = () => {
            _playing = false; _paused = false;
            _stopProgressTimer();
            _updateUI('done');
            _setProgress(100);
        };
        _utterance.onerror = () => {
            _playing = false; _paused = false;
            _stopProgressTimer();
            _updateUI('error');
        };
        _utterance.onpause = () => {
            _paused = true;
            _stopProgressTimer();
            _updateUI('paused');
        };

        window.speechSynthesis.speak(_utterance);
    }

    function pause() {
        if (!supported) return;
        if (_playing && !_paused) {
            window.speechSynthesis.pause();
            _paused = true; _playing = false;
            _stopProgressTimer();
            _updateUI('paused');
        }
    }

    function stop() {
        if (!supported) return;
        window.speechSynthesis.cancel();
        _playing = false; _paused = false;
        _stopProgressTimer();
        _setProgress(0);
        _updateUI('ready');
    }

    function replay() { stop(); setTimeout(play, 100); }

    function setRate(r) {
        _rate = parseFloat(r) || 1.0;
        if (_playing || _paused) replay();
    }

    function isPlaying() { return _playing; }
    function isPaused()  { return _paused; }

    function _startProgressTimer() {
        _stopProgressTimer();
        _progressTimer = setInterval(() => {
            if (_estimatedDuration > 0) {
                const elapsed = Date.now() - _startTime;
                const pct = Math.min(95, (elapsed / _estimatedDuration) * 100);
                _setProgress(pct);
            }
        }, 500);
    }

    function _stopProgressTimer() {
        if (_progressTimer) { clearInterval(_progressTimer); _progressTimer = null; }
    }

    function _setProgress(pct) {
        const bar = document.getElementById('voice-progress');
        if (bar) bar.style.width = pct + '%';
    }

    function _updateUI(state) {
        const playBtn   = document.getElementById('voice-play');
        const pauseBtn  = document.getElementById('voice-pause');
        const statusTxt = document.getElementById('voice-status');
        const dot       = document.getElementById('voice-dot');

        if (!playBtn) return;

        const labels = {
            playing: { play: false, pause: true,  status: 'Playing narration...', dot: 'playing' },
            paused:  { play: true,  pause: false, status: 'Paused',               dot: 'paused'  },
            done:    { play: true,  pause: false, status: 'Narration complete',    dot: ''        },
            error:   { play: true,  pause: false, status: 'Voice unavailable in this browser', dot: '' },
            ready:   { play: true,  pause: false, status: 'Click Play to start narration', dot: '' },
        };
        const cfg = labels[state] || labels.ready;

        playBtn.disabled  = !cfg.play;
        pauseBtn.disabled = !cfg.pause;
        if (statusTxt) statusTxt.textContent = cfg.status;
        if (dot) {
            dot.className = 'voice-status-dot';
            if (cfg.dot) dot.classList.add(cfg.dot);
        }
    }

    function attachControls() {
        const playBtn   = document.getElementById('voice-play');
        const pauseBtn  = document.getElementById('voice-pause');
        const replayBtn = document.getElementById('voice-replay');
        const speedSel  = document.getElementById('voice-speed');

        if (playBtn)   playBtn.addEventListener('click',   play);
        if (pauseBtn)  pauseBtn.addEventListener('click',  pause);
        if (replayBtn) replayBtn.addEventListener('click', replay);
        if (speedSel)  speedSel.addEventListener('change', e => setRate(e.target.value));

        if (!supported) {
            const panel = document.getElementById('voice-panel');
            if (panel) panel.style.display = 'none';
        }
    }

    return { supported, setScript, play, pause, stop, replay, setRate, isPlaying, isPaused, attachControls };
})();
