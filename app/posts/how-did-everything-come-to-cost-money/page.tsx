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
  title: "How Did Everything Come to Cost Money? | Left Diary",
  description: "Every cost that doesn't feel like it should be there has a specific origin. A specific law. A specific date when something people had directly — land, seeds, healing knowledge, water — was converted into something that required a third party. The need didn't change. The direct access was removed.",
  keywords: [
    "how did everything come to cost money",
    "enclosure commons",
    "privatization of commons",
    "plant patents seed saving",
    "medical licensing history",
    "water privatization",
    "enclosure acts England",
    "commons and capitalism",
    "why does everything cost money",
    "history of privatization",
    "colonial land enclosure",
    "Cochabamba water war",
  ],
  openGraph: {
    title: "How Did Everything Come to Cost Money?",
    description: "Every cost that doesn't feel like it should be there has a specific origin — a specific law, a specific lobby, a specific date. The need didn't change. The direct access was removed.",
    images: [
      {
        url: 'https://leftdiary.com/images/cover_pages/how-did-everything-come-to-cost-money-cover.jpg',
        width: 1200,
        height: 630,
        alt: 'How Did Everything Come to Cost Money — Left Diary'
      }
    ],
    type: 'article',
    publishedTime: '2026-07-03',
    modifiedTime: '2026-07-03',
    authors: ['https://leftdiary.com/about'],
    section: 'Economics',
    tags: ['commons', 'enclosure', 'privatization', 'seeds', 'water', 'medicine', 'political economy'],
    siteName: 'Left Diary',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: "How Did Everything Come to Cost Money?",
    description: "Water. Seeds. Healing knowledge. The care of children. Each one had a commons. The commons was enclosed. The need stayed. What replaced the direct access was a price.",
    site: '@leftdiary',
    creator: '@leftdiary',
    images: ['https://leftdiary.com/images/cover_pages/how-did-everything-come-to-cost-money-cover.jpg'],
  },
  alternates: {
    canonical: 'https://leftdiary.com/posts/how-did-everything-come-to-cost-money'
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
      '@id': 'https://leftdiary.com/posts/how-did-everything-come-to-cost-money#article',
      'headline': 'How Did Everything Come to Cost Money?',
      'description': 'Every cost that doesn\'t feel like it should be there has a specific origin. A specific law, a specific lobby, a specific date when something people had directly was converted into something that required a third party. The need didn\'t change. The direct access was removed.',
      'image': [
        {
          '@type': 'ImageObject',
          'url': 'https://leftdiary.com/images/cover_pages/how-did-everything-come-to-cost-money-cover.jpg',
          'width': 1200,
          'height': 630
        }
      ],
      'datePublished': '2026-07-03T00:00:00+00:00',
      'dateModified': '2026-07-03T00:00:00+00:00',
      'author': { '@type': 'Organization', 'name': 'Left Diary', 'url': 'https://leftdiary.com' },
      'publisher': {
        '@type': 'Organization',
        'name': 'Left Diary',
        'url': 'https://leftdiary.com',
        'logo': { '@type': 'ImageObject', 'url': 'https://leftdiary.com/logo.png', 'width': 600, 'height': 60 }
      },
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': 'https://leftdiary.com/posts/how-did-everything-come-to-cost-money'
      },
      'keywords': 'enclosure commons, privatization, plant patents, water privatization, medical licensing, colonial land',
      'articleSection': 'Economics',
      'wordCount': 3000,
      'inLanguage': 'en-US',
      'isAccessibleForFree': true,
      'about': [
        { '@type': 'Thing', 'name': 'Enclosure' },
        { '@type': 'Thing', 'name': 'Commons' },
        { '@type': 'Thing', 'name': 'Privatization' },
        { '@type': 'Thing', 'name': 'Political Economy' }
      ]
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://leftdiary.com/posts/how-did-everything-come-to-cost-money#faq',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'What is a "commons"?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'A commons is anything a community uses together without anyone owning it individually — land that a village farmed collectively, rivers anyone drank from, healing knowledge that circulated between people, seeds saved from one harvest and shared with neighbors. Not a political ideology. Just: things people had direct access to, without needing anyone\'s permission, without going through any third party. Most of what humans needed for most of human history existed this way.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Isn\'t this just the natural development of civilization and trade?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Trade is willing exchange between people who choose to exchange. Enclosure is the opposite: removing the alternative to exchanging. When the English Enclosure Acts converted common land into private property, the people who had farmed it didn\'t choose to give up their access for something else. Their access was removed by law. The specific question is always: did people lose access to the commons through choice, or through legal action that left them no alternative?'
          }
        },
        {
          '@type': 'Question',
          'name': 'Did farmers always have to get seeds from somewhere?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Farmers saved seeds from their own harvest for replanting for the entire history of agriculture — roughly ten thousand years. Modern plant patent laws, introduced in the United States starting with the Plant Patent Act of 1930 and significantly expanded through the Plant Variety Protection Act of 1970 and the Supreme Court\'s 2001 ruling in J.E.M. Ag Supply v. Pioneer Hi-Bred, made it legally actionable for a corporation to sue a farmer for replanting seeds from a patented variety. The ancient practice was not seized by force. It was converted into infringement by a legal act.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Who benefits when a commons is enclosed?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Whoever controls access to what the commons used to provide directly. When land is enclosed, the landowner collects rent from people who used to farm it freely. When healing knowledge is put behind a licensing regime, licensed practitioners collect fees from people who used to get care from community knowledge. When seeds are patented, the patent holder collects from farmers who used to save their own. The mechanism consistently transfers a stream of income — from people who need the thing — to whoever now holds the legal claim over access to it.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Is anything still a commons?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Less and less. Public libraries are a commons — you use them without giving anything, without anyone checking whether you deserve access. Public parks. Public schools. Knowledge in the public domain. Open-source software. Each one is also a target: public libraries under funding pressure, parks subject to privatization proposals, public schools losing funding to private alternatives. The enclosure is not finished. It is ongoing.'
          }
        }
      ]
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://leftdiary.com/posts/how-did-everything-come-to-cost-money#breadcrumb',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://leftdiary.com' },
        { '@type': 'ListItem', 'position': 2, 'name': 'Posts', 'item': 'https://leftdiary.com/posts' },
        { '@type': 'ListItem', 'position': 3, 'name': 'How Did Everything Come to Cost Money?', 'item': 'https://leftdiary.com/posts/how-did-everything-come-to-cost-money' }
      ]
    }
  ]
};

