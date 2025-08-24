// Utility functions for image optimization and handling

// Google Discover image requirements for 2025
interface GoogleDiscoverImageRequirements {
  minWidth: number;
  minHeight: number;
  aspectRatio: number;
  maxFileSize: number; // in bytes
  allowedFormats: string[];
}

const GOOGLE_DISCOVER_REQUIREMENTS: GoogleDiscoverImageRequirements = {
  minWidth: 1200,
  minHeight: 675, // 16:9 ratio
  aspectRatio: 16/9,
  maxFileSize: 8 * 1024 * 1024, // 8MB
  allowedFormats: ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
};

// Get image attributes for Google Discover
export function getGoogleDiscoverImageAttributes(blurDataURL?: string) {
  const baseAttributes = {
    className: "object-cover",
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px",
    priority: true,
    quality: 85, // Optimize for performance while maintaining quality
  };

  // Only add blur placeholder if blurDataURL is provided
  if (blurDataURL) {
    return {
      ...baseAttributes,
      placeholder: "blur" as const,
      blurDataURL
    };
  }

  return baseAttributes;
}

// Validate image for Google Discover compliance
export function validateImageForGoogleDiscover(imageData: {
  width: number;
  height: number;
  fileSize?: number;
  format?: string;
}): {
  isValid: boolean;
  issues: string[];
  score: number;
} {
  const issues: string[] = [];
  let score = 0;
  const maxScore = 5;

  // Check minimum width
  if (imageData.width >= GOOGLE_DISCOVER_REQUIREMENTS.minWidth) {
    score += 1;
  } else {
    issues.push(`Image width (${imageData.width}px) is below minimum requirement (${GOOGLE_DISCOVER_REQUIREMENTS.minWidth}px)`);
  }

  // Check minimum height
  if (imageData.height >= GOOGLE_DISCOVER_REQUIREMENTS.minHeight) {
    score += 1;
  } else {
    issues.push(`Image height (${imageData.height}px) is below minimum requirement (${GOOGLE_DISCOVER_REQUIREMENTS.minHeight}px)`);
  }

  // Check aspect ratio (16:9 is optimal for Google Discover)
  const actualRatio = imageData.width / imageData.height;
  const targetRatio = GOOGLE_DISCOVER_REQUIREMENTS.aspectRatio;
  const ratioTolerance = 0.1;
  
  if (Math.abs(actualRatio - targetRatio) <= ratioTolerance) {
    score += 1;
  } else {
    issues.push(`Image aspect ratio (${actualRatio.toFixed(2)}) should be close to 16:9 (${targetRatio.toFixed(2)}) for optimal Google Discover performance`);
  }

  // Check file size if provided
  if (imageData.fileSize !== undefined) {
    if (imageData.fileSize <= GOOGLE_DISCOVER_REQUIREMENTS.maxFileSize) {
      score += 1;
    } else {
      issues.push(`Image file size (${Math.round(imageData.fileSize / 1024 / 1024)}MB) exceeds recommended maximum (${GOOGLE_DISCOVER_REQUIREMENTS.maxFileSize / 1024 / 1024}MB)`);
    }
  }

  // Check format if provided
  if (imageData.format) {
    if (GOOGLE_DISCOVER_REQUIREMENTS.allowedFormats.includes(imageData.format)) {
      score += 1;
    } else {
      issues.push(`Image format (${imageData.format}) is not optimal. Use: ${GOOGLE_DISCOVER_REQUIREMENTS.allowedFormats.join(', ')}`);
    }
  }

  return {
    isValid: issues.length === 0,
    issues,
    score: Math.round((score / maxScore) * 100)
  };
}

// Generate responsive image srcSet for different screen sizes
export function generateResponsiveImageSizes(baseWidth: number = 1200): {
  srcSet: string;
  sizes: string;
} {
  const sizes = [480, 768, 1024, 1200, 1600, 2048];
  const srcSet = sizes
    .filter(size => size <= baseWidth * 2) // Don't upscale beyond 2x
    .map(size => `${size}w`)
    .join(', ');

  const sizesAttr = [
    '(max-width: 480px) 100vw',
    '(max-width: 768px) 80vw',
    '(max-width: 1024px) 70vw',
    '(max-width: 1200px) 60vw',
    '1200px'
  ].join(', ');

  return {
    srcSet,
    sizes: sizesAttr
  };
}

// Get the correct image path based on content type
export function getContentImagePath(image: string, contentType: 'post' | 'news'): string {
  if (contentType === 'post') {
    return `/images/cover_pages/${image}`;
  }
  
  // For news articles, the image URL is already complete
  return image;
}

// Generate image schema markup for SEO
export function generateImageSchemaMarkup(image: {
  url: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
}) {
  return {
    '@type': 'ImageObject',
    'url': image.url,
    'width': image.width || 1200,
    'height': image.height || 675,
    'caption': image.caption || image.alt,
    'description': image.alt,
    'name': image.alt
  };
}

// Optimize image for web performance
export function getOptimizedImageProps(src: string, alt: string, priority: boolean = false, blurDataURL?: string) {
  return {
    src,
    alt,
    ...getGoogleDiscoverImageAttributes(blurDataURL),
    priority,
    ...generateResponsiveImageSizes()
  };
}

export { GOOGLE_DISCOVER_REQUIREMENTS };

// Generate a simple blur data URL for images
export function generateBlurDataURL(width: number = 10, height: number = 10): string {
  // Server-side fallback - return a simple base64 encoded small gray image
  return 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAKAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyb28ldNE/Wm2WV1KkvTyRjjG7nLHwofeejf//Z';
}
