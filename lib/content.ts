// Unified content types for both posts and news articles

// Base content interface that both posts and news will implement
export interface BaseContent {
  slug: string;
  title: string;
  date: string;
  author: string;
  categories: string[];
  description: string;
  image: string;
  contentType: 'post' | 'news'; // To distinguish between post and news
}

// Interface for hardcoded blog posts
export interface Post extends BaseContent {
  contentType: 'post';
}

// Types for news articles from API
export interface ContentSection {
  type: 'introduction' | 'section' | 'quote' | 'list' | 'statistics' | 'conclusion' | 'sources';
  title?: string;
  content: string;
}

export interface FactCheckSource {
  url: string;
  title: string;
  publisher: string;
  relevantQuote: string;
}

export interface FactCheck {
  claim: string;
  accuracy: 'accurate' | 'partially accurate' | 'inaccurate';
  correction: string;
  sources: FactCheckSource[];
  searchQueries: string[];
  additionalContext: string;
}

export interface FactCheckSummary {
  overallAccuracy: string;
  strengthsOfAnalysis: string;
  areasForImprovement: string;
  recommendedSources: {
    url: string;
    title: string;
    description: string;
  }[];
}

// Original news article interface
export interface NewsArticle {
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

// Adapter for news articles to match the BaseContent interface
export interface NewsContentAdapter extends BaseContent {
  contentType: 'news';
  originalArticle: NewsArticle; // Keep the original article data for detailed views
}

// Response from the news API
export interface NewsArticlesResponse {
  articles: NewsArticle[];
  totalPages: number;
  currentPage: number;
  totalArticles: number;
}

// Sample post data that was previously in page.tsx
export const samplePosts: Post[] = [
  {
    slug: 'capitalism-a-ghost-story',
    title: 'Capitalism - A Ghost Story - Arundhati Roy',
    date: '2020-03-27',
    author: 'Arundhati Roy',
    categories: ['Capitalism', 'India'],
    description: 'Capitalism A Ghost Story by Arundhati Roy is a book that will show you what kind of inequality we live in, how it is bread and maintained by capitalism.',
    image: 'Capitalism_a_ghost_story_small.png',
    contentType: 'post'
  },
  {
    slug: 'right-to-information',
    title: 'Right to Information Act - Explained',
    date: '2020-04-08',
    author: 'Left Diary',
    categories: ['India', 'Democracy'],
    description: 'A comprehensive guide to understanding the Right to Information Act in India and how it empowers citizens.',
    image: 'The_RTI_Story.jpg',
    contentType: 'post'
  },
  {
    slug: 'Summary-Requiem-for-the-American-Dream',
    title: 'Requiem for the American Dream - Noam Chomsky',
    date: '2020-04-13',
    author: 'Noam Chomsky',
    categories: ['Politics', 'Media'],
    description: 'A deep dive into the political thoughts and media analysis of Noam Chomsky, one of the most influential intellectuals of our time.',
    image: 'Requiem_small.jpg',
    contentType: 'post'
  },
  {
    slug: '10-must-read-noam-chomsky-books',
    title: '10 Must Read Noam Chomsky Books',
    date: '2020-04-13',
    author: 'Left Diary',
    categories: ['Politics', 'Media'],
    description: 'A deep dive into the political thoughts and media analysis of Noam Chomsky, one of the most influential intellectuals of our time.',
    image: 'top10_Chomsky_2000x1000.jpg',
    contentType: 'post'
  },
  {
    slug: 'pedagogy-of-the-oppressed',
    title: 'Pedagogy of the Oppressed',
    date: '2020-04-13',
    author: 'Paulo Freire',
    categories: ['Education', 'Oppression'],
    description: 'Explore the groundbreaking ideas of Paulo Freire in Pedagogy of the Oppressed. Critique traditional education systems and discover a new approach towards liberation and empowerment.',
    image: 'pedagogy.jpg',
    contentType: 'post'
  },
  {
    slug: 'beginner-leftist-books',
    title: 'Beginner Leftist Books',
    date: '2020-04-13',
    author: 'Left Diary',
    categories: ['beginner', 'Must read'],
    description: 'Have you just realized that there is something fundamentally wrong with the world we live in today? Have you been wondering where to begin to learn more about the world we live in today and what is wrong with it?',
    image: 'Beginner_leftist books_portrait.png',
    contentType: 'post'
  },
  {
    slug: 'feminism-is-for-everybody-bell-hooks',
    title: 'Feminism is for Everybody - Bell Hooks',
    date: '2023-01-31',
    author: 'Bell Hooks',
    categories: ['Feminism'],
    description: 'Feminism is for Everybody by bell hooks is a groundbreaking and insightful book that explores the meaning and significance of feminism in modern society.',
    image: 'Feminism-is-for-Everybody.jpg',
    contentType: 'post'
  },
  {
    slug: 'graeber-bullshit-jobs-summary',
    title: 'Bullshit Jobs by David Graeber',
    date: '2023-02-05',
    author: 'David Graeber',
    categories: ['Work', 'Anti-Work', 'Capitalism'],
    description: 'The book Bullshit Jobs by David Graeber explores the concept of jobs deemed unnecessary and purposeless in society.',
    image: 'bullshit-jobs.jpg',
    contentType: 'post'
  },
  {
    slug: 'beginner-feminist-books',
    title: 'New to Feminism? Here are 10 Essential Books to Get You Started',
    date: '2023-02-15',
    author: 'Left Diary',
    categories: ['beginner', 'Must read', 'Feminism'],
    description: 'Explore the world of feminism with these 10 essential books for beginners. From classic works to contemporary essays, discover the voices that have shaped the movement.',
    image: 'feminism.png',
    contentType: 'post'
  },
  {
    slug: 'beginner-leftist-novels',
    title: 'Socialism in Fiction - A Beginner\'s Guide to Leftist Novels',
    date: '2023-08-20',
    author: 'Left Diary',
    categories: ['beginner', 'Must read', 'Feminism'],
    description: 'Are you a beginner looking to explore leftist ideologies and socialism through fiction? Look no further than this list of ten must-read novels!',
    image: 'Socialism-in-Fiction.jpeg',
    contentType: 'post'
  },
  {
    slug: 'bell-hooks-essential-reads-feminism-is-for-everybody-will-to-change',
    title: 'Bell Hooks Essential Reads: Feminism is for Everybody & Will to Change',
    date: '2023-03-10',
    author: 'Left Diary',
    categories: ['Feminism', 'Must read'],
    description: 'Explore the essential works of bell hooks, including Feminism is for Everybody and The Will to Change, and understand their impact on feminist theory.',
    image: 'bell-hooks.webp',
    contentType: 'post'
  },
  {
    slug: 'federici-caliban-witch-capitalism',
    title: 'Caliban and the Witch by Silvia Federici - Capitalism and Primitive Accumulation',
    date: '2023-04-15',
    author: 'Silvia Federici',
    categories: ['Feminism', 'Capitalism', 'History'],
    description: 'Silvia Federici\'s groundbreaking analysis of how the rise of capitalism was built on the subjugation of women and the witch hunts of early modern Europe.',
    image: 'caliban-witch.png',
    contentType: 'post'
  },
  {
    slug: 'marx-engels-false-consciousness',
    title: 'Marx and Engels on False Consciousness',
    date: '2023-05-20',
    author: 'Left Diary',
    categories: ['Marxism', 'Theory', 'Politics'],
    description: 'Understanding Marx and Engels\' concept of false consciousness and its relevance to modern capitalist society.',
    image: 'marx-engels.png',
    contentType: 'post'
  },
  {
    slug: 'summary-of-bullshit-jobs-david-graeber',
    title: 'Summary of Bullshit Jobs by David Graeber',
    date: '2023-06-05',
    author: 'David Graeber',
    categories: ['Work', 'Anti-Work', 'Capitalism'],
    description: 'A comprehensive summary of David Graeber\'s influential book on meaningless work and its impact on society.',
    image: 'bullshit-jobs.jpg',
    contentType: 'post'
  },
  {
    slug: 'humans-never-bartered-barter-myth',
    title: 'Humans Never Bartered: The Economic Myth That Justifies Everything',
    date: '2026-06-30',
    author: 'Left Diary',
    categories: ['Economics', 'History', 'Capitalism'],
    description: 'The story that humans first bartered, then invented money, is the founding fiction of economics. David Graeber spent years looking for evidence of barter economies. He found none. Here\'s what actually came before money — and why the lie matters.',
    image: 'barter-myth-cover.jpg',
    contentType: 'post'
  },
  {
    slug: 'why-is-housing-so-expensive',
    title: 'Why Is Housing So Expensive? The Political History of Land as a Commodity',
    date: '2026-06-30',
    author: 'Left Diary',
    categories: ['Economics', 'Housing', 'History'],
    description: 'Housing didn\'t get expensive by accident. Land enclosure, financialization, and deliberate policy choices turned shelter into an asset class. Here\'s the real history of why you can\'t afford to live — and who decided it would be this way.',
    image: 'housing-financialization-cover.jpg',
    contentType: 'post'
  }
];

export async function getNewsArticles(page = 1, _limit = 50): Promise<NewsArticlesResponse> {
  return { articles: [], totalPages: 0, currentPage: page, totalArticles: 0 };
}

// Get combined content for the home page — posts only
export function getCombinedContent(): BaseContent[] {
  return [...samplePosts].sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

// Get all posts for sitemap
export function getAllPosts(): Post[] {
  return samplePosts;
}

export async function getAllPublishedNewsArticles(): Promise<NewsArticle[]> {
  return [];
}
