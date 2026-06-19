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
                // No Supabase configured — skip login and payment, go straight to course
                Store.set('enrolled', 'true');
                _showCourseHome();
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
    <div class="modal-logo">🤖</div>
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
    <div class="payment-banner-sub">Get full lifetime access to all 8 modules, 100+ quiz questions, and your certificate for a single payment of <strong>${CONFIG.COURSE_PRICE_LABEL}</strong>.</div>
  </div>
  <div class="payment-banner-actions">
    <button class="btn-primary" onclick="App.startPayment()">
      💳 Enrol Now — ${CONFIG.COURSE_PRICE_LABEL}
    </button>
    <button class="btn-outline-dark" onclick="App._demoAccess()">Demo Access (No Payment)</button>
  </div>
</div>`;

        // Prepend to home view
        content.prepend(banner);
        _showCourseHome(false); // show home but locked
    }

    async function startPayment() {
        const btn = document.querySelector('[onclick="App.startPayment()"]');
        if (btn) { btn.disabled = true; btn.textContent = 'Redirecting to payment…'; }
        try {
            await Payment.startCheckout();
        } catch (ex) {
            toast('Payment unavailable: ' + (ex.message || 'Please try again.'), 'error');
            if (btn) { btn.disabled = false; btn.textContent = `💳 Enrol Now — ${CONFIG.COURSE_PRICE_LABEL}`; }
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
            return `
<div class="module-card ${completed ? 'completed' : ''}"
     style="--module-color:${mod.color}"
     onclick="${interactive ? `App.showModule(${mod.id})` : ''}"
     role="button" tabindex="0"
     onkeydown="if(event.key==='Enter'||event.key===' ')App.showModule(${mod.id})">
  ${completed ? '<div class="module-completed-badge">✓ Done</div>' : ''}
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

        const container = document.getElementById('view-module');
        const modDone   = mod.lessons.filter(l => Store.isLessonComplete(l.id)).length;
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
    </div>
  </div>
  <div class="lessons-list">
    ${mod.lessons.map((lesson, idx) => {
        const done = Store.isLessonComplete(lesson.id);
        return `
<div class="lesson-list-item ${done ? 'completed' : ''}"
     onclick="App.showLesson(${mod.id},'${lesson.id}')"
     role="button" tabindex="0"
     onkeydown="if(event.key==='Enter')App.showLesson(${mod.id},'${lesson.id}')">
  <div class="lesson-num">${done ? '✓' : idx + 1}</div>
  <div class="lesson-list-info">
    <div class="lesson-list-title">${lesson.title}</div>
    <div class="lesson-list-meta">${lesson.duration}${done ? ' · Completed' : ''}</div>
  </div>
  <div class="lesson-list-dur">${done ? '✅' : '▶'}</div>
</div>`;
    }).join('')}
  </div>
</div>`;
    }

    // ── Lesson View ───────────────────────────────────────────
    function showLesson(moduleId, lessonId) {
        const mod    = MODULES.find(m => m.id === moduleId);
        if (!mod) return;
        const lesson = mod.lessons.find(l => l.id === lessonId);
        if (!lesson) return;

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

    // ── View Management ───────────────────────────────────────
    function _showView(name) {
        ['home','module','lesson','assessment','certificate'].forEach(v => {
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

    // Expose _switchTab and _handleLogin/_handleRegister for inline onclick
    return {
        init, showHome, showModule, showLesson, startAssessment, showCertificate,
        startPayment, toast,
        _switchTab, _handleLogin, _handleRegister, _handleForgot, _demoAccess,
        _toggleSidebarModule, _onAssessmentComplete,
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
