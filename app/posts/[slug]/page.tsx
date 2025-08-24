import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import ArticleRenderer from '@/components/blog/ArticleRenderer';
import ArticleJsonLd from '@/components/blog/ArticleJsonLd';
// Import necessary components and utilities
import { getContentBySlug } from '@/lib/contentUtils';
import { getGoogleDiscoverImageAttributes, validateImageForGoogleDiscover, generateBlurDataURL } from '@/utils/imageOptimization';
import { format } from 'date-fns';
import { NewsContentAdapter } from '@/lib/content';
import { calculateReadingTime, getWordCount, validateGoogleDiscoverOptimization } from '@/lib/seo-utils';

// Generate metadata for the page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const { content, contentType } = await getContentBySlug(slug);
  
  if (!content) {
    return {
      title: 'Article Not Found | Left Diary',
      description: 'The requested article could not be found.',
      robots: {
        index: false,
        follow: false
      }
    };
  }

  // For news articles, get additional SEO metadata
  if (contentType === 'news') {
    const newsArticle = (content as NewsContentAdapter).originalArticle;
    
    // Handle potential undefined seoMetadata safely
    const keywords = [
      ...(newsArticle?.seoMetadata?.focusKeyword ? [newsArticle.seoMetadata.focusKeyword] : []),
      ...(newsArticle?.seoMetadata?.secondaryKeywords || []),
      ...(newsArticle?.keywords || [])
    ];

    // Calculate additional metrics
    const wordCount = newsArticle?.content ? getWordCount(newsArticle.content) : 0;
    const readingTime = newsArticle?.content ? calculateReadingTime(newsArticle.content) : '5 min read';
    
    // Enhanced metadata for Google Discover
    const baseMetadata = {
      title: newsArticle?.seoMetadata?.metaTitle || content.title,
      description: newsArticle?.seoMetadata?.metaDescription || content.description,
      keywords: keywords.length > 0 ? keywords : undefined,
      authors: [{ name: 'Left Diary', url: 'https://leftdiary.com/about' }],
      creator: 'Left Diary',
      publisher: 'Left Diary',
      category: newsArticle?.categories?.[0] || 'News',
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large' as const,
          'max-snippet': -1,
        },
      },
      openGraph: {
        type: 'article',
        title: newsArticle?.seoMetadata?.metaTitle || content.title,
        description: newsArticle?.seoMetadata?.metaDescription || content.description,
        url: `https://leftdiary.com/posts/${content.slug}`,
        siteName: 'Left Diary',
        locale: 'en_US',
        publishedTime: newsArticle?.publishedAt || content.date,
        modifiedTime: newsArticle?.updatedAt || newsArticle?.publishedAt || content.date,
        authors: ['Left Diary'],
        section: newsArticle?.categories?.[0] || 'News',
        tags: newsArticle?.tags || [],
        images: newsArticle?.images?.length > 0 ? newsArticle.images.map(img => ({
          url: img.url,
          alt: img.alt,
          width: 1200,
          height: 675,
          type: 'image/jpeg'
        })) : [{
          url: content.image,
          alt: content.title,
          width: 1200,
          height: 675,
          type: 'image/jpeg'
        }]
      },
      twitter: {
        card: 'summary_large_image',
        title: newsArticle?.seoMetadata?.metaTitle || content.title,
        description: newsArticle?.seoMetadata?.metaDescription || content.description,
        creator: '@leftdiary', // Add your Twitter handle
        site: '@leftdiary',
        images: newsArticle?.images?.length > 0 ? [newsArticle.images[0].url] : [content.image]
      },
      alternates: {
        canonical: `https://leftdiary.com/posts/${content.slug}`,
        types: {
          'application/rss+xml': [{
            url: 'https://leftdiary.com/feed.xml',
            title: 'Left Diary RSS Feed'
          }]
        }
      },
      other: {
        'reading-time': readingTime,
        'word-count': wordCount.toString(),
        'article:author': 'Left Diary',
        'article:section': newsArticle?.categories?.[0] || 'News',
        'article:tag': newsArticle?.tags?.join(', ') || '',
        'news_keywords': keywords.join(', ')
      }
    };

    return baseMetadata;
  }

  // For regular posts
  return {
    title: `${content.title} | Left Diary`,
    description: content.description,
    keywords: content.categories,
    authors: [{ name: content.author || 'Left Diary' }],
    creator: content.author || 'Left Diary',
    publisher: 'Left Diary',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large' as const,
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'article',
      title: content.title,
      description: content.description,
      url: `https://leftdiary.com/posts/${content.slug}`,
      siteName: 'Left Diary',
      locale: 'en_US',
      publishedTime: content.date,
      authors: [content.author || 'Left Diary'],
      section: content.categories[0] || 'Blog',
      images: [{
        url: `https://leftdiary.com/images/cover_pages/${content.image}`,
        alt: content.title,
        width: 1200,
        height: 675,
        type: 'image/jpeg'
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: content.title,
      description: content.description,
      creator: '@leftdiary',
      site: '@leftdiary',
      images: [`https://leftdiary.com/images/cover_pages/${content.image}`]
    },
    alternates: {
      canonical: `https://leftdiary.com/posts/${content.slug}`
    }
  };
}

