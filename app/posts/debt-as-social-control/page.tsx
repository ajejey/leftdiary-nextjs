import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArticleLayout,
  ArticleHeader,
  ArticleTOC,
  ArticleFAQ,
  ArticleFurtherReading,
  ArticleCallout,
  P,
  H2,
  H3,
  Blockquote,
  ArticleSection,
  ArticleSources,
} from '@/components/article';
import type { TOCItem, FAQItem, FurtherReadingItem } from '@/components/article/types';

export const metadata: Metadata = {
  title: 'How Does Debt Keep People In Line?',
  description:
    "Ancient Babylon cancelled debt every 30 years — not out of charity, but because they knew compound interest always produces more debt than can be repaid. Haiti paid France for 122 years for winning the Haitian Revolution. Here's how debt became the mechanism that keeps individuals, nations, and whole economies from getting free.",
  keywords: [
    'how does debt keep people in line',
    'debt as social control',
    'what is a debt jubilee',
    'David Graeber debt explained',
    'how does the IMF use debt',
    'Haiti French debt reparations',
    'compound interest explained simply',
    'history of debt jubilee',
    'student debt social control',
    'debt slavery explained',
  ],
  openGraph: {
    title: 'How Does Debt Keep People In Line?',
    description:
      "Ancient Babylon cancelled debt every 30 years. Haiti paid France for 122 years for winning the Haitian Revolution. Debt is older than money and has always been a mechanism of control. Here's how.",
    type: 'article',
    publishedTime: '2026-06-30T00:00:00Z',
    authors: ['Left Diary'],
    tags: ['Economics', 'Debt', 'History', 'Capitalism', 'Graeber'],
  },
  alternates: {
    canonical: 'https://leftdiary.com/posts/debt-as-social-control',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://leftdiary.com/posts/debt-as-social-control#article',
      headline: 'How Does Debt Keep People In Line?',
      description:
        "Ancient Babylon cancelled debt every 30 years because compound interest always produces more debt than can be repaid. Haiti paid France for 122 years for winning the Haitian Revolution. Here's how debt became the mechanism of control.",
      image: 'https://leftdiary.com/images/debt-social-control-cover.jpg',
      datePublished: '2026-06-30T00:00:00Z',
      dateModified: '2026-06-30T00:00:00Z',
      author: { '@type': 'Organization', name: 'Left Diary', url: 'https://leftdiary.com' },
      publisher: { '@type': 'Organization', name: 'Left Diary', url: 'https://leftdiary.com' },
      mainEntityOfPage: 'https://leftdiary.com/posts/debt-as-social-control',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://leftdiary.com/posts/debt-as-social-control#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is a debt jubilee?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "A debt jubilee is a cancellation of debt, typically decreed by a ruler. The practice goes back at least to ancient Mesopotamia (3000 BCE), where kings periodically cancelled agricultural debts because they understood that compound interest always produces more debt than can be repaid, eventually enslaving the population. The Biblical Year of Jubilee (Leviticus 25) mandated debt cancellation, freeing of debt slaves, and return of land every 50 years. Debt jubilees weren't charity — they were acts of political stability. Without them, debt accumulation destabilizes societies.",
          },
        },
        {
          '@type': 'Question',
          name: 'Is debt a form of social control?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Debt functions as social control by disciplining debtors: a person carrying debt — a mortgage, student loans, medical bills — cannot afford to strike, quit, organize, or take risks. Their future income is already committed. The mortgage disciplines workers into accepting bad jobs rather than lose their house. Student debt disciplines young people at the moment they might otherwise be most free to challenge the status quo. The IMF uses debt as leverage over developing nations, demanding austerity, privatization, and trade liberalization as conditions for loans — systematically preventing the development strategies that wealthy nations used to develop.",
          },
        },
        {
          '@type': 'Question',
          name: 'Did Haiti really pay France for the Haitian Revolution?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Yes. Haiti won independence from France in 1804 after the most successful slave revolt in history. France then imposed a blockade and demanded 150 million francs in 'reparations' — compensation to slaveholders for 'lost property' (the enslaved people). Haiti borrowed from French banks to pay this. A subsequent loan to pay off that debt was provided by an American bank — which Haiti then had to pay the US. A 2022 New York Times investigation found that Haiti paid the equivalent of approximately $115 billion in today's terms, over 122 years, for the crime of winning its own freedom. The debt ended in 1947.",
          },
        },
        {
          '@type': 'Question',
          name: 'How does the IMF use debt to control countries?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "When a country faces a debt crisis, the IMF offers loans with conditions called 'structural adjustment programs': cut public spending (healthcare, education, subsidies), privatize state enterprises, liberalize trade, open to foreign investment, devalue the currency. These conditions systematically prevent the development strategies that today's wealthy countries used to industrialize (protectionist tariffs, state investment, nationalized industries). The US, UK, Germany, South Korea, and Japan all developed behind protective walls. The IMF demands that developing nations abandon this playbook precisely when they most need it.",
          },
        },
        {
          '@type': 'Question',
          name: 'What did David Graeber say about debt?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "In 'Debt: The First 5,000 Years' (2011), David Graeber argued that debt is older than money — the first written records in history are debt records, not commodity prices. He showed that money didn't evolve from barter but from complex credit systems. He traced how debt has functioned as a mechanism of coercion throughout history: debt slavery was the first form of slavery. Debt creates a moral framework where the debtor is 'wrong' and the creditor is 'right,' regardless of how the debt was created. And compound interest always produces more debt than exists, requiring periodic jubilees or eventual social collapse.",
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://leftdiary.com/posts/debt-as-social-control#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://leftdiary.com' },
        { '@type': 'ListItem', position: 2, name: 'Posts', item: 'https://leftdiary.com/posts' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'How Does Debt Keep People In Line?',
          item: 'https://leftdiary.com/posts/debt-as-social-control',
        },
      ],
    },
  ],
};

