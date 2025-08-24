import { NextResponse } from 'next/server';
import { getArticles } from '../../lib/api';

interface Article {
  id: string;
  title: string;
  slug: string;
  content: string;
  summary?: string;
  publishedAt: string;
  categories?: string[];
  images?: {
    url: string;
    alt: string;
    caption?: string;
  }[];
}

/**
 * Generates an RSS feed for Google Discover&apos;s Follow feature
 * @see https://developers.google.com/search/docs/appearance/google-discover
 */
export async function GET() {
  try {
    // Fetch the latest articles
    const articles = await getArticles({ limit: 20 });

    // Generate the RSS feed XML
    const rssXml = generateRssFeed(articles);

    // Return the RSS feed with the appropriate content type
    return new NextResponse(rssXml, {
      headers: {
        'Content-Type': 'application/rss+xml; charset=utf-8',
      },
    });
  } catch (error) {
    console.error('Error generating RSS feed:', error);
    return new NextResponse('Error generating RSS feed', { status: 500 });
  }
}

/**
 * Generates the RSS feed XML content
 * @param articles - List of articles to include in the feed
 * @returns RSS feed XML string
 */
function generateRssFeed(articles: Article[]) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://leftdiary.com';
  const feedUrl = `${baseUrl}/feed.xml`;

  // Current date in RFC 822 format
  const pubDate = new Date().toUTCString();

  // Start the RSS feed
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>Left Diary - Radical Leftist Analysis</title>
    <link>${baseUrl}</link>
    <description>Provocative leftist analysis that challenges mainstream narratives and exposes the machinery of power behind current events.</description>
    <language>en-us</language>
    <lastBuildDate>${pubDate}</lastBuildDate>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
    <image>
      <url>${baseUrl}/logo.png</url>
      <title>Left Diary</title>
      <link>${baseUrl}</link>
    </image>\n`;

  // Add each article as an item
  articles.forEach((article) => {
    const articleUrl = `${baseUrl}/news/${article.slug}`;
    const articleDate = new Date(article.publishedAt).toUTCString();
    const imageUrl = article.images && article.images.length > 0 
      ? article.images[0].url 
      : `${baseUrl}/default-image.png`;
    
    // Format categories as RSS categories
    const categories = article.categories
      ? article.categories.map((category: string) => `    <category>${category}</category>`).join('\n')
      : '';

    // Create a summary from the content
    const summary = article.summary || article.content.substring(0, 280) + '...';

    xml += `  <item>
    <title>${escapeXml(article.title)}</title>
    <link>${articleUrl}</link>
    <guid isPermaLink="true">${articleUrl}</guid>
    <pubDate>${articleDate}</pubDate>
    <description>${escapeXml(summary)}</description>
    <content:encoded><![CDATA[${article.content}]]></content:encoded>
    <author>leftdiary@example.com (Left Diary)</author>
${categories}
    <media:content url="${imageUrl}" medium="image" width="1200" height="675" />
    <media:description type="plain">${escapeXml(article.images && article.images.length > 0 ? article.images[0].alt || article.title : article.title)}</media:description>
  </item>\n`;
  });

  // Close the RSS feed
  xml += `  </channel>
</rss>`;

  return xml;
}

/**
 * Escapes XML special characters
 * @param text - Text to escape
 * @returns Escaped text
 */
function escapeXml(text: string): string {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Set the dynamic segment to avoid Next.js error
export const dynamic = 'force-dynamic';
