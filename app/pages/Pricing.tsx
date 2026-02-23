'use client'
import Link from 'next/link';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Check, X } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

const plans = [
  {
    name: 'Standard',
    price: 29,
    popular: false,
    description: 'Jedno proste zaproszenie',
    features: [
      '1 strona zaproszenia',
      '5 gotowych sekcji',
      'Formularz RSVP (podstawowy)',
      'Link + QR kod',
      'Hosting 12 miesięcy',
      'Do 100 odpowiedzi RSVP',
    ],
    notIncluded: [
      'Builder drag-and-drop',
      'Wideo, galeria, linki',
      'Analityka',
      'Custom subdomena',
    ]
  },
  {
    name: 'Plus',
    price: 49,
    popular: true,
    description: 'Więcej możliwości, pełna customizacja',
    features: [
      'Wszystko ze Standard',
      'Builder drag-and-drop',
      'Sekcja wideo (YouTube/Vimeo)',
      'Galeria zdjęć',
      'Sekcja linki',
      'Zaawansowany RSVP (menu, alergie)',
      'Ścianka zdjęć live',
      '3 strony / zaproszenia',
      'Hosting 24 miesiące',
      'Do 500 odpowiedzi RSVP',
    ],
    notIncluded: []
  },
  {
    name: 'Premium',
    price: 89,
    popular: false,
    description: 'Wszystko, bez kompromisów',
    features: [
      'Wszystko z Plus',
      'Nielimitowane strony',
      'Własna subdomena',
      'Opcja custom domeny (+79 zł)',
      'Analityka (wyświetlenia, źródła)',
      'Usunięcie "Powered by Zaprolink"',
      'Pro formularz RSVP',
      'Hosting 36 miesięcy',
      'Nielimitowane odpowiedzi',
    ],
    notIncluded: []
  },
];

const comparisonFeatures = [
  { name: 'Liczba zaproszeń', standard: '1', plus: '3', premium: '∞' },
  { name: 'Builder drag-and-drop', standard: false, plus: true, premium: true },
  { name: 'Wideo i galeria', standard: false, plus: true, premium: true },
  { name: 'Sekcje linki', standard: false, plus: true, premium: true },
  { name: 'RSVP zaawansowane', standard: false, plus: true, premium: true },
  { name: 'Ścianka zdjęć live', standard: false, plus: true, premium: true },
  { name: 'Analityka', standard: false, plus: false, premium: true },
  { name: 'Custom subdomena', standard: false, plus: false, premium: true },
  { name: 'Usunięcie brandingu', standard: false, plus: false, premium: true },
  { name: 'Hosting (miesiące)', standard: '12', plus: '24', premium: '36' },
];

const faqs = [
  { q: 'Czy mogę zmienić plan później?', a: 'Tak, możesz w każdej chwili zaktualizować swój plan dopłacając różnicę.' },
  { q: 'Co się stanie po wygaśnięciu hostingu?', a: 'Możesz przedłużyć hosting za symboliczną opłatą 19 zł/rok lub pobrać wszystkie dane.' },
  { q: 'Czy jest abonament?', a: 'Nie! Wszystkie ceny są jednorazowe. Płacisz raz i masz zaproszenie na określony czas.' },
  { q: 'Czy mogę zwrócić pieniądze?', a: 'Tak, oferujemy 14-dniową gwarancję zwrotu pieniędzy bez podawania przyczyny.' },
  { q: 'Czy mogę dodać custom domenę?', a: 'Tak, w planie Premium możesz dodać własną domenę za dopłatą 79 zł + roczne odnowienie.' },
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Hero */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#7C3AED] text-white border-none">
            CENNIK
          </Badge>
          <h1 className="font-['Playfair_Display'] text-5xl font-bold text-[#111827] mb-4">
            Prosta i uczciwa cena
          </h1>
          <p className="text-lg text-[#6B7280] mb-6">
            Jednorazowo, bez abonamentu
          </p>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {plans.map((plan, i) => (
            <Card 
              key={i} 
              className={`p-8 relative ${
                plan.popular 
                  ? 'border-2 border-[#7C3AED] shadow-2xl scale-105' 
                  : 'border-[#E5E7EB]'
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F59E0B] text-white border-none">
                  ⭐ Popularny
                </Badge>
              )}
              
              <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#111827] mb-2">
                {plan.name}
              </h3>
              <p className="text-sm text-[#6B7280] mb-6">
                {plan.description}
              </p>
              
              <div className="mb-8">
                <span className="text-5xl font-bold text-[#111827]">{plan.price} zł</span>
                <span className="text-[#6B7280]"> / jednorazowo</span>
              </div>

              <Button 
                className={`w-full mb-8 ${
                  plan.popular 
                    ? 'bg-[#7C3AED] hover:bg-[#5B21B6]' 
                    : ''
                }`}
                variant={plan.popular ? 'default' : 'outline'}
                asChild
              >
                <Link href="/onboarding/okazja">
                  Wybierz {plan.name}
                </Link>
              </Button>

              <div className="space-y-3">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#374151]">{feature}</span>
                  </div>
                ))}
                {plan.notIncluded.map((feature, j) => (
                  <div key={j} className="flex items-start gap-3 opacity-40">
                    <X className="w-5 h-5 text-[#9CA3AF] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#6B7280]">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mb-20">
          <h2 className="font-['Playfair_Display'] text-3xl font-bold text-center text-[#111827] mb-8">
            Szczegółowe porównanie
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto">
              <thead>
                <tr className="border-b-2 border-[#E5E7EB]">
                  <th className="text-left py-4 px-4 font-semibold text-[#111827]">Funkcja</th>
                  <th className="text-center py-4 px-4 font-semibold text-[#111827]">Standard</th>
                  <th className="text-center py-4 px-4 font-semibold text-[#111827]">Plus</th>
                  <th className="text-center py-4 px-4 font-semibold text-[#111827]">Premium</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, i) => (
                  <tr key={i} className="border-b border-[#E5E7EB]">
                    <td className="py-4 px-4 text-[#374151]">{feature.name}</td>
                    <td className="text-center py-4 px-4">
                      {typeof feature.standard === 'boolean' ? (
                        feature.standard ? (
                          <Check className="w-5 h-5 text-[#10B981] mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-[#9CA3AF] mx-auto" />
                        )
                      ) : (
                        <span className="text-[#374151]">{feature.standard}</span>
                      )}
                    </td>
                    <td className="text-center py-4 px-4">
                      {typeof feature.plus === 'boolean' ? (
                        feature.plus ? (
                          <Check className="w-5 h-5 text-[#10B981] mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-[#9CA3AF] mx-auto" />
                        )
                      ) : (
                        <span className="text-[#374151]">{feature.plus}</span>
                      )}
                    </td>
                    <td className="text-center py-4 px-4">
                      {typeof feature.premium === 'boolean' ? (
                        feature.premium ? (
                          <Check className="w-5 h-5 text-[#10B981] mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-[#9CA3AF] mx-auto" />
                        )
                      ) : (
                        <span className="text-[#374151]">{feature.premium}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h2 className="font-['Playfair_Display'] text-3xl font-bold text-center text-[#111827] mb-8">
            Najczęściej zadawane pytania
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-semibold text-[#111827]">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[#6B7280]">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
