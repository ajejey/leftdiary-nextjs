import { NextResponse } from 'next/server';
import { getAllPosts, getAllPublishedNewsArticles } from '@/lib/content';

// Force dynamic generation for immediate updates
export const dynamic = 'force-dynamic';
// No caching for immediate availability of new articles

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatDateForSitemap(dateString: string): string {
  const date = new Date(dateString);
  return date.toISOString();
}

export async function GET() {
  const baseUrl = 'https://leftdiary.com';
  const currentDate = new Date().toISOString();
  
  // Static pages with SEO priorities
  const staticPages = [
    { path: '', priority: '1.0', changefreq: 'daily' },
    { path: '/about', priority: '0.8', changefreq: 'monthly' },
    { path: '/contact', priority: '0.6', changefreq: 'monthly' },
    { path: '/privacy', priority: '0.3', changefreq: 'yearly' },
    { path: '/terms', priority: '0.3', changefreq: 'yearly' },
    { path: '/disclaimer', priority: '0.3', changefreq: 'yearly' },
    { path: '/news', priority: '0.9', changefreq: 'daily' },
    { path: '/posts', priority: '0.8', changefreq: 'weekly' }
  ];

  // Get real data
  const posts = getAllPosts();
  const newsArticles = await getAllPublishedNewsArticles();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  
  ${staticPages.map(page => `
  <url>
    <loc>${baseUrl}${page.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('')}

  ${posts.map((post) => {
    const lastMod = formatDateForSitemap(post.date);
    const imageUrl = post.image ? `${baseUrl}/images/cover_pages/${post.image}` : null;
    
    return `
  <url>
    <loc>${baseUrl}/posts/${post.slug}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>${imageUrl ? `
    <image:image>
      <image:loc>${imageUrl}</image:loc>
      <image:title>${escapeXml(post.title)}</image:title>
      <image:caption>${escapeXml(post.description)}</image:caption>
    </image:image>` : ''}
  </url>`;
  }).join('')}

  ${newsArticles.map((article) => {
    const lastMod = formatDateForSitemap(article.publishedAt);
    const isRecentNews = (new Date().getTime() - new Date(article.publishedAt).getTime()) < (48 * 60 * 60 * 1000); // Last 48 hours
    const imageUrl = article.images && article.images[0] ? article.images[0].url : null;
    
    return `
  <url>
    <loc>${baseUrl}/posts/${article.slug}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>${isRecentNews ? 'hourly' : 'weekly'}</changefreq>
    <priority>${isRecentNews ? '0.9' : '0.8'}</priority>${isRecentNews ? `
    <news:news>
      <news:publication>
        <news:name>Left Diary</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${article.publishedAt}</news:publication_date>
      <news:title>${escapeXml(article.title)}</news:title>
      <news:keywords>${article.keywords ? escapeXml(article.keywords.join(', ')) : ''}</news:keywords>
    </news:news>` : ''}${imageUrl ? `
    <image:image>
      <image:loc>${escapeXml(imageUrl)}</image:loc>
      <image:title>${escapeXml(article.title)}</image:title>
      <image:caption>${escapeXml(article.summary || article.title)}</image:caption>
    </image:image>` : ''}
  </url>`;
  }).join('')}

</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
