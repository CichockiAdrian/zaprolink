'use client'
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Eye, ChevronRight } from 'lucide-react';

const templates = [
  { id: '1', name: 'Elegant', style: 'Klasyczny', category: 'wedding', preview: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400', isPremium: false },
  { id: '2', name: 'Modern', style: 'Nowoczesny', category: 'wedding', preview: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400', isPremium: false },
  { id: '3', name: 'Kwiatowy', style: 'Romantyczny', category: 'wedding', preview: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=400', isPremium: false },
  { id: '4', name: 'Dark', style: 'Elegancki', category: 'wedding', preview: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400', isPremium: true },
  { id: '5', name: 'Pastel', style: 'Delikatny', category: 'birthday', preview: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400', isPremium: false },
  { id: '6', name: 'Minimal', style: 'Minimalistyczny', category: 'corporate', preview: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400', isPremium: true },
  { id: '7', name: 'Festive', style: 'Imprezowy', category: 'birthday', preview: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400', isPremium: false },
  { id: '8', name: 'Corporate', style: 'Biznesowy', category: 'corporate', preview: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400', isPremium: false },
  { id: '9', name: 'Boho', style: 'Artystyczny', category: 'wedding', preview: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400', isPremium: true },
];

const categories = [
  { id: 'all', name: 'Wszystkie' },
  { id: 'wedding', name: 'Ślub' },
  { id: 'birthday', name: 'Urodziny' },
  { id: 'corporate', name: 'Event firmowy' },
];

export default function Templates() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredTemplates = activeCategory === 'all' 
    ? templates 
    : templates.filter(t => t.category === activeCategory);

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="font-['Playfair_Display'] text-5xl font-bold text-[#111827] mb-4">
            Wybierz szablon
          </h1>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            Każdy szablon możesz w pełni dostosować w edytorze. Zmień kolory, czcionki i dodaj własne sekcje.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#7C3AED] text-white'
                  : 'bg-[#F9FAFB] text-[#6B7280] hover:bg-[#EDE9FE]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {filteredTemplates.map((template) => (
            <Card key={template.id} className="group overflow-hidden border-[#E5E7EB] hover:shadow-xl transition-all">
              <div className="aspect-[16/10] overflow-hidden bg-[#F9FAFB] relative">
                <img 
                  src={template.preview} 
                  alt={template.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <Button variant="secondary" size="sm" asChild>
                    <Link href={`/kasia-i-maciek`} target="_blank">
                      <Eye className="w-4 h-4 mr-2" />
                      Podgląd
                    </Link>
                  </Button>
                  <Button size="sm" className="bg-[#7C3AED] hover:bg-[#5B21B6]" asChild>
                    <Link href="/onboarding/okazja">
                      Użyj
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="text-xs">
                    {template.style}
                  </Badge>
                  {template.isPremium && (
                    <Badge className="bg-[#F59E0B] text-white border-none text-xs">
                      ⭐ Premium
                    </Badge>
                  )}
                </div>
                <h3 className="font-semibold text-[#111827] text-lg">{template.name}</h3>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-[#6B7280] mb-4">
            Nie możesz się zdecydować? Zacznij od dowolnego szablonu - zawsze możesz go zmienić!
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
