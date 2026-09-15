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
  title: 'What Is Money: Part 5 | Left Diary',
  description: "After Plassey, the East India Company didn't just take a treasury. It took the right to collect the tax itself. Within five years, that right helped turn a bad harvest into a famine that killed millions — and the philosopher who attacked the Company by name for it also handed the men who came after him the exact theory they needed to turn an entire province into private property.",
  keywords: [
    'Bengal famine 1770 explained',
    'Permanent Settlement of Bengal 1793',
    'Adam Smith East India Company',
    'Adam Smith wretched spirit of monopoly',
    'zamindar sunset law explained',
    'Cornwallis Permanent Settlement',
    'David Graeber Adam Smith critique',
    'Dawn of Everything stadial theory',
    'Diwani East India Company 1765',
    'history of money part 5'
  ],
  openGraph: {
    title: 'What Is Money: Part 5',
    description: "A famine, a book, and a theory of history. Adam Smith named the Company's crime correctly, and still handed the next generation the exact idea they needed to do something worse and call it progress.",
    type: 'article',
    publishedTime: '2026-09-15',
    modifiedTime: '2026-09-15',
    authors: ['https://leftdiary.com/about'],
    section: 'Economics',
    tags: ['money', 'colonialism', 'Bengal famine', 'Adam Smith', 'Permanent Settlement', 'history'],
    siteName: 'Left Diary',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Is Money: Part 5',
    description: "Adam Smith named the East India Company's crime correctly. He also handed the next generation the exact theory they needed to do something worse and call it progress.",
    site: '@leftdiary',
    creator: '@leftdiary',
  },
  alternates: {
    canonical: 'https://leftdiary.com/posts/how-did-a-famine-turn-into-a-land-grab'
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
      '@id': 'https://leftdiary.com/posts/how-did-a-famine-turn-into-a-land-grab#article',
      'headline': 'What Is Money: Part 5',
      'description': "After Plassey, the East India Company didn't just take a treasury. It took the right to collect the tax itself. Within five years, that right helped turn a bad harvest into a famine that killed millions — and the philosopher who attacked the Company by name for it also handed the men who came after him the exact theory they needed to turn an entire province into private property.",
      'image': [
        {
          '@type': 'ImageObject',
          'url': 'https://leftdiary.com/posts/how-did-a-famine-turn-into-a-land-grab/opengraph-image',
          'width': 1200,
          'height': 630
        }
      ],
      'datePublished': '2026-09-15T00:00:00+00:00',
      'dateModified': '2026-09-15T00:00:00+00:00',
      'author': { '@type': 'Organization', 'name': 'Left Diary', 'url': 'https://leftdiary.com' },
      'publisher': {
        '@type': 'Organization',
        'name': 'Left Diary',
        'url': 'https://leftdiary.com',
        'logo': { '@type': 'ImageObject', 'url': 'https://leftdiary.com/logo.png', 'width': 600, 'height': 60 }
      },
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': 'https://leftdiary.com/posts/how-did-a-famine-turn-into-a-land-grab'
      },
      'keywords': 'Bengal famine 1770, Permanent Settlement 1793, Adam Smith East India Company, sunset law, Cornwallis, Dawn of Everything',
      'articleSection': 'Economics',
      'wordCount': 4400,
      'inLanguage': 'en-US',
      'isAccessibleForFree': true,
      'about': [
        { '@type': 'Thing', 'name': 'Great Bengal Famine of 1770' },
        { '@type': 'Thing', 'name': 'Permanent Settlement' },
        { '@type': 'Thing', 'name': 'Adam Smith' },
        { '@type': 'Thing', 'name': 'East India Company' }
      ]
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://leftdiary.com/posts/how-did-a-famine-turn-into-a-land-grab#breadcrumb',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://leftdiary.com' },
        { '@type': 'ListItem', 'position': 2, 'name': 'Posts', 'item': 'https://leftdiary.com/posts' },
        { '@type': 'ListItem', 'position': 3, 'name': 'What Is Money: Part 5', 'item': 'https://leftdiary.com/posts/how-did-a-famine-turn-into-a-land-grab' }
      ]
    }
  ]
};

