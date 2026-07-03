import { ReactNode } from 'react';

export interface TOCItem {
  id: string;
  text: string;
  level: 2 | 3;
}

export interface FAQItem {
  question: string;
  answer: ReactNode;
}

export interface FurtherReadingItem {
  href: string;
  title: string;
  description: string;
  external?: boolean;
}
