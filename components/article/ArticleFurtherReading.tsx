import React from 'react';
import Link from 'next/link';
import { FurtherReadingItem } from './types';

interface ArticleFurtherReadingProps {
  title?: string;
  items: FurtherReadingItem[];
}

export function ArticleFurtherReading({ title = 'Go Deeper', items }: ArticleFurtherReadingProps) {
  return (
    <section className="mb-12 bg-gray-50 border border-gray-200 rounded-xl p-8">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">{title}</h2>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i}>
            {item.external ? (
              <a
                href={item.href}
                className="text-gray-800 font-medium hover:text-gray-600 underline decoration-gray-300 hover:decoration-gray-600 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.title}
              </a>
            ) : (
              <Link
                href={item.href}
                className="text-gray-800 font-medium hover:text-gray-600 underline decoration-gray-300 hover:decoration-gray-600 transition-all"
              >
                {item.title}
              </Link>
            )}
            <span className="text-gray-600"> — {item.description}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
