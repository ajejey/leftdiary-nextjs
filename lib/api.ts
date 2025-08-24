/**
 * API functions for fetching article data
 */

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

interface ArticleQueryParams {
  limit?: number;
  category?: string;
  featured?: boolean;
}

/**
 * Fetch articles with optional filtering parameters
 * @param params - Query parameters for filtering articles
 * @returns Array of articles
 */
export async function getArticles(params: ArticleQueryParams = {}): Promise<Article[]> {
  // In a real implementation, this would fetch from your API
  // For now, we'll return mock data
  
  const mockArticles: Article[] = [
    {
      id: '1',
      title: 'The Hidden Costs of Capitalism: A Leftist Analysis',
      slug: 'hidden-costs-capitalism',
      content: '<article class="max-w-3xl mx-auto px-5 py-12 font-serif"><p>This is a sample article content with detailed analysis...</p></article>',
      summary: 'An exploration of capitalism\'s externalized costs and their impact on society and the environment',
      publishedAt: '2023-05-15T10:30:00Z',
      categories: ['Economics', 'Capitalism', 'Analysis'],
      images: [
        {
          url: '/images/capitalism-costs.jpg',
          alt: 'Visualization of capitalism\'s hidden costs',
          caption: 'The unseen impacts of modern capitalism'
        }
      ]
    },
    {
      id: '2',
      title: 'Climate Crisis: The Case for Eco-Socialism',
      slug: 'climate-crisis-eco-socialism',
      content: '<article class="max-w-3xl mx-auto px-5 py-12 font-serif"><p>Detailed analysis of climate crisis solutions...</p></article>',
      summary: 'How eco-socialist policies offer the most comprehensive solution to the climate crisis',
      publishedAt: '2023-06-22T14:15:00Z',
      categories: ['Climate', 'Eco-Socialism', 'Environment'],
      images: [
        {
          url: '/images/eco-socialism.jpg',
          alt: 'Eco-socialist vision for climate action',
          caption: 'Reimagining our relationship with the environment'
        }
      ]
    }
  ];
  
  let filteredArticles = [...mockArticles];
  
  // Apply category filter if provided
  if (params.category) {
    filteredArticles = filteredArticles.filter(article => 
      article.categories?.some(category => 
        category.toLowerCase() === params.category?.toLowerCase()
      )
    );
  }
  
  // Apply featured filter if provided
  if (params.featured) {
    // In a real implementation, you would have a featured flag
    // For now, just take the first article as featured
    filteredArticles = filteredArticles.slice(0, 1);
  }
  
  // Apply limit if provided
  if (params.limit && params.limit > 0) {
    filteredArticles = filteredArticles.slice(0, params.limit);
  }
  
  return filteredArticles;
}

/**
 * Fetch a single article by slug
 * @param slug - Article slug
 * @returns Article or null if not found
 */
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const articles = await getArticles();
  return articles.find(article => article.slug === slug) || null;
}

/**
 * Get all available article categories
 * @returns Array of unique category names
 */
export async function getCategories(): Promise<string[]> {
  const articles = await getArticles();
  const categorySet = new Set<string>();
  
  articles.forEach(article => {
    article.categories?.forEach(category => {
      categorySet.add(category);
    });
  });
  
  return Array.from(categorySet);
}
