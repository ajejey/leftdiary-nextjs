import { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MasonryGrid from '@/components/blog/MasonryGrid';

// Force static generation
export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour

// Types
interface ContentSection {
  type: 'introduction' | 'section' | 'quote' | 'list' | 'statistics' | 'conclusion' | 'sources';
  title?: string;
  content: string;
}

interface FactCheckSource {
  url: string;
  title: string;
  publisher: string;
  relevantQuote: string;
}

interface FactCheck {
  claim: string;
  accuracy: 'accurate' | 'partially accurate' | 'inaccurate';
  correction: string;
  sources: FactCheckSource[];
  searchQueries: string[];
  additionalContext: string;
}

interface FactCheckSummary {
  overallAccuracy: string;
  strengthsOfAnalysis: string;
  areasForImprovement: string;
  recommendedSources: {
    url: string;
    title: string;
    description: string;
  }[];
}

interface NewsArticle {
  _id: string;
  title: string;
  slug: string;
  originalNewsSource?: {
    title: string;
    url: string;
    publishedAt: string;
  };
  content: string;
  contentSections?: ContentSection[];
  summary: string;
  analysisAngle?: string;
  categories: string[];
  tags: string[];
  keywords?: string[];
  seoMetadata: {
    metaTitle: string;
    metaDescription: string;
    focusKeyword: string;
    secondaryKeywords: string[];
  };
  images: {
    url: string;
    alt: string;
    caption?: string;
    isGenerated?: boolean;
  }[];
  sources: {
    text: string;
    url: string;
  }[];
  factChecking?: {
    factChecks: FactCheck[];
    summary: FactCheckSummary;
    lastCheckedAt: string;
  };
  status?: 'draft' | 'review' | 'published';
  publishedAt: string;
  createdAt?: string;
  updatedAt?: string;
}

interface NewsArticlesResponse {
  articles: NewsArticle[];
  totalPages: number;
  currentPage: number;
  totalArticles: number;
}

// Fetch news articles from our API
async function getNewsArticles(page = 1, limit = 12) {
  try {
    const apiUrl = process.env.NEWS_AGENT_API_URL || 'http://localhost:5000';
    const res = await fetch(`${apiUrl}/api/articles?page=${page}&limit=${limit}`, {
      cache: 'no-store', // No caching for immediate updates
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!res.ok) {
      console.error(`API error: ${res.status} ${res.statusText}`);
      return {
        articles: [],
        totalPages: 0,
        currentPage: page,
        totalArticles: 0
      };
    }
    
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch news articles:', error);
    return {
      articles: [],
      totalPages: 0,
      currentPage: page,
      totalArticles: 0
    };
  }
}


// Article Card Component
function ArticleCard({ article }: { article: NewsArticle }) {
  const formattedDate = new Date(article.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  // Get the first image or use a placeholder
  const imageUrl = article.images && article.images.length > 0 
    ? article.images[0].url 
    : '/images/placeholder.jpg';
  
  const imageAlt = article.images && article.images.length > 0
    ? article.images[0].alt
    : article.title;

  return (
    <div className="flex flex-col rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 h-full">
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-2 mb-2">
          {article.categories.slice(0, 2).map((category) => (
            <span 
              key={category} 
              className="text-xs font-semibold px-2 py-1 rounded bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
            >
              {category}
            </span>
          ))}
        </div>
        <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
          <Link href={`/posts/${article.slug}`} className="hover:text-blue-600 dark:hover:text-blue-400">
            {article.title}
          </Link>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
          {article.summary}
        </p>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {formattedDate}
          </span>
          <Link 
            href={`/posts/${article.slug}`}
            className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
          >
            Read More →
          </Link>
        </div>
      </div>
    </div>
  );
}

// News Articles Grid Component
function NewsArticlesGrid({ articles }: { articles: NewsArticle[] }) {
  return (
    <>
      {articles.map((article) => (
        <ArticleCard key={article._id} article={article} />
      ))}
    </>
  );
}

// Pagination Component
function Pagination({ currentPage, totalPages }: { currentPage: number; totalPages: number }) {
  return (
    <div className="flex justify-center mt-8 gap-2">
      {currentPage > 1 && (
        <Link
          href={`/news?page=${currentPage - 1}`}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          Previous
        </Link>
      )}
      
      <span className="px-4 py-2 bg-blue-600 text-white rounded-md">
        {currentPage}
      </span>
      
      {currentPage < totalPages && (
        <Link
          href={`/news?page=${currentPage + 1}`}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          Next
        </Link>
      )}
    </div>
  );
}

// Loading Component
function LoadingArticles() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="rounded-lg overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800 animate-pulse h-96">
          <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
          <div className="p-6">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-2"></div>
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Main Page Component
export default async function NewsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const page = params.page ? parseInt(params.page) : 1;
  const { articles, totalPages, currentPage } = await getNewsArticles(page);
  
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
          News Analysis
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          In-depth analysis of current events and trending topics from a progressive perspective.
        </p>
        <div className="flex gap-4">
          <Link 
            href="/posts/article-example"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            View Example Article
          </Link>
        </div>
      </div>
      
      <Suspense fallback={<LoadingArticles />}>
        <NewsArticlesGrid articles={articles} />
      </Suspense>
      
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </main>
  );
}

