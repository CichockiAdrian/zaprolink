'use client'
import { useState } from 'react';
import Link from 'next/link';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Clock, Search, ArrowRight } from 'lucide-react';
import type { BlogPost } from '../lib/blog';

interface BlogFiltersProps {
  posts: BlogPost[];        // wszystkie posty BEZ wyróżnionego
  featuredPost: BlogPost;   // wyróżniony zawsze przekazany osobno
  categories: string[];
}

export default function BlogFilters({ posts, featuredPost, categories }: BlogFiltersProps) {
  const [activeCategory, setActiveCategory] = useState('Wszystkie');
  const [searchQuery, setSearchQuery] = useState('');

  const q = searchQuery.toLowerCase();

  // Czy wyróżniony pasuje do aktywnego filtra/wyszukiwania
  const featuredMatches =
    (activeCategory === 'Wszystkie' || featuredPost.category === activeCategory) &&
    (!searchQuery ||
      featuredPost.title.toLowerCase().includes(q) ||
      featuredPost.excerpt.toLowerCase().includes(q));

  const filtered = posts
    .filter((p) => activeCategory === 'Wszystkie' || p.category === activeCategory)
    .filter((p) =>
      !searchQuery ||
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q)
    );

  const noResults = !featuredMatches && filtered.length === 0;

  return (
    <>
      {/* Wyszukiwarka */}
      <div className="max-w-md mx-auto relative mb-8">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9CA3AF]" />
        <Input
          placeholder="Szukaj artykułów..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Filtry kategorii */}
      <div className="flex flex-wrap gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => { setActiveCategory(cat); setSearchQuery(''); }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === cat
                ? 'bg-[#7C3AED] text-white'
                : 'bg-[#F9FAFB] text-[#6B7280] hover:bg-[#EDE9FE] hover:text-[#7C3AED]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Wyróżniony — zawsze widoczny jeśli pasuje do filtra */}
      {featuredMatches && (
        <Card className="mb-10 overflow-hidden border-[#E5E7EB] hover:shadow-xl transition-shadow">
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
                  ⭐ Wyróżnione
                </Badge>
                <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#111827] mb-3">
                  {featuredPost.title}
                </h2>
                <p className="text-[#6B7280] mb-4 line-clamp-2">{featuredPost.excerpt}</p>
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
      )}

      {/* Siatka postów */}
      {filtered.length > 0 && (
        <div className="grid md:grid-cols-3 gap-6">
          {filtered.map((post) => (
            <Card key={post.slug} className="group overflow-hidden border-[#E5E7EB] hover:shadow-xl transition-shadow">
              <Link href={`/blog/${post.slug}`}>
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <Badge variant="outline" className="mb-3 text-xs">{post.category}</Badge>
                  <h3 className="font-semibold text-[#111827] text-lg mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-[#6B7280] mb-4 line-clamp-2">{post.excerpt}</p>
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
      )}

      {/* Brak wyników — tylko jeśli ani wyróżniony ani siatka nic nie pokazuje */}
      {noResults && (
        <div className="text-center py-16 text-[#9CA3AF]">
          <p className="text-lg mb-2">Brak artykułów w tej kategorii</p>
          <p className="text-sm">Spróbuj innej kategorii lub frazy</p>
          <button
            onClick={() => { setActiveCategory('Wszystkie'); setSearchQuery(''); }}
            className="mt-4 text-[#7C3AED] hover:underline text-sm"
          >
            Pokaż wszystkie
          </button>
        </div>
      )}
    </>
  );
}