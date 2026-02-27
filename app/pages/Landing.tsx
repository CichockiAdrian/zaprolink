'use client'
import Link from 'next/link';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Check, MapPin, Calendar, Share2, Sparkles, ChevronRight, Star, ArrowRight } from 'lucide-react';
import { Card } from '../components/ui/card';
import { motion } from 'framer-motion';

export default function Landing() {
  return (
    <div className="bg-white">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F9FAFB] to-white py-16 sm:py-20 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">

            {/* Left */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Badge className="mb-5 bg-[#EDE9FE] text-[#7C3AED] border-none text-xs sm:text-sm">
                Cyfrowe zaproszenie na każdą okazję
              </Badge>
              <h1 className="font-['Playfair_Display'] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111827] mb-5 leading-tight">
                Zaproś bliskich jednym linkiem.
              </h1>
              <p className="text-base sm:text-lg text-[#6B7280] mb-7 leading-relaxed">
                Stwórz piękne zaproszenie online w 5 minut. Bez drukarni, bez wysyłki. Wyślij link lub QR — goście mają wszystko w jednym miejscu.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-7">
                <Button size="lg" className="rounded-full bg-[#7C3AED] hover:bg-[#5B21B6] px-8 w-full sm:w-auto" asChild>
                  <Link href="/onboarding/okazja">Stwórz za darmo →</Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full w-full sm:w-auto" asChild>
                  <Link href="/kasia-i-maciek">Jak to działa?</Link>
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-6 text-sm text-[#6B7280]">
                {['Od 29 zł jednorazowo', 'Bez abonamentu', 'Ślub, urodziny, chrzciny i więcej'].map(t => (
                  <div key={t} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right – phone mockup */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center lg:justify-end">
              <div className="w-[240px] sm:w-[280px] lg:w-[320px]">
                <div className="bg-[#111827] rounded-[36px] sm:rounded-[40px] p-2.5 shadow-2xl">
                  <div className="bg-white rounded-[28px] sm:rounded-[32px] overflow-hidden">
                    <div className="bg-[#F9FAFB] px-3 py-1.5 text-[10px] text-[#6B7280] border-b border-[#E5E7EB]">
                      zaprolink.pl/kasia-i-maciek
                    </div>
                    <img
                      src="https://images.unsplash.com/photo-1750208759710-248f62d51b23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMGludml0YXRpb24lMjBzbWFydHBob25lfGVufDF8fHx8MTc3MTY3NDMxNHww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Zaproszenie demo"
                      className="w-full h-[380px] sm:h-[440px] lg:h-[480px] object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PROBLEM / WHY ── */}
      <section className="py-16 sm:py-20 bg-[#F9FAFB]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-center text-[#111827] mb-3">
            Koniec ze stresem przed imprezą
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 sm:mt-12">
            {[
              { icon: Check,    title: 'Kto przyjedzie? Wiesz od razu',  desc: 'Goście potwierdzają obecność online — bez SMS-ów i telefonów' },
              { icon: MapPin,   title: 'Nikt nie zgubi drogi',           desc: 'Mapa dojazdu prosto w zaproszeniu — jedno kliknięcie i nawigacja gotowa' },
              { icon: Sparkles, title: 'Zmieniła się data? Nie ma problemu', desc: 'Edytujesz zaproszenie w każdej chwili — goście widzą zmiany od razu' },
              { icon: Share2,   title: 'Wyślij gdzie chcesz',            desc: 'Link przez WhatsApp, Messenger lub kod QR do wydruku — Ty decydujesz' },
            ].map((item, i) => (
              <Card key={i} className="p-5 sm:p-6 bg-white border-[#E5E7EB] hover:shadow-lg transition-shadow">
                <div className="w-11 h-11 rounded-full bg-[#EDE9FE] flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-[#7C3AED]" />
                </div>
                <h3 className="font-semibold text-[#111827] mb-2 text-sm sm:text-base">{item.title}</h3>
                <p className="text-[#6B7280] text-sm">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
          <Badge className="mb-4 mx-auto block w-fit bg-[#EDE9FE] text-[#7C3AED] border-none">JAK TO DZIAŁA</Badge>
          <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-center text-[#111827] mb-4">
            Gotowe zaproszenie w 3 prostych krokach
          </h2>
          <div className="grid sm:grid-cols-3 gap-8 mt-12 sm:mt-16">
            {[
              { step: '1', title: 'Wybierz okazję i gotowy projekt', desc: 'Ślub, urodziny, event — mamy wszystko' },
              { step: '2', title: 'Wpisz swoje dane — resztą się zajmiemy', desc: 'Przeciągaj, dodawaj, usuwaj — pełna kontrola' },
              { step: '3', title: 'Wyślij link lub pokaż QR kod', desc: 'WhatsApp, SMS, e-mail — jak wolisz' },
            ].map((item, i) => (
              <div key={i} className="text-center relative">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#7C3AED] text-white flex items-center justify-center mx-auto mb-5 font-['Playfair_Display'] text-xl sm:text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-semibold text-[#111827] mb-2 text-base sm:text-xl">{item.title}</h3>
                <p className="text-[#6B7280] text-sm sm:text-base">{item.desc}</p>
                {i < 2 && <ArrowRight className="hidden sm:block absolute top-7 -right-4 w-7 h-7 text-[#D1D5DB]" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SZABLONY ── */}
      <section className="py-16 sm:py-20 bg-[#F9FAFB]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
          <Badge className="mb-4 mx-auto block w-fit bg-[#EDE9FE] text-[#7C3AED] border-none">SZABLONY</Badge>
          <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-center text-[#111827] mb-4">
            Piękne wzory na każdą okazję
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10 sm:mt-12 max-w-4xl mx-auto">
            {[
              { name: 'Elegant',  style: 'Klasyczny',  preview: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400' },
              { name: 'Modern',   style: 'Nowoczesny', preview: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400' },
              { name: 'Kwiatowy', style: 'Romantyczny',preview: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=400' },
            ].map((template, i) => (
              <Card key={i} className="group overflow-hidden cursor-pointer hover:shadow-xl transition-shadow border-[#E5E7EB]">
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={template.preview} alt={template.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="p-4">
                  <Badge className="mb-2 bg-[#F9FAFB] text-[#6B7280] border-none text-xs">{template.style}</Badge>
                  <h3 className="font-semibold text-[#111827]">{template.name}</h3>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" size="lg" asChild>
              <Link href="/szablony">Zobacz wszystkie szablony <ChevronRight className="ml-1 w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── OPINIE ── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-[#111827] mb-4">
              Dołączyło już 2 400 par i organizatorów
            </h2>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]" />)}
              <span className="ml-2 text-[#6B7280] font-medium text-sm">4.9/5 średnia ocen</span>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-5 sm:gap-6">
            {[
              { name: 'Anna i Marek', text: 'Absolutnie rewelacyjne! Goście byli zachwyceni. Nie musieliśmy nikomu osobno wysyłać adresu i programu.' },
              { name: 'Kasia', text: 'Na urodziny 30-tki idealne rozwiązanie. Link wrzuciłam na story i wszystko załatwione!' },
              { name: 'Robert — event manager', text: 'Używam do firmowych eventów. Świetna sprawa, goście potwierdzają obecność online. Polecam!' },
            ].map((t, i) => (
              <Card key={i} className="p-5 sm:p-6 border-[#E5E7EB]">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />)}
                </div>
                <p className="text-[#374151] mb-4 italic text-sm sm:text-base">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#EDE9FE] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#7C3AED] font-semibold text-sm">{t.name.charAt(0)}</span>
                  </div>
                  <p className="font-medium text-[#111827] text-sm">{t.name}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── TWÓRZ I ZARABIAJ ── */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#5B21B6] to-[#7C3AED] text-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div>
              <Badge className="mb-5 bg-white/20 text-white border-none">DLA TWÓRCÓW</Badge>
              <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
                Twórz i zarabiaj
              </h2>
              <p className="text-white/90 text-base sm:text-lg mb-5 leading-relaxed">
                Jesteś projektantem graficznym lub web designerem? Dołącz do marketplace Zaprolink i sprzedawaj swoje szablony zaproszeń.
              </p>
              <ul className="space-y-2.5 mb-7">
                {[
                  'Publikuj nieograniczoną liczbę szablonów',
                  'Zarabiaj 70% z każdej sprzedaży',
                  'Dostęp do edytora i wszystkich funkcji',
                  'Dashboard ze statystykami i wypłatami',
                ].map((f, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
                    <span className="text-white/90 text-sm sm:text-base">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-baseline gap-3 mb-7">
                <span className="text-4xl sm:text-5xl font-bold">200 zł</span>
                <span className="text-white/80">/ rok</span>
              </div>
              <Button size="lg" className="rounded-full bg-[#F59E0B] hover:bg-[#D97706] text-white px-8 w-full sm:w-auto">
                Zostań twórcą →
              </Button>
            </div>
            <div>
              <Card className="p-5 sm:p-6 bg-white/10 backdrop-blur-sm border-white/20">
                <div className="space-y-3 sm:space-y-4">
                  {[
                    { label: 'Szablony opublikowane', value: '12',      emoji: '📄', color: 'bg-[#F59E0B]' },
                    { label: 'Sprzedane kopie',       value: '243',     emoji: '💰', color: 'bg-[#F59E0B]' },
                    { label: 'Zarobki w tym miesiącu',value: '3 420 zł',emoji: '📈', color: 'bg-[#10B981]' },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center justify-between p-3 sm:p-4 bg-white/10 rounded-lg">
                      <div>
                        <p className="text-xs sm:text-sm text-white/70 mb-0.5">{row.label}</p>
                        <p className="text-xl sm:text-2xl font-bold">{row.value}</p>
                      </div>
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 ${row.color} rounded-full flex items-center justify-center text-lg sm:text-2xl`}>
                        {row.emoji}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-[#7C3AED] to-[#5B21B6]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Twoi goście czekają na zaproszenie.
          </h2>
          <p className="text-white/90 text-base sm:text-lg mb-7 max-w-2xl mx-auto">
            Pierwsze zaproszenie stworzysz bezpłatnie. Płacisz dopiero gdy jesteś zadowolony.
          </p>
          <Button size="lg" className="rounded-full bg-white text-[#7C3AED] hover:bg-[#F9FAFB] px-8 w-full sm:w-auto" asChild>
            <Link href="/onboarding/okazja">Stwórz zaproszenie za darmo →</Link>
          </Button>
        </div>
      </section>

    </div>
  );
}