'use client'
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Eye, ChevronRight } from 'lucide-react';
import { templateList } from '../data/templateData';

const categories = [
  { id: 'all', name: 'Wszystkie' },
  { id: 'wedding', name: 'Ślub' },
  { id: 'birthday', name: 'Urodziny' },
  { id: 'corporate', name: 'Event firmowy' },
];

export default function Templates() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? templateList
    : templateList.filter((t) => t.category === activeCategory);

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        <div className="text-center mb-12">
          <h1 className="font-['Playfair_Display'] text-5xl font-bold text-[#111827] mb-4">
            Wybierz szablon
          </h1>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            Każdy szablon możesz w pełni dostosować — kolory, czcionki, treść. Kliknij podgląd by zobaczyć jak wygląda prawdziwe zaproszenie.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#7C3AED] text-white'
                  : 'bg-[#F9FAFB] text-[#6B7280] hover:bg-[#EDE9FE]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {filtered.map((template) => (
            <Card key={template.id} className="group overflow-hidden border-[#E5E7EB] hover:shadow-xl transition-all">
              <div className="aspect-[16/10] overflow-hidden bg-[#F9FAFB] relative">
                <img
                  src={template.preview}
                  alt={template.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <Button variant="secondary" size="sm" asChild>
                    <Link href={`/preview/${template.id}`} target="_blank">
                      <Eye className="w-4 h-4 mr-2" />
                      Podgląd
                    </Link>
                  </Button>
                  <Button size="sm" className="bg-[#7C3AED] hover:bg-[#5B21B6]" asChild>
                    <Link href={`/onboarding/okazja?template=${template.id}`}>
                      Użyj
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="text-xs">{template.style}</Badge>
                  {template.isPremium && (
                    <Badge className="bg-[#F59E0B] text-white border-none text-xs">⭐ Premium</Badge>
                  )}
                </div>
                <h3 className="font-semibold text-[#111827] text-lg mb-3">{template.name}</h3>
                {/* Paleta kolorów — tylko tutaj, bez duplikatu na hover */}
                <div className="flex gap-1.5">
                  {[template.colors.background, template.colors.accent, template.colors.primary, template.colors.surface].map((color, i) => (
                    <div
                      key={i}
                      className="w-4 h-4 rounded-full border border-[#E5E7EB]"
                      style={{ background: color }}
                    />
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-[#6B7280] mb-4">
            Nie możesz się zdecydować? Zacznij od dowolnego — zawsze możesz zmienić styl w builderze!
          </p>
          <Button size="lg" className="bg-[#7C3AED] hover:bg-[#5B21B6] rounded-full" asChild>
            <Link href="/onboarding/okazja">
              Zacznij tworzyć <ChevronRight className="ml-1 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}