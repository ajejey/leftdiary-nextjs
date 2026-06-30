import { NextResponse } from 'next/server';
import { getAllPosts } from '@/lib/content';

export const dynamic = 'force-static';

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
  
  // Use a fixed date for static pages so crawlers don't think they change every hour.
  const staticPagesLastMod = new Date().toISOString();
  
  // Static pages with SEO priorities
  const staticPages = [
    { path: '', priority: '1.0', changefreq: 'daily' },
    { path: '/about', priority: '0.8', changefreq: 'monthly' },
    { path: '/contact', priority: '0.6', changefreq: 'monthly' },
    { path: '/privacy', priority: '0.3', changefreq: 'yearly' },
    { path: '/terms', priority: '0.3', changefreq: 'yearly' },
    { path: '/disclaimer', priority: '0.3', changefreq: 'yearly' },
    { path: '/posts', priority: '0.8', changefreq: 'weekly' }
  ];

  const posts = getAllPosts();
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  
  ${staticPages.map(page => `
  <url>
    <loc>${baseUrl}${page.path}</loc>
    <lastmod>${staticPagesLastMod}</lastmod>
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
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}