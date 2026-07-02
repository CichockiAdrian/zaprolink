import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="font-['Playfair_Display'] text-4xl font-bold text-[#111827] mb-6">
        Polityka prywatności
      </h1>
      <div className="space-y-5 text-[#4B5563] leading-relaxed">
        <p>
          Zaprolink przetwarza dane podane podczas tworzenia konta, projektowania zaproszenia,
          obsługi RSVP oraz realizacji płatności wyłącznie w celu świadczenia usługi.
        </p>
        <p>
          Płatności obsługuje Stripe. Dane kart płatniczych nie są przechowywane przez Zaprolink.
          Szczegóły płatności są przetwarzane bezpośrednio przez operatora płatności.
        </p>
        <p>
          Dane zaproszeń i odpowiedzi RSVP powinny być przechowywane tylko przez okres aktywnego
          hostingu oraz czas wymagany do obsługi rozliczeń, reklamacji i obowiązków prawnych.
        </p>
        <p>
          W sprawach dotyczących danych osobowych skontaktuj się przez stronę{' '}
          <Link href="/kontakt" className="text-[#7C3AED] hover:underline">Kontakt</Link>.
        </p>
      </div>
    </section>
  );
}
