import { NextResponse } from 'next/server';

export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://leftdiary.com/sitemap.xml

# Crawl-delay for responsible crawling
Crawl-delay: 1

# Disallow admin and private areas
Disallow: /admin/
Disallow: /_next/
Disallow: /api/

# Allow social media bots
User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: WhatsApp
Allow: /

User-agent: Googlebot
Allow: /
`;

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400', // 24 hours
    },
  });
}
