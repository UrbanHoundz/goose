// ── Payment Module (Stripe) ───────────────────────────────────────

const Payment = (() => {
    let _stripe = null;

    function init() {
        if (typeof Stripe === 'undefined') {
            console.warn('Stripe.js not loaded');
            return;
        }
        _stripe = Stripe(CONFIG.STRIPE_PUBLISHABLE_KEY);
    }

    // Call Supabase Edge Function to create a Stripe Checkout Session,
    // then redirect to Stripe-hosted payment page.
    async function startCheckout() {
        const user = Auth.currentUser();
        if (!user) throw new Error('You must be logged in to purchase.');

        const supabaseUrl = CONFIG.SUPABASE_URL;
        const anonKey    = CONFIG.SUPABASE_ANON_KEY;

        // Get auth token
        let token = '';
        try {
            if (typeof supabase !== 'undefined') {
                const client = supabase.createClient(supabaseUrl, anonKey);
                const { data: { session } } = await client.auth.getSession();
                token = session?.access_token || '';
            }
        } catch (_) {}

        const res = await fetch(`${supabaseUrl}/functions/v1/create-checkout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token || anonKey}`,
                'apikey': anonKey,
            },
            body: JSON.stringify({
                price_pence: CONFIG.COURSE_PRICE_PENCE,
                currency:    CONFIG.COURSE_CURRENCY,
                course_name: CONFIG.COURSE_NAME,
                success_url: window.location.href + (window.location.href.includes('?') ? '&' : '?') + 'payment=success&session_id={CHECKOUT_SESSION_ID}',
                cancel_url:  window.location.href + (window.location.href.includes('?') ? '&' : '?') + 'payment=cancelled',
                user_id:     user.id,
                user_email:  user.email,
            })
        });

        if (!res.ok) {
            // Demo / not-yet-configured fallback
            const err = await res.text();
            throw new Error('Checkout unavailable: ' + err);
        }

        const { url } = await res.json();
        if (url) window.location.href = url;
    }

    // Called on page load — check if returning from Stripe success
    async function handleReturn() {
        const params = new URLSearchParams(window.location.search);
        const status    = params.get('payment');
        const sessionId = params.get('session_id');

        if (status === 'success' && sessionId) {
            await Auth.markEnrolled(sessionId);
            // Clean URL
            const clean = window.location.pathname;
            window.history.replaceState({}, '', clean);
            return 'success';
        }
        if (status === 'cancelled') {
            const clean = window.location.pathname;
            window.history.replaceState({}, '', clean);
            return 'cancelled';
        }
        return null;
    }

    // Activate for demo / testing — skips real payment
    async function activateDemoAccess() {
        await Auth.markEnrolled('demo');
        Store.set('enrolled', 'true');
    }

    return { init, startCheckout, handleReturn, activateDemoAccess };
})();
