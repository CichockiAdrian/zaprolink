'use client'
import Link from 'next/link';
import { Badge } from '../components/ui/badge';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Clock, Calendar, ArrowLeft } from 'lucide-react';
import { getPostBySlug, getRelatedPosts } from '../data/blogData';

interface BlogPostProps {
  slug?: string;
}

export default function BlogPost({ slug }: BlogPostProps) {
  const post = slug ? getPostBySlug(slug) : null;
  const related = slug ? getRelatedPosts(slug) : [];

  // 404 jeśli artykuł nie istnieje
  if (!post) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center text-center px-6">
        <p className="text-6xl mb-4">📭</p>
        <h1 className="font-['Playfair_Display'] text-3xl font-bold text-[#111827] mb-3">
          Artykuł nie istnieje
        </h1>
        <p className="text-[#6B7280] mb-8">
          Nie znaleźliśmy artykułu o tym adresie. Może został usunięty lub adres jest nieprawidłowy.
        </p>
        <Link href="/blog">
          <Button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-full px-8">
            Wróć do bloga
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">

      {/* Breadcrumb */}
      <div className="bg-[#F9FAFB] border-b border-[#E5E7EB] py-6">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/blog" className="inline-flex items-center text-[#6B7280] hover:text-[#111827] transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Wróć do bloga
          </Link>
        </div>
      </div>

      {/* Hero image */}
      <div className="max-w-4xl mx-auto px-6 pt-8">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
        />
      </div>

      {/* Artykuł */}
      <article className="max-w-3xl mx-auto px-6 py-12">
        <div className="mb-8">
          <Badge className="mb-4 bg-[#EDE9FE] text-[#7C3AED] border-none">
            {post.category}
          </Badge>
          <h1 className="font-['Playfair_Display'] text-4xl lg:text-5xl font-bold text-[#111827] mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-6 text-sm text-[#6B7280]">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime} czytania</span>
            </div>
          </div>
        </div>

        {/* Treść artykułu */}
        <div
          className="prose prose-lg max-w-none text-[#374151] 
            prose-h2:font-['Playfair_Display'] prose-h2:text-2xl prose-h2:font-bold prose-h2:text-[#111827] prose-h2:mt-10 prose-h2:mb-4
            prose-p:leading-relaxed prose-p:mb-4"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* CTA w artykule */}
        <div className="mt-12 p-8 bg-[#EDE9FE] rounded-2xl text-center">
          <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#111827] mb-3">
            Gotowy na swoje zaproszenie?
          </h3>
          <p className="text-[#6B7280] mb-6">
            Stwórz piękne zaproszenie w 5 minut — zacznij zupełnie za darmo.
          </p>
          <Link href="/onboarding/okazja">
            <Button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-8 py-3 rounded-full">
              Stwórz zaproszenie za darmo →
            </Button>
          </Link>
        </div>
      </article>

      {/* Powiązane artykuły */}
      {related.length > 0 && (
        <div className="max-w-4xl mx-auto px-6 pb-16">
          <h2 className="font-['Playfair_Display'] text-2xl font-bold text-[#111827] mb-8">
            Powiązane artykuły
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-4">
                    <Badge variant="outline" className="mb-2 text-xs">{p.category}</Badge>
                    <p className="font-medium text-[#111827] text-sm line-clamp-2">{p.title}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}