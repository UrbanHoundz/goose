// ============================================================
// CONFIGURATION — AI For Business Growth Masterclass
// ============================================================
// STEP 1: Fill in your Supabase credentials
//   → https://supabase.com/dashboard/project/YOUR_PROJECT/settings/api
// STEP 2: Fill in your Stripe publishable key
//   → https://dashboard.stripe.com/apikeys
// STEP 3: Deploy Supabase Edge Functions (see SETUP.md)
// ============================================================

const CONFIG = {

    // ── ElevenLabs AI Voice ───────────────────────────────────
    // Sign up free at elevenlabs.io — 10,000 chars/month free
    // Replace with your API key to enable AI voice narration
    ELEVENLABS_API_KEY:  'YOUR_ELEVENLABS_API_KEY',
    // British male voices (copy the ID of your preferred voice):
    // George: JBFqnCBsd6RMkjVDRZzb  (British, warm, authoritative — recommended)
    // Callum: N2lVS1w4EtoT3dr4eOWO  (British, confident)
    // Harry:  SOYHLrjzK2X1ezoPC6cr  (British, natural)
    // Thomas: GBv7mTt0atIp3Br8iCZE  (British, calm)
    ELEVENLABS_VOICE_ID: 'JBFqnCBsd6RMkjVDRZzb',

    // ── Supabase ──────────────────────────────────────────
    SUPABASE_URL:      'https://YOUR_PROJECT_REF.supabase.co',
    SUPABASE_ANON_KEY: 'YOUR_SUPABASE_ANON_KEY',

    // ── Stripe ────────────────────────────────────────────
    // Use pk_test_... for testing, pk_live_... for production
    STRIPE_PUBLISHABLE_KEY: 'pk_test_YOUR_STRIPE_PUBLISHABLE_KEY',

    // ── Course Pricing ────────────────────────────────────
    COURSE_PRICE_PENCE:  9700,       // 9700 = £97.00
    COURSE_CURRENCY:     'gbp',
    COURSE_PRICE_LABEL:  '£97',
    COURSE_NAME:         'AI For Business Growth Masterclass',

    // ── Assessment ────────────────────────────────────────
    PASS_MARK:           70,         // percentage required to pass
    QUESTIONS_PER_EXAM:  30,         // random subset drawn from bank

    // ── App ───────────────────────────────────────────────
    APP_NAME:            'AI Business Masterclass',
    SUPPORT_EMAIL:       'training@penshawview.co.uk',
    TEAM_CONTACT_EMAIL:  'training@penshawview.co.uk',

    // ── Discount Codes ────────────────────────────────────
    // Add your own codes here (code → percentage discount)
    DISCOUNT_CODES: {
        'EARLYBIRD': 20,   // 20% off
        'LINKEDIN':  15,   // 15% off
        'TEAM10':    10,   // 10% off for corporate enquiries
    },

    // ── Course URL (for LinkedIn sharing) ────────────────
    // Replace with your actual course URL once deployed
    COURSE_URL: 'https://yourwebsite.com/course',
};
