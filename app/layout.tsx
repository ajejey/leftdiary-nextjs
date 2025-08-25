import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import { deferNonCriticalJS } from '@/utils/performanceOptimization';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Components
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://leftdiary.com'),
  title: {
    template: '%s | Left Diary',
    default: 'Left Diary - Progressive News Analysis & Leftist Book Reviews'
  },
  description: "In-depth progressive analysis of current events, leftist book summaries, and radical political commentary. Challenging mainstream narratives with anarchist and anti-capitalist perspectives.",
  keywords: [
    'leftism', 'leftist ideology', 'progressive politics', 'social justice', 
    'activism', 'socialism', 'communism', 'anarchism', 'anti-capitalism',
    'news analysis', 'political commentary', 'book reviews', 'radical politics',
    'leftist books', 'progressive analysis', 'alternative media'
  ],
  authors: [{ name: 'Left Diary', url: 'https://leftdiary.com/about' }],
  creator: 'Left Diary',
  publisher: 'Left Diary',
  category: 'News & Politics',
  classification: 'Progressive Political Commentary',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://leftdiary.com',
    siteName: 'Left Diary',
    title: 'Left Diary - Progressive News Analysis & Leftist Book Reviews',
    description: "In-depth progressive analysis of current events, leftist book summaries, and radical political commentary.",
    images: [
      {
        url: 'https://leftdiary.com/og-image.jpg',
        width: 1200,
        height: 675,
        alt: 'Left Diary - Progressive News Analysis',
        type: 'image/jpeg'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Left Diary - Progressive News Analysis & Leftist Book Reviews',
    description: "In-depth progressive analysis of current events and leftist book reviews.",
    site: '@leftdiary',
    creator: '@leftdiary',
    images: ['https://leftdiary.com/og-image.jpg']
  },
  verification: {
    google: 'your-google-verification-code', // Add your verification code
    other: {
      'msvalidate.01': 'your-bing-verification-code' // Add your Bing verification code
    }
  },
  alternates: {
    canonical: 'https://leftdiary.com',
    types: {
      'application/rss+xml': [
        {
          url: 'https://leftdiary.com/feed.xml',
          title: 'Left Diary RSS Feed'
        }
      ]
    }
  },
  other: {
    'google-site-verification': 'your-google-verification-code',
    'theme-color': '#1a1a1a',
    'color-scheme': 'light dark',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Enhanced meta tags for 2025 SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Left Diary" />
        <meta name="publisher" content="Left Diary" />
        <meta name="copyright" content="Left Diary" />
        <meta name="language" content="en-US" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="3 days" />
        
        {/* Enhanced Open Graph meta tags */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Left Diary" />
        <meta property="article:publisher" content="https://leftdiary.com" />
        
        {/* Twitter Card meta tags */}
        <meta name="twitter:site" content="@leftdiary" />
        <meta name="twitter:creator" content="@leftdiary" />
        
        {/* RSS feed */}
        <link rel="alternate" type="application/rss+xml" title="Left Diary - RSS Feed" href="/feed.xml" />
        
        {/* Sitemap */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* Favicon and app icons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Theme colors */}
        <meta name="theme-color" content="#1a1a1a" />
        <meta name="msapplication-TileColor" content="#1a1a1a" />
        
        {/* Preconnect to external domains for faster resource loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        
        {/* Preload critical assets */}
        <link rel="preload" href="/logo.png" as="image" type="image/png" />
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* Security headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        
        {/* Google AdSense script - async for performance */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3613850686549619"
          crossOrigin="anonymous"
        />
        
        {/* Google Analytics - optimized for performance */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=UA-163487453-1" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-163487453-1', { 
              'send_page_view': false,
              'anonymize_ip': true,
              'allow_google_signals': false,
              'allow_ad_personalization_signals': false
            });
            gtag('event', 'page_view');
          `}
        </Script>
        
        {/* Schema.org markup for Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            'name': 'Left Diary',
            'url': 'https://leftdiary.com',
            'logo': 'https://leftdiary.com/logo.png',
            'description': 'Progressive news analysis and leftist book reviews',
            'sameAs': [
              'https://twitter.com/leftdiary',
              'https://facebook.com/leftdiary'
            ],
            'contactPoint': {
              '@type': 'ContactPoint',
              'contactType': 'Editorial',
              'url': 'https://leftdiary.com/contact'
            }
          })}
        </script>
        
        {/* Schema.org markup for Website */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            'name': 'Left Diary',
            'url': 'https://leftdiary.com',
            'description': 'Progressive news analysis and leftist book reviews',
            'inLanguage': 'en-US',
            'potentialAction': {
              '@type': 'SearchAction',
              'target': 'https://leftdiary.com/search?q={search_term_string}',
              'query-input': 'required name=search_term_string'
            }
          })}
        </script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="site-wrapper">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
        
        {/* Defer non-critical JavaScript */}
        <Script id="defer-non-critical" strategy="lazyOnload" dangerouslySetInnerHTML={{ __html: deferNonCriticalJS }} />
        
        
        {/* Add defer-trigger element for intersection observer */}
        <div className="defer-trigger" style={{ height: '1px', width: '1px', position: 'absolute', bottom: '100vh', opacity: 0 }} />
      </body>
    </html>
  );
}

