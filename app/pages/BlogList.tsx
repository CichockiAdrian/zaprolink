'use client'
import Link from 'next/link';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Search, Clock, ArrowRight } from 'lucide-react';

const posts = [
  {
    id: '1',
    slug: 'jak-stworzyc-idealne-zaproszenie-slubne',
    title: 'Jak stworzyć idealne zaproszenie ślubne w 2026?',
    excerpt: 'Poznaj najnowsze trendy w zaproszeniach ślubnych i dowiedz się, jak połączyć tradycję z nowoczesnością.',
    category: 'Porady',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600',
    readTime: '5 min',
    date: '2026-02-15',
  },
  {
    id: '2',
    slug: '10-powodow-dlaczego-warto-wybrac-cyfrowe-zaproszenie',
    title: '10 powodów, dlaczego warto wybrać cyfrowe zaproszenie',
    excerpt: 'Ekologia, wygoda i nowoczesność - dowiedz się, dlaczego cyfrowe zaproszenia to przyszłość.',
    category: 'Inspiracje',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600',
    readTime: '4 min',
    date: '2026-02-10',
  },
  {
    id: '3',
    slug: 'trendy-weselne-2026',
    title: 'Trendy weselne 2026 - co będzie modne?',
    excerpt: 'Od minimalizmu po maksymalizm - sprawdź, jakie style będą dominować w tym sezonie.',
    category: 'Inspiracje',
    image: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600',
    readTime: '6 min',
    date: '2026-02-05',
  },
  {
    id: '4',
    slug: 'jak-ustawic-rsvp',
    title: 'Jak ustawić RSVP, aby wszystko poszło gładko?',
    excerpt: 'Praktyczny poradnik jak zbierać potwierdzenia obecności i unikać problemów organizacyjnych.',
    category: 'Porady',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600',
    readTime: '7 min',
    date: '2026-01-28',
  },
  {
    id: '5',
    slug: 'zaproszenia-na-urodziny-dzieci',
    title: 'Zaproszenia na urodziny dzieci - kreatywne pomysły',
    excerpt: 'Jak stworzyć zaproszenie, które zachwyci małych gości i ich rodziców?',
    category: 'Inspiracje',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600',
    readTime: '5 min',
    date: '2026-01-20',
  },
  {
    id: '6',
    slug: 'event-firmowy-jak-zaprosic-profesjonalnie',
    title: 'Event firmowy - jak zaprosić profesjonalnie?',
    excerpt: 'Zaproszenia na eventy biznesowe wymagają odpowiedniego tonu i formy. Zobacz jak to zrobić.',
    category: 'Porady',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600',
    readTime: '6 min',
    date: '2026-01-15',
  },
];

export default function BlogList() {
  const featuredPost = posts[0];
  const regularPosts = posts.slice(1);

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="font-['Playfair_Display'] text-5xl font-bold text-[#111827] mb-4">
            Blog Zaprolink
          </h1>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto mb-8">
            Inspiracje, porady i nowości ze świata zaproszeń
          </p>

          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9CA3AF]" />
            <Input 
              placeholder="Szukaj artykułów..."
              className="pl-10"
            />
          </div>
        </div>

        {/* Featured Post */}
        <Card className="mb-16 overflow-hidden border-[#E5E7EB] hover:shadow-xl transition-shadow">
          <Link href={`/blog/${featuredPost.slug}`}>
            <div className="grid md:grid-cols-2 gap-0">
              <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
                <img 
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <Badge className="w-fit mb-3 bg-[#7C3AED] text-white border-none">
                  Wyróżnione
                </Badge>
                <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#111827] mb-3">
                  {featuredPost.title}
                </h2>
                <p className="text-[#6B7280] mb-4 line-clamp-2">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-[#9CA3AF]">
                  <Badge variant="outline">{featuredPost.category}</Badge>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <span>{featuredPost.date}</span>
                </div>
              </div>
            </div>
          </Link>
        </Card>

        {/* Categories Filter */}
        <div className="flex flex-wrap gap-3 mb-8">
          {['Wszystkie', 'Porady', 'Inspiracje', 'Nowości'].map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full transition-colors ${
                cat === 'Wszystkie'
                  ? 'bg-[#7C3AED] text-white'
                  : 'bg-[#F9FAFB] text-[#6B7280] hover:bg-[#EDE9FE]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {regularPosts.map((post) => (
            <Card key={post.id} className="group overflow-hidden border-[#E5E7EB] hover:shadow-xl transition-shadow">
              <Link href={`/blog/${post.slug}`}>
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <Badge variant="outline" className="mb-3 text-xs">
                    {post.category}
                  </Badge>
                  <h3 className="font-semibold text-[#111827] text-lg mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[#6B7280] mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-[#9CA3AF]">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                    <span className="flex items-center gap-1 text-[#7C3AED] group-hover:gap-2 transition-all">
                      Czytaj <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </Card>
          ))}
        </div>

        {/* Sidebar CTA */}
        <Card className="p-8 bg-gradient-to-br from-[#EDE9FE] to-[#FEF3C7] border-none text-center">
          <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#111827] mb-3">
            Gotowy, aby stworzyć swoje zaproszenie?
          </h3>
          <p className="text-[#6B7280] mb-6">
            Zacznij za darmo i zobacz jak to proste!
          </p>
          <Link 
            href="/onboarding/okazja"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#7C3AED] text-white rounded-full hover:bg-[#5B21B6] transition-colors"
          >
            Stwórz zaproszenie — od 29 zł
          </Link>
        </Card>
      </div>
    </div>
  );
}
