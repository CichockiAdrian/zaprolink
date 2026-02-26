import { getPostBySlug, getRelatedPosts, getAllPosts } from '../../lib/blog';
import Link from 'next/link';
import { Badge } from '../../components/ui/badge';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Clock, Calendar, ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const related = await getRelatedPosts(slug);

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-[#F9FAFB] border-b border-[#E5E7EB] py-6">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/blog" className="inline-flex items-center text-[#6B7280] hover:text-[#111827] transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Wróć do bloga
          </Link>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 pt-8">
        <img src={post.image} alt={post.title} className="w-full h-[400px] object-cover rounded-2xl shadow-xl" />
      </div>
      <article className="max-w-3xl mx-auto px-6 py-12">
        <Badge className="mb-4 bg-[#EDE9FE] text-[#7C3AED] border-none">{post.category}</Badge>
        <h1 className="font-['Playfair_Display'] text-4xl lg:text-5xl font-bold text-[#111827] mb-4">{post.title}</h1>
        <div className="flex items-center gap-6 text-sm text-[#6B7280] mb-8">
          <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>{post.date}</span></div>
          <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>{post.readTime} czytania</span></div>
        </div>
        <div className="prose prose-lg max-w-none prose-headings:font-['Playfair_Display'] prose-headings:text-[#111827] prose-p:text-[#374151] prose-li:text-[#374151]"
          dangerouslySetInnerHTML={{ __html: post.content }} />
        <div className="mt-12 p-8 bg-[#EDE9FE] rounded-2xl text-center">
          <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#111827] mb-3">Gotowy na swoje zaproszenie?</h3>
          <Link href="/onboarding/okazja">
            <Button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-8 py-3 rounded-full">Stwórz zaproszenie za darmo →</Button>
          </Link>
        </div>
      </article>
      {related.length > 0 && (
        <div className="max-w-4xl mx-auto px-6 pb-16">
          <h2 className="font-['Playfair_Display'] text-2xl font-bold text-[#111827] mb-8">Powiązane artykuły</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
                  <img src={p.image} alt={p.title} className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300" />
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