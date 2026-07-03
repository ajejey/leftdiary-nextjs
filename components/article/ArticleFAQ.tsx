import React from 'react';
import { FAQItem } from './types';
import { H2 } from './ArticleTypography';

interface ArticleFAQProps {
  items: FAQItem[];
}

export function ArticleFAQ({ items }: ArticleFAQProps) {
  return (
    <section id="faq" className="mb-12">
      <H2 id="faq">Frequently Asked Questions</H2>
      <div className="space-y-6">
        {items.map((item, i) => (
          <div key={i} className="border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.question}</h3>
            <div className="text-lg text-gray-700 leading-relaxed">{item.answer}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
