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
  title: 'What Is Money: Part 3 | Left Diary',
  description: "The King minted his own coin and could make as much of it as he wanted. So why, by 1694, was he borrowing money from private merchants and paying back more than he borrowed? One transaction, on one date, permanently separated the power to create money from the Crown that had held it since the whole story began.",
  keywords: [
    'how was the Bank of England founded',
    'why was the national debt created',
    'stop of the exchequer 1672',
    'great debasement Henry VIII',
    'history of national debt explained',
    'Bank of England 1694 explained',
    'Glorious Revolution and money',
    'what is national debt really',
    'history of interest and borrowing',
    'excise tax history England',
    'history of money part 3'
  ],
  openGraph: {
    title: 'What Is Money: Part 3',
    description: "The King could mint as much money as he wanted. So why did he end up borrowing it, and paying back more than he borrowed? One deal, on one date, answers it.",
    type: 'article',
    publishedTime: '2026-07-18',
    modifiedTime: '2026-07-18',
    authors: ['https://leftdiary.com/about'],
    section: 'Economics',
    tags: ['money', 'national debt', 'Bank of England', 'history', 'interest'],
    siteName: 'Left Diary',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Is Money: Part 3',
    description: "The King minted his own coin. So why did he end up borrowing money, and paying back more than he borrowed? One deal, on one date, in exchange for one war.",
    site: '@leftdiary',
    creator: '@leftdiary',
  },
  alternates: {
    canonical: 'https://leftdiary.com/posts/how-did-the-king-lose-the-power-to-make-money'
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
      '@id': 'https://leftdiary.com/posts/how-did-the-king-lose-the-power-to-make-money#article',
      'headline': 'What Is Money: Part 3',
      'description': "The King minted his own coin and could make as much of it as he wanted. So why, by 1694, was he borrowing money from private merchants and paying back more than he borrowed? One transaction, on one date, permanently separated the power to create money from the Crown that had held it since the whole story began.",
      'image': [
        {
          '@type': 'ImageObject',
          'url': 'https://leftdiary.com/posts/how-did-the-king-lose-the-power-to-make-money/opengraph-image',
          'width': 1200,
          'height': 630
        }
      ],
      'datePublished': '2026-07-18T00:00:00+00:00',
      'dateModified': '2026-07-18T00:00:00+00:00',
      'author': { '@type': 'Organization', 'name': 'Left Diary', 'url': 'https://leftdiary.com' },
      'publisher': {
        '@type': 'Organization',
        'name': 'Left Diary',
        'url': 'https://leftdiary.com',
        'logo': { '@type': 'ImageObject', 'url': 'https://leftdiary.com/logo.png', 'width': 600, 'height': 60 }
      },
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': 'https://leftdiary.com/posts/how-did-the-king-lose-the-power-to-make-money'
      },
      'keywords': 'national debt history, Bank of England 1694, stop of the exchequer, great debasement, excise tax history',
      'articleSection': 'Economics',
      'wordCount': 2650,
      'inLanguage': 'en-US',
      'isAccessibleForFree': true,
      'about': [
        { '@type': 'Thing', 'name': 'National Debt' },
        { '@type': 'Thing', 'name': 'Bank of England' },
        { '@type': 'Thing', 'name': 'Stop of the Exchequer' },
        { '@type': 'Thing', 'name': 'Great Debasement' }
      ]
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://leftdiary.com/posts/how-did-the-king-lose-the-power-to-make-money#breadcrumb',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://leftdiary.com' },
        { '@type': 'ListItem', 'position': 2, 'name': 'Posts', 'item': 'https://leftdiary.com/posts' },
        { '@type': 'ListItem', 'position': 3, 'name': 'What Is Money: Part 3', 'item': 'https://leftdiary.com/posts/how-did-the-king-lose-the-power-to-make-money' }
      ]
    }
  ]
};