const TOC_ITEMS: TOCItem[] = [
  { id: 'the-question', text: 'The Question', level: 2 },
  { id: 'what-people-had', text: 'What People Had', level: 2 },
  { id: 'the-two-moves', text: 'The Two Moves', level: 2 },
  { id: 'the-same-moves-everywhere', text: 'The Same Moves, Everywhere', level: 2 },
  { id: 'every-cost-has-an-origin', text: 'Every Cost Has an Origin', level: 2 },
  { id: 'faq', text: 'Common Questions', level: 2 },
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'What is a "commons"?',
    answer: (
      <>
        A commons is anything a community uses together without anyone owning it individually
        — land that a village farmed collectively, rivers anyone drank from, healing knowledge
        that circulated between people, seeds saved from one harvest and shared for the next.
        Not a political ideology. Just: things people had direct access to, without needing
        anyone&rsquo;s permission, without going through a third party. Most of what humans needed
        for most of human history existed this way.
      </>
    ),
  },
  {
    question: "Isn't this just the natural development of civilization and trade?",
    answer: (
      <>
        Trade is willing exchange between people who choose to exchange. Enclosure is the
        opposite: removing the alternative to exchanging. When the English Enclosure Acts
        converted common land into private property, the people who had farmed it for
        generations didn&rsquo;t choose to give up their access for something else. Their access
        was removed by law. The specific question is always: did people lose access to the
        commons through choice, or through legal action that left them no alternative?
      </>
    ),
  },
  {
    question: 'Did farmers always have to get seeds from somewhere?',
    answer: (
      <>
        Farmers saved seeds from their own harvest for replanting for the entire history of
        agriculture — roughly ten thousand years. Modern plant patent laws, introduced in the
        US with the Plant Patent Act of 1930 and significantly expanded through subsequent
        legislation and court decisions across the 20th century, gave corporations legal claims
        over specific plant varieties. A farmer who saved seeds from a patented crop and
        replanted them was now infringing on that claim. The ancient practice was not seized
        by force. It was converted into legal liability by a specific act.
      </>
    ),
  },
  {
    question: 'Who benefits when a commons is enclosed?',
    answer: (
      <>
        Whoever controls access to what the commons used to provide directly. When land is
        enclosed, the landowner collects rent from people who used to farm it freely. When
        healing knowledge is put behind a licensing regime, licensed practitioners collect from
        people who used to get care from community knowledge. When seeds are patented, the
        patent holder collects from farmers who used to save their own. The mechanism
        consistently moves a stream of income — from the people who need the thing — to
        whoever now holds the legal claim over access to it.
      </>
    ),
  },
  {
    question: 'Is anything still a commons?',
    answer: (
      <>
        Less and less. Public libraries are a commons — you walk in and use them without giving
        anything, without anyone checking whether you deserve access. Public parks. Public
        schools. Knowledge in the public domain. Open-source software. Each one is also a
        target: public libraries under funding pressure, parks subject to privatization
        proposals, public schools losing funding to private alternatives. The enclosure is
        not finished. It is ongoing.
      </>
    ),
  },
];

