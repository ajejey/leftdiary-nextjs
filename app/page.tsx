import { getCombinedContent } from '@/lib/content';
import { Suspense } from 'react';
import Link from 'next/link';
import PostCard from '@/components/blog/PostCard';

// Enhanced loading component for the responsive grid
function LoadingGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {[...Array(12)].map((_, i) => (
        <div key={i} className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 animate-pulse">
          <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600" />
          <div className="p-6 space-y-3">
            <div className="flex gap-2">
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-16" />
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-20" />
            </div>
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-lg w-4/5" />
            <div className="space-y-2">
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-full" />
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Hero Section Component
function HeroSection() {
  return (
    <div className="relative bg-gradient-to-br from-gray-50 via-white to-stone-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="block">Progressive Analysis</span>
            <span className="block bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              & Leftist Insights
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            In-depth progressive analysis of current events, leftist book summaries, and radical political commentary. 
            Challenging mainstream narratives with anarchist and anti-capitalist perspectives.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="#articles"
              className="inline-flex items-center px-8 py-3 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Explore Articles
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </Link>
            
            <Link 
              href="/about"
              className="inline-flex items-center px-8 py-3 border-2 border-gray-400 dark:border-gray-600 hover:border-gray-600 dark:hover:border-gray-400 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 font-semibold rounded-full transition-all duration-200 hover:-translate-y-1"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Stats Section Component
function StatsSection({ totalArticles }: { totalArticles: number }) {
  const stats = [
    { label: 'Articles Published', value: totalArticles },
    { label: 'Categories Covered', value: '15+' },
    { label: 'Years Active', value: '4+' },
    { label: 'Books Reviewed', value: '50+' }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-gray-300 mb-2">
                {stat.value}
              </div>
              <div className="text-sm lg:text-base text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const combinedContent = getCombinedContent();
  // console.log("combinedContent ", combinedContent)
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Stats Section */}
      {/* <StatsSection totalArticles={combinedContent.length} /> */}
      
      {/* Articles Section */}
      <div className="py-16" id="articles">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Latest Articles & Analysis
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Discover our latest progressive analysis, book reviews, and political commentary. 
              Filter by category to find content that interests you most.
            </p>
          </div>
          
          <Suspense fallback={<LoadingGrid />}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {combinedContent.map((post) => (
                <PostCard 
                  key={post.slug} 
                  post={post}
                  className="h-full flex flex-col"
                />
              ))}
            </div>
          </Suspense>
        </div>
      </div>
      
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-700 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with Progressive Analysis
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Get our latest articles and insights delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
            />
            <button className="px-8 py-3 bg-white text-gray-800 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

