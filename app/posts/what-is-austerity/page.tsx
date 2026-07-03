import { Metadata } from 'next';
import Link from 'next/link';
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
  title: "What Is Austerity? | Left Diary",
  description: "Austerity doesn't cut money. It converts things you could have without asking anyone's permission into things you have to borrow. The need doesn't disappear. The bank moves in. That conversion is the point.",
  keywords: [
    "what is austerity",
    "austerity explained",
    "student loan debt explained",
    "medical debt US",
    "public services privatization",
    "austerity who benefits",
    "public spending vs private debt",
    "commons enclosure",
    "government spending explained",
    "austerity and inequality US",
    "fiscal policy explained simply",
    "independence and public goods",
  ],
  openGraph: {
    title: "What Is Austerity?",
    description: "Austerity doesn't cut money. It converts things you could have without asking anyone's permission into things you have to borrow. The need doesn't disappear. The bank moves in.",
    images: [
      {
        url: 'https://leftdiary.com/images/cover_pages/what-is-austerity-cover.jpg',
        width: 1200,
        height: 630,
        alt: 'What Is Austerity — Left Diary'
      }
    ],
    type: 'article',
    publishedTime: '2026-07-02',
    modifiedTime: '2026-07-02',
    authors: ['https://leftdiary.com/about'],
    section: 'Economics',
    tags: ['austerity', 'public goods', 'commons', 'student debt', 'medical debt', 'political economy'],
    siteName: 'Left Diary',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: "What Is Austerity?",
    description: "Austerity doesn't cut money. It converts things you could have without asking anyone's permission into things you have to borrow. The need doesn't disappear. The bank moves in.",
    site: '@leftdiary',
    creator: '@leftdiary',
    images: ['https://leftdiary.com/images/cover_pages/what-is-austerity-cover.jpg'],
  },
  alternates: {
    canonical: 'https://leftdiary.com/posts/what-is-austerity'
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
      '@id': 'https://leftdiary.com/posts/what-is-austerity#article',
      'headline': 'What Is Austerity?',
      'description': 'Austerity doesn\'t cut money. It converts things you could have without asking anyone\'s permission into things you have to borrow. The need doesn\'t disappear. The bank moves in. That conversion is the point.',
      'image': [
        {
          '@type': 'ImageObject',
          'url': 'https://leftdiary.com/images/cover_pages/what-is-austerity-cover.jpg',
          'width': 1200,
          'height': 630
        }
      ],
      'datePublished': '2026-07-02T00:00:00+00:00',
      'dateModified': '2026-07-02T00:00:00+00:00',
      'author': { '@type': 'Organization', 'name': 'Left Diary', 'url': 'https://leftdiary.com' },
      'publisher': {
        '@type': 'Organization',
        'name': 'Left Diary',
        'url': 'https://leftdiary.com',
        'logo': { '@type': 'ImageObject', 'url': 'https://leftdiary.com/logo.png', 'width': 600, 'height': 60 }
      },
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': 'https://leftdiary.com/posts/what-is-austerity'
      },
      'keywords': 'austerity explained, public goods, commons, student debt, medical debt, independence, private debt',
      'articleSection': 'Economics',
      'wordCount': 3200,
      'inLanguage': 'en-US',
      'isAccessibleForFree': true,
      'about': [
        { '@type': 'Thing', 'name': 'Austerity' },
        { '@type': 'Thing', 'name': 'Public Goods' },
        { '@type': 'Thing', 'name': 'Student Loan Debt' },
        { '@type': 'Thing', 'name': 'Medical Debt' }
      ]
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://leftdiary.com/posts/what-is-austerity#faq',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'What is austerity?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Austerity is the political program of cutting public spending — officially to reduce government deficits. But what it actually does is convert things you could have without going through a bank into things you have to borrow. Student loan debt, medical debt, housing debt all expanded as public funding was cut. The need didn\'t disappear. A bank moved in. That conversion — from public supply to private debt — is the mechanism.'
          }
        },
        {
          '@type': 'Question',
          'name': 'If cutting spending saves money, where does the money go?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Governments that issue their own currency create money when they spend and withdraw it when they tax — they don\'t "save" it the way a household does. When public funding for education is cut, the money doesn\'t go into a vault. The students still need to learn. The learning gets funded with loans. The distinction that matters isn\'t how much money exists — it\'s whether the thing you need exists inside the market (requiring permission, creditworthiness, interest) or outside it (requiring nothing of you).'
          }
        },
        {
          '@type': 'Question',
          'name': 'Who benefits from austerity?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'The beneficiaries are whoever receives the debt payments on things that move from public supply to private borrowing. When public university funding is cut and students take loans, banks collect interest on $1.7 trillion indefinitely. When public housing is defunded and people can\'t buy homes, financial firms profit from rents and mortgage interest. In the 2010 Greek bailout, a 2013 analysis found approximately 77% of the loans went directly to private creditors — primarily French and German banks — who held Greek government bonds. The mechanism consistently protects creditors.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Why was student loan debt so much lower in the past?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'The University of California charged no tuition until 1970. Federal and state funding for public universities covered roughly three-quarters of costs through the mid-1970s; today it covers roughly a third. Total US student loan debt: $100 billion in 1993, $1.7 trillion today. The need for education didn\'t change. The public supply shrank. The bank moved in.'
          }
        },
        {
          '@type': 'Question',
          'name': 'How is this different from just "running out of money"?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'In March 2020, the US found $2.2 trillion in sixteen days for COVID relief; total spending reached roughly $5-6 trillion over the following year. In 2008, the Federal Reserve committed $7.77 trillion to rescue the financial system. The "we can\'t afford it" argument isn\'t a description of how much money exists. It\'s a description of what the money gets created for — and that has been consistent for forty years: banks and corporations get a yes; public services get a no.'
          }
        }
      ]
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://leftdiary.com/posts/what-is-austerity#breadcrumb',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://leftdiary.com' },
        { '@type': 'ListItem', 'position': 2, 'name': 'Posts', 'item': 'https://leftdiary.com/posts' },
        { '@type': 'ListItem', 'position': 3, 'name': 'What Is Austerity?', 'item': 'https://leftdiary.com/posts/what-is-austerity' }
      ]
    }
  ]
};