const TOC_ITEMS: TOCItem[] = [
  { id: 'the-mechanism-left-out', text: 'Debt as Discipline', level: 2 },
  { id: 'debt-is-older-than-money', text: 'Debt Is Older Than Money', level: 2 },
  { id: 'the-debt-jubilee', text: 'Why Ancient Kings Cancelled Debt', level: 3 },
  { id: 'what-debt-does-to-people', text: 'What Debt Actually Does to People', level: 2 },
  { id: 'designed-inescapable', text: 'When Debt Is Designed to Be Inescapable', level: 3 },
  { id: 'haiti-paid-france', text: 'Haiti Paid France for Winning Its Own Revolution', level: 2 },
  { id: 'imf-debt-weapon', text: 'The IMF: Debt as Colonial Instrument', level: 2 },
  { id: 'compound-interest-problem', text: 'The Compound Interest Problem', level: 2 },
  { id: 'the-moral-trick', text: 'The Moral Trick', level: 2 },
  { id: 'faq', text: 'Common Questions', level: 2 },
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'What is a debt jubilee?',
    answer: (
      <>
        A debt jubilee is a cancellation of debt, typically decreed by a ruler or built into law.
        The practice goes back at least to ancient Mesopotamia (around 3000 BCE), where kings
        periodically cancelled agricultural debts because they understood compound interest always
        produces more debt than can be repaid. The Biblical Year of Jubilee (Leviticus 25) mandated
        debt cancellation, freeing of debt slaves, and return of land every 50 years.{' '}
        <a
          href="https://en.wikipedia.org/wiki/Jubilee_(biblical)"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-gray-400 hover:decoration-gray-700"
        >
          Debt jubilees
        </a>{' '}
        weren&apos;t charity — they were acts of political stability.
      </>
    ),
  },
  {
    question: 'Is debt a form of social control?',
    answer: (
      <>
        Debt disciplines debtors by committing their future income. A person carrying a mortgage,
        student loans, or medical debt cannot afford to strike, quit, organize, or take risks —
        their future is already mortgaged. The{' '}
        <a
          href="https://en.wikipedia.org/wiki/International_Monetary_Fund"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-gray-400 hover:decoration-gray-700"
        >
          IMF
        </a>{' '}
        uses sovereign debt to demand austerity, privatization, and trade liberalization from
        developing nations — systematically preventing the same development strategies that wealthy
        nations used to industrialize.
      </>
    ),
  },
  {
    question: 'Did Haiti really pay France for the Haitian Revolution?',
    answer: (
      <>
        Yes. Haiti won independence in 1804 after the most successful slave revolt in history.
        France then blockaded Haiti and demanded 150 million francs in &ldquo;reparations&rdquo; —
        compensation to slaveholders for &ldquo;lost property.&rdquo; Haiti borrowed from French
        banks to pay it. A 2022{' '}
        <a
          href="https://www.nytimes.com/interactive/2022/05/20/world/americas/haiti-history-colonized-france.html"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-gray-400 hover:decoration-gray-700"
        >
          <em>New York Times</em> investigation
        </a>{' '}
        found Haiti paid the equivalent of approximately $115 billion in total over 122 years —
        ending only in 1947.
      </>
    ),
  },
  {
    question: 'How does the IMF use debt to control countries?',
    answer: (
      <>
        When a country faces a debt crisis, the{' '}
        <a
          href="https://en.wikipedia.org/wiki/IMF_conditionality"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-gray-400 hover:decoration-gray-700"
        >
          IMF offers loans with conditions
        </a>{' '}
        called &ldquo;structural adjustment programs&rdquo;: cut public spending, privatize state
        enterprises, liberalize trade, open to foreign investment. These conditions prevent the
        same development strategies used by the US, UK, Germany, South Korea, and Japan — all of
        which industrialized behind protective tariffs and state investment — from being used by
        developing nations.
      </>
    ),
  },
  {
    question: 'What did David Graeber say about debt?',
    answer: (
      <>
        In{' '}
        <a
          href="https://en.wikipedia.org/wiki/Debt:_The_First_5000_Years"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-gray-400 hover:decoration-gray-700"
        >
          <em>Debt: The First 5,000 Years</em>
        </a>{' '}
        (2011),{' '}
        <a
          href="https://en.wikipedia.org/wiki/David_Graeber"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-gray-400 hover:decoration-gray-700"
        >
          David Graeber
        </a>{' '}
        showed that debt is older than money — the first written records are debt records, not
        commodity prices. Debt slavery was the first form of slavery. Compound interest always
        produces more debt than exists, requiring periodic jubilees or eventual social collapse.
        And debt creates a moral framework that makes the debtor &ldquo;wrong&rdquo; regardless of
        how the debt was created.
      </>
    ),
  },
];

