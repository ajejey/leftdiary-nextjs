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
  title: 'How Did People Survive Before Capitalism?',
  description:
    "Before the enclosure acts, most people in England had the commons — land they could graze, fish, and farm without paying rent to anyone. Then Parliament, controlled by landowners, passed 5,000 laws to take it away. Unemployment didn't exist before that. Here's what they destroyed to make the wage system inevitable.",
  keywords: [
    'how did people survive before capitalism',
    'enclosure of the commons explained',
    'what is the enclosure movement',
    'history of commons land',
    'how did peasants become workers',
    'Karl Polanyi Great Transformation explained',
    'history of the 40 hour work week',
    'Silvia Federici enclosure',
    'what were the Poor Laws',
  ],
  openGraph: {
    title: 'How Did People Survive Before Capitalism?',
    description:
      "Before enclosure, most people had the commons. Parliament — controlled by landowners — passed 5,000 laws to take it away. Unemployment didn't exist before that. Here's what was destroyed to make wage labor the only option.",
    type: 'article',
    publishedTime: '2026-06-30T00:00:00Z',
    authors: ['Left Diary'],
    tags: ['Economics', 'History', 'Capitalism', 'Enclosure', 'Commons'],
  },
  alternates: {
    canonical: 'https://leftdiary.com/posts/how-did-people-survive-before-capitalism',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://leftdiary.com/posts/how-did-people-survive-before-capitalism#article',
      headline: 'How Did People Survive Before Capitalism?',
      description:
        "Before the enclosure acts, most people in England had the commons — land they could use without paying rent. Parliament passed 5,000 laws to take it away. Unemployment didn't exist before that. This is how the wage system was manufactured.",
      image: 'https://leftdiary.com/images/enclosure-commons-cover.jpg',
      datePublished: '2026-06-30T00:00:00Z',
      dateModified: '2026-06-30T00:00:00Z',
      author: { '@type': 'Organization', name: 'Left Diary', url: 'https://leftdiary.com' },
      publisher: { '@type': 'Organization', name: 'Left Diary', url: 'https://leftdiary.com' },
      mainEntityOfPage: 'https://leftdiary.com/posts/how-did-people-survive-before-capitalism',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://leftdiary.com/posts/how-did-people-survive-before-capitalism#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How did people survive before capitalism?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "In pre-capitalist England and much of Europe, most people had access to the commons — shared land where they could graze animals, gather firewood, fish, and grow food. They weren't free from hardship or feudal obligations, but they didn't need to sell their labor to a private employer to survive. They had direct access to the means of subsistence. The enclosure movement, through around 5,000 Acts of Parliament between 1604 and 1914, took that common land and transferred it to private landowners, removing the alternatives to wage labor.",
          },
        },
        {
          '@type': 'Question',
          name: 'What was the enclosure movement?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "The enclosure movement was a series of around 5,000 Acts of Parliament passed between 1604 and 1914 in England that took common land — land that communities had shared and depended on for centuries — and transferred it to private ownership. Parliament was controlled by the same landowners who benefited from enclosure. People who had grazed animals on common land for generations became trespassers overnight. Thomas More described the process in 1516: 'Your sheep... have become so great devourers and so wild, that they eat up and swallow down the very men themselves.' Millions were displaced into cities, mines, and factories with no other option.",
          },
        },
        {
          '@type': 'Question',
          name: 'When was unemployment invented?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Unemployment — a physically able person willing to work but unable to find anyone to pay them — didn't exist as a concept before enclosure. There was famine, disaster, and poverty. But the specific situation of someone who wants to work but can't find a buyer for their labor only makes sense in a wage-labor system. Before enclosure, people grew food, used common land, and engaged in subsistence production. After enclosure, survival depended on finding an employer. The word 'unemployment' didn't enter common usage in English until the 1890s.",
          },
        },
        {
          '@type': 'Question',
          name: "What is Karl Polanyi's Great Transformation?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "In 'The Great Transformation' (1944), Karl Polanyi argued that treating land, labor, and money as commodities — things to be bought and sold on markets — was a historically specific and socially destructive innovation, not a natural state. He called them 'fictitious commodities': labor is human life, land is nature, money is a social institution. None of them are naturally produced for sale. Making them into commodities required massive state intervention — the enclosure acts, the poor laws, the gold standard — all of which were political choices, not market outcomes.",
          },
        },
        {
          '@type': 'Question',
          name: 'Why did the 8-hour work day become the standard?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "The 8-hour work day was not given — it was won through decades of strikes, organizing, and labor struggle. Into the late 19th century, 10-12 hour days were standard. The 8-hour movement began in the 1860s with the slogan '8 hours for work, 8 hours for rest, 8 hours for what we will.' Henry Ford standardized the 8-hour day in his factories in 1914 — not out of generosity, but because he found workers were more productive on 8 hours than 10. The 40-hour work week became federal law in the US under the Fair Labor Standards Act of 1938, after decades of union pressure.",
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://leftdiary.com/posts/how-did-people-survive-before-capitalism#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://leftdiary.com' },
        { '@type': 'ListItem', position: 2, name: 'Posts', item: 'https://leftdiary.com/posts' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'How Did People Survive Before Capitalism?',
          item: 'https://leftdiary.com/posts/how-did-people-survive-before-capitalism',
        },
      ],
    },
  ],
};

