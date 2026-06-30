import React from 'react';

interface ArticleHeaderProps {
  categories: string[];
  title: string;
  lead: React.ReactNode;
  date: string;
  dateTime: string;
  readingTime: string;
}

export function ArticleHeader({ categories, title, lead, date, dateTime, readingTime }: ArticleHeaderProps) {
  return (
    <header className="mb-12">
      <div className="text-sm uppercase tracking-widest text-gray-500 mb-4">
        {categories.join(' · ')}
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
        {title}
      </h1>
      <p className="text-2xl leading-relaxed text-gray-600 font-light">
        {lead}
      </p>
      <div className="mt-6 text-sm text-gray-500">
        By Left Diary &nbsp;·&nbsp;{' '}
        <time dateTime={dateTime}>{date}</time>
        &nbsp;·&nbsp; {readingTime}
      </div>
    </header>
  );
}
