import Link from 'next/link';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { getAllPosts, getFeaturedPost, categories } from '../lib/blog';
import BlogFilters from '../components/BlogFilters';

export default async function BlogListServer() {
  const [allPosts, featuredPost] = await Promise.all([
    getAllPosts(),
    getFeaturedPost(),
  ]);

  // Wyróżniony nie pojawia się w siatce — BlogFilters go obsługuje osobno
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

        {/* Filtry + wyróżniony + siatka (wszystko w client component) */}
        {featuredPost ? (
          <BlogFilters
            posts={regularPosts}
            featuredPost={featuredPost}
            categories={[...categories]}
          />
        ) : (
          <p className="text-center text-[#9CA3AF]">Brak artykułów</p>
        )}

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