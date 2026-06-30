import React from 'react';
import { Metadata } from 'next';
import {
  ArticleLayout,
  ArticleHeader,
  ArticleTOC,
  ArticleSection,
  ArticleFAQ,
  ArticleFurtherReading,
  ArticleCallout,
  ArticleSources,
  P, H2, H3, Blockquote,
} from '@/components/article';
import type { TOCItem, FAQItem, FurtherReadingItem } from '@/components/article';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Why Is Housing So Expensive? | Left Diary",
  description: "Why is housing so expensive? Not because of supply and demand — because land enclosure, financialization, and deliberate policy choices turned shelter into an asset class. The real political history of why you cannot afford to live.",
  keywords: [
    "why is housing so expensive",
    "who benefits from high house prices",
    "how did land become a commodity",
    "history of land enclosure and private property",
    "why does owning property build wealth but renting doesn't",
    "housing as financialization",
    "land value tax explained",
    "Henry George explained",
    "housing crisis political causes",
    "enclosure of the commons housing",
    "Karl Polanyi great transformation housing",
    "social housing Vienna model",
    "housing financialization explained",
    "why renting doesn't build wealth"
  ],
  openGraph: {
    title: "Why Is Housing So Expensive?",
    description: "Why is housing so expensive? Not because of supply and demand — because land enclosure, financialization, and deliberate policy choices turned shelter into an asset class. The real political history.",
    images: [
      {
        url: 'https://leftdiary.com/images/cover_pages/housing-financialization-cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Why Is Housing So Expensive — Left Diary'
      }
    ],
    type: 'article',
    publishedTime: '2026-06-30',
    modifiedTime: '2026-06-30',
    authors: ['https://leftdiary.com/about'],
    section: 'Economics',
    tags: ['housing', 'land', 'financialization', 'enclosure', 'capitalism', 'political economy', 'Henry George'],
    siteName: 'Left Diary',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Why Is Housing So Expensive?",
    description: "Why is housing so expensive? Not supply and demand — land enclosure and financialization turned shelter into an asset class. The real political history.",
    site: '@leftdiary',
    creator: '@leftdiary',
    images: ['https://leftdiary.com/images/cover_pages/housing-financialization-cover.jpg'],
  },
  alternates: {
    canonical: 'https://leftdiary.com/posts/why-is-housing-so-expensive'
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://leftdiary.com/posts/why-is-housing-so-expensive#article',
      'headline': 'Why Is Housing So Expensive?',
      'description': 'Why is housing so expensive? Not because of supply and demand — because land enclosure, financialization, and deliberate policy choices turned shelter into an asset class. The real political history of why you cannot afford to live.',
      'image': [
        {
          '@type': 'ImageObject',
          'url': 'https://leftdiary.com/images/cover_pages/housing-financialization-cover.jpg',
          'width': 1200,
          'height': 630
        }
      ],
      'datePublished': '2026-06-30T00:00:00+00:00',
      'dateModified': '2026-06-30T00:00:00+00:00',
      'author': {
        '@type': 'Organization',
        'name': 'Left Diary',
        'url': 'https://leftdiary.com'
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'Left Diary',
        'url': 'https://leftdiary.com',
        'logo': {
          '@type': 'ImageObject',
          'url': 'https://leftdiary.com/logo.png',
          'width': 600,
          'height': 60
        }
      },
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': 'https://leftdiary.com/posts/why-is-housing-so-expensive'
      },
      'keywords': "why is housing so expensive, who benefits from high house prices, housing as financialization, history of land enclosure, why does owning property build wealth but renting doesn't, Henry George land value tax",
      'articleSection': 'Economics',
      'wordCount': 3800,
      'inLanguage': 'en-US',
      'isAccessibleForFree': true,
      'about': [
        { '@type': 'Thing', 'name': 'Housing Economics' },
        { '@type': 'Thing', 'name': 'Land Value' },
        { '@type': 'Thing', 'name': 'Financialization' },
        { '@type': 'Thing', 'name': 'Enclosure Movement' },
        { '@type': 'Person', 'name': 'Henry George' }
      ],
      'mentions': [
        { '@type': 'Person', 'name': 'Henry George' },
        { '@type': 'Person', 'name': 'Karl Polanyi' },
        { '@type': 'Person', 'name': 'Silvia Federici' },
        { '@type': 'Person', 'name': 'David Graeber' }
      ]
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://leftdiary.com/posts/why-is-housing-so-expensive#faq',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Why is housing so expensive?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Housing is so expensive because of three interconnected causes: (1) land enclosure — the centuries-long process by which common land was privatized and made a commodity, beginning with the English Enclosure Acts from the 1500s to 1850s; (2) financialization — the deliberate deregulation of mortgage markets from the 1980s onward that flooded property markets with investment capital, turning homes from places to live into financial assets; and (3) tax policy — governments actively subsidize homeownership and property investment through mortgage interest deductions and low capital gains taxes on property, while land value taxes that would reduce speculation have never been implemented at scale.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Who benefits from high house prices?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Three groups benefit from high house prices: (1) large-scale property investors and REITs, who hold assets that appreciate and extract rent — Blackstone alone owns over 300,000 rental homes in the US; (2) outright homeowners, particularly those who bought decades ago and use rising house prices as a pension substitute; and (3) the financial sector, which profits from mortgage interest on the debt that high prices force buyers to take on. Renters — disproportionately young, working-class, and from minority groups — bear all the costs.'
          }
        },
        {
          '@type': 'Question',
          'name': 'How did land become a commodity?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Land became a commodity through the Enclosure Acts — over 5,000 pieces of parliamentary legislation between roughly 1500 and 1850 that transferred millions of acres of English common land into private ownership. Before enclosure, land was managed communally under customary rights. Enclosure abolished those rights, made land privately owned and saleable, and created a class of people who had no land and no alternative but to sell their labor for wages. Karl Polanyi called this "a revolution of the rich against the poor."'
          }
        },
        {
          '@type': 'Question',
          'name': "Why does owning property build wealth but renting doesn't?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'In a financialized housing market, homeowners capture rising land values — the appreciation in the price of the location itself — while renters pay it. This rising value is not created by the homeowner: it comes from collective investment in surrounding infrastructure, density, and economic activity. Henry George called this "economic rent." Renters pay for shelter and receive shelter. Owners pay for shelter and simultaneously accumulate an appreciating asset. The wealth gap between owners and renters is a structural transfer of value that the political system has chosen not to tax away.'
          }
        },
        {
          '@type': 'Question',
          'name': 'What is housing financialization?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Housing financialization describes the process by which homes shifted from being primarily places to live into financial investment vehicles. It accelerated from the 1980s onward through mortgage deregulation, which allowed pension funds, private equity, and global capital to flow into property markets. When large amounts of investment capital compete for a fixed supply of land, prices rise — not because demand for shelter increased, but because demand for property as an investment increased. The result is housing that functions like a stock: valued not for its use but for the expectation that someone will pay more for it in the future.'
          }
        },
        {
          '@type': 'Question',
          'name': 'What is a land value tax and would it fix housing?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'A land value tax (LVT), proposed most famously by Henry George in Progress and Poverty (1879), falls on the unimproved value of land itself — not the buildings on it. Because it taxes land value regardless of what is built there, it cannot be passed on to tenants and cannot be avoided by moving or restructuring. It penalizes land banking and idle speculation, making development more attractive than sitting on land waiting for values to rise. Virtually all mainstream and heterodox economists have endorsed its logic. It has not been implemented at meaningful scale anywhere because the people who own land also tend to control the political process.'
          }
        }
      ]
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://leftdiary.com/posts/why-is-housing-so-expensive#breadcrumb',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': 'https://leftdiary.com'
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Posts',
          'item': 'https://leftdiary.com/posts'
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': 'Why Is Housing So Expensive?',
          'item': 'https://leftdiary.com/posts/why-is-housing-so-expensive'
        }
      ]
    }
  ]
};

