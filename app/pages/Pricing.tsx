'use client'
import Link from 'next/link';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Check, Pencil, Zap, ArrowRight } from 'lucide-react';
import PricingCard from '../components/PricingCard';
import ComparisonTable from '../components/ComparisonTable';

const plans = [
  {
    name: 'Starter',
    description: 'Urodziny, chrzciny, impreza',
    target: 'Do 50 gości',
    price: '29',
    period: 'jednorazowo',
    periodSub: 'płacisz raz, bez abonamentu',
    popular: false,
    features: [
      '1 aktywne zaproszenie',
      'Link + QR kod do wysyłki',
      'RSVP do 50 odpowiedzi',
      'Wszystkie szablony',
      'Podgląd na żywo',
      'Hosting 1 rok',
    ],
    notIncluded: [
      'RSVP menu i alergie',
      'Wideo, galeria, linki',
      'Ścianka zdjęć live',
    ],
    buttonText: 'Wybierz Starter',
    buttonLink: '/kreator',
  },
  {
    name: 'Plus',
    description: 'Wesela i eventy',
    target: 'Do 200 gości',
    price: '59',
    period: 'jednorazowo',
    periodSub: 'płacisz raz, bez abonamentu',
    popular: true,
    features: [
      'Wszystko ze Starter',
      'RSVP do 200 odpowiedzi',
      'RSVP menu i alergie',
      'Sekcja wideo (YouTube/Vimeo)',
      'Galeria zdjęć',
      'Ścianka zdjęć live',
      'Hosting 3 lata',
    ],
    notIncluded: [
      'Analityka wyświetleń',
      'Custom subdomena',
    ],
    buttonText: 'Wybierz Plus',
    buttonLink: '/kreator',
  },
  {
    name: 'Pro',
    description: 'Organizatorzy i fotografowie',
    target: 'Zaproszenia bez limitu',
    price: '89',
    period: '/ miesiąc',
    periodSub: 'subskrypcja · anuluj kiedy chcesz',
    popular: false,
    badge: 'Dla profesjonalistów',
    features: [
      'Zaproszenia bez limitu',
      'RSVP nieograniczony',
      'RSVP menu i alergie',
      'Wideo, galeria, linki',
      'Ścianka zdjęć live',
      'Analityka (wyświetlenia, źródła)',
      'Custom subdomena',
      'Usunięcie "Powered by Zaprolink"',
      'Hosting bezterminowy',
      'Wsparcie priorytetowe',
      'Twórz i sprzedawaj zaproszenia →',
    ],
    notIncluded: [],
    buttonText: 'Wybierz Pro',
    buttonLink: '/kreator',
    cancelNote: 'Anuluj subskrypcję w każdej chwili',
  },
];

// FAQ napisane z perspektywy korzyści dla użytkownika
const faqs = [
  {
    q: 'Czym różni się Starter od Plus?',
    a: 'Starter to idealne rozwiązanie na mniejsze uroczystości — urodziny, chrzciny, imprezy do 50 osób. Plus został stworzony z myślą o weselach i większych eventach: obsługuje do 200 gości, dodaje galerię zdjęć, wideo, ściankę live i daje hosting na aż 3 lata. Jeśli planujesz ślub — Plus to oczywisty wybór.',
  },
  {
    q: 'Co znaczy "jednorazowo"? Czy będę płacić co miesiąc?',
    a: 'Nie — Starter i Plus to płatność jednorazowa. Płacisz raz i zaproszenie działa przez cały okres hostingu (1 lub 3 lata) bez żadnych ukrytych opłat ani abonamentów. Możesz spokojnie zapomnieć o kolejnych fakturach.',
  },
  {
    q: 'Czy mogę zacząć za darmo i zapłacić później?',
    a: 'Tak! Możesz zaprojektować zaproszenie w pełnym edytorze zupełnie bezpłatnie — bez rejestracji i bez karty. Płacisz dopiero gdy jesteś zadowolony z efektu i chcesz wysłać link gościom. Zero ryzyka.',
  },
  {
    q: 'Dla kogo jest plan Pro?',
    a: 'Pro to subskrypcja miesięczna stworzona dla organizatorów eventów, fotografów ślubnych i agencji, które tworzą wiele zaproszeń dla różnych klientów. Dostajesz zaproszenia bez limitu, własną subdomenę i możliwość sprzedaży szablonów w marketplace. Możesz anulować w każdej chwili.',
  },
  {
    q: 'Co się stanie z moim zaproszeniem po wygaśnięciu hostingu?',
    a: 'Zaproszenie przestanie być publicznie dostępne, ale Twoje dane są bezpieczne. Możesz przedłużyć hosting za symboliczne 19 zł/rok lub pobrać wszystkie dane. Nigdy nie tracisz swojej pracy.',
  },
  {
    q: 'Czy jest gwarancja zwrotu pieniędzy?',
    a: 'Tak — oferujemy 14-dniową gwarancję zwrotu bez podawania przyczyny. Jeśli z jakiegokolwiek powodu nie jesteś zadowolony, zwrócimy Ci pieniądze w całości.',
  },
];

