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
  P, H2, H3,
} from '@/components/article';
import type { TOCItem, FAQItem, FurtherReadingItem } from '@/components/article';

export const metadata: Metadata = {
  title: "Why Didn't People Just Refuse to Use Money? | Left Diary",
  description: "The king's tax was once a year, in a fixed amount. So why couldn't people just earn that much and go back to living as before? Because over the next three hundred years, every other way of surviving was made illegal, one law at a time.",
  keywords: [
    "why didn't people refuse to use money",
    "history of the commons England",
    "enclosure acts explained simply",
    "vagrancy acts history",
    "witch hunts and enclosure",
    "what is the commons",
    "history of money part 2",
    "how was wage labor forced",
    "Silvia Federici Caliban and the Witch",
    "Karl Polanyi Great Transformation",
    "hut tax colonial Africa",
    "history of interest and usury"
  ],
  openGraph: {
    title: "Why Didn't People Just Refuse to Use Money?",
    description: "The tax was once a year. People could have earned it and gone back to their old lives. Something else happened first — and it happened by law, one act at a time.",
    images: [
      {
        url: 'https://leftdiary.com/images/cover_pages/why-didnt-people-just-refuse-to-use-money-cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Why Didn\'t People Just Refuse to Use Money — Left Diary'
      }
    ],
    type: 'article',
    publishedTime: '2026-07-04',
    modifiedTime: '2026-07-04',
    authors: ['https://leftdiary.com/about'],
    section: 'Economics',
    tags: ['money', 'enclosure', 'commons', 'history', 'colonialism', 'witch hunts'],
    siteName: 'Left Diary',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Why Didn't People Just Refuse to Use Money?",
    description: "The tax was once a year, in a fixed amount. So why does every single thing you do today require money? Something happened in between.",
    site: '@leftdiary',
    creator: '@leftdiary',
    images: ['https://leftdiary.com/images/cover_pages/why-didnt-people-just-refuse-to-use-money-cover.jpg'],
  },
  alternates: {
    canonical: 'https://leftdiary.com/posts/why-didnt-people-just-refuse-to-use-money'
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
      '@id': 'https://leftdiary.com/posts/why-didnt-people-just-refuse-to-use-money#article',
      'headline': "Why Didn't People Just Refuse to Use Money?",
      'description': 'The king\'s tax was once a year, in a fixed amount. So why couldn\'t people earn that much and go back to living as before? Because over the next three hundred years, every other way of surviving was made illegal, one law at a time — the commons enclosed, gleaning outlawed, standing still criminalized, the last independent women destroyed as witches.',
      'image': [
        {
          '@type': 'ImageObject',
          'url': 'https://leftdiary.com/images/cover_pages/why-didnt-people-just-refuse-to-use-money-cover.jpg',
          'width': 1200,
          'height': 630
        }
      ],
      'datePublished': '2026-07-04T00:00:00+00:00',
      'dateModified': '2026-07-04T00:00:00+00:00',
      'author': { '@type': 'Organization', 'name': 'Left Diary', 'url': 'https://leftdiary.com' },
      'publisher': {
        '@type': 'Organization',
        'name': 'Left Diary',
        'url': 'https://leftdiary.com',
        'logo': { '@type': 'ImageObject', 'url': 'https://leftdiary.com/logo.png', 'width': 600, 'height': 60 }
      },
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': 'https://leftdiary.com/posts/why-didnt-people-just-refuse-to-use-money'
      },
      'keywords': 'why didn\'t people refuse to use money, enclosure acts explained, vagrancy acts history, witch hunts and enclosure, history of the commons',
      'articleSection': 'Economics',
      'wordCount': 6500,
      'inLanguage': 'en-US',
      'isAccessibleForFree': true,
      'about': [
        { '@type': 'Thing', 'name': 'Enclosure' },
        { '@type': 'Thing', 'name': 'The Commons' },
        { '@type': 'Thing', 'name': 'Vagrancy Acts' },
        { '@type': 'Thing', 'name': 'Witch Trials' }
      ]
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://leftdiary.com/posts/why-didnt-people-just-refuse-to-use-money#breadcrumb',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://leftdiary.com' },
        { '@type': 'ListItem', 'position': 2, 'name': 'Posts', 'item': 'https://leftdiary.com/posts' },
        { '@type': 'ListItem', 'position': 3, 'name': "Why Didn't People Just Refuse to Use Money?", 'item': 'https://leftdiary.com/posts/why-didnt-people-just-refuse-to-use-money' }
      ]
    }
  ]
};

