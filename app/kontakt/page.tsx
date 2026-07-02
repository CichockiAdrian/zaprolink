import Link from 'next/link';
import { Mail } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function ContactPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="font-['Playfair_Display'] text-4xl font-bold text-[#111827] mb-4">
        Kontakt
      </h1>
      <p className="text-[#6B7280] mb-8">
        Masz pytanie o zaproszenie, płatność albo wdrożenie? Napisz do nas.
      </p>
      <div className="border border-[#E5E7EB] rounded-2xl p-6 bg-white">
        <div className="flex items-start gap-4">
          <div className="w-11 h-11 rounded-full bg-[#EDE9FE] flex items-center justify-center shrink-0">
            <Mail className="w-5 h-5 text-[#7C3AED]" />
          </div>
          <div>
            <h2 className="font-semibold text-[#111827] mb-1">Email</h2>
            <p className="text-[#6B7280] mb-4">kontakt@zaprolink.pl</p>
            <Button asChild className="bg-[#7C3AED] hover:bg-[#5B21B6]">
              <Link href="mailto:kontakt@zaprolink.pl">Napisz wiadomość</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