const FURTHER_READING: FurtherReadingItem[] = [
  {
    href: '/posts/how-did-people-survive-before-capitalism',
    title: 'How Did People Survive Before Capitalism?',
    description: 'Enclosure removed the commons and manufactured wage dependency. Debt then locks in what enclosure started.',
  },
  {
    href: '/posts/why-did-colonizers-tax-africans',
    title: 'Why Did Colonizers Tax Africans?',
    description: 'The hut tax and debt work the same way: manufacture dependency on money, then control the terms.',
  },
  {
    href: '/posts/how-do-banks-create-money-out-of-nothing',
    title: 'How Do Banks Create Money Out of Nothing?',
    description: 'Banks create money as debt. Every pound in circulation was created as someone\'s liability.',
  },
  {
    href: 'https://en.wikipedia.org/wiki/Debt:_The_First_5000_Years',
    title: "Debt: The First 5,000 Years — Graeber (Wikipedia)",
    description: "Graeber's landmark anthropological history of debt, credit, and the origins of money.",
    external: true,
  },
  {
    href: 'https://www.nytimes.com/interactive/2022/05/20/world/americas/haiti-history-colonized-france.html',
    title: "The Ransom — New York Times (2022)",
    description: "The NYT's investigation into how Haiti paid France for 122 years for winning the Haitian Revolution.",
    external: true,
  },
  {
    href: 'https://en.wikipedia.org/wiki/Jubilee_(biblical)',
    title: 'Jubilee (Biblical) — Wikipedia',
    description: 'The Year of Jubilee: debt cancellation, freeing of slaves, return of land every 50 years.',
    external: true,
  },
];

