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
  title: "What Is Austerity? | Left Diary",
  description: "Austerity is presented as fiscal responsibility — the grown-up response to debt. But the evidence used to justify it contained a spreadsheet error. The bailout money went to French and German banks. And the IMF later published papers saying the models were wrong.",
  keywords: [
    "what is austerity",
    "austerity explained",
    "Greece austerity effects",
    "Reinhart Rogoff spreadsheet error",
    "IMF fiscal multiplier Blanchard Leigh",
    "UK austerity effects life expectancy",
    "Greece bailout who benefited",
    "fiscal consolidation explained",
    "austerity who benefits",
    "austerity and inequality",
    "what did austerity do to Greece",
    "George Osborne austerity",
  ],
  openGraph: {
    title: "What Is Austerity?",
    description: "The evidence used to justify it contained a spreadsheet error. The bailout money went to French and German banks. The IMF later published papers saying the models were wrong. Austerity is not fiscal responsibility. It is a hierarchy of obligations.",
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
    tags: ['austerity', 'fiscal policy', 'Greece', 'IMF', 'UK', 'political economy', 'capitalism'],
    siteName: 'Left Diary',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: "What Is Austerity?",
    description: "The evidence used to justify it was wrong. The money went to French and German banks. The IMF admitted the models were wrong. Austerity is not economics — it is a choice about whose obligations get honored first.",
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
      'description': 'Austerity is presented as fiscal responsibility. But the evidence used to justify it contained a spreadsheet error, the bailout money went to French and German banks, and the IMF published papers admitting the models were wrong.',
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
      'keywords': 'what is austerity, austerity explained, Greece bailout 2010, Reinhart Rogoff spreadsheet error, Blanchard Leigh fiscal multiplier, UK austerity effects, IMF self-critique',
      'articleSection': 'Economics',
      'wordCount': 4200,
      'inLanguage': 'en-US',
      'isAccessibleForFree': true,
      'about': [
        { '@type': 'Thing', 'name': 'Austerity' },
        { '@type': 'Thing', 'name': 'Fiscal Policy' },
        { '@type': 'Thing', 'name': 'Greece Financial Crisis' },
        { '@type': 'Thing', 'name': 'IMF Structural Adjustment' }
      ],
      'mentions': [
        { '@type': 'Person', 'name': 'George Osborne' },
        { '@type': 'Person', 'name': 'David Cameron' },
        { '@type': 'Person', 'name': 'Carmen Reinhart' },
        { '@type': 'Person', 'name': 'Kenneth Rogoff' },
        { '@type': 'Person', 'name': 'Thomas Herndon' },
        { '@type': 'Person', 'name': 'Olivier Blanchard' },
        { '@type': 'Person', 'name': 'Philip Alston' }
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
            'text': 'Austerity refers to government policies that reduce public spending and increase taxes in order to reduce budget deficits and public debt. Proponents frame it as fiscal responsibility — necessary belt-tightening to restore confidence and sustainable growth. Critics argue that cutting government spending during a recession removes income from the private economy, deepening the downturn rather than resolving it. The IMF\'s own economists published papers in 2013 and 2016 finding that austerity programs produced greater economic damage than their models had assumed and that the costs fell disproportionately on lower-income populations.'
          }
        },
        {
          '@type': 'Question',
          'name': 'What did austerity do to Greece?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Between 2008 and 2013, Greek GDP fell approximately 25% — the deepest peacetime economic contraction in any developed country since the 1930s. Unemployment rose from 7.7% in 2008 to 27.5% by September 2013, with youth unemployment reaching 60.1%. Average wages fell 25-30% in real terms. Healthcare budgets were cut by over 40%. Suicides rose 35% between 2010 and 2012. HIV infections among intravenous drug users in Athens rose 1,500% following the closure of needle exchange programs. Pensions were cut eleven times by 2015. A 2013 independent analysis found that approximately 77% of the bailout money disbursed to Greece went not to fund Greek public services but to refinance debts owed to private creditors — primarily French and German banks.'
          }
        },
        {
          '@type': 'Question',
          'name': 'What was the Reinhart-Rogoff spreadsheet error?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'In 2010, Harvard economists Carmen Reinhart and Kenneth Rogoff published a paper claiming that when government debt exceeds 90% of GDP, average economic growth turns negative (-0.1%). This finding was cited by Paul Ryan, George Osborne, and Olli Rehn to justify austerity programs. In 2013, graduate student Thomas Herndon tried to replicate the results for a class assignment and found three errors, including an Excel spreadsheet formula that accidentally excluded Australia, Austria, Belgium, Canada, and Denmark from the analysis. When the errors were corrected, the -0.1% average growth figure became +2.2%. The 90% threshold effect that had driven the entire policy argument essentially disappeared.'
          }
        },
        {
          '@type': 'Question',
          'name': 'What did Blanchard and Leigh find about fiscal multipliers?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'IMF Working Paper WP/13/1, published January 2013 by Chief Economist Olivier Blanchard and Daniel Leigh, found that the fiscal multipliers used in the IMF\'s forecasting models were approximately 0.5 — meaning the IMF assumed each euro of government spending cuts would reduce GDP by 0.5 euros. Blanchard and Leigh found the actual multipliers during the 2010-2012 austerity period were approximately 1.5. This means every percentage point cut from the Greek or Spanish or Portuguese economy shrank it by 1.5 percentage points, not 0.5 — making debt-to-GDP ratios worse even as the cuts were designed to improve them.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Who held Greek sovereign debt in 2010?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'As of early 2010, French and German banks held the bulk of Greek sovereign debt. BNP Paribas held approximately €5 billion in Greek government bonds; Crédit Agricole had total Greek exposure estimated at over €27 billion including its Greek subsidiary Emporiki Bank; Deutsche Bank held approximately €1.6 billion; Commerzbank approximately €3 billion. The French banking sector\'s total Greek exposure was estimated at €50-75 billion by 2010 analysts. A 2013 analysis by the European School of Management and Technology found that approximately 77% of the €207 billion in loans disbursed to Greece through 2013 went to refinance maturing debt owed to private creditors — not to fund the Greek state.'
          }
        },
        {
          '@type': 'Question',
          'name': 'What is a fiscal multiplier?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'A fiscal multiplier measures the effect of a change in government spending on overall economic output (GDP). A multiplier of 0.5 means that cutting €1 of government spending reduces GDP by €0.50. A multiplier of 1.5 means cutting €1 of government spending reduces GDP by €1.50. Multipliers are larger during recessions — because there is more slack in the economy and private sector demand cannot offset the reduction — and smaller during expansions. The IMF\'s pre-2012 forecasting models assumed multipliers of approximately 0.5. The institution\'s own economists later found that actual multipliers during the austerity period were approximately 1.5, meaning the economic damage of the cuts was three times what had been projected.'
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
  { id: 'we-have-to-live-within-our-means', text: 'The Household Budget Story', level: 2 },
  { id: 'the-paper-that-justified-the-cuts', text: 'The Paper That Justified the Cuts', level: 2 },
  { id: 'the-spreadsheet-error', text: 'The Spreadsheet Error', level: 3 },
  { id: 'who-the-bailout-actually-bailed-out', text: 'Who the Bailout Actually Bailed Out', level: 2 },
  { id: 'what-the-conditions-specified', text: 'What the Conditions Specified', level: 3 },
  { id: 'who-held-the-debt', text: 'Who Held the Debt', level: 3 },
  { id: 'what-the-conditions-did', text: 'What the Conditions Did', level: 2 },
  { id: 'the-institution-admitted-the-models-were-wrong', text: 'The Institution That Admitted the Models Were Wrong', level: 2 },
  { id: 'faq', text: 'Frequently Asked Questions', level: 2 },
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'What is austerity?',
    answer: (
      <>
        Austerity refers to government policies that reduce public spending and increase taxes to
        reduce budget deficits and public debt. Proponents frame it as fiscal responsibility —
        necessary belt-tightening to restore confidence and sustainable growth. The IMF&rsquo;s own
        economists published papers in 2013 and 2016 finding that austerity programs produced
        greater economic damage than their models had assumed and that the costs fell
        disproportionately on lower-income populations.
      </>
    ),
  },
  {
    question: 'What did austerity do to Greece?',
    answer: (
      <>
        Between 2008 and 2013, Greek GDP fell approximately 25% — the deepest peacetime economic
        contraction in any developed country since the 1930s. Unemployment rose from 7.7% in 2008
        to 27.5% by September 2013, with youth unemployment reaching 60.1%. Average wages fell
        25–30% in real terms. Healthcare budgets were cut by over 40%. Suicides rose 35% between
        2010 and 2012. HIV infections among intravenous drug users in Athens rose 1,500% following
        the closure of needle exchange programs. Pensions were cut eleven times by 2015. A 2013
        independent analysis found that approximately 77% of the bailout money went not to fund
        Greek public services but to refinance debts owed to private creditors — primarily French
        and German banks.
      </>
    ),
  },
  {
    question: 'What was the Reinhart-Rogoff spreadsheet error?',
    answer: (
      <>
        In 2010, Harvard economists Carmen Reinhart and Kenneth Rogoff published a paper claiming
        that when government debt exceeds 90% of GDP, average economic growth turns negative
        (−0.1%). This finding was cited by Paul Ryan, George Osborne, and EU Economic Commissioner
        Olli Rehn to justify austerity programs. In 2013, a graduate student (Thomas Herndon) tried
        to replicate the results for a class assignment and found three errors, including an Excel
        formula that accidentally excluded Australia, Austria, Belgium, Canada, and Denmark from
        the analysis. When corrected, the −0.1% average growth figure became +2.2%. The 90%
        threshold effect that had driven the entire policy argument essentially disappeared.
      </>
    ),
  },
  {
    question: 'What did Blanchard and Leigh find about fiscal multipliers?',
    answer: (
      <>
        IMF Working Paper WP/13/1, published January 2013 by Chief Economist Olivier Blanchard
        and Daniel Leigh, found that the IMF&rsquo;s forecasting models had assumed fiscal multipliers
        of approximately 0.5 — meaning each unit of spending cuts would reduce GDP by 0.5 units.
        The actual multipliers during the 2010–2012 austerity period were approximately 1.5.
        This means every percentage point cut from the Greek, Spanish, or Portuguese economy
        shrank it by 1.5 percentage points, not 0.5 — making debt-to-GDP ratios worse even as
        the cuts were designed to improve them.
      </>
    ),
  },
  {
    question: 'Who held Greek sovereign debt in 2010?',
    answer: (
      <>
        French and German banks held the bulk of Greek sovereign debt. BNP Paribas held
        approximately €5 billion in Greek government bonds; Crédit Agricole had total Greek
        exposure estimated at over €27 billion including its Greek subsidiary Emporiki Bank;
        Deutsche Bank held approximately €1.6 billion; Commerzbank approximately €3 billion.
        Total French banking sector exposure was estimated at €50–75 billion. A 2013 European
        School of Management and Technology analysis found that approximately 77% of the
        €207 billion in loans disbursed to Greece went to refinance maturing debt owed to
        private creditors — not to fund the Greek state.
      </>
    ),
  },
  {
    question: 'What is a fiscal multiplier?',
    answer: (
      <>
        A fiscal multiplier measures the effect of a change in government spending on overall
        economic output. A multiplier of 0.5 means cutting €1 of government spending reduces
        GDP by €0.50. A multiplier of 1.5 means cutting €1 of spending reduces GDP by €1.50.
        Multipliers are larger during recessions because there is more slack in the economy and
        private demand cannot offset the reduction. The IMF&rsquo;s pre-2012 models assumed
        multipliers of 0.5. The institution&rsquo;s own economists later found actual multipliers
        during the austerity period were approximately 1.5 — meaning the economic damage of
        the cuts was three times what had been projected.
      </>
    ),
  },
];

