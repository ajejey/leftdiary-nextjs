import React from 'react';

interface ArticleCalloutProps {
  variant: 'dark' | 'light';
  title: string;
  children: React.ReactNode;
}

export function ArticleCallout({ variant, title, children }: ArticleCalloutProps) {
  if (variant === 'dark') {
    return (
      <section className="mb-12 bg-gray-900 text-white rounded-xl p-8">
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        <div className="text-lg text-gray-300 space-y-4">{children}</div>
      </section>
    );
  }
  return (
    <section className="mb-12 bg-gray-50 border border-gray-200 rounded-xl p-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h2>
      <div className="text-lg text-gray-700 space-y-4">{children}</div>
    </section>
  );
}