const TOC_ITEMS: TOCItem[] = [
  { id: 'what-free-means', text: 'What "Free" Actually Means', level: 2 },
  { id: 'the-conversion', text: 'The Conversion', level: 2 },
  { id: 'where-the-money-goes', text: 'Where the Money Goes', level: 2 },
  { id: 'the-pattern', text: 'The Pattern Has a Name', level: 2 },
  { id: 'faq', text: 'Common Questions', level: 2 },
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'What is austerity, actually?',
    answer: (
      <>
        Austerity is the political program of cutting public spending — officially to reduce
        deficits. But what it actually does is convert things you could have without going
        through a bank into things you have to borrow. The need doesn&rsquo;t disappear. A bank
        moves in. That conversion — from public supply to private debt — is the mechanism,
        not the side effect.
      </>
    ),
  },
  {
    question: 'If cutting spending "saves money," where does the money go?',
    answer: (
      <>
        Governments that issue their own currency{' '}
        <Link href="/posts/how-do-banks-create-money-out-of-nothing" className="underline decoration-gray-400 hover:decoration-gray-600">
          create money when they spend it
        </Link>
        {' '}— they don&rsquo;t save it the way a household does. When public university
        funding is cut, the money doesn&rsquo;t go into a vault. The students still need to
        learn. The learning gets funded with loans. What changes isn&rsquo;t how much money
        exists — it&rsquo;s whether the thing you need exists inside the market or outside it.
        Inside the market, you need permission. Outside it, you don&rsquo;t.
      </>
    ),
  },
  {
    question: 'Who benefits from austerity?',
    answer: (
      <>
        Whoever collects the debt payments on things that move from public supply to private
        borrowing. When public university funding is cut and students take loans, banks
        collect interest on $1.7 trillion indefinitely. When public housing is defunded,
        financial firms profit from rents and mortgage interest. In the 2010 Greek bailout,
        a 2013 analysis found approximately 77% of the loans went directly to private
        creditors — primarily French and German banks. The mechanism consistently protects
        creditors.
      </>
    ),
  },
  {
    question: 'How is this different from just "running out of money"?',
    answer: (
      <>
        In March 2020, the US found $2.2 trillion in sixteen days. Total COVID spending
        reached roughly $5–6 trillion over twelve months. In 2008, the Federal Reserve
        committed $7.77 trillion to rescue the financial system. &ldquo;We can&rsquo;t afford it&rdquo;
        isn&rsquo;t a description of how much money exists. It&rsquo;s a description of what the money
        gets created for. And that has been consistent for forty years: banks and corporations
        get a yes, public services get a no.
      </>
    ),
  },
  {
    question: 'Why did student loan debt grow so dramatically?',
    answer: (
      <>
        The University of California charged no tuition until 1970. Federal and state funding
        for public universities covered roughly three-quarters of costs through the mid-1970s;
        today it covers roughly a third. Total US student loan debt: $100 billion in 1993,
        $1.7 trillion today. The need for education didn&rsquo;t change. The public supply shrank.
        The bank moved in. That&rsquo;s the whole story.
      </>
    ),
  },
];

