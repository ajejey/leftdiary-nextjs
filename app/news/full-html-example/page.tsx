import React from 'react';
import ArticleRenderer from '@/components/blog/ArticleRenderer';

export default function FullHtmlExamplePage() {
  // Example article with full HTML content
  const exampleArticle = {
    title: "Beyond the Chains: Why &apos;Workplace Organizing&apos; is a Ruse – It&apos;s Time to Abolish the Boss and Seize Control",
    date: "August 14, 2024",
    // This is the full HTML content from the example file
    content: `<article class="max-w-3xl mx-auto px-5 py-12 font-serif"><header class="text-center mb-16"><h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Beyond the Chains: Why &apos;Workplace Organizing&apos; is a Ruse – It&apos;s Time to Abolish the Boss and Seize Control</h1><div class="text-gray-600"><span>By Left Diary</span><span class="mx-2">•</span><span>August 14, 2024</span></div></header><section class="text-xl leading-relaxed text-gray-700 mb-16 border-b pb-10"><p>Let&apos;s be brutally honest: &apos;workplace organizing&apos; as peddled by the corporate press is often little more than a sophisticated attempt to manage dissent, to domesticate the inherent rage of the exploited, rather than dismantle the cages of capitalism. Even Forbes, in a rare moment of candor, recently confessed that &apos;workplace satisfaction remains stubbornly low globally,&apos; a statistic that should send shivers down the spines of the ruling class. They want you to believe the problem is &apos;bad managers&apos; or &apos;insufficient benefits.&apos;</p><p>But we know better, don&apos;t we? We feel it in our bones: the gnawing alienation, the profound dissatisfaction that no amount of catered lunches or &apos;wellness programs&apos; can erase. This isn&apos;t a plea for better chains; it&apos;s a manifesto for their shattering. The true path to liberation, the only answer to the indignity of wage slavery, lies <span class="font-bold">beyond organizing</span>: it demands seizing control and the outright <span class="font-bold">abolition of the boss</span>. We speak of genuine <span class="font-bold">worker self-management</span>, of <span class="font-bold">direct democracy in production</span>, where the means of our collective livelihood are truly ours.</p></section></article>`
  };

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8 px-4">
        <h1 className="text-2xl font-bold mb-4">Article Example with Full HTML Content</h1>
        <p className="text-gray-600">
          This page demonstrates rendering an article using the ArticleRenderer component 
          with full HTML content.
        </p>
      </div>
      
      {/* Render the article using full HTML content */}
      <ArticleRenderer 
        title={exampleArticle.title}
        date={exampleArticle.date}
        content={exampleArticle.content}
        useStructuredContent={false}
      />
    </div>
  );
}

