import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  allSeries,
  getSeriesBySlug,
  getSeriesArticles,
} from '@/lib/series';
import { GeneratedCover } from '@/components/blog/GeneratedCover';
import { Metadata } from 'next';

export async function generateStaticParams() {
  return allSeries.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const series = getSeriesBySlug(slug);
  if (!series) return {};
  return {
    title: `${series.title} — Left Diary`,
    description: series.description,
  };
}

export default async function SeriesPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const series = getSeriesBySlug(slug);
  if (!series) notFound();

  const articles = getSeriesArticles(series);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Series Header */}
      <div className="bg-gray-900 dark:bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <Link
            href="/"
            className="inline-flex items-center text-gray-400 hover:text-gray-200 text-sm mb-8 transition-colors"
          >
            <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            All articles
          </Link>

          <div className="mb-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-500 border border-gray-700 px-3 py-1 rounded-full">
              Series
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            {series.title}
          </h1>
          <p className="text-xl text-gray-400 mb-8 italic">{series.subtitle}</p>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
            {series.description}
          </p>

          <div className="mt-10 p-6 border border-gray-700 rounded-xl bg-gray-800/50">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-2">
              The through-line
            </p>
            <p className="text-gray-200 leading-relaxed italic">
              &ldquo;{series.throughLine}&rdquo;
            </p>
          </div>

          <div className="mt-10">
            <Link
              href={`/posts/${series.steps[0].articleSlug}`}
              className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-100 transition-all duration-200 hover:-translate-y-1 shadow-lg"
            >
              Start reading
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <span className="ml-4 text-gray-500 text-sm">{series.steps.length} articles</span>
          </div>
        </div>
      </div>

      {/* Article List */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-10">
          Reading order
        </h2>

        <div className="space-y-0">
          {series.steps.map((step, index) => {
            const article = articles[index];
            const isFirst = index === 0;

            return (
              <div
                key={step.articleSlug}
                className="relative flex gap-6 pb-10"
              >
                {/* Connector line */}
                {index < series.steps.length - 1 && (
                  <div className="absolute left-6 top-12 bottom-0 w-px bg-gray-200 dark:bg-gray-700" />
                )}

                {/* Step number */}
                <div className="flex-shrink-0 relative z-10">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                      isFirst
                        ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                        : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700'
                    }`}
                  >
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow pt-1 pb-2">
                  {isFirst && (
                    <span className="inline-block text-xs font-semibold uppercase tracking-widest text-white bg-gray-900 dark:bg-gray-600 px-3 py-1 rounded-full mb-3">
                      Start here
                    </span>
                  )}

                  <Link href={`/posts/${step.articleSlug}`} className="group block">
                    <div className="flex gap-4 items-start">
                      {article && (
                        <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 relative rounded-xl overflow-hidden">
                          {article.image ? (
                            <Image
                              src={`/images/cover_pages/${article.image}`}
                              alt={article.title}
                              fill
                              sizes="96px"
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          ) : (
                            <GeneratedCover
                              title={article.title}
                              categories={article.categories}
                              compact
                              className="group-hover:scale-105 transition-transform duration-300"
                            />
                          )}
                        </div>
                      )}

                      <div className="flex-grow min-w-0">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors leading-snug mb-2">
                          {article?.title ?? step.articleSlug}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2 mb-3">
                          {article?.description}
                        </p>
                      </div>
                    </div>
                  </Link>

                  {/* The "oh" moment */}
                  <div className="mt-3 pl-4 border-l-2 border-gray-200 dark:border-gray-700">
                    <p className="text-sm text-gray-500 dark:text-gray-400 italic leading-relaxed">
                      {step.ohMoment}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
