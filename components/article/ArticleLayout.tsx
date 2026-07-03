import React from 'react';

interface ArticleLayoutProps {
  children: React.ReactNode;
  jsonLd?: object;
}

export function ArticleLayout({ children, jsonLd }: ArticleLayoutProps) {
  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <article className="max-w-3xl mx-auto px-5 py-12 font-serif">
        {children}
      </article>
    </>
  );
}