const TOC_ITEMS: TOCItem[] = [
  { id: 'the-second-act', text: 'The Second Act', level: 2 },
  { id: 'a-right-to-collect-the-tax-itself', text: 'A Right to Collect the Tax Itself', level: 2 },
  { id: 'a-tax-raised-during-a-famine', text: 'A Tax Raised During a Famine', level: 2 },
  { id: 'a-company-that-had-to-be-saved-from-itself', text: 'A Company That Had to Be Saved From Itself', level: 2 },
  { id: 'the-book-that-attacked-the-company-by-name', text: 'The Book That Attacked the Company by Name', level: 2 },
  { id: 'the-story-smith-told-about-how-we-got-here', text: 'The Story Smith Told About How We Got Here', level: 2 },
  { id: 'a-shelf-already-built', text: 'A Shelf Already Built', level: 2 },
  { id: 'the-same-fence-again', text: 'The Same Fence, Again', level: 2 },
  { id: 'faq', text: 'Frequently Asked Questions', level: 2 },
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'What caused the Great Bengal Famine of 1770?',
    answer: (
      <>
        A poor monsoon in 1768 and 1769 caused a genuine grain shortage. But the East India
        Company, which had held the right to collect Bengal&rsquo;s land tax since 1765, had already
        raised that tax by roughly 30 percent and set fixed collection quotas regardless of
        harvest conditions; in April 1770, as the famine was peaking, it announced a further 10
        percent increase for the following year. Company officials and their agents also held
        significant positions in the grain trade itself. The death toll is disputed: the
        Victorian-era historian William Wilson Hunter estimated 10 million deaths, roughly a
        third of Bengal&rsquo;s population, while modern estimates range considerably lower. What is
        not disputed is that Company tax revenue did not fall in the famine years, and in some
        districts rose.
      </>
    ),
  },
  {
    question: "What did Adam Smith actually say about the East India Company?",
    answer: (
      <>
        In <em>The Wealth of Nations</em> (1776), Smith attacked the Company by name as an example
        of what he called the &ldquo;wretched spirit of monopoly,&rdquo; and directly blamed it for the
        Bengal famine, writing that &ldquo;some improper regulations, some injudicious restraints,
        imposed by the servants of the East India Company upon the rice trade, contributed,
        perhaps, to turn a dearth into a famine.&rdquo; This was a real, specific, named critique, not
        a vague objection to trade in general.
      </>
    ),
  },
  {
    question: 'What was the Permanent Settlement of 1793?',
    answer: (
      <>
        A law introduced by Governor-General Lord Cornwallis that fixed the land tax owed by
        Bengal&rsquo;s <em>zamindars</em> (local tax-collecting officials under Mughal and earlier
        Company rule) at a permanent, unchangeable amount, forever, in exchange for converting
        them into full private, hereditary owners of the land itself, in the English legal sense.
        It was paired with a &ldquo;sunset law&rdquo;: if a zamindar failed to pay the full amount by
        sunset on a fixed date, the estate was seized and auctioned to the highest bidder.
      </>
    ),
  },
  {
    question: "What happened to peasants under the Permanent Settlement?",
    answer: (
      <>
        Peasant cultivators, or <em>ryots</em>, who had worked the land for generations had no
        ownership rights recognized under the new law at all; they became tenants of the
        zamindar, with their rents and security entirely at his discretion. Customary access to
        surrounding forest, grazing, and water, previously used for fuel, fodder, and food, came
        into direct conflict with the new owners&rsquo; exclusive legal title. Between 1794 and 1807,
        estimates suggest that somewhere between roughly 41 and 45 percent of Bengal&rsquo;s landed
        estates were sold off under the sunset law&rsquo;s forced auctions.
      </>
    ),
  },
  {
    question: "What is Adam Smith's 'four stages' theory of history, and why does it matter here?",
    answer: (
      <>
        In addition to <em>The Wealth of Nations</em>, Smith outlined a theory, in lectures later
        published as his <em>Lectures on Jurisprudence</em>, dividing all human history into four
        successive stages: hunting, herding, agriculture, and commerce, with private property and
        commercial exchange as history&rsquo;s natural, most advanced endpoint. Anthropologist David
        Graeber and archaeologist David Wengrow, in <em>The Dawn of Everything</em> (2021), argue
        this theory was developed partly as a response to real critiques of European society made
        by Indigenous intellectuals, and that its effect, regardless of intent, was to make
        societies without English-style private land ownership look earlier and less developed
        rather than simply different, supplying exactly the reasoning later used to justify
        converting communal or customary land tenure into private property.
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
    description: 'the commons enclosed, one legal act at a time, until wage labor was the only door left',
  },
  {
    href: '/posts/how-did-the-king-lose-the-power-to-make-money',
    title: 'What Is Money: Part 3',
    description: 'the 1694 deal that gave a private institution the permanent power to create money',
  },
  {
    href: '/posts/how-did-interest-lead-to-the-conquest-of-bengal',
    title: 'What Is Money: Part 4',
    description: 'how a charter that had to keep growing found Bengal, and bought it rather than conquered it',
  },
];

