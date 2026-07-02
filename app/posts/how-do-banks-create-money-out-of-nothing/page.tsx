import Link from 'next/link';
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

export const metadata: Metadata = {
  title: "How Do Banks Create Money Out of Nothing? | Left Diary",
  description: "How do banks create money out of nothing? When a bank approves your mortgage, it doesn't move existing money — it creates new money on the spot. The Bank of England confirmed this in 2014. Here is how it actually works, and what it means.",
  keywords: [
    "how do banks create money out of nothing",
    "loans create deposits not the other way around",
    "Bank of England money creation explained",
    "fractional reserve banking explained",
    "money multiplier myth",
    "how is money created",
    "credit creation theory",
    "Richard Werner banks money creation",
    "commercial bank money creation",
    "what is fractional reserve banking",
    "where does money come from",
    "money creation modern economy"
  ],
  openGraph: {
    title: "How Do Banks Create Money Out of Nothing?",
    description: "When a bank approves your mortgage, it doesn't move existing money — it creates new money. The Bank of England confirmed this in 2014. Here is how money creation actually works.",
    images: [
      {
        url: 'https://leftdiary.com/images/cover_pages/banks-create-money-cover.jpg',
        width: 1200,
        height: 630,
        alt: 'How Do Banks Create Money Out of Nothing — Left Diary'
      }
    ],
    type: 'article',
    publishedTime: '2026-06-30',
    modifiedTime: '2026-06-30',
    authors: ['https://leftdiary.com/about'],
    section: 'Economics',
    tags: ['money', 'banking', 'money creation', 'Bank of England', 'fractional reserve', 'credit creation'],
    siteName: 'Left Diary',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: "How Do Banks Create Money Out of Nothing?",
    description: "Banks don't lend out your deposits. When they approve a loan, they create the money. The Bank of England said so in 2014. Here is what that means.",
    site: '@leftdiary',
    creator: '@leftdiary',
    images: ['https://leftdiary.com/images/cover_pages/banks-create-money-cover.jpg'],
  },
  alternates: {
    canonical: 'https://leftdiary.com/posts/how-do-banks-create-money-out-of-nothing'
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
      '@id': 'https://leftdiary.com/posts/how-do-banks-create-money-out-of-nothing#article',
      'headline': 'How Do Banks Create Money Out of Nothing?',
      'description': 'How do banks create money out of nothing? When a bank approves your mortgage, it does not move existing money — it creates new money on the spot. The Bank of England confirmed this in plain English in 2014. Here is how money is actually created, and what that means for debt, housing, and public spending.',
      'image': [
        {
          '@type': 'ImageObject',
          'url': 'https://leftdiary.com/images/cover_pages/banks-create-money-cover.jpg',
          'width': 1200,
          'height': 630
        }
      ],
      'datePublished': '2026-06-30T00:00:00+00:00',
      'dateModified': '2026-06-30T00:00:00+00:00',
      'author': { '@type': 'Organization', 'name': 'Left Diary', 'url': 'https://leftdiary.com' },
      'publisher': {
        '@type': 'Organization',
        'name': 'Left Diary',
        'url': 'https://leftdiary.com',
        'logo': { '@type': 'ImageObject', 'url': 'https://leftdiary.com/logo.png', 'width': 600, 'height': 60 }
      },
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': 'https://leftdiary.com/posts/how-do-banks-create-money-out-of-nothing'
      },
      'keywords': 'how do banks create money out of nothing, loans create deposits not the other way around, Bank of England money creation explained, fractional reserve banking, credit creation theory',
      'articleSection': 'Economics',
      'wordCount': 3700,
      'inLanguage': 'en-US',
      'isAccessibleForFree': true,
      'about': [
        { '@type': 'Thing', 'name': 'Money Creation' },
        { '@type': 'Thing', 'name': 'Fractional Reserve Banking' },
        { '@type': 'Thing', 'name': 'Credit Creation' },
        { '@type': 'Organization', 'name': 'Bank of England' }
      ],
      'mentions': [
        { '@type': 'Organization', 'name': 'Bank of England' },
        { '@type': 'Person', 'name': 'Richard Werner' },
        { '@type': 'Person', 'name': 'Joseph Schumpeter' },
        { '@type': 'Person', 'name': 'Stephanie Kelton' }
      ]
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://leftdiary.com/posts/how-do-banks-create-money-out-of-nothing#faq',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'How do banks create money out of nothing?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'When a bank makes a loan, it does not transfer existing money from one account to another. It creates two new entries simultaneously: a new loan (asset) and a new deposit in the borrower\'s account (liability). The deposit is new money that did not exist before. The Bank of England confirmed this in 2014: "Whenever a bank makes a loan, it simultaneously creates a matching deposit in the borrower\'s bank account, thereby creating new money."'
          }
        },
        {
          '@type': 'Question',
          'name': 'What does "loans create deposits" mean?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'The textbook story says people save first, creating deposits, and banks then lend those deposits out. The actual sequence runs backward. Banks make loans first, which simultaneously creates new deposits in borrowers\' accounts. Other customers\' savings are not affected. "Loans create deposits" means the act of lending is itself the act of creating new money — not the redistribution of existing money.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Did the Bank of England say banks create money?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes. In the 2014 Quarterly Bulletin paper "Money Creation in the Modern Economy," Bank of England economists wrote: "Rather than banks receiving deposits when households save and then lending them out, bank lending creates deposits." The paper is publicly available on the Bank of England website. This was not a secret discovery — it simply was not taught.'
          }
        },
        {
          '@type': 'Question',
          'name': 'What is fractional reserve banking and is it accurate?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Fractional reserve banking is the alternative explanation taught in many economics courses: banks hold a fraction of deposits as reserves and lend out the rest, creating money through a multiplier effect. This is closer to the truth than the simple intermediation story, but still wrong in important ways. Banks do not check reserves before making loans — they lend first and acquire reserves afterward. The Federal Reserve explicitly retired the money multiplier from its teaching materials because it does not describe how banks actually operate.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Why does bank money creation make housing so expensive?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Because most newly created bank money goes directly into property purchase. In the UK, approximately 80% of bank lending has gone into mortgages and real estate rather than productive business investment. When banks create new money for property purchase, more money chases the same fixed supply of land — pushing prices up. The connection between cheap mortgage credit and rising house prices is not a coincidence: it is the direct result of where banks choose to direct newly created money.'
          }
        },
        {
          '@type': 'Question',
          'name': 'If banks can create money, why can\'t governments spend freely?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'The constraints are different. Banks create money but must worry about solvency — whether loans will be repaid. Governments that issue their own currency face a different constraint: whether new spending will create more demand than the economy can supply, causing inflation. This is a real constraint, but it is not the same as the household-budget story politicians tell. When a government says it cannot afford public services while banks create billions in mortgage credit daily, the constraint cited is political, not monetary.'
          }
        }
      ]
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://leftdiary.com/posts/how-do-banks-create-money-out-of-nothing#breadcrumb',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://leftdiary.com' },
        { '@type': 'ListItem', 'position': 2, 'name': 'Posts', 'item': 'https://leftdiary.com/posts' },
        { '@type': 'ListItem', 'position': 3, 'name': 'How Do Banks Create Money Out of Nothing?', 'item': 'https://leftdiary.com/posts/how-do-banks-create-money-out-of-nothing' }
      ]
    }
  ]
};

