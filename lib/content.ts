// Unified content types for both posts and news articles

import type { CoverIcon, CoverTone } from '@/components/blog/coverIcons';

// Base content interface that both posts and news will implement
export interface BaseContent {
  slug: string;
  title: string;
  date: string;
  author: string;
  categories: string[];
  description: string;
  image?: string; // omit to use the generated typographic cover instead of a real image
  // Curated cover text/icon for the generated typographic cover, used only
  // when `image` is omitted. Falls back to a title-derived hook, the
  // default coin icon, and brass tone when not set.
  coverHook?: string;
  coverIcon?: CoverIcon;
  coverTone?: CoverTone;
  contentType: 'post' | 'news'; // To distinguish between post and news
}

// Interface for hardcoded blog posts
export interface Post extends BaseContent {
  contentType: 'post';
  series?: string; // series slug this article belongs to
  seriesOrder?: number; // position within the series (1-indexed)
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
    slug: 'did-humans-ever-barter-before-money',
    title: 'Did Humans Ever Barter Before Money?',
    date: '2026-06-30',
    author: 'Left Diary',
    categories: ['Economics', 'History', 'Capitalism'],
    description: 'Did humans ever barter before money was invented? David Graeber spent years looking for a single documented example of a barter economy. He found none. Here is what the archaeological record actually shows came before money — and why the myth exists.',
    coverHook: 'YOUR TEXTBOOK LIED',
    coverIcon: 'trade',
    contentType: 'post',
    series: 'how-money-actually-works',
    seriesOrder: 1
  },
  {
    slug: 'how-do-banks-create-money-out-of-nothing',
    title: 'How Do Banks Create Money Out of Nothing?',
    date: '2026-06-30',
    author: 'Left Diary',
    categories: ['Economics', 'Banking', 'Money'],
    description: 'When a bank approves your mortgage, it doesn\'t move existing money — it creates new money on the spot. The Bank of England confirmed this in 2014. Here is how money is actually created, and what it means for debt, housing, and public spending.',
    coverHook: 'MADE UP MONEY',
    coverIcon: 'bank',
    contentType: 'post',
    series: 'how-money-actually-works',
    seriesOrder: 2
  },
  {
    slug: 'why-did-colonizers-tax-africans',
    title: 'Why Did Colonizers Tax Africans?',
    date: '2026-06-30',
    author: 'Left Diary',
    categories: ['Economics', 'History', 'Colonialism'],
    description: 'If governments can create money, why do they collect taxes? Colonizers accidentally answered this question. The hut tax didn\'t raise revenue — it forced Africans into wage labor. That same logic explains modern austerity, the IMF, and why the government says it "can\'t afford" hospitals.',
    coverHook: 'PAY OR STARVE',
    coverIcon: 'ship',
    coverTone: 'red',
    contentType: 'post',
    series: 'how-money-actually-works',
    seriesOrder: 3
  },
  {
    slug: 'how-did-everything-come-to-cost-money',
    title: 'How Did Everything Come to Cost Money?',
    date: '2026-07-03',
    author: 'Left Diary',
    categories: ['Economics', 'History'],
    description: "Every cost that doesn't feel like it should be there has a specific origin. A specific law. A specific date when something people had directly — land, seeds, healing knowledge, water — was converted into something that required going through a third party. The need didn't change. The direct access was removed.",
    coverHook: 'IT USED TO BE FREE',
    coverIcon: 'fence',
    contentType: 'post',
    series: 'how-money-actually-works',
    seriesOrder: 4
  },
  {
    slug: 'what-is-austerity',
    title: 'What Is Austerity?',
    date: '2026-07-03',
    author: 'Left Diary',
    categories: ['Economics', 'Politics'],
    description: "Austerity is not a budget decision. It is the same two moves that enclosed the commons — applied right now, to public services. The public university is defunded; the need for education remains; a bank moves between you and it. The hospital is privatized; the need for care remains; an insurer moves between you and it. The enclosure didn't end. It changed instruments.",
    coverHook: '"WE CAN\'T AFFORD IT"',
    coverIcon: 'scale',
    contentType: 'post',
    series: 'how-money-actually-works',
    seriesOrder: 5
  },
  {
    slug: 'how-did-people-survive-before-capitalism',
    title: 'How Did People Survive Before Capitalism?',
    date: '2026-06-30',
    author: 'Left Diary',
    categories: ['Economics', 'History', 'Capitalism'],
    description: 'Before the enclosure acts, most people in England had the commons — land they could graze, fish, and farm without paying rent to anyone. Parliament, controlled by landowners, passed 5,000 laws to take it away. Unemployment didn\'t exist before that. Here\'s what they destroyed to make the wage system inevitable.',
    coverHook: '5,200 ACTS',
    coverIcon: 'fence',
    contentType: 'post',
    series: 'how-money-actually-works',
    seriesOrder: 6
  },
  {
    slug: 'why-is-housing-so-expensive',
    title: 'Why Is Housing So Expensive?',
    date: '2026-06-30',
    author: 'Left Diary',
    categories: ['Economics', 'Housing', 'History'],
    description: 'Housing didn\'t get expensive by accident. Land enclosure, financialization, and deliberate policy choices turned shelter into an asset class. The real history of why you can\'t afford to live — and who decided it would be this way.',
    coverHook: "CAN'T AFFORD A HOUSE",
    coverIcon: 'house',
    coverTone: 'red',
    contentType: 'post',
    series: 'how-money-actually-works',
    seriesOrder: 7
  },
  {
    slug: 'debt-as-social-control',
    title: 'How Does Debt Keep People In Line?',
    date: '2026-06-30',
    author: 'Left Diary',
    categories: ['Economics', 'Debt', 'History'],
    description: 'Ancient Babylon cancelled debt every 30 years — not out of charity, but because compound interest always produces more debt than can be repaid. Haiti paid France for 122 years for winning the Haitian Revolution. Here\'s how debt became the mechanism that keeps individuals, nations, and whole economies from getting free.',
    coverHook: 'PUNISHED FOR WINNING',
    coverIcon: 'chain',
    coverTone: 'red',
    contentType: 'post',
    series: 'how-money-actually-works',
    seriesOrder: 8
  },
  {
    slug: 'why-do-the-rich-keep-getting-richer',
    title: 'Why Do the Rich Keep Getting Richer?',
    date: '2026-06-30',
    author: 'Left Diary',
    categories: ['Economics', 'Inequality', 'Capitalism'],
    description: 'Warren Buffett\'s secretary pays a higher tax rate than he does. He said it himself. Jeff Bezos paid $0 in federal income tax in 2007. Piketty\'s r > g explains why wealth concentration is a mathematical guarantee — and why the tax system was built to keep it that way.',
    coverHook: '$0 IN TAXES',
    coverIcon: 'scale',
    coverTone: 'red',
    contentType: 'post',
    series: 'how-money-actually-works',
    seriesOrder: 9
  },
  {
    slug: 'what-is-the-ruling-class',
    title: 'Is There a Ruling Class?',
    date: '2026-06-30',
    author: 'Left Diary',
    categories: ['Politics', 'Power', 'Class'],
    description: "The term sounds like a conspiracy theory. It isn't. C. Wright Mills asked it as a sociologist in 1956, backed it with data, and named it 'The Power Elite.' 65% of British senior judges went to private school. Every US Secretary of State since 1953 has been a Council on Foreign Relations member except one. Here's the documented answer.",
    coverHook: 'ITS NOT DEMOCRACY',
    coverIcon: 'crown',
    contentType: 'post',
    series: 'how-money-actually-works',
    seriesOrder: 10
  },
  {
    slug: 'who-owns-the-media',
    title: 'Who Owns the Media?',
    date: '2026-06-30',
    author: 'Left Diary',
    categories: ['Media', 'Politics', 'Power'],
    description: "Six companies control roughly 90% of US media. In the UK, three men own most of the national press. Noam Chomsky called it Manufacturing Consent. Here's how media ownership shapes what you think is possible — not through censorship, but through what never gets framed as a serious idea.",
    coverHook: 'FAKE NEWS',
    coverIcon: 'megaphone',
    contentType: 'post',
    series: 'how-money-actually-works',
    seriesOrder: 11
  },
  {
    slug: 'what-happened-to-the-left',
    title: 'What Happened to the Left?',
    date: '2026-06-30',
    author: 'Left Diary',
    categories: ['Politics', 'History', 'Labor'],
    description: "In 1945, Labour won the most decisive election victory in British history and built the NHS. In 1981, Reagan fired 11,000 striking air traffic controllers — and union membership began a collapse that hasn't stopped. Here's how the most powerful labor movement in history was defeated, and what was used to defeat it.",
    coverHook: '11,000 FIRED',
    coverIcon: 'hammer',
    contentType: 'post',
    series: 'how-money-actually-works',
    seriesOrder: 12
  },
  {
    slug: 'why-didnt-people-just-refuse-to-use-money',
    title: 'What Is Money: Part 2',
    date: '2026-07-04',
    author: 'Left Diary',
    categories: ['Economics', 'History', 'Money'],
    description: "The king's tax was once a year, in a fixed amount. So why couldn't people just earn that much and go back to living as before? Because over the next three hundred years, every other way of surviving was made illegal, one law at a time — the commons enclosed, gleaning outlawed, standing still criminalized, the last independent women destroyed as witches.",
    coverHook: 'WHY CANT I JUST LIVE',
    coverIcon: 'coin',
    contentType: 'post'
  },
  {
    slug: 'how-did-the-king-lose-the-power-to-make-money',
    title: 'What Is Money: Part 3',
    date: '2026-07-18',
    author: 'Left Diary',
    categories: ['Economics', 'History', 'Money'],
    description: "The King minted his own coin and could make as much of it as he wanted. So why, by 1694, was he borrowing money from private merchants and paying back more than he borrowed? One transaction, on one date, permanently separated the power to create money from the Crown that had held it since the whole story began.",
    coverHook: '£1.2 MILLION',
    coverIcon: 'bank',
    coverTone: 'red',
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
