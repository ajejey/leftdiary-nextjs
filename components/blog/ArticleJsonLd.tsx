import React from 'react';

interface ArticleJsonLdProps {
  title: string;
  description: string;
  url: string;
  images: Array<{
    url: string;
    alt: string;
    width?: number;
    height?: number;
  }>;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  authorUrl?: string;
  publisherName?: string;
  publisherLogo?: string;
  publisherUrl?: string;
  categories?: string[];
  tags?: string[];
  wordCount?: number;
  readingTime?: string;
  primaryKeyword?: string;
  secondaryKeywords?: string[];
  isBreakingNews?: boolean;
  newsKeywords?: string[];
}

const ArticleJsonLd: React.FC<ArticleJsonLdProps> = ({
  title,
  description,
  url,
  images,
  datePublished,
  dateModified,
  authorName = 'Left Diary',
  authorUrl = 'https://leftdiary.com/about',
  publisherName = 'Left Diary',
  publisherLogo = 'https://leftdiary.com/logo.png',
  publisherUrl = 'https://leftdiary.com',
  categories = [],
  tags = [],
  wordCount,
  readingTime,
  primaryKeyword,
  secondaryKeywords = [],
  isBreakingNews = false,
  newsKeywords = []
}) => {
  // Enhanced schema data for 2025 SEO requirements
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    'headline': title,
    'description': description,
    'image': images.map(img => ({
      '@type': 'ImageObject',
      'url': img.url,
      'width': img.width || 1200,
      'height': img.height || 675, // 16:9 ratio for Google Discover
      'caption': img.alt
    })),
    'datePublished': datePublished,
    'dateModified': dateModified || datePublished,
    'author': {
      '@type': 'Person',
      'name': authorName,
      'url': authorUrl,
      'sameAs': [
        'https://leftdiary.com/about'
      ]
    },
    'publisher': {
      '@type': 'Organization',
      'name': publisherName,
      'url': publisherUrl,
      'logo': {
        '@type': 'ImageObject',
        'url': publisherLogo,
        'width': 512,
        'height': 512
      },
      'sameAs': [
        'https://twitter.com/leftdiary', // Add your social media URLs
        'https://facebook.com/leftdiary'
      ]
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': url
    },
    'articleSection': categories.join(', '),
    'keywords': [primaryKeyword, ...secondaryKeywords, ...newsKeywords, ...tags].filter(Boolean).join(', '),
    'about': categories.map(cat => ({
      '@type': 'Thing',
      'name': cat
    })),
    'mentions': tags.map(tag => ({
      '@type': 'Thing',
      'name': tag
    })),
    // Enhanced for Google Discover
    'speakable': {
      '@type': 'SpeakableSpecification',
      'cssSelector': ['.article-title', '.article-summary']
    },
    // Additional properties for news articles
    ...(wordCount && { 'wordCount': wordCount }),
    ...(readingTime && { 'timeRequired': readingTime }),
    ...(isBreakingNews && { 
      'genre': 'Breaking News',
      'urgencyIndicator': 'High'
    }),
    // Enhanced for E-E-A-T signals
    'inLanguage': 'en-US',
    'copyrightHolder': {
      '@type': 'Organization',
      'name': publisherName
    },
    'copyrightYear': new Date(datePublished).getFullYear(),
    'isAccessibleForFree': true,
    'hasPart': {
      '@type': 'WebPageElement',
      'isAccessibleForFree': true,
      'cssSelector': '.article-content'
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default ArticleJsonLd;
