'use client'
import Link from 'next/link';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { 
  Check, 
  MapPin, 
  Share2, 
  Sparkles,
  ChevronRight,
  Star,
  ArrowRight
} from 'lucide-react';
import { Card } from '../components/ui/card';
import { motion } from 'framer-motion';

export default function Landing() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F9FAFB] to-white py-20 lg:py-32">
        {/* Dekoracyjne tło */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#EDE9FE]/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#EDE9FE]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* LEWA strona — mockup telefonu */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative order-2 lg:order-1"
            >
              {/* Floating badge nad telefonem */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute -top-4 -left-4 z-10 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-2 border border-gray-100"
              >
                <span className="text-xl">💌</span>
                <div>
                  <p className="text-xs font-semibold text-[#111827]">Nowe RSVP!</p>
                  <p className="text-xs text-[#6B7280]">Anna potwierdza obecność</p>
                </div>
              </motion.div>

              {/* Floating badge pod telefonem */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="absolute -bottom-4 -right-4 z-10 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3 border border-gray-100"
              >
                <div className="flex -space-x-2">
                  {['A','M','K','P'].map((l, i) => (
                    <div key={i} className="w-7 h-7 rounded-full bg-[#EDE9FE] border-2 border-white flex items-center justify-center text-xs font-bold text-[#7C3AED]">{l}</div>
                  ))}
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#111827]">47 potwierdzeń</p>
                  <p className="text-xs text-[#6B7280]">z 60 zaproszonych</p>
                </div>
              </motion.div>

              <div className="relative mx-auto w-[280px] lg:w-[320px]">
                <div className="relative bg-[#111827] rounded-[40px] p-3 shadow-2xl">
                  <div className="bg-white rounded-[32px] overflow-hidden">
                    <div className="bg-[#1F2937] px-4 py-2.5 flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-white/20" />
                        <div className="w-2 h-2 rounded-full bg-white/20" />
                        <div className="w-2 h-2 rounded-full bg-white/20" />
                      </div>
                      <div className="flex-1 bg-white/10 rounded-full px-3 py-1 text-xs text-white/60 text-center">
                        zaprolink.pl/kasia-i-maciek
                      </div>
                    </div>
                    <img 
                      src="https://images.unsplash.com/photo-1750208759710-248f62d51b23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMGludml0YXRpb24lMjBzbWFydHBob25lfGVufDF8fHx8MTc3MTY3NDMxNHww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Zaproszenie demo"
                      className="w-full h-[480px] object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* PRAWA strona — tekst */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <Badge className="mb-6 bg-[#EDE9FE] text-[#7C3AED] border-none">
                ✨ Cyfrowe zaproszenie na każdą okazję
              </Badge>
              
              <h1 className="font-['Playfair_Display'] text-5xl lg:text-6xl font-bold text-[#111827] mb-6 leading-tight">
                Zaproś bliskich<br />jednym linkiem.
              </h1>
              
              <p className="text-lg text-[#6B7280] mb-8 leading-relaxed">
                Stwórz piękne zaproszenie online w 5 minut. Bez drukarni, bez wysyłki. Wyślij link lub QR — goście mają wszystko w jednym miejscu.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button 
                  size="lg" 
                  className="rounded-full bg-[#7C3AED] hover:bg-[#5B21B6] px-8 shadow-lg shadow-purple-200"
                  asChild
                >
                  <Link href="/onboarding/okazja">
                    Stwórz za darmo →
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="rounded-full"
                  asChild
                >
                  <Link href="/kasia-i-maciek">Zobacz przykład</Link>
                </Button>
              </div>

              {/* Social proof inline */}
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-100">
                <div className="flex -space-x-2">
                  {['A','M','K','R','P'].map((l, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white flex items-center justify-center text-xs font-bold text-white">{l}</div>
                  ))}
                </div>
                <p className="text-sm text-[#6B7280]">
                  Dołączyło już <span className="font-semibold text-[#111827]">2 400+</span> par i organizatorów
                </p>
              </div>
              
              <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#6B7280]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#10B981]" />
                  <span>Od 29 zł jednorazowo</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#10B981]" />
                  <span>Bez abonamentu</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#10B981]" />
                  <span>Ślub, urodziny, chrzciny i więcej</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#10B981]" />
                  <span>14 dni zwrotu</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Problem/Why Section */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <h2 className="font-['Playfair_Display'] text-4xl font-bold text-center text-[#111827] mb-4">
            Koniec ze stresem przed imprezą
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { icon: Check, title: 'Kto przyjedzie? Wiesz od razu', desc: 'Goście potwierdzają obecność online — bez SMS-ów i telefonów' },
              { icon: MapPin, title: 'Nikt nie zgubi drogi', desc: 'Mapa dojazdu prosto w zaproszeniu — jedno kliknięcie i nawigacja gotowa' },
              { icon: Sparkles, title: 'Zmieniła się data? Nie ma problemu', desc: 'Edytujesz zaproszenie w każdej chwili — goście widzą zmiany od razu' },
              { icon: Share2, title: 'Wyślij gdzie chcesz', desc: 'Link przez WhatsApp, Messenger lub kod QR do wydruku — Ty decydujesz' },
            ].map((item, i) => (
              <Card key={i} className="p-6 bg-white border-[#E5E7EB] hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-[#EDE9FE] flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-[#7C3AED]" />
                </div>
                <h3 className="font-semibold text-[#111827] mb-2">{item.title}</h3>
                <p className="text-[#6B7280] text-sm">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <Badge className="mb-4 mx-auto block w-fit bg-[#EDE9FE] text-[#7C3AED] border-none">
            JAK TO DZIAŁA
          </Badge>
          <h2 className="font-['Playfair_Display'] text-4xl font-bold text-center text-[#111827] mb-4">
            Gotowe zaproszenie w 3 prostych krokach
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              { step: '1', title: 'Wybierz okazję i gotowy projekt', desc: 'Ślub, urodziny, event - mamy wszystko' },
              { step: '2', title: 'Wpisz swoje dane — resztą się zajmiemy', desc: 'Przeciągaj, dodawaj, usuwaj - pełna kontrola' },
              { step: '3', title: 'Wyślij link lub pokaż QR kod', desc: 'WhatsApp, SMS, e-mail - jak wolisz' },
            ].map((item, i) => (
              <div key={i} className="text-center relative">
                <div className="w-16 h-16 rounded-full bg-[#7C3AED] text-white flex items-center justify-center mx-auto mb-6 font-['Playfair_Display'] text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-semibold text-[#111827] mb-3 text-xl">{item.title}</h3>
                <p className="text-[#6B7280]">{item.desc}</p>
                {i < 2 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-4 w-8 h-8 text-[#D1D5DB]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Szablony Preview Section */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <Badge className="mb-4 mx-auto block w-fit bg-[#EDE9FE] text-[#7C3AED] border-none">
            SZABLONY
          </Badge>
          <h2 className="font-['Playfair_Display'] text-4xl font-bold text-center text-[#111827] mb-4">
            Piękne wzory na każdą okazję
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            {[
              { name: 'Elegant', style: 'Klasyczny', preview: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400' },
              { name: 'Modern', style: 'Nowoczesny', preview: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400' },
              { name: 'Kwiatowy', style: 'Romantyczny', preview: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=400' },
            ].map((template, i) => (
              <Card key={i} className="group overflow-hidden cursor-pointer hover:shadow-xl transition-shadow border-[#E5E7EB]">
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={template.preview} 
                    alt={template.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <Badge className="mb-2 bg-[#F9FAFB] text-[#6B7280] border-none text-xs">
                    {template.style}
                  </Badge>
                  <h3 className="font-semibold text-[#111827]">{template.name}</h3>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" size="lg" asChild>
              <Link href="/szablony">
                Zobacz wszystkie szablony <ChevronRight className="ml-1 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="font-['Playfair_Display'] text-4xl font-bold text-[#111827] mb-4">
              Dołączyło już 2 400 par i organizatorów
            </h2>
            <div className="flex items-center justify-center gap-2 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-[#F59E0B] text-[#F59E0B]" />
              ))}
              <span className="ml-2 text-[#6B7280] font-medium">4.9/5 średnia ocen</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Anna i Marek', text: 'Absolutnie rewelacyjne! Goście byli zachwyceni. Nie musieliśmy nikomu osobno wysyłać adresu i programu.', rating: 5 },
              { name: 'Kasia', text: 'Na urodziny 30-tki idealne rozwiązanie. Link wrzuciłam na story i wszystko załatwione!', rating: 5 },
              { name: 'Robert - event manager', text: 'Używam do firmowych eventów. Świetna sprawa, goście potwierdzają obecność online. Polecam!', rating: 5 },
            ].map((testimonial, i) => (
              <Card key={i} className="p-6 border-[#E5E7EB]">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>
                <p className="text-[#374151] mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#EDE9FE] flex items-center justify-center">
                    <span className="text-[#7C3AED] font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <p className="font-medium text-[#111827]">{testimonial.name}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Twórz i Zarabiaj Section — POPRAWIONA */}
      <section className="py-20 bg-gradient-to-br from-[#5B21B6] to-[#7C3AED] text-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-white/20 text-white border-none">
                DLA TWÓRCÓW
              </Badge>
              <h2 className="font-['Playfair_Display'] text-4xl lg:text-5xl font-bold mb-6">
                Twórz i zarabiaj
              </h2>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                Jesteś projektantem graficznym lub web designerem? Dołącz do marketplace Zaprolink i sprzedawaj swoje szablony zaproszeń.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Publikuj nieograniczoną liczbę szablonów',
                  'Zarabiaj 70% z każdej sprzedaży',
                  'Dostęp do edytora i wszystkich funkcji',
                  'Dashboard ze statystykami i wypłatami',
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#F59E0B] flex-shrink-0" />
                    <span className="text-white/90">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* ZMIENIONA CENA — zgodna z planem Pro */}
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-5xl font-bold">89 zł</span>
                <span className="text-white/80 text-lg">/ miesiąc</span>
                <span className="text-white/50 text-sm ml-2">w planie Pro</span>
              </div>

              {/* ZMIENIONY BUTTON — prowadzi do /cennik */}
              <Button
                size="lg"
                className="rounded-full bg-[#F59E0B] hover:bg-[#D97706] text-white px-8"
                asChild
              >
                <Link href="/cennik">
                  Sprawdź plan Pro →
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                    <div>
                      <p className="text-sm text-white/70 mb-1">Szablony opublikowane</p>
                      <p className="text-2xl font-bold">12</p>
                    </div>
                    <div className="w-12 h-12 bg-[#F59E0B] rounded-full flex items-center justify-center">
                      <span className="text-2xl">📄</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                    <div>
                      <p className="text-sm text-white/70 mb-1">Sprzedane kopie</p>
                      <p className="text-2xl font-bold">243</p>
                    </div>
                    <div className="w-12 h-12 bg-[#F59E0B] rounded-full flex items-center justify-center">
                      <span className="text-2xl">💰</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                    <div>
                      <p className="text-sm text-white/70 mb-1">Zarobki w tym miesiącu</p>
                      <p className="text-2xl font-bold">3 420 zł</p>
                    </div>
                    <div className="w-12 h-12 bg-[#10B981] rounded-full flex items-center justify-center">
                      <span className="text-2xl">📈</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
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