const TOC_ITEMS: TOCItem[] = [
  { id: 'before-wages', text: 'Before Wages', level: 2 },
  { id: 'what-the-commons-actually-was', text: 'What the Commons Actually Was', level: 3 },
  { id: 'the-enclosure-acts', text: 'The Enclosure Acts: 5,000 Laws to Take It Away', level: 2 },
  { id: 'the-invention-of-unemployment', text: 'The Invention of Unemployment', level: 2 },
  { id: 'the-workhouse', text: 'The Alternative to Wages: The Workhouse', level: 3 },
  { id: 'polanyi-fictitious-commodities', text: 'Polanyi: Making Labor a Commodity', level: 2 },
  { id: 'federici-women-enclosure', text: 'What Enclosure Did to Women', level: 2 },
  { id: 'the-8-hour-day', text: 'The 8-Hour Day Was Fought For, Not Given', level: 2 },
  { id: 'global-enclosure', text: 'The Same Playbook, Applied Globally', level: 2 },
  { id: 'faq', text: 'Common Questions', level: 2 },
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'How did people survive before capitalism?',
    answer: (
      <>
        In pre-capitalist England and much of Europe, most people had access to the{' '}
        <a
          href="https://en.wikipedia.org/wiki/Commons"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-gray-400 hover:decoration-gray-700"
        >
          commons
        </a>{' '}
        — shared land where they could graze animals, gather firewood, fish, and grow food. They
        weren&apos;t free from hardship or feudal obligations, but they didn&apos;t need to sell
        their labor to a private employer to survive. The{' '}
        <a
          href="https://en.wikipedia.org/wiki/Enclosure"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-gray-400 hover:decoration-gray-700"
        >
          enclosure movement
        </a>
        , through around 5,000 Acts of Parliament between 1604 and 1914, took that common land
        and transferred it to private landowners, removing the alternatives to wage labor.
      </>
    ),
  },
  {
    question: 'What was the enclosure movement?',
    answer: (
      <>
        Around 5,000 Acts of Parliament passed between 1604 and 1914 in England took common land
        — shared land that communities had depended on for centuries — and transferred it to
        private ownership. Parliament was controlled by the same landowners who benefited.{' '}
        <a
          href="https://en.wikipedia.org/wiki/Thomas_More"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-gray-400 hover:decoration-gray-700"
        >
          Thomas More
        </a>{' '}
        described it in 1516: &ldquo;Your sheep have become so great devourers and so wild, that
        they eat up and swallow down the very men themselves.&rdquo; Millions were displaced into
        cities, mines, and factories with no other option.
      </>
    ),
  },
  {
    question: 'When was unemployment invented?',
    answer: (
      <>
        Unemployment — a physically able person willing to work but unable to find anyone to pay
        them — didn&apos;t exist as a concept before enclosure. Before enclosure, people grew
        food, used common land, and engaged in subsistence production. After enclosure, survival
        depended on finding an employer. The word &ldquo;unemployment&rdquo; didn&apos;t enter
        common usage in English until the 1890s — the concept had to be invented alongside the
        condition it described.
      </>
    ),
  },
  {
    question: "What is Karl Polanyi's Great Transformation?",
    answer: (
      <>
        In{' '}
        <a
          href="https://en.wikipedia.org/wiki/The_Great_Transformation_(book)"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-gray-400 hover:decoration-gray-700"
        >
          <em>The Great Transformation</em>
        </a>{' '}
        (1944), Karl Polanyi argued that treating land, labor, and money as commodities was a
        historically specific and destructive innovation — not a natural state. He called them
        &ldquo;fictitious commodities.&rdquo; Labor is human life, not a product. Land is nature,
        not manufactured for sale. Making them into commodities required massive state
        intervention: the enclosure acts, the poor laws, the gold standard — all political choices,
        not market outcomes.
      </>
    ),
  },
  {
    question: 'Why did the 8-hour work day become the standard?',
    answer: (
      <>
        The 8-hour work day was not given — it was won through decades of strikes and labor
        struggle. Into the late 19th century, 10–12 hour days were standard. Henry Ford
        standardized 8 hours in his factories in 1914 — not out of generosity, but because he
        found workers were more productive. The 40-hour work week became federal law in the US
        under the{' '}
        <a
          href="https://en.wikipedia.org/wiki/Fair_Labor_Standards_Act_of_1938"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-gray-400 hover:decoration-gray-700"
        >
          Fair Labor Standards Act
        </a>{' '}
        of 1938, after decades of union pressure and organizing.
      </>
    ),
  },
];