const FURTHER_READING: FurtherReadingItem[] = [
  {
    href: 'https://www.amazon.com/Austerity-History-Dangerous-Mark-Blyth/dp/0199828768',
    title: 'Austerity: The History of a Dangerous Idea — Mark Blyth (2013)',
    description: 'Traces austerity from 18th-century liberal theory to the eurozone crisis, documenting who the policy consistently protects — and finding no historical evidence that cutting public spending generates growth.',
    external: true,
  },
  {
    href: 'https://www.imf.org/external/pubs/ft/fandd/2016/06/ostry.htm',
    title: '"Neoliberalism: Oversold?" — Ostry, Loungani & Furceri, IMF (2016)',
    description: 'Published in the IMF\'s own magazine: the institution that designed the austerity programs documents that they raised unemployment and inequality while producing drops in output, not growth.',
    external: true,
  },
  {
    href: '/posts/how-do-banks-create-money-out-of-nothing',
    title: 'How Do Banks Create Money Out of Nothing?',
    description: 'If money is created when governments and banks decide to spend it, the question "can we afford it" means something different than it sounds. This is the foundation the austerity argument rests on — and it doesn\'t hold.',
  },
  {
    href: '/posts/why-did-colonizers-tax-africans',
    title: 'Why Did Colonizers Tax Africans?',
    description: 'The hut tax and austerity use the same mechanism: convert something people had outside the market into something that requires entering it. The goal in both cases is dependency, not revenue.',
  },
  {
    href: '/posts/how-did-people-survive-before-capitalism',
    title: 'How Did People Survive Before Capitalism?',
    description: 'Before the commons were enclosed, people met most of their needs outside the market. The history of capitalism is largely the history of moving those needs inside it.',
  },
];