const TOC_ITEMS: TOCItem[] = [
  { id: 'the-question-i-left-you-with', text: 'The Question I Left You With', level: 2 },
  { id: 'the-flaw-in-the-kings-own-coin', text: "The Flaw in the King's Own Coin", level: 2 },
  { id: 'the-merchants-had-something-faster', text: 'The Merchants Had Something Faster', level: 2 },
  { id: 'the-day-the-king-said-he-couldnt-pay', text: "The Day the King Said He Couldn't Pay", level: 2 },
  { id: 'one-deal-one-date', text: 'One Deal, One Date', level: 2 },
  { id: 'who-actually-paid-the-interest', text: 'Who Actually Paid the Interest', level: 2 },
  { id: 'two-fences-built-by-the-same-hands', text: 'Two Fences, Built by the Same Hands', level: 2 },
  { id: 'faq', text: 'Frequently Asked Questions', level: 2 },
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Why did the King of England need to borrow money if he could mint his own coins?',
    answer: (
      <>
        Coins were made of metal, and metal was finite: every war cost more silver and gold than
        the last, and the mines and treasury couldn&rsquo;t keep pace. Kings tried stretching the
        supply by reducing the precious metal in each coin (debasement), but that destroyed trust
        in the coin. By the late 1600s, London&rsquo;s goldsmith-bankers had built a faster kind of
        money, credit, that didn&rsquo;t depend on how much metal was in the ground, and kings fighting
        expensive wars started borrowing from them instead of relying only on their own mint.
      </>
    ),
  },
  {
    question: 'What was the Great Debasement, and why was Henry VIII called "Old Coppernose"?',
    answer: (
      <>
        Between 1544 and 1551, to fund wars against France and Scotland, Henry VIII&rsquo;s mint
        reduced the silver content of English coins and mixed in more copper, while keeping the
        same face value. The thin layer of silver wore away fastest at the highest point of the
        coin&rsquo;s design, which was the king&rsquo;s own engraved nose, revealing the copper underneath.
        People started calling him &ldquo;Old Coppernose.&rdquo; Confidence in English coinage was
        damaged for years afterward.
      </>
    ),
  },
  {
    question: 'What was the Stop of the Exchequer of 1672?',
    answer: (
      <>
        In January 1672, Charles II issued a proclamation suspending all payments the Exchequer
        owed, both principal and interest, to the London goldsmith-bankers who had lent the Crown
        over &pound;1.2 million. Five leading goldsmith-banking houses went bankrupt, nine more were
        badly damaged, and more than ten thousand families with money tied up in the system were
        financially hurt. It remains the last time the English Crown ever defaulted on a debt.
      </>
    ),
  },
  {
    question: 'Why was the Bank of England founded in 1694?',
    answer: (
      <>
        After the 1672 default, private lenders no longer trusted a king&rsquo;s personal word alone.
        The 1688 Glorious Revolution gave Parliament ongoing control over Crown spending, which
        made lending to England more credible again, since an institution stood behind the promise,
        not just one man. In 1694, when William III needed &pound;1.2 million to fight France, a group
        of merchants lent it to him in exchange for a permanent royal charter to operate as a bank,
        hold the government&rsquo;s debt, and issue banknotes. That charter created the Bank of England.
      </>
    ),
  },
  {
    question: "Is the national debt the same kind of debt as a household's?",
    answer: (
      <>
        No. A household debt is generally expected to be paid off and end. The debt created in
        1694 was structured differently from the start: the lenders received a permanent
        institution, not a repayment date, and the government&rsquo;s ongoing relationship with its
        own currency has run through that same kind of arrangement ever since. It was never
        designed to reach zero.
      </>
    ),
  },
];

const FURTHER_READING: FurtherReadingItem[] = [
  {
    href: 'https://medium.com/@ajejey/what-is-money-a-naive-persons-guide-to-money-3a13f7aad5b4',
    title: "What Is Money? A Naive Person's Guide to Money — Part 1",
    description: 'where this series started: the king, the coin, and the tax that invented the market',
    external: true,
  },
  {
    href: '/posts/why-didnt-people-just-refuse-to-use-money',
    title: 'What Is Money: Part 2',
    description: 'the commons enclosed, and the goldsmiths who first created money from nothing',
  },
  {
    href: '/posts/how-did-interest-lead-to-the-conquest-of-bengal',
    title: 'What Is Money: Part 4',
    description: 'the same financial engine that fenced English commons goes looking for its next fence',
  },
  {
    href: '/posts/what-is-austerity',
    title: 'What Is Austerity?',
    description: '"we can\'t afford it" as a political choice dressed up as a financial law',
  },
  {
    href: 'https://www.bankofengland.co.uk/about/history',
    title: 'History — Bank of England',
    description: "the Bank's own account of its 1694 founding",
    external: true,
  },
];

