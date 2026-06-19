// ── Auth Module (Supabase) ────────────────────────────────────────

const Auth = (() => {
    let _supabase = null;
    let _currentUser = null;
    let _onAuthChange = null;

    function init() {
        if (typeof supabase === 'undefined') {
            console.warn('Supabase SDK not loaded — running in demo mode');
            return;
        }
        _supabase = supabase.createClient(CONFIG.SUPABASE_URL, CONFIG.SUPABASE_ANON_KEY);
        _supabase.auth.onAuthStateChange((event, session) => {
            _currentUser = session?.user ?? null;
            if (_onAuthChange) _onAuthChange(event, _currentUser);
        });
    }

    async function register(email, password, fullName) {
        if (!_supabase) return _demoAuth(email, fullName);
        const { data, error } = await _supabase.auth.signUp({
            email, password,
            options: { data: { full_name: fullName } }
        });
        if (error) throw new Error(error.message);
        _currentUser = data.user;
        return data.user;
    }

    async function login(email, password) {
        if (!_supabase) return _demoAuth(email, '');
        const { data, error } = await _supabase.auth.signInWithPassword({ email, password });
        if (error) throw new Error(error.message);
        _currentUser = data.user;
        return data.user;
    }

    async function logout() {
        if (!_supabase) {
            _currentUser = null;
            Store.clear();
            return;
        }
        await _supabase.auth.signOut();
        _currentUser = null;
        Store.clear();
    }

    async function getUser() {
        if (!_supabase) return _currentUser;
        const { data: { user } } = await _supabase.auth.getUser();
        _currentUser = user;
        return user;
    }

    async function isEnrolled() {
        if (!_currentUser) return false;
        // Check local cache first
        if (Store.get('enrolled') === 'true') return true;
        if (!_supabase) return false;
        const { data } = await _supabase
            .from('enrollments')
            .select('id')
            .eq('user_id', _currentUser.id)
            .eq('status', 'active')
            .single();
        if (data) Store.set('enrolled', 'true');
        return !!data;
    }

    async function markEnrolled(stripeSessionId) {
        Store.set('enrolled', 'true');
        if (!_supabase || !_currentUser) return;
        // Enrollment is confirmed by the webhook Edge Function.
        // Store session id locally in case webhook is delayed.
        Store.set('stripe_session', stripeSessionId || '');
    }

    async function resetPassword(email) {
        if (!_supabase) throw new Error('Auth not configured');
        const { error } = await _supabase.auth.resetPasswordForEmail(email, {
            redirectTo: window.location.origin + window.location.pathname
        });
        if (error) throw new Error(error.message);
    }

    function onAuthChange(cb) { _onAuthChange = cb; }

    // Demo mode (no Supabase configured)
    function _demoAuth(email, name) {
        const user = {
            id: 'demo-' + Date.now(),
            email,
            user_metadata: { full_name: name || email.split('@')[0] }
        };
        _currentUser = user;
        return user;
    }

    function currentUser() { return _currentUser; }
    function getUserName() {
        if (!_currentUser) return '';
        return _currentUser.user_metadata?.full_name
            || _currentUser.email?.split('@')[0]
            || 'Student';
    }

    return { init, register, login, logout, getUser, isEnrolled, markEnrolled, resetPassword, onAuthChange, currentUser, getUserName };
})();
