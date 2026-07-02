import Link from 'next/link';
import { XCircle } from 'lucide-react';
import { Button } from '../../components/ui/button';

export default function PaymentCancelledPage() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6 py-20 bg-[#F9FAFB]">
      <div className="max-w-xl text-center">
        <XCircle className="w-16 h-16 text-[#EF4444] mx-auto mb-6" />
        <h1 className="font-['Playfair_Display'] text-4xl font-bold text-[#111827] mb-4">
          Płatność przerwana
        </h1>
        <p className="text-[#6B7280] mb-8">
          Nic nie zostało pobrane. Możesz wrócić do cennika albo dalej dopracować zaproszenie.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild className="bg-[#7C3AED] hover:bg-[#5B21B6]">
            <Link href="/cennik">Wróć do cennika</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/onboarding/okazja">Kontynuuj projekt</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