const FURTHER_READING: FurtherReadingItem[] = [
  {
    href: 'https://www.penguinrandomhouse.com/books/286/caliban-and-the-witch-by-silvia-federici/',
    title: 'Caliban and the Witch — Silvia Federici (2004)',
    description: "Traces the enclosure of common land, the destruction of communal life, and the simultaneous suppression of women's healing knowledge in early modern Europe. The original accumulation was also an enclosure of bodies.",
    external: true,
  },
  {
    href: 'https://www.amazon.com/Great-Transformation-Political-Economic-Origins/dp/080705643X',
    title: 'The Great Transformation — Karl Polanyi (1944)',
    description: "The foundational argument that land, labor, and money are 'fictitious commodities' — things treated as market goods that were never originally produced for sale. The market didn't emerge naturally; it was constructed through specific legal acts.",
    external: true,
  },
  {
    href: '/posts/why-did-colonizers-tax-africans',
    title: 'Why Did Colonizers Tax Africans?',
    description: 'The hut tax is enclosure by another instrument: not removing something people had, but creating a requirement that could only be met through the colonial economy. The two moves, run in a different order.',
  },
  {
    href: '/posts/what-is-austerity',
    title: 'What Is Austerity?',
    description: 'Austerity is enclosure happening right now: public services — things people could access without going through anyone — converted into private debt. The mechanism is identical.',
  },
  {
    href: '/posts/how-did-people-survive-before-capitalism',
    title: 'How Did People Survive Before Capitalism?',
    description: 'The commons the enclosures destroyed were not primitive or insufficient. They were functional. This is what they actually looked like.',
  },
];

