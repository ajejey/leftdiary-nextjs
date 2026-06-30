import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArticleLayout,
  ArticleHeader,
  ArticleTOC,
  ArticleFAQ,
  ArticleFurtherReading,
  ArticleCallout,
  P,
  H2,
  H3,
  Blockquote,
  ArticleSection,
  ArticleSources,
} from '@/components/article';
import type { TOCItem, FAQItem, FurtherReadingItem } from '@/components/article/types';

export const metadata: Metadata = {
  title: 'Why Do the Rich Keep Getting Richer?',
  description:
    "Warren Buffett's secretary pays a higher tax rate than he does. He said it himself. Jeff Bezos paid $0 in federal income tax in 2007. This isn't an accident — it's a mathematical guarantee. Here's the mechanism economists don't teach in school.",
  keywords: [
    'why do the rich keep getting richer',
    'Piketty r greater than g explained',
    'capital gains tax vs income tax',
    'why is the wealth gap growing',
    'K-shaped recovery explained',
    'billionaires tax rate',
    'wealth inequality explained simply',
    'regulatory capture explained',
  ],
  openGraph: {
    title: 'Why Do the Rich Keep Getting Richer?',
    description:
      "Warren Buffett's secretary pays a higher tax rate than he does. Jeff Bezos paid $0 in income tax in 2007. Piketty's r > g explains why this is a mathematical guarantee, not an accident.",
    type: 'article',
    publishedTime: '2026-06-30T00:00:00Z',
    authors: ['Left Diary'],
    tags: ['Economics', 'Inequality', 'Capitalism', 'Piketty'],
  },
  alternates: {
    canonical: 'https://leftdiary.com/posts/why-do-the-rich-keep-getting-richer',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://leftdiary.com/posts/why-do-the-rich-keep-getting-richer#article',
      headline: 'Why Do the Rich Keep Getting Richer?',
      description:
        "Warren Buffett's secretary pays a higher tax rate than he does. He said it himself. Piketty's r > g explains why wealth concentration is a mathematical guarantee under current rules.",
      image: 'https://leftdiary.com/images/wealth-inequality-cover.jpg',
      datePublished: '2026-06-30T00:00:00Z',
      dateModified: '2026-06-30T00:00:00Z',
      author: { '@type': 'Organization', name: 'Left Diary', url: 'https://leftdiary.com' },
      publisher: { '@type': 'Organization', name: 'Left Diary', url: 'https://leftdiary.com' },
      mainEntityOfPage: 'https://leftdiary.com/posts/why-do-the-rich-keep-getting-richer',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://leftdiary.com/posts/why-do-the-rich-keep-getting-richer#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Why do the rich keep getting richer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Capital (stocks, property, bonds) earns a return of 4-5% per year on average. The economy grows at 1-2% per year. When capital returns outpace economic growth — what economist Thomas Piketty calls r > g — wealth mathematically concentrates in the hands of whoever already owns capital. Capital gains are also taxed at roughly half the rate of wages, meaning people who earn from ownership pay less tax than people who earn from work.",
          },
        },
        {
          '@type': 'Question',
          name: "What is Piketty's r > g?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "In 'Capital in the Twenty-First Century' (2013), economist Thomas Piketty analyzed 200 years of tax records across 20 countries and found that when the return on capital (r) exceeds the rate of economic growth (g), wealth concentrates. Historically r has been around 4-5% while g has been 1-2%, meaning capital compounding almost always outpaces wage growth. The exception was 1945-1975, when wars destroyed inherited wealth, unions were strong, and top tax rates reached 91% in the US.",
          },
        },
        {
          '@type': 'Question',
          name: 'Why is capital gains tax lower than income tax?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'In the US, income from wages is taxed at up to 37% at the top bracket. Income from capital — stock dividends, property appreciation, investment returns — is taxed at a maximum of 20% (and often 15% or 0%). This is the capital gains rate. It was lobbied for and legislated by people who earn primarily from capital rather than labor. ProPublica found that between 2014-2018, Jeff Bezos paid a true tax rate of 0.98%, Warren Buffett paid 0.10%, using entirely legal strategies built into the tax code.',
          },
        },
        {
          '@type': 'Question',
          name: 'Did billionaires get richer during COVID?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Between March and September 2020, US billionaire wealth increased by $845 billion while 54 million Americans filed for unemployment. The Federal Reserve created $4 trillion and pushed it into financial markets, inflating asset prices. People who owned assets got richer. People who sold their time for wages lost income. Economists called this the K-shaped recovery — one arm of the K going up (capital owners), one going down (wage earners).',
          },
        },
        {
          '@type': 'Question',
          name: 'What is regulatory capture?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Regulatory capture is when the industry being regulated takes control of the regulatory process — through lobbying, campaign donations, and the revolving door between government and industry. The people who wrote the 2017 Tax Cuts and Jobs Act came from and returned to the lobbying firms that represented the companies that benefited from the cuts. The top 1% donate roughly 40% of all political donations in the US. Regulatory capture isn't a conspiracy — it's what happens structurally when political access costs money.",
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://leftdiary.com/posts/why-do-the-rich-keep-getting-richer#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://leftdiary.com' },
        { '@type': 'ListItem', position: 2, name: 'Posts', item: 'https://leftdiary.com/posts' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Why Do the Rich Keep Getting Richer?',
          item: 'https://leftdiary.com/posts/why-do-the-rich-keep-getting-richer',
        },
      ],
    },
  ],
};

