import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

const BLOG_DIR = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  readTime: string;
  date: string;
  featured?: boolean;
  content: string;
}

// Czyta wszystkie .md z folderu content/blog
export async function getAllPosts(): Promise<BlogPost[]> {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md'));

  const posts = await Promise.all(
    files.map(async (filename) => {
      const slug = filename.replace(/\.md$/, '');
      const filePath = path.join(BLOG_DIR, filename);
      const raw = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(raw);

      // Konwertuj Markdown → HTML
      const processed = await remark().use(remarkHtml).process(content);
      const contentHtml = processed.toString();

      return {
        slug,
        title: data.title ?? '',
        excerpt: data.excerpt ?? '',
        category: data.category ?? 'Porady',
        image: data.image ?? '',
        readTime: data.readTime ?? '5 min',
        date: data.date ?? '',
        featured: data.featured ?? false,
        content: contentHtml,
      } as BlogPost;
    })
  );

  // Sortuj po dacie — najnowsze pierwsze
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getAllPosts();
  return posts.find((p) => p.slug === slug) ?? null;
}

export async function getFeaturedPost(): Promise<BlogPost | null> {
  const posts = await getAllPosts();
  return posts.find((p) => p.featured) ?? posts[0] ?? null;
}

export async function getRelatedPosts(currentSlug: string, limit = 3): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts.filter((p) => p.slug !== currentSlug).slice(0, limit);
}

export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  if (category === 'Wszystkie') return posts;
  return posts.filter((p) => p.category === category);
}

export const categories = ['Wszystkie', 'Porady', 'Inspiracje', 'Nowości', 'Dla twórców'] as const;