import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { checkoutPlans, isCheckoutPlanId } from '../../lib/plans';
import PaymentSuccessClient from './PaymentSuccessClient';

export default async function PaymentSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string; session_id?: string }>;
}) {
  const { plan, session_id: sessionId } = await searchParams;
  const activePlan = isCheckoutPlanId(plan) ? plan : null;
  const planName = activePlan ? checkoutPlans[activePlan].name : 'Zaprolink';

  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6 py-20 bg-[#F9FAFB]">
      <PaymentSuccessClient plan={activePlan} sessionId={sessionId || null} />
      <div className="max-w-xl text-center">
        <CheckCircle2 className="w-16 h-16 text-[#10B981] mx-auto mb-6" />
        <h1 className="font-['Playfair_Display'] text-4xl font-bold text-[#111827] mb-4">
          Płatność zakończona
        </h1>
        <p className="text-[#6B7280] mb-2">
          Dziękujemy. Plan {planName} jest gotowy do aktywacji dla Twojego zaproszenia.
        </p>
        {sessionId && (
          <p className="text-xs text-[#9CA3AF] mb-8">
            Numer sesji Stripe: {sessionId}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild className="bg-[#7C3AED] hover:bg-[#5B21B6]">
            <Link href="/dashboard">Przejdź do panelu</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/onboarding/okazja">Stwórz kolejne zaproszenie</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
