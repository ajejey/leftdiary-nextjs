import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | The Left Diary',
  description: 'Learn more about The Left Diary, our mission, vision, and the team behind our leftist perspectives on politics, society, and culture.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-800 to-gray-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
            <defs>
              <pattern id="about-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#about-grid)" />
          </svg>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              About <span className="text-gray-300">The Left Diary</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              A platform for leftist perspectives on politics, society, and culture, 
              providing space for progressive ideas and meaningful discourse.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-soft p-8 lg:p-12 mb-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300">
              <p className="text-xl leading-relaxed mb-6">
                The Left Diary is a blog that aims to provide a platform for leftist perspectives on politics, society, and culture. We believe that the left has a lot to offer in terms of solutions to the problems that we face today, and we want to provide a space where these ideas can be discussed and debated.
              </p>
              <p className="leading-relaxed mb-6">
                We cover a wide range of topics, from current events to historical analysis, featuring diverse voices from across the left spectrum. Our goal is to create a valuable resource for understanding the world from a leftist perspective while fostering meaningful dialogue and debate.
              </p>
              <p className="leading-relaxed">
                We are a collective of writers, activists, and thinkers passionate about social justice and equality. Through our work, we aim to contribute to the broader conversation about creating a more just and equitable world for all.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Values Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Who We Are */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-soft p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full mr-4">
                <svg className="w-6 h-6 text-gray-800 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Who We Are
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We are a diverse group of writers, activists, and thinkers who are passionate about social justice and equality. Our team brings together various perspectives and experiences from across the progressive spectrum.
            </p>
          </div>

          {/* Our Mission */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-soft p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full mr-4">
                <svg className="w-6 h-6 text-gray-800 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Our Mission
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              To provide a platform for leftist perspectives on politics, society, and culture, creating space where progressive ideas can be discussed, debated, and developed for meaningful social change.
            </p>
          </div>

          {/* Our Vision */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-soft p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full mr-4">
                <svg className="w-6 h-6 text-gray-800 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Our Vision
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              A world where social justice and equality are the norm, where progressive voices are heard and valued, and where the left is a powerful force for positive transformation in society.
            </p>
          </div>

          {/* Our Values */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-soft p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full mr-4">
                <svg className="w-6 h-6 text-gray-800 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Our Values
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We are committed to social justice, equality, democracy, and human dignity. We believe in the power of collective action and are dedicated to building a better, more inclusive world for all.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join the Conversation
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            We hope you'll join us in this important dialogue and find our platform to be a valuable resource for understanding the world from a progressive perspective.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 bg-white text-gray-800 font-semibold rounded-full hover:bg-gray-100 transition-all duration-200 hover:-translate-y-1 shadow-lg"
            >
              Contact Us
            </Link>
            <Link 
              href="/" 
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-800 transition-all duration-200 hover:-translate-y-1"
            >
              Read Articles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
