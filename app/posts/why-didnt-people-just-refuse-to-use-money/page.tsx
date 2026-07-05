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
      'wordCount': 2900,
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
  { id: 'money-that-demands-more-money-back', text: 'The Trick That Created Money From Nothing', level: 2 },
  { id: 'who-was-actually-in-the-room', text: 'Who Was Actually in the Room', level: 2 },
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
        readingTime="14 min read"
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
          And &ldquo;taken away&rdquo; has a specific name and a specific physical shape: <strong>enclosure</strong>.
          A fence went up, or a hedge got planted, around land that used to be open to everyone who
          held a right to it. Once that fence was up, one person owned everything inside it. Every
          right anyone else had held there simply stopped existing. That is the whole mechanism.
          Almost everything in this piece is some version of that fence going up.
        </P>
        <P>
          If you lived in an English village before that happened, you likely had a right called{' '}
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
          Before I show you what the merchants built, let&rsquo;s go back to something from the first
          part of this story, because it matters more than it seemed to at the time: credit — the
          oldest system, the &ldquo;I owe you one&rdquo; — worked because the two people involved knew each
          other. There was a relationship. If I never returned your favor, I didn&rsquo;t just owe you
          something. I lost you. That&rsquo;s what made it self-enforcing, without anyone needing to
          write anything down or measure anything in numbers.
        </P>
        <P>
          Notice what that system cannot do. It cannot feed a king&rsquo;s army. A soldier posted three
          hundred kilometers from where he grew up, in a village whose people have never met him
          and owe him nothing, cannot survive on &ldquo;I owe you one.&rdquo; There is no relationship there
          to enforce the debt. That&rsquo;s the actual reason coin exists at all — not because barter
          was inefficient, but because credit doesn&rsquo;t scale to strangers, and an empire is
          mostly strangers.
        </P>
        <P>
          But coin creates a new, very physical problem the moment trade grows past your own
          village: a merchant carrying a bag of silver from one city to the next is carrying
          something every bandit on the road can see the point of stealing. So a solution appeared,
          and it appeared first and most fully in the trading world of the Abbasid Caliphate,
          centered on Baghdad, from around the ninth century onward. Merchants and bankers there
          — the money-changers were called <em>sarraf</em>, and the caliph&rsquo;s own treasury bankers{' '}
          <em>jahabidha</em> — used written instruments called <strong>sakk</strong> and{' '}
          <strong>suftaja</strong>, a kind of letter of credit that let a merchant deposit coin in
          one city and collect the equivalent in another, without ever carrying metal on the road
          between them.{' '}
          <span className="text-sm text-gray-400 not-italic">(Graeber, <em>Debt: The First 5,000 Years</em>, 2011; Udovitch, <em>Bankers Without Banks</em>, 1979)</span>{' '}
          A real, working credit economy, centuries before anything like it existed in Christian
          Europe, that let money move without moving.
        </P>
        <P>
          I want you to notice one more thing about the suftaja specifically, because it&rsquo;s the
          detail that makes the next part of this story land. Islamic law banned <em>riba</em> —
          interest — just as strictly as the Christian Church banned usury. So the suftaja had a
          built-in rule: whatever you deposited had to be paid back in the <em>same</em> currency,
          not converted into another one. That rule existed specifically so nobody could hide a
          profit inside a currency-exchange spread. In other words: this note was honest. It
          represented real coin that genuinely existed somewhere, waiting to be collected. It was
          a receipt, nothing more.
        </P>
      </ArticleSection>

      <ArticleSection id="money-that-demands-more-money-back">
        <H2 id="money-that-demands-more-money-back">The Trick That Created Money From Nothing</H2>
        <P>
          Now I want to take you to London, six hundred years later, because this is the moment
          that note stopped being honest — and I think it is the single most important moment in
          this entire story, because it is the first time anyone, anywhere, created money that had
          nothing real behind it at all.
        </P>
        <P>
          In 1640, Charles I did something that broke a specific kind of trust: he seized roughly
          &pound;200,000 in gold that London merchants had deposited at the Royal Mint, in the Tower
          of London, for safekeeping — money he wanted for his own spending. He eventually gave
          most of it back, under pressure, but the damage was done: merchants had just learned that
          the King&rsquo;s own mint was not a safe place to store their coin.{' '}
          <span className="text-sm text-gray-400 not-italic">(1640 seizure of merchants&rsquo; bullion, Tower of London Mint)</span> Over the following two
          decades — through the chaos of the Civil War and into the 1660s — merchants shifted to
          storing their gold instead with private goldsmiths, men whose actual trade was working
          metal, not banking. By the 1670s there were something like forty-four of these
          goldsmith-bankers operating in London, with names like Edward Backwell, Robert Vyner, and
          Francis Child now well documented in surviving ledgers.{' '}
          <span className="text-sm text-gray-400 not-italic">(Quinn, &ldquo;Goldsmith-Banking,&rdquo; <em>Explorations in Economic History</em>, 1997)</span>
        </P>
        <P>
          Here is exactly what a goldsmith did. A merchant handed over a bag of gold coin. The
          goldsmith wrote out a receipt certifying how much he&rsquo;d received and promising to pay it
          back on demand. That receipt is the same idea as the suftaja: an honest note, representing
          real coin sitting in a vault.
        </P>
        <P>
          But a goldsmith holding hundreds of these deposits could see something a single merchant
          never could: on any given day, only a small fraction of depositors actually showed up to
          withdraw their gold. Most of the receipts just kept circulating, hand to hand, as a
          convenient substitute for carrying coin — nobody ever presented them all at once. And once
          you can see that, a very specific temptation opens up. What if you issued <em>more</em>{' '}
          receipts than you actually had gold to back?
        </P>
        <P>
          Their own surviving ledgers confirm it: goldsmiths routinely held only a fraction of
          what their outstanding notes claimed &mdash; cash reserves as low as 10 percent of the
          notes in circulation, depending on the banker.{' '}
          <span className="text-sm text-gray-400 not-italic">(Cantillon&rsquo;s observation, discussed in Quinn, 1997)</span> Money that had never been mined, dug up, or earned
          came into existence because a goldsmith wrote a number on a piece of paper.
        </P>
        <P>
          Notice exactly what changed. The goldsmith&rsquo;s note has a number on it — &ldquo;worth &pound;10,&rdquo;
          not &ldquo;Ajey owes Radhika one.&rdquo; It isn&rsquo;t personal. Anyone can hold it, spend it, steal it.
          It still says, in words, &ldquo;I promise to pay the bearer&rdquo; — but it behaves like a coin, not
          a promise between two people who know each other. And it is worse than a coin, because a
          coin at least requires real metal to exist. This required nothing but confidence.
        </P>
        <P>
          That&rsquo;s one half of how everyone ended up dependent on money — money itself became a
          thing a private few could simply create. The other half happened on English soil, in
          plain daylight, written into the law.
        </P>
      </ArticleSection>

      <ArticleSection id="who-was-actually-in-the-room">
        <H2 id="who-was-actually-in-the-room">Who Was Actually in the Room</H2>
        <P>
          Here is the part that is almost never said out loud, even though it is not a matter of
          opinion — it is written directly into the law. In 1711, Parliament passed the{' '}
          <strong>Property Qualification Act</strong>, which required anyone sitting as an MP to
          own a substantial landed estate. The stated purpose, in the words used at the time, was
          to exclude &ldquo;courtiers, military men, and merchants&rdquo; from Parliament, so that — again,
          in their own words — &ldquo;the land interest would be the prevailing consideration in all
          their consultations.&rdquo; <span className="text-sm text-gray-400 not-italic">(Property Qualification Act, 1711)</span> Parliament legally engineered itself, on purpose, to be a
          body of landowners. As late as 1818, close to 70 percent of MPs either owned a landed
          estate or came from a family that did.
        </P>
        <P>
          Local landowners petitioned Parliament to enclose their parish&rsquo;s common land. Assent
          was counted by land value, not by people — so
          a handful of large landowners could out-vote everyone else. The petition went to a
          Parliamentary committee of the same class of men who owned land just like it, which
          approved the bill and appointed commissioners — usually chosen by the petitioning
          landowners themselves — to survey the parish and hand out the newly enclosed plots.{' '}
          <span className="text-sm text-gray-400 not-italic">(UK Parliament, &ldquo;Enclosing the land,&rdquo; parliament.uk)</span> Land that people without formal title had used for
          generations, taken by a vote of the people who wanted it taken. The historian E.P.
          Thompson called it &ldquo;a plain enough case of class robbery, played according to fair rules
          of property and law laid down by a parliament of property-owners and lawyers.&rdquo;{' '}
          <span className="text-sm text-gray-400 not-italic">(Thompson, <em>The Making of the English Working Class</em>, 1963)</span>
        </P>
        <P>
          Between 1604 and 1914, that process produced <strong>over 5,200</strong> separate
          enclosure Acts, converting roughly <strong>6.8 million acres</strong> — about a fifth of
          England&rsquo;s total land — from common land into private property.{' '}
          <span className="text-sm text-gray-400 not-italic">(UK Parliament, &ldquo;Enclosing the land&rdquo;)</span> In Wollaston, Northamptonshire, one Act in 1788 dropped
          the number of separate landowners in the village from 108 to 18. The other ninety didn&rsquo;t
          vanish, but something in how they lived changed completely. Before, if you spent the day
          tending your own strip or grazing your own cow, what came of it went straight into your
          own house. Now there was no strip, no cow, no wood to gather from. The only thing left to
          offer anyone was your own body&rsquo;s effort, hour by hour — and whoever bought those hours
          owned what your hands made, not you. That specific relationship, your own effort bought
          and sold by the hour, barely existed at this scale before the fences went up. It has a
          name: <strong>wage labor</strong>. Not a new way of getting paid for what you&rsquo;d always
          done. The one thing left to sell, once everything else had been fenced off.
        </P>
        <P>
          People fought this every generation, for three centuries — Robert Kett leading 16,000
          people against enclosure at Norwich in 1549; Gerrard Winstanley&rsquo;s Diggers planting
          vegetables on common land at St George&rsquo;s Hill in 1649; villagers at West Haddon burning
          a fresh 2,000-acre enclosure&rsquo;s fences in 1765, under cover of a football match they&rsquo;d
          advertised in the local paper.{' '}
          <span className="text-sm text-gray-400 not-italic">(Kett&rsquo;s Rebellion, 1549; St George&rsquo;s Hill Diggers, 1649&ndash;1650; West Haddon riot, 1765, discussed in Neeson, <em>Commoners</em>, 1993)</span> Almost every enclosure went ahead anyway. Parliament
          never needed to win the argument. It only needed to win the vote, and it had already
          arranged, by its own property qualification, who got to hold one.
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
          That specific slavery clause was so unworkable it got repealed within about two years.
          But notice what the repeal did and didn&rsquo;t do. It removed one especially brutal
          enforcement mechanism. It did not remove the underlying principle, which reappeared in
          milder but still punitive form in later vagrancy statutes for the rest of the early
          modern period: a person who cannot show they are working for a wage, or that they have
          independent means, has no legal right to simply exist where they are standing.
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
          because it involves real people burned alive.
        </P>
        <P>
          Tens of thousands of people were executed for witchcraft across Europe, concentrated
          between about 1450 and 1750, and the overwhelming majority were women.{' '}
          <span className="text-sm text-gray-400 not-italic">(Levack, Barstow, Hutton, Sharpe)</span> The historian{' '}
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
          the 1640 seizure of merchants&rsquo; bullion at the Tower of London Mint.
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
          Earnings,&rdquo; <em>Economic History Review</em> (1991); David Graeber,{' '}
          <em>Debt: The First 5,000 Years</em> (2011); Abraham L. Udovitch,{' '}
          <em>Bankers Without Banks: Commerce, Banking, and Society in the Islamic World of the
          Middle Ages</em> (1979); Stephen Quinn, &ldquo;Goldsmith-Banking: Mutual Acceptance and
          Interbanker Clearing in Restoration London,&rdquo; <em>Explorations in Economic History</em>{' '}
          (1997); George Selgin, &ldquo;Those Dishonest Goldsmiths,&rdquo; <em>Financial History Review</em>{' '}
          (2012); UK Parliament, &ldquo;Enclosing the land,&rdquo; parliament.uk historical resources.
        </p>
        <p>
          <strong>Notes on disputed figures:</strong> Total enclosure acreage is Parliament&rsquo;s own
          count (over 5,200 Acts, ~6.8 million acres, 1604&ndash;1914); other historians measuring
          differently put it as high as 8 million acres, and Wordie (1983) argues England was
          already roughly three-quarters enclosed by 1760, before most of these Acts passed.
          Witch-trial death tolls across Europe are estimated anywhere from 40,000 to over
          100,000 depending on the historian. Whether the London goldsmiths&rsquo; over-issuance of
          notes was fraud or a legally ambiguous but not dishonest banking custom is disputed —
          Selgin (2012) argues the latter against the more common telling.
        </p>
      </ArticleSources>
    </ArticleLayout>
  );
}