const FURTHER_READING: FurtherReadingItem[] = [
  {
    href: '/posts/why-do-the-rich-keep-getting-richer',
    title: 'Why Do the Rich Keep Getting Richer?',
    description: "Piketty's r > g shows wealth concentrates mathematically. But enclosure explains why everyone else started from such a weak position.",
  },
  {
    href: '/posts/why-is-housing-so-expensive',
    title: 'Why Is Housing So Expensive?',
    description: 'The financialization of housing is enclosure continuing in the present tense. Land turned from shelter into an asset class.',
  },
  {
    href: '/posts/did-humans-ever-barter-before-money',
    title: 'Did Humans Ever Barter Before Money?',
    description: "Graeber's anthropology of pre-market economies: gift economies, mutual aid, credit — not the barter myth economists invented.",
  },
  {
    href: 'https://en.wikipedia.org/wiki/The_Great_Transformation_(book)',
    title: "The Great Transformation — Karl Polanyi (Wikipedia)",
    description: "Polanyi's landmark 1944 analysis of how land, labor, and money were converted into commodities through political force.",
    external: true,
  },
  {
    href: 'https://en.wikipedia.org/wiki/Caliban_and_the_Witch',
    title: 'Caliban and the Witch — Silvia Federici (Wikipedia)',
    description: "How enclosure specifically targeted women, making their reproductive and domestic labor invisible and unpaid.",
    external: true,
  },
  {
    href: 'https://en.wikipedia.org/wiki/Enclosure',
    title: 'Enclosure — Wikipedia',
    description: 'The full history of the English enclosure movement, including the 5,000+ Acts of Parliament that transferred common land to private ownership.',
    external: true,
  },
];