const TOC_ITEMS: TOCItem[] = [
  { id: 'mainstream-framing', text: 'Why the Supply and Demand Explanation Falls Short', level: 2 },
  { id: 'land-commodity', text: 'How Did Land Become a Commodity?', level: 2 },
  { id: 'enclosures', text: 'The Enclosures: Land Theft by Parliamentary Act', level: 3 },
  { id: 'polanyi', text: 'Karl Polanyi and the Great Transformation', level: 2 },
  { id: 'financialization', text: 'How Housing Became a Financial Asset', level: 2 },
  { id: 'mortgage-deregulation', text: 'Mortgage Deregulation and the Finance Flood', level: 3 },
  { id: 'tax-subsidies', text: 'The Tax Subsidies That Made It Worse', level: 3 },
  { id: 'henry-george', text: 'Henry George and the Road Not Taken', level: 2 },
  { id: 'who-benefits', text: 'Who Benefits from High House Prices', level: 2 },
  { id: 'wealth-renting', text: "Why Does Owning Property Build Wealth but Renting Doesn't?", level: 2 },
  { id: 'colonial', text: 'Colonial Enclosure: The Same Story Globally', level: 2 },
  { id: 'supply-argument', text: 'What the Supply Argument Gets Wrong', level: 2 },
  { id: 'solutions', text: 'What Would Actually Make Housing Affordable', level: 2 },
  { id: 'faq', text: 'Frequently Asked Questions', level: 2 },
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Why is housing so expensive?',
    answer: (
      <>
        Three interconnected causes: land was privatized through centuries of enclosure, which made
        shelter a commodity in the first place. Then financial deregulation from the 1980s flooded
        property markets with investment capital, turning homes into financial assets. Tax policy
        actively subsidized homeownership and investment while suppressing land value taxes that would
        reduce speculation. Supply is a symptom, not the cause.
      </>
    ),
  },
  {
    question: 'Who benefits from high house prices?',
    answer: (
      <>
        Large-scale property investors and REITs (Blackstone owns over 300,000 US rental homes),
        outright homeowners using property as a pension substitute, and the financial sector
        extracting mortgage interest. Renters — disproportionately young, working-class, and from
        minority groups — bear all the costs.
      </>
    ),
  },
  {
    question: 'How did land become a commodity?',
    answer: (
      <>
        Through over 5,000 Enclosure Acts between 1500 and 1850 that transferred millions of acres
        of English common land into private ownership. Before enclosure, land was managed communally
        under customary rights. Karl Polanyi called this &ldquo;a revolution of the rich against the
        poor.&rdquo; The same process was exported through colonialism globally.
      </>
    ),
  },
  {
    question: "Why does owning property build wealth but renting doesn't?",
    answer: (
      <>
        Homeowners capture rising land values — the &ldquo;economic rent&rdquo; that Henry George described —
        created by collective infrastructure and density, not by anything they did. Renters pay
        those rising land values as higher rent. The wealth gap between owners and renters is not
        about individual choices. It is a structural transfer built into how the system works.
      </>
    ),
  },
  {
    question: 'What is housing financialization?',
    answer: (
      <>
        Housing financialization is the process by which homes shifted from places to live into
        financial investment vehicles. It accelerated from the 1980s through mortgage deregulation,
        which allowed pension funds, private equity, and global capital to flood property markets.
        The result: housing valued not for its use but for the expectation that someone will pay
        more for it in the future.
      </>
    ),
  },
  {
    question: 'What is a land value tax and would it fix housing?',
    answer: (
      <>
        A land value tax (LVT) — proposed by Henry George in <em>Progress and Poverty</em> (1879) —
        taxes the unimproved value of land itself, not the buildings on it. It cannot be passed to
        tenants. It penalizes idle speculation and land banking. Every mainstream and heterodox
        economist endorses its logic. It has not been implemented at scale because landowners
        control the political process.
      </>
    ),
  },
];

