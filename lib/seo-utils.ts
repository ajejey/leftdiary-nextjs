// SEO utility functions for 2025 requirements

/**
 * Calculate reading time based on word count
 * Average reading speed: 200-250 words per minute
 */
export function calculateReadingTime(content: string): string {
  const wordsPerMinute = 225;
  const wordCount = getWordCount(content);
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  
  if (minutes < 1) return '1 min read';
  return `${minutes} min read`;
}

/**
 * Get word count from HTML content
 */
export function getWordCount(content: string): number {
  // Remove HTML tags and count words
  const textContent = content.replace(/<[^>]*>/g, ' ');
  const words = textContent
    .trim()
    .split(/\s+/)
    .filter(word => word.length > 0);
  
  return words.length;
}

/**
 * Calculate keyword density
 */
export function calculateKeywordDensity(content: string, keyword: string): number {
  const textContent = content.replace(/<[^>]*>/g, ' ').toLowerCase();
  const totalWords = getWordCount(content);
  const keywordMatches = (textContent.match(new RegExp(keyword.toLowerCase(), 'g')) || []).length;
  
  return totalWords > 0 ? (keywordMatches / totalWords) * 100 : 0;
}

/**
 * Extract headings from HTML content for SEO analysis
 */
export function extractHeadings(content: string): Array<{level: number, text: string}> {
  const headingRegex = /<h([1-6])[^>]*>(.*?)<\/h[1-6]>/gi;
  const headings: Array<{level: number, text: string}> = [];
  let match;
  
  while ((match = headingRegex.exec(content)) !== null) {
    headings.push({
      level: parseInt(match[1]),
      text: match[2].replace(/<[^>]*>/g, '').trim()
    });
  }
  
  return headings;
}

/**
 * Validate meta title length (Google's best practices)
 */
export function validateMetaTitle(title: string): {
  isValid: boolean;
  length: number;
  issues: string[];
} {
  const issues: string[] = [];
  const length = title.length;
  
  if (length < 30) {
    issues.push('Title is too short (recommended: 50-60 characters)');
  }
  
  if (length > 60) {
    issues.push('Title may be truncated in search results (recommended: 50-60 characters)');
  }
  
  if (!title.match(/[A-Z]/)) {
    issues.push('Consider using title case for better readability');
  }
  
  return {
    isValid: issues.length === 0,
    length,
    issues
  };
}

/**
 * Validate meta description length
 */
export function validateMetaDescription(description: string): {
  isValid: boolean;
  length: number;
  issues: string[];
} {
  const issues: string[] = [];
  const length = description.length;
  
  if (length < 120) {
    issues.push('Description is too short (recommended: 150-160 characters)');
  }
  
  if (length > 160) {
    issues.push('Description may be truncated in search results (recommended: 150-160 characters)');
  }
  
  return {
    isValid: issues.length === 0,
    length,
    issues
  };
}

/**
 * Generate slug from title
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim();
}

/**
 * Check if content is optimized for Google Discover
 */
export function validateGoogleDiscoverOptimization(article: {
  title: string;
  description: string;
  content: string;
  images: Array<{url: string, width?: number, height?: number}>;
  keywords?: string[];
}): {
  score: number;
  recommendations: string[];
} {
  const recommendations: string[] = [];
  let score = 0;
  const maxScore = 10;
  
  // Title optimization (2 points)
  const titleLength = article.title.length;
  if (titleLength >= 40 && titleLength <= 59) {
    score += 2;
  } else {
    recommendations.push('Optimize title length to 40-59 characters for Google Discover');
  }
  
  // Description optimization (1 point)
  const descLength = article.description.length;
  if (descLength >= 150 && descLength <= 160) {
    score += 1;
  } else {
    recommendations.push('Optimize meta description to 150-160 characters');
  }
  
  // High-quality images (2 points)
  const hasHighResImages = article.images.some(img => 
    (img.width && img.height && img.width >= 1200 && img.height >= 675)
  );
  if (hasHighResImages) {
    score += 2;
  } else {
    recommendations.push('Include high-resolution images (minimum 1200x675px) for Google Discover');
  }
  
  // Content length (2 points)
  const wordCount = getWordCount(article.content);
  if (wordCount >= 800) {
    score += 2;
  } else {
    recommendations.push('Increase content length to at least 800 words for better Discover performance');
  }
  
  // Keyword optimization (1 point)
  if (article.keywords && article.keywords.length >= 3) {
    score += 1;
  } else {
    recommendations.push('Include at least 3 relevant keywords for better content discovery');
  }
  
  // Heading structure (1 point)
  const headings = extractHeadings(article.content);
  if (headings.length >= 3) {
    score += 1;
  } else {
    recommendations.push('Use proper heading structure (H1, H2, H3) to improve content organization');
  }
  
  // Reading time optimization (1 point)
  const readingTime = calculateReadingTime(article.content);
  const minutes = parseInt(readingTime.split(' ')[0]);
  if (minutes >= 3 && minutes <= 8) {
    score += 1;
  } else {
    recommendations.push('Optimize content for 3-8 minutes reading time for better engagement');
  }
  
  return {
    score: Math.round((score / maxScore) * 100),
    recommendations
  };
}
