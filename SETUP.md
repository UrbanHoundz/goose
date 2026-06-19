# AI For Business Growth Masterclass — Setup Guide

This guide walks you through setting up Supabase authentication and Stripe payments so learners can register, pay, and download their certificate.

---

## 1. Prerequisites

- A [Supabase](https://supabase.com) account (free tier works)
- A [Stripe](https://stripe.com) account (test mode is fine for development)
- The [Supabase CLI](https://supabase.com/docs/guides/cli) installed (optional, for local dev)

---

## 2. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) → **New project**
2. Name it `ai-masterclass` (or anything you like)
3. Choose a region close to your audience (e.g. `eu-west-2` for UK)
4. Save the **database password** somewhere safe

---

## 3. Apply the Database Schema

In the Supabase dashboard → **SQL Editor**, paste and run the contents of:

```
supabase/migrations/001_initial.sql
```

This creates four tables: `enrollments`, `progress`, `assessment_results`, `certificates`, each with row-level security policies.

---

## 4. Get Your Supabase Credentials

In the Supabase dashboard → **Project Settings → API**:

| Setting | Where to find it |
|---|---|
| Project URL | `https://YOUR_REF.supabase.co` |
| Anon / public key | `eyJ...` under **Project API keys** |

---

## 5. Get Your Stripe Keys

In the [Stripe dashboard](https://dashboard.stripe.com) → **Developers → API keys**:

| Key | Description |
|---|---|
| Publishable key | Starts with `pk_test_` (put in config.js) |
| Secret key | Starts with `sk_test_` (used in Edge Functions only, never in client code) |

---

## 6. Update config.js

Open `js/config.js` and replace the placeholder values:

```javascript
const CONFIG = {
    SUPABASE_URL:           'https://YOUR_REF.supabase.co',
    SUPABASE_ANON_KEY:      'eyJ...YOUR_ANON_KEY...',
    STRIPE_PUBLISHABLE_KEY: 'pk_test_YOUR_STRIPE_KEY',
    COURSE_PRICE_PENCE:     9700,   // £97.00 — change if needed
    COURSE_CURRENCY:        'gbp',
    COURSE_PRICE_LABEL:     '£97',
    COURSE_NAME:            'AI For Business Growth Masterclass',
    PASS_MARK:              70,
    QUESTIONS_PER_EXAM:     30,
    APP_NAME:               'AI Business Masterclass',
    SUPPORT_EMAIL:          'support@yourdomain.com',  // ← update this
};
```

---

## 7. Deploy Supabase Edge Functions

Install the Supabase CLI then run:

```bash
supabase login
supabase link --project-ref YOUR_PROJECT_REF

# Set secrets (never commit these)
supabase secrets set STRIPE_SECRET_KEY=sk_test_...
supabase secrets set STRIPE_WEBHOOK_SECRET=whsec_...  # from step 8

# Deploy both functions
supabase functions deploy create-checkout --no-verify-jwt
supabase functions deploy stripe-webhook  --no-verify-jwt
```

---

## 8. Set Up the Stripe Webhook

1. In the Stripe dashboard → **Developers → Webhooks → Add endpoint**
2. Endpoint URL:
   ```
   https://YOUR_PROJECT_REF.supabase.co/functions/v1/stripe-webhook
   ```
3. Events to listen for: `checkout.session.completed`
4. Copy the **Signing secret** (`whsec_...`)
5. Set it as a Supabase secret:
   ```bash
   supabase secrets set STRIPE_WEBHOOK_SECRET=whsec_...
   ```

---

## 9. Enable Email Auth in Supabase

In the Supabase dashboard → **Authentication → Providers**:

- Enable **Email** provider
- Configure **Site URL** to your deployment URL (or `file://` for local testing)
- Optionally enable email confirmation (turn off for quick testing)

---

## 10. Test the Full Flow

1. Open `index.html` in a browser (or deploy to a web server)
2. Register a new account
3. Click **Enrol Now** — you'll be redirected to Stripe Checkout
4. Use test card: `4242 4242 4242 4242`, any future expiry, any CVC
5. After payment you're redirected back and enrolled automatically
6. Complete all modules and pass the assessment (70%+)
7. Download your certificate

---

## Running Without Payment (Demo Mode)

On the payment screen, click **Demo Access (No Payment)** to skip Stripe and access the full course. This is useful for testing locally without a Stripe account.

---

## File Structure

```
ai-business-masterclass/
├── index.html                      # Main application shell
├── css/
│   └── styles.css                  # All styling
├── js/
│   ├── config.js                   # ← Edit this with your credentials
│   ├── store.js                    # localStorage progress tracking
│   ├── auth.js                     # Supabase authentication
│   ├── payment.js                  # Stripe payment flow
│   ├── data-modules.js             # 7 modules, 41 lessons
│   ├── data-questions.js           # 105 quiz questions
│   ├── voice.js                    # Web Speech API narration
│   ├── quiz.js                     # Assessment engine
│   ├── cert.js                     # Canvas certificate generator
│   └── app.js                      # Application controller
└── supabase/
    ├── migrations/
    │   └── 001_initial.sql         # Database schema
    └── functions/
        ├── create-checkout/        # Stripe Checkout session creator
        │   └── index.ts
        └── stripe-webhook/         # Payment confirmation handler
            └── index.ts
```

---

## Going Live (Production Checklist)

- [ ] Switch Stripe to **live mode** keys (`pk_live_...`, `sk_live_...`)
- [ ] Update `STRIPE_SECRET_KEY` and `STRIPE_WEBHOOK_SECRET` Supabase secrets
- [ ] Update `CONFIG.STRIPE_PUBLISHABLE_KEY` in config.js to live key
- [ ] Set Supabase **Site URL** to your production domain
- [ ] Enable email confirmation in Supabase Authentication settings
- [ ] Deploy to a web host (Netlify, Vercel, GitHub Pages, or your own server)
- [ ] Update Stripe webhook endpoint to production URL
- [ ] Test with a real card in live mode
