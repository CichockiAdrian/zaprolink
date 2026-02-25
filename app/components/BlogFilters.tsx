'use client'
import { useState } from 'react';
import Link from 'next/link';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Clock, Search, ArrowRight } from 'lucide-react';
import type { BlogPost } from '../lib/blog';

interface BlogFiltersProps {
  posts: BlogPost[];
  categories: string[];
}

export default function BlogFilters({ posts, categories }: BlogFiltersProps) {
  const [activeCategory, setActiveCategory] = useState('Wszystkie');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = posts
    .filter((p) => activeCategory === 'Wszystkie' || p.category === activeCategory)
    .filter((p) => {
      if (!searchQuery) return true;
      const q = searchQuery.toLowerCase();
      return p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q);
    });

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
      <div className="flex flex-wrap gap-3 mb-8">
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

      {/* Siatka postów */}
      {filtered.length > 0 ? (
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
      ) : (
        <div className="text-center py-16 text-[#9CA3AF]">
          <p className="text-lg mb-2">Brak artykułów</p>
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