'use client'
import Link from 'next/link';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Check, X, Pencil, Zap, ArrowRight } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';

const plans = [
  {
    name: 'Starter',
    tag: null,
    price: 29,
    priceLabel: 'jednorazowo',
    description: 'Urodziny, chrzciny, impreza do 50 osób',
    color: 'border-gray-200',
    buttonVariant: 'outline' as const,
    features: ['1 aktywne zaproszenie', 'Link + QR kod', 'RSVP do 50 odpowiedzi', 'Wszystkie szablony', 'Hosting 2 lata'],
    notIncluded: ['RSVP menu i alergie', 'Wideo, galeria, linki', 'Ścianka zdjęć live', 'Analityka', 'Custom subdomena'],
  },
  {
    name: 'Plus',
    tag: '⭐ Najpopularniejszy',
    price: 59,
    priceLabel: 'jednorazowo',
    description: 'Wesela i eventy do 200 gości',
    color: 'border-purple-500 ring-2 ring-purple-500',
    buttonVariant: 'default' as const,
    features: ['Wszystko ze Starter', 'RSVP do 200 odpowiedzi', 'RSVP menu i alergie', 'Sekcja wideo (YouTube/Vimeo)', 'Galeria zdjęć', 'Ścianka zdjęć live', 'Sekcja linki', 'Hosting 3 lata'],
    notIncluded: ['Analityka', 'Custom subdomena', 'Usunięcie brandingu'],
  },
  {
    name: 'Pro',
    tag: '🎯 Dla profesjonalistów',
    price: 89,
    priceLabel: '/ miesiąc',
    description: 'Dla organizatorów i fotografów ślubnych',
    color: 'border-gray-800',
    buttonVariant: 'outline' as const,
    features: [
      'Zaproszenia bez limitu',
      'RSVP nielimitowany',
      'RSVP menu i alergie',
      'Wideo, galeria, linki',
      'Ścianka zdjęć live',
      'Analityka (wyświetlenia, źródła)',
      'Custom subdomena',
      'Usunięcie "Powered by Zaprolink"',
      'Hosting bezterminowy',
      'Wsparcie priorytetowe',
      'MARKETPLACE_LINK',  
    ],
    notIncluded: [],
  },
  
];

const comparisonFeatures = [
  { name: 'Liczba aktywnych zaproszeń', starter: '1', plus: '1', pro: '∞' },
  { name: 'Wysyłka do gości / link', starter: true, plus: true, pro: true },
  { name: 'Kod QR', starter: true, plus: true, pro: true },
  { name: 'Limit RSVP', starter: '50', plus: '200', pro: '∞' },
  { name: 'RSVP menu i alergie', starter: false, plus: true, pro: true },
  { name: 'Wideo i galeria', starter: false, plus: true, pro: true },
  { name: 'Ścianka zdjęć live', starter: false, plus: true, pro: true },
  { name: 'Analityka', starter: false, plus: false, pro: true },
  { name: 'Custom subdomena', starter: false, plus: false, pro: true },
  { name: 'Usunięcie brandingu', starter: false, plus: false, pro: true },
  { name: 'Hosting', starter: '2 lata', plus: '3 lata', pro: 'bezterminowo' },
];

const faqs = [
  { q: 'Czy mogę zmienić plan później?', a: 'Tak, możesz w każdej chwili zaktualizować swój plan dopłacając różnicę.' },
  { q: 'Co się stanie po wygaśnięciu hostingu?', a: 'Możesz przedłużyć hosting za symboliczną opłatą 19 zł/rok lub pobrać wszystkie dane.' },
  { q: 'Czy jest abonament?', a: 'Starter i Plus to płatność jednorazowa. Plan Pro to subskrypcja miesięczna — możesz anulować kiedy chcesz.' },
  { q: 'Czy mogę zwrócić pieniądze?', a: 'Tak, oferujemy 14-dniową gwarancję zwrotu pieniędzy bez podawania przyczyny.' },
  { q: 'Czy mogę dodać custom domenę?', a: 'Tak, w planie Pro możesz dodać własną domenę za dopłatą 79 zł + roczne odnowienie.' },
];

