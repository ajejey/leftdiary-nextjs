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
  title: "What Is Austerity? | Left Diary",
  description: "In March 2020, the US government found $2.2 trillion in sixteen days. For years before that, the answer to healthcare and schools was: we can't afford it. So where did the money come from — and why does it keep going to banks?",
  keywords: [
    "what is austerity",
    "austerity explained",
    "student loan debt explained",
    "medical debt US",
    "Reinhart Rogoff spreadsheet error",
    "IMF fiscal multiplier",
    "austerity who benefits",
    "public spending vs private debt",
    "Greece bailout creditors",
    "government can't afford it",
    "austerity and inequality US",
    "fiscal policy explained simply",
  ],
  openGraph: {
    title: "What Is Austerity?",
    description: "In March 2020, the US government found $2.2 trillion in sixteen days. For years before that, the answer to healthcare and schools was: we can't afford it. So where did the money come from?",
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
    tags: ['austerity', 'fiscal policy', 'student debt', 'medical debt', 'IMF', 'political economy'],
    siteName: 'Left Diary',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: "What Is Austerity?",
    description: "Student loan debt went from $100 billion to $1.7 trillion. Medical debt is the leading cause of bankruptcy. The public university used to be nearly free. None of this happened by accident.",
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
      'description': 'In March 2020, the US government found $2.2 trillion in sixteen days. For years before that, the answer to healthcare and schools was: we can\'t afford it. Austerity doesn\'t cut money — it converts public spending into private debt.',
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
      'keywords': 'austerity explained, student loan debt, medical debt US, Reinhart Rogoff error, IMF multiplier, public spending private debt',
      'articleSection': 'Economics',
      'wordCount': 4500,
      'inLanguage': 'en-US',
      'isAccessibleForFree': true,
      'about': [
        { '@type': 'Thing', 'name': 'Austerity' },
        { '@type': 'Thing', 'name': 'Student Loan Debt' },
        { '@type': 'Thing', 'name': 'Medical Debt' },
        { '@type': 'Thing', 'name': 'Fiscal Policy' }
      ],
      'mentions': [
        { '@type': 'Person', 'name': 'Carmen Reinhart' },
        { '@type': 'Person', 'name': 'Kenneth Rogoff' },
        { '@type': 'Person', 'name': 'Thomas Herndon' },
        { '@type': 'Person', 'name': 'Olivier Blanchard' },
        { '@type': 'Person', 'name': 'Paul Ryan' }
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
            'text': 'Austerity refers to government spending cuts and tax increases meant to reduce budget deficits. Proponents frame it as fiscal responsibility — governments living within their means. But austerity doesn\'t actually cut money. Money can\'t be saved at the government level; it\'s created when governments spend and destroyed when they tax. What austerity does is convert public spending (which exists outside the market, free at the point of use) into private debt (bank loans, at interest). Student loan debt, medical debt, and housing debt all expanded dramatically as public funding for universities, hospitals, and housing was cut. The need didn\'t disappear — it was converted into a loan.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Why did student loan debt grow so much?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Total US student loan debt was approximately $100 billion in 1993. It reached $1.7 trillion by 2024. This is not primarily because Americans became irresponsible about borrowing. It is because public funding for universities was systematically cut: federal and state government funding fell from covering approximately 75% of university costs in 1975 to approximately 35% by 2020. The University of California system charged no tuition for California residents until 1970. The need for higher education grew. The public funding shrank. Banks filled the gap with loans, at interest. That is the mechanism.'
          }
        },
        {
          '@type': 'Question',
          'name': 'What was the Reinhart-Rogoff spreadsheet error?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'In 2010, Harvard economists Carmen Reinhart and Kenneth Rogoff published a paper claiming that when government debt exceeds 90% of GDP, average economic growth turns negative (-0.1%). This finding was cited by Paul Ryan in his 2013 budget and used to justify austerity programs globally. In 2013, graduate student Thomas Herndon tried to replicate the results for a class assignment and found three errors, including an Excel formula that accidentally excluded Australia, Austria, Belgium, Canada, and Denmark from the analysis. When corrected, the -0.1% growth figure became +2.2%. The threshold that justified the cuts essentially disappeared.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Who benefited from the Greek bailout?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'A 2013 analysis by the European School of Management and Technology found that approximately 77% of the €207 billion lent to Greece went not to the Greek state but to refinance debts owed to private creditors — primarily French and German banks. BNP Paribas held approximately €5 billion in Greek government bonds; Crédit Agricole\'s total Greek exposure was over €27 billion; Deutsche Bank held €1.6 billion. The Greek population bore the cost: GDP fell 25%, youth unemployment hit 60%, suicides rose 35%, and pensions were cut eleven times by 2015. The official narrative was rescuing Greece. The money flow shows what was actually being rescued.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Where did the money come from for COVID relief?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'The $2.2 trillion CARES Act was signed sixteen days after the WHO declared a pandemic. Total US COVID fiscal spending reached approximately $5-6 trillion over the following year. This money was not found in a vault. It was created — the way money is always created at the government level, by a currency-issuing government deciding to spend. The same mechanism was available before COVID, for healthcare or education or infrastructure. The question austerity has never answered is why that mechanism works perfectly well for banks in 2008 and corporations in 2020, but fails when the question is whether someone can afford their insulin.'
          }
        },
        {
          '@type': 'Question',
          'name': 'What did the IMF find about austerity\'s effects?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'IMF Chief Economist Olivier Blanchard and Daniel Leigh published a working paper in January 2013 (WP/13/1) finding that the economic damage from austerity programs was approximately three times larger than their models had predicted. The models used a fiscal multiplier of 0.5; the actual multiplier was approximately 1.5. In 2016, senior IMF economists published an article in the IMF\'s own magazine titled "Neoliberalism: Oversold?" finding that austerity episodes were followed, on average, by drops in output rather than growth, and that a 1% of GDP fiscal consolidation increased long-term unemployment by 0.6 percentage points and raised inequality by 1.5% within five years. The institution that designed the programs later documented that the models were wrong.'
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
  { id: 'the-six-trillion-question', text: 'The $6 Trillion Question', level: 2 },
  { id: 'the-answer-you-were-given', text: 'The Answer You Were Given', level: 2 },
  { id: 'the-crack', text: 'The Paper, and the Graduate Student', level: 2 },
  { id: 'follow-the-money', text: 'Follow the Money', level: 2 },
  { id: 'what-it-looks-like-at-home', text: 'What It Looks Like at Home', level: 2 },
  { id: 'what-this-actually-is', text: 'What This Actually Is', level: 2 },
  { id: 'the-admission', text: 'The Admission', level: 2 },
  { id: 'faq', text: 'Common Questions', level: 2 },
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'What is austerity?',
    answer: (
      <>
        Austerity refers to government spending cuts meant to reduce budget deficits. Proponents
        frame it as fiscal responsibility. But austerity doesn&rsquo;t actually cut money —
        it converts public spending (free at the point of use, outside the market) into private
        debt (bank loans, at interest). Student loan debt, medical debt, and housing debt all
        expanded as public funding was cut. The need didn&rsquo;t disappear — it was converted
        into a loan.
      </>
    ),
  },
  {
    question: 'Why did student loan debt grow so much?',
    answer: (
      <>
        Total US student loan debt was approximately $100 billion in 1993 and reached $1.7
        trillion by 2024. This is not because Americans became irresponsible. Public funding for
        universities fell from covering approximately 75% of costs in 1975 to approximately 35%
        by 2020. The University of California charged no tuition until 1970. The need for
        education grew; the public funding shrank; banks filled the gap at interest.
        That is the mechanism.
      </>
    ),
  },
  {
    question: 'What was the Reinhart-Rogoff spreadsheet error?',
    answer: (
      <>
        In 2010, Harvard economists Reinhart and Rogoff published a paper claiming governments
        with debt above 90% of GDP experienced negative growth (−0.1%). Paul Ryan cited it in
        his 2013 budget. In 2013, graduate student Thomas Herndon tried to replicate it for a
        class assignment and found an Excel formula that accidentally excluded Australia, Austria,
        Belgium, Canada, and Denmark. When corrected, −0.1% became +2.2%. The threshold that
        justified the cuts essentially disappeared.
      </>
    ),
  },
  {
    question: 'Who benefited from the Greek bailout?',
    answer: (
      <>
        A 2013 analysis found approximately 77% of the €207 billion lent to Greece went to
        refinance debts owed to private creditors — primarily French and German banks.
        BNP Paribas held approximately €5 billion in Greek bonds; Crédit Agricole&rsquo;s total
        Greek exposure exceeded €27 billion. The Greek population bore the cost: GDP fell 25%,
        youth unemployment hit 60%, suicides rose 35%, pensions were cut eleven times. The
        official narrative was rescuing Greece. The money flow shows what was actually
        being rescued.
      </>
    ),
  },
  {
    question: 'Where did the money come from for COVID relief?',
    answer: (
      <>
        The $2.2 trillion CARES Act was signed sixteen days after the WHO declared a pandemic.
        Total US COVID fiscal spending reached approximately $5–6 trillion over the following
        year. This money was not found in a vault. It was created — the way money is always
        created at the government level, by a currency-issuing government deciding to spend.
        The question austerity has never answered is why that mechanism works for banks in 2008
        and corporations in 2020, but not when someone needs insulin.
      </>
    ),
  },
  {
    question: "What did the IMF find about austerity's effects?",
    answer: (
      <>
        IMF Chief Economist Olivier Blanchard and Daniel Leigh published a working paper in
        January 2013 finding the economic damage from austerity was approximately three times
        larger than projected — actual fiscal multipliers were 1.5, not the assumed 0.5.
        In 2016, senior IMF economists published an article in the IMF&rsquo;s own magazine
        titled &ldquo;Neoliberalism: Oversold?&rdquo; finding austerity raised unemployment by
        0.6 percentage points per 1% of GDP cut, and increased inequality within five years.
        The institution that designed the programs later documented that the models were wrong.
      </>
    ),
  },
];

