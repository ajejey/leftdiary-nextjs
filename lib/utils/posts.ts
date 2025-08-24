import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// Path to the Jekyll posts directory
const postsDirectory = path.join(process.cwd(), '../leftdiary/_posts');
const imagesDirectory = path.join(process.cwd(), '../leftdiary/assets/images/cover_pages');
const targetImagesDirectory = path.join(process.cwd(), 'public/images/cover_pages');

// Ensure the target images directory exists
export const ensureImageDirectories = () => {
  if (!fs.existsSync(path.join(process.cwd(), 'public/images'))) {
    fs.mkdirSync(path.join(process.cwd(), 'public/images'), { recursive: true });
  }
  
  if (!fs.existsSync(targetImagesDirectory)) {
    fs.mkdirSync(targetImagesDirectory, { recursive: true });
  }
};

// Copy images from Jekyll to Next.js public directory
export const copyImages = () => {
  ensureImageDirectories();
  
  try {
    const imageFiles = fs.readdirSync(imagesDirectory);
    
    imageFiles.forEach(file => {
      const sourcePath = path.join(imagesDirectory, file);
      const targetPath = path.join(targetImagesDirectory, file);
      
      // Only copy if the file doesn't exist or is newer
      if (!fs.existsSync(targetPath) || 
          fs.statSync(sourcePath).mtime > fs.statSync(targetPath).mtime) {
        fs.copyFileSync(sourcePath, targetPath);
      }
    });
    
    return true;
  } catch (error) {
    console.error('Error copying images:', error);
    return false;
  }
};

// Get all post slugs
export const getPostSlugs = () => {
  try {
    return fs.readdirSync(postsDirectory);
  } catch (error) {
    console.error('Error reading posts directory:', error);
    return [];
  }
};

// Parse post data from a file
export const getPostBySlug = (slug: string) => {
  const realSlug = slug.replace(/\.html$/, '');
  const fullPath = path.join(postsDirectory, `${slug}`);
  
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    // Extract the date from the filename (Jekyll format: YYYY-MM-DD-title.html)
    const dateMatch = slug.match(/^(\d{4}-\d{2}-\d{2})/);
    const date = dateMatch ? dateMatch[1] : '';
    
    return {
      slug: realSlug,
      title: data.title || '',
      date: date,
      author: data.author || '',
      categories: Array.isArray(data.category) ? data.category : [data.category || ''],
      description: data.description || '',
      image: data.image || '',
      content,
      permalink: data.permalink || '',
      link: data.link || '',
    };
  } catch (error) {
    console.error(`Error parsing post ${slug}:`, error);
    return null;
  }
};

// Get all posts sorted by date
export const getAllPosts = () => {
  const slugs = getPostSlugs();
  const posts = slugs
    .map(slug => getPostBySlug(slug))
    .filter(post => post !== null) // Filter out any null posts
    .sort((post1, post2) => (post1!.date > post2!.date ? -1 : 1));
  
  return posts;
};

// Convert markdown content to HTML
export const markdownToHtml = async (markdown: string) => {
  const result = await remark().use(html).process(markdown);
  return result.toString();
};