export default function WhatIsAusterityPage() {
  return (
    <ArticleLayout jsonLd={jsonLd}>
      <ArticleHeader
        categories={['Economics', 'Politics']}
        title="What Is Austerity?"
        lead={
          <>
            There&rsquo;s a specific feeling that comes with certain kinds of debt. Not the feeling of
            having bought something you wanted. The feeling of having borrowed money just to get
            something you couldn&rsquo;t live without — a degree, a procedure, a place to sleep. The
            feeling that goes with it: <em>this doesn&rsquo;t seem right.</em> That feeling is correct.
          </>
        }
        date="July 2, 2026"
        dateTime="2026-07-02"
        readingTime="12 min read"
      />

      <ArticleTOC items={TOC_ITEMS} />

      <ArticleSection id="what-free-means">
        <H2 id="what-free-means">What &ldquo;Free&rdquo; Actually Means</H2>
        <P>
          Here&rsquo;s something weird, if you stop to think about it.
        </P>
        <P>
          A public library exists. You can walk in and take any book home. You don&rsquo;t prove
          you can pay for it. You don&rsquo;t owe anything when you leave. Nobody checks your credit.
          Nobody profits from your use of it. It just works — because somewhere, someone decided
          it should work that way.
        </P>
        <P>
          That arrangement — the thing you can have without permission, without debt, without
          a bank deciding whether you qualify — used to describe a lot more than the library.
        </P>
        <P>
          Public school through twelfth grade. The VA. Social Security. The GI Bill, which
          made college accessible to an entire generation without a single loan. The University
          of California, which charged California residents no tuition at all until 1970 — not
          because college wasn&rsquo;t worth anything, but because there was a deliberate political
          decision that learning should work like the library. That you shouldn&rsquo;t need to be
          creditworthy to do it.
        </P>
        <P>
          What all of these share, when they work: you can use them without going to a bank first.
          No one approves your application. No one collects interest afterward. The thing just
          exists, and you can have it.
        </P>
        <P>
          That&rsquo;s what independence looks like in an economy. Not having more money. Having things
          you need that don&rsquo;t require money. Things that exist outside the market, where no one
          can tell you no.
        </P>
      </ArticleSection>

      <ArticleSection id="the-conversion">
        <H2 id="the-conversion">The Conversion</H2>
        <P>
          Something happened to that arrangement. It didn&rsquo;t happen all at once. It wasn&rsquo;t a
          theft — nothing was obviously taken. It was a series of decisions about where things
          should live: inside the market, or outside it.
        </P>
        <P>
          Ronald Reagan, as governor of California, imposed the first tuition at the UC system
          in 1970, arguing explicitly that education shouldn&rsquo;t be &ldquo;free.&rdquo; That was a position.
          Not an economic law. Over the following decades, public funding for universities fell
          from covering roughly three-quarters of costs to roughly a third. The university that
          existed outside the market moved inside it. Total US student loan debt: $100 billion
          in 1993. $1.7 trillion today. The need for education didn&rsquo;t change. The public supply
          shrank. Banks moved in. Where they now stand between you and what you need, collecting
          interest. The cuts happened once. The debt doesn&rsquo;t reverse.
        </P>
        <P>
          Medical debt is the leading cause of personal bankruptcy in the United States. Countries
          with universal public healthcare don&rsquo;t have this category — medicine lives in a different
          place in their economies. Here, it&rsquo;s inside the market. When the bill arrives and you
          can&rsquo;t pay, you borrow. When you can&rsquo;t borrow, it goes to collections. None of this is
          a natural law. It&rsquo;s a location: where does this thing live?
        </P>
        <P>
          Public housing: deliberately reduced since the 1970s. Section 8 vouchers: chronically
          underfunded, waiting lists years long. Pensions: replaced by 401(k)s that require
          you to have income to invest, to pick the right funds, to not touch them early. The
          pension existed outside the market. The 401(k) is inside it. In each case: the thing
          that asked nothing of you became the thing that requires your creditworthiness, your
          monthly payment, your continued cooperation with whoever now stands between you and it.
        </P>
        <P>
          This is what austerity actually does.{' '}
          <Link href="/posts/how-do-banks-create-money-out-of-nothing" className="underline decoration-gray-400 hover:decoration-gray-600">
            Governments that issue their own currency create money when they spend it
          </Link>
          {' '}— they don&rsquo;t save it. When public funding is cut, the money doesn&rsquo;t go into a
          vault for later. The need just has to be met somewhere else, by some other institution,
          on some other terms. Those terms are: interest, creditworthiness, and a bank that
          profits from your need permanently. The public thing gets cut once. The private debt
          is forever.

        </P>
        <P>
          That conversion — from the thing you could have without asking to the thing you borrow —
          is the mechanism. Not the side effect.
        </P>
      </ArticleSection>

      <ArticleSection id="where-the-money-goes">
        <H2 id="where-the-money-goes">Where the Money Goes</H2>
        <P>
          And yet. The money does exist.
        </P>
        <P>
          In March 2020, the US government signed $2.2 trillion into law sixteen days after a
          pandemic was declared. Over the following year, total COVID spending reached roughly
          $5–6 trillion. In 2008, the Federal Reserve committed $7.77 trillion to rescue the
          financial system.{' '}
          <span className="text-sm text-gray-400 not-italic">(Bloomberg,{' '}
            <a
              href="https://www.bloomberg.com/news/articles/2011-11-28/secret-fed-loans-undisclosed-to-congress-gave-banks-13-billion-in-income"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-gray-400 hover:decoration-gray-600"
            >
              <em>&ldquo;Secret Fed Loans Gave Banks $13 Billion Undisclosed to Congress&rdquo;</em>
            </a>
          , November 2011)</span>{' '}
          Nobody said we couldn&rsquo;t afford it. Nobody convened a debt commission. It appeared,
          because someone decided it should.
        </P>
        <P>
          The 2010 Greek bailout is worth following, because the money trail is unusually
          clear. The IMF and European governments lent Greece €110 billion — officially, to
          rescue a collapsing country. The condition: deep cuts to pensions, wages, and public
          services. A 2013 analysis found that approximately 77% of those loans went not to fund
          the Greek state, but directly to private creditors — primarily French and German banks
          that held Greek government bonds.{' '}
          <span className="text-sm text-gray-400 not-italic">(European School of Management and Technology,
          analysis of Greek bailout fund flows, 2013)</span>{' '}
          The Greek population bore the cost. The bank balance sheets were protected. Follow the
          money and see what was actually rescued.
        </P>
        <P>
          The main academic argument for austerity — that government debt above a certain level
          causes economic collapse — turned out to contain a spreadsheet error. A graduate student
          found it trying to replicate the paper for a class assignment. The corrected numbers
          made the threshold disappear.{' '}
          <span className="text-sm text-gray-400 not-italic">(Herndon, Ash, and Pollin,{' '}
            <a
              href="https://peri.umass.edu/publication/does-high-public-debt-consistently-stifle-economic-growth-a-critique-of-reinhart-and-rogoff/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-gray-400 hover:decoration-gray-600"
            >
              <em>&ldquo;Does High Public Debt Consistently Stifle Economic Growth?&rdquo;</em>
            </a>
          , 2013)</span>{' '}
          The IMF later published papers acknowledging that austerity programs caused far more
          economic damage than predicted, and that on average they were followed by drops in
          output, not growth.{' '}
          <span className="text-sm text-gray-400 not-italic">(Blanchard and Leigh, IMF WP/13/1, 2013;
          Ostry, Loungani, and Furceri, <em>Finance &amp; Development</em>, 2016)</span>{' '}
          The evidence didn&rsquo;t reverse the cuts. It rarely does.
        </P>
        <P>
          None of this is surprising once you understand what austerity is for. The argument
          was never really about whether the money existed. It was about who it should flow to,
          and through whom, and on what terms.
        </P>
      </ArticleSection>

      <ArticleSection id="the-pattern">
        <H2 id="the-pattern">The Pattern Has a Name</H2>
        <P>
          <Link href="/posts/why-did-colonizers-tax-africans" className="underline decoration-gray-400 hover:decoration-gray-600">
            The colonial hut tax worked this way too.
          </Link>{' '}
          Free people who had everything they needed were converted into dependent laborers
          by creating a need — colonial currency — that could only be met by entering the
          colonial economy. They weren&rsquo;t robbed outright. They were made dependent. The
          mechanism was precise: don&rsquo;t take what people have. Create a requirement they can
          only meet on your terms.
        </P>
        <P>
          Austerity does this in reverse. It doesn&rsquo;t create a new need. It removes the public
          supply of an existing one. The need remains — you still need to learn, to heal, to
          sleep somewhere. You now have to meet it through the market. Where you need permission.
          Where someone profits from the fact that you need the thing. Where, if you&rsquo;re not
          creditworthy, you simply don&rsquo;t get it.
        </P>
        <P>
          Manufacturing dependency where none existed before. The instrument is different.
          The function is identical.
        </P>
        <P>
          This is why &ldquo;we can&rsquo;t afford it&rdquo; is such a strange thing for a government to say,
          once you&rsquo;ve watched $7.77 trillion appear for banks and $6 trillion appear for
          a pandemic. It isn&rsquo;t a description of how much money exists. It&rsquo;s a consistent
          answer to a consistent question: who gets things outside the market, and who has to
          borrow? And for forty years the answer has been the same. The banks get the yes.
          You get the loan.
        </P>
        <P>
          Once you see the pattern, the framing shifts. &ldquo;Fiscal responsibility&rdquo; stops
          sounding like a description of how economies work and starts sounding like a
          description of whose interests get protected when the budget is written. The question
          isn&rsquo;t whether we can afford Medicare for All, or free public university, or housing
          that doesn&rsquo;t cost more than you earn. The question is whether those things should
          exist outside the market — where no one can say no to you — or inside it, where
          someone always can. Austerity is the name for the choice to keep moving them in.
        </P>
      </ArticleSection>

      <ArticleSection id="faq">
        <H2 id="faq">Common Questions</H2>
        <ArticleFAQ items={FAQ_ITEMS} />
      </ArticleSection>

      <ArticleFurtherReading title="Go Deeper" items={FURTHER_READING} />

      <ArticleCallout variant="dark" title="Who Gets to Be Independent">
        <p>
          If something that used to be public — a university, a hospital, a pension — is
          converted into a market product, you now need permission to have it. You need
          creditworthiness. You need to service the debt, indefinitely. The thing that existed
          outside anyone&rsquo;s control is now inside someone&rsquo;s balance sheet.
        </p>
        <br />
        <p>
          Social Security is described as being in &ldquo;crisis.&rdquo; The proposed solution is
          always some version of privatization — your retirement inside the market, with fees,
          with fund choices, with no guarantee. The public pension that asked nothing of you
          would become an account that a financial firm profits from. The script is identical
          every time: the public thing gets framed as unsustainable, gets moved inside the
          market, and the need remains — now with a bank between you and it.
        </p>
        <br />
        <p>
          Once you see that the money appears when banks need it and doesn&rsquo;t when you do,
          &ldquo;we can&rsquo;t afford it&rdquo; becomes very hard to say with a straight face. It stops
          being a fact about money. It becomes a fact about power — about who decides what
          should exist outside the market, and who should have to borrow. That decision is
          being made constantly, in every budget, and it is not a neutral one.
        </p>
      </ArticleCallout>

      <ArticleSources>
        <p>
          <strong>Primary sources and research:</strong> Olivier Blanchard and Daniel Leigh,
          &ldquo;Growth Forecast Errors and Fiscal Multipliers,&rdquo; IMF Working Paper WP/13/1, January 2013;
          Jonathan D. Ostry, Prakash Loungani, and Davide Furceri, &ldquo;Neoliberalism: Oversold?&rdquo;{' '}
          <em>Finance &amp; Development</em>, Vol. 53, No. 2, June 2016; Thomas Herndon, Michael Ash,
          and Robert Pollin, &ldquo;Does High Public Debt Consistently Stifle Economic Growth?&rdquo;
          PERI Working Paper No. 322, April 2013; European School of Management and Technology,
          analysis of Greek bailout fund flows, 2013; Bloomberg, &ldquo;Secret Fed Loans Gave Banks
          $13 Billion Undisclosed to Congress,&rdquo; November 28, 2011; National Center for Education
          Statistics, Digest of Education Statistics (state appropriations per student); Federal
          Reserve Bank of New York, Consumer Credit Panel (student loan data).
        </p>
      </ArticleSources>
    </ArticleLayout>
  );
}
