'use client'
import { Link, useParams } from 'react-router';
import { Badge } from '../components/ui/badge';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Clock, Calendar, ArrowLeft, ChevronRight } from 'lucide-react';

const relatedPosts = [
  { slug: 'trendy-weselne-2026', title: 'Trendy weselne 2026', image: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=400' },
  { slug: 'jak-ustawic-rsvp', title: 'Jak ustawić RSVP?', image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400' },
  { slug: 'zaproszenia-na-urodziny-dzieci', title: 'Zaproszenia na urodziny dzieci', image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400' },
];

export default function BlogPost() {
  const { slug } = useParams();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#F9FAFB] border-b border-[#E5E7EB] py-6">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/blog" className="inline-flex items-center text-[#6B7280] hover:text-[#111827] mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Wróć do bloga
          </Link>
          <div className="text-sm text-[#6B7280]">
            <Link href="/blog" className="hover:text-[#111827]">Blog</Link>
            {' > '}
            <span className="text-[#9CA3AF]">Porady</span>
            {' > '}
            <span className="text-[#111827]">Jak stworzyć idealne zaproszenie ślubne</span>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="max-w-4xl mx-auto px-6 -mt-6">
        <img 
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1200"
          alt="Post hero"
          className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
        />
      </div>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 py-12">
        {/* Meta */}
        <div className="mb-8">
          <Badge className="mb-4 bg-[#EDE9FE] text-[#7C3AED] border-none">
            Porady
          </Badge>
          <h1 className="font-['Playfair_Display'] text-4xl lg:text-5xl font-bold text-[#111827] mb-4">
            Jak stworzyć idealne zaproszenie ślubne w 2026?
          </h1>
          <div className="flex items-center gap-6 text-sm text-[#6B7280]">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>15 lutego 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>5 min czytania</span>
            </div>
            <span>•</span>
            <span>Anna Kowalska</span>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-[#374151] leading-relaxed mb-6">
            Zaproszenia ślubne to pierwszy kontakt gości z Waszym wielkim dniem. W erze cyfryzacji, tradycyjne papierowe zaproszenia ustępują miejsca nowoczesnym, interaktywnym stronom-zaproszeniom. Poznaj najnowsze trendy i dowiedz się, jak stworzyć zaproszenie, które zachwyci Waszych gości!
          </p>

          <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#111827] mt-12 mb-4">
            1. Cyfrowe zaproszenia to przyszłość
          </h2>
          <p className="text-[#374151] leading-relaxed mb-6">
            W 2026 roku coraz więcej par młodych wybiera cyfrowe zaproszenia. Dlaczego? Bo łączą one ekologię z wygodą i nowoczesnością. Goście mogą potwierdzić obecność jednym kliknięciem, sprawdzić dojazd na mapie i mieć wszystkie informacje zawsze pod ręką w telefonie.
          </p>

          <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#111827] mt-12 mb-4">
            2. Personalizacja to klucz
          </h2>
          <p className="text-[#374151] leading-relaxed mb-6">
            Każde wesele jest wyjątkowe, więc zaproszenie też powinno takie być. Dzięki nowoczesnym kreatorom, możecie dostosować każdy element - od kolorów, przez czcionki, po układ sekcji. Dodajcie swoje zdjęcia, wideo z zaręczyn czy historię Waszego poznania.
          </p>

          <div className="bg-[#EDE9FE] border-l-4 border-[#7C3AED] p-6 my-8 rounded-r-lg">
            <p className="text-[#374151] italic mb-2">
              💡 <strong>Pro tip:</strong> Wykorzystaj sekcję FAQ, aby odpowiedzieć na najczęstsze pytania gości. Oszczędzi to Wam mnóstwo czasu!
            </p>
          </div>

          <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#111827] mt-12 mb-4">
            3. RSVP online to must-have
          </h2>
          <p className="text-[#374151] leading-relaxed mb-6">
            Zbieranie potwierdzeń obecności przez telefon czy SMS to przeszłość. Formularz RSVP online pozwala zebrać wszystkie informacje w jednym miejscu - od liczby gości, przez preferencje menu, po potrzebę noclegu. Wszystko przejrzyście i automatycznie.
          </p>

          <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#111827] mt-12 mb-4">
            4. Interaktywne elementy angażują gości
          </h2>
          <p className="text-[#374151] leading-relaxed mb-6">
            Dodaj odliczanie do ślubu, mapę dojazdu z nawigacją, galerię zdjęć czy nawet ściankę na żywo, gdzie goście będą mogli wrzucać zdjęcia podczas wesela. Im więcej interakcji, tym większe zaangażowanie!
          </p>

          <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#111827] mt-12 mb-4">
            5. Mobilność przede wszystkim
          </h2>
          <p className="text-[#374151] leading-relaxed mb-6">
            Pamiętajcie, że większość gości otworzy zaproszenie na telefonie. Upewnijcie się, że Wasze zaproszenie wygląda świetnie na każdym ekranie. Nowoczesne platformy jak Zaprolink automatycznie dostosowują layout do urządzenia.
          </p>
        </div>

        {/* CTA */}
        <Card className="p-8 bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] border-none text-center my-12">
          <h3 className="font-['Playfair_Display'] text-2xl font-bold text-white mb-3">
            Gotowi stworzyć swoje zaproszenie?
          </h3>
          <p className="text-white/90 mb-6">
            Stwórz profesjonalne zaproszenie w 5 minut
          </p>
          <Button 
            className="bg-white text-[#7C3AED] hover:bg-[#F9FAFB] rounded-full px-8"
            asChild
          >
            <Link href="/onboarding/okazja">
              Zacznij za darmo <ChevronRight className="ml-1 w-4 h-4" />
            </Link>
          </Button>
        </Card>

        {/* Related Posts */}
        <div className="mt-16">
          <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#111827] mb-6">
            Podobne artykuły
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((post) => (
              <Card key={post.slug} className="group overflow-hidden border-[#E5E7EB] hover:shadow-xl transition-shadow">
                <Link href={`/blog/${post.slug}`}>
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-[#111827] group-hover:text-[#7C3AED] transition-colors">
                      {post.title}
                    </h4>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
