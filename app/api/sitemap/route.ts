import { NextResponse } from 'next/server';
import { getAllPosts, type Post } from '@/lib/content';

export const dynamic = 'force-static';

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
    { path: '/posts', priority: 0.8, changefreq: 'weekly' as const, title: 'All Posts' }
  ];

  const posts = getAllPosts();
  

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

  const response: SitemapResponse = {
    baseUrl,
    lastGenerated: currentDate,
    totalUrls: entries.length,
    entries,
    stats: {
      staticPages: staticPages.length,
      posts: posts.length,
      newsArticles: 0
    }
  };

  return NextResponse.json(response, {
    headers: {
      'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}