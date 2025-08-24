/**
 * Utility functions for optimizing images for Google Discover
 */

/**
 * Validates if an image meets Google Discover requirements
 * @param {Object} image - Image object with dimensions
 * @param {number} image.width - Image width in pixels
 * @param {number} image.height - Image height in pixels
 * @returns {Object} - Validation result with status and message
 */
export function validateGoogleDiscoverImage(image) {
  const result = {
    isValid: true,
    messages: []
  };

  // Check minimum width requirement (1200px)
  if (!image.width || image.width < 1200) {
    result.isValid = false;
    result.messages.push(`Image width (${image.width}px) is less than the required 1200px minimum for Google Discover`);
  }

  // Check aspect ratio (should be close to 16:9)
  if (image.width && image.height) {
    const aspectRatio = image.width / image.height;
    const targetRatio = 16 / 9;
    const tolerance = 0.2; // Allow some deviation from exact 16:9

    if (Math.abs(aspectRatio - targetRatio) > tolerance) {
      result.isValid = false;
      result.messages.push(`Image aspect ratio (${aspectRatio.toFixed(2)}) is not close to the recommended 16:9 (1.78) ratio for Google Discover`);
    }
  }

  // Check if dimensions are missing
  if (!image.width || !image.height) {
    result.isValid = false;
    result.messages.push('Image dimensions are missing or invalid');
  }

  return result;
}

/**
 * Gets the recommended dimensions for a Google Discover image
 * @param {number} originalWidth - Original image width
 * @param {number} originalHeight - Original image height
 * @returns {Object} - Recommended dimensions
 */
export function getRecommendedDimensions(originalWidth, originalHeight) {
  // If image is already larger than 1200px wide, maintain aspect ratio
  if (originalWidth >= 1200) {
    // Calculate height to maintain original aspect ratio
    const height = Math.round((originalHeight / originalWidth) * 1200);
    return { width: 1200, height };
  }
  
  // If image is smaller than 1200px, recommend the 16:9 dimensions
  return { width: 1200, height: 675 };
}

/**
 * Generates the appropriate image sizes attribute for Next.js Image component
 * @returns {string} - The sizes attribute for responsive images
 */
export function getGoogleDiscoverImageSizes() {
  return '(max-width: 768px) 100vw, (max-width: 1200px) 1200px, 1200px';
}

/**
 * Generates image loading priority attributes for Google Discover optimization
 * @returns {Object} - Image loading attributes
 */
export function getGoogleDiscoverImageAttributes() {
  return {
    priority: true, // Preload image
    loading: 'eager', // Load immediately
    sizes: getGoogleDiscoverImageSizes(),
    className: 'object-cover w-full h-auto rounded-lg', // Tailwind classes for proper display
  };
}
