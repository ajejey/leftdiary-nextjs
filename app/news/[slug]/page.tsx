import { redirect } from 'next/navigation';

// This page redirects all news article requests to the unified posts URL structure

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  // Await the params in Next.js 15+
  const { slug } = await params;
  
  // Redirect to the unified URL structure
  redirect(`/posts/${slug}`);
}
