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
  P, H2,
} from '@/components/article';
import type { TOCItem, FAQItem, FurtherReadingItem } from '@/components/article';

export const metadata: Metadata = {
  title: 'What Is Money: Part 4 | Left Diary',
  description: "The charter that created the Bank of England didn't just let merchants manage a King's debt. It gave them money that demands more money back, permanently, at national scale — and money like that cannot sit still. Within a lifetime, the same financial engine that fenced English commons had fenced an entire subcontinent.",
  keywords: [
    'East India Company Bank of England',
    'Battle of Plassey explained',
    'Permanent Settlement of Bengal 1793',
    'why did the East India Company conquer Bengal',
    'history of colonialism and money',
    'Robert Clive Mir Jafar',
    'zamindars permanent settlement history',
    'Adam Smith Wealth of Nations 1776',
    'financial revolution England history',
    'history of money part 4'
  ],
  openGraph: {
    title: 'What Is Money: Part 4',
    description: "Money that demands more money back cannot sit still. Within a single lifetime, the financial engine that fenced English commons had fenced an entire subcontinent, through the same mechanism, run by the same class of men.",
    type: 'article',
    publishedTime: '2026-08-01',
    modifiedTime: '2026-08-01',
    authors: ['https://leftdiary.com/about'],
    section: 'Economics',
    tags: ['money', 'colonialism', 'East India Company', 'Bengal', 'history'],
    siteName: 'Left Diary',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Is Money: Part 4',
    description: "Money that demands more money back cannot sit still. Within a lifetime, the engine that fenced English commons had fenced an entire subcontinent.",
    site: '@leftdiary',
    creator: '@leftdiary',
  },
  alternates: {
    canonical: 'https://leftdiary.com/posts/how-did-interest-lead-to-the-conquest-of-bengal'
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
      '@id': 'https://leftdiary.com/posts/how-did-interest-lead-to-the-conquest-of-bengal#article',
      'headline': 'What Is Money: Part 4',
      'description': "The charter that created the Bank of England didn't just let merchants manage a King's debt. It gave them money that demands more money back, permanently, at national scale — and money like that cannot sit still. Within a lifetime, the same financial engine that fenced English commons had fenced an entire subcontinent.",
      'image': [
        {
          '@type': 'ImageObject',
          'url': 'https://leftdiary.com/posts/how-did-interest-lead-to-the-conquest-of-bengal/opengraph-image',
          'width': 1200,
          'height': 630
        }
      ],
      'datePublished': '2026-08-01T00:00:00+00:00',
      'dateModified': '2026-08-01T00:00:00+00:00',
      'author': { '@type': 'Organization', 'name': 'Left Diary', 'url': 'https://leftdiary.com' },
      'publisher': {
        '@type': 'Organization',
        'name': 'Left Diary',
        'url': 'https://leftdiary.com',
        'logo': { '@type': 'ImageObject', 'url': 'https://leftdiary.com/logo.png', 'width': 600, 'height': 60 }
      },
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': 'https://leftdiary.com/posts/how-did-interest-lead-to-the-conquest-of-bengal'
      },
      'keywords': 'East India Company, Battle of Plassey, Permanent Settlement of Bengal, Adam Smith, financial revolution',
      'articleSection': 'Economics',
      'wordCount': 2700,
      'inLanguage': 'en-US',
      'isAccessibleForFree': true,
      'about': [
        { '@type': 'Thing', 'name': 'East India Company' },
        { '@type': 'Thing', 'name': 'Battle of Plassey' },
        { '@type': 'Thing', 'name': 'Permanent Settlement of Bengal' },
        { '@type': 'Thing', 'name': 'Adam Smith' }
      ]
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://leftdiary.com/posts/how-did-interest-lead-to-the-conquest-of-bengal#breadcrumb',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://leftdiary.com' },
        { '@type': 'ListItem', 'position': 2, 'name': 'Posts', 'item': 'https://leftdiary.com/posts' },
        { '@type': 'ListItem', 'position': 3, 'name': 'What Is Money: Part 4', 'item': 'https://leftdiary.com/posts/how-did-interest-lead-to-the-conquest-of-bengal' }
      ]
    }
  ]
};

