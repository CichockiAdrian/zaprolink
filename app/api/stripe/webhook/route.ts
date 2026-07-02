import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

type StripeEvent = {
  id: string;
  type: string;
  data: {
    object: {
      id?: string;
      metadata?: Record<string, string>;
      payment_status?: string;
      subscription?: string;
    };
  };
};

function parseStripeSignature(signature: string) {
  return signature.split(',').reduce<{ timestamp?: string; signatures: string[] }>((acc, part) => {
    const [key, value] = part.split('=');
    if (key === 't') acc.timestamp = value;
    if (key === 'v1' && value) acc.signatures.push(value);
    return acc;
  }, { signatures: [] });
}

async function createSignature(payload: string, secret: string) {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(payload));
  return Array.from(new Uint8Array(signature))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
}

function constantTimeEqual(a: string, b: string) {
  if (a.length !== b.length) return false;

  let result = 0;
  for (let i = 0; i < a.length; i += 1) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}

export async function POST(request: Request) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    return NextResponse.json({ error: 'Brakuje konfiguracji webhooka Stripe.' }, { status: 503 });
  }

  const signature = request.headers.get('stripe-signature');
  if (!signature) {
    return NextResponse.json({ error: 'Brakuje podpisu Stripe.' }, { status: 400 });
  }

  const rawBody = await request.text();
  const { timestamp, signatures } = parseStripeSignature(signature);
  if (!timestamp || signatures.length === 0) {
    return NextResponse.json({ error: 'Nieprawidłowy podpis Stripe.' }, { status: 400 });
  }

  const expectedSignature = await createSignature(`${timestamp}.${rawBody}`, webhookSecret);
  if (!signatures.some((candidate) => constantTimeEqual(candidate, expectedSignature))) {
    return NextResponse.json({ error: 'Nieprawidłowy podpis Stripe.' }, { status: 400 });
  }

  let event: StripeEvent;
  try {
    event = JSON.parse(rawBody) as StripeEvent;
  } catch {
    return NextResponse.json({ error: 'Nieprawidłowe dane webhooka Stripe.' }, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    console.info('Stripe checkout completed', {
      sessionId: session.id,
      plan: session.metadata?.plan,
      invitationId: session.metadata?.invitation_id,
      paymentStatus: session.payment_status,
      subscription: session.subscription,
    });
  }

  return NextResponse.json({ received: true });
}
