import { NextResponse } from 'next/server';
import { checkoutPlans, isCheckoutPlanId } from '../../lib/plans';

export const runtime = 'nodejs';

type CheckoutRequest = {
  plan?: unknown;
  invitationId?: unknown;
};

type StripeCheckoutSessionResponse = {
  url?: unknown;
  error?: {
    message?: string;
  };
};

function getBaseUrl(request: Request) {
  const configuredUrl = process.env.NEXT_PUBLIC_APP_URL;
  if (configuredUrl) return configuredUrl.replace(/\/$/, '');

  const origin = request.headers.get('origin');
  if (origin) return origin;

  return new URL(request.url).origin;
}

export async function POST(request: Request) {
  let body: CheckoutRequest;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Nieprawidłowe dane płatności.' }, { status: 400 });
  }

  if (!isCheckoutPlanId(body.plan)) {
    return NextResponse.json({ error: 'Nieznany plan płatności.' }, { status: 400 });
  }

  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeSecretKey) {
    return NextResponse.json({ error: 'Brakuje konfiguracji Stripe.' }, { status: 503 });
  }

  const plan = checkoutPlans[body.plan];
  const priceId = process.env[plan.stripePriceEnv];
  if (!priceId) {
    return NextResponse.json({ error: `Brakuje konfiguracji ceny dla planu ${plan.name}.` }, { status: 503 });
  }

  const baseUrl = getBaseUrl(request);
  const params = new URLSearchParams({
    mode: plan.mode,
    success_url: `${baseUrl}/platnosc/sukces?session_id={CHECKOUT_SESSION_ID}&plan=${body.plan}`,
    cancel_url: `${baseUrl}/platnosc/anulowano?plan=${body.plan}`,
    allow_promotion_codes: 'true',
    'line_items[0][price]': priceId,
    'line_items[0][quantity]': '1',
    'metadata[plan]': body.plan,
  });

  if (typeof body.invitationId === 'string' && body.invitationId.trim()) {
    params.set('metadata[invitation_id]', body.invitationId.trim());
  }

  const response = await fetch('https://api.stripe.com/v1/checkout/sessions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${stripeSecretKey}`,
      'Content-Type': 'application/x-www-form-urlencoded',
      'Stripe-Version': '2026-02-25.clover',
    },
    body: params,
  });

  const session = await response.json() as StripeCheckoutSessionResponse;

  if (!response.ok || typeof session.url !== 'string') {
    return NextResponse.json(
      { error: session.error?.message || 'Nie udało się rozpocząć płatności.' },
      { status: response.status || 502 }
    );
  }

  return NextResponse.json({ url: session.url });
}