const FURTHER_READING: FurtherReadingItem[] = [
  {
    href: 'https://www.amazon.com/Austerity-History-Dangerous-Mark-Blyth/dp/0199828768',
    title: 'Austerity: The History of a Dangerous Idea — Mark Blyth (2013)',
    description: 'Traces austerity from 18th-century liberal theory to the eurozone crisis, finding no consistent historical evidence that cutting spending generates growth — and documenting who the policy consistently protects.',
    external: true,
  },
  {
    href: 'https://www.imf.org/external/pubs/ft/wp/2013/wp1301.pdf',
    title: '"Growth Forecast Errors and Fiscal Multipliers" — Blanchard & Leigh, IMF (2013)',
    description: 'The IMF\'s own chief economist documents that austerity programs caused three times the economic damage their models predicted.',
    external: true,
  },
  {
    href: 'https://www.imf.org/external/pubs/ft/fandd/2016/06/ostry.htm',
    title: '"Neoliberalism: Oversold?" — Ostry, Loungani & Furceri, IMF (2016)',
    description: 'Published in the IMF\'s own magazine: austerity episodes are followed on average by drops in output and raise inequality significantly.',
    external: true,
  },
  {
    href: '/posts/how-do-banks-create-money-out-of-nothing',
    title: 'How Do Banks Create Money Out of Nothing?',
    description: 'If banks create money at the moment of lending, the question is never whether money exists — only what it gets created for.',
  },
  {
    href: '/posts/why-did-colonizers-tax-africans',
    title: 'Why Did Colonizers Tax Africans?',
    description: 'The hut tax manufactured dependency the same way austerity does: by converting something people had outside the market into something they had to earn colonial currency to access.',
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
            In March 2020, the US government found $2.2 trillion in sixteen days. For most of
            your life before that, the answer to healthcare, schools, and infrastructure was:
            we can&rsquo;t afford it. So where did the money come from? And if it was always there,
            what was actually happening when they said it wasn&rsquo;t?
          </>
        }
        date="July 2, 2026"
        dateTime="2026-07-02"
        readingTime="16 min read"
      />

      <ArticleTOC items={TOC_ITEMS} />

      <ArticleSection id="the-six-trillion-question">
        <H2 id="the-six-trillion-question">The $6 Trillion Question</H2>
        <P>
          On March 27, 2020 — sixteen days after the World Health Organization declared a
          pandemic — President Trump signed the CARES Act into law. $2.2 trillion. Within
          twelve months, total US COVID fiscal spending reached approximately $5–6 trillion.
        </P>
        <P>
          Think about what you were told before that. For years — decades, really — the answer
          to almost any proposal involving public spending was some version of: we can&rsquo;t afford
          it. The deficit. The debt. Living within our means. You heard it for single-payer
          healthcare. You heard it for student debt relief. You heard it for crumbling bridges
          and underfunded schools.
        </P>
        <P>
          And then, in the space of a few weeks in spring 2020, six trillion dollars appeared.
        </P>
        <P>
          That question doesn&rsquo;t go away. Where did it come from? Why was it available then
          and not before? And why does the same pattern keep showing up — money appearing for
          certain things, and not for others? In 2008, the Federal Reserve committed a total
          of $7.77 trillion to rescue the financial system, according to a Bloomberg
          investigation based on Fed data.{' '}
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
          That&rsquo;s not a misprint. $7.77 trillion for the financial system, across various
          emergency lending facilities, in roughly two years. Nobody asked whether we could
          afford it.
        </P>
        <P>
          The article is going to follow that question.
        </P>
      </ArticleSection>

      <ArticleSection id="the-answer-you-were-given">
        <H2 id="the-answer-you-were-given">The Answer You Were Given</H2>
        <P>
          The answer you&rsquo;ve been given — the one that appears every time someone proposes
          spending on something public — is the household budget story. The government is like
          a family. You can&rsquo;t spend money you don&rsquo;t have. If you borrow too much, the debt
          compounds and eventually swallows you. The responsible thing is to cut back, pay
          down the debt, and live within your means.
        </P>
        <P>
          This feels right. Most of us have experienced what happens when a household borrows
          more than it can handle. It&rsquo;s intuitive.
        </P>
        <P>
          It&rsquo;s also the logic that drove the Budget Control Act of 2011, which enforced $1.2
          trillion in automatic spending cuts through &ldquo;sequestration.&rdquo; Air traffic controllers,
          Head Start programs, food safety inspectors, housing assistance — all cut
          automatically, across the board. The argument was that the US had run up too much
          debt during the 2008 crisis and now had to be serious about it.
        </P>
        <P>
          There was academic backing for this argument. In 2010, Harvard economists Carmen
          Reinhart and Kenneth Rogoff published a paper in the American Economic Review. Its
          central claim, from the abstract:{' '}
          <span className="text-sm text-gray-400 not-italic">(Reinhart and Rogoff,{' '}
            <a
              href="https://www.aeaweb.org/articles?id=10.1257/aer.100.2.573"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-gray-400 hover:decoration-gray-600"
            >
              <em>&ldquo;Growth in a Time of Debt&rdquo;</em>
            </a>
          ,{' '}<em>American Economic Review</em>, 2010)</span>
        </P>
        <Blockquote cite="Reinhart and Rogoff, 'Growth in a Time of Debt,' American Economic Review, 2010">
          The relationship between government debt and real GDP growth is weak for debt/GDP
          ratios below a threshold of 90 percent of GDP. Above 90 percent, median growth rates
          fall by one percent, and average growth falls considerably more.
        </Blockquote>
        <P>
          Above 90% debt-to-GDP: negative average growth. Below it: fine. The cliff edge was
          real. The paper was downloaded over a million times. Paul Ryan, then chairman of the
          House Budget Committee, cited it in his 2013 budget proposal:
        </P>
        <Blockquote cite="Paul Ryan, 'The Path to Prosperity: A Responsible, Balanced Budget,' House Budget Committee, 2013">
          A well-known study completed by economists Ken Rogoff and Carmen Reinhart confirms
          this common-sense conclusion.
        </Blockquote>
        <P>
          This was the intellectual foundation. High debt causes low growth. Therefore: cut.
        </P>
      </ArticleSection>

      <ArticleSection id="the-crack">
        <H2 id="the-crack">The Paper, and the Graduate Student</H2>
        <P>
          In 2013, a graduate student at the University of Massachusetts named Thomas Herndon
          tried to replicate Reinhart and Rogoff&rsquo;s results for a class assignment.
        </P>
        <P>
          He couldn&rsquo;t.
        </P>
        <P>
          He went back through the original data and, with his professors Michael Ash and
          Robert Pollin, identified three errors.{' '}
          <span className="text-sm text-gray-400 not-italic">(Herndon, Ash, and Pollin,{' '}
            <a
              href="https://peri.umass.edu/publication/does-high-public-debt-consistently-stifle-economic-growth-a-critique-of-reinhart-and-rogoff/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-gray-400 hover:decoration-gray-600"
            >
              <em>&ldquo;Does High Public Debt Consistently Stifle Economic Growth?&rdquo;</em>
            </a>
          , PERI Working Paper No. 322, 2013)</span>
        </P>
        <P>
          The most consequential was an Excel spreadsheet formula that averaged the wrong
          range of cells — accidentally excluding five entire countries from the high-debt
          category: Australia, Austria, Belgium, Canada, and Denmark. All five had high debt
          ratios. All five had positive growth. Their exclusion made the high-debt average
          look dramatically worse than it actually was.
        </P>
        <P>
          When the errors were corrected, the −0.1% average growth figure for high-debt
          countries became +2.2%. The cliff edge — the specific threshold that had been cited
          in budgets, speeches, and policy documents around the world — essentially
          disappeared.
        </P>
        <P>
          Reinhart and Rogoff acknowledged the spreadsheet error. They disputed that the core
          finding was affected. The paper had already been used to justify cuts across three
          continents. The policies did not change.
        </P>
        <P>
          Hold that for a moment. The most-cited piece of academic evidence for austerity
          contained a spreadsheet mistake. A graduate student found it trying to do a class
          assignment. By the time he found it, the cuts had already happened — to Head Start,
          to food safety inspection, to housing assistance, to all the things that had been
          deemed unaffordable.
        </P>
      </ArticleSection>

      <ArticleSection id="follow-the-money">
        <H2 id="follow-the-money">Follow the Money</H2>
        <P>
          Maybe the spreadsheet error doesn&rsquo;t matter. Maybe the government genuinely had to
          make hard choices with limited resources, and the Reinhart-Rogoff paper was just
          a convenient justification for something that needed to happen anyway. Let&rsquo;s follow
          the money and see.
        </P>
        <P>
          In May 2010, the US, European governments, and the International Monetary Fund agreed
          to lend Greece €110 billion. The official story: rescuing a country on the edge of
          collapse. The condition: deep austerity. Greece would cut pensions, freeze wages,
          raise taxes, and privatize state assets in exchange for each tranche of funding.
        </P>
        <P>
          A 2013 analysis by the European School of Management and Technology found that
          approximately 77% of the €207 billion in loans disbursed to Greece through 2013
          went not to fund the Greek state, but to refinance debts owed to private
          creditors.
        </P>
        <P>
          Private creditors. Who?
        </P>
        <P>
          French and German banks. BNP Paribas held approximately €5 billion in Greek
          government bonds. Crédit Agricole&rsquo;s total Greek exposure was estimated at over
          €27 billion, including its Greek subsidiary. Deutsche Bank held €1.6 billion.
          Commerzbank €3 billion. The French banking sector&rsquo;s total Greek exposure was
          estimated at €50–75 billion by 2010 analysts.
        </P>
        <P>
          The Greek people did not borrow from BNP Paribas. The Greek state did. When it
          couldn&rsquo;t pay, the &ldquo;bailout&rdquo; paid the bank. Seventy-seven cents of every
          bailout euro flowed through Greece and back out to a private creditor. The Greek
          population bore the cost of a restructuring that primarily protected French and
          German bank balance sheets.
        </P>
        <P>
          Greek GDP fell 25% between 2008 and 2013 — the deepest peacetime economic
          contraction in any developed country since the 1930s. Youth unemployment hit 60.1%
          in July 2013. Average wages fell 25–30% in real terms. Healthcare budgets were cut
          by over 40%. Suicides rose 35% between 2010 and 2012. HIV infections among drug
          users in Athens rose 1,500% after needle exchange programs were closed to save
          money, according to a study published in <em>The Lancet</em>.{' '}
          <span className="text-sm text-gray-400 not-italic">(Kentikelenis et al.,{' '}
            <a
              href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(13)62291-X/fulltext"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-gray-400 hover:decoration-gray-600"
            >
              <em>&ldquo;Greece&rsquo;s Health Crisis: From Austerity to Denialism&rdquo;</em>
            </a>
          ,{' '}<em>The Lancet</em>, 2014)</span>{' '}
          Pensions were cut eleven times by 2015.
        </P>
        <P>
          That is what the money protected. Those are the outcomes the conditions produced.
        </P>
      </ArticleSection>

      <ArticleSection id="what-it-looks-like-at-home">
        <H2 id="what-it-looks-like-at-home">What It Looks Like at Home</H2>
        <P>
          Greece feels distant. Here is what the same mechanism looks like in the United States.
        </P>
        <P>
          The University of California system charged no tuition for California residents until
          1970. The GI Bill made college accessible to an entire generation without debt. Then,
          as governor, Ronald Reagan imposed the first tuition in 1970, arguing explicitly that
          education shouldn&rsquo;t be &ldquo;free.&rdquo; Over the following decades, federal and state
          funding for public universities fell from covering approximately 75% of costs in 1975
          to approximately 35% by 2020.
        </P>
        <P>
          The need for a degree didn&rsquo;t shrink. It grew. The money had to come from somewhere.
        </P>
        <P>
          Total US student loan debt: approximately $100 billion in 1993. $1.7 trillion today.
        </P>
        <P>
          That is not Americans getting irresponsible about borrowing. That is a public
          good being converted into a financial product, one budget cut at a time. The public
          university existed outside the market — you could get an education without going into
          debt with a bank. Then public funding was cut. The need remained. Banks moved in
          at interest. What was a public service is now a debt instrument.
        </P>
        <P>
          Medical debt is the leading cause of personal bankruptcy in the United States.
          Approximately 100 million Americans carry it. Countries with universal public
          healthcare don&rsquo;t have medical debt as a category — it simply doesn&rsquo;t exist as a
          social phenomenon, because the need is met outside the market. In the United States,
          the market is mandatory. If you don&rsquo;t have insurance, or your insurance doesn&rsquo;t
          cover something, or the bill arrives despite coverage because of how hospital billing
          works, you pay. If you can&rsquo;t pay, you borrow. If you can&rsquo;t borrow, it goes to
          collections. None of this is a law of nature. It is a set of choices about what
          to fund publicly and what to leave to the market.
        </P>
        <P>
          The US also has the most expensive housing market in its history, driven in part by
          the systematic defunding of public and subsidized housing from the 1970s onward.
          Public housing stock: deliberately reduced. Section 8 vouchers: chronically
          underfunded, with waiting lists years long in most cities. The need for housing
          didn&rsquo;t disappear. It was met with mortgages, and when mortgages became inaccessible,
          with rents that have risen faster than wages for forty consecutive years.
        </P>
        <P>
          In each case: the public thing was cut. The need remained. Banks filled the gap.
          The territory where a bank stands between you and something you need got larger.
        </P>
      </ArticleSection>

      <ArticleSection id="what-this-actually-is">
        <H2 id="what-this-actually-is">What This Actually Is</H2>
        <P>
          Here is what nobody says plainly: austerity doesn&rsquo;t cut money.
        </P>
        <P>
          Money can&rsquo;t be &ldquo;saved&rdquo; at the government level. A currency-issuing government
          creates money when it spends and destroys money when it taxes. If the government
          cuts spending, it is not setting aside the difference for later — it is simply
          creating less money. The private sector has to make up for that destruction with
          more borrowing, or the economy contracts.
        </P>
        <P>
          What austerity actually does is replace one kind of money with another.
        </P>
        <P>
          Public money — the money that funds hospitals, schools, and universities — doesn&rsquo;t
          charge interest. It doesn&rsquo;t require you to be creditworthy. A student who attends
          a publicly funded university for free doesn&rsquo;t need to ask a bank for permission.
          A patient in a country with universal healthcare doesn&rsquo;t accumulate a debt load.
          These things exist in a space where banks are not between you and what you need.
        </P>
        <P>
          Private money — a bank loan — charges interest. It requires creditworthiness. It
          requires you to go to a bank and ask, and to be approved, and to service the debt
          indefinitely. If you don&rsquo;t qualify, you don&rsquo;t get the thing.
        </P>
        <P>
          Austerity systematically expands the territory where the second kind replaces the
          first. Cut public university funding: student loans expand. Cut public housing: rents
          expand, then mortgages expand for those who can access them, then medical debt
          expands for those who can&rsquo;t afford their deductibles. In each case, the thing
          didn&rsquo;t disappear. You now borrow to get it. The bank profits from the interest.
          What was a public service has become a revenue stream.
        </P>
        <P>
          This is not accidental. This is the mechanism.
        </P>
      </ArticleSection>

      <ArticleSection id="the-admission">
        <H2 id="the-admission">The Admission</H2>
        <P>
          In January 2013 — after the Budget Control Act, after sequestration, after the
          Greek cuts — the IMF published a working paper by its chief economist, Olivier
          Blanchard, and his colleague Daniel Leigh. It found that the models used to design
          the austerity programs had assumed fiscal multipliers of approximately 0.5. The
          actual multipliers were approximately 1.5.{' '}
          <span className="text-sm text-gray-400 not-italic">(Blanchard and Leigh,{' '}
            <a
              href="https://www.imf.org/external/pubs/ft/wp/2013/wp1301.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-gray-400 hover:decoration-gray-600"
            >
              <em>&ldquo;Growth Forecast Errors and Fiscal Multipliers&rdquo;</em>
            </a>
          , IMF Working Paper WP/13/1, 2013)</span>
        </P>
        <P>
          What that means in plain language: the IMF thought cutting $1 of government spending
          would shrink the economy by $0.50. The actual shrinkage was $1.50. The models
          were wrong by a factor of three. Every dollar cut from the Greek economy during
          those years shrank it by $1.50, not $0.50 — which is why the debt-to-GDP ratio
          kept getting worse even as the cuts were supposed to fix it.
        </P>
        <Blockquote cite="Blanchard and Leigh, IMF Working Paper WP/13/1, January 2013">
          A natural interpretation is that fiscal multipliers were substantially higher than
          implicitly assumed by forecasters. Forecasters significantly underestimate the
          increase in unemployment and the decline in domestic demand associated with fiscal
          consolidation.
        </Blockquote>
        <P>
          Three years later, senior IMF economists published an article in the IMF&rsquo;s own
          magazine, <em>Finance &amp; Development</em>, under a title that should give you
          pause: &ldquo;Neoliberalism: Oversold?&rdquo;{' '}
          <span className="text-sm text-gray-400 not-italic">(Ostry, Loungani, and Furceri,{' '}
            <a
              href="https://www.imf.org/external/pubs/ft/fandd/2016/06/ostry.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-gray-400 hover:decoration-gray-600"
            >
              <em>&ldquo;Neoliberalism: Oversold?&rdquo;</em>
            </a>
          ,{' '}<em>Finance &amp; Development</em>, Vol. 53, No. 2, 2016)</span>
        </P>
        <Blockquote cite="Ostry, Loungani, and Furceri, 'Neoliberalism: Oversold?' IMF Finance & Development, June 2016">
          Episodes of fiscal consolidation have been followed, on average, by drops rather than
          by expansions in output. A consolidation of 1 percent of GDP increases the long-term
          unemployment rate by 0.6 percentage point and raises by 1.5 percent within five years
          the Gini measure of income inequality.
        </Blockquote>
        <P>
          The institution that designed the programs published papers saying the models were
          wrong. Both things came from the same place. That is not a contradiction — it is a
          description of how the institution works. It serves the interests of its creditor
          member states. When those interests conflict with the welfare of debtor populations,
          the record shows which wins.
        </P>
        <P>
          The graduate student who found the spreadsheet error is not a household name. The
          economists whose paper contained the error are. The cuts happened. The admissions
          came later. The damage did not reverse.
        </P>
      </ArticleSection>

      <ArticleSection id="faq">
        <H2 id="faq">Common Questions</H2>
        <ArticleFAQ items={FAQ_ITEMS} />
      </ArticleSection>

      <ArticleFurtherReading title="Go Deeper" items={FURTHER_READING} />

      <ArticleCallout variant="dark" title="Who Gets the Yes, and Who Gets the No">
        <p>
          In 2020, $6 trillion appeared in twelve months. In 2008, the Federal Reserve
          committed $7.77 trillion to the financial system. The money was not found somewhere.
          It was created — the way money is always created, by a government deciding to spend it.
        </p>
        <br />
        <p>
          What austerity has never explained is why that mechanism works when the beneficiary
          is a bank, and stops working when the question is whether someone can afford their
          insulin, their degree, or their rent.
        </p>
        <br />
        <p>
          Student loan debt went from $100 billion to $1.7 trillion. Medical debt is the leading
          cause of personal bankruptcy. The public university that used to cost almost nothing
          now costs $30,000 a year. Each of these is a public service that was cut, a need that
          remained, and a bank that moved in to fill the gap — at interest, permanently.
        </p>
        <br />
        <p>
          Social Security is described as being in &ldquo;crisis.&rdquo; The proposed solution is partial
          privatization — converting a guaranteed public pension into individual accounts managed
          by financial firms. The script is familiar. The public thing gets cut. The need remains.
          The market fills the gap. The question is the same one it always is: whose debt gets
          honored, and whose service gets cut to honor it?
        </p>
      </ArticleCallout>

      <ArticleSources>
        <p>
          <strong>Primary sources:</strong> Paul Ryan, &ldquo;The Path to Prosperity: A Responsible,
          Balanced Budget,&rdquo; House Budget Committee, March 2013; Carmen M. Reinhart and Kenneth
          S. Rogoff, &ldquo;Growth in a Time of Debt,&rdquo; <em>American Economic Review</em>, Vol. 100,
          No. 2, May 2010 (also NBER Working Paper No. 15639); Olivier Blanchard and Daniel Leigh,
          &ldquo;Growth Forecast Errors and Fiscal Multipliers,&rdquo; IMF Working Paper WP/13/1, January
          2013; Jonathan D. Ostry, Prakash Loungani, and Davide Furceri, &ldquo;Neoliberalism:
          Oversold?&rdquo; <em>Finance &amp; Development</em>, Vol. 53, No. 2, June 2016.
        </p>
        <p>
          <strong>Research and data:</strong> Thomas Herndon, Michael Ash, and Robert Pollin,
          &ldquo;Does High Public Debt Consistently Stifle Economic Growth? A Critique of Reinhart
          and Rogoff,&rdquo; PERI Working Paper No. 322, University of Massachusetts Amherst, April
          2013; European School of Management and Technology (ESMT), analysis of Greek bailout
          fund flows, 2013; Alexander Kentikelenis et al., &ldquo;Greece&rsquo;s Health Crisis: From
          Austerity to Denialism,&rdquo; <em>The Lancet</em>, Vol. 383, No. 9918, February 2014;
          Bloomberg, &ldquo;Secret Fed Loans Gave Banks $13 Billion Undisclosed to Congress,&rdquo;
          November 28, 2011; Bank for International Settlements, Quarterly Review, 2010;
          National Center for Education Statistics, Digest of Education Statistics; Federal
          Reserve Bank of New York, Student Loan Data; Consumer Financial Protection Bureau,
          Medical Debt data.
        </p>
      </ArticleSources>
    </ArticleLayout>
  );
}