const TOC_ITEMS: TOCItem[] = [
  { id: 'the-story-you-were-told', text: 'The Story You Were Told', level: 2 },
  { id: 'the-number-nobody-taught-you', text: 'The Number Nobody Taught You in School', level: 2 },
  { id: 'what-is-capital', text: 'What Is Capital, Exactly?', level: 3 },
  { id: 'the-tax-system-was-built-to-widen-the-gap', text: 'The Tax System Was Built to Widen the Gap', level: 2 },
  { id: 'buffett-said-it-himself', text: 'Warren Buffett Said It Himself', level: 3 },
  { id: 'covid-proved-it', text: 'COVID Proved It Wasn\'t an Accident', level: 2 },
  { id: 'not-broken-rigged', text: 'This Isn\'t a Bug in the System', level: 2 },
  { id: 'what-would-actually-change-it', text: 'What Would Actually Change It', level: 2 },
  { id: 'faq', text: 'Common Questions', level: 2 },
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Why do the rich keep getting richer?',
    answer: (
      <>
        Capital — stocks, property, bonds — earns a historical return of around 4–5% per year. The
        economy as a whole grows at 1–2% per year. When capital returns consistently outpace
        economic growth (what Piketty calls <em>r &gt; g</em>), wealth mathematically concentrates.
        The gap widens automatically, without anyone choosing it — just by holding capital. On top
        of that, capital gains are taxed at roughly half the rate of wages, so the people who earn
        from ownership pay less tax than the people who earn from work.
      </>
    ),
  },
  {
    question: "What is Piketty's r > g?",
    answer: (
      <>
        In{' '}
        <a
          href="https://en.wikipedia.org/wiki/Capital_in_the_Twenty-First_Century"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-gray-400 hover:decoration-gray-700"
        >
          <em>Capital in the Twenty-First Century</em>
        </a>{' '}
        (2013), economist Thomas Piketty analyzed 200 years of tax records across 20 countries. His
        core finding: when the return on capital (<em>r</em>) exceeds the rate of economic growth (
        <em>g</em>), wealth concentrates. Historically, <em>r</em> has been around 4–5% and{' '}
        <em>g</em> around 1–2%. The exception was 1945–1975, when wars destroyed inherited wealth,
        unions were strong, and top US tax rates reached 91%.
      </>
    ),
  },
  {
    question: 'Why is capital gains tax lower than income tax?',
    answer: (
      <>
        In the US, wages are taxed up to 37% at the top bracket. Capital income — dividends,
        property gains, investment returns — is taxed at a maximum of 20%, often 15% or 0%. This
        was lobbied for and legislated by people who earn primarily from capital. ProPublica found
        that between 2014–2018, Jeff Bezos paid a true tax rate of 0.98% and Warren Buffett paid
        0.10% — using entirely legal strategies built into the tax code.
      </>
    ),
  },
  {
    question: 'Did billionaires get richer during COVID?',
    answer: (
      <>
        Yes. Between March and September 2020, US billionaire wealth increased by $845 billion while
        54 million Americans filed for unemployment. The Federal Reserve created $4 trillion and
        pushed it into financial markets, inflating asset prices. Economists called this the
        K-shaped recovery: one arm of the K going up (capital owners), one going down (wage
        earners). The divergence tracked almost perfectly with who owned assets and who didn&apos;t.
      </>
    ),
  },
  {
    question: 'What is regulatory capture?',
    answer: (
      <>
        Regulatory capture is when the industry being regulated takes control of the regulatory
        process — through lobbying, campaign donations, and the revolving door between government
        and industry. The top 1% donate roughly 40% of all political donations in the US. The
        people who drafted the 2017 Tax Cuts and Jobs Act moved directly between lobbying firms and
        the Treasury Department. This isn&apos;t a conspiracy — it&apos;s what structurally happens
        when political access costs money and the people with the most money can buy the most access.
      </>
    ),
  },
];

