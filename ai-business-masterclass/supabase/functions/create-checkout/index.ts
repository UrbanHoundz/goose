// Supabase Edge Function — creates a Stripe Checkout session
// Deploy: supabase functions deploy create-checkout --no-verify-jwt

import { serve } from 'https://deno.land/std@0.177.0/http/server.ts';
import Stripe from 'https://esm.sh/stripe@13.11.0?target=deno';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY')!, {
    apiVersion: '2023-10-16',
    httpClient: Stripe.createFetchHttpClient(),
});

const corsHeaders = {
    'Access-Control-Allow-Origin':  '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
    if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });

    try {
        // Verify the caller is authenticated
        const authHeader = req.headers.get('Authorization');
        if (!authHeader) return new Response('Unauthorized', { status: 401 });

        const supabase = createClient(
            Deno.env.get('SUPABASE_URL')!,
            Deno.env.get('SUPABASE_ANON_KEY')!,
            { global: { headers: { Authorization: authHeader } } }
        );
        const { data: { user }, error } = await supabase.auth.getUser();
        if (error || !user) return new Response('Unauthorized', { status: 401 });

        const { origin } = await req.json();
        const successUrl  = `${origin}?payment=success&session_id={CHECKOUT_SESSION_ID}`;
        const cancelUrl   = `${origin}?payment=cancelled`;

        const session = await stripe.checkout.sessions.create({
            mode:               'payment',
            payment_method_types: ['card'],
            customer_email:     user.email,
            client_reference_id: user.id,
            line_items: [{
                price_data: {
                    currency:     'gbp',
                    unit_amount:  9700,
                    product_data: {
                        name:        'AI For Business Growth Masterclass',
                        description: 'Lifetime access — 8 modules, 100+ questions, certificate',
                        images:      [],
                    },
                },
                quantity: 1,
            }],
            success_url: successUrl,
            cancel_url:  cancelUrl,
            metadata: { user_id: user.id },
        });

        return new Response(
            JSON.stringify({ url: session.url, session_id: session.id }),
            { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
    } catch (err) {
        console.error(err);
        return new Response(
            JSON.stringify({ error: (err as Error).message }),
            { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
    }
});
