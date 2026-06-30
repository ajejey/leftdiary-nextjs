import React from 'react';

interface WithChildren {
  children: React.ReactNode;
  className?: string;
}

interface WithId extends WithChildren {
  id?: string;
}

export function P({ children, className = '' }: WithChildren) {
  return (
    <p className={`text-xl leading-relaxed text-gray-700 mb-6 ${className}`}>
      {children}
    </p>
  );
}

export function H2({ id, children }: WithId) {
  return (
    <h2 id={id} className="text-3xl font-semibold mb-6 text-gray-800 scroll-mt-8">
      {children}
    </h2>
  );
}

export function H3({ id, children }: WithId) {
  return (
    <h3 id={id} className="text-2xl font-semibold mb-4 text-gray-800 scroll-mt-8">
      {children}
    </h3>
  );
}

export function Blockquote({ children, cite }: { children: React.ReactNode; cite?: string }) {
  return (
    <blockquote className="pl-6 border-l-4 border-gray-300 italic my-8 text-xl text-gray-600 leading-relaxed">
      {children}
      {cite && (
        <footer className="not-italic text-base text-gray-500 mt-2">— {cite}</footer>
      )}
    </blockquote>
  );
}

export function ArticleSection({ id, children, className = '' }: WithId) {
  return (
    <section id={id} className={`mb-12 ${className}`.trim()}>
      {children}
    </section>
  );
}

export function ArticleSources({ children }: { children: React.ReactNode }) {
  return (
    <footer className="border-t border-gray-200 pt-8 text-sm text-gray-500">
      {children}
    </footer>
  );
}
