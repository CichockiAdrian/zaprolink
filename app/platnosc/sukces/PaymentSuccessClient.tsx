'use client'

import { useEffect } from 'react';
import type { CheckoutPlanId } from '../../lib/plans';

type PaymentSuccessClientProps = {
  plan: CheckoutPlanId | null;
  sessionId: string | null;
};

export default function PaymentSuccessClient({ plan, sessionId }: PaymentSuccessClientProps) {
  useEffect(() => {
    if (!plan) return;

    window.localStorage.setItem('zaprolink_active_plan', JSON.stringify({
      plan,
      sessionId,
      activatedAt: new Date().toISOString(),
    }));
  }, [plan, sessionId]);

  return null;
}
