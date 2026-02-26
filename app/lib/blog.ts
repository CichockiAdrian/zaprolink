import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

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

function markdownToHtml(md: string): string {
  return md
    // Nagłówki
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    // Bold
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    // Listy
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
    // Numerowane listy
    .replace(/^\d+\. (.+)$/gm, '<li>$1</li>')
    // Linki
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>')
    // Paragrafy — linie które nie są tagami
    .replace(/^(?!<[a-z]).+$/gm, (line) => line.trim() ? `<p>${line}</p>` : '')
    // Czyść puste linie
    .replace(/\n\n+/g, '\n');
}

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    if (!fs.existsSync(BLOG_DIR)) {
      console.error('BLOG_DIR does not exist:', BLOG_DIR);
      return [];
    }

    const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md'));

    const posts = files.map((filename) => {
      const slug = filename.replace(/\.md$/, '');
      const filePath = path.join(BLOG_DIR, filename);
      const raw = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(raw);

      return {
        slug,
        title: data.title ?? '',
        excerpt: data.excerpt ?? '',
        category: data.category ?? 'Porady',
        image: data.image ?? '',
        readTime: data.readTime ?? '5 min',
        date: data.date ?? '',
        featured: data.featured ?? false,
        content: markdownToHtml(content),
      } as BlogPost;
    });

    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (err) {
    console.error('getAllPosts error:', err);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(BLOG_DIR, `${slug}.md`);
    if (!fs.existsSync(filePath)) {
      console.error('Post not found:', filePath);
      return null;
    }
    const raw = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(raw);

    return {
      slug,
      title: data.title ?? '',
      excerpt: data.excerpt ?? '',
      category: data.category ?? 'Porady',
      image: data.image ?? '',
      readTime: data.readTime ?? '5 min',
      date: data.date ?? '',
      featured: data.featured ?? false,
      content: markdownToHtml(content),
    };
  } catch (err) {
    console.error('getPostBySlug error:', err);
    return null;
  }
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