const TOC_ITEMS: TOCItem[] = [
  { id: 'the-question-i-left-you-with', text: 'The Question I Left You With', level: 2 },
  { id: 'money-that-cannot-stand-still', text: 'Money That Cannot Stand Still', level: 2 },
  { id: 'the-company-that-became-a-government', text: 'The Company That Became a Government', level: 2 },
  { id: 'the-same-fence-far-larger', text: 'The Same Fence, Far Larger', level: 2 },
  { id: 'two-fences-at-once', text: 'Two Fences, at Once', level: 2 },
  { id: 'a-name-for-the-machine', text: 'A Name for the Machine', level: 2 },
  { id: 'nobody-agreed-to-any-of-this', text: 'Nobody Agreed to Any of This', level: 2 },
  { id: 'faq', text: 'Frequently Asked Questions', level: 2 },
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Why does interest-bearing money need to keep growing?',
    answer: (
      <>
        When a lender creates £100 and demands back £110, only the £100 is actually created. The
        extra £10 does not exist anywhere until someone, somewhere, borrows new money into
        existence to produce it. Multiply this across an entire financial system and it becomes a
        structural fact: a money supply built on interest cannot stay the same size. It must keep
        expanding, or debts across the system start becoming unpayable.
      </>
    ),
  },
  {
    question: 'What was the Battle of Plassey?',
    answer: (
      <>
        Fought on 23 June 1757 between the East India Company, led by Robert Clive, and Siraj
        ud-Daulah, the ruler of Bengal. Despite being outnumbered roughly fifteen to one, Clive
        won by bribing the Nawab&rsquo;s own commander-in-chief, Mir Jafar, to hold his forces back
        during the battle in exchange for being installed as the new ruler. It marked the Company&rsquo;s
        shift from a trading firm into a territorial ruling power, and is widely treated by
        historians as the start of British rule in India.
      </>
    ),
  },
  {
    question: 'What was the Permanent Settlement of Bengal?',
    answer: (
      <>
        A 1793 law under Governor-General Lord Cornwallis that converted zamindars, who had
        previously been tax collectors, into hereditary private landowners over land millions of
        cultivators depended on. A &ldquo;sunset law&rdquo; required the fixed revenue to be paid by a set
        date or the estate was seized and auctioned; nearly 45 percent of Bengal&rsquo;s landed estates
        changed hands this way between 1794 and 1807. Peasants lost customary rights to grazing,
        fuel, and forest produce, the same categories of right destroyed by enclosure in England.
      </>
    ),
  },
  {
    question: 'What is the "Financial Revolution" historians refer to in this period?',
    answer: (
      <>
        A term used by historians, most notably P.G.M. Dickson in his 1967 study of the same
        name, for the rapid development of English public credit, government debt markets, and
        joint-stock company finance between 1688 and 1756, roughly bookended by the Glorious
        Revolution and the Seven Years&rsquo; War. The Bank of England&rsquo;s founding and the explosive
        growth of the East India Company&rsquo;s capital both belong to this same financial
        infrastructure and the same decades.
      </>
    ),
  },
];

const FURTHER_READING: FurtherReadingItem[] = [
  {
    href: 'https://medium.com/@ajejey/what-is-money-a-naive-persons-guide-to-money-3a13f7aad5b4',
    title: 'What Is Money: Part 1',
    description: 'where this series started: the king, the coin, and the tax that invented the market',
    external: true,
  },
  {
    href: '/posts/why-didnt-people-just-refuse-to-use-money',
    title: 'What Is Money: Part 2',
    description: 'the commons enclosed, and the goldsmiths who first created money from nothing',
  },
  {
    href: '/posts/how-did-the-king-lose-the-power-to-make-money',
    title: 'What Is Money: Part 3',
    description: 'the 1694 deal that gave a private institution the permanent power to create money',
  },
  {
    href: '/posts/why-did-colonizers-tax-africans',
    title: 'Why Did Colonizers Tax Africans?',
    description: 'the same coin-and-tax trick, run on an entire continent, within living memory',
  },
];