const FURTHER_READING: FurtherReadingItem[] = [
  {
    href: '/posts/why-did-colonizers-tax-africans',
    title: 'Why Did Colonizers Tax Africans?',
    description: 'If governments create money, why collect taxes at all? Colonizers accidentally answered this — and it explains modern austerity.',
  },
  {
    href: '/posts/how-do-banks-create-money-out-of-nothing',
    title: 'How Do Banks Create Money Out of Nothing?',
    description: 'Banks create new money when they make loans. 80% of it flows into property and financial assets. Here\'s where the wealth gap starts.',
  },
  {
    href: '/posts/why-is-housing-so-expensive',
    title: 'Why Is Housing So Expensive?',
    description: 'Housing became an asset class through deliberate policy choices. The enclosure of land is still happening — just in a different form.',
  },
  {
    href: 'https://en.wikipedia.org/wiki/Capital_in_the_Twenty-First_Century',
    title: 'Capital in the Twenty-First Century — Wikipedia',
    description: "Piketty's landmark 700-page analysis of wealth concentration across 200 years and 20 countries.",
    external: true,
  },
  {
    href: 'https://www.propublica.org/article/the-secret-irs-files-trove-of-never-before-seen-records-reveal-how-the-wealthiest-avoid-income-tax',
    title: 'The Secret IRS Files — ProPublica',
    description: 'Leaked IRS records showing billionaires\' true tax rates. Bezos: 0.98%. Buffett: 0.10%.',
    external: true,
  },
  {
    href: 'https://en.wikipedia.org/wiki/Regulatory_capture',
    title: 'Regulatory Capture — Wikipedia',
    description: 'The structural mechanism by which regulated industries take control of their regulators.',
    external: true,
  },
];