export default function DebtAsSocialControl() {
  return (
    <ArticleLayout jsonLd={jsonLd}>
      <ArticleHeader
        categories={['Economics', 'Debt', 'History']}
        title="How Does Debt Keep People In Line?"
        lead={
          <>
            You probably have debt. Most people do. And if you think about it honestly, it changes
            how you behave. You don&apos;t quit bad jobs as easily. You don&apos;t go on strike.
            You don&apos;t take risks. You keep your head down and make the payment.{' '}
            <Link
              href="/posts/how-did-people-survive-before-capitalism"
              className="underline decoration-gray-400 hover:decoration-gray-700"
            >
              Enclosure removed the commons
            </Link>{' '}
            — the land and resources people once used to survive without a boss. Debt locks in what
            enclosure started. It&apos;s the enclosure of your future.
          </>
        }
        date="June 30, 2026"
        dateTime="2026-06-30"
        readingTime="15 min read"
      />

      <ArticleTOC items={TOC_ITEMS} />

      <ArticleSection>
        <H2 id="the-mechanism-left-out">Debt as Discipline</H2>
        <P>
          The mechanisms that explain wealth concentration — enclosure,{' '}
          <Link
            href="/posts/how-do-banks-create-money-out-of-nothing"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            bank-created money directed into property
          </Link>
          ,{' '}
          <Link
            href="/posts/why-is-housing-so-expensive"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            housing turned into an asset class
          </Link>{' '}
          — work at scale. They explain why wealth accumulates in the aggregate. They don&apos;t
          fully explain why individuals, knowing this, don&apos;t do more to change it.
        </P>
        <P>
          The answer is older than wage labor. It&apos;s older than money. It might be the oldest
          mechanism of control there is.
        </P>
        <P>
          Debt.
        </P>
        <P>
          Specifically: the debt that commits your future income before you&apos;ve earned it.
          The mortgage that means you can&apos;t afford to lose your job. The student loan that
          means you can&apos;t afford to take risks in your twenties. The medical debt that means
          you owe for the involuntary misfortune of getting sick. Debt doesn&apos;t just move money
          from borrowers to lenders. It moves time. It takes your future and sells it in the
          present.
        </P>
        <P>
          A person with no debt can quit. Can strike. Can organize. Can say no. A person with a
          mortgage and two car loans and student debt and a credit card with a balance and medical
          bills from last year cannot afford any of that. They keep their head down and make the
          payment. Every month.
        </P>
        <P>
          That&apos;s not an accident. The history of debt shows this has always been known, always
          been used, and periodically had to be forcibly corrected when it went too far.
        </P>
      </ArticleSection>

      <ArticleSection>
        <H2 id="debt-is-older-than-money">Debt Is Older Than Money</H2>
        <P>
          The standard story about money has it backwards — barter did not come first, money
          second, and credit third. Credit came first. The{' '}
          <Link
            href="/posts/did-humans-ever-barter-before-money"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            oldest written records in human history
          </Link>
          , from ancient Mesopotamia around 3200 BCE, are debt records. Clay tablets listing who
          owes whom, what, and when.
        </P>
        <P>
          Coins came much later — around 600 BCE, in Lydia (modern Turkey). For almost 2,500 years
          of recorded human history, complex credit systems operated without metal currency. You
          could owe someone barley you hadn&apos;t grown yet, payable at harvest. You could owe
          labor. You could owe manufactured goods. Debt was the medium of exchange long before
          money was.
        </P>
        <P>
          Debt as coercion isn&apos;t a modern innovation. It preceded every financial institution
          we have. It preceded the concept of money itself.{' '}
          <span className="text-sm text-gray-400 not-italic">(Graeber,{' '}
            <a
              href="https://en.wikipedia.org/wiki/Debt:_The_First_5000_Years"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-gray-400 hover:decoration-gray-600"
            >
              <em>Debt: The First 5,000 Years</em>
            </a>
          , 2011)</span>
        </P>
        <P>
          And from the beginning, it produced the same problem: compound interest.
        </P>

        <H3 id="the-debt-jubilee">Why Ancient Kings Cancelled Debt</H3>
        <P>
          In ancient Mesopotamia — Babylon, Sumer, Akkad — the standard agricultural loan carried
          interest of around 20% per year on grain, 33% on silver. This was considered reasonable
          because agricultural loans were seasonal: you borrowed seed grain in spring, repaid the
          crop in autumn, and the interest covered the lender&apos;s risk if the harvest failed.
        </P>
        <P>
          The problem: when things went wrong — drought, flood, war — farmers couldn&apos;t repay.
          Interest compounded. Debt passed to children. The farmer who couldn&apos;t repay became
          a debt slave. His wife and children became debt slaves. The land passed to the creditor.
        </P>
        <P>
          The Babylonian kings recognized this pattern and what it produced: a society where an
          increasing portion of the population was enslaved to an increasingly small number of
          creditors, and the creditors had no incentive to stop the accumulation.
        </P>
        <P>
          So they issued{' '}
          <a
            href="https://en.wikipedia.org/wiki/Andurarum"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            <em>andurarum</em>
          </a>{' '}
          — royal decrees of freedom. All agricultural debts cancelled. Debt slaves freed. Pledged
          land returned to its original owners. The slate wiped clean.
        </P>
        <P>
          The most famous example:{' '}
          <a
            href="https://en.wikipedia.org/wiki/Hammurabi"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            Hammurabi
          </a>
          , the Babylonian king, issued at least three andurarum during his reign (around
          1792–1750 BCE). The king credited with writing history&apos;s most famous legal code
          regularly cancelled debts. Because he understood that the alternative was social
          collapse.
        </P>
        <P>
          The Biblical{' '}
          <a
            href="https://en.wikipedia.org/wiki/Jubilee_(biblical)"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            Year of Jubilee
          </a>{' '}
          (Leviticus 25) carries the same tradition. Every 50 years: all debts cancelled, debt
          slaves freed, land returned to its original family. The word &ldquo;jubilee&rdquo; comes
          from the Hebrew <em>yovel</em>, meaning ram&apos;s horn — the trumpet blast that
          announced the beginning of freedom.
        </P>
        <P>
          There is also the Sabbath Year (every 7 years): all debts between Israelites cancelled.
          Debt slaves freed. Agricultural land left fallow. These weren&apos;t acts of charity.
          They were built into law because the societies that issued them understood: without
          periodic cancellation, debt accumulation was not a bug to be fixed but an inherent
          feature of compound interest. It always eventually enslaved everyone.{' '}
          <span className="text-sm text-gray-400 not-italic">(Graeber,{' '}
            <a
              href="https://en.wikipedia.org/wiki/Debt:_The_First_5000_Years"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-gray-400 hover:decoration-gray-600"
            >
              <em>Debt: The First 5,000 Years</em>
            </a>
          , 2011)</span>
        </P>
      </ArticleSection>

      <ArticleSection>
        <H2 id="what-debt-does-to-people">What Debt Actually Does to People</H2>
        <P>
          The mortgage. You borrow, say, $300,000 to buy a house. Over 30 years, at a standard
          interest rate, you pay back something like $550,000. You owe almost twice what you
          borrowed. And for those 30 years, that obligation follows you.
        </P>
        <P>
          If you lose your job, you lose the house. If you can&apos;t make the payment for three
          months, the bank forecloses. If house prices fall (as in 2008), you can be &ldquo;underwater&rdquo; —
          you owe more than the house is worth, and you can&apos;t sell without remaining in debt.
          You&apos;re trapped.
        </P>
        <P>
          The mortgage is a 30-year chain to your employer. You can&apos;t strike. You can&apos;t
          organize. You can&apos;t move to a better opportunity if it means a gap in income. Every
          month, the payment is due. The bank doesn&apos;t negotiate with your conscience.
        </P>
        <P>
          Student debt in the United States now totals over{' '}
          <a
            href="https://en.wikipedia.org/wiki/Student_loans_in_the_United_States"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            $1.7 trillion
          </a>
          . The average borrower carries around $37,000. Many carry $100,000 or more. This debt
          is taken on at age 18, for a credential that was required to enter most professions that
          pay above minimum wage, for an amount that 18-year-olds couldn&apos;t possibly evaluate
          the long-term cost of. It cannot be discharged in bankruptcy (uniquely among consumer
          debts in the US). It follows you for decades.
        </P>
        <P>
          In 1998, Congress made student debt non-dischargeable in bankruptcy — uniquely among
          all consumer debts in the United States. Before 1998, you could include student loans
          in a bankruptcy filing. Congress removed that option, under pressure from the lending
          industry. This was not an administrative oversight. It was a specific decision by
          specific people that permanently changed the relationship between 18-year-olds and
          debt. Young people who are most likely to be free to organize, to strike, to refuse
          bad conditions — because they have the least to lose — are instead, by design, the
          most obligated. You can&apos;t afford to work at a nonprofit. You can&apos;t afford
          to join a union that might get you fired. You can&apos;t afford to fail. Your twenties,
          the decade most likely to produce someone willing to challenge anything, are committed
          in advance to a payment.
        </P>

        <H3 id="designed-inescapable">When Debt Is Designed to Be Inescapable</H3>
        <P>
          Payday loans in the United States charge annualized interest rates of{' '}
          <a
            href="https://en.wikipedia.org/wiki/Payday_loan"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            300–400%
          </a>{' '}
          in many states. These are legal. They are targeted at people with no savings —
          people who are one broken car or one medical bill from not making rent. The structure
          is designed so that the principal can never be repaid while interest accumulates — the
          debtor rolls the loan over repeatedly, paying interest perpetually without reducing what
          they owe.
        </P>
        <P>
          Medical debt is the{' '}
          <a
            href="https://www.kff.org/health-costs/issue-brief/the-burden-of-medical-debt-in-the-united-states/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            leading cause of bankruptcy in the United States
          </a>
          . You didn&apos;t choose to get sick. You didn&apos;t choose the hospital prices. You
          had no meaningful ability to negotiate — you needed treatment, often urgently, often
          while frightened and in pain. You now owe tens of thousands of dollars. The alternative
          to treatment was death or disability. There was no negotiating position.
        </P>
        <P>
          These are the modern versions of the Babylonian farmer who couldn&apos;t repay after a
          bad harvest. The mechanism is identical. The outcome — debt that can never be fully
          repaid, creating permanent obligation — is the same. The only difference is that ancient
          Babylon eventually cancelled it.
        </P>
        <P>
          We largely don&apos;t.
        </P>
      </ArticleSection>

      <ArticleSection>
        <H2 id="haiti-paid-france">Haiti Paid France for Winning Its Own Revolution</H2>
        <P>
          In 1791, enslaved people in Saint-Domingue — the French colony that would become Haiti —
          rose in revolt. By 1804, after thirteen years of war against France, Spain, and Britain,
          Haiti declared independence. It was the most successful slave revolt in history. The only
          one that produced an independent nation.
        </P>
        <P>
          France did not accept this. In 1825, the French government sent warships to Port-au-Prince
          with an offer Haiti couldn&apos;t refuse: pay 150 million gold francs as
          &ldquo;indemnity&rdquo; to French slaveholders for their &ldquo;lost property&rdquo; —
          the enslaved people who had freed themselves — or face renewed war and a commercial
          blockade.
        </P>
        <P>
          Haiti paid. To pay, Haiti borrowed from French banks. Then, because it couldn&apos;t
          service that debt, it later borrowed from US banks to pay off the French banks. In 1915,
          the United States invaded Haiti and occupied it for 19 years — in part to secure the
          debt repayment to US creditors.
        </P>
        <P>
          In 2022, the{' '}
          <em>New York Times</em> published a{' '}
          <a
            href="https://www.nytimes.com/interactive/2022/05/20/world/americas/haiti-history-colonized-france.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            full investigation
          </a>{' '}
          of Haiti&apos;s debt. The calculation: Haiti paid approximately $115 billion in
          equivalent value, over 122 years, to France and the United States — ending only in 1947.
        </P>
        <P>
          One hundred and forty-three years after winning independence, Haiti was still paying
          for having won.
        </P>
        <P>
          The compound effect was total. Because Haiti was spending 80% of its national revenue
          on debt service in some early decades, it couldn&apos;t build schools, hospitals, or
          infrastructure. The poverty that would come to define Haiti throughout the 20th century
          was not a natural state. It was the accumulated consequence of a debt imposed by the
          former enslaver as punishment for freedom.
        </P>
        <P>
          France has never repaid it. No French government has even officially acknowledged it as
          a debt.
        </P>
      </ArticleSection>

      <ArticleSection>
        <H2 id="imf-debt-weapon">The IMF: Debt as Colonial Instrument</H2>
        <P>
          Haiti paid off its debt to France in 1947. The mechanism changed. The dependency didn&apos;t.
        </P>
        <P>
          The{' '}
          <a
            href="https://en.wikipedia.org/wiki/International_Monetary_Fund"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            International Monetary Fund
          </a>{' '}
          was founded in 1944 at a conference in Bretton Woods, New Hampshire, where the United
          States and United Kingdom negotiated who would control postwar global finance. The US
          won. The IMF became the institution through which the United States would direct the
          financial terms of the postwar world.
        </P>
        <P>
          The standard package the IMF attached to any loan: cut government spending on healthcare,
          education, and food subsidies. Sell state enterprises — the water company, the telephone
          company, the national airline — to private buyers. Remove tariffs. Open to foreign
          investment with no restrictions. Devalue the currency.
        </P>
        <P>
          Each of these conditions benefits specific people. Privatized state assets go to buyers
          with money — overwhelmingly foreign corporations and investors. Removed tariffs open the
          country to competition from Western companies that were themselves protected during their
          own development. The United States built its industrial economy behind tariff walls from
          1790 until the mid-20th century. Alexander Hamilton&apos;s{' '}
          <a
            href="https://en.wikipedia.org/wiki/Report_on_Manufactures"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            Report on Manufactures (1791)
          </a>{' '}
          explicitly argued for protecting American industries from British competition. South
          Korea and Japan built their industrial economies through state-directed investment and
          protected domestic markets. The IMF conditions prevent the countries that need help
          most from doing what the countries that don&apos;t need help actually did.
        </P>
        <P>
          It&apos;s as if you used steroids to become a boxing champion, then required that your
          challengers compete drug-free — and called the rule &ldquo;fair competition.&rdquo;
        </P>
        <P>
          The countries that went through these programs: Greece (2010–2018), Argentina
          (repeatedly), Ghana, Kenya, Jamaica, the Philippines, Ecuador, Bolivia, Pakistan.
          What happened in each case: public services shrank, public assets were bought up
          cheaply by foreign investors, workers lost jobs, the currency fell. And the debt
          remained, because the loans issued to pay old debts created new debts.
        </P>
        <P>
          Haiti is still in that loop. When the 2010 earthquake struck, Haiti needed international
          loans to respond. The loans came with conditions. Decades after the last franc was
          paid to France, Haiti was still structurally unable to build what its people needed —
          not because of any failure of will or talent, but because each debt created conditions
          that made the next debt necessary.
        </P>
        <P>
          The hut tax, the indemnity to France, the IMF conditions. Three centuries, three
          instruments. The same result: a country cannot choose its own direction because it owes
          something to someone who won&apos;t let it.
        </P>
      </ArticleSection>

      <ArticleSection>
        <H2 id="compound-interest-problem">The Compound Interest Problem</H2>
        <P>
          The Babylonians understood something that was later deliberately removed from how we
          think about debt.
        </P>
        <P>
          Compound interest, by definition, grows faster than anything in the real world. A debt
          of $1,000 at 5% per year becomes $1,629 after ten years, $4,322 after thirty, $131,501
          after a hundred. Left to compound long enough, any debt exceeds any conceivable real
          economy. The number grows without limit. The economy grows much more slowly.
        </P>
        <P>
          This means: the total claims of creditors will always, eventually, exceed the ability
          of debtors to pay. Not sometimes. Mathematically. Always. Compound interest is not a
          stable equilibrium; it&apos;s a mechanism that produces ever-escalating claims on real
          production until something breaks.
        </P>
        <P>
          The world total of all debt — government, corporate, household — is currently estimated
          at over{' '}
          <a
            href="https://www.iif.com/Research/Capital-Flows-and-Debt/Global-Debt-Monitor"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            $300 trillion
          </a>
          , according to the Institute of International Finance. Global annual economic output
          (GDP) is around $100 trillion. The world owes three times its annual production.
        </P>
        <P>
          Who is it owed to? Other entities — bondholders, pension funds, banks, insurance
          companies, wealthy individuals. The claims on future production are not evenly
          distributed. They are concentrated. Specifically among people and institutions who{' '}
          <Link
            href="/posts/why-do-the-rich-keep-getting-richer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            already own capital
          </Link>
          .
        </P>
        <P>
          There is something worth sitting with here. In 2022, inflation rose sharply in most
          countries. Central banks immediately raised interest rates — aggressively, faster than
          they had in decades — specifically to bring inflation back down. The official reason
          was protecting ordinary people from rising prices. But here is what high inflation
          actually does: it reduces the real value of debts. Your mortgage of $300,000 is
          easier to pay off when wages and prices have both risen. The creditor, who is owed
          $300,000, gets paid back in money that is worth less than when they lent it.
          Central banks — whose boards are staffed by people from the financial industry,
          whose inflation target was designed in consultation with bondholders — moved
          immediately to stop this. Jubilee used to happen by royal decree. Now it is
          prevented by interest rate policy.
        </P>
        <P>
          What we have instead: default (which wipes out savings, triggers banking crises,
          and lands hardest on people who are not rich enough to have seen it coming), and
          the long slow grind of paying interest forever, year after year, on a balance
          that barely moves.
        </P>
        <P>
          The mortgage you take out for a house increases your total payment to almost double. The
          student loan compounds for thirty years. The medical bill accrues interest. The credit
          card minimum payment barely touches the principal. For most borrowers, debt is not a
          bridge to a better future. It&apos;s a permanent tax on income, paid to whoever holds
          the debt.
        </P>
      </ArticleSection>

      <ArticleSection>
        <H2 id="the-moral-trick">The Language Was Designed by Creditors</H2>
        <P>
          In German, one word means both debt and guilt: <em>Schuld</em>. The word
          &ldquo;owing&rdquo; in English is related, etymologically, to &ldquo;ought.&rdquo;
          You <em>owe</em> it, therefore you <em>ought</em> to pay it. The language of debt
          is also the language of being a bad person.
        </P>
        <P>
          This is not an accident of grammar. The people who created the systems of debt also
          controlled what language meant. If not paying a debt makes you guilty — not just legally
          liable, but morally culpable, a person who doesn&apos;t do what they ought — then the
          question of how the debt was created disappears. It doesn&apos;t matter that Haiti was
          forced at gunpoint. It doesn&apos;t matter that the Babylonian farmer&apos;s harvest
          failed. It doesn&apos;t matter that the 18-year-old was told there was no other way
          to get a credential. It doesn&apos;t matter that the IMF&apos;s conditions made
          repayment impossible. You owe it. You ought to pay it. To suggest otherwise is to
          be irresponsible.
        </P>
        <P>
          In every period when debtors had power — peasant revolts, early modern debt rebellions,
          the Jubilee traditions — the legitimacy of specific debts was treated as an open
          question. In our period, it is treated as settled in advance. Of course debts must be
          paid. The only question is how.{' '}
          <span className="text-sm text-gray-400 not-italic">(Graeber,{' '}
            <a
              href="https://en.wikipedia.org/wiki/Debt:_The_First_5000_Years"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-gray-400 hover:decoration-gray-600"
            >
              <em>Debt: The First 5,000 Years</em>
            </a>
          , 2011)</span>
        </P>
        <P>
          That settlement was not a moral development. It was a political one. The people who
          lend wrote the rules about what kind of person doesn&apos;t pay. Then they wrote
          the laws. Then they funded the schools and the economics departments that taught
          those laws as neutral facts.
        </P>

        <ArticleCallout variant="dark" title="And Because This Is True, Something Else Collapses">
          Babylon cancelled debt periodically because the math made it necessary — compound
          interest always produces more debt than real economies can bear. The Jubilee year was
          law because the societies that wrote it understood this. What we have instead is
          interest rate policy: central banks designed in consultation with bondholders, staffed
          by people from the financial industry, moving immediately to stop the inflation that
          would have reduced the real value of debts.
          <br />
          <br />
          Jubilee used to happen by decree. Now it is prevented by policy. The people who write
          that policy are the people who hold the debt.
        </ArticleCallout>
      </ArticleSection>

      <ArticleSection>
        <H2 id="faq">Common Questions</H2>
        <ArticleFAQ items={FAQ_ITEMS} />
      </ArticleSection>

      <ArticleFurtherReading items={FURTHER_READING} />

      <ArticleSources>
        <li>
          David Graeber,{' '}
          <a
            href="https://en.wikipedia.org/wiki/Debt:_The_First_5000_Years"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            <em>Debt: The First 5,000 Years</em>
          </a>
          , Melville House, 2011.
        </li>
        <li>
          Michael Hudson,{' '}
          <a
            href="https://en.wikipedia.org/wiki/Michael_Hudson_(economist)"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            <em>...and forgive them their debts: Lending, Foreclosure and Redemption from Bronze
            Age Finance to the Jubilee Year</em>
          </a>
          , ISLET, 2018.
        </li>
        <li>
          <em>New York Times</em>,{' '}
          <a
            href="https://www.nytimes.com/interactive/2022/05/20/world/americas/haiti-history-colonized-france.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            &ldquo;The Ransom: How Haiti Was Made to Pay France $115 Billion for Its Revolution,&rdquo;
          </a>{' '}
          May 2022.
        </li>
        <li>
          Karl Polanyi,{' '}
          <a
            href="https://en.wikipedia.org/wiki/The_Great_Transformation_(book)"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            <em>The Great Transformation</em>
          </a>
          , Farrar &amp; Rinehart, 1944.
        </li>
        <li>
          Ha-Joon Chang,{' '}
          <a
            href="https://en.wikipedia.org/wiki/Bad_Samaritans_(book)"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            <em>Bad Samaritans: The Myth of Free Trade and the Secret History of Capitalism</em>
          </a>
          , Bloomsbury, 2008 — on how today&apos;s wealthy nations developed through the strategies
          the IMF now prohibits.
        </li>
        <li>
          Institute of International Finance,{' '}
          <a
            href="https://www.iif.com/Research/Capital-Flows-and-Debt/Global-Debt-Monitor"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            Global Debt Monitor
          </a>
          , various years.
        </li>
        <li>
          Michael Hudson,{' '}
          <a
            href="https://en.wikipedia.org/wiki/Super_Imperialism"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            <em>Super Imperialism: The Origin and Fundamentals of U.S. World Dominance</em>
          </a>
          , Pluto Press, 2003.
        </li>
      </ArticleSources>
    </ArticleLayout>
  );
}