export default function HowDidInterestLeadToTheConquestOfBengalPage() {
  return (
    <ArticleLayout jsonLd={jsonLd}>
      <ArticleHeader
        categories={['Economics', 'History', 'Colonialism', 'Money']}
        title="What Is Money: Part 4"
        lead={
          <>
            <Link
              href="/posts/how-did-the-king-lose-the-power-to-make-money"
              className="underline decoration-gray-400 hover:decoration-gray-700"
            >
              Last time
            </Link>
            , a room full of London merchants secured the permanent, legal power to create
            money, in exchange for a war loan. I told you that money couldn&rsquo;t sit still. This
            is where it went looking, and what it did when it got there.
          </>
        }
        date="August 1, 2026"
        dateTime="2026-08-01"
        readingTime="13 min read"
      />

      <ArticleTOC items={TOC_ITEMS} />

      <ArticleSection id="the-question-i-left-you-with">
        <H2 id="the-question-i-left-you-with">The Question I Left You With</H2>
        <P>
          The 1694 charter gave a group of merchants the legal right to create money, forever.
          Not a one-time payout. A permanent, self-renewing supply, lent out at interest, over and
          over. I asked you to notice what kind of money that actually is: money that demands more
          money back than was created, which means it can never simply sit in a vault and stay the
          same size. It has to keep finding somewhere new to grow.
        </P>
        <P>
          England is a small island. By the early 1700s, its fields were already filling up with
          fences. So where did a pile of money that has to keep expanding go looking next?
        </P>
      </ArticleSection>

      <ArticleSection id="money-that-cannot-stand-still">
        <H2 id="money-that-cannot-stand-still">Money That Cannot Stand Still</H2>
        <P>
          Say a bank creates &pound;100 and lends it to you, on the condition that you pay back
          &pound;110. The bank has created the &pound;100. It has not created the extra &pound;10. That &pound;10 does
          not exist anywhere in the world yet. For you to ever actually pay it, someone,
          somewhere, has to borrow new money into existence, so that the total amount of money in
          circulation is large enough for your &pound;10 to be part of it.
        </P>
        <P>
          Multiply that single loan across an entire financial system, and it stops being a
          curiosity and becomes a structural fact: a money supply built this way cannot stay the
          same size. It has to keep growing, loan by loan, or debts across the system start
          becoming impossible to pay, all at once. This is a real argument among economists, not a
          settled one; economists like Michael Hudson and ecological economists such as Herman
          Daly have argued it directly, while mainstream economics generally explains growth
          through productivity and innovation instead. I raise it here because, whichever
          explanation you find more convincing, what happened next in England is not in dispute.
        </P>
        <P>
          By the early 1700s, London had a pile of money, freshly organized around a permanent
          charter to keep creating more of it, and a small island&rsquo;s worth of land already being
          fenced. Growth needs somewhere to go. It went abroad.
        </P>
      </ArticleSection>

      <ArticleSection id="the-company-that-became-a-government">
        <H2 id="the-company-that-became-a-government">The Company That Became a Government</H2>
        <P>
          The East India Company had existed since 1600, trading spices and cloth, one ship at a
          time. But its explosive growth in power runs through exactly the same decades as the
          Bank of England&rsquo;s founding, financed by the same new London infrastructure: government
          debt markets, joint-stock shares, marine insurance, all developing together. Historians
          have a name for this stretch of English history, 1688 to roughly 1756: the{' '}
          <strong>Financial Revolution</strong>.{' '}
          <span className="text-sm text-gray-400 not-italic">
            (Dickson, <em>The Financial Revolution in England</em>, 1967)
          </span>{' '}
          The Bank of England and the Company&rsquo;s vastly expanded capital both belong to this same
          machinery, the same years, the same city.
        </P>
        <P>
          On 23 June 1757, that capital bought Bengal, and it barely needed an army to do it. At
          the Battle of Plassey, the Company&rsquo;s roughly 3,000 men faced Siraj ud-Daulah&rsquo;s army of
          around 50,000. Robert Clive won anyway, because he had already bribed Mir Jafar, the
          Nawab&rsquo;s own commander-in-chief, to hold his forces back during the fighting, in exchange
          for being installed as the new ruler afterward.{' '}
          <span className="text-sm text-gray-400 not-italic">
            (Battle of Plassey, 23 June 1757)
          </span>{' '}
          Siraj ud-Daulah was killed. Mir Jafar took the throne, backed by Company guns. It was a
          political purchase dressed as a battle, and it marks the moment the East India Company
          stopped being a trading firm and became the ruling power over one of the richest regions
          on Earth.
        </P>
      </ArticleSection>

      <ArticleSection id="the-same-fence-far-larger">
        <H2 id="the-same-fence-far-larger">The Same Fence, Far Larger</H2>
        <P>
          Once the Company ruled Bengal, it needed a way to collect revenue from it, reliably,
          every year. In 1793, Governor-General Lord Cornwallis signed the{' '}
          <strong>Permanent Settlement</strong>. Before this law, zamindars were tax collectors,
          local officials who gathered revenue on behalf of whoever ruled the region. The
          Permanent Settlement made them something entirely different: hereditary private owners
          of the land itself, in exchange for a fixed, unchangeable annual payment to the Company.{' '}
          <span className="text-sm text-gray-400 not-italic">
            (Permanent Settlement, 1793)
          </span>
        </P>
        <P>
          A &ldquo;sunset law&rdquo; backed this up: if a zamindar failed to pay the full amount by a set
          date, the estate was seized and auctioned to the highest bidder, no exceptions. The
          demands were set so high that nearly 45 percent of Bengal&rsquo;s landed estates changed hands
          this way between 1794 and 1807 alone, mostly bought up by Calcutta merchants and
          moneylenders who had never farmed a field in their lives.
        </P>
        <P>
          And underneath the zamindars were the actual cultivators, the ryots, who had held
          customary rights to the land for generations. The Permanent Settlement extinguished
          those rights in a single stroke: no fixed leases, no protection from eviction, no
          guaranteed share of what they grew. The rights specifically destroyed included grazing,
          fuel, and forest produce. If those words sound familiar, they should: they are the exact
          same rights, estovers, pannage, common pasture, that English enclosure destroyed on the
          other side of the world, in the same decades, through a different piece of paper.
        </P>
      </ArticleSection>

      <ArticleSection id="two-fences-at-once">
        <H2 id="two-fences-at-once">Two Fences, at Once</H2>
        <P>
          Put the dates next to each other and stop treating them as two separate stories.
          Parliamentary enclosure in England was accelerating through these exact same decades,
          most of the 5,200 Acts you already know about from earlier in this series were passed
          after 1694, many of them in the same years the East India Company was converting
          Bengal&rsquo;s tax collectors into landlords. Two pieces of land, two continents apart, fenced
          by two different legal instruments, in the same stretch of history, by men who moved in
          the same London rooms, invested in the same companies, sat in the same Parliament.
        </P>
        <P>
          This is not a coincidence you need me to argue you into. It is what money that demands
          more money back actually does, once it exists at national scale and has nowhere left at
          home to grow. It goes wherever there is still land, or people, or a customary right, left
          to convert into something that can be owned, taxed, and sold.
        </P>
      </ArticleSection>

      <ArticleSection id="a-name-for-the-machine">
        <H2 id="a-name-for-the-machine">A Name for the Machine</H2>
        <P>
          On 9 March 1776, Adam Smith published <em>An Inquiry into the Nature and Causes of the
          Wealth of Nations</em>. It gave everything I&rsquo;ve just described a vocabulary, and a
          defense: self-interest, pursued freely, supposedly guided by an &ldquo;invisible hand&rdquo;
          toward outcomes that benefit everyone. Land, labor, and money, all treated as things
          that naturally belong on a market, because a market is simply what free people do.{' '}
          <span className="text-sm text-gray-400 not-italic">
            (Smith, <em>The Wealth of Nations</em>, 1776)
          </span>
        </P>
        <P>
          Notice what that vocabulary quietly does. It describes enclosure, the Permanent
          Settlement, and Plassey itself as the natural unfolding of free exchange, rather than as
          what the rest of this series has shown you they actually were: specific, documented,
          legal acts, carried out by specific people, against people who never agreed to any of
          it. This is the same move Part 1 caught in the word &ldquo;inflation&rdquo; and Part 3 caught in
          the phrase &ldquo;national debt.&rdquo; A specific choice, made by specific people, gets a name that
          makes it sound like weather.
        </P>
        <P>
          Smith&rsquo;s book arrived four months before Britain&rsquo;s American colonies declared their
          independence, in July of that same year, over a list of grievances that included taxes
          set without consent and trade forced through a single controlling power. I&rsquo;m not going
          to resolve that crack in the story right now. I just want you to notice it&rsquo;s there: the
          same year the machine got its philosophical defense, part of it was already breaking
          apart from the inside.
        </P>
      </ArticleSection>

      <ArticleSection id="nobody-agreed-to-any-of-this">
        <H2 id="nobody-agreed-to-any-of-this">Nobody Agreed to Any of This</H2>
        <P>
          No English commoner voted for enclosure. No Bengali cultivator voted for the Permanent
          Settlement. No one in either place was ever offered a real choice between the world they
          had and the one that replaced it. Both were built the same way: a small number of people
          who already held power, writing a law or signing a charter, and calling what came next
          natural, inevitable, or simply progress.
        </P>
        <P>
          This is also the point where this series stops being a story about England specifically.
          The mechanism that fenced English commons is the same mechanism that fenced Bengal, and
          it did not stop there. The same coin-and-tax trick from the very first part of this
          series reappeared in colonial Africa, documented, in living memory, not ancient
          history.{' '}
          <Link
            href="/posts/why-did-colonizers-tax-africans"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            I&rsquo;ve written separately about the hut tax
          </Link>{' '}
          Britain imposed on East Africa in the 1890s, a different instrument, the same purpose.
          Money that has to keep growing does not stay home, and it does not stay polite. What
          it does next, and what happens when the people it did this to eventually win their
          formal independence back, is where we go next.
        </P>
      </ArticleSection>

      <ArticleFAQ items={FAQ_ITEMS} />

      <ArticleFurtherReading title="Go Deeper" items={FURTHER_READING} />

      <ArticleCallout variant="dark" title="Growth Was Never Neutral">
        <p>
          If the machine that created England&rsquo;s money could only keep working by finding new land,
          new people, and new customary rights to convert into private property, then &ldquo;economic
          growth&rdquo; was never a neutral, technical fact about prosperity increasing. It was, from
          its first large-scale demonstration onward, a specific, documented process of taking
          something that was shared and making it belong to whoever already held the capital.
          Bengal in 1793 is not a footnote to England&rsquo;s story. It is the same story, at the scale
          the mechanism was always going to reach once nothing at home was left to fence.
        </p>
      </ArticleCallout>

      <ArticleSources>
        <p>
          <strong>Primary and archival sources:</strong> the Permanent Settlement Regulations,
          1793, Bengal; the Battle of Plassey, 23 June 1757; Adam Smith, <em>An Inquiry into the
          Nature and Causes of the Wealth of Nations</em>, published 9 March 1776.
        </p>
        <p>
          <strong>Secondary sources:</strong> P.G.M. Dickson, <em>The Financial Revolution in
          England: A Study in the Development of Public Credit, 1688&ndash;1756</em> (1967); the
          scholarship on the Permanent Settlement&rsquo;s sunset law and the roughly 45 percent turnover
          of Bengal&rsquo;s landed estates between 1794 and 1807 draws on standard economic-history
          accounts of the period, including work summarized in the Bengal Tenancy Act (1885)
          historiography.
        </p>
        <p>
          <strong>Notes on disputed points:</strong> the claim that interest-bearing money
          requires perpetual growth to remain solvent is a real, named argument in economics
          (Michael Hudson; ecological economists including Herman Daly and Tim Jackson), not a
          consensus position; mainstream economics generally attributes growth primarily to
          productivity and innovation rather than to the structure of interest itself. The
          specific claim that individual investors in the Bank of England and the East India
          Company overlapped is not made here; the connection drawn is that both were financed
          through the same London credit infrastructure and public-credit markets of the same
          decades, a link documented by Dickson (1967) and the broader &ldquo;Financial Revolution&rdquo;
          historiography.
        </p>
      </ArticleSources>
    </ArticleLayout>
  );
}