const FURTHER_READING: FurtherReadingItem[] = [
  {
    href: '/posts/did-humans-ever-barter-before-money',
    title: 'Did Humans Ever Barter Before Money?',
    description: 'the founding fiction of economics that makes the current market order look natural',
  },
  {
    href: '/posts/federici-caliban-witch-capitalism',
    title: "Federici's Caliban and the Witch",
    description: 'the enclosures, the witch trials, and the violent construction of capitalism',
  },
  {
    href: '/posts/graeber-bullshit-jobs-summary',
    title: "Graeber's Bullshit Jobs",
    description: 'why high housing costs make the disciplining function of work more effective',
  },
  {
    href: 'https://www.jrf.org.uk/housing/who-benefits-from-housing-policy',
    title: 'Who Benefits from Housing Policy? (JRF)',
    description: 'research on how tax and planning policy decisions distribute gains and losses',
    external: true,
  },
];

export default function HousingPage() {
  return (
    <ArticleLayout jsonLd={jsonLd}>
      <ArticleHeader
        categories={['Economics', 'History', 'Housing']}
        title="Why Is Housing So Expensive?"
        lead={
          <>
            Why is housing so expensive? The answer isn&apos;t supply and demand. Land enclosure,
            financial deregulation, and deliberate policy choices turned shelter into an asset class
            over several centuries. Here is the real political history — and who made these decisions.
          </>
        }
        date="June 30, 2026"
        dateTime="2026-06-30"
        readingTime="16 min read"
      />

      <ArticleTOC items={TOC_ITEMS} />

      <ArticleSection id="mainstream-framing">
        <H2 id="mainstream-framing">Why the Supply and Demand Explanation Falls Short</H2>
        <P>
          Why is housing so expensive? When you ask this question, politicians and economists reach
          for the same answer: supply and demand. Not enough homes have been built. Zoning laws are
          too restrictive. NIMBYs block development. If only we built more, prices would fall.
          The solution, in this framing, is technical — update the planning rules, incentivize
          developers, release more land for construction.
        </P>
        <P>
          This framing has one remarkable feature: it treats the current arrangement of land
          ownership as a natural baseline, and asks only how to make it function more efficiently.
          It never asks the prior question — why is land privately owned at all? Why does a piece
          of the earth&apos;s surface, which no one made and which preceded every human institution by
          billions of years, belong to specific individuals who can charge others for the right
          to exist on it?
        </P>
        <P>
          That question sounds radical. But it was once perfectly mainstream. The history of how
          land became a commodity — how something that was common became private — is the history
          of some of the most deliberate, violent, and politically contested decisions in human
          history. Understanding it doesn&apos;t just explain why housing is so expensive. It explains
          how money and markets came to feel like nature — because the same logic that made land
          ownership seem inevitable is what made markets seem inevitable. We examine that in full in{' '}
          <Link href="/posts/did-humans-ever-barter-before-money" className="underline decoration-gray-400 hover:decoration-gray-700">
            Did Humans Ever Barter Before Money?
          </Link>
        </P>
      </ArticleSection>

      <ArticleSection id="land-commodity">
        <H2 id="land-commodity">How Did Land Become a Commodity?</H2>
        <P>
          For most of human history, the idea that someone could permanently own a piece of land —
          could exclude others from it, sell it, pass it to heirs, sit on it idle while charging
          others rent — would have been incomprehensible. Land was something communities used. It
          was managed collectively, governed by custom, and understood as belonging to no one in
          the same way air and water belonged to no one.
        </P>
        <P>
          In medieval England, the system that prevailed for centuries was <a href="https://en.wikipedia.org/wiki/Commons" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-400 hover:decoration-gray-700">the commons</a>. Open fields,
          meadows, forests, and fens were available to the people of a village for grazing, gathering
          firewood, cutting peat, and gleaning after harvest. No single person owned these resources.
          The right to use them was attached to your membership in the community, not to any deed
          or title. You had rights in the land. You did not own it.
        </P>
        <P>
          This was not a state of primitive chaos. It was a stable, sophisticated system that had
          sustained rural communities for generations. The question of what replaced it — and why —
          is where the real history begins.
        </P>

        <H3 id="enclosures">The Enclosures: Land Theft by Parliamentary Act</H3>
        <P>
          Between roughly 1500 and 1850, the English commons were systematically abolished. Through
          over <a href="https://en.wikipedia.org/wiki/Inclosure_Acts" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-400 hover:decoration-gray-700">5,000 Enclosure Acts</a>, Parliament transferred millions of acres of common land into
          private ownership. Hedges were built. Fences went up. People who had grazed their animals
          on common land for generations were told that the land now belonged to a landlord, and
          they were trespassing.
        </P>
        <P>
          The beneficiaries were almost exclusively the landowning aristocracy and the emerging
          capitalist class. The people who lost were the peasants, the cottagers, the rural poor —
          everyone who had depended on common land for subsistence. Almost overnight, they had
          nothing to sell but their labor. Which was, of course, the point.
        </P>
        <P>
          <a href="https://en.wikipedia.org/wiki/Silvia_Federici" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-400 hover:decoration-gray-700">Silvia Federici</a>, in <a href="https://en.wikipedia.org/wiki/Caliban_and_the_Witch" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-400 hover:decoration-gray-700"><em>Caliban and the Witch</em></a>, documents how enclosure was not just an
          economic policy but a project of social discipline. Common land gave people an exit option.
          If you could grow food, gather wood, and graze animals on the commons, you were not
          entirely dependent on wages. Enclosure destroyed that independence. It created a class
          of people who had no choice but to work for whoever owned the means of production —
          because the alternative was starvation. The wage labor system that we now treat as natural
          was constructed, violently, through the expropriation of the commons.
        </P>
        <P>
          Contemporary observers were clear about what was happening. <a href="https://en.wikipedia.org/wiki/Thomas_More" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-400 hover:decoration-gray-700">Thomas More</a>, writing in
          <a href="https://en.wikipedia.org/wiki/Utopia_(book)" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-400 hover:decoration-gray-700"><em> Utopia</em></a> (1516), described sheep eating men — the wealthy converting arable land
          to pasture for wool production, driving peasants off their holdings and into beggary.
          This was not invisible. It was obvious, condemned, and done anyway, because it served
          the interests of the powerful.
        </P>
      </ArticleSection>

      <ArticleSection id="polanyi">
        <H2 id="polanyi">Karl Polanyi and the Great Transformation</H2>
        <P>
          The Hungarian economic historian <a href="https://en.wikipedia.org/wiki/Karl_Polanyi" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-400 hover:decoration-gray-700">Karl Polanyi</a> gave this process its most rigorous analysis
          in <a href="https://en.wikipedia.org/wiki/The_Great_Transformation_(book)" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-400 hover:decoration-gray-700"><em>The Great Transformation</em></a> (1944). Polanyi identified what he called the &ldquo;<a href="https://en.wikipedia.org/wiki/Fictitious_commodities" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-400 hover:decoration-gray-700">fictitious
          commodities</a>&rdquo; — things treated as market commodities that fundamentally were not: land,
          labor, and money.
        </P>
        <P>
          These things are not produced for sale. Land is not manufactured. Labor is human life —
          it cannot be separated from the person performing it. Money is a social institution, not a
          natural resource. Treating these as ordinary market commodities, Polanyi argued, was not
          a discovery of some natural economic order. It was a political project, violently enforced,
          that subordinated society to the market rather than the other way around.
        </P>
        <P>
          Before the market economy, land was embedded in social relations. You had obligations to
          those who worked it. You had obligations to the community that surrounded it. The idea of
          treating land as purely a financial instrument — buying it low, selling it high, extracting
          maximum rent, leaving it idle if that produced better returns — required dismantling
          centuries of social obligation and replacing them with the single logic of price.
        </P>
        <Blockquote>
          &ldquo;A revolution of the rich against the poor.&rdquo; — Karl Polanyi on the Enclosure movement,
          <em> The Great Transformation</em> (1944)
        </Blockquote>
        <P>
          He was describing England in the 18th century. He might as well have been describing
          London, Sydney, Toronto, or San Francisco today. The same argument — that money and
          markets are social constructions, not natural facts — runs through our piece on{' '}
          <Link href="/posts/did-humans-ever-barter-before-money#politics" className="underline decoration-gray-400 hover:decoration-gray-700">
            why the barter myth exists
          </Link>.
        </P>
      </ArticleSection>

      <ArticleSection id="financialization">
        <H2 id="financialization">How Housing Became a Financial Asset</H2>
        <P>
          The enclosures created private land ownership. But they did not, by themselves, create
          the current housing crisis. That required a further step: the transformation of land and
          housing from a place to live into a vehicle for financial speculation.
        </P>

        <H3 id="mortgage-deregulation">Mortgage Deregulation and the Finance Flood</H3>
        <P>
          Until the 1970s and 1980s, housing in most wealthy countries operated under significant
          constraints. Mortgage credit was regulated. Interest rates were controlled. Speculation
          was limited. Then came financial deregulation. In the UK, the <a href="https://en.wikipedia.org/wiki/Big_Bang_(financial_markets)" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-400 hover:decoration-gray-700">1986 Big Bang</a> deregulated
          financial markets. In the US, the <a href="https://en.wikipedia.org/wiki/Depository_Institutions_Deregulation_and_Monetary_Control_Act" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-400 hover:decoration-gray-700">Depository Institutions Deregulation and Monetary
          Control Act (1980)</a> and the <a href="https://en.wikipedia.org/wiki/Garn%E2%80%93St._Germain_Depository_Institutions_Act" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-400 hover:decoration-gray-700">Garn-St. Germain Act (1982)</a> loosened controls on mortgage
          lending. Pension funds, insurance companies, and eventually global investment capital
          were permitted — and encouraged — to flow into property markets.
        </P>
        <P>
          The effect was immediate and predictable. When you flood a market with cheap credit,
          prices rise. More money chasing the same supply of land drives up prices. Landlords
          found they could charge more. Speculators found they could buy property, hold it, and
          sell it at a profit — even without doing anything useful with it. Housing began to
          function less like shelter and more like stock: something you held as an investment,
          something whose value came not from use but from the expectation that someone else
          would pay more for it in the future.
        </P>
        <P>
          This was not a slow drift. It was a series of decisions. In 1986, the UK deregulated
          financial markets — the &ldquo;Big Bang&rdquo; — removing restrictions on what banks could
          lend for and how much. Mortgage credit expanded. In 1980, the US <a href="https://en.wikipedia.org/wiki/Depository_Institutions_Deregulation_and_Monetary_Control_Act" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-400 hover:decoration-gray-700">Depository Institutions
          Deregulation Act</a> and then the <a href="https://en.wikipedia.org/wiki/Garn%E2%80%93St._Germain_Depository_Institutions_Act" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-400 hover:decoration-gray-700">Garn-St. Germain Act of 1982</a> deregulated
          savings institutions and expanded mortgage lending. In both countries, the effect
          was the same: more money, created by banks as loans, flowing into property. Property
          prices rose. People who owned property before the deregulation became wealthier.
          People who didn&apos;t, paid for it — in rent, and in the higher prices they eventually
          had to borrow to meet.
        </P>

        <H3 id="tax-subsidies">The Tax Subsidies That Made It Worse</H3>
        <P>
          The financialization of housing was not just permitted by policy. It was actively
          subsidized. In the United States, the <a href="https://en.wikipedia.org/wiki/Mortgage_interest_deduction" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-400 hover:decoration-gray-700">mortgage interest deduction</a> allowed homeowners
          to deduct mortgage interest from taxable income — <a href="https://www.taxpolicycenter.org/briefing-book/what-impact-mortgage-interest-deduction" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-400 hover:decoration-gray-700">worth tens of billions of dollars
          a year</a>, flowing predominantly to wealthy homeowners with large mortgages. Capital
          gains on property sales were taxed at lower rates than wages.
        </P>
        <P>
          At the same time, taxes on land value were abolished or allowed to atrophy. Land value
          tax — which falls on the unimproved value of the land itself, not the buildings on it —
          is one of the most economically efficient taxes ever theorized. It cannot be passed on
          to tenants. It cannot be avoided by relocating or restructuring. It penalizes land
          banking and idle speculation. Virtually every serious economist across the political
          spectrum has endorsed it at some point.
        </P>
        <P>
          It has not been implemented anywhere at meaningful scale, because the people who own
          land also tend to own the political process.
        </P>
      </ArticleSection>

      <ArticleSection id="henry-george">
        <H2 id="henry-george">Henry George and the Road Not Taken</H2>
        <P>
          In 1879, the American journalist and theorist <a href="https://en.wikipedia.org/wiki/Henry_George" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-400 hover:decoration-gray-700">Henry George</a> published <a href="https://en.wikipedia.org/wiki/Progress_and_Poverty" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-400 hover:decoration-gray-700"><em>Progress and Poverty</em></a>.
          It became one of the bestselling books in the English-speaking world — read by Leo Tolstoy,
          George Bernard Shaw, Albert Einstein, and Winston Churchill. Its central argument is still
          one of the most radical and most honest analyses of land ownership ever written.
        </P>
        <P>
          George noticed a paradox: as societies became richer through industrial progress, poverty
          was not declining. Where was the wealth going? To the landowners. The gains from economic
          progress — better infrastructure, denser cities, rising productivity — automatically
          accrued to those who owned land in the right places. A railway line is built through a
          city. Everyone who owns land near the stations becomes richer, simply by owning. They did
          nothing. They produced nothing. But the value of their land increased because of collective
          investment in public infrastructure. This value — which George called &ldquo;economic rent&rdquo; —
          was extracted by private landowners who had done nothing to create it.
        </P>
        <P>
          His solution: tax away all economic rent through a single land value tax. Leave the returns
          to labor and capital, but capture for the public the value that society collectively creates
          through its presence and investment. Abolish all other taxes. Fund public goods directly
          from the wealth that belongs to the commons.
        </P>
        <P>
          George&apos;s ideas terrified the landowning classes precisely because they were so hard to
          argue against on purely economic grounds. The pushback came not from rational refutation
          but from political suppression. His movement was deliberately marginalized in economic
          education over the following decades. Standard economics textbooks folded &ldquo;land&rdquo; into
          &ldquo;capital,&rdquo; erasing the distinction that made George&apos;s analysis so dangerous. If land is
          just another form of capital, there is nothing special about landownership — no need to
          treat it differently, tax it differently, or question it at all.
        </P>
      </ArticleSection>

      <ArticleSection id="who-benefits">
        <H2 id="who-benefits">Who Benefits from High House Prices</H2>
        <P>
          The housing crisis is presented as a problem everyone shares. This is false. Whether high
          house prices hurt you or help you depends entirely on your relationship to property ownership.
        </P>
        <P>
          For <strong>renters</strong> — disproportionately young, working-class, and from racial minorities —
          high house prices are catastrophic. They mean spending 30%, 40%, sometimes 50% of income
          on housing. No asset accumulation. No inheritance to pass on. Permanent vulnerability to
          a landlord who can raise rent, sell up, or evict.
        </P>
        <P>
          For <strong>mortgaged homeowners</strong>, high house prices are a mixed blessing. They feel wealthy
          on paper. Their home is their pension plan. They vote against new construction and
          against any policy that might bring prices down. Their retirement savings are in
          that house — that&apos;s not a mistake they made, it&apos;s the trap that was set for them.
          Pension funds were hollowed out over decades. Savings accounts pay nothing. The only
          wealth-building mechanism left for most people is a house that goes up in value.
          So they walk into the trap and then vote to keep it in place, because the alternative
          is losing the one thing standing between them and poverty in old age.
        </P>
        <P>
          For <strong>large-scale property investors</strong> — developers, REITs, private equity firms, offshore
          wealth funds — high house prices are straightforwardly profitable. <a href="https://www.theguardian.com/us-news/2023/mar/21/blackstone-landlord-rent-housing-private-equity" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-400 hover:decoration-gray-700">Blackstone alone owns
          more than 300,000 rental homes in the United States</a>. They hold assets that appreciate.
          They extract rent. They use housing scarcity as a business model.
        </P>
        <P>
          The political system consistently chooses policies that inflate prices and benefit owners
          over renters, speculators over people who need somewhere to live. This is not an oversight.
          It is the outcome of a political system that is more responsive to property owners than
          to those without property.
        </P>
      </ArticleSection>

      <ArticleSection id="wealth-renting">
        <H2 id="wealth-renting">Why Does Owning Property Build Wealth but Renting Doesn&apos;t?</H2>
        <P>
          Why does owning property build wealth but renting doesn&apos;t? The usual answer is about
          equity: when you own, your mortgage payments build ownership in an asset. But this
          misses the deeper structural explanation.
        </P>
        <P>
          In a financialized housing market, homeowners simultaneously pay for shelter and capture
          rising land values — the economic rent that George described. This rising value is not
          created by anything the homeowner does. It comes from the collective activity of the
          city: new infrastructure, economic density, public investment, the simple presence of
          millions of people making the location desirable. The homeowner captures this value.
          The renter pays it, in the form of rent increases that track rising land prices.
        </P>
        <P>
          This means wealth accumulation through homeownership is not a reward for thrift or hard
          work. It is a structural transfer of value from renters to owners — a mechanism that
          enriches those who already have assets at the expense of those who don&apos;t. It operates
          completely independently of individual choices or merit.
        </P>
        <P>
          The policy implication should be obvious: if you want to reduce wealth inequality, you
          need to change the system that makes housing an investment vehicle. But changing that
          system means reducing house prices — which means hurting the asset values of the
          homeowning class, who are the most politically engaged, the most likely to vote, the
          most likely to donate to political parties.
        </P>
      </ArticleSection>

      <ArticleSection id="colonial">
        <H2 id="colonial">Colonial Enclosure: The Same Story Globally</H2>
        <P>
          The enclosure of common land was not a uniquely English event. It was a template that
          European colonizers exported across the globe, with consequences that remain unresolved.
        </P>
        <P>
          In Africa, Asia, and the Americas, colonizers encountered land-use systems that looked
          like the English commons — communal, governed by custom, not alienable as private property.
          They proceeded to enclose them. The legal instruments varied: homestead acts, crown land
          declarations, native reserve systems, registration requirements that extinguished customary
          rights. The logic was identical: define common land as &ldquo;unoccupied&rdquo; or &ldquo;waste,&rdquo; vest it
          in colonial state or private ownership, and force the people who depended on it into the
          wage economy.
        </P>
        <P>
          The <a href="https://en.wikipedia.org/wiki/Hut_tax" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-400 hover:decoration-gray-700">hut tax</a> — imposed across British Africa in the late 19th and early 20th centuries —
          was a precise mechanism for this: tax people in cash for the right to live in their own
          homes, then force them to seek wage labor when they couldn&apos;t pay. Land enclosure and
          labor coercion were not separate policies. They were two sides of the same coin. We trace
          the full argument about how{' '}
          <Link href="/posts/did-humans-ever-barter-before-money#colonial" className="underline decoration-gray-400 hover:decoration-gray-700">
            colonial taxes forced people into the cash economy
          </Link>{' '}
          in our piece on the barter myth.
        </P>
      </ArticleSection>

      <ArticleSection id="supply-argument">
        <H2 id="supply-argument">What the Supply Argument Gets Wrong</H2>
        <P>
          The standard response to housing costs is: build more. The supply is constrained,
          prices are high, so add supply. This sounds like common sense. It is also, on its own,
          a way of avoiding the actual question — because it accepts private land ownership as
          the unchallengeable starting point and asks only how to add more product within
          that system. Three things the supply argument cannot explain:
        </P>
        <P>
          First, in a financialized housing market, new supply does not automatically become
          affordable housing. Developers build for the most profitable segment of the market.
          In cities with extreme land costs, that means luxury development. New luxury supply may
          eventually filter down over decades, but the timeline is cold comfort for people who
          need housing now.
        </P>
        <P>
          Second, the supply argument sidesteps the question of ownership. Even if you build enough
          homes to house everyone, if those homes are owned by private investors and rented at
          market rates, you have not solved the problem of housing insecurity — you have merely
          displaced it. The wealth transfer from renters to owners continues.
        </P>
        <P>
          Third, the supply framing accepts land privatization as unchallengeable. It asks how to
          produce more housing within a financialized system, not why housing is financialized in
          the first place. It is a technical question posed in place of a political one.
        </P>
      </ArticleSection>

      <ArticleSection id="solutions">
        <H2 id="solutions">What the Record Shows — and Why It Was Taken Away</H2>

        <H3 id="social-housing">Vienna Built It. Thatcher Sold It.</H3>
        <P>
          Vienna has maintained municipal housing — <a href="https://en.wikipedia.org/wiki/Gemeindebau" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-400 hover:decoration-gray-700">Gemeindebau</a> — since the 1920s.
          Roughly 60% of Vienna&apos;s population lives in publicly subsidized housing. Rents are capped.
          Tenure is secure. <a href="https://www.economist.com/europe/2023/10/05/vienna-still-has-the-worlds-best-housing-policy" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-400 hover:decoration-gray-700">Vienna consistently ranks among the world&apos;s most livable cities</a>,
          with housing costs that are a fraction of London&apos;s or San Francisco&apos;s. It works.
          It has worked for a hundred years.
        </P>
        <P>
          Britain had something like this. By 1979, <a href="https://en.wikipedia.org/wiki/Council_house" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-400 hover:decoration-gray-700">council housing</a> provided homes for
          roughly 30% of the population — not a marginal program, a mainstream housing option.
          The Thatcher government introduced <a href="https://en.wikipedia.org/wiki/Right_to_Buy" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-400 hover:decoration-gray-700">Right to Buy</a> in 1980: tenants could purchase
          their council homes at below-market prices. Over 1.5 million homes were sold off.
          Councils were then barred from using the proceeds to build replacements. A two-step
          transfer: sell the public asset at a discount, then prevent its replacement. The people
          who bought got an asset. Everyone who came after got a longer waiting list and a
          private landlord.
        </P>
        <P>
          This is not a story about where housing policy went wrong. It is a story about who
          benefits from housing being scarce and expensive — and who controls what gets passed
          into law. The people who took the council housing are the same people who now collect
          rent on it.
        </P>

        <H3 id="lvt">The Solution No One Will Pass</H3>
        <P>
          A tax on the value of land — not the buildings on it, just the land itself — would
          collapse the investment logic of property ownership. You cannot pass it on to tenants.
          You cannot avoid it by restructuring. It makes sitting on empty land expensive and
          building on your land relatively cheaper. Economists have endorsed this for 150 years,
          since Henry George made the case in <em>Progress and Poverty</em> in 1879.
        </P>
        <P>
          It has never been implemented at meaningful scale. Not because it doesn&apos;t work.
          Because the people who own land also, largely, control who gets elected. The barrier
          is not intellectual. It is the same barrier that prevented the commons from being
          restored after enclosure: the people who benefit from the taking are in charge
          of deciding whether to give it back.
        </P>
      </ArticleSection>

      <ArticleFAQ items={FAQ_ITEMS} />

      <ArticleFurtherReading title="Go Deeper" items={FURTHER_READING} />

      <ArticleCallout variant="dark" title="This Was Built. It Can Be Named.">
        <p>
          None of this was inevitable. The enclosures were laws. The deregulation was a vote.
          The sale of council housing was a policy. Right to Buy was a choice. All of it was
          done by specific people with names, at specific moments that can be dated.
        </p>
        <p>
          If it was built, it can be taken apart. But the first step is refusing to be told
          it&apos;s just the way things are.
        </p>
      </ArticleCallout>

      <ArticleSources>
        <p>
          <strong>Primary sources:</strong> Karl Polanyi, <em>The Great Transformation</em> (1944);
          Henry George, <em>Progress and Poverty</em> (1879); Silvia Federici, <em>Caliban and the Witch</em> (2004);
          David Graeber, <em>Debt: The First 5,000 Years</em> (2011); E.P. Thompson, <em>The Making of the English
          Working Class</em> (1963); Josh Ryan-Collins, Toby Lloyd, and Laurie Macfarlane, <em>Rethinking the
          Economics of Land and Housing</em> (2017).
        </p>
      </ArticleSources>
    </ArticleLayout>
  );
}
