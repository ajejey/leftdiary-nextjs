'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { BaseContent } from '@/lib/content';

// Local function to get content image path
function getContentImagePath(image: string, contentType: 'post' | 'news'): string {
  if (contentType === 'post') {
    return `/images/cover_pages/${image}`;
  }
  // For news articles, the image URL is already complete
  return image;
}

interface PostCardProps {
  post: BaseContent;
}

// Calculate estimated reading time
const calculateReadingTime = (description: string): number => {
  const wordsPerMinute = 200;
  const wordCount = description.split(' ').length;
  return Math.ceil(wordCount / wordsPerMinute);
};

// Truncate text with better handling
const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  const truncated = text.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  return lastSpace > 0 ? truncated.substring(0, lastSpace) + '...' : truncated + '...';
};

const PostCard = ({ post }: PostCardProps) => {
  const readingTime = calculateReadingTime(post.description);
  const formattedDate = format(new Date(post.date), 'MMM dd, yyyy');

  return (
    <motion.article 
      className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-500 flex flex-col h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      {/* Enhanced Image Section with Overlay */}
      <div className="relative overflow-hidden">
        <Link href={`/posts/${post.slug}`} className="block">
          <div className="aspect-[4/3] relative overflow-hidden">
            <Image 
              src={getContentImagePath(post.image, post.contentType)}
              alt={`Cover image for ${post.title}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Content Type Badge */}
            <div className="absolute top-3 left-3">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                post.contentType === 'news' 
                  ? 'bg-gray-800/90 text-white' 
                  : 'bg-gray-700/90 text-white'
              }`}>
                {post.contentType === 'news' ? 'News' : 'Article'}
              </span>
            </div>

            {/* Reading Time Badge */}
            <div className="absolute top-3 right-3">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/90 dark:bg-gray-800/90 text-gray-700 dark:text-gray-300 backdrop-blur-sm">
                {readingTime} min read
              </span>
            </div>
          </div>
        </Link>
      </div>

      {/* Enhanced Content Section */}
      <div className="p-6 flex-grow flex flex-col">
        {/* Categories and Date */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <div className="flex flex-wrap gap-2">
            {post.categories.slice(0, 2).map((category, index) => (
              <Link 
                key={index} 
                href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-gray-800 dark:hover:text-gray-200 transition-all duration-200"
              >
                {category}
              </Link>
            ))}
          </div>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 ml-auto">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <time dateTime={post.date}>{formattedDate}</time>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-200 leading-tight">
          <Link href={`/posts/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </h2>

        {/* Description */}
        <div className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
          <p>{truncateText(post.description, 160)}</p>
        </div>

        {/* Enhanced Footer with Social Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
          <Link 
            href={`/posts/${post.slug}`}
            className="inline-flex items-center text-gray-800 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 text-sm font-semibold group-hover:translate-x-1 transition-all duration-200"
          >
            Read Article
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
          
          {/* Social Share Buttons */}
          <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button 
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              title="Share on Twitter"
              onClick={(e) => {
                e.preventDefault();
                const url = `${window.location.origin}/posts/${post.slug}`;
                const text = `Check out this article: ${post.title}`;
                window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
              }}
            >
              <svg className="h-4 w-4 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </button>
            <button 
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              title="Share on Facebook"
              onClick={(e) => {
                e.preventDefault();
                const url = `${window.location.origin}/posts/${post.slug}`;
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
              }}
            >
              <svg className="h-4 w-4 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default PostCard;