export default function Pricing() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="pt-20 pb-8 text-center px-6">
        <Badge className="mb-4 bg-[#EDE9FE] text-[#7C3AED] border-0">CENNIK</Badge>
        <h1 className="text-4xl lg:text-5xl font-bold text-[#111827] mb-4 font-['Playfair_Display']">
          Zaprojektuj za darmo.<br />Zapłać gdy jesteś gotowy.
        </h1>
        <p className="text-lg text-[#6B7280] max-w-xl mx-auto mb-2">
          Tworzysz zaproszenie w edytorze bez rejestracji. Płacisz dopiero gdy chcesz wysłać link gościom.
        </p>
        <p className="text-sm text-gray-400">
          Agencja za stronę zaproszeniową: <span className="line-through">500–2000 zł</span>
          {' · '}
          <span className="text-[#7C3AED] font-semibold">Zaprolink: od 29 zł</span>
        </p>
      </section>

      {/* Stepper */}
      <section className="max-w-3xl mx-auto px-6 mb-14">
        <div className="bg-gradient-to-r from-purple-50 to-violet-50 border border-purple-100 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-0">
          <div className="flex items-center gap-3 flex-1">
            <div className="w-10 h-10 bg-white rounded-xl shadow flex items-center justify-center shrink-0">
              <Pencil className="w-5 h-5 text-[#7C3AED]" />
            </div>
            <div>
              <p className="font-semibold text-[#111827] text-sm">1. Zaprojektuj za darmo</p>
              <p className="text-xs text-[#6B7280]">Pełny dostęp do buildera</p>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-gray-300 shrink-0 hidden sm:block mx-2" />
          <div className="flex items-center gap-3 flex-1">
            <div className="w-10 h-10 bg-white rounded-xl shadow flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5 text-[#7C3AED]" />
            </div>
            <div>
              <p className="font-semibold text-[#111827] text-sm">2. Wybierz plan</p>
              <p className="text-xs text-[#6B7280]">Od 29 zł jednorazowo</p>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-gray-300 shrink-0 hidden sm:block mx-2" />
          <div className="flex items-center gap-3 flex-1">
            <div className="w-10 h-10 bg-white rounded-xl shadow flex items-center justify-center shrink-0">
              <Check className="w-5 h-5 text-[#7C3AED]" />
            </div>
            <div>
              <p className="font-semibold text-[#111827] text-sm">3. Wyślij gościom</p>
              <p className="text-xs text-[#6B7280]">Link, QR kod — jak wolisz</p>
            </div>
          </div>
        </div>
      </section>

      {/* Karty planów */}
      <section className="max-w-5xl mx-auto px-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-[#6B7280]">
          <span>✓ Jednorazowo lub subskrypcja</span>
          <span>✓ Dostęp od razu</span>
          <span>✓ 14 dni na zwrot</span>
          <span>✓ Płatność BLIK</span>
        </div>
        <p className="text-center text-sm text-gray-400 mt-2">
          Dołączyło już <span className="font-bold text-[#111827]">2 400</span> par i organizatorów
        </p>
      </section>

      {/* Tabela porównawcza */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-[#111827] text-center mb-2 font-['Playfair_Display']">
          Szczegółowe porównanie
        </h2>
        <p className="text-center text-[#6B7280] text-sm mb-10">
          Nie wiesz co wybrać? Sprawdź co zawiera każdy plan.
        </p>
        <ComparisonTable />
      </section>

      {/* Twórz i zarabiaj — z linkiem do artykułu */}
      <section className="py-20 bg-gradient-to-br from-[#5B21B6] to-[#7C3AED] text-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-none">DLA TWÓRCÓW</Badge>
          <h2 className="font-['Playfair_Display'] text-4xl lg:text-5xl font-bold mb-6">
            Twórz i zarabiaj
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Jesteś projektantem lub fotografem ślubnym? Sprzedawaj swoje szablony zaproszeń w marketplace Zaprolink i zarabiaj 70% z każdej sprzedaży.
          </p>
          <Link href="/blog/tworzenie-i-sprzedaz-zaproszen">
            <Button
              size="lg"
              className="rounded-full bg-[#F59E0B] hover:bg-[#D97706] text-white px-8"
            >
              Dowiedz się więcej →
            </Button>
          </Link>
          <p className="text-sm text-white/60 mt-4">
            Przeczytaj jak to działa — bez zobowiązań
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-[#111827] text-center mb-2 font-['Playfair_Display']">
          Najczęściej zadawane pytania
        </h2>
        <p className="text-center text-[#6B7280] text-sm mb-10">Masz inne pytanie? <Link href="/kontakt" className="text-[#7C3AED] hover:underline">Napisz do nas.</Link></p>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-gray-200 rounded-xl px-6 bg-white"
            >
              <AccordionTrigger className="text-left font-semibold text-[#111827] hover:no-underline py-4">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-[#6B7280] pb-4 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* CTA — 1:1 z Landing */}
      <section className="py-20 bg-gradient-to-r from-[#7C3AED] to-[#5B21B6]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-['Playfair_Display'] text-4xl lg:text-5xl font-bold text-white mb-6">
            Twoi goście czekają na zaproszenie.
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Pierwsze zaproszenie stworzysz bezpłatnie. Płacisz dopiero gdy jesteś zadowolony.
          </p>
          <Button
            size="lg"
            className="rounded-full bg-white text-[#7C3AED] hover:bg-[#F9FAFB] px-8"
            asChild
          >
            <Link href="/onboarding/okazja">
              Stwórz zaproszenie za darmo →
            </Link>
          </Button>
        </div>
      </section>

    </div>
  );
}