export default async function ContentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { content, contentType } = await getContentBySlug(slug);
  
  if (!content) {
    notFound();
  }
  // Format the date with fallback for invalid date
  const formattedDate = content.date ? 
    format(new Date(content.date), 'MMMM d, yyyy') : 
    'Publication date not available';
  
  // For posts, we'll render the post content directly
  if (contentType === 'post') {
    // This is a placeholder - in a real implementation, you would fetch the actual post content
    // For now, we'll just render a basic post layout
    return (
      <article className="max-w-4xl mx-auto px-5 py-12 font-serif">
        <header className="text-center mb-16">
          <div className="mb-8">
            <Image 
              src={`/images/cover_pages/${content.image}`}
              alt={content.title}
              width={800}
              height={500}
              className="rounded-lg shadow-lg mx-auto"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{content.title}</h1>
          <div className="text-gray-600">
            <span>By {content.author}</span>
            <span className="mx-2">•</span>
            <span>{formattedDate}</span>
          </div>
          <div className="flex flex-wrap gap-2 mt-4 justify-center">
            {content.categories.map((category) => (
              <Link 
                key={category}
                href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
              >
                {category}
              </Link>
            ))}
          </div>
        </header>

        <section className="text-xl leading-relaxed text-gray-700 mb-16">
          <p>{content.description}</p>
          <p className="mt-4">This is a placeholder for the full post content. In a real implementation, you would fetch and render the actual post content here.</p>
        </section>

        <div className="mt-12 text-center">
          <Link 
            href="/"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </article>
    );
  }
  
  // Get the full article content from the news article
  const newsArticle = contentType === 'news' ? (content as NewsContentAdapter).originalArticle : null;
  
  // The newsArticle.content property contains the full HTML content
  const fullContent = newsArticle?.content || '';
  const contentSections = newsArticle?.contentSections || [];
  
  // Calculate SEO metrics
  const wordCount = fullContent ? getWordCount(fullContent) : 0;
  const readingTime = fullContent ? calculateReadingTime(fullContent) : '5 min read';
  
  // Validate Google Discover optimization
  const discoverOptimization = contentType === 'news' && newsArticle ? 
    validateGoogleDiscoverOptimization({
      title: content.title,
      description: content.description,
      content: fullContent,
      images: newsArticle.images || [{ url: content.image }],
      keywords: newsArticle.keywords
    }) : null;
  
  console.log('Google Discover Optimization Score:', discoverOptimization?.score);
  console.log('Recommendations:', discoverOptimization?.recommendations);
  
  // Determine if we should use structured content
  const hasStructuredContent = contentSections && contentSections.length > 0;
  
  // Get the canonical URL for this article
  const canonicalUrl = `https://leftdiary.com/posts/${content.slug}`;
  
  // Get image data for structured data
  const images = newsArticle?.images || [{ url: content.image, alt: content.title }];
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Add structured data for Google Discover */}
      {contentType === 'news' && (
        <ArticleJsonLd
          title={content.title}
          description={content.description}
          url={canonicalUrl}
          images={images.map(img => ({ 
            url: img.url, 
            alt: img.alt,
            width: 1200,
            height: 675
          }))}
          datePublished={newsArticle?.publishedAt || content.date}
          dateModified={newsArticle?.updatedAt || newsArticle?.publishedAt || content.date}
          categories={content.categories}
          tags={newsArticle?.tags}
          wordCount={wordCount}
          readingTime={readingTime}
          primaryKeyword={newsArticle?.seoMetadata?.focusKeyword}
          secondaryKeywords={newsArticle?.seoMetadata?.secondaryKeywords}
          newsKeywords={newsArticle?.keywords}
        />
      )}
      
      {/* Featured Image */}
      <div className="mb-8 relative">
        <div className="relative h-96 w-full">
          <Image
            src={content.image}
            alt={content.title}
            fill
            {...getGoogleDiscoverImageAttributes()}
          />
        </div>
        {/* Image Caption - Only for news articles with caption */}
        {contentType === 'news' && newsArticle?.images && newsArticle.images[0]?.caption && (
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 italic text-center">
            {newsArticle.images[0].caption}
          </p>
        )}
      </div>
      
      {/* Article Content */}
      <ArticleRenderer
        title={content.title}
        date={formattedDate}
        content={fullContent}
        contentSections={contentSections}
        useStructuredContent={hasStructuredContent}
        categories={content.categories}
      />
      
      {/* Tags - Only for news articles */}
      {contentType === 'news' && newsArticle?.tags && newsArticle.tags.length > 0 && (
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap gap-2">
            {newsArticle.tags.map((tag) => (
              <Link 
                key={tag}
                href={`/news?tag=${encodeURIComponent(tag)}`}
                className="text-sm px-3 py-1 rounded-full bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </div>
      )}
      
      {/* Back to Home */}
      <div className="mt-12 text-center">
        <Link 
          href="/"
          className="inline-block px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-black transition-colors"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
