import Link from 'next/link';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Clock } from 'lucide-react';
import { getAllPosts, getFeaturedPost, categories } from '../lib/blog';
import BlogFilters from '../components/BlogFilters';

export default async function BlogListServer() {
  const [allPosts, featuredPost] = await Promise.all([
    getAllPosts(),
    getFeaturedPost(),
  ]);

  const regularPosts = featuredPost
    ? allPosts.filter((p) => p.slug !== featuredPost.slug)
    : allPosts;

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        {/* Hero */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-[#EDE9FE] text-[#7C3AED] border-none">BLOG</Badge>
          <h1 className="font-['Playfair_Display'] text-5xl font-bold text-[#111827] mb-4">
            Blog Zaprolink
          </h1>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            Inspiracje, porady i nowości ze świata zaproszeń
          </p>
        </div>

        {/* Wyróżniony — zawsze widoczny, nad filtrami */}
        {featuredPost && (
          <Card className="mb-12 overflow-hidden border-[#E5E7EB] hover:shadow-xl transition-shadow">
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

        {/* Filtry + siatka */}
        <BlogFilters
          posts={regularPosts}
          categories={[...categories]}
        />

        {/* CTA */}
        <Card className="mt-12 p-8 bg-gradient-to-br from-[#EDE9FE] to-[#FEF3C7] border-none text-center">
          <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#111827] mb-3">
            Gotowy, aby stworzyć swoje zaproszenie?
          </h3>
          <p className="text-[#6B7280] mb-6">Zacznij za darmo i zobacz jak to proste!</p>
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