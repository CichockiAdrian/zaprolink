import Link from 'next/link';

export default function TermsPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="font-['Playfair_Display'] text-4xl font-bold text-[#111827] mb-6">
        Regulamin
      </h1>
      <div className="space-y-5 text-[#4B5563] leading-relaxed">
        <p>
          Zaprolink umożliwia tworzenie, publikowanie i hosting cyfrowych zaproszeń online.
          Zakup planu uruchamia dostęp do funkcji opisanych w aktualnym cenniku.
        </p>
        <p>
          Plany Starter i Plus są płatnościami jednorazowymi. Plan Pro jest subskrypcją
          miesięczną, którą można anulować zgodnie z zasadami operatora płatności.
        </p>
        <p>
          Użytkownik odpowiada za treści, zdjęcia, linki i dane gości dodane do zaproszenia.
          Zabronione jest publikowanie treści bez wymaganych praw lub naruszających prawo.
        </p>
        <p>
          W przypadku pytań, reklamacji lub zwrotu środków skorzystaj ze strony{' '}
          <Link href="/kontakt" className="text-[#7C3AED] hover:underline">Kontakt</Link>.
        </p>
      </div>
    </section>
  );
}
