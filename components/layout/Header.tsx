'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isSearchOpen) setIsSearchOpen(false);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className={`sticky top-0 z-50 bg-[#151515] border-b border-gray-800 transition-shadow duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4 h-auto sm:h-20">
        <div className="flex-shrink-0 z-20">
          <Link href="/" className="block">
            <Image 
              src="/images/logo.svg" 
              alt="Left Diary logo" 
              width={90} 
              height={30}
              priority
              className="h-6 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            href="/" 
            className="text-white/60 hover:text-white font-medium transition-colors"
          >
            Home
          </Link>
          
          <div className="relative group">
            <button 
              onClick={() => toggleDropdown('categories')}
              className="text-white/60 hover:text-white font-medium transition-colors flex items-center"
            >
              Categories
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <AnimatePresence>
              {activeDropdown === 'categories' && (
                <motion.ul 
                  className="absolute top-full left-0 min-w-[200px] shadow-lg bg-white dark:bg-gray-900 z-10 rounded-md overflow-hidden"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <li>
                    <Link 
                      href="/category/capitalism" 
                      className="block py-2 px-4 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      Capitalism
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/category/female-author" 
                      className="block py-2 px-4 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      Female Author
                    </Link>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
          
          <Link 
            href="/about" 
            className="text-white/60 hover:text-white font-medium transition-colors"
          >
            About
          </Link>
          
          <Link 
            href="/contact" 
            className="text-white/60 hover:text-white font-medium transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Desktop Search */}
        <div className="hidden md:flex items-center">
          {isSearchOpen && (
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.3 }}
              className="mr-2"
            >
              <form role="search" method="get" className="flex items-center" action="#">
                <label className="relative">
                  <span className="sr-only">Search for:</span>
                  <input 
                    type="search" 
                    className="border border-gray-600 bg-gray-800 text-white rounded px-3 py-2 w-48 lg:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="Type Keywords" 
                    name="s"
                    title="Search for:" 
                    autoComplete="off"
                  />
                </label>
                <button 
                  type="submit" 
                  className="ml-2 bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded transition-colors"
                >
                  Search
                </button>
              </form>
            </motion.div>
          )}
          <button 
            className="text-white/60 hover:text-white transition-colors"
            onClick={toggleSearch}
            aria-label="Toggle Search"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden z-20">
          <button 
            className="text-white/60 hover:text-white mr-4"
            onClick={toggleSearch}
            aria-label="Toggle Search"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button
            className="text-white/60 hover:text-white flex items-center"
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            <span className="sr-only">Menu</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Search */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-20 left-0 right-0 bg-gray-900 p-4 z-10 md:hidden"
            >
              <form role="search" method="get" className="flex items-center" action="#">
                <label className="relative flex-grow">
                  <span className="sr-only">Search for:</span>
                  <input 
                    type="search" 
                    className="w-full border border-gray-600 bg-gray-800 text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="Type Keywords" 
                    name="s"
                    title="Search for:" 
                    autoComplete="off"
                  />
                </label>
                <button 
                  type="submit" 
                  className="ml-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded transition-colors"
                >
                  Search
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-20 left-0 right-0 bg-gray-900 z-10 md:hidden"
            >
              <nav className="flex flex-col p-4">
                <Link 
                  href="/" 
                  className="py-3 px-4 text-white/80 hover:text-white border-b border-gray-800"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                
                <div className="py-3 px-4 border-b border-gray-800">
                  <button 
                    onClick={() => toggleDropdown('mobileCategories')}
                    className="text-white/80 hover:text-white font-medium transition-colors flex items-center justify-between w-full"
                  >
                    Categories
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {activeDropdown === 'mobileCategories' && (
                      <motion.ul 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="pl-4 mt-2 space-y-2"
                      >
                        <li>
                          <Link 
                            href="/category/capitalism" 
                            className="block py-2 text-gray-400 hover:text-white"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            Capitalism
                          </Link>
                        </li>
                        <li>
                          <Link 
                            href="/category/female-author" 
                            className="block py-2 text-gray-400 hover:text-white"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            Female Author
                          </Link>
                        </li>
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
                
                <Link 
                  href="/about" 
                  className="py-3 px-4 text-white/80 hover:text-white border-b border-gray-800"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                
                <Link 
                  href="/contact" 
                  className="py-3 px-4 text-white/80 hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