export default function HowDidTheKingLoseThePowerToMakeMoneyPage() {
  return (
    <ArticleLayout jsonLd={jsonLd}>
      <ArticleHeader
        categories={['Economics', 'History', 'Money']}
        title="What Is Money: Part 3"
        lead={
          <>
            <Link
              href="/posts/why-didnt-people-just-refuse-to-use-money"
              className="underline decoration-gray-400 hover:decoration-gray-700"
            >
              Last time
            </Link>
            , I told you about two things that hadn&rsquo;t yet found each other: a King who still,
            in theory, held the only legal power to create money in his own kingdom, and a handful
            of London goldsmiths who had just worked out how to create money too, with nothing but
            a pen. I told you they were about to collide, and that the King would come out of it
            having lost the power this entire story started with. This is where that happens.
          </>
        }
        date="July 18, 2026"
        dateTime="2026-07-18"
        readingTime="14 min read"
      />

      <ArticleTOC items={TOC_ITEMS} />

      <ArticleSection id="the-question-i-left-you-with">
        <H2 id="the-question-i-left-you-with">The Question I Left You With</H2>
        <P>
          Last time ended with two threads that hadn&rsquo;t yet met: a King who still, in theory,
          held the only legal power to create money in his own kingdom, and a handful of London
          goldsmiths who&rsquo;d just discovered they could create money too, with nothing but a pen
          and a promise. I told you these two threads were about to collide. This is that
          collision, and by the end of it, the King has lost the power the whole story started
          with.
        </P>
        <P>
          Here is how it happened, and it did happen: on a specific afternoon, to specific
          people, for a specific war, not as some slow, inevitable drift of history. By the end
          of the seventeenth century, the King of England was borrowing money from private
          citizens, on terms they set, and handing back more than he&rsquo;d borrowed to get it. That
          borrowing didn&rsquo;t stay a one-off arrangement between a king and a few lenders. It became
          permanent. Everything that follows from that, including what a government means today
          when it says it &ldquo;can&rsquo;t afford&rdquo; something, runs straight back to it.
        </P>
      </ArticleSection>

      <ArticleSection id="the-flaw-in-the-kings-own-coin">
        <H2 id="the-flaw-in-the-kings-own-coin">The Flaw in the King&rsquo;s Own Coin</H2>
        <P>
          To understand why a king who can make his own money still runs out of it, remember what
          his money actually was: metal. Silver and gold, dug out of the ground, in finite supply,
          and every war he fought cost more of it than the last.
        </P>
        <P>
          Henry VIII fought expensive wars against France and Scotland through the 1540s, and at
          some point the mines and treasury simply couldn&rsquo;t keep up with what the fighting
          cost. So his mint did something specific: between 1544 and 1551, in a policy historians
          now call the <strong>Great Debasement</strong>, it mixed steadily more copper into the
          silver coins while stamping them with the same face value as before.{' '}
          <span className="text-sm text-gray-400 not-italic">
            (<em>The Great Debasement</em>, 1544&ndash;1551, Royal Mint historical records)
          </span>{' '}
          A coin that used to be almost entirely silver was, by 1551, mostly copper with a thin
          wash of silver over the top.
        </P>
        <P>
          For a while this worked, in the narrow sense that it let Henry mint more coins from the
          same amount of actual silver. But coins get handled. They rub against pockets, purses,
          other coins, and the thin silver wore away fastest at the highest point of the design,
          which happened to be the king&rsquo;s own engraved nose on the front of the coin. Copper
          showed through. People started calling him &ldquo;Old Coppernose,&rdquo; to his face, on the very
          money he&rsquo;d made.
        </P>
        <P>
          And once people could see, literally see, that the coin in their hand held less real
          silver than it used to, they stopped trusting it to be worth what it claimed. A baker who
          used to take one debased coin for a loaf of bread started asking for two. Nobody voted on
          this. Nobody announced a policy. It just happened, coin by coin, transaction by
          transaction, as people quietly adjusted for what they could see and feel was no longer
          true.
        </P>
        <P>
          That is the flaw sitting inside every metal currency: the person who controls the mint
          can always make more of it by making each unit worth less, and the moment people notice,
          the trick stops working. The king had, in effect, spent his own credibility. That turns
          out to matter enormously for what happens next, because credibility is exactly what the
          next system ran on.
        </P>
      </ArticleSection>

      <ArticleSection id="the-merchants-had-something-faster">
        <H2 id="the-merchants-had-something-faster">The Merchants Had Something Faster</H2>
        <P>
          <Link
            href="/posts/why-didnt-people-just-refuse-to-use-money"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            I told you last time
          </Link>{' '}
          about the London goldsmiths: how merchants started storing their gold with them for
          safekeeping, how the goldsmiths issued paper receipts for that gold, and how, within a
          few decades, those goldsmiths worked out they could issue more receipts than they
          actually had gold to back, because hardly anyone ever asked for all their gold back at
          once. That is where money that had never been mined or earned first came into existence
          in London.
        </P>
        <P>
          Watch what that gave the goldsmiths that the king, with his mines running low and his
          coins losing trust, no longer had: a way to produce large amounts of money fast, without
          waiting on a mine to be dug or a war to be won. And a king fighting expensive wars needs
          exactly that kind of speed.
        </P>
        <P>
          So through the 1660s, the Crown started doing something new: instead of relying only on
          its own mint, it began borrowing directly from London&rsquo;s goldsmith-bankers, the same
          men who&rsquo;d built this faster kind of money. But this money came with a condition the
          king&rsquo;s own coin had never carried. When the king minted a coin and later demanded it
          back as tax, he got back exactly what he&rsquo;d given: the same coin. When he borrowed from
          a goldsmith, the deal was different: give this back, plus more. Not the same amount
          returned, but more than was lent, every time, as a condition of the loan itself. That
          &ldquo;more&rdquo; is what we call <strong>interest</strong>, and once you see it laid out this way,
          you can see exactly why it exists: it is the price a lender charges for letting someone
          else use money they created, and it guarantees the borrower can never simply return to
          where they started. They always owe past where they began.
        </P>
      </ArticleSection>

      <ArticleSection id="the-day-the-king-said-he-couldnt-pay">
        <H2 id="the-day-the-king-said-he-couldnt-pay">The Day the King Said He Couldn&rsquo;t Pay</H2>
        <P>
          By the late 1660s, Charles II was borrowing more and more from these goldsmith-bankers,
          to cover the gap between what Parliament would authorize in taxes and what his wars and
          his court actually cost. Loan after loan, secured against tax revenue Parliament hadn&rsquo;t
          even collected yet.
        </P>
        <P>
          Then, in January 1672, he simply stopped paying. Not partially, not with an apology and a
          plan to catch up later: a royal proclamation suspended all payments the Exchequer owed,
          principal and interest both, to the men who had lent the Crown well over &pound;1.2 million.
          Historians call it the <strong>Stop of the Exchequer</strong>, and it remains, to this
          day, the last time the English Crown ever defaulted on a debt. Five of London&rsquo;s leading
          goldsmith-banking houses went bankrupt outright. Nine more were badly damaged. More than
          ten thousand families with money tied up in the system, directly or indirectly, were
          financially hurt.{' '}
          <span className="text-sm text-gray-400 not-italic">
            (Stop of the Exchequer, January 1672)
          </span>
        </P>
        <P>
          Notice what the king actually broke here. Not a law, exactly: a king suspending his own
          Exchequer&rsquo;s payments wasn&rsquo;t clearly illegal. He broke trust, specifically the trust of
          the one class of people who could lend him money fast enough to fight a modern war. And
          trust, once a goldsmith has been burned by it, doesn&rsquo;t come back on the same terms. If
          England&rsquo;s kings wanted access to that kind of money again, somebody was going to have to
          change the deal so a king could never simply walk away from it a second time.
        </P>
      </ArticleSection>

      <ArticleSection id="one-deal-one-date">
        <H2 id="one-deal-one-date">One Deal, One Date</H2>
        <P>
          That change came fast, and from an unexpected direction: not a new coin, not a wealthier
          king, but a change in who actually controlled the country&rsquo;s money.
        </P>
        <P>
          In 1688, Parliament removed James II and brought over William of Orange and his wife
          Mary to take the throne, in what&rsquo;s called the Glorious Revolution. Whatever else that
          revolution was about, one of its lasting effects, one that economic historians Douglass
          North and Barry Weingast later traced in detail, was this: afterward, the Crown could no
          longer raise or spend money without Parliament&rsquo;s ongoing consent.{' '}
          <span className="text-sm text-gray-400 not-italic">
            (North &amp; Weingast, &ldquo;Constitutions and Commitment,&rdquo; <em>Journal of Economic
            History</em>, 1989)
          </span>{' '}
          A lender looking at a King of England after 1689 wasn&rsquo;t just trusting one man&rsquo;s word
          anymore. They were trusting an institution, one that had just proven it could remove a
          king who overstepped it, and that made a very specific promise credible for the first
          time: a promise that a loan to the Crown would actually be repaid, on schedule, because
          Parliament itself now stood behind the spending, not the king personally.
        </P>
        <P>
          William III needed that credibility immediately, because he inherited an expensive war
          against France, and after 1672 no group of lenders was going to hand an English king a
          large sum on the old personal terms. So in 1694, a group of merchants and financiers put
          together a loan of &pound;1.2 million, an enormous sum, meant to cover the cost of rebuilding
          England&rsquo;s navy for that war. And in exchange for that loan, they didn&rsquo;t ask for a
          king&rsquo;s personal promise to repay them someday, whenever it suited him. They asked for,
          and received, a permanent royal charter: the legal right to operate as a bank, to hold
          the government&rsquo;s debt, and to issue banknotes, backed by dedicated tax revenue that
          Parliament itself had approved to cover the interest. On 27 July 1694, that charter
          created the <strong>Bank of England</strong>.
        </P>
        <P>
          That is the specific date, the specific amount, and the specific people. Not a slow drift
          of history, not an abstract &ldquo;evolution&rdquo; of finance. One transaction, on one day, in
          exchange for one war, permanently separated the power to create England&rsquo;s money from the
          Crown that had held it since the whole story began with a king minting coin and demanding
          it back as tax.
        </P>
        <P>
          And notice exactly what kind of debt got created, because the word hides it. Say
          &ldquo;national debt&rdquo; and you probably picture a household: a family that spent beyond its
          means, tightening its belt until the debt is paid off and they can breathe again. That
          was never this. The merchants of 1694 weren&rsquo;t repaid and sent home. They were handed a
          permanent institution, one whose entire job was managing this exact debt and the
          government&rsquo;s money together, forever. There was no version of the deal where the debt
          reaches zero and the Bank of England quietly closes its doors, mission accomplished. The
          debt wasn&rsquo;t an accident of the arrangement. It was the arrangement.
        </P>
      </ArticleSection>

      <ArticleSection id="who-actually-paid-the-interest">
        <H2 id="who-actually-paid-the-interest">Who Actually Paid the Interest</H2>
        <P>
          Here&rsquo;s the question that follows immediately, and I want to be careful with it, because
          the honest answer involves connecting two facts that are each well documented on their
          own, without pretending historians have proven they were planned together on purpose.
        </P>
        <P>
          That &pound;1.2 million loan, and the larger debt that grew from it as later governments
          borrowed more the same way, needed a steady stream of tax money to cover its interest,
          not just once but forever. Land taxes already existed, and so did the Poor Rate, a local
          tax that funded relief for the poor, both with exemptions built in for people with little
          property. But through the eighteenth century, the tax that grew fastest, and became by
          far the largest source of government revenue, was <strong>excise</strong>: a tax built
          directly into the price of everyday goods like salt, soap, candles, beer, and malt.
          Historian John Brewer&rsquo;s research puts excise at roughly a quarter of English tax revenue
          around 1700, rising to over half of it by the middle of the eighteenth century.{' '}
          <span className="text-sm text-gray-400 not-italic">
            (Brewer, <em>The Sinews of Power</em>, 1989; O&rsquo;Brien, &ldquo;The Political Economy of
            British Taxation, 1660&ndash;1815,&rdquo; <em>Economic History Review</em>, 1988)
          </span>
        </P>
        <P>
          Notice what that tax didn&rsquo;t ask. It didn&rsquo;t ask how much land you owned. It didn&rsquo;t ask
          how much you earned. It was baked into the price of things every household needed
          regardless of wealth, so a farm laborer and a wealthy merchant paid the same tax on the
          same candle, even though it took up a wildly different share of what each of them had.
          William Kennedy, writing about English taxation in exactly this period, titled one
          chapter of his book, plainly, &ldquo;Political Philosophy and the Taxation of the Poor.&rdquo;{' '}
          <span className="text-sm text-gray-400 not-italic">
            (Kennedy, <em>English Taxation 1640&ndash;1799</em>, 1913)
          </span>
        </P>
        <P>
          I want to say clearly what I can&rsquo;t say: no historian I&rsquo;ve found has produced a
          document, a letter, a debate, proving that Parliament designed excise taxes specifically
          to fund debt owed to the same merchant class that was collecting it. That would need its
          own proof, and I don&rsquo;t have it. What I can say is that both facts are independently,
          solidly documented: a permanent government debt was created in 1694 for the benefit of a
          specific group of merchants and financiers, and within decades, the tax that grew to
          dominate government revenue was one that fell hardest, proportionally, on people who
          owned nothing. I&rsquo;ll let those two facts sit next to each other, because I think they&rsquo;re
          worth noticing even without a third document proving intent.
        </P>
      </ArticleSection>

      <ArticleSection id="two-fences-built-by-the-same-hands">
        <H2 id="two-fences-built-by-the-same-hands">Two Fences, Built by the Same Hands</H2>
        <P>
          Put this next to what I showed you last time, and the shape of the whole story becomes
          hard to unsee. In roughly the same stretch of English history, the same class of men,
          merchants, financiers, the landowners who filled Parliament, built two separate machines
          that did the same job through two completely different doors.
        </P>
        <P>
          One machine fenced the land. Common pasture, common wood, common water, all of it
          enclosed, one Act of Parliament at a time, until the wage was the only way left to
          survive.{' '}
          <Link
            href="/posts/why-didnt-people-just-refuse-to-use-money"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            I walked you through that in detail last time.
          </Link>
        </P>
        <P>
          The other machine, the one I&rsquo;ve walked you through here, fenced the money itself. A king
          who once minted coin and demanded it back as tax lost, permanently, in one transaction on
          one date, the power to create the money his own kingdom ran on. That power went to a
          private institution, backed by a debt that was never meant to be paid off, serviced by
          taxes that fell hardest on people who&rsquo;d already lost the commons.
        </P>
        <P>
          Neither fence asked anyone&rsquo;s permission. Both were built by people who sat in the same
          rooms. But there&rsquo;s a more immediate question the 1694 deal itself raises, one I haven&rsquo;t
          answered yet. That charter didn&rsquo;t just let a group of merchants manage a King&rsquo;s debt. It
          gave them money that demands more money back, permanently, at the scale of an entire
          nation. Money like that cannot sit still. It has to keep growing, or the arithmetic
          behind it stops working. So where does a room full of London financiers, holding a pile
          of money that has to keep expanding, go looking next, once one small island has already
          been fenced? That is where we go next.
        </P>
      </ArticleSection>

      <ArticleFAQ items={FAQ_ITEMS} />

      <ArticleFurtherReading title="Go Deeper" items={FURTHER_READING} />

      <ArticleCallout variant="dark" title="A Debt That Was Never Meant to End">
        <p>
          If the debt was never designed to be paid off, built as a permanent condition on the very
          day the country&rsquo;s money supply came into being, then every time a government says a
          hospital, a school, a pension is unaffordable because of the national debt, it is
          describing an old design choice as if it were a fact about the universe. The debt is not
          a symptom of a government spending badly. It is the structure the government&rsquo;s money has
          run on since 1694. Whoever benefits from managing that debt today is doing the same job
          the merchants who financed William III&rsquo;s war were doing: holding a permanent claim on a
          country&rsquo;s income, and calling it responsibility.
        </p>
      </ArticleCallout>

      <ArticleSources>
        <p>
          <strong>Primary and archival sources:</strong> the January 1672 proclamation suspending
          Exchequer payments (the Stop of the Exchequer); the Bank of England&rsquo;s royal charter,
          27 July 1694; Royal Mint historical records on the Great Debasement coinage, 1544&ndash;1551.
        </p>
        <p>
          <strong>Secondary sources:</strong> John Brewer, <em>The Sinews of Power: War, Money and
          the English State, 1688&ndash;1783</em> (1989); Patrick O&rsquo;Brien, &ldquo;The Political Economy of
          British Taxation, 1660&ndash;1815,&rdquo; <em>Economic History Review</em> (1988); William
          Kennedy, <em>English Taxation 1640&ndash;1799: An Essay on Policy and Opinion</em> (1913);
          Douglass C. North &amp; Barry R. Weingast, &ldquo;Constitutions and Commitment: The Evolution
          of Institutions Governing Public Choice in Seventeenth-Century England,&rdquo;{' '}
          <em>Journal of Economic History</em> (1989).
        </p>
        <p>
          <strong>Notes on disputed points:</strong> the North &amp; Weingast &ldquo;credible
          commitment&rdquo; thesis, that the Glorious Revolution alone made English government debt
          trustworthy, is influential but not unanimous among economic historians; later
          researchers, including Gary Cox, have argued the effect is overstated relative to other
          institutional changes of the period, or that the causal direction runs differently than
          North and Weingast proposed. The connection between the rise of excise taxation and the
          debt created in 1694 is, as stated above, an observation of two independently documented
          facts placed side by side, not a proven causal or deliberate link.
        </p>
      </ArticleSources>
    </ArticleLayout>
  );
}