const TOC_ITEMS: TOCItem[] = [
  { id: 'where-does-money-come-from', text: 'Where Does the Money Come From?', level: 2 },
  { id: 'what-happens-when-bank-lends', text: 'What Actually Happens When a Bank Makes a Loan', level: 2 },
  { id: 'balance-sheet', text: 'The Balance Sheet: Writing Numbers Into Existence', level: 3 },
  { id: 'loans-create-deposits', text: 'Loans Create Deposits, Not the Other Way Around', level: 3 },
  { id: 'bank-of-england-money-creation', text: 'The Bank of England Money Creation Explained', level: 2 },
  { id: 'fractional-reserve', text: 'But What About Fractional Reserve Banking?', level: 2 },
  { id: 'who-controls-money-supply', text: 'Who Actually Controls How Much Money Exists?', level: 2 },
  { id: 'where-new-money-goes', text: 'Where Does Newly Created Money Actually Go?', level: 2 },
  { id: 'no-money-for-hospitals', text: "If Banks Can Create Money, Why Is There Never Money for Hospitals?", level: 2 },
  { id: 'faq', text: 'Frequently Asked Questions', level: 2 },
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'How do banks create money out of nothing?',
    answer: (
      <>
        When a bank makes a loan, it does not transfer existing money. It creates two entries
        simultaneously: a new loan on its asset side, and a new deposit in your account on its
        liability side. The deposit is new money — it did not exist before. The{' '}
        <a href="https://www.bankofengland.co.uk/quarterly-bulletin/2014/q1/money-creation-in-the-modern-economy" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-400 hover:decoration-gray-700">Bank of England confirmed this in 2014</a>:
        {' '}&ldquo;Whenever a bank makes a loan, it simultaneously creates a matching deposit in the
        borrower&rsquo;s bank account, thereby creating new money.&rdquo;
      </>
    ),
  },
  {
    question: 'What does "loans create deposits" mean?',
    answer: (
      <>
        The textbook says: people save first (creating deposits), then banks lend those deposits out.
        The actual sequence runs backward. Banks make loans first, which simultaneously creates new
        deposits. Other customers&rsquo; savings are not touched. &ldquo;Loans create deposits&rdquo; means the
        act of lending is the act of creating the money — not the redistribution of existing money.
      </>
    ),
  },
  {
    question: 'Did the Bank of England really say banks create money?',
    answer: (
      <>
        Yes. In{' '}
        <a href="https://www.bankofengland.co.uk/quarterly-bulletin/2014/q1/money-creation-in-the-modern-economy" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-400 hover:decoration-gray-700">
          &ldquo;Money Creation in the Modern Economy&rdquo; (2014)
        </a>
        , their own economists wrote: &ldquo;Rather than banks receiving deposits when households save
        and then lending them out, bank lending creates deposits.&rdquo; It is publicly available. It was
        not a secret. It was simply never taught.
      </>
    ),
  },
  {
    question: 'What is fractional reserve banking and is it accurate?',
    answer: (
      <>
        Fractional reserve banking is the alternative taught in many economics courses: banks hold a
        fraction of deposits as reserves and lend out the rest, multiplying money through a chain of
        lending. This is closer to the truth, but still wrong in key ways. Banks do not check
        reserves before making loans — they lend first and acquire reserves afterward. The Federal
        Reserve explicitly removed the money multiplier from its teaching materials because it does
        not describe how banks actually operate.
      </>
    ),
  },
  {
    question: 'Why does bank money creation make housing so expensive?',
    answer: (
      <>
        Because most newly created bank money goes directly into property purchase. In the UK,
        roughly 80% of bank lending flows into mortgages and real estate rather than productive
        business investment. When banks create new money for property purchase, more money chases
        the same fixed supply of land — prices rise. The link between cheap mortgage credit and
        expensive housing is not a coincidence.{' '}
        <Link href="/posts/why-is-housing-so-expensive" className="underline decoration-gray-400 hover:decoration-gray-700">
          We trace the full history of housing financialization here.
        </Link>
      </>
    ),
  },
  {
    question: "If banks can create money, why can't governments spend freely?",
    answer: (
      <>
        The constraints are different. Banks create money as private loans and must worry about
        solvency — will the loan be repaid? Governments that issue their own currency face a
        different constraint: whether new spending will outpace what the economy can supply and
        cause inflation. That is a real constraint, but it is not the household-budget story
        politicians tell. When a government says it &ldquo;can&rsquo;t afford&rdquo; hospitals while banks
        create billions in mortgage credit every day, the constraint cited is political, not monetary.
      </>
    ),
  },
];

