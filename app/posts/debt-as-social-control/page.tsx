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
  { id: 'the-mechanism-left-out', text: 'The Mechanism the Last Articles Left Out', level: 2 },
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
        <H2 id="the-mechanism-left-out">The Mechanism the Last Articles Left Out</H2>
        <P>
          We have traced, across five articles, how wealth flows upward. Commons enclosed by
          Parliament. Colonial land seized and replaced with wage dependency.{' '}
          <Link
            href="/posts/how-do-banks-create-money-out-of-nothing"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            Bank-created money flowing into property and financial assets.
          </Link>{' '}
          Capital returns mathematically outpacing wages.{' '}
          <Link
            href="/posts/why-is-housing-so-expensive"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            Housing financialized
          </Link>{' '}
          into an asset class.
        </P>
        <P>
          But there&apos;s a gap in the story. All of these mechanisms work at a structural level.
          They explain why wealth concentrates in the aggregate. They don&apos;t fully explain why
          individuals, knowing this, don&apos;t do more to change it.
        </P>
        <P>
          The answer is older than capitalism. It&apos;s older than money. It might be the oldest
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
          In the{' '}
          <Link
            href="/posts/did-humans-ever-barter-before-money"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            barter article we established
          </Link>
          : the standard story — barter comes first, then money, then credit — is backwards.
          Credit comes first. The oldest written records we have, from ancient Mesopotamia around
          3200 BCE, are debt records. Clay tablets listing who owes whom, what, and when.
        </P>
        <P>
          Coins came much later — around 600 BCE, in Lydia (modern Turkey). For almost 2,500 years
          of recorded human history, complex credit systems operated without metal currency. You
          could owe someone barley you hadn&apos;t grown yet, payable at harvest. You could owe
          labor. You could owe manufactured goods. Debt was the medium of exchange long before
          money was.
        </P>
        <P>
          This matters because it means{' '}
          <a
            href="https://en.wikipedia.org/wiki/David_Graeber"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            David Graeber
          </a>
          &apos;s core finding in{' '}
          <a
            href="https://en.wikipedia.org/wiki/Debt:_The_First_5000_Years"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            <em>Debt: The First 5,000 Years</em>
          </a>{' '}
          (2011) isn&apos;t a surprise. Debt as coercion isn&apos;t a modern innovation. It
          preceded every financial institution we have. It preceded the concept of money itself.
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
          feature of compound interest. It always eventually enslaved everyone.
        </P>

        <Blockquote cite="Graeber, Debt: The First 5,000 Years (2011)">
          &ldquo;For thousands of years, the struggle between rich and poor has largely taken the
          form of conflicts between creditors and debtors — of arguments about the rights and
          wrongs of interest payments, debt bondage, and finally debt cancellation. And these were
          not just economic conflicts. They were also moral conflicts.&rdquo;
        </Blockquote>
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
          The function: young people in their twenties, who might otherwise be most free to
          challenge the status quo, are instead most constrained by their debt service. You
          can&apos;t afford to work at a nonprofit. You can&apos;t afford to start a union.
          You can&apos;t afford to fail. The risk tolerance that youth normally provides is
          cancelled by the debt.
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
          in many states. These are legal. They are targeted at people with no financial buffer —
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
          The{' '}
          <a
            href="https://en.wikipedia.org/wiki/International_Monetary_Fund"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            International Monetary Fund
          </a>{' '}
          was created in 1944 to prevent the kind of currency crises and competitive devaluations
          that had deepened the Great Depression. The mechanism: countries in trouble could borrow
          from the IMF to stabilize their currency and balance of payments. In return: policy
          conditions.
        </P>
        <P>
          The conditions evolved into what became known as{' '}
          <a
            href="https://en.wikipedia.org/wiki/Structural_adjustment"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            structural adjustment programs
          </a>
          . The standard package: cut government spending (specifically healthcare, education,
          food subsidies), privatize state enterprises, remove tariffs and trade barriers, allow
          foreign companies unrestricted investment, devalue the currency.
        </P>
        <P>
          Every single one of today&apos;s wealthy industrial nations developed through strategies
          that structural adjustment prohibits:
        </P>
        <P>
          The United States used protectionist tariffs from independence until the mid-20th
          century. Alexander Hamilton&apos;s{' '}
          <a
            href="https://en.wikipedia.org/wiki/Report_on_Manufactures"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            Report on Manufactures (1791)
          </a>{' '}
          explicitly argued for protecting infant American industries from British competition.
          South Korea and Japan built their industrial economies through state-directed investment,
          protected domestic markets, and subsidized national champions — companies like Samsung,
          Toyota, and Hyundai that could not have survived free competition with established
          Western corporations in their early years.
        </P>
        <P>
          The IMF demands that developing nations open their markets to exactly that competition —
          from the same Western corporations that were protected during their own development. It&apos;s
          as if you used steroids to become a boxing champion, then demanded that your challengers
          compete drug-free.
        </P>
        <P>
          The{' '}
          <a
            href="https://en.wikipedia.org/wiki/Washington_Consensus"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            Washington Consensus
          </a>{' '}
          — the set of policies centered on the IMF, World Bank, and US Treasury — has been
          applied to dozens of countries in crisis since the 1980s. The pattern of outcomes:
          immediate economic contraction (GDP falls when government spending is cut), increased
          unemployment (privatized state enterprises shed workers), rising inequality (asset
          owners benefit from privatization and currency liberalization), permanent debt dependence
          (the IMF loans are used to pay previous IMF loans).
        </P>
        <P>
          Greece, from 2010 to 2018. Argentina, repeatedly. Ghana, Kenya, Jamaica, the Philippines.
          Ecuador, Bolivia, Pakistan. The same playbook applied. The same results.
        </P>
        <P>
          Haiti doesn&apos;t need historical distance to illustrate debt as colonial instrument.
          It needed IMF loans to recover from the 2010 earthquake — loans that came with
          conditions that constrained its ability to rebuild public services. The 1947 payment
          ended. The structural dependency didn&apos;t.
        </P>
      </ArticleSection>

      <ArticleSection>
        <H2 id="compound-interest-problem">The Compound Interest Problem</H2>
        <P>
          Graeber notes a mathematical fact that the Babylonians understood intuitively and that
          we seem to have forgotten.
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
          The ancients dealt with this by periodic cancellation. We don&apos;t. Instead we have:
          inflation (which erodes debt in real terms — the reason central banks fought so hard
          against 2022&apos;s inflation was partly that it was reducing the real value of creditors&apos;
          claims), default (which produces crises, recessions, banking collapses), and the
          long slow grind of paying interest forever without reducing the principal.
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
        <H2 id="the-moral-trick">The Moral Trick</H2>
        <P>
          The most sophisticated thing debt does is reframe obligation as morality.
        </P>
        <P>
          In English (and German, where the connection is even clearer), &ldquo;debt&rdquo; and
          &ldquo;guilt&rdquo; share etymology. <em>Schuld</em> in German means both debt and
          guilt. The word &ldquo;owing&rdquo; is related to &ldquo;owed,&rdquo; but also, more
          anciently, to &ldquo;ought.&rdquo; The language of debt is the language of moral
          obligation: you <em>owe</em>, therefore you <em>ought</em> to pay.
        </P>
        <P>
          This moral framing serves creditors in a specific way. It means that however the debt
          was created — whatever the terms, whatever the power imbalance, whatever the
          circumstances — the debtor is in the wrong for not paying. The question &ldquo;should
          this debt be paid?&rdquo; becomes morally equivalent to &ldquo;should this person do
          the right thing?&rdquo;
        </P>
        <P>
          But debts are created in specific circumstances. The Haitian debt was created at
          gunpoint. The farmer&apos;s Babylonian debt was created by a bad harvest. The American
          student&apos;s debt was created by a system that told them they had no choice but to
          borrow. The Ghanaian government&apos;s debt was created by structural adjustment loans
          whose conditions prevented the growth that would have allowed repayment.
        </P>
        <P>
          The circumstances of debt creation matter enormously to whether repayment is just. But
          the moral framing of debt eliminates that question. Once you owe, you owe. The past is
          irrelevant. Just pay.
        </P>
        <P>
          Graeber&apos;s observation: this is a moral framework designed by creditors. In societies
          where debtors had power (medieval peasant revolts, early modern debt rebellions), the
          question of whether debts were legitimate was contested. In societies where creditors
          have power — like ours — the question is considered settled in advance. Of course debts
          must be paid. To say otherwise is to be irresponsible.
        </P>

        <ArticleCallout variant="dark">
          <strong>And Because This Is True, Something Else Collapses</strong>
          <br />
          <br />
          We have now tracked six interlocking mechanisms. The commons was enclosed to manufacture
          wage dependency. Colonial taxation manufactured wage dependency globally. Banks create
          money as debt and direct it upward. Capital returns outpace wages mathematically.
          Wealthy people use capital to shape the rules that keep capital returns high. And
          personal and sovereign debt disciplines individuals and nations into compliance.
          <br />
          <br />
          Each mechanism is real. Each is documented. Each, on its own, is enough to explain
          inequality. Together they form something that starts to look less like a set of market
          outcomes and more like a system — a set of reinforcing structures that consistently
          transfer wealth and power from the many to the few.
          <br />
          <br />
          Which raises the question we have been circling: is this a system with designers? Is
          there a ruling class? Not as a conspiracy theory. As a sociological question — is there
          a group of people who share interests, communicate, and act in ways that consistently
          maintain these structures? And if so: who are they?
          <br />
          <br />
          <Link
            href="/posts/what-is-the-ruling-class"
            className="underline decoration-gray-200 hover:decoration-white"
          >
            The next article asks: what is the ruling class?
          </Link>
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