export default function Pricing() {
  return (
    <div className="bg-white">
      <section className="pt-20 pb-8 text-center px-6">
        <Badge className="mb-4 bg-purple-100 text-purple-700 border-0">CENNIK</Badge>
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Zaprojektuj za darmo.<br />Zapłać gdy jesteś gotowy.</h1>
        <p className="text-lg text-gray-500 max-w-xl mx-auto mb-2">Twórz zaproszenie w edytorze. Płacisz dopiero gdy chcesz wysłać link gościom.</p>
        <p className="text-sm text-gray-400">Tradycyjna agencja za stronę zaproszeniową: <span className="line-through">500–2000 zł</span> · <span className="text-purple-600 font-semibold">Zaprolink: od 29 zł</span></p>
      </section>

      <section className="max-w-3xl mx-auto px-6 mb-12">
        <div className="bg-gradient-to-r from-purple-50 to-violet-50 border border-purple-100 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-0">
          <div className="flex items-center gap-3 flex-1">
            <div className="w-10 h-10 bg-white rounded-xl shadow flex items-center justify-center shrink-0"><Pencil className="w-5 h-5 text-purple-600" /></div>
            <div><p className="font-semibold text-gray-900 text-sm">1. Zaprojektuj za darmo</p><p className="text-xs text-gray-500">Pełny dostęp do buildera</p></div>
          </div>
          <ArrowRight className="w-5 h-5 text-gray-300 shrink-0 hidden sm:block mx-2" />
          <div className="flex items-center gap-3 flex-1">
            <div className="w-10 h-10 bg-white rounded-xl shadow flex items-center justify-center shrink-0"><Zap className="w-5 h-5 text-purple-600" /></div>
            <div><p className="font-semibold text-gray-900 text-sm">2. Aktywuj od 29 zł</p><p className="text-xs text-gray-500">Płacisz jednorazowo dopiero przed wysyłką</p></div>
          </div>
          <ArrowRight className="w-5 h-5 text-gray-300 shrink-0 hidden sm:block mx-2" />
          <div className="flex items-center gap-3 flex-1">
            <div className="w-10 h-10 bg-white rounded-xl shadow flex items-center justify-center shrink-0"><Check className="w-5 h-5 text-purple-600" /></div>
            <div><p className="font-semibold text-gray-900 text-sm">3. Wyślij gościom</p><p className="text-xs text-gray-500">Link, QR kod — jak wolisz</p></div>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div key={plan.name} className={`relative rounded-2xl border-2 bg-white p-7 flex flex-col ${plan.color} ${plan.name === 'Plus' ? 'shadow-2xl scale-[1.02]' : 'shadow-sm'}`}>
              {plan.tag && <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-bold px-4 py-1.5 rounded-full ${plan.name === 'Plus' ? 'bg-amber-400 text-amber-900' : 'bg-gray-900 text-white'}`}>{plan.tag}</div>}
              <div className="mb-5 mt-2"><h2 className="text-xl font-bold text-gray-900 mb-1">{plan.name}</h2><p className="text-sm text-gray-500">{plan.description}</p></div>
              <div className="mb-6"><span className="text-5xl font-extrabold text-gray-900">{plan.price} zł</span><span className="text-gray-400 text-sm ml-1">{plan.priceLabel}</span></div>
              <Link href="/kreator" className="mb-6"><Button className={`w-full rounded-xl font-semibold py-2.5 ${plan.name === 'Plus' ? 'bg-purple-600 hover:bg-purple-700 text-white' : ''}`} variant={plan.buttonVariant}>Wybierz {plan.name}</Button></Link>
              <ul className="space-y-2.5 mb-4">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    {f === 'MARKETPLACE_LINK' ? (
                      <Link
                        href="/blog/tworzenie-i-sprzedaz-zaproszen"
                        className="text-sm text-purple-600 hover:text-purple-700 font-medium underline"
                      >
                        Twórz i sprzedawaj zaproszenia
                      </Link>
                    ) : (
                      <span className="text-sm text-gray-700">{f}</span>
                    )}
                  </li>
                ))}

                {plan.notIncluded.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <X className="w-4 h-4 text-gray-300 mt-0.5 shrink-0" />
                    <span className="text-sm text-gray-400 line-through">{f}</span>
                  </li>
                ))}
              </ul>
              {plan.name === 'Pro' && <p className="text-xs text-gray-400 mt-auto pt-4">Anuluj w każdej chwili</p>}
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-500"><span>✓ Jednorazowo lub subskrypcja</span><span>✓ Dostęp od razu</span><span>✓ 14 dni zwrotu</span><span>✓ Płatność BLIK</span></div>
        <p className="text-center text-sm text-gray-400 mt-2">Dołączyło już <span className="font-bold text-gray-700">2 400</span> par i organizatorów</p>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Szczegółowe porównanie</h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
          <table className="w-full text-sm">
            <thead><tr className="bg-gray-50 border-b border-gray-100"><th className="text-left px-6 py-4 font-semibold text-gray-600 w-1/2">Funkcja</th><th className="text-center px-4 py-4 font-bold text-gray-700">Starter</th><th className="text-center px-4 py-4 font-bold text-purple-600">Plus ⭐</th><th className="text-center px-4 py-4 font-bold text-gray-700">Pro</th></tr></thead>
            <tbody>
              {comparisonFeatures.map((feature, i) => (
                <tr key={i} className={`border-b border-gray-50 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                  <td className="px-6 py-3.5 text-gray-700 font-medium">{feature.name}</td>
                  {(['starter', 'plus', 'pro'] as const).map((col) => (
                    <td key={col} className="text-center px-4 py-3.5">
                      {typeof feature[col] === 'boolean' ? (feature[col] ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-gray-300 mx-auto" />) : <span className="text-gray-900 font-medium">{feature[col]}</span>}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Najczęściej zadawane pytania</h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border border-gray-200 rounded-xl px-6 bg-white">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline py-4">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-4">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="bg-gradient-to-br from-purple-600 to-purple-800 py-16 px-6 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Gotowy, aby stworzyć swoje zaproszenie?</h2>
        <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
          Zacznij projektować za darmo. Płacisz tylko jeśli jesteś zadowolony i chcesz wysłać link gościom.
        </p>
        <Link href="/kreator">
          <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg rounded-xl font-semibold">
            Stwórz zaproszenie za darmo →
          </Button>
        </Link>
        <p className="text-sm text-purple-200 mt-4">Bez kosztów · Bez karty · Pełny dostęp do buildera</p>
      </section>

    </div>
  );
}
