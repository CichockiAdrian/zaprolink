export const checkoutPlanIds = ['starter', 'plus', 'pro'] as const;

export type CheckoutPlanId = (typeof checkoutPlanIds)[number];

export const checkoutPlans: Record<CheckoutPlanId, {
  name: string;
  mode: 'payment' | 'subscription';
  stripePriceEnv: string;
}> = {
  starter: {
    name: 'Starter',
    mode: 'payment',
    stripePriceEnv: 'STRIPE_PRICE_STARTER',
  },
  plus: {
    name: 'Plus',
    mode: 'payment',
    stripePriceEnv: 'STRIPE_PRICE_PLUS',
  },
  pro: {
    name: 'Pro',
    mode: 'subscription',
    stripePriceEnv: 'STRIPE_PRICE_PRO',
  },
};

export function isCheckoutPlanId(value: unknown): value is CheckoutPlanId {
  return typeof value === 'string' && checkoutPlanIds.includes(value as CheckoutPlanId);
}
