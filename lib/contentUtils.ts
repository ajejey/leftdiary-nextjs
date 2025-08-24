// Import necessary types and data
import { NewsArticle, samplePosts, Post, BaseContent } from './content';

// Check if a post exists in the sample posts data
export function getPostBySlug(slug: string): Post | null {
  const post = samplePosts.find(p => p.slug === slug);
  return post || null;
}

// Fetch a news article from the API
export async function getNewsArticleBySlug(slug: string): Promise<NewsArticle | null> {
  try {
    const apiUrl = process.env.NEWS_AGENT_API_URL || 'http://localhost:5000';
    const res = await fetch(`${apiUrl}/api/articles/${slug}`, {
      next: { revalidate: 3600 }, // Revalidate every hour for better static generation
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!res.ok) {
      if (res.status === 404) {
        return null;
      }
      console.error(`API error: ${res.status} ${res.statusText}`);
      return null;
    }
    const data = await res.json();
    
    return data;
  } catch (error) {
    console.error('Failed to fetch news article:', error);
    return null;
  }
}

// Unified function to get content by slug (either post or news)
export async function getContentBySlug(slug: string): Promise<{
  content: BaseContent | null;
  contentType: 'post' | 'news' | null;
  newsArticle?: NewsArticle;
}> {
  // First check if it's a post
  const post = getPostBySlug(slug);
  if (post) {
    return { content: post, contentType: 'post' };
  }
  
  // If not a post, check if it's a news article
  const newsArticle = await getNewsArticleBySlug(slug);
  if (newsArticle) {
    // Convert to BaseContent format with NewsContentAdapter
    const newsContent = {
      slug: newsArticle.slug,
      title: newsArticle.title,
      date: newsArticle.publishedAt ? 
        new Date(newsArticle.publishedAt).toISOString().split('T')[0] : 
        new Date().toISOString().split('T')[0],
      author: newsArticle.originalNewsSource?.title || 'Left Diary',
      categories: newsArticle.categories,
      description: newsArticle.summary,
      image: newsArticle.images && newsArticle.images.length > 0 
        ? newsArticle.images[0].url 
        : '/images/placeholder.jpg',
      contentType: 'news' as const,
      originalArticle: newsArticle // Include the original article with all its data
    };
    
    return { content: newsContent, contentType: 'news', newsArticle };
  }
  
  // If neither, return null
  return { content: null, contentType: null, newsArticle: undefined };
}