const FURTHER_READING: FurtherReadingItem[] = [
  {
    href: 'https://www.amazon.com/Austerity-History-Dangerous-Mark-Blyth/dp/0199828768',
    title: 'Austerity: The History of a Dangerous Idea — Mark Blyth (2013)',
    description: 'Traces austerity from 18th-century liberal theory to 21st-century eurozone policy, finding no consistent historical evidence that cutting spending generates growth and documenting who the policy consistently protects.',
    external: true,
  },
  {
    href: 'https://www.amazon.com/Shock-Doctrine-Rise-Disaster-Capitalism/dp/0312427999',
    title: 'The Shock Doctrine — Naomi Klein (2007)',
    description: 'Documents how free-market restructuring has been systematically imposed on countries in the immediate aftermath of crises — coups, disasters, financial collapses — when populations are too disoriented to resist.',
    external: true,
  },
  {
    href: 'https://www.imf.org/external/pubs/ft/wp/2013/wp1301.pdf',
    title: '"Growth Forecast Errors and Fiscal Multipliers" — Blanchard and Leigh, IMF WP/13/1 (2013)',
    description: 'The IMF\'s own chief economist finds that forecasters systematically underestimated the economic damage of fiscal consolidation by a factor of three.',
    external: true,
  },
  {
    href: 'https://www.imf.org/external/pubs/ft/fandd/2016/06/ostry.htm',
    title: '"Neoliberalism: Oversold?" — Ostry, Loungani, Furceri, IMF Finance & Development (2016)',
    description: 'Published in the IMF\'s own magazine: fiscal consolidation episodes are followed, on average, by drops rather than expansions in output, and increase inequality.',
    external: true,
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
            Greece went through the worst peacetime economic contraction in any developed country
            since the 1930s. Youth unemployment hit 60%. HIV infections rose 1,500% when they
            closed the needle exchanges. And €110 billion was spent — enough to have funded the
            Greek public sector for years. The question is where that money went.
          </>
        }
        date="July 2, 2026"
        dateTime="2026-07-02"
        readingTime="16 min read"
      />

      <ArticleTOC items={TOC_ITEMS} />

      <ArticleSection>
        <H2 id="we-have-to-live-within-our-means">The Household Budget Story</H2>
        <P>
          On April 26, 2009, David Cameron gave a speech that named what was coming. &ldquo;The age of
          irresponsibility,&rdquo; he said, &ldquo;is giving way to the age of austerity.&rdquo; The money had run
          out. The next government would have to make &ldquo;incredibly tough decisions on taxation,
          spending, borrowing.&rdquo; One year later, his Chancellor, George Osborne, delivered an
          emergency budget and explained the rationale with a metaphor:
        </P>
        <Blockquote
          cite="George Osborne, Conservative Party Conference speech, October 4, 2010"
        >
          Britain has a £109bn a year structural deficit. Let me tell you what a structural deficit
          is. It&rsquo;s the borrowing that doesn&rsquo;t go away as the economy grows, and we have £109bn of
          it. It&rsquo;s like with a credit card. The longer you leave it, the worse it gets. You pay more
          interest. You pay interest on the interest. You pay interest on the interest on the
          interest.
        </Blockquote>
        <P>
          The image is intuitive: a household that keeps borrowing falls deeper into debt. A
          responsible household cuts back. The government must do the same. This framing drove the
          Spending Review of October 20, 2010, which announced £81 billion in departmental cuts
          over four years — what the Institute for Fiscal Studies described as &ldquo;the longest and
          deepest sustained period of cuts to public service spending since at least the Second
          World War.&rdquo;
        </P>
        <P>
          The household budget analogy is a choice, not a description. A household that cuts its
          spending reduces its own expenses — and reduces someone else&rsquo;s income. When that household
          is the government, and government spending is private sector income — because every pound
          the government spends on nurses&rsquo; wages, school heating, or road maintenance ends up in
          someone&rsquo;s pocket — cutting that spending removes income from the private economy. Keynes
          called this the paradox of thrift: what is rational for one household is destructive when
          every household does it simultaneously.{' '}
          <span className="text-sm text-gray-400 not-italic">(Keynes,{' '}
            <a
              href="https://en.wikipedia.org/wiki/The_General_Theory_of_Employment,_Interest_and_Money"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-gray-400 hover:decoration-gray-600"
            >
              <em>The General Theory of Employment, Interest and Money</em>
            </a>
          , 1936)</span>
        </P>
        <P>
          The question is not whether Cameron and Osborne were unaware of this argument. The
          question is what the household metaphor achieved. It made a specific political
          choice — that the post-2008 deficit should be closed through spending cuts rather than
          tax rises on wealth, through reductions in public services rather than losses for
          creditors — look like the only responsible option available. It framed a hierarchy of
          obligations as a fact of nature.
        </P>
        <P>
          In June 2010, Osborne announced the ratio: 77% of the fiscal adjustment would come from
          spending cuts, 23% from tax rises. By 2015–16, the Institute for Fiscal Studies
          calculated the actual split had reached approximately 85% cuts to 15% tax rises. Local
          government grant funding was cut by 40% in real terms over the decade. The most
          deprived councils bore the largest cuts.
        </P>
      </ArticleSection>

      <ArticleSection>
        <H2 id="the-paper-that-justified-the-cuts">The Paper That Justified the Cuts</H2>
        <P>
          Austerity needed an intellectual foundation. It found one in a paper published in the
          American Economic Review in May 2010 by Carmen Reinhart and Kenneth Rogoff, both of
          Harvard. The paper was titled &ldquo;Growth in a Time of Debt.&rdquo; Its central claim appeared
          in the abstract:{' '}
          <span className="text-sm text-gray-400 not-italic">(Reinhart and Rogoff,{' '}
            <a
              href="https://www.aeaweb.org/articles?id=10.1257/aer.100.2.573"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-gray-400 hover:decoration-gray-600"
            >
              <em>&ldquo;Growth in a Time of Debt&rdquo;</em>
            </a>
          , American Economic Review, 2010)</span>
        </P>
        <Blockquote cite="Reinhart and Rogoff, 'Growth in a Time of Debt,' American Economic Review, 2010">
          The relationship between government debt and real GDP growth is weak for debt/GDP ratios
          below a threshold of 90 percent of GDP. Above 90 percent, median growth rates fall by
          one percent, and average growth falls considerably more.
        </Blockquote>
        <P>
          The specific claim: for countries with debt-to-GDP above 90%, average GDP growth was
          negative — minus 0.1%. Below that threshold, growth was strong. The implication was
          clear: crossing 90% was an economic cliff edge. Governments approaching it needed to
          cut immediately.
        </P>
        <P>
          The paper was downloaded from the National Bureau of Economic Research over a million
          times. It circulated at the speed of a policy intervention because it confirmed what
          powerful people already wanted to do. Paul Ryan&rsquo;s 2013 federal budget — &ldquo;The Path to
          Prosperity&rdquo; — cited it explicitly: &ldquo;A well-known study completed by economists Ken
          Rogoff and Carmen Reinhart confirms this common-sense conclusion.&rdquo; His budget used the
          90% threshold as justification for rapid deficit reduction. Olli Rehn, the EU Commissioner
          for Economic Affairs who oversaw eurozone austerity requirements, cited it in speeches
          defending the conditions imposed on Greece, Ireland, Portugal, and Spain. George Osborne
          referenced it in a 2010 speech on the dangers of high public debt.
        </P>

        <H3 id="the-spreadsheet-error">The Spreadsheet Error</H3>
        <P>
          In 2013, Thomas Herndon, a graduate student at the University of Massachusetts Amherst,
          tried to replicate Reinhart and Rogoff&rsquo;s results as a class assignment. He could not.
          With his professors Michael Ash and Robert Pollin, he wrote up what he found in a
          working paper published by the Political Economy Research Institute in April 2013.{' '}
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
          There were three errors. The most consequential was a spreadsheet formula error: the
          cell range in Reinhart and Rogoff&rsquo;s Excel calculation averaged rows 30 to 44 instead of
          rows 30 to 49. This accidentally excluded five entire countries — Australia, Austria,
          Belgium, Canada, and Denmark — from the computation of average growth in the high-debt
          category. All five had high debt ratios and reasonable growth rates. Their exclusion
          significantly reduced the estimated average.
        </P>
        <P>
          There was also selective exclusion of early postwar years for New Zealand and other
          countries in which high debt coincided with strong growth, and an unconventional
          weighting method that gave each country equal influence regardless of how many years of
          data it provided — which gave outsized weight to small, unusual samples.
        </P>
        <P>
          When the errors were corrected, the −0.1% average growth figure for high-debt countries
          became +2.2%. The threshold effect — the cliff edge at 90% that had driven the entire
          policy argument — essentially disappeared. Growth was somewhat lower for high-debt
          countries than low-debt ones on the corrected data, but there was no dramatic negative
          break. Countries could, in fact, carry high debt and grow.
        </P>
        <P>
          Reinhart and Rogoff acknowledged the spreadsheet error. They disputed that it changed
          their core finding. By then, the paper had been used to justify cuts across three
          continents. The policies it had been cited to support did not change.
        </P>
      </ArticleSection>

      <ArticleSection>
        <H2 id="who-the-bailout-actually-bailed-out">Who the Bailout Actually Bailed Out</H2>
        <P>
          On May 2, 2010, the eurozone member states and the IMF agreed to lend Greece €110
          billion. The stated purpose was to rescue Greece from insolvency. The requirement was
          austerity: deep spending cuts, tax rises, privatization, and structural reforms embedded
          in a Memorandum of Understanding that Greece had to sign and implement to receive each
          tranche of funding.
        </P>

        <H3 id="what-the-conditions-specified">What the Conditions Specified</H3>
        <P>
          The 2010 Memorandum of Understanding, available on the European Commission&rsquo;s website,
          required fiscal adjustment of approximately 11% of GDP over 2010–2013. In practice, this
          meant:
        </P>
        <P>
          The 13th and 14th month salary payments to public servants — standard in Greek employment
          law — were abolished. Pensions were cut, then cut again; by 2015, they had been reduced
          eleven times. VAT was raised from 19% to 23%. The minimum wage was cut by 22% for adult
          workers and 32% for workers under 25. Collective bargaining was effectively suspended.
          Healthcare budgets were cut by over 40% between 2008 and 2014. A privatization target
          of €50 billion in state assets was set — a target that was never remotely met.
        </P>
        <P>
          The 2012 Memorandum, signed as part of a second bailout of €130 billion (alongside a
          €107 billion private sector debt restructuring, the largest sovereign debt restructuring
          in history), deepened all these conditions and added further benchmarks on labor law,
          deregulation, and fiscal governance. Greece signed. The conditions were implemented. The
          economy contracted.
        </P>

        <H3 id="who-held-the-debt">Who Held the Debt</H3>
        <P>
          The bailout&rsquo;s stated purpose was preventing Greek insolvency. But insolvency is not an
          abstract event — it is the non-payment of debts owed to specific creditors. To understand
          what was being prevented, you have to ask who held Greek sovereign debt.
        </P>
        <P>
          As of early 2010, based on Bank for International Settlements data and bank disclosures,
          the picture was this: BNP Paribas held approximately €5 billion in Greek government
          bonds. Société Générale held approximately €2.7 billion in Greek sovereign bonds.
          Crédit Agricole&rsquo;s total Greek exposure was estimated at over €27 billion, including its
          Greek subsidiary Emporiki Bank. Deutsche Bank held approximately €1.6 billion; Commerzbank
          approximately €3 billion. Total French banking sector exposure to Greece was estimated at
          €50–75 billion by analysts in 2010 — by far the largest of any major creditor nation.
        </P>
        <P>
          A 2013 analysis by the European School of Management and Technology (ESMT) found that
          approximately 77% of the €207 billion in loans disbursed to Greece through 2013 went to
          refinance maturing debt owed to private creditors, not to fund the Greek state. The
          European Central Bank had also purchased Greek bonds through its Securities Markets
          Programme, transferring exposure from private banks to the ECB — and ultimately to
          European taxpayers — before the 2012 private sector restructuring imposed losses on
          remaining private holders.
        </P>
        <P>
          The official narrative was rescuing Greece. The money flow shows what was actually being
          rescued: the lending portfolios of French and German banks, moved through the Greek state
          at the expense of Greek citizens. Those citizens did not borrow from BNP Paribas. The
          Greek state did, on their behalf, to service earlier debts and run a budget that had been
          built on optimistic projections and, in some cases, accounting that obscured the true
          deficit. When that structure collapsed in 2010, the question was who would bear the cost.
          The 2010 Memorandum answered it: Greek citizens first.
        </P>
      </ArticleSection>

      <ArticleSection>
        <H2 id="what-the-conditions-did">What the Conditions Did</H2>
        <P>
          Greek GDP fell approximately 25% between 2008 and 2013. No developed economy had
          contracted by that margin in peacetime since the 1930s. The IMF&rsquo;s own ex-post analysis
          later acknowledged the projections had been wrong.
        </P>
        <P>
          Unemployment stood at 7.7% in 2008. It reached 27.5% in September 2013. Youth
          unemployment — workers under 25 — reached 60.1% in July 2013. Average wages fell
          approximately 25–30% in real terms between 2009 and 2014.
        </P>
        <P>
          Healthcare budgets were cut by over 40%. Drug shortages became acute. When needle
          exchange programs were closed, HIV infections among intravenous drug users in Athens rose
          by 1,500% between 2010 and 2012, according to a study published in{' '}
          <em>The Lancet</em> in 2014.{' '}
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
          Suicides rose 35% between 2010 and 2012. Infant mortality rose 21% between 2008 and
          2011, linked to reduced antenatal care.
        </P>
        <P>
          The effects in the United Kingdom were less acute but documented across two decades. The
          Trussell Trust — the largest food bank network in Britain — distributed 61,468 emergency
          food parcels in 2010–11. By 2019–20 that figure was 1.9 million. The Marmot Review,
          published in February 2020 by the Institute of Health Equity, found that for the first
          time in at least 120 years, life expectancy in England had stalled. Women&rsquo;s life
          expectancy in the most deprived 10% of areas had fallen between 2010–12 and 2016–18.{' '}
          <span className="text-sm text-gray-400 not-italic">(Marmot et al.,{' '}
            <a
              href="https://www.instituteofhealthequity.org/resources-reports/marmot-review-10-years-on"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-gray-400 hover:decoration-gray-600"
            >
              <em>Health Equity in England: The Marmot Review 10 Years On</em>
            </a>
          , Institute of Health Equity, 2020)</span>
        </P>
        <P>
          Philip Alston, UN Special Rapporteur on Extreme Poverty and Human Rights, visited the
          United Kingdom in November 2018. His formal report, submitted to the UN Human Rights
          Council in April 2019, stated:{' '}
          <span className="text-sm text-gray-400 not-italic">(Alston,{' '}
            <a
              href="https://www.ohchr.org/en/documents/country-reports/ahrc4139add1-visit-united-kingdom-great-britain-and-northern-ireland"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-gray-400 hover:decoration-gray-600"
            >
              <em>Report of the Special Rapporteur on Extreme Poverty and Human Rights</em>
            </a>
          , United Nations, 2019)</span>
        </P>
        <Blockquote cite="Philip Alston, UN Special Rapporteur on Extreme Poverty and Human Rights, 2019">
          The imposition of austerity was an ideological project designed to radically reshape the
          relationship between the Government and the citizenry.
        </Blockquote>
        <P>
          Fourteen million people, Alston found — one-fifth of the UK population — lived in
          poverty. 1.5 million were destitute. Almost 60% of those in poverty were in families
          where someone worked.
        </P>
      </ArticleSection>

      <ArticleSection>
        <H2 id="the-institution-admitted-the-models-were-wrong">The Institution That Admitted the Models Were Wrong</H2>
        <P>
          In October 2012, the IMF&rsquo;s World Economic Outlook included a box titled &ldquo;Are We
          Underestimating Short-Term Fiscal Multipliers?&rdquo; The answer was yes. The forecasting
          models used to project the effects of fiscal consolidation had assumed multipliers of
          approximately 0.5 — meaning each unit of spending cuts was expected to reduce output by
          0.5 units. The actual multipliers found were in the range of 0.9 to 1.7.
        </P>
        <P>
          In January 2013, IMF Working Paper WP/13/1 extended this finding. Chief Economist
          Olivier Blanchard and Daniel Leigh analyzed forecasting errors across 28 advanced
          economies and found that the underestimation was systematic:
        </P>
        <Blockquote cite="Blanchard and Leigh, IMF Working Paper WP/13/1, January 2013">
          A natural interpretation is that fiscal multipliers were substantially higher than
          implicitly assumed by forecasters. Forecasters significantly underestimate the increase
          in unemployment and the decline in domestic demand associated with fiscal consolidation.
        </Blockquote>
        <P>
          The implication for Greece specifically: if the actual fiscal multiplier was 1.5 rather
          than 0.5, then every percentage point of GDP removed through spending cuts shrank the
          Greek economy by 1.5 percentage points. Because GDP was shrinking faster than the debt
          was being reduced, the debt-to-GDP ratio — the ratio that was being &ldquo;fixed&rdquo; — was
          getting worse, not better. The program was contractionary, and it was contractionary in
          exactly the way the IMF&rsquo;s own model should have predicted if the multiplier had been
          set correctly.
        </P>
        <P>
          In June 2016, three senior IMF research economists — Jonathan Ostry, Prakash Loungani,
          and Davide Furceri — published an article in the IMF&rsquo;s own magazine, <em>Finance &amp;
          Development</em>, under the title &ldquo;Neoliberalism: Oversold?&rdquo;{' '}
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
          Episodes of fiscal consolidation have been followed, on average, by drops rather than by
          expansions in output. A consolidation of 1 percent of GDP increases the long-term
          unemployment rate by 0.6 percentage point and raises by 1.5 percent within five years
          the Gini measure of income inequality.
        </Blockquote>
        <P>
          The IMF&rsquo;s Independent Evaluation Office, reviewing the 2010–2012 programs for Greece,
          Ireland, and Portugal in 2016, found that the 2010 Greek program had been approved
          despite IMF staff projections showing debt unsustainability. The standard criteria for
          exceptional access to IMF resources had been waived because of political pressure from
          European member states. The institution that had designed the conditions, enforced them,
          and collected debt service on them later documented in its own evaluation that the
          program had been approved for political rather than technical reasons.
        </P>
        <P>
          The economists who wrote those post-mortems were not renegades. They published in the
          IMF&rsquo;s own working paper series and the IMF&rsquo;s own magazine. The institution produced
          both the programs that caused the damage and the papers documenting that the models were
          wrong. Both outputs came from the same place, under the same mandate, serving the same
          member states. That is not a contradiction. It is a description of how the institution
          works: it serves multiple interests simultaneously, and when the interests of powerful
          creditor members diverge from the welfare of debtor populations, the record shows which
          wins.
        </P>
      </ArticleSection>

      <ArticleSection>
        <H2 id="faq">Common Questions</H2>
        <ArticleFAQ items={FAQ_ITEMS} />
      </ArticleSection>

      <ArticleFurtherReading title="Go Deeper" items={FURTHER_READING} />

      <ArticleCallout variant="dark" title="Responsible to Whom?">
        <p>
          The phrase &ldquo;fiscal responsibility&rdquo; appears in almost every austerity argument. It frames
          one particular hierarchy of obligations — pay creditors first, cut public services second —
          as the mature, responsible, adult position. But a hierarchy of obligations is a
          political choice, not an economic law.
        </p>
        <br />
        <p>
          The evidence used to justify the cuts was wrong. The institution that designed the
          programs published papers saying the models were wrong. Seventy-seven percent of the
          Greek bailout money went to private creditors, not to Greek citizens. The human costs —
          documented in Lancet studies, Marmot reviews, and UN rapporteur reports — fell on people
          who had no say in either the original lending or the response.
        </p>
        <br />
        <p>
          That breakdown does not end with austerity. It opens a question about every other concept
          that works by the same structure. &ldquo;Sustainable spending.&rdquo; &ldquo;Fiscal prudence.&rdquo;
          &ldquo;Structural reform.&rdquo; Each deploys the household budget metaphor to make a specific
          choice about whose claims get honored — and whose services get cut to honor them — look
          like the only responsible option available. The question to ask of each: responsible to
          whom? Sustainable for whom? By whose definition of prudence?
        </p>
      </ArticleCallout>

      <ArticleSources>
        <p>
          <strong>Primary sources:</strong> George Osborne, Emergency Budget speech, House of Commons,
          June 22, 2010; George Osborne, Conservative Party Conference speech, October 4, 2010;
          David Cameron, Conservative Party Spring Forum speech, April 26, 2009; European Commission,
          Memorandum of Understanding on Specific Economic Policy Conditionality, May 2010;
          European Commission, Second Economic Adjustment Programme for Greece, March 2012;
          Philip Alston, Report of the Special Rapporteur on Extreme Poverty and Human Rights
          (Visit to the United Kingdom), UN Human Rights Council, A/HRC/41/39/Add.1, April 2019.
        </p>
        <p>
          <strong>Research and analysis:</strong> Carmen M. Reinhart and Kenneth S. Rogoff,
          &ldquo;Growth in a Time of Debt,&rdquo; <em>American Economic Review</em>, Vol. 100, No. 2, May 2010
          (also NBER Working Paper No. 15639); Thomas Herndon, Michael Ash, and Robert Pollin,
          &ldquo;Does High Public Debt Consistently Stifle Economic Growth? A Critique of Reinhart
          and Rogoff,&rdquo; PERI Working Paper No. 322, University of Massachusetts Amherst, April
          2013 (also <em>Cambridge Journal of Economics</em>, Vol. 38, No. 2, 2014); Olivier Blanchard and
          Daniel Leigh, &ldquo;Growth Forecast Errors and Fiscal Multipliers,&rdquo; IMF Working Paper
          WP/13/1, January 2013 (also <em>American Economic Review: Papers and Proceedings</em>, Vol.
          103, No. 3, May 2013); Jonathan D. Ostry, Prakash Loungani, and Davide Furceri,
          &ldquo;Neoliberalism: Oversold?&rdquo; <em>Finance &amp; Development</em>, Vol. 53, No. 2, June 2016;
          IMF World Economic Outlook, October 2012, Box 1.1; IMF Independent Evaluation Office,
          &ldquo;The IMF and the Crises in Greece, Ireland, and Portugal,&rdquo; 2016; European School of
          Management and Technology (ESMT), analysis of Greek bailout fund flows, 2013; Alexander
          Kentikelenis et al., &ldquo;Greece&rsquo;s Health Crisis: From Austerity to Denialism,&rdquo;
          <em>The Lancet</em>, Vol. 383, No. 9918, February 2014; Michael Marmot et al.,
          <em>Health Equity in England: The Marmot Review 10 Years On</em>, Institute of Health
          Equity / Health Foundation, February 2020; Institute for Fiscal Studies, &ldquo;How Have
          English Councils&rsquo; Funding and Spending Changed? 2010 to 2024&rdquo;;
          Trussell Trust annual food bank statistics, 2010–2020; Bank for International Settlements,
          Quarterly Review, 2010.
        </p>
        <p>
          <strong>Further reading cited:</strong> John Maynard Keynes, <em>The General Theory of
          Employment, Interest and Money</em> (Macmillan, 1936); Mark Blyth, <em>Austerity:
          The History of a Dangerous Idea</em> (Oxford University Press, 2013); Naomi Klein,
          <em>The Shock Doctrine</em> (Metropolitan Books, 2007); Joseph Stiglitz,
          <em>Globalization and Its Discontents</em> (W.W. Norton, 2002).
        </p>
      </ArticleSources>
    </ArticleLayout>
  );
}
