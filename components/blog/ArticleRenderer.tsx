import Link from 'next/link';
import React from 'react';

interface ContentSection {
    type: 'introduction' | 'section' | 'quote' | 'list' | 'statistics' | 'conclusion' | 'sources';
    title?: string;
    content: string;
}

interface ArticleProps {
    title: string;
    date: string;
    content?: string; // Full HTML content
    contentSections?: ContentSection[]; // Structured content sections
    useStructuredContent?: boolean; // Whether to use structured content or full HTML
    categories?: string[]; // Categories for the article
}

/**
 * ArticleRenderer component that can render articles using either:
 * 1. Full HTML content (simpler approach)
 * 2. Structured content sections (more control)
 */
const ArticleRenderer: React.FC<ArticleProps> = ({
    title,
    date,
    content,
    contentSections = [],
    useStructuredContent = false,
    categories = []
}) => {
    // If using structured content but no sections provided, fall back to full HTML
    const shouldUseStructured = useStructuredContent && contentSections.length > 0;

    // Render full HTML content directly
    if (!shouldUseStructured && content) {
        // Check if the content is already wrapped in an article tag
        const isWrappedInArticle = content.trim().startsWith('<article') && content.trim().endsWith('</article>');
        console.log("categories", categories)
        if (isWrappedInArticle) {
            return (
                <div className="article-container" dangerouslySetInnerHTML={{ __html: content }} />
            );
        } else {
            // Wrap the content in our standard article structure
            return (
                <article className="max-w-3xl mx-auto px-5 py-12 font-serif">
                    <header className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h1>
                        <div className="text-gray-600">
                            <span>By Left Diary</span>
                            <span className="mx-2">•</span>
                            <span>{date}</span>
                            <br />
                            {categories.map((category) => (
                                <Link
                                    key={category}
                                    href={`/news?category=${encodeURIComponent(category)}`}
                                    className="text-sm font-semibold px-3 py-1 mx-1 rounded-full bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors inline-block mb-2"
                                >
                                    {category}
                                </Link>
                            ))}
                        </div>
                    </header>
                    <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
                </article>
            );
        }
    }

    // Render using structured content sections
    return (
        <article className="max-w-3xl mx-auto px-5 py-12 font-serif">
            <header className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h1>
                <div className="text-gray-600">
                    <span>By Left Diary</span>
                    <span className="mx-2">•</span>
                    <span>{date}</span>
                    <br />
                    {categories.map((category) => (
                        <Link
                            key={category}
                            href={`/news?category=${encodeURIComponent(category)}`}
                            className="text-sm font-semibold px-3 py-1 mx-1 rounded-full bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors inline-block mb-2"
                        >
                            {category}
                        </Link>
                    ))}
                </div>
            </header>

            {contentSections.map((section, index) => {
                switch (section.type) {
                    case 'introduction':
                        return (
                            <section key={index} className="text-xl leading-relaxed text-gray-700 mb-16 border-b pb-10">
                                <div dangerouslySetInnerHTML={{ __html: section.content }} />
                            </section>
                        );

                    case 'section':
                        return (
                            <section key={index} className="mb-16">
                                {section.title && (
                                    <h2 className="text-3xl font-semibold mb-6 text-gray-800">{section.title}</h2>
                                )}
                                <div dangerouslySetInnerHTML={{ __html: section.content }} />
                            </section>
                        );

                    case 'quote':
                        return (
                            <blockquote key={index} className="pl-4 border-l-4 border-gray-300 italic my-8">
                                <div dangerouslySetInnerHTML={{ __html: section.content }} />
                            </blockquote>
                        );

                    case 'list':
                        return (
                            <section key={index} className="mb-8">
                                {section.title && (
                                    <h3 className="text-2xl font-semibold mb-4 text-gray-800">{section.title}</h3>
                                )}
                                <div dangerouslySetInnerHTML={{ __html: section.content }} />
                            </section>
                        );

                    case 'statistics':
                        return (
                            <div key={index} className="bg-gray-50 p-6 rounded-lg my-8 shadow-sm border border-gray-100">
                                {section.title && (
                                    <h3 className="text-2xl font-medium mb-4 text-gray-800">{section.title}</h3>
                                )}
                                <div dangerouslySetInnerHTML={{ __html: section.content }} />
                            </div>
                        );

                    case 'conclusion':
                        return (
                            <section key={index} className="mb-16">
                                <h2 className="text-3xl font-semibold mb-6 text-gray-800">
                                    {section.title || 'Conclusion'}
                                </h2>
                                <div dangerouslySetInnerHTML={{ __html: section.content }} />
                            </section>
                        );

                    case 'sources':
                        return (
                            <section key={index} className="mt-16 pt-8 border-t border-gray-200">
                                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                                    {section.title || 'Sources'}
                                </h2>
                                <div dangerouslySetInnerHTML={{ __html: section.content }} />
                            </section>
                        );

                    default:
                        return (
                            <div key={index} dangerouslySetInnerHTML={{ __html: section.content }} />
                        );
                }
            })}
        </article>
    );
};

export default ArticleRenderer;