const TOC_ITEMS: TOCItem[] = [
  { id: 'the-question-i-left-you-with', text: 'The Question I Left You With', level: 2 },
  { id: 'what-people-actually-had', text: 'What People Actually Had', level: 2 },
  { id: 'gleaning-and-the-day-it-ended', text: 'Gleaning, and the Day It Legally Ended', level: 3 },
  { id: 'enter-the-merchants', text: 'Enter the Merchants', level: 2 },
  { id: 'money-that-demands-more-money-back', text: 'Money That Demands More Money Back', level: 2 },
  { id: 'the-same-trick-continents', text: 'The Same Trick, Played on Entire Continents', level: 2 },
  { id: 'who-was-actually-in-the-room', text: 'Who Was Actually in the Room', level: 2 },
  { id: 'the-commons-enclosed', text: 'The Commons, Enclosed', level: 2 },
  { id: 'when-people-fought-back', text: 'When People Fought Back', level: 3 },
  { id: 'standing-still-became-a-crime', text: 'Standing Still Became a Crime', level: 2 },
  { id: 'the-last-door', text: 'The Last Door', level: 2 },
  { id: 'nobody-chose-this', text: 'Nobody Chose This', level: 2 },
  { id: 'faq', text: 'Frequently Asked Questions', level: 2 },
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Why didn't people in medieval England just avoid using money?",
    answer: (
      <>
        For a long time, many of them mostly did. Rent and tax obligations were often a small,
        fixed, once-a-year demand, met through the sale of a little surplus, while daily survival
        ran on the commons — shared grazing, wood-gathering, fishing, and gleaning rights — and on
        credit between neighbors. What changed was not that people suddenly wanted money more.
        It was that, between roughly 1500 and 1850, the commons were legally enclosed, gleaning was
        stripped of its status as a right by the courts, and standing without a wage was made a
        punishable offense. Money went from being one option among several to the only door left.
      </>
    ),
  },
  {
    question: "What was 'the commons' in medieval and early modern England?",
    answer: (
      <>
        The commons was a real, specific bundle of legal rights, not a romantic idea: the right to
        graze animals on common pasture (regulated through a system called stinting, which capped
        how many animals each household could put out), the right to gather wood for fuel and
        repair (estovers), the right to graze pigs on acorns and beechmast in autumn (pannage), the
        right to cut peat for fuel (turbary), the right to fish shared waters (piscary), and the
        right to gather leftover grain after harvest (gleaning). These rights were legally attached
        to specific pieces of land and enforced through manorial courts.
      </>
    ),
  },
  {
    question: "What were the Enclosure Acts and how many were there?",
    answer: (
      <>
        Between 1604 and 1914, the UK Parliament itself records that it passed{' '}
        <a href="https://www.parliament.uk/about/living-heritage/transformingsociety/towncountry/landscape/overview/enclosingland/" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-400 hover:decoration-gray-700">over 5,200 separate enclosure Acts</a>,
        converting roughly 6.8 million acres — about a fifth of England&rsquo;s total land — from
        common or open-field land into private property. Other historians, counting differently
        (England and Wales together, or including informal enclosure before Parliamentary Acts
        became the norm), give figures as high as 8 million acres. Each Act named a specific
        parish and required assent from landowners holding roughly three-quarters or more of the
        land by value — not by number of people — which meant a handful of large landowners could
        out-vote a much larger number of smallholders and commoners who held no formal title at all.
      </>
    ),
  },
  {
    question: 'What were the Vagrancy Acts?',
    answer: (
      <>
        A series of Tudor laws made it a criminal offense to be unemployed and without a fixed
        residence. Under a 1535 act of Henry VIII, a person convicted of vagabondage a second time
        could be whipped and have part of an ear sliced off; a third offense meant execution. The{' '}
        <a href="https://en.wikipedia.org/wiki/Vagabonds_Act_1547" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-400 hover:decoration-gray-700">Vagabonds Act of 1547</a>,
        passed under Edward VI, went further: anyone denounced as an idler could be branded with a
        &ldquo;V&rdquo; or an &ldquo;S&rdquo; and made a slave to whoever reported them for up to two years, with a
        second escape meaning slavery for life. The slavery clause proved unworkable and was
        repealed within about two years, but the underlying principle — that refusing wage labor is
        itself a crime — stayed in English law in one form or another for centuries.
      </>
    ),
  },
  {
    question: 'Were the European witch trials connected to the enclosure of the commons?',
    answer: (
      <>
        Silvia Federici&rsquo;s{' '}
        <a href="https://en.wikipedia.org/wiki/Caliban_and_the_Witch" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-400 hover:decoration-gray-700"><em>Caliban and the Witch</em></a>{' '}
        (2004) argues that the witch persecutions and the enclosure of the commons were the same
        process, aimed at two different things people held in common: land, and women&rsquo;s
        independent control over healing, birth, and reproduction. She cites historian Alan
        Macfarlane&rsquo;s regional study of Essex, which found that a map of where witch accusations
        clustered closely overlapped with a map of where enclosure disputes were happening. The
        total number of people executed for witchcraft across Europe is genuinely disputed among
        historians, with estimates ranging from around 40,000 to over 100,000 — but the timing, and
        the disproportionate targeting of women who held independent knowledge or land claims, is
        well documented.
      </>
    ),
  },
];

const FURTHER_READING: FurtherReadingItem[] = [
  {
    href: '/posts/why-did-colonizers-tax-africans',
    title: 'Why Did Colonizers Tax Africans?',
    description: 'the hut tax as the same coin-and-tax trick, applied to an entire continent in living memory',
  },
  {
    href: '/posts/how-do-banks-create-money-out-of-nothing',
    title: 'How Do Banks Create Money Out of Nothing?',
    description: 'what modern banks actually do when they approve a loan — and where that power came from',
  },
  {
    href: 'https://en.wikipedia.org/wiki/Caliban_and_the_Witch',
    title: 'Caliban and the Witch — Silvia Federici',
    description: 'the fullest argument connecting the witch hunts to the enclosure of the commons and the birth of wage labor',
    external: true,
  },
  {
    href: 'https://en.wikipedia.org/wiki/The_Great_Transformation_(book)',
    title: 'The Great Transformation — Karl Polanyi',
    description: 'why a competitive labor market had to be built by law, against resistance, and was never a natural outgrowth of trade',
    external: true,
  },
];

