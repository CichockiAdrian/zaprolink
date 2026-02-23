'use client'
import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { MapPin, Calendar, Clock, Navigation, Image as ImageIcon, ChevronDown } from 'lucide-react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import { toast } from 'sonner';
import Confetti from 'react-confetti';
import { PasswordGate } from '../components/PasswordGate';

export default function PublicInvitation() {
  // const { slug } = useParams(); // Slug can be used for fetching invitation data
  const [countdown] = useState({ days: 124, hours: 15, minutes: 42, seconds: 18 });
  const [submitted, setSubmitted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [guests, setGuests] = useState(1);
  
  // Password protection settings - in real app, this would come from invitation data
  const [isPasswordProtected] = useState(false); // Set to true to enable password gate
  const [isUnlocked, setIsUnlocked] = useState(() => {
    // Check if already unlocked in this session
    if (typeof window === 'undefined') return false;
    return sessionStorage.getItem('invitation_unlocked') === 'true';
  });
  
  const correctPassword = 'wesele2026'; // In real app, this would come from database

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);
    toast.success('Dziękujemy! Potwierdzenie zostało zapisane.');
  };

  // Show password gate if protected and not unlocked
  if (isPasswordProtected && !isUnlocked) {
    return (
      <PasswordGate
        invitationTitle="Kasia & Maciek"
        invitationDate="24 Czerwca 2026"
        backgroundImage="https://images.unsplash.com/photo-1766041700815-2693e23b3a7a?w=1600"
        correctPassword={correctPassword}
        onUnlock={() => setIsUnlocked(true)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {showConfetti && <Confetti recycle={false} numberOfPieces={500} />}
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-[#7C3AED] via-[#5B21B6] to-[#6366F1] text-white overflow-hidden">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1766041700815-2693e23b3a7a?w=1600)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="relative text-center z-10 px-6">
          <div className="mb-6">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm mb-6">
              💍 Zapraszamy na nasze wesele
            </div>
          </div>
          <h1 className="font-['Playfair_Display'] text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg">
            Kasia & Maciek
          </h1>
          <div className="flex items-center justify-center gap-6 text-lg mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>24 czerwca 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>15:00</span>
            </div>
          </div>
          <div className="h-px w-32 bg-white/50 mx-auto my-8"></div>
          <p className="text-xl opacity-90">
            Będzie nam niezmiernie miło, jeśli podzielicie z nami radość tego wyjątkowego dnia
          </p>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/70" />
        </div>
      </section>

      {/* Countdown */}
      <section className="py-16 bg-[#F9FAFB]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Playfair_Display'] text-3xl font-bold text-center text-[#111827] mb-12">
            Do wielkiego dnia pozostało
          </h2>
          <div className="grid grid-cols-4 gap-4 md:gap-8">
            {[
              { value: countdown.days, label: 'Dni' },
              { value: countdown.hours, label: 'Godzin' },
              { value: countdown.minutes, label: 'Minut' },
              { value: countdown.seconds, label: 'Sekund' },
            ].map((item, i) => (
              <Card key={i} className="p-6 text-center border-[#E5E7EB]">
                <div className="text-4xl md:text-5xl font-bold text-[#7C3AED] mb-2">
                  {item.value}
                </div>
                <div className="text-sm text-[#6B7280] uppercase tracking-wide">
                  {item.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1766041700815-2693e23b3a7a?w=600"
                alt="Para młoda"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="font-['Playfair_Display'] text-4xl font-bold text-[#111827] mb-6">
                Nasza historia
              </h2>
              <p className="text-[#6B7280] mb-4 leading-relaxed">
                Poznaliśmy się w magiczny sposób podczas letniego festiwalu muzycznego. Od pierwszego spojrzenia wiedzieliśmy, że to coś wyjątkowego.
              </p>
              <p className="text-[#6B7280] leading-relaxed">
                Po trzech latach pełnych wspólnych przygód, śmiechu i wsparcia, nadszedł czas, aby powiedzieć sobie "tak" wobec najbliższych. Chcemy, abyście byli tego świadkami!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program */}
      <section className="py-20 bg-[#F9FAFB] px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-['Playfair_Display'] text-4xl font-bold text-center text-[#111827] mb-12">
            Program dnia
          </h2>
          <div className="space-y-6">
            {[
              { time: '15:00', title: 'Ceremonia ślubna', desc: 'Kościół pw. Świętej Rodziny' },
              { time: '16:30', title: 'Przywitanie gości', desc: 'Dwór Kamionka' },
              { time: '17:00', title: 'Przyjęcie weselne', desc: 'Pyszne jedzenie i pierwsze toasty' },
              { time: '20:00', title: 'Tort weselny', desc: 'Słodka niespodzianka' },
              { time: '21:00', title: 'Pierwszy taniec', desc: 'Oczepiny i zabawa do białego rana' },
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex-shrink-0 w-20 text-right">
                  <div className="text-xl font-bold text-[#7C3AED]">{item.time}</div>
                </div>
                <div className="relative flex-1 pb-8 border-l-2 border-[#E5E7EB] pl-6">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-[#7C3AED] rounded-full"></div>
                  <h3 className="font-semibold text-[#111827] mb-1">{item.title}</h3>
                  <p className="text-[#6B7280] text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-['Playfair_Display'] text-4xl font-bold text-center text-[#111827] mb-12">
            Miejsca
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { 
                name: 'Ceremonia', 
                place: 'Kościół pw. Świętej Rodziny',
                address: 'ul. Kościelna 12, Warszawa',
                time: '15:00'
              },
              { 
                name: 'Wesele', 
                place: 'Dwór Kamionka',
                address: 'ul. Parkowa 5, Piaseczno',
                time: '16:30'
              },
            ].map((location, i) => (
              <Card key={i} className="p-6 border-[#E5E7EB]">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#EDE9FE] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#7C3AED]" />
                  </div>
                  <div>
                    <div className="text-sm text-[#7C3AED] font-medium mb-1">{location.name}</div>
                    <h3 className="font-semibold text-[#111827] text-lg mb-1">{location.place}</h3>
                    <p className="text-sm text-[#6B7280] mb-1">{location.address}</p>
                    <div className="flex items-center gap-1 text-sm text-[#6B7280]">
                      <Clock className="w-4 h-4" />
                      <span>{location.time}</span>
                    </div>
                  </div>
                </div>
                <div className="h-48 bg-[#F3F4F6] rounded-lg mb-4 flex items-center justify-center">
                  <MapPin className="w-12 h-12 text-[#9CA3AF]" />
                </div>
                <Button variant="outline" className="w-full">
                  <Navigation className="w-4 h-4 mr-2" />
                  Nawiguj
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Links */}
      <section className="py-20 bg-[#F9FAFB] px-6">
        <div className="max-w-md mx-auto">
          <h2 className="font-['Playfair_Display'] text-4xl font-bold text-center text-[#111827] mb-12">
            Przydatne linki
          </h2>
          <div className="space-y-3">
            {[
              { emoji: '🛒', text: 'Lista prezentów' },
              { emoji: '🏨', text: 'Polecane noclegi' },
              { emoji: '📸', text: 'Instagram pary' },
            ].map((link, i) => (
              <Button key={i} variant="outline" className="w-full justify-between text-left h-auto py-4" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <span className="flex items-center gap-3">
                    <span className="text-2xl">{link.emoji}</span>
                    <span className="font-medium">{link.text}</span>
                  </span>
                  <span>→</span>
                </a>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-['Playfair_Display'] text-4xl font-bold text-center text-[#111827] mb-12">
            Najczęściej zadawane pytania
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              { q: 'Czy jest parking?', a: 'Tak, przy Dworze Kamionka jest duży parking dla gości.' },
              { q: 'Jaki jest dress code?', a: 'Elegancki strój wieczorowy. Sugerujemy unikać białego koloru.' },
              { q: 'Czy można przywieźć dzieci?', a: 'Oczywiście! Przygotowaliśmy specjalny kącik zabaw dla najmłodszych.' },
              { q: 'Czy jest możliwość noclegu?', a: 'Tak, polecamy hotele z naszej listy noclegów powyżej.' },
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-semibold text-[#111827]">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-[#6B7280]">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* RSVP */}
      <section className="py-20 bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] px-6">
        <div className="max-w-md mx-auto">
          <h2 className="font-['Playfair_Display'] text-4xl font-bold text-center text-white mb-4">
            Potwierdzenie obecności
          </h2>
          <p className="text-center text-white/90 mb-8">
            Prosimy o potwierdzenie do 1 maja 2026
          </p>

          {submitted ? (
            <Card className="p-8 text-center border-none">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#111827] mb-3">
                Dziękujemy!
              </h3>
              <p className="text-[#6B7280]">
                Twoje potwierdzenie zostało zapisane. Do zobaczenia na weselu!
              </p>
            </Card>
          ) : (
            <Card className="p-6 border-none">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-[#111827]">Imię i nazwisko *</Label>
                  <Input id="name" placeholder="Jan Kowalski" required className="mt-1" />
                </div>

                <div>
                  <Label htmlFor="guests" className="text-[#111827]">Liczba osób</Label>
                  <div className="flex items-center gap-3 mt-1">
                    <Button 
                      type="button"
                      variant="outline" 
                      size="sm"
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                    >
                      -
                    </Button>
                    <span className="text-2xl font-semibold text-[#7C3AED] w-12 text-center">
                      {guests}
                    </span>
                    <Button 
                      type="button"
                      variant="outline" 
                      size="sm"
                      onClick={() => setGuests(guests + 1)}
                    >
                      +
                    </Button>
                  </div>
                </div>

                <div>
                  <Label className="text-[#111827] mb-3 block">Będziesz? *</Label>
                  <RadioGroup defaultValue="yes" required>
                    <div className="flex items-center space-x-2 p-3 border border-[#E5E7EB] rounded-lg hover:bg-[#F9FAFB]">
                      <RadioGroupItem value="yes" id="yes" />
                      <Label htmlFor="yes" className="flex-1 cursor-pointer">
                        Tak, będę! 🎉
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-3 border border-[#E5E7EB] rounded-lg hover:bg-[#F9FAFB]">
                      <RadioGroupItem value="no" id="no" />
                      <Label htmlFor="no" className="flex-1 cursor-pointer">
                        Niestety nie mogę 😢
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="message" className="text-[#111827]">Wiadomość (opcjonalnie)</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Twoje życzenia lub dodatkowe informacje..."
                    className="mt-1"
                    rows={3}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-[#7C3AED] hover:bg-[#5B21B6] text-lg py-6"
                >
                  Potwierdź obecność 💌
                </Button>
              </form>
            </Card>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#F9FAFB] border-t border-[#E5E7EB]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm text-[#9CA3AF]">
            Powered by{' '}
            <a href="/" className="text-[#7C3AED] hover:underline">
              Zaprolink
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}