export default function WhyDoTheRichKeepGettingRicher() {
  return (
    <ArticleLayout jsonLd={jsonLd}>
      <ArticleHeader
        categories={['Economics', 'Inequality', 'Capitalism']}
        title="Why Do the Rich Keep Getting Richer?"
        lead={
          <>
            The{' '}
            <Link
              href="/posts/why-did-colonizers-tax-africans"
              className="underline decoration-gray-400 hover:decoration-gray-700"
            >
              last article left a question hanging
            </Link>
            : who keeps choosing austerity? Who runs the institutions that say &ldquo;we can&apos;t
            afford hospitals&rdquo; while creating money for bank bailouts? The answer is
            uncomfortable. The people making those decisions are the same people getting richer while
            everyone else isn&apos;t. And there&apos;s a mechanism for it. A mathematical one.
          </>
        }
        date="June 30, 2026"
        dateTime="2026-06-30"
        readingTime="13 min read"
      />

      <ArticleTOC items={TOC_ITEMS} />

      <ArticleSection>
        <H2 id="the-story-you-were-told">The Story You Were Told</H2>
        <P>
          The rich deserve it. They worked harder. They were smarter. They took risks, they
          innovated, they built things. Wealth is a reflection of value created. If you&apos;re not
          rich, you either haven&apos;t worked hard enough, haven&apos;t taken enough risks, or
          haven&apos;t created enough value. The implication is clear: the current distribution of
          wealth is basically fair. Meritocracy is working.
        </P>
        <P>
          Then Warren Buffett — one of the richest people on Earth — published an op-ed in the{' '}
          <em>New York Times</em> saying his secretary pays a higher percentage of her income in
          taxes than he does. Not that he feels bad about it. That it&apos;s just factually true,
          and Congress should fix it.
        </P>
        <P>
          They didn&apos;t fix it. It&apos;s still true fifteen years later.
        </P>
        <P>
          ProPublica, using leaked{' '}
          <a
            href="https://www.irs.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            IRS
          </a>{' '}
          records, found that between 2014 and 2018:{' '}
          <a
            href="https://www.propublica.org/article/the-secret-irs-files-trove-of-never-before-seen-records-reveal-how-the-wealthiest-avoid-income-tax"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            Jeff Bezos paid a &ldquo;true tax rate&rdquo; of 0.98%. Warren Buffett paid 0.10%.
            Elon Musk paid 3.27%.
          </a>{' '}
          Not 10%. Not 1%. Zero point one percent.
        </P>
        <P>
          These aren&apos;t tax cheats. They broke no laws. They used strategies that are entirely
          legal, specifically designed for people who earn from ownership rather than work. The
          strategies were written into law. By people. On purpose.
        </P>
        <P>
          If the system rewards hard work, why does the hardest-working person in Jeff
          Bezos&apos;s warehouse pay a higher percentage in taxes than Jeff Bezos?
        </P>
      </ArticleSection>

      <ArticleSection>
        <H2 id="the-number-nobody-taught-you">The Number Nobody Taught You in School</H2>
        <P>
          In 2013, a French economist named{' '}
          <a
            href="https://en.wikipedia.org/wiki/Thomas_Piketty"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            Thomas Piketty
          </a>{' '}
          published{' '}
          <a
            href="https://en.wikipedia.org/wiki/Capital_in_the_Twenty-First_Century"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            <em>Capital in the Twenty-First Century</em>
          </a>
          . He spent fifteen years collecting tax records from twenty countries going back to the
          1700s. It&apos;s 700 pages. But the core finding fits in one line:
        </P>

        <Blockquote cite="Thomas Piketty, Capital in the Twenty-First Century (2013)">
          &ldquo;When the rate of return on capital exceeds the rate of growth of output and income,
          as it did in the nineteenth century and seems quite likely to do again in the
          twenty-first, capitalism automatically generates arbitrary and unsustainable inequalities
          that radically undermine the meritocratic values on which democratic societies are
          based.&rdquo;
        </Blockquote>

        <P>
          He writes it as an equation: <strong>r &gt; g</strong>.
        </P>
        <P>
          <em>r</em> is the annual return on capital — the percentage a stock portfolio or property
          portfolio grows each year, on average. Historically: around 4–5%.
        </P>
        <P>
          <em>g</em> is the rate of economic growth — how fast the whole economy expands. Wages,
          GDP, productivity. Historically: around 1–2%.
        </P>
        <P>
          When r &gt; g, capital compounds faster than wages grow. Every year, the gap widens. Not
          because rich people worked harder that year. Just because they own capital and capital
          returns outpace everything else.
        </P>
        <P>
          Piketty found this was true for most of the past 300 years. The single exception was
          roughly 1945 to 1975 — when wars had destroyed a huge portion of inherited wealth, unions
          were strong, and top marginal tax rates in the United States reached 91%. During those
          thirty years, inequality actually fell. Then came{' '}
          <a
            href="https://en.wikipedia.org/wiki/Reaganomics"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            Reagan
          </a>{' '}
          and{' '}
          <a
            href="https://en.wikipedia.org/wiki/Thatcherism"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            Thatcher
          </a>
          . Top tax rates fell. Unions were broken. And we went straight back to r &gt; g.
        </P>

        <H3 id="what-is-capital">What Is Capital, Exactly?</H3>
        <P>
          Capital isn&apos;t just money sitting in a savings account. It&apos;s any asset that
          generates returns over time:
        </P>
        <P>
          <strong>Stocks</strong> — ownership shares in companies that pay dividends and appreciate
          in value. You own a piece of Apple. Apple earns money. You get a cut, proportional to
          your ownership, without working at Apple.
        </P>
        <P>
          <strong>Property</strong> — earns rent <em>and</em> appreciates. You own a house in
          London. Someone pays you rent every month. The house also becomes more valuable every
          year. Two income streams from one asset, neither requiring your labor.
        </P>
        <P>
          <strong>Bonds and financial instruments</strong> — pay interest. You lend money to a
          government or corporation. They pay you back more than you lent. Money earns money.
        </P>
        <P>
          <strong>Patents and intellectual property</strong> — earn licensing fees. You own the
          patent on a drug. Every time a hospital buys it, you get a cut, decades after the
          research was done.
        </P>
        <P>
          The critical thing: <em>capital earns while you sleep</em>. You don&apos;t have to do
          anything. The clock ticks, the percentage compounds. When you sell your time for wages,
          you get paid for exactly and only the time you sell. Stop working, stop earning.
        </P>
        <P>
          This is the fundamental gap. Not who worked harder. Who owns capital.
        </P>
      </ArticleSection>

      <ArticleSection>
        <H2 id="the-tax-system-was-built-to-widen-the-gap">
          The Tax System Was Built to Widen the Gap
        </H2>
        <P>
          Here&apos;s where &ldquo;the system is broken&rdquo; isn&apos;t quite right. The system
          is working perfectly — just not for you.
        </P>
        <P>
          In the United States, income from <em>labor</em> — your paycheck, your freelance
          earnings, your salary — is taxed at up to 37% at the top bracket. Income from{' '}
          <em>capital</em> — stock dividends, property appreciation, investment returns — is taxed
          at a maximum of 20%, and often 15% or 0%. This is called the{' '}
          <a
            href="https://en.wikipedia.org/wiki/Capital_gains_tax_in_the_United_States"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            capital gains tax
          </a>
          . It&apos;s roughly half the rate on wages.
        </P>
        <P>
          Then there&apos;s inheritance. In the US, the first $13.6 million of an inherited estate
          is completely tax-free. Most heirs never pay a penny.{' '}
          <a
            href="https://en.wikipedia.org/wiki/Estate_tax_in_the_United_States"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            The estate tax
          </a>{' '}
          — what opponents call the &ldquo;death tax&rdquo; — covers fewer than 0.1% of estates. Inherited
          wealth transfers across generations almost entirely tax-free.
        </P>
        <P>
          And then there&apos;s the strategy of{' '}
          <a
            href="https://www.propublica.org/article/buy-borrow-die-how-rich-americans-live-off-their-paper-wealth"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            &ldquo;Buy, Borrow, Die.&rdquo;
          </a>{' '}
          You hold stocks. They appreciate. You never sell, so you never pay capital gains. Instead
          you borrow against them at low interest rates — loans aren&apos;t taxable income. You live
          off the loan. When you die, your heirs inherit the stock at its current market value. The
          decades of appreciation are never taxed. Ever.
        </P>

        <H3 id="buffett-said-it-himself">Warren Buffett Said It Himself</H3>
        <P>
          In 2011,{' '}
          <a
            href="https://en.wikipedia.org/wiki/Warren_Buffett"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            Warren Buffett
          </a>{' '}
          published an op-ed in the <em>New York Times</em> titled{' '}
          <a
            href="https://www.nytimes.com/2011/08/15/opinion/stop-coddling-the-super-rich.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            &ldquo;Stop Coddling the Super-Rich.&rdquo;
          </a>
        </P>

        <Blockquote cite="Warren Buffett, New York Times, August 2011">
          &ldquo;My friends and I have been coddled long enough by a billionaire-friendly Congress.
          While the poor and middle class fight for us in Afghanistan, and while most Americans
          struggle to make ends meet, we mega-rich continue to get our extraordinary tax
          breaks.&rdquo;
        </Blockquote>

        <P>
          His secretary paid a higher percentage of her income in taxes than he did. He
          wasn&apos;t bragging. He was embarrassed. He asked Congress to fix it.
        </P>
        <P>
          Congress didn&apos;t fix it. Fifteen years later, the gap is wider. Buffett&apos;s
          effective tax rate is still a fraction of his secretary&apos;s. She earns from labor. He
          earns from capital. The tax code was written accordingly.
        </P>
      </ArticleSection>

      <ArticleSection>
        <H2 id="covid-proved-it">COVID Proved It Wasn&apos;t an Accident</H2>
        <P>
          March 2020. The economy locked down. Millions lost jobs. Millions couldn&apos;t pay rent.
          Food banks had lines stretching around the block.
        </P>
        <P>
          Between March and September 2020, US billionaire wealth increased by{' '}
          <a
            href="https://inequality.org/great-divide/updates-billionaire-pandemic/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            $845 billion
          </a>
          . While 54 million Americans filed for unemployment.
        </P>
        <P>
          The Federal Reserve — the US central bank — created roughly $4 trillion and pushed it
          into financial markets. Asset prices (stocks, bonds, property) went up. The government
          gave individuals{' '}
          <a
            href="https://en.wikipedia.org/wiki/Economic_Impact_Payments"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            stimulus checks
          </a>{' '}
          of $1,200 — roughly two weeks of median rent in most US cities.
        </P>
        <P>
          Economists started calling this the{' '}
          <a
            href="https://en.wikipedia.org/wiki/K-shaped_recovery"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            K-shaped recovery
          </a>
          . Draw a K. The upper arm goes up — that&apos;s people who own assets. The lower arm goes
          down — that&apos;s people who earn from wages. The divergence tracked almost perfectly
          with who owned capital and who didn&apos;t.
        </P>
        <P>
          This connects directly to what{' '}
          <Link
            href="/posts/how-do-banks-create-money-out-of-nothing"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            we covered in the banks article
          </Link>
          : when new money is created, where does it go? Banks create it and send 80% of it into
          property and financial markets — the same assets that already generate returns for capital
          owners. New money inflates the assets. Asset owners get wealthier. Wage earners see
          prices rise without wages rising to match.
        </P>
        <P>
          It&apos;s the same mechanism every time. The direction of new money determines who gets
          richer. And the direction of new money is decided by who controls credit.
        </P>
      </ArticleSection>

      <ArticleSection>
        <H2 id="not-broken-rigged">This Isn&apos;t a Bug in the System</H2>
        <P>
          Here&apos;s the distinction that matters: a <em>broken</em> system fails to do what it
          was designed to do. A <em>rigged</em> system does exactly what it was designed to do —
          just for someone else.
        </P>
        <P>
          Capital gains tax at 15% instead of 37% didn&apos;t happen by accident. It required
          legislation. Legislation requires votes. Votes require campaigns. Campaigns require
          money. The top 1% donate roughly{' '}
          <a
            href="https://www.opensecrets.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            40% of all political donations
          </a>{' '}
          in the US.
        </P>
        <P>
          The 2017 Tax Cuts and Jobs Act cut the corporate tax rate from 35% to 21% and further
          reduced capital taxation. The people who drafted it came from the lobbying firms
          representing the corporations that benefited. After leaving office, many went back to
          those lobbying firms.
        </P>
        <P>
          This is what economists call{' '}
          <a
            href="https://en.wikipedia.org/wiki/Regulatory_capture"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            regulatory capture
          </a>
          : when the industry being regulated takes over the process of regulation. Not through
          bribery (usually). Through the revolving door, through campaign finance, through the
          simple fact that if political access costs money, the people with the most money have the
          most access.
        </P>
        <P>
          It&apos;s not a conspiracy. It doesn&apos;t require a secret meeting in a dark room.
          It&apos;s structural. Put money at the center of political participation and the people
          with the most money will gradually shape the rules in their favor. Every time.
        </P>
        <P>
          The wealth concentration Piketty documented didn&apos;t just happen because r &gt; g in
          some abstract mathematical sense. It happened because the people who own capital used that
          capital to shape the tax code, the lending rules, the zoning laws — all the legal
          structures that determine where money flows.
        </P>
        <P>
          We covered a version of this already:{' '}
          <Link
            href="/posts/why-is-housing-so-expensive"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            housing didn&apos;t get expensive by accident
          </Link>
          . Planning restrictions, the mortgage interest deduction, the financialization of
          property — each required specific policy choices. Each was made by people who owned
          property. Each made property more valuable. The pattern is the same across every asset
          class.
        </P>
      </ArticleSection>

      <ArticleSection>
        <H2 id="what-would-actually-change-it">What Would Actually Change It</H2>
        <P>
          Piketty wasn&apos;t neutral. He proposed a solution: a{' '}
          <a
            href="https://en.wikipedia.org/wiki/Wealth_tax"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            global progressive wealth tax
          </a>
          . Not just taxing income — taxing accumulated wealth itself. The stock portfolio, the
          property, the bonds. And make it global so capital can&apos;t flee to{' '}
          <a
            href="https://en.wikipedia.org/wiki/Tax_haven"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            tax havens
          </a>
          .
        </P>
        <P>
          Every country that has tried versions of this has faced immediate capital flight and
          intense political opposition. France tried a wealth tax. Capital left. They repealed it.
          Because the people who would pay it are the same people who fund the political campaigns
          of the people who would vote on it.
        </P>
        <P>
          Piketty pointed to the only historical period when it worked differently: 1945–1975.
          What was different?
        </P>
        <P>
          Wars had destroyed a huge portion of inherited wealth — so there was less capital
          concentration to begin with. Unions were powerful enough to push wages up faster than
          capital returns. Top marginal income tax rates in the United States hit 91% under
          Eisenhower — a Republican president. Estate taxes were high. Capital gains were taxed at
          ordinary income rates.
        </P>
        <P>
          And inequality fell. For thirty years, the gap actually narrowed. Then the political
          project that started with Reagan and Thatcher systematically dismantled every one of
          those conditions, and r &gt; g reasserted itself with a vengeance.
        </P>
        <P>
          The brief postwar period doesn&apos;t prove that capitalism is fine if we just tweak the
          taxes. It proves that the distribution of wealth is a political choice, not a natural law.
          And right now, that choice is being made by the people who benefit most from the current
          distribution.
        </P>

        <ArticleCallout variant="dark">
          <strong>And Because This Is True, Something Else Collapses</strong>
          <br />
          <br />
          If the wealthy keep getting wealthier through rules they helped write, and those rules
          can only be changed through a political system they substantially fund — then
          &ldquo;meritocracy&rdquo; is a story about why the people on top deserve to be there.
          Told by the people on top.
          <br />
          <br />
          But there&apos;s a question this still doesn&apos;t answer. How did ordinary people end
          up in a position where they needed to sell their labor to someone else just to survive?
          The enclosure of the commons didn&apos;t happen by accident either. Before capitalism,
          most people in most of the world had direct access to the land and resources they needed
          to live. Something had to happen to take that away.
          <br />
          <br />
          That&apos;s the next article:{' '}
          <Link
            href="/posts/how-did-people-survive-before-capitalism"
            className="underline decoration-gray-200 hover:decoration-white"
          >
            how did ordinary people survive before capitalism — and why did that change?
          </Link>
        </ArticleCallout>
      </ArticleSection>

      <ArticleSection>
        <H2 id="faq">Common Questions</H2>
        <ArticleFAQ items={FAQ_ITEMS} />
      </ArticleSection>

      <ArticleFurtherReading items={FURTHER_READING} />

      <ArticleSources>
        <li>
          Thomas Piketty,{' '}
          <a
            href="https://en.wikipedia.org/wiki/Capital_in_the_Twenty-First_Century"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            <em>Capital in the Twenty-First Century</em>
          </a>
          , Harvard University Press, 2013.
        </li>
        <li>
          ProPublica,{' '}
          <a
            href="https://www.propublica.org/article/the-secret-irs-files-trove-of-never-before-seen-records-reveal-how-the-wealthiest-avoid-income-tax"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            &ldquo;The Secret IRS Files: Trove of Never-Before-Seen Records Reveal How the
            Wealthiest Avoid Income Tax,&rdquo;
          </a>{' '}
          ProPublica, June 2021.
        </li>
        <li>
          Warren Buffett,{' '}
          <a
            href="https://www.nytimes.com/2011/08/15/opinion/stop-coddling-the-super-rich.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            &ldquo;Stop Coddling the Super-Rich,&rdquo;
          </a>{' '}
          <em>New York Times</em>, August 15, 2011.
        </li>
        <li>
          Chuck Collins and Omar Ocampo,{' '}
          <a
            href="https://inequality.org/great-divide/updates-billionaire-pandemic/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            &ldquo;Updates: Billionaire Wealth, U.S. Job Losses and Pandemic Profiteers,&rdquo;
          </a>{' '}
          Inequality.org, 2020.
        </li>
        <li>
          Emmanuel Saez and Gabriel Zucman,{' '}
          <a
            href="https://en.wikipedia.org/wiki/The_Triumph_of_Injustice"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            <em>The Triumph of Injustice: How the Rich Dodge Taxes and How to Make Them Pay</em>
          </a>
          , W. W. Norton, 2019.
        </li>
        <li>
          George J. Stigler, &ldquo;The Theory of Economic Regulation,&rdquo;{' '}
          <em>The Bell Journal of Economics and Management Science</em>, Vol. 2, No. 1 (Spring
          1971) — founding paper on regulatory capture.
        </li>
        <li>
          David Graeber,{' '}
          <Link
            href="/posts/did-humans-ever-barter-before-money"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            <em>Debt: The First 5,000 Years</em>
          </Link>
          , Melville House, 2011.
        </li>
      </ArticleSources>
    </ArticleLayout>
  );
}