export default function HowDidAFamineTurnIntoALandGrabPage() {
  return (
    <ArticleLayout jsonLd={jsonLd}>
      <ArticleHeader
        categories={['Economics', 'History', 'Colonialism', 'Money']}
        title="What Is Money: Part 5"
        lead={
          <>
            <Link
              href="/posts/how-did-interest-lead-to-the-conquest-of-bengal"
              className="underline decoration-gray-400 hover:decoration-gray-700"
            >
              Last time
            </Link>
            , I told you Plassey wasn&rsquo;t the whole story. There was a second act, the paperwork
            that came after the soldiers: a specific law, decades later, that decided who would
            own Bengal&rsquo;s land, forever, and what would happen to the people who had worked it for
            generations. To get there honestly, I have to show you a famine, a book, and a theory
            of history first, because none of what happened in 1793 makes sense without them.
          </>
        }
        date="September 15, 2026"
        dateTime="2026-09-15"
        readingTime="20 min read"
      />

      <ArticleTOC items={TOC_ITEMS} />

      <ArticleSection id="the-second-act">
        <H2 id="the-second-act">The Second Act</H2>
        <P>
          One afternoon at Plassey bought the East India Company a puppet ruler, a plundered
          treasury, and the richest self-made fortune in Europe for one man. But a bribed nawab
          on a throne is not, by itself, a functioning source of tax revenue. It is a man the
          Company now needed to keep obedient, which meant keeping soldiers near him, which meant
          spending money, which is exactly the kind of arrangement a machine built to keep
          growing cannot tolerate for long. It needs the money to flow the other way.
        </P>
        <P>
          So within a decade of Plassey, the Company stopped ruling Bengal through a puppet and
          started ruling it directly, and it started with the one thing this entire series keeps
          returning to: the right to tax.
        </P>
      </ArticleSection>

      <ArticleSection id="a-right-to-collect-the-tax-itself">
        <H2 id="a-right-to-collect-the-tax-itself">A Right to Collect the Tax Itself</H2>
        <P>
          Mir Jafar didn&rsquo;t last. He proved an expensive, unreliable client, and the Company
          replaced him, then fought off an attempt by the Mughal Emperor Shah Alam II and two
          allied rulers to push it out of Bengal entirely, at the Battle of Buxar on 22 October
          1764. The Company won that one too. And this time, instead of installing another
          puppet and hoping he stayed useful, it went straight to the source of legal
          legitimacy itself.
        </P>
        <P>
          On 16 August 1765, at Allahabad, Shah Alam II granted the East India Company the{' '}
          <strong>Diwani</strong> of Bengal, Bihar, and Orissa: the Mughal Empire&rsquo;s own legal
          right to collect land revenue across those provinces, in exchange for a fixed annual
          payment back to the Emperor.{' '}
          <span className="text-sm text-gray-400 not-italic">
            (Treaty of Allahabad, 16 August 1765)
          </span>{' '}
          Read what that actually means. A trading company, chartered in London to buy pepper and
          cloth, now held the legal right to tax tens of millions of people, under the authority
          of an emperor who had just lost a war to it. Remember the very first thing this whole
          series showed you: the king mints the coin, and demands it back as tax, and in that one
          move creates both the money&rsquo;s value and the market it moves through. The Company had
          just acquired the second half of that power without ever holding the first. It didn&rsquo;t
          need to mint anything. It only needed the legal right to demand money back from people
          who already used it, and it now had that right over an entire province, by treaty,
          enforced by its own army.
        </P>
      </ArticleSection>

      <ArticleSection id="a-tax-raised-during-a-famine">
        <H2 id="a-tax-raised-during-a-famine">A Tax Raised During a Famine</H2>
        <P>
          Almost immediately, the Company raised the land tax in Bengal by roughly 30 percent
          above what it had been under Mughal administration, and set fixed annual collection
          quotas for its revenue officers to meet, regardless of how good or bad the harvest
          actually was.{' '}
          <span className="text-sm text-gray-400 not-italic">
            (East India Company land revenue policy following the 1765 Diwani grant)
          </span>{' '}
          Sit with that for a second, because it is not a detail, it is the whole mechanism. A
          tax that adjusts to what the land actually produces is a tax on surplus. A tax that
          stays fixed no matter what the land produces is a claim on survival itself.
        </P>
        <P>
          In 1768 and 1769, the monsoon failed across Bengal. This is where the story could have
          been an ordinary tragedy: a bad harvest, a hungry season, a hard year. It is not what
          happened. In April 1770, with famine conditions already visibly spreading, the Company
          announced that the following year&rsquo;s land tax would be raised by a further 10
          percent.{' '}
          <span className="text-sm text-gray-400 not-italic">
            (Great Bengal Famine of 1770; Company revenue announcement, April 1770)
          </span>{' '}
          Not paused. Not reduced to reflect a ruined harvest. Raised, while people were already
          dying.
        </P>
        <P>
          I want to be precise about how many people, because the number itself is disputed and I
          am not going to pretend otherwise. The Victorian-era historian William Wilson Hunter,
          who compiled the most detailed contemporary account, put the death toll at roughly 10
          million people, close to a third of Bengal&rsquo;s entire population. Modern historians,
          working from different evidence and methods, have argued for figures considerably lower.
          I don&rsquo;t know the true number, and I don&rsquo;t think anyone alive does either. What I do
          know, because it isn&rsquo;t disputed by anyone, is this: Company revenue collection did not
          fall during the famine years. In several districts, it rose. Company officials and their
          local agents also held direct personal stakes in the grain trade, meaning some of the
          same men responsible for collecting an undiminished tax were also positioned to profit
          from a food shortage.
        </P>
        <P>
          Here is the sentence I want you to actually sit with, not skim past: a company found a
          famine, and finished the tax year with more money than it started it. Whatever word you
          want to use for the natural disaster that started this, drought, monsoon failure, bad
          luck, none of those words explain that sentence. Only the tax does.
        </P>
      </ArticleSection>

      <ArticleSection id="a-company-that-had-to-be-saved-from-itself">
        <H2 id="a-company-that-had-to-be-saved-from-itself">A Company That Had to Be Saved From Itself</H2>
        <P>
          You would expect an organization that just extracted record revenue from a famine to be
          flush with cash. It was the opposite. Between the cost of maintaining its private army,
          the corruption of its own officials, who were routinely making personal fortunes on the
          side, the way Clive had, and the collapse of trade and production that inevitably
          followed the famine in the years after, the Company found itself, by 1772, on the edge
          of bankruptcy. It went to Parliament and asked for a loan of &pound;1.4 million to stay
          afloat.{' '}
          <span className="text-sm text-gray-400 not-italic">
            (East India Company loan request, 1772&ndash;73)
          </span>
        </P>
        <P>
          This is the moment the machine this series has been tracking since Part 3 finally
          closes its own loop. A private charter had been given the power to create England&rsquo;s
          money in 1694. A different private charter had been given the power to tax an Indian
          province in 1765. Now the second charter, having mismanaged the province badly enough
          to nearly collapse, needed the first system, Parliament and its public credit, to bail
          it out. Two machines, built decades apart for entirely different stated purposes, had
          become dependent on the same well.
        </P>
        <P>
          Parliament granted the loan, but not for nothing. In exchange, it passed the{' '}
          <strong>Regulating Act of 1773</strong>, the first time the British state directly
          asserted authority over how the Company governed its Indian territories, creating the
          post of Governor-General of Bengal to oversee it.{' '}
          <span className="text-sm text-gray-400 not-italic">
            (Regulating Act, 1773)
          </span>{' '}
          A trading company&rsquo;s private disaster had just become the British government&rsquo;s direct
          business. From this point forward, whatever happened to Bengal&rsquo;s land was not simply a
          company matter. It was a matter of state.
        </P>
      </ArticleSection>

      <ArticleSection id="the-book-that-attacked-the-company-by-name">
        <H2 id="the-book-that-attacked-the-company-by-name">The Book That Attacked the Company by Name</H2>
        <P>
          Three years after the Regulating Act, on 9 March 1776, a Scottish philosopher named Adam
          Smith published a book called <em>An Inquiry into the Nature and Causes of the Wealth
          of Nations</em>. And I want to start by giving him full credit for something, because it
          would be dishonest not to: he named the East India Company directly, and he named
          exactly what it had done in Bengal.
        </P>
        <P>
          Smith called it the &ldquo;wretched spirit of monopoly,&rdquo; and wrote, about the famine
          specifically, that &ldquo;some improper regulations, some injudicious restraints, imposed by
          the servants of the East India Company upon the rice trade, contributed, perhaps, to
          turn a dearth into a famine.&rdquo;{' '}
          <span className="text-sm text-gray-400 not-italic">
            (Smith, <em>The Wealth of Nations</em>, Book IV, 1776)
          </span>{' '}
          That is not a vague, hand-waving objection to trade regulation in the abstract. That is
          a specific philosopher, writing in real time, naming a specific company and a specific
          catastrophe, and saying plainly that the Company&rsquo;s own restrictions turned a bad
          harvest into mass death. He was right, and he said so publicly, years before most of
          Europe had any clear idea what had happened in Bengal at all.
        </P>
        <P>
          I am telling you this first, before anything else Smith wrote, because what comes next
          is not a story about Smith being wrong, or about later men twisting his good ideas into
          something ugly. It is a stranger, more uncomfortable story than that. The same book, in
          the same years, that correctly diagnosed one crime in Bengal also handed the next
          generation of Englishmen exactly the theory they needed to commit a second one, and call
          it an improvement.
        </P>
      </ArticleSection>

      <ArticleSection id="the-story-smith-told-about-how-we-got-here">
        <H2 id="the-story-smith-told-about-how-we-got-here">The Story Smith Told About How We Got Here</H2>
        <P>
          Go back to the very first article in this series for a second, because it matters again
          here, and I&rsquo;d rather repeat it properly than wave at it and move on. I told you then
          that no documented example of a barter economy predating money has ever been found,
          anywhere, by anyone who has actually looked. Not one society where strangers lined up
          with chickens and cows and worked out exchange rates before currency existed. What
          actually existed, everywhere researchers have looked closely, is credit: the &ldquo;I owe you
          one,&rdquo; running on memory and trust between people who knew each other.{' '}
          <span className="text-sm text-gray-400 not-italic">
            (Graeber, <em>Debt: The First 5,000 Years</em>, 2011)
          </span>
        </P>
        <P>
          Adam Smith is one of the people responsible for that barter story becoming the
          respectable, textbook version of how money began. Near the start of{' '}
          <em>The Wealth of Nations</em>, he imagines a hunter with more deer than he can eat and a
          fisherman with more fish than he can eat, unable to trade efficiently until money comes
          along to solve their problem. It is a tidy story. It is also, as far as anyone has ever
          been able to document, a story Smith made up, not one he found in any record of an
          actual society.
        </P>
        <P>
          Why does that matter, and why am I bringing it back now instead of leaving it in Part 1
          where it belongs? Because the barter myth was never really about barter. Notice what it
          does: it describes money and markets as something that emerges naturally, out of
          individuals quietly solving a practical problem, with no king, no tax, no charter, no
          army anywhere in the story. You have spent four parts of this series watching money get
          built, on purpose, by specific people, using force: a king inventing coin and tax
          together, merchants enclosing common land, a charter creating money that has to keep
          growing, a company bribing its way to a treasury. The barter myth quietly erases every
          single one of those actors. It tells you markets simply grow, the way grass grows,
          whenever people are left alone to trade.
        </P>
        <P>
          Smith didn&rsquo;t stop at one made-up scene with a hunter and a fisherman. In lectures he
          gave at Glasgow, later published as his <em>Lectures on Jurisprudence</em>, he laid out a
          much bigger version of the same idea: a theory of the whole of human history, moving
          through four fixed stages. First, the Age of Hunters. Then the Age of Shepherds. Then
          the Age of Agriculture. And finally, at the top, the Age of Commerce, private property,
          money, and trade, which Smith&rsquo;s own society, eighteenth-century Britain, happened to
          represent. Every society on Earth, in this telling, was simply somewhere on that same
          ladder, further behind or further ahead.
        </P>
        <P>
          Here is the part I only learned recently, and it changes how I read all of it. The
          anthropologist David Graeber, the same writer behind the barter research, argued in his
          final book, <em>The Dawn of Everything</em>, co-written with the archaeologist David
          Wengrow, that this four-stage theory wasn&rsquo;t built in a vacuum. It was built, in large
          part, as an answer to a real argument Europeans were actually losing.{' '}
          <span className="text-sm text-gray-400 not-italic">
            (Graeber &amp; Wengrow, <em>The Dawn of Everything: A New History of Humanity</em>, 2021)
          </span>{' '}
          Through the 1600s and 1700s, European writers recorded detailed, pointed critiques of
          European society coming from Indigenous intellectuals in the colonized Americas, people
          who had watched European life up close and did not find it impressive: its rigid
          hierarchies, its poverty next to its wealth, its willingness to punish and imprison
          rather than persuade. Graeber and Wengrow&rsquo;s central example is Kandiaronk, a Wendat
          statesman whose arguments, recorded by the French colonial writer Baron de Lahontan, were
          widely read across Europe. I want to flag honestly that historians disagree about how
          much of &ldquo;Kandiaronk&rsquo;s&rdquo; recorded words are a real transcript of a real man&rsquo;s arguments
          and how much is Lahontan&rsquo;s own European voice using a Native speaker as a device. But
          the broader pattern Graeber and Wengrow point to, real, documented Indigenous critiques
          of European hierarchy and property circulating in European print culture, is not in
          dispute.
        </P>
        <P>
          The stadial theory, hunters then shepherds then farmers then commerce, gave European
          writers an answer to that critique that did not require actually answering it. It did
          not have to argue that European inequality was good. It only had to argue that European
          society was further along a single, universal road every society was already walking,
          whether it knew it or not. A society that held land in common instead of fencing it into
          private plots wasn&rsquo;t simply organized differently. It was earlier. Behind. Waiting,
          whether it wanted to or not, to arrive eventually at commerce and private property, the
          way a child is expected to eventually grow into an adult.
        </P>
        <P>
          I don&rsquo;t think Adam Smith sat in Glasgow in the 1760s planning the colonization of
          Bengal. I have no evidence for that, and I&rsquo;m not going to invent any. What I can show
          you is a theory, sitting on a shelf, fully built, ready to be reached for by anyone who
          needed to explain why turning communal or customary land into someone&rsquo;s permanent
          private property was not theft, but improvement. And within twenty years of that book&rsquo;s
          publication, in the same province Smith had already written about by name, someone
          reached for it.
        </P>
      </ArticleSection>

      <ArticleSection id="a-shelf-already-built">
        <H2 id="a-shelf-already-built">A Shelf Already Built</H2>
        <P>
          The Regulating Act of 1773 hadn&rsquo;t actually fixed anything, it had only created an
          office. Company misgovernment in Bengal continued through the 1770s under Warren
          Hastings, the first Governor-General, badly enough that Parliament stepped in again in
          1784 with <strong>Pitt&rsquo;s India Act</strong>, creating a permanent government Board of
          Control to directly oversee Company policy from London.{' '}
          <span className="text-sm text-gray-400 not-italic">
            (Pitt&rsquo;s India Act, 1784)
          </span>{' '}
          Two years later, in 1786, that new oversight structure sent out a new Governor-General:{' '}
          <strong>Lord Cornwallis</strong>, fresh from surrendering to George Washington at
          Yorktown, tasked with fixing Bengal&rsquo;s revenue problem for good.
        </P>
        <P>
          Cornwallis inherited a land tax system that had been raised, re-raised, and administered
          through fixed quotas for over twenty years, through a famine that killed an unknown but
          enormous number of people, and it still wasn&rsquo;t reliable. His solution, worked out with
          his revenue official Philip Francis and announced in 1793, was called the{' '}
          <strong>Permanent Settlement</strong>. The <em>zamindars</em>, local Mughal-era officials
          who had traditionally collected revenue from the peasants working a district and passed
          a share upward, without themselves owning the land in any absolute sense, were
          transformed, by this one law, into English-style private freehold landowners. Their tax
          obligation to the Company was fixed forever, at 1793 levels, never to be renegotiated
          again, no matter what the land produced in any future year. In exchange, the land itself
          became legally theirs, permanently, heritable, sellable, the way an English lord owned
          his estate.
        </P>
        <P>
          Notice the reasoning the Company used to justify this, because it is the four-stage
          theory, almost word for word. Fixed, secure, private property, the argument went, would
          give landowners a permanent incentive to invest in and <em>improve</em> the land, the
          way an English gentleman improved his estate, instead of merely extracting what they
          could from it under an uncertain, revisable Mughal-style arrangement. It was framed,
          explicitly, as bringing Bengal&rsquo;s land relations up to the standard of a more advanced,
          more commercial society. Cornwallis and Francis were not working from Smith&rsquo;s book like
          a checklist, and I have no direct citation proving they had it open on the desk. What I
          can show you is that the reasoning is identical: land without a single, permanent,
          individual private owner is backward land, waiting for the right legal instrument to
          bring it into the modern age. That reasoning did not have to be invented in 1793. It
          had already been built, argued, and published, for a different purpose, twenty years
          earlier, by a man who was genuinely trying to help.
        </P>
      </ArticleSection>

      <ArticleSection id="the-same-fence-again">
        <H2 id="the-same-fence-again">The Same Fence, Again</H2>
        <P>
          I want you to go back with me, for a moment, to what I showed you in Part 2: estovers,
          the right to gather fuel wood; pannage, the right to graze pigs on the common woodland;
          turbary, the right to cut peat; piscary, the right to fish the shared water; gleaning,
          the right of the poorest villagers to gather leftover grain after harvest. None of it
          was sentimental. All of it was specific, documented, and legally real, until a fence
          went up around it, one Act of Parliament at a time, and every right anyone but the new
          owner held there simply stopped existing.
        </P>
        <P>
          The Permanent Settlement was the same fence, rebuilt with different paperwork, on a
          different continent, against a different people, for the same reason. Bengali peasants,
          the <em>ryots</em> who had actually worked the fields, gathered fuel from the
          surrounding forest, grazed animals on shared land, and drawn water and fish from shared
          sources, exactly the kind of customary, undocumented, common access this entire series
          keeps returning to, had none of it recognized in the new law at all. Not diminished.
          Not renegotiated. Simply absent from the document, as if it had never existed, the same
          way an English court in 1788 had ruled that gleaning had never really been a right to
          begin with. Whatever a ryot could still do on that land after 1793, he could now only do
          because the zamindar, the new legal owner, permitted it.
        </P>
        <P>
          And the fence had teeth built directly into it. The Permanent Settlement came paired
          with what was called the <strong>sunset law</strong>: if a zamindar failed to pay his
          entire fixed tax bill by sunset on a specified date, his estate was seized outright and
          auctioned to the highest bidder, no exceptions, no appeal to a bad harvest, because the
          whole point of the law was that the amount owed no longer had anything to do with what
          the harvest produced. Between 1794 and 1807, somewhere between roughly 41 and 45 percent
          of Bengal&rsquo;s landed estates, depending on which historian&rsquo;s count you use, were seized
          and sold this way.{' '}
          <span className="text-sm text-gray-400 not-italic">
            (Permanent Settlement sunset clause enforcement, 1794&ndash;1807)
          </span>{' '}
          Nearly half the land in the province changed hands by forced auction within a single
          generation of the law being written, because a tax that ignores the harvest is not a
          tax on surplus. You have heard that sentence before in this piece. It was true the
          first time, in 1770, when it produced a famine. It was still true in 1793, when it
          produced a fence.
        </P>
      </ArticleSection>

      <ArticleFAQ items={FAQ_ITEMS} />

      <ArticleFurtherReading title="Go Deeper" items={FURTHER_READING} />

      <ArticleCallout variant="dark" title="An Idea, Waiting to Be Used">
        <p>
          A famine that raised more tax than it destroyed. A philosopher who named that crime
          honestly, and in the same years handed the next generation a theory of history that made
          the next crime look like progress. A fence, rebuilt on a different continent, using the
          same shape it had in Part 2: something people actually had, quietly redefined by law as
          something they never really held. None of this was ever just England&rsquo;s story, and it
          was never just Bengal&rsquo;s either. It is the same machine, reaching for whatever
          justification happens to be sitting closest to hand, and it did not stop at one
          subcontinent.
        </p>
      </ArticleCallout>

      <ArticleSources>
        <p>
          <strong>Primary and archival sources:</strong> Treaty of Allahabad (16 August 1765);
          Regulating Act (1773); Pitt&rsquo;s India Act (1784); the Permanent Settlement regulations
          (1793) and associated sunset clause (1794); Adam Smith, <em>An Inquiry into the Nature
          and Causes of the Wealth of Nations</em>, Book IV (published 9 March 1776).
        </p>
        <p>
          <strong>Secondary sources:</strong> William Wilson Hunter&rsquo;s 19th-century account of
          the Great Bengal Famine of 1770; David Graeber, <em>Debt: The First 5,000 Years</em>{' '}
          (2011); David Graeber &amp; David Wengrow, <em>The Dawn of Everything: A New History of
          Humanity</em> (2021); Adam Smith, <em>Lectures on Jurisprudence</em> (delivered
          1762&ndash;64, published posthumously); standard historical accounts of the Permanent
          Settlement of Bengal and its sunset-law auctions, 1794&ndash;1807.
        </p>
        <p>
          <strong>Notes on disputed points:</strong> the death toll of the 1770 Bengal famine is
          genuinely contested, ranging from Hunter&rsquo;s contemporary estimate of roughly 10 million
          to considerably lower modern estimates; this piece does not adopt a single figure.
          Historians also disagree on how much weight to give Company tax policy specifically
          versus the underlying drought in causing the famine, though the decision to raise taxes
          further in April 1770 and the fact that revenue did not fall are not in dispute. The
          proportion of Bengal&rsquo;s estates auctioned under the sunset law between 1794 and 1807 is
          cited variously as roughly 41 to 45 percent depending on the historian and the counting
          method; this piece gives that range rather than a single number. Graeber and Wengrow&rsquo;s
          argument that the Indigenous critique (via figures such as Kandiaronk, as recorded by
          Baron de Lahontan) directly shaped European stadial theory is their own historical
          argument, not a settled consensus; the extent to which Lahontan&rsquo;s recorded &ldquo;Kandiaronk&rdquo;
          reflects an actual individual&rsquo;s words versus Lahontan&rsquo;s own literary voice is separately
          disputed among historians. No claim is made that Lord Cornwallis or Philip Francis cited
          Adam Smith directly when designing the Permanent Settlement; the connection drawn here is
          that the theoretical justification used matches Smith&rsquo;s stadial framework, not that a
          documented citation exists.
        </p>
      </ArticleSources>
    </ArticleLayout>
  );
}