export default function HowDidPeopleSurviveBeforeCapitalism() {
  return (
    <ArticleLayout jsonLd={jsonLd}>
      <ArticleHeader
        categories={['Economics', 'History', 'Capitalism']}
        title="How Did People Survive Before Capitalism?"
        lead={
          <>
            You have probably felt it. The feeling that your survival is contingent on someone
            else&apos;s willingness to hire you. That if your employer disappears, your ability to
            eat and have shelter goes with it. It feels like a fact of life, like gravity. But it
            isn&apos;t. It was made. Here&apos;s how.
          </>
        }
        date="June 30, 2026"
        dateTime="2026-06-30"
        readingTime="14 min read"
      />

      <ArticleTOC items={TOC_ITEMS} />

      <ArticleSection>
        <H2 id="before-wages">Before Wages</H2>
        <P>
          In 1516, an English lawyer and humanist named{' '}
          <a
            href="https://en.wikipedia.org/wiki/Thomas_More"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            Thomas More
          </a>{' '}
          published{' '}
          <a
            href="https://en.wikipedia.org/wiki/Utopia_(More_book)"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            <em>Utopia</em>
          </a>
          . In it, a character describes what was happening to the English countryside:
        </P>

        <Blockquote cite="Thomas More, Utopia (1516)">
          &ldquo;Your sheep, that were wont to be so meek and tame, and so small eaters, now, as I
          hear say, have become so great devourers and so wild, that they eat up, and swallow down
          the very men themselves. They consume, destroy, and devour whole fields, houses, and
          cities.&rdquo;
        </Blockquote>

        <P>
          He wasn&apos;t writing fantasy. He was describing enclosure. Landowners were fencing off
          the common fields to graze sheep for the wool trade. And in doing so, they were destroying
          the way most people survived.
        </P>
        <P>
          For centuries before this, survival in England — and across most of Europe — didn&apos;t
          require an employer. It required access to land. And most people had it.
        </P>

        <H3 id="what-the-commons-actually-was">What the Commons Actually Was</H3>
        <P>
          The{' '}
          <a
            href="https://en.wikipedia.org/wiki/Commons"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            commons
          </a>{' '}
          wasn&apos;t empty land that nobody owned. It was land that communities owned together,
          and it came with specific use rights that were carefully defined and protected:
        </P>
        <P>
          <strong>Common of pasture</strong> — the right to graze a certain number of animals on
          shared meadows. Every household knew how many animals they could put on the commons, and
          the community enforced the limits so the land wasn&apos;t exhausted.
        </P>
        <P>
          <strong>Common of estovers</strong> — the right to gather wood from common forests for
          fuel and building. Not unlimited — you couldn&apos;t clear-cut it — but enough to heat
          your home.
        </P>
        <P>
          <strong>Common of piscary</strong> — fishing rights in shared streams and ponds.
        </P>
        <P>
          <strong>Gleaning rights</strong> — after a harvest, the poor could enter the fields and
          collect what the harvesters had left behind. This appears in the Bible (Ruth gleaning in
          Boaz&apos;s fields) and was common across Europe for thousands of years.
        </P>
        <P>
          <strong>Common arable strips</strong> — in the open-field system, a village&apos;s
          farmland was divided into strips. Individual families farmed specific strips but the
          system was collective — decisions about crop rotation and fallow were made communally.
        </P>
        <P>
          Put it together and you have: food, fuel, building materials, and a safety net. Not
          paradise. Life was hard, disease was common, harvests failed, feudal lords extracted labor
          and rent. But survival didn&apos;t depend on finding an employer. It depended on access
          to common resources. That access was real, legal, and protected by custom going back
          centuries.
        </P>
      </ArticleSection>

      <ArticleSection>
        <H2 id="the-enclosure-acts">The Enclosure Acts: 5,000 Laws to Take It Away</H2>
        <P>
          Between roughly 1604 and 1914, the British Parliament passed around{' '}
          <a
            href="https://en.wikipedia.org/wiki/Enclosure"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            5,000 Enclosure Acts
          </a>
          . Each one took a specific piece of common land and divided it among private landowners.
          Each one was passed by Parliament.
        </P>
        <P>
          Parliament, at this time, was controlled by landowners. Only men with significant
          property could vote. The people who stood to gain from enclosure were the people who
          voted for enclosure. The people who lost their common rights — the cottagers, the
          smallholders, the women who depended on gleaning — had no vote. They weren&apos;t
          consulted. They weren&apos;t compensated.
        </P>
        <P>
          They became trespassers on land their families had used for generations.
        </P>
        <P>
          The{' '}
          <a
            href="https://en.wikipedia.org/wiki/General_Enclosure_Act_1801"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            General Enclosure Act of 1801
          </a>{' '}
          and the{' '}
          <a
            href="https://en.wikipedia.org/wiki/Enclosure_Act_1845"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            Enclosure Act of 1845
          </a>{' '}
          streamlined the process — instead of needing a separate act for every field, there were
          now standard procedures. It made enclosure faster and cheaper for landowners to implement.
        </P>
        <P>
          Between 1760 and 1820 alone, around 6 million acres of common land were enclosed in
          England. To give you a sense of scale: that&apos;s roughly the size of Belgium.
        </P>
        <P>
          The people displaced didn&apos;t disappear. They went to the cities. They went to the
          new factories. They went down the coal mines. They had no other option, because the
          alternatives had been legislated out of existence.
        </P>
        <P>
          The Industrial Revolution didn&apos;t just happen because clever people invented machines.
          It happened because millions of people had been stripped of any way to survive that
          didn&apos;t involve selling their labor. The factories had a labor supply because
          Parliament had created it — by destroying the commons.
        </P>
        <P>
          This is the same mechanism{' '}
          <Link
            href="/posts/why-did-colonizers-tax-africans"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            colonial hut taxes created in Africa
          </Link>
          . Different method, same logic: destroy the alternatives, manufacture dependency on wages.
        </P>
      </ArticleSection>

      <ArticleSection>
        <H2 id="the-invention-of-unemployment">The Invention of Unemployment</H2>
        <P>
          Here is a strange fact: the word &ldquo;unemployment&rdquo; did not exist in common
          English usage before the 1890s.
        </P>
        <P>
          This isn&apos;t because people used a different word for it. It&apos;s because the
          concept didn&apos;t exist. There was famine, there was poverty, there was disaster. But
          the specific situation of a physically able person who wants to work and cannot find
          anyone willing to pay them — that&apos;s only possible in a wage-labor economy.
        </P>
        <P>
          Before enclosure, if you weren&apos;t working for an employer, you were just... living.
          Growing food, grazing animals, gathering wood, fishing. You might be poor by any
          reasonable standard. But you weren&apos;t unemployed, because &ldquo;employment&rdquo; —
          selling your labor to someone else in exchange for a wage — wasn&apos;t the only way to
          survive.
        </P>
        <P>
          Unemployment was invented the moment the commons was enclosed. When you can only survive
          by finding an employer, and no employer wants you, you have invented a new kind of
          poverty: poverty not from natural disaster, but from the absence of a buyer for your
          labor.
        </P>

        <H3 id="the-workhouse">The Alternative to Wages: The Workhouse</H3>
        <P>
          The displaced poor didn&apos;t just quietly accept their new condition. The{' '}
          <a
            href="https://en.wikipedia.org/wiki/English_Poor_Laws"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            English Poor Laws
          </a>{' '}
          evolved over centuries to manage the problem of poverty that enclosure created. By the
          1834{' '}
          <a
            href="https://en.wikipedia.org/wiki/Poor_Law_Amendment_Act_1834"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            Poor Law Amendment Act
          </a>
          , the solution was the{' '}
          <a
            href="https://en.wikipedia.org/wiki/Workhouse"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            workhouse
          </a>
          .
        </P>
        <P>
          The workhouse was deliberately designed to be worse than the worst available wage job.
          The designers were explicit about this. The principle was called &ldquo;less
          eligibility&rdquo;: conditions in the workhouse should be less eligible (worse) than the
          condition of the lowest independent laborer. The logic: if the workhouse was better than
          a bad job, workers would prefer the workhouse. So make the workhouse hellish.
        </P>
        <P>
          Inside workhouses: families were separated (men, women, and children housed in different
          wards and forbidden from seeing each other). Meals were minimal and deliberately
          monotonous. Work was pointless — oakum picking (unpicking old rope until your fingers
          bled), stone breaking, bone crushing. The diet was designed to keep you alive but not
          healthy.
        </P>
        <P>
          Charles Dickens, who visited workhouses, wrote <em>Oliver Twist</em> in response. The
          famous scene where Oliver asks for more gruel wasn&apos;t creative exaggeration. It was
          reportage.
        </P>
        <P>
          The system worked as designed. Workers who might have refused terrible wages accepted
          them rather than face the workhouse. The choice between bad wages and something worse
          than bad wages isn&apos;t a free market in labor. It&apos;s coercion with extra steps.
        </P>
      </ArticleSection>

      <ArticleSection>
        <H2 id="polanyi-fictitious-commodities">Polanyi: Making Labor a Commodity</H2>
        <P>
          In 1944, the Hungarian-British economist{' '}
          <a
            href="https://en.wikipedia.org/wiki/Karl_Polanyi"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            Karl Polanyi
          </a>{' '}
          published{' '}
          <a
            href="https://en.wikipedia.org/wiki/The_Great_Transformation_(book)"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            <em>The Great Transformation</em>
          </a>
          . We&apos;ve{' '}
          <Link
            href="/posts/why-is-housing-so-expensive"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            mentioned him in the housing article
          </Link>{' '}
          — his concept of land as a &ldquo;fictitious commodity.&rdquo; But his argument goes
          deeper.
        </P>
        <P>
          Polanyi identified three things that markets treat as commodities but that aren&apos;t
          actually products made for sale:
        </P>
        <P>
          <strong>Labor</strong> — human beings and their time. It can be sold on the market. But
          it was never produced to be sold. People are born. They grow up. Their time is their
          life. When you buy labor, you&apos;re buying a piece of someone&apos;s existence.
        </P>
        <P>
          <strong>Land</strong> — nature. It wasn&apos;t manufactured. It wasn&apos;t produced.
          The value of a piece of land is mostly created by the community around it — the roads,
          the schools, the infrastructure. Treating it as a commodity and allowing its full price
          to be captured by a private owner means privatizing value that society created.
        </P>
        <P>
          <strong>Money</strong> — a social institution, a medium of exchange. When you treat it
          as a commodity to be produced for profit (through interest on debt), you get the{' '}
          <Link
            href="/posts/how-do-banks-create-money-out-of-nothing"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            bank-created money system we covered
          </Link>{' '}
          — where new money goes primarily to those who already have collateral.
        </P>

        <Blockquote cite="Karl Polanyi, The Great Transformation (1944)">
          &ldquo;Labor, land, and money are obviously not commodities; the postulate that anything
          that is bought and sold must have been produced for sale is emphatically untrue in regard
          to them... But the fiction of their being so produced became the organizing principle of
          society. Of the three, the fiction of labor was perhaps the most explosive.&rdquo;
        </Blockquote>

        <P>
          The key word: <em>fiction</em>. The market economy didn&apos;t discover that labor is a
          commodity. It decided to treat it as one. And then built legal, physical, and social
          structures to enforce that fiction — from enclosure acts to workhouses to vagrancy laws
          that criminalized being poor without employment.
        </P>
        <P>
          Treating labor as a commodity means that when there&apos;s no demand for your labor, you
          starve. No natural system produces this outcome. It requires active construction. The
          enclosure acts were that construction.
        </P>
      </ArticleSection>

      <ArticleSection>
        <H2 id="federici-women-enclosure">What Enclosure Did to Women</H2>
        <P>
          The standard history of enclosure focuses on men losing their farming rights. But{' '}
          <a
            href="https://en.wikipedia.org/wiki/Silvia_Federici"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            Silvia Federici
          </a>
          , in{' '}
          <a
            href="https://en.wikipedia.org/wiki/Caliban_and_the_Witch"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            <em>Caliban and the Witch</em>
          </a>{' '}
          (2004), shows that enclosure hit women differently — and more completely.
        </P>
        <P>
          In pre-enclosure England, women participated actively in the common economy. They grazed
          animals on the commons, they gleaned, they processed wool, they brewed ale, they sold
          produce in markets. These were real economic activities with real economic independence.
          Women could own property in their own names in some contexts. Widows often managed farms.
        </P>
        <P>
          Enclosure took most of these activities off the table. The commons that women had worked
          was privatized. The cottage industries that women had run were undercut by factory
          production. The markets where women had sold goods shrank.
        </P>
        <P>
          What remained? Domestic labor. Cooking, cleaning, childcare, nursing — all the work
          required to maintain the household and reproduce the labor force for the next generation.
        </P>
        <P>
          But this labor was not paid. It was not recognized as economic. It was reclassified as
          &ldquo;natural&rdquo; — something women did out of love, out of duty, out of their
          nature as wives and mothers. Federici&apos;s argument: this wasn&apos;t a natural
          development. It was the enclosure of women&apos;s labor — making it invisible and
          unpaid so that the factory owners got an enormous subsidy. The workers in the factories
          had to be fed, clothed, and cared for. The cost of that reproduction was transferred to
          women and called &ldquo;love.&rdquo;
        </P>
        <P>
          The housewife — as a specific social role, economically dependent on a husband&apos;s
          wage — was built by the same enclosure that built the factory system. It required
          enclosing women out of the independent economy.
        </P>
      </ArticleSection>

      <ArticleSection>
        <H2 id="the-8-hour-day">The 8-Hour Day Was Fought For, Not Given</H2>
        <P>
          Into the late nineteenth century, the working day in industrial England and the United
          States was routinely ten to twelve hours. Six days a week. Children worked in factories.
          There were no weekends, no holidays, no sick pay, no retirement.
        </P>
        <P>
          The{' '}
          <a
            href="https://en.wikipedia.org/wiki/Eight-hour_day"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            eight-hour day movement
          </a>{' '}
          began in the 1860s. The slogan was simple: &ldquo;Eight hours for work, eight hours for
          rest, eight hours for what we will.&rdquo; The people who invented the weekend were
          recognizing, for the first time, that workers had a right to time that belonged to them.
        </P>
        <P>
          The{' '}
          <a
            href="https://en.wikipedia.org/wiki/Haymarket_affair"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            Haymarket affair in Chicago in 1886
          </a>{' '}
          — a general strike for the eight-hour day that ended in a bomb explosion and the hanging
          of labor organizers — is still commemorated globally as International Workers&apos; Day
          (May 1st). The people who died for it didn&apos;t get to see it implemented. But later
          workers did.
        </P>
        <P>
          Henry Ford standardized the eight-hour day in his factories in 1914. His reason was
          unsentimental: he found that workers on ten-hour days made more mistakes and were less
          productive than workers on eight hours. The humane reform also happened to maximize
          profit. But it had taken decades of strikes and organizing pressure to get the point
          where an employer would discover that.
        </P>
        <P>
          The 40-hour work week became federal law in the United States under the{' '}
          <a
            href="https://en.wikipedia.org/wiki/Fair_Labor_Standards_Act_of_1938"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            Fair Labor Standards Act of 1938
          </a>{' '}
          — a hundred years after the first Enclosure Act peaked, and after sustained union
          organizing and strikes across multiple countries.
        </P>
        <P>
          Nothing about the working day was natural. Its length, its existence, its conditions —
          all were contested, fought over, and determined by the relative power of workers versus
          employers. When workers had more power (through unions, through political organization),
          conditions improved. When employers had more power (through legal suppression of unions,
          through the threat of the workhouse), conditions worsened.
        </P>
        <P>
          The{' '}
          <a
            href="https://en.wikipedia.org/wiki/Weekend"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            weekend
          </a>{' '}
          you have — if you have one — is a historical achievement, not a natural right. It can
          be taken away. In many parts of the world, it already has been.
        </P>
      </ArticleSection>

      <ArticleSection>
        <H2 id="global-enclosure">The Same Playbook, Applied Globally</H2>
        <P>
          English enclosure is the most documented example, but the mechanism was replicated across
          every territory European empires colonized.
        </P>
        <P>
          In India, the British{' '}
          <a
            href="https://en.wikipedia.org/wiki/Permanent_Settlement"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            Permanent Settlement of 1793
          </a>{' '}
          transformed the Bengali peasantry&apos;s complex relationship with land into something
          simple and legible: private property owned by zamindars (landlords) who could sell it,
          mortgage it, and evict from it. Village commons, forest rights, and customary use rights
          were abolished in the name of rationalization. The result was the same as England: people
          who had survived through common access now needed to earn cash to pay rent.
        </P>
        <P>
          In Africa, the colonial land seizures didn&apos;t just take territory — they took the
          basis of subsistence. In Kenya, the{' '}
          <a
            href="https://en.wikipedia.org/wiki/Kenya_Land_Commission"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            Crown Lands Ordinance of 1915
          </a>{' '}
          declared all &ldquo;waste and unoccupied&rdquo; land to be Crown property — where
          &ldquo;unoccupied&rdquo; meant not occupied according to British legal concepts of
          individual private ownership. Communally used land was declared empty. Then it was sold
          to settlers. Kikuyu farmers who had farmed the same land for generations became squatters.
        </P>
        <P>
          Then,{' '}
          <Link
            href="/posts/why-did-colonizers-tax-africans"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            as we covered in the tax article
          </Link>
          , came the hut tax: a tax that could only be paid in colonial currency, that could only
          be earned by working for wages, that effectively converted subsistence farmers into
          wage laborers. The tax and the land seizure worked together. Take the land, then demand
          cash. There was only one way to get cash.
        </P>
        <P>
          The pattern is identical in every case: identify what gives people independence, remove
          it, replace it with dependency on wages, then set the wage terms. The commons, the
          forest, the traditional farmland — wherever there was a source of independent survival,
          it was enclosed.
        </P>
        <P>
          And wherever it was enclosed, the people doing the enclosing got richer. Specifically
          because they were enclosing.
        </P>
      </ArticleSection>

      <ArticleSection>
        <ArticleCallout variant="dark" title="And Because This Is True, Something Else Collapses">
          The commons was enclosed by legislation. The workhouses were legislated. The colonial
          land seizures were legislated. At every step, political power was used to manufacture
          economic dependency — to take away the alternatives so that selling your labor to someone
          else became the only option.
          <br />
          <br />
          We&apos;ve now tracked the whole mechanism across five articles. Governments create money
          first, then tax it back — and colonial powers used that exact mechanism to force people
          into labor markets. Banks create money and direct it into property — inflating the
          enclosure-era land grab into the 21st century. The wealthy use the returns from capital
          to shape the political rules that keep capital returns high.
          <br />
          <br />
          But there is one mechanism we haven&apos;t looked at yet. The mechanism that keeps
          individuals disciplined even when they can see the whole picture. The mechanism that
          personal enclosure — the one that operates not on your land, but on your future.
          <br />
          <br />
          <Link
            href="/posts/debt-as-social-control"
            className="underline decoration-gray-200 hover:decoration-white"
          >
            Debt: The next article.
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
          Silvia Federici,{' '}
          <a
            href="https://en.wikipedia.org/wiki/Caliban_and_the_Witch"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            <em>Caliban and the Witch: Women, the Body and Primitive Accumulation</em>
          </a>
          , Autonomedia, 2004.
        </li>
        <li>
          Thomas More,{' '}
          <a
            href="https://en.wikipedia.org/wiki/Utopia_(More_book)"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            <em>Utopia</em>
          </a>
          , 1516.
        </li>
        <li>
          E. P. Thompson,{' '}
          <a
            href="https://en.wikipedia.org/wiki/The_Making_of_the_English_Working_Class"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            <em>The Making of the English Working Class</em>
          </a>
          , Victor Gollancz, 1963.
        </li>
        <li>
          J. M. Neeson,{' '}
          <em>Commoners: Common Right, Enclosure and Social Change in England, 1700–1820</em>,
          Cambridge University Press, 1993.
        </li>
        <li>
          Karl Marx,{' '}
          <a
            href="https://en.wikipedia.org/wiki/Das_Kapital"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            <em>Capital, Vol. 1</em>
          </a>
          , Chapter 27: &ldquo;Expropriation of the Agricultural Population from the Land,&rdquo;
          1867.
        </li>
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
          Elinor Ostrom,{' '}
          <a
            href="https://en.wikipedia.org/wiki/Governing_the_Commons"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            <em>Governing the Commons</em>
          </a>
          , Cambridge University Press, 1990 — Nobel Prize winning work on how commons are
          actually managed without privatization or state control.
        </li>
      </ArticleSources>
    </ArticleLayout>
  );
}
