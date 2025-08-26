import { NextResponse } from 'next/server';
import { getAllPosts, getAllPublishedNewsArticles, type Post, type NewsArticle } from '@/lib/content';

// Force dynamic generation for immediate updates
export const dynamic = 'force-dynamic';
// No caching for immediate availability of new articles

interface SitemapEntry {
  url: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
  contentType: 'page' | 'post' | 'news';
  title?: string;
  description?: string;
  image?: string;
  categories?: string[];
  tags?: string[];
  author?: string;
  publishedAt?: string;
}

interface SitemapResponse {
  baseUrl: string;
  lastGenerated: string;
  totalUrls: number;
  entries: SitemapEntry[];
  stats: {
    staticPages: number;
    posts: number;
    newsArticles: number;
  };
}

export async function GET() {
  const baseUrl = 'https://leftdiary.com';
  const currentDate = new Date().toISOString();
  
  // Static pages
  const staticPages = [
    { path: '', priority: 1.0, changefreq: 'daily' as const, title: 'Left Diary - Progressive Analysis & Leftist Insights' },
    { path: '/about', priority: 0.8, changefreq: 'monthly' as const, title: 'About Left Diary' },
    { path: '/contact', priority: 0.6, changefreq: 'monthly' as const, title: 'Contact Us' },
    { path: '/privacy', priority: 0.3, changefreq: 'yearly' as const, title: 'Privacy Policy' },
    { path: '/terms', priority: 0.3, changefreq: 'yearly' as const, title: 'Terms of Service' },
    { path: '/disclaimer', priority: 0.3, changefreq: 'yearly' as const, title: 'Disclaimer' },
    { path: '/news', priority: 0.9, changefreq: 'daily' as const, title: 'News Analysis' },
    { path: '/posts', priority: 0.8, changefreq: 'weekly' as const, title: 'All Posts' }
  ];

  // Get real data
  const posts = getAllPosts();
  const newsArticles = await getAllPublishedNewsArticles();
  
  console.log(`Sitemap: Found ${posts.length} posts and ${newsArticles.length} news articles`);
  

  const entries: SitemapEntry[] = [];

  // Add static pages
  staticPages.forEach(page => {
    entries.push({
      url: `${baseUrl}${page.path}`,
      lastmod: currentDate,
      changefreq: page.changefreq,
      priority: page.priority,
      contentType: 'page',
      title: page.title
    });
  });

  // Add posts
  posts.forEach((post: Post) => {
    entries.push({
      url: `${baseUrl}/posts/${post.slug}`,
      lastmod: new Date(post.date).toISOString(),
      changefreq: 'monthly',
      priority: 0.7,
      contentType: 'post',
      title: post.title,
      description: post.description,
      image: post.image ? `${baseUrl}/images/cover_pages/${post.image}` : undefined,
      categories: post.categories,
      author: post.author,
      publishedAt: post.date
    });
  });

  // Add news articles
  newsArticles.forEach((article: NewsArticle) => {
    const isRecentNews = (new Date().getTime() - new Date(article.publishedAt).getTime()) < (48 * 60 * 60 * 1000);
    
    entries.push({
      url: `${baseUrl}/posts/${article.slug}`,
      lastmod: new Date(article.publishedAt).toISOString(),
      changefreq: isRecentNews ? 'hourly' : 'weekly',
      priority: isRecentNews ? 0.9 : 0.8,
      contentType: 'news',
      title: article.title,
      description: article.summary,
      image: article.images && article.images[0] ? article.images[0].url : undefined,
      categories: article.categories,
      tags: article.tags,
      author: article.originalNewsSource?.title || 'Left Diary',
      publishedAt: article.publishedAt
    });
  });

  const response: SitemapResponse = {
    baseUrl,
    lastGenerated: currentDate,
    totalUrls: entries.length,
    entries,
    stats: {
      staticPages: staticPages.length,
      posts: posts.length,
      newsArticles: newsArticles.length
    }
  };

  return NextResponse.json(response, {
    headers: {
      'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}