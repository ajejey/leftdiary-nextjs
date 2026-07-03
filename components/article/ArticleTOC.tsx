import React from 'react';
import { TOCItem } from './types';

interface ArticleTOCProps {
  items: TOCItem[];
}

export function ArticleTOC({ items }: ArticleTOCProps) {
  return (
    <nav aria-label="Table of contents" className="mb-12 p-6 bg-gray-50 border border-gray-200 rounded-xl">
      <p className="text-xs uppercase tracking-widest text-gray-500 mb-4 font-sans font-semibold">
        In This Article
      </p>
      <ol className="space-y-2">
        {items.map((item) => (
          <li key={item.id} className={item.level === 3 ? 'pl-4' : ''}>
            <a
              href={`#${item.id}`}
              className="text-lg text-gray-700 hover:text-gray-900 underline decoration-gray-300 hover:decoration-gray-700 transition-colors"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