export default function HowDidEverythingComeToCostMoneyPage() {
  return (
    <ArticleLayout jsonLd={jsonLd}>
      <ArticleHeader
        categories={['Economics', 'History']}
        title="How Did Everything Come to Cost Money?"
        lead={
          <>
            Every cost that doesn&rsquo;t feel like it should be there has a specific origin. A
            specific law. A specific date when something people had directly — land, water,
            seeds, the knowledge to heal — was converted into something that required going
            through a third party. The need didn&rsquo;t change. The direct access was removed.
          </>
        }
        date="July 3, 2026"
        dateTime="2026-07-03"
        readingTime="13 min read"
      />

      <ArticleTOC items={TOC_ITEMS} />

      <ArticleSection id="the-question">
        <H2 id="the-question">The Question</H2>
        <P>
          &ldquo;How did everything come to cost money?&rdquo;
        </P>
        <P>
          It sounds like a child&rsquo;s question. The kind that gets a vague answer — &ldquo;that&rsquo;s
          just how things work&rdquo; — because the adult being asked has stopped wondering about
          it themselves. But it&rsquo;s not childish. It&rsquo;s the right question. And it has a
          specific answer.
        </P>
        <P>
          Everything that requires going through a third party today — water running through
          a pipe, a seed planted in the ground, the knowledge to heal a person, the care of
          a child — was available directly, without going through anyone, for most of human
          history. Each one stopped being available that way on a specific date, through a
          specific legal act, to serve a specific set of interests. None of it was inevitable.
          None of it was natural. Each one was a decision.
        </P>
        <P>
          Here is how that decision kept getting made.
        </P>
      </ArticleSection>

      <ArticleSection id="what-people-had">
        <H2 id="what-people-had">What People Had</H2>
        <P>
          Before the mechanism: a description of what existed before it ran. Not a romantic
          past. Just what was there.
        </P>
        <P>
          Land was used collectively. Communities farmed it, grazed animals on it, gathered
          from it. No individual owned it in the sense we mean now. Rivers and aquifers were
          used directly — you went to them. Healing knowledge — which plants addressed which
          conditions, how to assist a birth, how to set a bone — was held by people within
          communities and passed between them. Seeds from this year&rsquo;s harvest became next
          year&rsquo;s crop. Children were raised by the people who happened to be around: neighbors,
          extended family, the community itself.
        </P>
        <P>
          None of this required anyone&rsquo;s permission. None of it required going through a
          third party who would grant access in exchange for something. People had direct
          access to what they needed.
        </P>
        <P>
          The word for this arrangement is &ldquo;commons.&rdquo; Not a political ideology. Just:
          things people had together, that no individual owned, that were available to anyone
          who needed them.
        </P>
      </ArticleSection>

      <ArticleSection id="the-two-moves">
        <H2 id="the-two-moves">The Two Moves</H2>
        <P>
          Here is what happened to the commons. Not all at once, and not in one place. But
          the same sequence kept appearing, with different instruments, in different centuries.
          Two moves, always in this order.
        </P>
        <P>
          Consider what the British found when they arrived in Southern and East Africa in
          the 19th century.{' '}
          <Link href="/posts/why-did-colonizers-tax-africans" className="underline decoration-gray-400 hover:decoration-gray-600">
            Communities with land that fed them, water they used directly, knowledge and
            structures that sustained them — everything required to live without entering
            any exchange with the British at all.
          </Link>{' '}
          The British needed bodies in mines and on farms. The problem: people who had
          everything they needed had no reason to enter a mine.
        </P>
        <P>
          The first move: create a requirement. Each household was made to owe a fixed sum —
          in British pounds — every year. British pounds were available from exactly one
          source: British employers. So people went to work long enough to obtain the required
          sum and returned to their lives. A partial obligation, but not yet control. The exit
          still existed. The land, the water, the community — all still there.
        </P>
        <P>
          So the second move: close the exit.
        </P>
        <P>
          Through a series of legal acts, most land was reclassified as Crown Land — belonging
          to the colonial government, available to white settlers. Africans were moved into
          designated areas called reserves, deliberately sized too small to grow a family&rsquo;s
          food on. The thing that had made the first move manageable — the life you could
          return to — was removed by law. Not through violence alone, though violence was
          present. Through the reclassification of what belonged to whom.
        </P>
        <P>
          The alternative to entering the colonial economy was no longer a life on one&rsquo;s
          own land. It was slow starvation on a reserve. The obligation was now total.
        </P>
        <P>
          The British did not invent these two moves in Africa. They had already run them at
          home, over three centuries.
        </P>
        <P>
          Beginning in the 16th century, the English Parliament passed hundreds of individual
          Enclosure Acts — each one converting a specific piece of common land into private
          property. The people who had farmed and grazed and gathered from it for generations
          had no legal recourse. They were not offered a trade. The access was simply removed.
          By the time the wave of enclosures had finished in the early 19th century, roughly
          a quarter of all cultivated land in England had been converted from commons to
          private ownership.
        </P>
        <P>
          This is where the industrial labor force came from. Not from people who chose factory
          work. From people who no longer had an alternative. The factory could set whatever
          conditions it wanted — hours, wages, safety — because the alternative to the factory
          was not a life on common land. It was nothing.
        </P>
        <P>
          Two moves. First: create a requirement that can only be met one way. Second: remove
          every other way of meeting your needs. After both moves, you are no longer a person
          with options. Whoever controls that one channel is between you and everything.
        </P>
      </ArticleSection>

      <ArticleSection id="the-same-moves-everywhere">
        <H2 id="the-same-moves-everywhere">The Same Moves, Everywhere</H2>
        <P>
          Once you see the sequence, you see it everywhere.
        </P>
        <P>
          <strong>Seeds.</strong> For the entire history of agriculture — roughly ten thousand
          years — a farmer&rsquo;s harvest included what they would plant the following year. You
          kept the seeds. You planted them. You shared them with neighbors. No third party
          involved. Then, through a series of expansions to patent law across the 20th century,
          corporations gained the ability to hold legal claims over specific plant varieties.
          A farmer who saved seeds from a patented crop and replanted them was now infringing
          on a legal claim. The practice that had sustained agriculture for all of human history
          became, for the covered varieties, a legal liability. To plant: obtain seeds from
          the corporation. Every year. The ancient alternative was not seized by force. It was
          converted into infringement by law.
        </P>
        <P>
          <strong>Healing knowledge.</strong> Knowledge about which plants addressed which
          conditions, how to assist a difficult birth, how to treat a wound — circulated in
          communities for most of human history, primarily among women. It was not owned. It
          was not behind a credential. You learned it from someone who knew it. In the late
          19th and early 20th centuries, medical licensing laws were systematically introduced
          across the United States. To use this knowledge legally — to practice medicine —
          you required certification from an accredited institution. The knowledge itself was
          not destroyed. What changed was who was legally permitted to use it. The midwife,
          the herbalist, the community healer — all became, by law, people you were not
          permitted to consult for medical care. The alternative was closed. The licensed
          practitioner became the only legal access point to what had been common knowledge.
        </P>
        <P>
          <strong>Water.</strong> Water that falls from the sky, runs through rivers, sits in
          aquifers — humans used it directly for the entire existence of the species. The
          conversion of water into something requiring a third party is incomplete but ongoing.
          In 2000, in Cochabamba, Bolivia, a corporation was granted exclusive rights to the
          city&rsquo;s water supply — including water in community wells that had existed for
          generations — and raised rates until residents who had nothing else could not obtain
          enough to survive. The city rose up. The contract was eventually cancelled. But the
          attempt shows exactly what the two moves look like applied to water: establish the
          legal claim, remove the alternatives. In some US states today, collecting rainwater
          that falls on your own roof requires a permit.
        </P>
        <P>
          <strong>Care.</strong> Communities raised children. Extended families, neighbors,
          the web of people around a family — this was not supplemental to child-rearing, it
          was child-rearing. That web was not dismantled by a single law. It was dismantled
          by the accumulation of all the other enclosures: land enclosure forced people into
          cities and away from communities they had grown up in; industrial work schedules
          made mutual care between neighbors impossible; the conversion of the household into
          a unit that needed to obtain tokens to survive turned care from a community function
          into either unpaid labor extracted from women, or a service you hired — which
          required tokens, which required employment. The need for care didn&rsquo;t change.
          The commons that had met it was made structurally impossible. What replaced it
          was the market.
        </P>
      </ArticleSection>

      <ArticleSection id="every-cost-has-an-origin">
        <H2 id="every-cost-has-an-origin">Every Cost Has an Origin</H2>
        <P>
          Here is what all of this adds up to.
        </P>
        <P>
          Every cost that doesn&rsquo;t feel like it should be there — every moment of &ldquo;why does
          this require me to give something to get it?&rdquo; — is not a mystery. There is a specific
          legal act. A specific set of interests that lobbied for it. A specific date it
          took effect. A specific set of interests it served.
        </P>
        <P>
          The water that runs through your pipes was a river or aquifer nobody owned. The seed
          in the packet was someone&rsquo;s harvest. The certification your job requires represents
          knowledge that circulated in communities. The childcare you hire represents care that
          was once the work of a neighborhood. None of it became a transaction because of some
          law of nature. Each had a commons. The commons was enclosed — converted from something
          people had together into something held by an entity that could grant or deny access.
          The need stayed. The direct access was removed. What replaced it was the requirement.
        </P>
        <P>
          And the mechanism was always the same two moves: first, create a requirement that
          can only be met one way; second, remove every alternative way of meeting your needs.
          After both moves, whoever controls the requirement is between you and everything.
        </P>
        <P>
          <Link href="/posts/what-is-austerity" className="underline decoration-gray-400 hover:decoration-gray-600">
            The same two moves are being made right now
          </Link>
          {' '}in every budget that eliminates a public service and leaves the need intact.
          The public university is defunded; the need for education remains; a bank moves
          between you and it, with terms. The hospital is privatized; the need for care
          remains; an insurance company moves between you and it, with terms. The enclosure
          did not end. It changed instruments.
        </P>
      </ArticleSection>

      <ArticleSection id="faq">
        <H2 id="faq">Common Questions</H2>
        <ArticleFAQ items={FAQ_ITEMS} />
      </ArticleSection>

      <ArticleFurtherReading title="Go Deeper" items={FURTHER_READING} />

      <ArticleCallout variant="dark" title="What Is Still Being Enclosed">
        <p>
          The two moves don&rsquo;t stop at the things already named.
        </p>
        <br />
        <p>
          Academic knowledge — research produced at universities, often funded by public money
          — is held behind journal paywalls. To read the results of publicly funded research,
          you must give something to a private publisher. The knowledge was produced in common.
          The access was enclosed.
        </p>
        <br />
        <p>
          The town square, the community notice board, the public place where people gathered
          and shared information — that was a commons. The platform that now mediates most
          of public communication is privately owned. What you see is determined by what
          serves the owner&rsquo;s interests. The commons of public conversation was enclosed.
          What replaced it is an algorithm.
        </p>
        <br />
        <p>
          Genetic sequences — which no corporation created, which existed long before
          corporations did — are being converted into legal claims that can be held and
          enforced. The alternative: accessing information about your own biology through
          open channels. That alternative is being foreclosed.
        </p>
        <br />
        <p>
          The two moves are always available. The only question is: what commons is still
          intact? And who is looking at it?
        </p>
      </ArticleCallout>

      <ArticleSources>
        <p>
          <strong>On the English Enclosure Acts:</strong> J.L. and Barbara Hammond,
          <em> The Village Labourer, 1760–1832</em> (1911); E.P. Thompson,{' '}
          <em>The Making of the English Working Class</em> (1963); Robert C. Allen,{' '}
          <em>Enclosure and the Yeoman</em> (1992). On scale: roughly 5,200 individual
          Enclosure Acts passed by Parliament between 1604 and 1914, enclosing approximately
          6.8 million acres.
        </p>
        <p>
          <strong>On colonial land enclosure in Africa:</strong> Mahmood Mamdani,{' '}
          <em>Citizen and Subject: Contemporary Africa and the Legacy of Late Colonialism</em>{' '}
          (1996); Brett Shadle, <em>The Souls of White Folk: White Settlers in Kenya,
          1900s–1920s</em> (2015); on Southern Rhodesia specifically, the Land Apportionment
          Act of 1930 reserved 49% of land for white settlers (then roughly 50,000 people)
          while confining the African population (then roughly 1 million) to Native Reserves.
        </p>
        <p>
          <strong>On plant patents:</strong> Plant Patent Act, US, 1930; Plant Variety
          Protection Act, US, 1970; <em>Diamond v. Chakrabarty</em>, US Supreme Court, 1980
          (living organisms can be patented); <em>J.E.M. Ag Supply v. Pioneer Hi-Bred</em>,
          US Supreme Court, 2001 (utility patents apply to plant varieties). Jack Kloppenburg,{' '}
          <em>First the Seed: The Political Economy of Plant Biotechnology</em> (1988, 2nd ed.
          2004).
        </p>
        <p>
          <strong>On medical licensing:</strong> Paul Starr,{' '}
          <em>The Social Transformation of American Medicine</em> (1982) — documents the
          AMA&rsquo;s role in lobbying for licensing requirements from the 1900s onward, the closure
          of competing schools of healing, and the conversion of medicine from a distributed
          practice to a credentialed profession. Barbara Ehrenreich and Deirdre English,{' '}
          <em>Witches, Midwives, and Nurses: A History of Women Healers</em> (1973).
        </p>
        <p>
          <strong>On the Cochabamba water war:</strong> Jim Schultz and Melissa Draper (eds.),{' '}
          <em>Dignity and Defiance: Stories from Bolivia&rsquo;s Challenge to Globalization</em>{' '}
          (2008); Oscar Olivera, <em>Cochabamba! Water War in Bolivia</em> (2004). The
          corporation involved was Aguas del Tunari, a subsidiary of the Bechtel Corporation.
          The Bolivian government cancelled the contract in April 2000 following mass protests
          in which at least one person was killed by security forces.
        </p>
      </ArticleSources>
    </ArticleLayout>
  );
}
