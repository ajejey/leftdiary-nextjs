import { NextResponse } from 'next/server';

// You'll need to implement these functions to fetch your content
// import { getAllPosts } from '@/lib/posts';
// import { getAllNewsArticles } from '@/lib/news';

// Define interfaces for type safety
interface PostItem {
  slug: string;
  title: string;
  description: string;
  image?: string;
  createdAt: string;
  updatedAt?: string;
}

interface NewsArticleItem {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  createdAt: string;
  updatedAt?: string;
  keywords?: string[];
  images?: Array<{
    url: string;
    caption?: string;
  }>;
}

export async function GET() {
  const baseUrl = 'https://leftdiary.com';
  
  // Static pages
  const staticPages = [
    '',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
    '/disclaimer',
    '/news',
    '/posts'
  ];

  // TODO: Implement these functions to fetch your actual content
  // const posts = await getAllPosts();
  // const newsArticles = await getAllNewsArticles();
  
  // For now, using placeholder data - replace with actual data fetching
  const posts: PostItem[] = [];
  const newsArticles: NewsArticleItem[] = [];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  
  ${staticPages.map(page => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page === '' ? 'daily' : 'weekly'}</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}

  ${posts.map((post: PostItem) => `
  <url>
    <loc>${baseUrl}/posts/${post.slug}</loc>
    <lastmod>${post.updatedAt || post.createdAt}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    ${post.image ? `
    <image:image>
      <image:loc>${baseUrl}/images/cover_pages/${post.image}</image:loc>
      <image:title>${post.title}</image:title>
      <image:caption>${post.description}</image:caption>
    </image:image>` : ''}
  </url>`).join('')}

  ${newsArticles.map((article: NewsArticleItem) => `
  <url>
    <loc>${baseUrl}/posts/${article.slug}</loc>
    <lastmod>${article.updatedAt || article.createdAt}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <news:news>
      <news:publication>
        <news:name>Left Diary</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${article.publishedAt}</news:publication_date>
      <news:title>${article.title}</news:title>
      <news:keywords>${article.keywords?.join(', ') || ''}</news:keywords>
    </news:news>
    ${article.images && article.images[0] ? `
    <image:image>
      <image:loc>${article.images[0].url}</image:loc>
      <image:title>${article.title}</image:title>
      <image:caption>${article.images[0].caption || article.title}</image:caption>
    </image:image>` : ''}
  </url>`).join('')}

</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, revalidate',
    },
  });
}
