/**
 * Utility functions for optimizing page performance for Google Discover
 */

/**
 * Script to defer non-critical JavaScript
 * This should be added to the page using next/script with strategy="lazyOnload"
 */
export const deferNonCriticalJS = `
  // Defer loading of non-critical resources
  function deferResource(resourceType, urls) {
    if (!urls || !urls.length) return;
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        urls.forEach(url => {
          const element = document.createElement(resourceType);
          
          if (resourceType === 'script') {
            element.src = url;
            element.async = true;
          } else if (resourceType === 'link') {
            element.href = url;
            element.rel = 'stylesheet';
          }
          
          document.head.appendChild(element);
        });
        observer.disconnect();
      }
    });
    
    // Observe when user scrolls near the fold
    observer.observe(document.querySelector('.defer-trigger') || document.querySelector('main'));
  }
  
  // Example usage:
  // deferResource('script', ['/path/to/non-critical.js']);
  // deferResource('link', ['/path/to/non-critical.css']);
`;

/**
 * Generates image optimization attributes for Next.js Image component
 * @param {Object} options - Configuration options
 * @param {boolean} options.priority - Whether the image is a priority image
 * @param {string} options.sizes - The sizes attribute for responsive images
 * @returns {Object} - Image optimization attributes
 */
export function getImageOptimizationAttributes(options = {}) {
  return {
    priority: options.priority || false,
    quality: 85, // Good balance between quality and file size
    sizes: options.sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    loading: options.priority ? 'eager' : 'lazy',
    // Use modern image formats
    formats: ['webp', 'avif'],
  };
}

/**
 * Generates font optimization attributes
 * @returns {Object} - Font optimization configuration
 */
export function getFontOptimizationConfig() {
  return {
    subsets: ['latin'],
    display: 'swap',
    preload: true,
  };
}

/**
 * Generates preconnect link attributes
 * @param {string} domain - Domain to preconnect to
 * @returns {React.JSX.IntrinsicElements['link']} - Preconnect link attributes
 */
export function getPreconnect(domain) {
  return {
    rel: 'preconnect',
    href: domain,
    crossOrigin: 'anonymous',
  };
}

/**
 * Generates prefetch link attributes
 * @param {string} path - Path to prefetch
 * @returns {React.JSX.IntrinsicElements['link']} - Prefetch link attributes
 */
export function getPrefetch(path) {
  return {
    rel: 'prefetch',
    href: path,
  };
}

/**
 * Generates preload link attributes
 * @param {string} path - Path to preload
 * @param {string} as - Resource type
 * @returns {React.JSX.IntrinsicElements['link']} - Preload link attributes
 */
export function getPreload(path, as) {
  return {
    rel: 'preload',
    href: path,
    as,
  };
}
