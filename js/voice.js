// ── Voice Narration Engine (ElevenLabs AI + Web Speech fallback) ──

const Voice = (() => {
    let _script    = '';
    let _rate      = 1.0;
    let _playing   = false;
    let _paused    = false;
    let _audio     = null;
    let _utterance = null;
    let _progressTimer = null;
    let _startTime = 0;
    let _estimatedDuration = 0;

    const supported = 'speechSynthesis' in window;

    function _useElevenLabs() {
        return CONFIG.ELEVENLABS_API_KEY &&
               !CONFIG.ELEVENLABS_API_KEY.includes('YOUR_ELEVEN');
    }

    // Strip HTML tags and tidy whitespace so TTS gets clean text
    function _cleanText(raw) {
        if (!raw) return '';
        return raw
            .replace(/<br\s*\/?>/gi, '. ')
            .replace(/<\/p>/gi, '. ')
            .replace(/<\/li>/gi, '. ')
            .replace(/<\/h[1-6]>/gi, '. ')
            .replace(/<[^>]+>/g, ' ')
            .replace(/&amp;/g, '&')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&quot;/g, '"')
            .replace(/&#39;/g, "'")
            .replace(/\s{2,}/g, ' ')
            .replace(/\.\s*\./g, '.')
            .trim();
    }

    function setScript(text) { stop(); _script = _cleanText(text); }

    async function play() {
        if (!_script) return;
        if (_paused && _audio && !_audio.ended) {
            await _audio.play();
            _paused = false; _playing = true;
            _startProgressTimer();
            _updateUI('playing');
            return;
        }
        stop();
        _updateUI('loading');
        if (_useElevenLabs()) {
            await _playElevenLabs();
        } else {
            _playSpeechSynthesis();
        }
    }

    async function _playElevenLabs() {
        try {
            const voiceId = CONFIG.ELEVENLABS_VOICE_ID || 'pNInz6obpgDQGcFmaJgB';
            const res = await fetch(
                `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
                method: 'POST',
                headers: {
                    'xi-api-key':   CONFIG.ELEVENLABS_API_KEY,
                    'Content-Type': 'application/json',
                    'Accept':       'audio/mpeg',
                },
                body: JSON.stringify({
                    text: _script,
                    // eleven_turbo_v2_5 sounds far more natural than v1
                    model_id: 'eleven_turbo_v2_5',
                    voice_settings: {
                        stability:        0.38,  // lower = more expressive natural variation
                        similarity_boost: 0.78,
                        style:            0.60,  // higher = more emotive delivery
                        use_speaker_boost: true
                    }
                })
            });
            if (!res.ok) throw new Error('ElevenLabs: ' + res.status);
            const blob = await res.blob();
            const url  = URL.createObjectURL(blob);
            _audio = new Audio(url);
            _audio.playbackRate = _rate;

            _audio.onplay = () => {
                _playing = true; _paused = false;
                _estimatedDuration = (_audio.duration || (_script.length / 12)) * 1000;
                _startTime = Date.now();
                _startProgressTimer();
                _updateUI('playing');
            };
            _audio.onended  = () => { _done(); URL.revokeObjectURL(url); };
            _audio.onerror  = () => { _stopProgressTimer(); _updateUI('error'); };
            await _audio.play();
        } catch (err) {
            console.warn('ElevenLabs failed, falling back to browser voice:', err);
            _playSpeechSynthesis();
        }
    }

    // Pick the best available voice — neural/enhanced voices sound far more human
    function _pickVoice() {
        const voices = window.speechSynthesis.getVoices();
        if (!voices.length) return null;

        // Priority list — most natural sounding first
        const priority = [
            // macOS enhanced (require macOS 14+, downloaded)
            v => v.name === 'Ava (Enhanced)',
            v => v.name === 'Zoe (Enhanced)',
            v => v.name === 'Aaron (Enhanced)',
            // macOS standard neural
            v => v.name === 'Daniel' && v.lang.startsWith('en'),
            v => v.name === 'Rishi'  && v.lang.startsWith('en'),
            v => v.name === 'Moira'  && v.lang.startsWith('en'),
            // Chrome high-quality voices
            v => v.name === 'Google UK English Male',
            v => v.name === 'Google UK English Female',
            v => v.name === 'Google US English',
            // Windows neural (Edge / Windows 11)
            v => v.name.includes('Microsoft Ryan'),
            v => v.name.includes('Microsoft Guy'),
            v => v.name.includes('Microsoft Aria'),
            v => v.name.includes('Microsoft George'),
            v => v.name.includes('Microsoft Zira'),
            // Fallback to any English-GB then English
            v => v.lang === 'en-GB',
            v => v.lang.startsWith('en'),
        ];

        for (const test of priority) {
            const found = voices.find(test);
            if (found) return found;
        }
        return null;
    }

    function _playSpeechSynthesis() {
        if (!supported) { _updateUI('error'); return; }
        stop();

        const doSpeak = () => {
            _utterance       = new SpeechSynthesisUtterance(_script);
            _utterance.rate  = _rate * 0.90;  // 90% — natural pacing, not rushed
            _utterance.pitch = 1.0;            // default pitch sounds most human
            _utterance.lang  = 'en-GB';

            const voice = _pickVoice();
            if (voice) _utterance.voice = voice;

            _utterance.onstart = () => {
                _playing = true; _paused = false;
                _estimatedDuration = (_script.length / 13) * (1 / _rate) * 1000;
                _startTime = Date.now();
                _startProgressTimer();
                _updateUI('playing');
            };
            _utterance.onend   = _done;
            _utterance.onerror = () => { _stopProgressTimer(); _updateUI('error'); };
            _utterance.onpause = () => { _paused = true; _playing = false; _stopProgressTimer(); _updateUI('paused'); };
            window.speechSynthesis.speak(_utterance);
        };

        // Voices may not be ready on first call — wait if needed
        const voices = window.speechSynthesis.getVoices();
        if (voices.length) {
            doSpeak();
        } else {
            window.speechSynthesis.addEventListener('voiceschanged', doSpeak, { once: true });
        }
    }

    function _done() {
        _playing = false; _paused = false;
        _stopProgressTimer();
        _setProgress(100);
        _updateUI('done');
    }

    function pause() {
        if (_audio && _playing) {
            _audio.pause();
            _paused = true; _playing = false;
            _stopProgressTimer(); _updateUI('paused');
        } else if (supported && _playing) {
            window.speechSynthesis.pause();
            _paused = true; _playing = false;
            _stopProgressTimer(); _updateUI('paused');
        }
    }

    function stop() {
        if (_audio)    { _audio.pause(); _audio = null; }
        if (supported)  window.speechSynthesis.cancel();
        _playing = false; _paused = false;
        _stopProgressTimer(); _setProgress(0); _updateUI('ready');
    }

    function replay() { stop(); setTimeout(play, 120); }

    function setRate(r) {
        _rate = parseFloat(r) || 1.0;
        if (_audio) _audio.playbackRate = _rate;
        if (_playing || _paused) replay();
    }

    function isPlaying() { return _playing; }
    function isPaused()  { return _paused;  }

    function _startProgressTimer() {
        _stopProgressTimer();
        _progressTimer = setInterval(() => {
            let pct;
            if (_audio && _audio.duration) {
                pct = Math.min(99, (_audio.currentTime / _audio.duration) * 100);
            } else if (_estimatedDuration > 0) {
                pct = Math.min(95, ((Date.now() - _startTime) / _estimatedDuration) * 100);
            }
            if (pct !== undefined) _setProgress(pct);
        }, 150);
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
        const waveform  = document.getElementById('voice-waveform');
        const panel     = document.getElementById('voice-panel');
        if (!playBtn) return;

        const aiLabel  = _useElevenLabs() ? 'AI Voice' : 'Voice';
        const readyMsg = _useElevenLabs() ? '🎙 AI Voice ready — click Play' : 'Click Play to start narration';
        const playMsg  = _useElevenLabs() ? '🎙 AI Voice speaking...' : 'Playing narration...';

        const states = {
            loading: { play: false, pause: false, status: `Generating ${aiLabel}...`, wave: false, panelClass: 'loading' },
            playing: { play: false, pause: true,  status: playMsg,       wave: true,  panelClass: 'playing' },
            paused:  { play: true,  pause: false, status: 'Paused',      wave: false, panelClass: '' },
            done:    { play: true,  pause: false, status: 'Complete ✓',  wave: false, panelClass: '' },
            error:   { play: true,  pause: false, status: 'Voice unavailable — check your ElevenLabs key or use Chrome', wave: false, panelClass: '' },
            ready:   { play: true,  pause: false, status: readyMsg,      wave: false, panelClass: '' },
        };
        const cfg = states[state] || states.ready;

        playBtn.disabled  = !cfg.play;
        pauseBtn.disabled = !cfg.pause;
        if (statusTxt) statusTxt.textContent = cfg.status;
        if (waveform)  waveform.classList.toggle('active', !!cfg.wave);
        if (panel) {
            panel.classList.remove('playing', 'loading');
            if (cfg.panelClass) panel.classList.add(cfg.panelClass);
        }

        if (state === 'loading') {
            playBtn.innerHTML = `<span class="btn-spinner"></span>`;
        } else {
            playBtn.innerHTML = `<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg> Play`;
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

        if (!supported && !_useElevenLabs()) {
            const panel = document.getElementById('voice-panel');
            if (panel) panel.style.display = 'none';
        }
    }

    return { supported, setScript, play, pause, stop, replay, setRate, isPlaying, isPaused, attachControls };
})();