export default function WhyDidntPeopleJustRefuseToUseMoneyPage() {
  return (
    <ArticleLayout jsonLd={jsonLd}>
      <ArticleHeader
        categories={['Economics', 'History', 'Money']}
        title="Why Didn't People Just Refuse to Use Money?"
        lead={
          <>
            Last time, I ran ahead of myself and left you with a question I hadn&rsquo;t answered.
            The king&rsquo;s tax was once a year, in a fixed amount of coin. So why didn&rsquo;t people just
            earn that much, hand it over, and go back to living exactly as they had before? Why does
            every single thing in your life today — your food, your water, your rent, your medicine
            — run through money, when the thing that supposedly created money&rsquo;s power was one
            small, annual, avoidable demand?
          </>
        }
        date="July 4, 2026"
        dateTime="2026-07-04"
        readingTime="24 min read"
      />

      <ArticleTOC items={TOC_ITEMS} />

      <ArticleSection id="the-question-i-left-you-with">
        <H2 id="the-question-i-left-you-with">The Question I Left You With</H2>
        <P>
          I told you the King invents coin and tax together. He mints the coins, gives them to his
          soldiers, and then demands them back from everyone else as tax — and in that single move
          he has forced an entire population to need his coin and created the market where his
          soldiers spend it. That part, I stand by.
        </P>
        <P>
          But I ran ahead of myself. Because if you actually sit with that story for a minute, it
          doesn&rsquo;t explain very much. A tax, paid once a year, in a fixed number of coins, is a
          small thing. You could work a short stretch, earn what you owed, pay it, and spend the
          rest of the year exactly as your grandparents had — grazing your animals on the common,
          gathering your fuel from the common wood, fishing the shared stream, trading favors with
          your neighbors the way I described with the elevator button. The king&rsquo;s tax explains
          why coin has <em>some</em> value. It does not explain why, today, you cannot get through a
          single day of your life without it.
        </P>
        <P>
          So something else must have happened. Some other, much bigger set of events between
          &ldquo;pay the king once a year&rdquo; and &ldquo;you will starve, this week, without money.&rdquo; I want to
          walk through what that was, because once you see it, you cannot unsee it. It is not one
          event. It is not one law. It is hundreds of specific, documented, legal acts, spread
          across roughly three centuries, each one closing a door that used to be open.
        </P>
      </ArticleSection>

      <ArticleSection id="what-people-actually-had">
        <H2 id="what-people-actually-had">What People Actually Had</H2>
        <P>
          Before I show you how it was taken away, I want to be precise about what &ldquo;it&rdquo; was.
          Because I don&rsquo;t want you picturing something vague and romantic — &ldquo;the commons&rdquo; as a
          kind of pastoral daydream. It was a specific bundle of legal rights, attached to specific
          land, enforced in specific courts.
        </P>
        <P>
          If you lived in an English village before enclosure, you likely had a right called{' '}
          <strong>estovers</strong> — the right to take wood from the common land for fuel and
          repairs. It was split into named categories: <em>housebote</em> for repairing your
          dwelling, <em>hedgebote</em> for repairing your fences, <em>firebote</em> for fuel. You had{' '}
          <strong>pannage</strong> — the right to let your pigs loose in the common woodland every
          autumn to fatten on fallen acorns and beechmast. You had <strong>turbary</strong> — the
          right to cut your own peat for fuel. You had <strong>piscary</strong> — the right to fish
          the shared river or pond. And you had grazing rights on the common pasture itself, which
          your village regulated through a system called <strong>stinting</strong>: a cap, set and
          adjusted by the manorial court, on exactly how many cows, sheep, or geese each household
          could put out, so no one overgrazed the shared land.
        </P>
        <P>
          None of this was informal or sentimental. These rights were documented, litigated, and
          in 1217 explicitly re-affirmed by royal charter — the{' '}
          <a href="https://en.wikipedia.org/wiki/Charter_of_the_Forest" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-400 hover:decoration-gray-700">Charter of the Forest</a>,
          issued alongside Magna Carta, which protected free men&rsquo;s access to pannage, estovers,
          agistment, and turbary in the royal forests after earlier kings had been steadily
          restricting them. It stayed in force, in some form, longer than almost any other English
          statute.
        </P>

        <H3 id="gleaning-and-the-day-it-ended">Gleaning, and the Day It Legally Ended</H3>
        <P>
          The one I find most striking is <strong>gleaning</strong> — the right of the poorest
          people in a village, usually women, to walk through a field after the harvest was carried
          away and gather whatever grain the reapers had missed, before the animals were let onto
          the stubble. Historian Peter King, who studied this specifically, found it was not a
          trivial custom — it was a real, calculable part of a laboring family&rsquo;s income for the
          year. <span className="text-sm text-gray-400 not-italic">(King, &ldquo;Customary Rights and Women&rsquo;s Earnings,&rdquo; <em>Economic History Review</em>, 1991)</span>
        </P>
        <P>
          And gleaning has something almost no other piece of this story has: an exact date it
          stopped being a right. In 1788, a Suffolk landowner named James Steel sued a woman named
          Mary Houghton for trespass, after she gleaned in his field. The case went to the Court of
          Common Pleas. The court ruled that no person has, at common law, any right to glean. Not a
          custom to be respected — a privilege, granted or withheld entirely at the landowner&rsquo;s
          discretion. <span className="text-sm text-gray-400 not-italic">(<em>Steel v Houghton</em>, 1 H Bl 51, 126 ER 32, 1788)</span> One case. One ruling. One of the oldest surviving rights of the rural poor in
          England, ended by a single judgment, on the say-so of a court made up of men who owned
          land, not men who gleaned it.
        </P>
        <P>
          I am telling you about gleaning first because it is the clearest, smallest example of
          the pattern this whole story runs on. Something existed. It had a name, a use, a real
          value to the people who depended on it. And then a specific, documented, legal act ended
          it — not by taking anything from you at gunpoint in the street, but by a court quietly
          declaring it had never really been yours to begin with.
        </P>
      </ArticleSection>

      <ArticleSection id="enter-the-merchants">
        <H2 id="enter-the-merchants">Enter the Merchants</H2>
        <P>
          Now I need to bring in a second character, because the king was not the only one who
          figured out how to make people need money. While English villages ran on stinting and
          estovers and gleaning, something different was being built in the trading cities of
          Italy — Florence, Venice, Genoa. And what was built there is, in a very direct way, the
          ancestor of the bank that approves your mortgage today.
        </P>
        <P>
          An ordinary merchant sells wool in one city and buys silk in another. That is trade. What
          the Italian merchant-bankers built was something else: a way to move the <em>promise</em>{' '}
          of money between cities without moving any actual coin. A merchant in Bruges who owed
          money to a merchant in Barcelona didn&rsquo;t need to ship gold across the sea. He wrote a{' '}
          <strong>bill of exchange</strong> — a letter instructing his bank&rsquo;s agent in Barcelona to
          pay the Barcelona merchant, in Barcelona&rsquo;s own currency, on a fixed future date. There
          is a documented example of exactly this, from the Florentine Orlandini-Benizi company: in
          January 1400, a bill for 600 écus was drawn in Bruges on an agent in Barcelona, accepted,
          and paid out a month later by a simple transfer between bank accounts — no coin ever
          crossed the sea at all.{' '}
          <span className="text-sm text-gray-400 not-italic">(de Roover, as summarized in Munro, &ldquo;The Medieval Bill of Exchange,&rdquo; University of Toronto)</span>
        </P>
        <P>
          This mattered enormously, because it meant a small number of banking families — the
          Bardi, the Peruzzi, and later the Medici — could hold and move sums of money far larger
          than any single kingdom&rsquo;s physical stock of gold and silver. And kings noticed. When
          Edward III of England needed money to fight France in the 1340s, he didn&rsquo;t dig a new
          silver mine. He borrowed from the Bardi and Peruzzi banks. When he later defaulted, a
          contemporary Florentine chronicler claimed it wiped out both companies to the tune of
          900,000 and 600,000 gold florins.{' '}
          <span className="text-sm text-gray-400 not-italic">(Villani, contemporary chronicle, 14th century)</span>{' '}
          I want to be honest with you about this one, because it is exactly the kind of thing this
          series keeps warning you about: a dramatic number, repeated for six hundred years,
          that turns out to be shakier than it looks. A modern historian who went back through the
          Peruzzi&rsquo;s own surviving account books found nothing close to that scale of lending to
          Edward III, and argues the real losses were closer to a tenth of that, with the
          companies&rsquo; collapse driven by several other problems at once, not one royal default.{' '}
          <span className="text-sm text-gray-400 not-italic">(Hunt, <em>The Medieval Super-Companies</em>, 1994)</span> Whichever number is closer to true, the shape of the event is not in
          dispute: a king borrowed at a scale beyond his own capacity to repay, from bankers whose
          only product was other people&rsquo;s need for money. That is the beginning of the merchant
          class becoming a power the king himself depends on — which is a thread I&rsquo;ll come back to.
        </P>
      </ArticleSection>

      <ArticleSection id="money-that-demands-more-money-back">
        <H2 id="money-that-demands-more-money-back">Money That Demands More Money Back</H2>
        <P>
          Here is the part I actually want you to sit with, because it is the real invention, and
          it is still, today, the thing that makes your loan cost more than you borrowed.
        </P>
        <P>
          The Catholic Church, for most of the medieval period, banned charging interest on a
          loan outright. It was called usury, and it was a sin. So how did banking families get
          rich lending money, in a Europe where lending money for profit was supposed to be
          forbidden?
        </P>
        <P>
          They used the fact that a bill of exchange involved <em>two different currencies in two
          different cities</em>. Suppose a Florentine bank in Venice buys a bill payable in Bruges,
          at one exchange rate. Two months later, instead of collecting the money in cash, the
          Bruges branch immediately uses it to buy a <em>return</em> bill payable back in Venice —
          at a slightly different exchange rate. There was no single moment where anyone
          &ldquo;charged interest.&rdquo; There were just two currency exchanges, months apart, at two
          slightly different rates. But the gap between those rates was the profit. It was a loan,
          wearing the costume of a foreign-exchange transaction. Historians have gone back through
          real surviving transactions and calculated what this actually worked out to in annual
          terms: commonly somewhere in the range of 9 to 16 percent a year — a real, calculable
          interest rate, collected by a route that let everyone involved say, with a straight face,
          that no loan had taken place. <span className="text-sm text-gray-400 not-italic">(Bell, Brooks &amp; Moore, &ldquo;Cambium non est mutuum,&rdquo; <em>Economic History Review</em>, 2017)</span>
        </P>
        <P>
          Some bankers pushed this further still, into something called <strong>dry exchange</strong> —
          a bill drawn on a foreign city with no real trade happening at all, sometimes on an agent
          who barely existed, purely to manufacture the appearance of a currency transaction around
          what was, underneath, a plain loan to a local borrower who needed cash now. The Church
          eventually caught up: in 1571, Pope Pius V issued a bull specifically condemning &ldquo;dry and
          fictitious exchange&rdquo; as disguised usury, while still allowing genuine, trade-linked
          currency exchange to continue. <span className="text-sm text-gray-400 not-italic">(<em>In Eam</em>, Pope Pius V, 1571)</span> Notice what that ruling actually concedes: the
          Church wasn&rsquo;t objecting to money making more money. It was only objecting to doing it{' '}
          <em>too obviously</em>.
        </P>
        <P>
          This is what I mean when I say money that demands more money back. A coin, on its own,
          just sits there — it is not a promise, it does not grow. What the merchant bankers built
          was a way to turn a sum of money into a claim on a <em>larger</em> future sum, dressed up
          in enough technical machinery that it could dodge a direct ban on doing exactly that.
          Once that trick exists, whoever controls it has a permanent, compounding claim on
          everyone who ever has to borrow — which, as you&rsquo;ll see, is a widening circle of people,
          because their other options are being closed off at the same time.
        </P>
      </ArticleSection>

      <ArticleSection id="the-same-trick-continents">
        <H2 id="the-same-trick-continents">The Same Trick, Played on Entire Continents</H2>
        <P>
          Once a king or a state needs money at a scale beyond what its own land can produce, the
          logic of coin-and-tax starts getting applied further and further away from home — to
          entire colonized populations, and eventually to whole continents.
        </P>
        <P>
          I&rsquo;ve written elsewhere about the clearest, most explicit case of this: British colonial
          administrators arriving in East and Southern Africa in the 1890s, finding people who had
          land, food, and community, and who had no need whatsoever for British currency. So the
          British imposed a <strong>hut tax</strong> — an annual levy, payable only in British coin,
          on every dwelling. The only way to get that coin was to work for a British employer.
          <Link href="/posts/why-did-colonizers-tax-africans" className="underline decoration-gray-400 hover:decoration-gray-700"> Frederick Lugard, the architect of British rule in Nigeria, wrote about this purpose in his own words</Link> —
          the tax existed to manufacture a workforce, not to raise revenue. When the British imposed
          it in Sierra Leone in 1898, the Temne and Mende peoples rose up under Bai Bureh in what
          became known as the Hut Tax War. They understood exactly what was being taken from them.
          They lost.
        </P>
        <P>
          The same coin-and-tax logic ran, at an even larger scale, through Spain&rsquo;s conquest of
          the Americas. The Spanish crown fought almost constant wars in Europe, and financed them
          not from its own treasury but from Genoese merchant-bankers — the Spinola, Doria, Grimaldi,
          and Centurione families — under contracts called <em>asientos</em>. One documented example:
          a 1595 loan of 340,000 ducats from the Genoese banker Tomás Fiesco, at 12 percent
          interest. <span className="text-sm text-gray-400 not-italic">(Álvarez-Nogal &amp; Chamley, &ldquo;Debt policy under constraints,&rdquo; <em>Economic History Review</em>, 2014)</span> These loans were routinely secured against silver that had not
          even arrived yet — the next fleet due from the Americas. And the silver on those fleets
          came overwhelmingly from one place: <strong>Potosí</strong>, in what is now Bolivia, which
          at its peak around 1600 may have produced as much as 60 percent of all the silver mined
          on earth. <span className="text-sm text-gray-400 not-italic">(aggregated estimates, Potosí in the Global Silver Age, Brill, 2023 — treat as approximate)</span>
        </P>
        <P>
          That silver was pulled out of the ground by a forced-labor draft called the{' '}
          <strong>mita</strong>, formalized by Viceroy Francisco de Toledo in the 1570s: villages
          across a huge stretch of the Andes were required to send roughly one in seven of their
          adult men to work the mines, typically for a year at a stretch.{' '}
          <span className="text-sm text-gray-400 not-italic">(Bakewell, <em>Miners of the Red Mountain</em>, 1984)</span> I want to be careful here too — some
          popular accounts state a specific, very low survival rate for mita laborers, and I could
          not find that figure traced back to a serious peer-reviewed source, so I&rsquo;m not going to
          repeat it as fact. What is well documented is that the parallel mercury mine at
          Huancavelica, which supplied the mercury used to refine Potosí&rsquo;s silver, was known to
          colonial officials themselves by a nickname: &ldquo;the mine of death.&rdquo;
        </P>
        <P>
          Follow the chain all the way through: a war in Flanders needed money the Spanish crown
          didn&rsquo;t have → Genoese bankers supplied it at interest → the loan was secured against
          silver not yet mined → the silver was mined by Andean villagers forced into the mita →
          the mercury used to refine it came from a mine colonial administrators themselves called
          a slaughterhouse. Nobody in that chain, from the drafted miner in the Andes to the
          taxpayer in an English hut, chose to enter the money system. Money reached them because
          someone above them needed it and had the power to make that need theirs.
        </P>
      </ArticleSection>

      <ArticleSection id="who-was-actually-in-the-room">
        <H2 id="who-was-actually-in-the-room">Who Was Actually in the Room</H2>
        <P>
          So let&rsquo;s come back to England, and to the actual mechanism that finally closed the door
          on people living outside the money system entirely: the Enclosure Acts.
        </P>
        <P>
          Here is the part that is almost never said out loud, even though it is not a matter of
          opinion — it is written directly into the law. In 1711, Parliament passed the{' '}
          <strong>Property Qualification Act</strong>, which required anyone sitting as an MP to
          own a substantial landed estate. The stated purpose, in the words used at the time, was
          to exclude &ldquo;courtiers, military men, and merchants&rdquo; from Parliament, so that — again,
          in their own words — &ldquo;the land interest would be the prevailing consideration in all
          their consultations.&rdquo; <span className="text-sm text-gray-400 not-italic">(Property Qualification Act, 1711)</span> Parliament legally engineered itself, on purpose, to be a
          body of landowners. As late as 1818, close to 70 percent of MPs either owned a landed
          estate or came from a family that did. Add to that the &ldquo;rotten boroughs&rdquo; and &ldquo;pocket
          boroughs&rdquo; — more than 140 of 658 Commons seats, right up until the Reform Act of 1832,
          were tiny or empty constituencies effectively owned outright by a single aristocratic
          patron.
        </P>
        <P>
          Now here is how an actual Enclosure Act got passed. A group of local landowners petitioned
          Parliament to enclose their parish&rsquo;s common land. The threshold for that petition to
          proceed was, in practice, assent from owners holding somewhere around three-quarters of
          the land <em>by value</em> — not a vote of the people who lived there, a vote weighted by
          how much land you already owned. Public notice was a notice pinned to the parish church
          door for three Sundays. The petition then went to a Parliamentary committee — made up of
          the same class of men who owned the land in question, or land just like it — which
          approved the bill, appointed commissioners (usually chosen by the petitioning landowners
          themselves) to survey the parish and allocate the newly enclosed plots.
          <span className="text-sm text-gray-400 not-italic"> (UK Parliament, &ldquo;Enclosing the land,&rdquo; parliament.uk)</span>
        </P>
        <P>
          So walk through what actually happened: landowners petitioned a Parliament composed of
          landowners, elected in many cases by other landowners, to approve the taking of land that
          people without formal title had used for generations, using a process whose committees
          and commissioners were staffed by landowners. The historian E.P. Thompson put it more
          bluntly than I will: he called enclosure &ldquo;a plain enough case of class robbery, played
          according to fair rules of property and law laid down by a parliament of property-owners
          and lawyers.&rdquo; <span className="text-sm text-gray-400 not-italic">(Thompson, <em>The Making of the English Working Class</em>, 1963)</span> I want to flag something in fairness to Thompson, though,
          because this series keeps insisting on applying the same rigor to every replacement idea
          as to the myth it&rsquo;s replacing: Thompson himself resisted the flatter version of this
          argument — that law is simply, always, nothing but a weapon of the ruling class. His own
          point, made elsewhere, was that law only functions as effective ideology <em>because</em>{' '}
          it maintains a real appearance of fairness. It is not a cartoon. It is something more
          durable and harder to see through than a cartoon.
        </P>
      </ArticleSection>

      <ArticleSection id="the-commons-enclosed">
        <H2 id="the-commons-enclosed">The Commons, Enclosed</H2>
        <P>
          By Parliament&rsquo;s own historical account, between 1604 and 1914 it passed{' '}
          <strong>over 5,200</strong> separate enclosure Acts, converting roughly{' '}
          <strong>6.8 million acres</strong> — about a fifth of the total land area of England —
          from common or open land into private property.{' '}
          <span className="text-sm text-gray-400 not-italic">(UK Parliament, &ldquo;Enclosing the land&rdquo;)</span> Other historians, measuring differently
          — England and Wales together, or counting the informal enclosures that predated the
          Parliamentary process — arrive at figures as high as 8 million acres, and one influential
          study argues England was already something like three-quarters enclosed by 1760, well
          before most of the famous Parliamentary Acts were even passed.{' '}
          <span className="text-sm text-gray-400 not-italic">(Wordie, &ldquo;The Chronology of English Enclosure, 1500&ndash;1914,&rdquo; <em>Economic History Review</em>, 1983)</span> The exact number is genuinely debated among
          historians. That it was a lot of land, taken through a specific, repeatable legal
          mechanism, over roughly three centuries, is not.
        </P>
        <P>
          A single village makes this concrete in a way a national number can&rsquo;t. In Wollaston,
          Northamptonshire, the open fields and commons were enclosed by Act of Parliament in
          1788. The number of separate landowners in the village fell from 108 to just 18.{' '}
          <span className="text-sm text-gray-400 not-italic">(local historical record — treat as needing independent confirmation)</span> A hundred and eight households, most of them
          probably smallholders with common rights attached to their land, became eighteen. The
          other ninety did not vanish. They became something else: people with no land, and
          therefore, for the first time, no way to eat except by selling their labor.
        </P>

        <H3 id="when-people-fought-back">When People Fought Back</H3>
        <P>
          People understood exactly what enclosure was doing to them, and they resisted it,
          repeatedly, for centuries — not passively, but in organized, sometimes armed, always
          documented ways.
        </P>
        <P>
          In 1549, in Norfolk, a yeoman farmer named Robert Kett watched a crowd tear down the
          enclosure fences on his own land near Wymondham — and instead of calling for their
          arrest, he agreed with them and led them. Some 16,000 people camped outside Norwich at
          Mousehold Heath, drew up a list of 29 grievances, and administered their own rough
          government from beneath an oak tree they called the Oak of Reformation. The rebellion was
          crushed that August at the Battle of Dussindale. Kett was hanged for treason that
          December. <span className="text-sm text-gray-400 not-italic">(Kett&rsquo;s Rebellion, 1549)</span> I want to be honest about a detail here too, because
          Kett&rsquo;s Rebellion is often flattened into &ldquo;the enclosure riot&rdquo; when the surviving
          document — the actual 29 demands, still held by the British Library — shows only one
          clause that mentions enclosure directly, and even that is narrow. Most of the demands are
          about corrupt local officials and the power of the gentry generally. The rebellion is
          best read as part of a wider revolt against gentry power, of which enclosure was one
          piece, not the whole story.
        </P>
        <P>
          A century later, in April 1649, a small group led by Gerrard Winstanley — calling
          themselves the True Levellers, though history remembers them as the Diggers — began
          digging and planting vegetables on common land at St George&rsquo;s Hill in Surrey, declaring
          the earth &ldquo;a common treasury of relief for all, both beasts and men.&rdquo; About fifty people
          joined them. Local landowners had their shelters burned and crops destroyed within about
          a year. <span className="text-sm text-gray-400 not-italic">(St George&rsquo;s Hill Diggers, 1649&ndash;1650)</span>
        </P>
        <P>
          And in Northamptonshire in 1765, at West Haddon, villagers advertised a football match in
          the local newspaper — a cover story to legally assemble a crowd — and used the gathering
          to tear down and burn the fences from a fresh, 2,000-acre enclosure, causing around
          &pound;1,500 in damage. <span className="text-sm text-gray-400 not-italic">(West Haddon enclosure riot, 1765; discussed in Neeson, <em>Commoners</em>, 1993)</span> The enclosure went ahead anyway. It almost
          always did. Parliament did not need to win the argument. It only needed to win the vote,
          and it had already arranged, by its own property qualification, who got to hold one.
        </P>
      </ArticleSection>

      <ArticleSection id="standing-still-became-a-crime">
        <H2 id="standing-still-became-a-crime">Standing Still Became a Crime</H2>
        <P>
          Enclosure took away the land. But taking the land alone doesn&rsquo;t force anyone into wage
          labor, not by itself — a person without land could, in principle, still travel, beg,
          squat, or scrape by on whatever remained of the old customary economy. So a second kind
          of law closed that option too: it became a crime to be unemployed.
        </P>
        <P>
          Under an act of Henry VIII from 1531 (renewed and hardened in 1535), a person convicted a
          second time of &ldquo;vagabondage&rdquo; could be whipped and have part of an ear sliced off; a
          third conviction meant execution as, in the law&rsquo;s own words, &ldquo;a hardened criminal and
          enemy of the common weal.&rdquo; <span className="text-sm text-gray-400 not-italic">(cited in Marx, <em>Capital</em>, Vol. 1, ch. 28, drawing on the statutes directly)</span>{' '}
          The{' '}
          <a href="https://en.wikipedia.org/wiki/Vagabonds_Act_1547" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-400 hover:decoration-gray-700">Vagabonds Act of 1547</a>,
          passed under the boy-king Edward VI, was harsher still: any able-bodied person found not
          working could be denounced by anyone, branded with a hot iron, and made the legal slave of
          whoever reported them, for up to two years — fed on bread, water, and scraps, and worked
          &ldquo;by beating, chaining, or otherwise.&rdquo; A second escape meant slavery for life and a second
          branding. A third meant execution as a felon.
        </P>
        <P>
          I want to flag something honestly here, because it matters for how you read this: that
          specific slavery clause turned out to be so unworkable and so widely resisted in practice
          that Parliament repealed it within about two years. But notice what that repeal did and
          didn&rsquo;t do. It removed one especially brutal enforcement mechanism. It did not remove the
          underlying principle, which reappeared in milder but still punitive form in later
          vagrancy statutes for the rest of the early modern period: a person who cannot show they
          are working for a wage, or that they have independent means, has no legal right to simply
          exist where they are standing.
        </P>
        <P>
          Put the two laws side by side and the mechanism becomes impossible to miss. Enclosure
          removed your ability to survive on the commons. Vagrancy law removed your ability to
          survive <em>without</em> the commons in any way other than wage labor. Between them, they
          didn&rsquo;t leave a gap. They left one door.
        </P>
      </ArticleSection>

      <ArticleSection id="the-last-door">
        <H2 id="the-last-door">The Last Door</H2>
        <P>
          There is one more piece of this, and it is the one I find hardest to write about plainly,
          because it involves real people burned alive, and because the exact numbers are genuinely
          contested — I am not going to pretend otherwise.
        </P>
        <P>
          Historians estimate somewhere between roughly 40,000 and over 100,000 people were
          executed for witchcraft across Europe, concentrated between about 1450 and 1750, and the
          overwhelming majority — commonly cited around 75 to 80 percent — were women.{' '}
          <span className="text-sm text-gray-400 not-italic">(range synthesized from Levack, Barstow, Hutton, and Sharpe; historians disagree by roughly a factor of two on the total)</span> The historian{' '}
          <a href="https://en.wikipedia.org/wiki/Silvia_Federici" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-400 hover:decoration-gray-700">Silvia Federici</a>{' '}
          makes an argument in{' '}
          <em>Caliban and the Witch</em>{' '}
          that I think belongs directly in this story: that the witch hunts were happening in the
          same decades, in the same regions, as the enclosure of the commons — and that they were
          doing to women&rsquo;s independent knowledge and autonomy what enclosure was doing to shared
          land.{' '}
          <span className="text-sm text-gray-400 not-italic">(Federici, <em>Caliban and the Witch: Women, the Body and Primitive Accumulation</em>, 2004)</span>{' '}
          Federici cites a regional study by the historian Alan Macfarlane, who mapped witch
          accusations across Essex and found they clustered in the same areas where land was being
          enclosed and disputed. <span className="text-sm text-gray-400 not-italic">(Macfarlane, <em>Witchcraft in Tudor and Stuart England</em>, 1970)</span>
        </P>
        <P>
          Who, specifically, was targeted? A separate but complementary body of research —{' '}
          <em>Witches, Midwives, and Nurses</em> by Barbara Ehrenreich and Deirdre English — traces
          how the women most often accused were midwives and herbal healers: women who held real,
          practical, independent knowledge of the body, of birth, and — this is the part that
          connects directly to who controls dependency — of contraception. As formal medicine
          professionalized and required university training that women were legally barred from
          receiving, that professionalization itself became a mechanism of exclusion, regardless of
          who actually had the more useful knowledge. When male barber-surgeons introduced
          obstetrical forceps into childbirth in seventeenth-century England, forceps were legally
          classed as a surgical instrument — and women, barred from surgical practice by law, were
          excluded from using them by that classification alone, not by any question of skill.{' '}
          <span className="text-sm text-gray-400 not-italic">(Ehrenreich &amp; English, <em>Witches, Midwives, and Nurses</em>, 1973)</span>
        </P>
        <P>
          Put this next to enclosure and vagrancy law and you can see the same shape a third time.
          Enclosure closed off the land you didn&rsquo;t need to buy access to. Vagrancy law closed off
          survival without a wage. And the destruction of independent women healers and midwives
          closed off the last major form of care — birth, medicine, the knowledge of how to end an
          unwanted pregnancy — that had never run through money or a licensed, paid professional at
          all. After this, even the most intimate parts of staying alive had a fee attached, and a
          gatekeeper who controlled who was allowed to charge it.
        </P>
      </ArticleSection>

      <ArticleSection id="nobody-chose-this">
        <H2 id="nobody-chose-this">Nobody Chose This</H2>
        <P>
          So let&rsquo;s go back to the question I opened with. Why didn&rsquo;t people just earn the king&rsquo;s
          small annual tax and otherwise carry on as before?
        </P>
        <P>
          Because &ldquo;as before&rdquo; was, over the following three centuries, dismantled one specific,
          documented, legal act at a time. The commons you grazed your cow on: enclosed, by a
          Parliament of the very people who wanted it enclosed. The grain you gleaned after harvest:
          ruled, by a single court case, to never have been a right at all. The choice to simply not
          take a wage, and live some other way instead: made a whipping offense, then a branding and
          enslavement offense, then a lesser but still punishing offense, for as long as vagrancy
          law existed. And the women who held the knowledge to keep a community healthy and fed
          without any of that: accused, tried, and in tens of thousands of documented cases, killed.
        </P>
        <P>
          I don&rsquo;t think &ldquo;capitalism&rdquo; is a very useful word for what I just described to you,
          because it doesn&rsquo;t point at anything you could go find in an archive. What you <em>can</em>{' '}
          find in an archive is a 1711 Act restricting Parliament to landowners. A 1547 Act making
          unemployment punishable by branding and slavery. Over 5,200 separate, named, dated Acts
          enclosing named parishes. A single 1788 court ruling ending the right to glean. These are
          not the backdrop to the story. They are the story. Nobody was ever offered a real choice
          between the old way of living and the wage. The old way was made illegal, one law at a
          time, until the wage was the only door left standing.
        </P>
        <P>
          And once that is true — once you can see, specifically, that the market for your labor
          was not something you or your ancestors ever walked into voluntarily, but something built
          by closing every other exit — a much bigger question opens up. Because someone still had
          to build the actual money you&rsquo;d be paid in. The king who started this whole story by
          minting coin and demanding it back as tax does not, today, mint the money you use.
          Somewhere between his coin and your salary, he lost that power, and somebody else took it.
          Who, and how, is next.
        </P>
      </ArticleSection>

      <ArticleFAQ items={FAQ_ITEMS} />

      <ArticleFurtherReading title="Go Deeper" items={FURTHER_READING} />

      <ArticleCallout variant="dark" title="If the Market Was Never a Choice">
        <p>
          If the wage was never one option among several — if it became the only door left standing
          only after the commons were enclosed, gleaning was outlawed, standing without work was
          made a crime, and the women who held independent knowledge were destroyed — then every
          argument that rests on the market being a neutral, voluntary thing people naturally
          gravitated toward starts to look shakier. Whoever still holds the power to open or close a
          door like that, today, is not a passive referee. They are the same kind of actor the king,
          the Parliament, and the witch-hunting court once were. The next question is simply: who
          holds that power now, and what specific door are they closing while telling you it was
          always open.
        </p>
      </ArticleCallout>

      <ArticleSources>
        <p>
          <strong>Primary and archival sources:</strong> Charter of the Forest (1217); Property
          Qualification Act (1711); Vagabonds Act 1547; <em>Steel v Houghton</em>, 1 H Bl 51, 126 ER
          32 (1788); the 29 demands of Kett&rsquo;s Rebellion (1549, digitized by the British Library);
          Giovanni Villani, contemporary Florentine chronicle (14th century).
        </p>
        <p>
          <strong>Secondary sources:</strong> Karl Marx, <em>Capital</em>, Vol. 1, chs. 27&ndash;28
          (1867); Karl Polanyi, <em>The Great Transformation</em> (1944); E.P. Thompson,{' '}
          <em>The Making of the English Working Class</em> (1963) and <em>Whigs and Hunters</em>{' '}
          (1975); Silvia Federici, <em>Caliban and the Witch</em> (2004); Barbara Ehrenreich &amp;
          Deirdre English, <em>Witches, Midwives, and Nurses</em> (1973); Alan Macfarlane,{' '}
          <em>Witchcraft in Tudor and Stuart England</em> (1970); J.M. Neeson,{' '}
          <em>Commoners: Common Right, Enclosure and Social Change in England, 1700&ndash;1820</em>{' '}
          (1993); J.R. Wordie, &ldquo;The Chronology of English Enclosure, 1500&ndash;1914,&rdquo;{' '}
          <em>Economic History Review</em> (1983); Peter King, &ldquo;Customary Rights and Women&rsquo;s
          Earnings,&rdquo; <em>Economic History Review</em> (1991); Edwin S. Hunt,{' '}
          <em>The Medieval Super-Companies</em> (1994); Raymond de Roover,{' '}
          <em>The Rise and Decline of the Medici Bank, 1397&ndash;1494</em> (1963); Adrian Bell,
          Chris Brooks &amp; Tony Moore, &ldquo;Cambium non est mutuum,&rdquo;{' '}
          <em>Economic History Review</em> (2017); Peter Bakewell,{' '}
          <em>Miners of the Red Mountain: Indian Labor in Potosí, 1545&ndash;1650</em> (1984);
          Carlos Álvarez-Nogal &amp; Christophe Chamley, &ldquo;Debt policy under constraints,&rdquo;{' '}
          <em>Economic History Review</em> (2014); UK Parliament, &ldquo;Enclosing the land,&rdquo;
          parliament.uk historical resources.
        </p>
        <p>
          Where historians disagree on a specific figure — total enclosure acreage, witch-trial
          death tolls, the scale of the Bardi/Peruzzi losses to Edward III — this article states the
          range and names the disagreement rather than picking a single number, and flags where a
          popularly repeated figure could not be independently verified against its original source.
        </p>
      </ArticleSources>
    </ArticleLayout>
  );
}