const FURTHER_READING: FurtherReadingItem[] = [
  {
    href: '/posts/did-humans-ever-barter-before-money',
    title: 'Did Humans Ever Barter Before Money?',
    description: 'money is older than markets — and always has been a social relationship, not a natural phenomenon',
  },
  {
    href: '/posts/why-is-housing-so-expensive',
    title: 'Why Is Housing So Expensive?',
    description: 'how banks directing newly created money into property purchase explains the housing crisis',
  },
  {
    href: 'https://www.bankofengland.co.uk/quarterly-bulletin/2014/q1/money-creation-in-the-modern-economy',
    title: 'Money Creation in the Modern Economy (Bank of England, 2014)',
    description: 'the Bank of England\'s own economists explain, in plain English, how money is actually created',
    external: true,
  },
  {
    href: 'https://positivemoney.org/how-money-works/how-banks-create-money/',
    title: 'How Banks Create Money — Positive Money',
    description: 'a clear visual walkthrough of the accounting mechanics behind money creation',
    external: true,
  },
];

export default function BanksCreateMoneyPage() {
  return (
    <ArticleLayout jsonLd={jsonLd}>
      <ArticleHeader
        categories={['Economics', 'Banking', 'Money']}
        title="How Do Banks Create Money Out of Nothing?"
        lead={
          <>
            Think about the last time someone you know got a mortgage. The bank approved it. A large
            sum of money appeared in their account. They bought the house. Here is the question that
            sounds too obvious to ask: where did that money come from?
          </>
        }
        date="June 30, 2026"
        dateTime="2026-06-30"
        readingTime="14 min read"
      />

      <ArticleTOC items={TOC_ITEMS} />

      <ArticleSection id="where-does-money-come-from">
        <H2 id="where-does-money-come-from">Where Does the Money Come From?</H2>
        <P>
          The obvious answer: from deposits. From savers. Your bank gathers thousands of people&apos;s
          savings, holds them carefully, and lends them to creditworthy borrowers. Someone&apos;s pension
          pot becomes your mortgage. The bank is a careful middleman — checking your income, your
          credit score, your deposit size before agreeing to pass along someone else&apos;s savings.
        </P>
        <P>
          This is the story most of us carry. It appears in every economics textbook. It feels
          intuitively right: money has to come from somewhere. You can&apos;t lend what you don&apos;t have.
        </P>
        <P>
          But sit with the mechanics of it for a moment.
        </P>
        <P>
          If banks are truly just redirecting existing deposits, then every new mortgage would need
          a corresponding inflow of savings. When mortgage lending surges — as it did through the
          2000s and 2010s — that would require a matching savings surge: millions of people
          simultaneously deciding to put more money in banks, which banks then lend to house buyers.
          That would be an enormous coincidence. And when interest rates fall and mortgage lending
          explodes across an entire country at once, you have to ask: whose savings is all this
          coming from?
        </P>
        <P>
          The question isn&apos;t a gotcha. It&apos;s just: how does this actually work? Because once you
          look at what banks actually do when they approve a loan — in terms of their literal
          accounting — the answer is stranger and more interesting than the textbook version.
        </P>
      </ArticleSection>

      <ArticleSection id="what-happens-when-bank-lends">
        <H2 id="what-happens-when-bank-lends">What Actually Happens When a Bank Makes a Loan</H2>
        <P>
          Here is what happens in a bank&apos;s accounting system on the day your mortgage is approved.
          Not what we&apos;ve been told happens. What actually happens.
        </P>
        <P>
          The loan officer clicks approve. Two entries appear in the bank&apos;s books simultaneously.
        </P>
        <P>
          On the asset side of the bank&apos;s balance sheet: a new loan of £300,000. This represents
          money you now owe the bank. It is an asset to the bank because it generates a stream of
          future payments — your monthly mortgage — with interest.
        </P>
        <P>
          On the liability side: a new deposit of £300,000 in your current account. This is money
          the bank now owes you. It is a liability to the bank.
        </P>
        <P>
          Both entries appear at the same moment. One balances the other. This is double-entry
          bookkeeping, and it looks clean and orderly. But notice what did not happen: the bank
          did not find £300,000 sitting somewhere and move it into your account. No existing deposit
          was reduced. No reserve was drawn down. The bank created two new entries — a debt you owe
          them and a deposit they owe you — and both came into existence together.
        </P>
        <P>
          The £300,000 in your account is new money. It did not exist yesterday.
        </P>

        <H3 id="balance-sheet">The Balance Sheet: Writing Numbers Into Existence</H3>
        <P>
          Before your loan was approved, the bank&apos;s balance sheet showed some existing loans, some
          reserves, some deposits from other customers. After your mortgage is approved, it shows
          all of that plus one new loan and one new deposit — matching each other exactly. The bank
          is larger than it was before. It now has more assets and more liabilities. But it did not
          need to find new money before expanding. The expansion itself created the money.
        </P>
        <P>
          This is not a trick or a loophole. It is simply how banking works. In 2014, <a href="https://en.wikipedia.org/wiki/Richard_Werner" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-400 hover:decoration-gray-700">Richard Werner</a> ran an actual experiment: he borrowed money from a small German cooperative bank —
          <a href="https://www.sciencedirect.com/science/article/pii/S1057521914001070" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-400 hover:decoration-gray-700">Raiffeisenbank Wildenberg eG</a> — and, with the bank&apos;s cooperation,
          monitored their internal accounts throughout the process. The bank did not transfer funds from anywhere. It created the loan by
          crediting his account — and the money did not exist before it did so. <span className="text-sm text-gray-400 not-italic">(Werner, &ldquo;Can Banks Individually Create Money Out of Nothing?&rdquo; <em>International Review of Financial Analysis</em>, 2014)</span>
        </P>

        <H3 id="loans-create-deposits">Loans Create Deposits, Not the Other Way Around</H3>
        <P>
          The textbook sequence: someone saves → bank collects the deposit → bank lends it out.
          Saving comes first. Lending follows.
        </P>
        <P>
          The actual sequence: bank makes a loan → a new deposit appears in the borrower&apos;s account.
          Lending comes first. The deposit is the result of the loan, not its source.
        </P>
        <P>
          This is why &ldquo;loans create deposits&rdquo; is the correct description. Your deposit did not fund
          someone else&apos;s mortgage. Someone else&apos;s mortgage created new money that now circulates as
          deposits in the banking system. The causal arrow runs backward from everything we were taught.
        </P>
        <P>
          One way to feel how strange this is: if you pay off your mortgage early, that money is
          effectively destroyed. The loan is cancelled. The deposit that was created when the bank
          extended the loan disappears as the loan is repaid. New money comes into existence when
          banks lend. It leaves existence when loans are repaid. The total money supply in the economy
          is, at any moment, a reflection of the outstanding loans of the banking system.
        </P>
      </ArticleSection>

      <ArticleSection id="bank-of-england-money-creation">
        <H2 id="bank-of-england-money-creation">The Bank of England Money Creation Explained</H2>
        <P>
          You might wonder: if this is how banking works, why didn&apos;t anyone tell us?
        </P>
        <P>
          They did. The <a href="https://www.bankofengland.co.uk/quarterly-bulletin/2014/q1/money-creation-in-the-modern-economy" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-400 hover:decoration-gray-700">Bank of England published a paper in 2014</a> — &ldquo;Money
          Creation in the Modern Economy&rdquo; — written by three of their own economists, Michael McLeay,
          Amar Radia, and Ryland Thomas. It is not a fringe document. It is not a polemic. It is a
          sober, technical explanation of how the monetary system works, published in the Bank&apos;s own
          Quarterly Bulletin.
        </P>
        <Blockquote>
          &ldquo;Rather than banks receiving deposits when households save and then lending them out,
          bank lending creates deposits.&rdquo;
          <footer className="mt-2 text-base not-italic text-gray-500">— Bank of England, <em>Money Creation in the Modern Economy</em>, 2014</footer>
        </Blockquote>
        <P>
          And more directly:
        </P>
        <Blockquote>
          &ldquo;Whenever a bank makes a loan, it simultaneously creates a matching deposit in the
          borrower&apos;s bank account, thereby creating new money.&rdquo;
          <footer className="mt-2 text-base not-italic text-gray-500">— Bank of England, <em>Money Creation in the Modern Economy</em>, 2014</footer>
        </Blockquote>
        <P>
          This wasn&apos;t a leak. Nobody went to the press with a secret. It was published, in plain
          English, in an institutional document that anyone can read right now. The information was
          always available. It just wasn&apos;t in the textbooks.
        </P>
        <P>
          The paper goes further. It explicitly contradicts what economics education has taught for
          generations: &ldquo;In the modern economy, most money takes the form of bank deposits. But how
          those bank deposits are created is often misunderstood: the principal way is through
          commercial banks making loans.&rdquo;
        </P>
        <P>
          <em>Often misunderstood.</em> The Bank of England is being diplomatic. What they mean is: the
          thing you were taught in school is wrong, and we are now saying so in our official
          quarterly publication.
        </P>
      </ArticleSection>

      <ArticleSection id="fractional-reserve">
        <H2 id="fractional-reserve">But What About Fractional Reserve Banking?</H2>
        <P>
          Some readers will have heard an alternative version of this story — one that feels more
          sophisticated than the simple &ldquo;banks collect deposits and lend them out&rdquo; story, but still
          not quite what we&apos;re describing here.
        </P>
        <P>
          <a href="https://en.wikipedia.org/wiki/Fractional-reserve_banking" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-400 hover:decoration-gray-700">Fractional reserve banking</a> is the model many economics courses teach as the slightly more
          accurate version: banks hold a fraction of deposits as reserves (say, 10%) and can lend
          out the rest. Your £1,000 deposit allows the bank to lend out £900, which becomes a
          deposit somewhere else, which allows that bank to lend out £810, and so on — a multiplier
          effect that creates money from an initial base.
        </P>
        <P>
          This feels more sophisticated. There&apos;s a kernel of truth in it. But it&apos;s still wrong in
          an important way: it reverses the causal direction again.
        </P>
        <P>
          In the fractional reserve model, the central bank creates base money (reserves), and
          commercial banks multiply it through successive rounds of lending. The reserves come
          first; the loans follow. But this is not how banks actually operate. Banks make loans
          based on whether they can find creditworthy borrowers at a profitable interest rate —
          not based on whether they have sufficient reserves. They make the loan first. Then they
          acquire the reserves they need to settle the payment — from the interbank market, from
          the central bank, from wherever they can find them.
        </P>
        <P>
          Central banks have confirmed this. The <a href="https://www.newyorkfed.org/medialibrary/media/research/staff_reports/sr529.pdf" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-400 hover:decoration-gray-700">Federal Reserve Bank of New York</a> noted that
          &ldquo;changes in reserves are unrelated to changes in lending.&rdquo; The Fed explicitly retired the
          money multiplier from its own teaching materials because it does not describe how banks
          actually decide to lend.
        </P>
        <P>
          This was not a new insight when the Bank of England published it in 2014. In 1954, Joseph Schumpeter wrote that it is &ldquo;much more realistic to say that banks &lsquo;create credit&rsquo; — that they create deposits in the act of lending — than to say that they lend the deposits that have been entrusted to them.&rdquo; <span className="text-sm text-gray-400 not-italic">(Schumpeter, <em>History of Economic Analysis</em>, 1954)</span> What economics textbooks taught in the following seventy years was not a misunderstanding. Someone decided what students should believe about where money comes from.
        </P>
      </ArticleSection>

      <ArticleSection id="who-controls-money-supply">
        <H2 id="who-controls-money-supply">Who Actually Controls How Much Money Exists?</H2>
        <P>
          Once you understand that bank loans create money, a different question becomes important:
          who decides how much money there is?
        </P>
        <P>
          The instinctive answer might be: the government, or the central bank. They print money.
          They set monetary policy. Surely they control the money supply.
        </P>
        <P>
          But look at the numbers. In the UK, roughly 97% of money in circulation exists as bank
          deposits — numbers in accounts, not notes and coins. In the US, commercial bank deposits
          account for around 90–95% of the money supply. The cash you hold in your hand is a small
          fraction of total money. Almost all of it is bank-created credit.
        </P>
        <P>
          The central bank sets interest rates — the price of borrowing — which influences how much
          banks want to lend and how much people want to borrow. But the central bank does not
          directly determine how much money is created. Commercial banks do, through their individual
          lending decisions. When Barclays decides to aggressively market mortgages, it creates new
          money. When banks collectively tighten lending standards after a crisis, money is destroyed
          — loans are repaid and not replaced, and the total falls.
        </P>
        <P>
          The quantity of money in the economy — something that affects everyone&apos;s wages, prices,
          debts, and savings — is determined primarily by private institutions making decisions about
          who to lend to and at what price. Not by governments. Not by democratic processes. By banks
          deciding who is creditworthy and what kind of lending is profitable.
        </P>
      </ArticleSection>

      <ArticleSection id="where-new-money-goes">
        <H2 id="where-new-money-goes">Where Does Newly Created Money Actually Go?</H2>
        <P>
          If banks create money, the next question is: what do they create it for?
        </P>
        <P>
          The answer, across the last 40 years in most wealthy countries, is: property. In the
          UK, roughly 80% of bank lending has gone into mortgages and real estate — not into
          productive business investment, new manufacturing, or wages.{' '}
          <span className="text-sm text-gray-400 not-italic">(Ryan-Collins, Lloyd &amp; Macfarlane, <a href="https://www.zedbooks.net/shop/book/rethinking-the-economics-of-land-and-housing/" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-400 hover:decoration-gray-600"><em>Rethinking the Economics of Land and Housing</em></a>, 2017)</span>
        </P>
        <P>
          This is the direct mechanism behind{' '}
          <Link href="/posts/why-is-housing-so-expensive" className="underline decoration-gray-400 hover:decoration-gray-700">why housing is so expensive</Link>.
          When banks create new money and direct it overwhelmingly at property purchase, more money
          chases the same fixed supply of land. Prices rise. The newly created money inflates the
          asset it was created to buy.
        </P>
        <P>
          There is a further twist. Every pound of new money created by a mortgage is simultaneously
          a debt. You now owe £300,000 plus interest. The bank has a new income stream. Over 25 or
          30 years, you will pay back considerably more than the original loan — perhaps £500,000
          or more, depending on interest rates. The money that was created is extracted back, with
          profit, through the life of the mortgage.
        </P>
        <P>
          So newly created money does two things simultaneously: it inflates the price of whatever
          it&apos;s pointed at (housing, in this case), and it creates a corresponding debt obligation
          for the borrower. The bank profits from both: rising property values secure the loan,
          and the interest payments generate income. Renters and new buyers pay for all of it —
          in higher prices and higher rents — while generating no corresponding wealth of their own.
        </P>
        <P>
          Banks do this because it is profitable. When 80% of new lending goes into property,
          it is not because someone centrally decided that housing was more important than
          factories or hospitals. It is because lending against property is low-risk for the
          bank — the land is always there as collateral — and generates steady income for
          decades. The decision is made thousands of times a day, by loan officers and credit
          committees, and the cumulative result is that new money in the economy flows primarily
          into land prices. Not into wages. Not into schools. Into land.
        </P>
      </ArticleSection>

      <ArticleSection id="no-money-for-hospitals">
        <H2 id="no-money-for-hospitals">If Banks Can Create Money, Why Is There Never Money for Hospitals?</H2>
        <P>
          If Barclays can create £300,000 on Thursday afternoon by approving a mortgage — money
          that literally did not exist on Wednesday — then what exactly is meant when a government
          minister stands up and says there is &ldquo;no money&rdquo; for nurses&apos; pay?
        </P>
        <P>
          Watch what happened in 2008. The US government found $700 billion for failing banks
          in a matter of days. The UK government guaranteed £500 billion. These were not funds
          that had been saved up. They were created. The political will existed, the numbers
          were typed, the money appeared. The same governments that spent a decade explaining
          that schools and hospitals would have to make do with less found, when banks were
          in trouble, that there was no limit.
        </P>
        <P>
          The same thing happened in 2020. The UK furlough scheme paid 80% of wages for
          millions of workers for over a year. The US government sent stimulus checks to
          almost every adult in the country. Twice. The money was created. No one asked
          where it was coming from, because the alternative — mass unemployment and
          economic collapse — was politically unacceptable.
        </P>
        <P>
          When a government says it cannot afford hospitals, it is making a choice about
          what is worth creating money for. Hospitals are not more expensive than bank
          bailouts. They are less politically urgent to the people making the decision.
          &ldquo;We can&apos;t afford it&rdquo; is not a financial statement. It is a statement
          about whose emergencies count.
        </P>
        <P>
          The money supply is controlled by private banks making profit decisions — loans
          that serve shareholders — and by governments making political decisions. Neither
          set of decisions is natural or inevitable. Both reflect who has power over what
          gets funded, and who doesn&apos;t.
        </P>
      </ArticleSection>

      <ArticleFAQ items={FAQ_ITEMS} />

      <ArticleFurtherReading title="Go Deeper" items={FURTHER_READING} />

      <ArticleCallout variant="dark" title="Private Banks Decide What Gets Funded">
        <p>
          Private banks decide how much money exists. They make that decision based on what is
          profitable to lend against — and for forty years the answer has been: land. Not wages.
          Not hospitals. Not factories. Land. If you want to know why housing is unaffordable
          and public services are underfunded while banks are consistently bailed out, you are
          looking at the same mechanism. The question is not whether there is money. There is
          always money. The question is who decides what it gets created for — and what happens
          to the people who have no say in that decision.
        </p>
      </ArticleCallout>

      <ArticleSources>
        <p>
          <strong>Primary sources:</strong> Bank of England, &ldquo;Money Creation in the Modern Economy,&rdquo;
          <em> Quarterly Bulletin</em> 2014 Q1 (McLeay, Radia, Thomas); Richard Werner, &ldquo;Can banks
          individually create money out of nothing?&rdquo; <em>International Review of Financial Analysis</em>{' '}
          36 (2014); Joseph Schumpeter, <em>History of Economic Analysis</em> (1954); Stephanie Kelton,
          <em> The Deficit Myth</em> (2020); Josh Ryan-Collins, Toby Lloyd, Laurie Macfarlane,{' '}
          <em>Rethinking the Economics of Land and Housing</em> (2017).
        </p>
      </ArticleSources>
    </ArticleLayout>
  );
}
