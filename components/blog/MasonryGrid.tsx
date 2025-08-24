'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PostCard from './PostCard';
import { BaseContent } from '@/lib/content';

interface MasonryGridProps {
  posts: BaseContent[];
  isLoading?: boolean;
}

// Enhanced loading skeleton component
const LoadingSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {[...Array(12)].map((_, i) => (
        <motion.div 
          key={i}
          className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 animate-pulse" />
          <div className="p-6 space-y-3">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-lg w-1/3 animate-pulse" />
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-lg w-4/5 animate-pulse" />
            <div className="space-y-2">
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-full animate-pulse" />
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse" />
            </div>
            <div className="flex gap-2 pt-2">
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-16 animate-pulse" />
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-20 animate-pulse" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const MasonryGrid = ({ posts, isLoading = false }: MasonryGridProps) => {
  const masonryRef = useRef<HTMLDivElement>(null);
  const [filteredPosts, setFilteredPosts] = useState<BaseContent[]>(posts);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  // Get unique categories from posts
  const categories = ['all', ...new Set(posts.flatMap(post => post.categories))];

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(posts.filter(post => post.categories.includes(selectedCategory)));
    }
  }, [selectedCategory, posts]);

  if (isLoading) {
    return (
      <div className="w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <LoadingSkeleton />
      </div>
    );
  }

  return (
    <div className="w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.slice(0, 8).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gray-800 text-white shadow-lg shadow-gray-800/25'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
              }`}
            >
              {category === 'all' ? 'All Articles' : category}
            </button>
          ))}
        </div>
      </div>

      {/* Enhanced Masonry Grid */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={selectedCategory}
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
          ref={masonryRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              className="break-inside-avoid mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
            >
              <PostCard post={post} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* No results message */}
      {filteredPosts.length === 0 && (
        <motion.div 
          className="text-center py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="text-gray-500 dark:text-gray-400">
            <svg className="mx-auto h-12 w-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 className="text-lg font-medium mb-2">No articles found</h3>
            <p className="text-sm">Try selecting a different category or check back later for new content.</p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default MasonryGrid;
