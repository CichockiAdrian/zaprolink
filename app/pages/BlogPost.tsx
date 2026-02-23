'use client'
import Link from 'next/link';
import { Badge } from '../components/ui/badge';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Clock, Calendar, ArrowLeft } from 'lucide-react';

const relatedPosts = [
  { slug: 'trendy-weselne-2026', title: 'Trendy weselne 2026', image: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=400' },
  { slug: 'jak-ustawic-rsvp', title: 'Jak ustawić RSVP?', image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400' },
  { slug: 'zaproszenia-na-urodziny-dzieci', title: 'Zaproszenia na urodziny dzieci', image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400' },
];

interface BlogPostProps {
  slug?: string;
}

export default function BlogPost({ slug }: BlogPostProps) {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-[#F9FAFB] border-b border-[#E5E7EB] py-6">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/blog" className="inline-flex items-center text-[#6B7280] hover:text-[#111827] mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Wróć do bloga
          </Link>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6">
        <img src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1200" alt="Post hero" className="w-full h-[400px] object-cover rounded-2xl shadow-xl" />
      </div>
      <article className="max-w-3xl mx-auto px-6 py-12">
        <div className="mb-8">
          <Badge className="mb-4 bg-[#EDE9FE] text-[#7C3AED] border-none">Porady</Badge>
          <h1 className="font-['Playfair_Display'] text-4xl lg:text-5xl font-bold text-[#111827] mb-4">
            Jak stworzyć idealne zaproszenie ślubne w 2026?
          </h1>
          <div className="flex items-center gap-6 text-sm text-[#6B7280]">
            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>15 lutego 2026</span></div>
            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>5 min czytania</span></div>
          </div>
        </div>
        <div className="prose prose-lg max-w-none">
          <p className="text-[#374151] text-lg leading-relaxed mb-6">Zaproszenie ślubne to pierwsza informacja, jaką Twoi goście otrzymają o Waszym wielkim dniu.</p>
          <h2 className="font-['Playfair_Display'] text-2xl font-bold text-[#111827] mt-10 mb-4">1. Zadbaj o kluczowe informacje</h2>
          <p className="text-[#374151] leading-relaxed mb-4">Każde zaproszenie ślubne powinno zawierać datę, godzinę i miejsce ceremonii oraz wesela.</p>
          <h2 className="font-['Playfair_Display'] text-2xl font-bold text-[#111827] mt-10 mb-4">2. Dodaj formularz RSVP</h2>
          <p className="text-[#374151] leading-relaxed mb-4">Cyfrowe zaproszenie z formularzem RSVP to ogromna wygoda. Goście potwierdzają obecność jednym kliknięciem.</p>
        </div>
        <div className="mt-12 p-8 bg-[#EDE9FE] rounded-2xl text-center">
          <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#111827] mb-3">Gotowy na swoje zaproszenie?</h3>
          <Link href="/onboarding/okazja">
            <Button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-8 py-3">Stwórz zaproszenie za darmo →</Button>
          </Link>
        </div>
      </article>
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <h2 className="font-['Playfair_Display'] text-2xl font-bold text-[#111827] mb-8">Powiązane artykuły</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <img src={post.image} alt={post.title} className="w-full h-40 object-cover" />
                <div className="p-4"><p className="font-medium text-[#111827] text-sm">{post.title}</p></div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
