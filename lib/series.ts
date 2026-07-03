import { samplePosts, Post } from './content';

export interface SeriesStep {
  articleSlug: string;
  ohMoment: string; // what the reader understands after reading this article
}

export interface Series {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  throughLine: string;
  steps: SeriesStep[];
}

export const allSeries: Series[] = [
  {
    slug: 'how-money-actually-works',
    title: 'How Money Actually Works',
    subtitle: 'The argument no one finishes',
    description:
      'Money is not a neutral medium of exchange that markets naturally produced. It is a specific instrument of control, created and maintained by specific institutions through specific legal mechanisms, that determines who can access what. This series builds that argument from the ground up — one mechanism at a time.',
    throughLine:
      'The market is not a natural thing that exists and then government interferes with. The market is built, expanded, and enforced — one enclosure at a time.',
    steps: [
      {
        articleSlug: 'did-humans-ever-barter-before-money',
        ohMoment:
          'Money was never neutral. It appeared with states and armies, not with traders. The story that markets produced it is a myth with a purpose.',
      },
      {
        articleSlug: 'how-do-banks-create-money-out-of-nothing',
        ohMoment:
          'There is always money. The question is who it gets created for. Private banks decide — and for forty years, the answer has been: land, not wages.',
      },
      {
        articleSlug: 'why-did-colonizers-tax-africans',
        ohMoment:
          'Tax is not a universal law. It is a specific tool to manufacture dependency. The same logic that forced Africans into wage labor explains why the government says it cannot afford hospitals.',
      },
      {
        articleSlug: 'how-did-everything-come-to-cost-money',
        ohMoment:
          'Every cost that feels like it should not be there has a specific origin — a specific law, a specific lobby, a specific date when direct access was converted into a market transaction.',
      },
      {
        articleSlug: 'what-is-austerity',
        ohMoment:
          'Austerity does not cut money. It replaces public money — which does not charge interest — with private debt, which does. Each cut expands the territory where a bank stands between you and something you need.',
      },
      {
        articleSlug: 'how-did-people-survive-before-capitalism',
        ohMoment:
          'Unemployment did not exist before the commons were enclosed. The wage system was not inevitable — it was manufactured by 5,000 acts of Parliament, passed by the people who owned the land.',
      },
      {
        articleSlug: 'why-is-housing-so-expensive',
        ohMoment:
          'Shelter became an asset class through specific policy choices. The same financial system that creates money out of nothing decided to point it at land — and priced you out deliberately.',
      },
      {
        articleSlug: 'debt-as-social-control',
        ohMoment:
          'Compound interest always produces more debt than can be repaid. Ancient civilizations knew this and cancelled debt periodically. Ours does not — because the creditors write the rules.',
      },
      {
        articleSlug: 'why-do-the-rich-keep-getting-richer',
        ohMoment:
          'Wealth concentration is a mathematical guarantee when the return on capital exceeds growth. The tax system was designed to preserve that gap, not close it.',
      },
      {
        articleSlug: 'what-is-the-ruling-class',
        ohMoment:
          'The people who made these decisions are not random. They went to the same schools, sit on the same boards, rotate through the same institutions. C. Wright Mills called it the Power Elite in 1956 and backed it with data.',
      },
      {
        articleSlug: 'who-owns-the-media',
        ohMoment:
          'The story that all of this is natural and inevitable does not reproduce itself. Six companies control roughly 90% of US media. The frame of what is possible is set before the debate begins.',
      },
      {
        articleSlug: 'what-happened-to-the-left',
        ohMoment:
          'The political movement that once built the NHS, Social Security, and the 40-hour work week was deliberately dismantled. Understanding how it was defeated is the first condition for building something that survives.',
      },
    ],
  },
];

export function getSeriesBySlug(slug: string): Series | undefined {
  return allSeries.find((s) => s.slug === slug);
}

export function getSeriesForArticle(articleSlug: string): Series | undefined {
  return allSeries.find((s) => s.steps.some((step) => step.articleSlug === articleSlug));
}

export function getSeriesArticles(series: Series): Post[] {
  return series.steps
    .map((step) => samplePosts.find((p) => p.slug === step.articleSlug))
    .filter((p): p is Post => p !== undefined);
}

export function getArticlePositionInSeries(
  series: Series,
  articleSlug: string
): { position: number; total: number; prev: string | null; next: string | null } | null {
  const idx = series.steps.findIndex((s) => s.articleSlug === articleSlug);
  if (idx === -1) return null;
  return {
    position: idx + 1,
    total: series.steps.length,
    prev: idx > 0 ? series.steps[idx - 1].articleSlug : null,
    next: idx < series.steps.length - 1 ? series.steps[idx + 1].articleSlug : null,
  };
}
