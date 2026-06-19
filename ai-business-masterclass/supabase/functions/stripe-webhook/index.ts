// Supabase Edge Function — handles Stripe webhook events
// Deploy: supabase functions deploy stripe-webhook --no-verify-jwt
// Set webhook secret: supabase secrets set STRIPE_WEBHOOK_SECRET=whsec_...

import { serve } from 'https://deno.land/std@0.177.0/http/server.ts';
import Stripe from 'https://esm.sh/stripe@13.11.0?target=deno';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY')!, {
    apiVersion: '2023-10-16',
    httpClient: Stripe.createFetchHttpClient(),
});

const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
);

serve(async (req) => {
    const body      = await req.text();
    const signature = req.headers.get('stripe-signature')!;
    const secret    = Deno.env.get('STRIPE_WEBHOOK_SECRET')!;

    let event: Stripe.Event;
    try {
        event = await stripe.webhooks.constructEventAsync(body, signature, secret);
    } catch (err) {
        console.error('Webhook signature verification failed:', err);
        return new Response('Invalid signature', { status: 400 });
    }

    if (event.type === 'checkout.session.completed') {
        const session = event.data.object as Stripe.Checkout.Session;
        const userId  = session.metadata?.user_id || session.client_reference_id;

        if (!userId) {
            console.error('No user_id in session metadata');
            return new Response('Missing user_id', { status: 400 });
        }

        // Upsert enrollment record as active
        const { error } = await supabase
            .from('enrollments')
            .upsert({
                user_id:          userId,
                stripe_session_id: session.id,
                status:           'active',
                enrolled_at:      new Date().toISOString(),
            }, { onConflict: 'user_id' });

        if (error) {
            console.error('Failed to record enrollment:', error);
            return new Response('Database error', { status: 500 });
        }

        console.log(`Enrollment activated for user ${userId}`);
    }

    return new Response(JSON.stringify({ received: true }), {
        headers: { 'Content-Type': 'application/json' },
    });
});
