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
  title: 'Is There a Ruling Class?',
  description:
    "The term sounds like a conspiracy theory. It isn't. C. Wright Mills asked it as a sociologist in 1956, backed it with data, and named it 'The Power Elite.' 65% of British senior judges went to private school. Every US Secretary of State since 1953 has been a Council on Foreign Relations member except one. Here's the documented answer.",
  keywords: [
    'is there a ruling class',
    'what is the ruling class',
    'what is the power elite C. Wright Mills',
    'who controls the economy',
    'revolving door government and finance',
    'what is the Council on Foreign Relations',
    'ruling class explained simply',
    'elite networks explained',
    'who really controls government',
  ],
  openGraph: {
    title: 'Is There a Ruling Class?',
    description:
      "65% of British senior judges went to private school. Every US Secretary of State since 1953 has been a CFR member except one. C. Wright Mills studied this in 1956 and called it The Power Elite. Here's what the data actually shows.",
    type: 'article',
    publishedTime: '2026-06-30T00:00:00Z',
    authors: ['Left Diary'],
    tags: ['Politics', 'Power', 'Class', 'Capitalism', 'Sociology'],
  },
  alternates: {
    canonical: 'https://leftdiary.com/posts/what-is-the-ruling-class',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://leftdiary.com/posts/what-is-the-ruling-class#article',
      headline: 'Is There a Ruling Class?',
      description:
        "C. Wright Mills asked this as a sociologist in 1956, backed it with data, and named it The Power Elite. 65% of British senior judges went to private school. Every US Secretary of State since 1953 has been a CFR member except one. Here's the documented answer.",
      image: 'https://leftdiary.com/images/ruling-class-cover.jpg',
      datePublished: '2026-06-30T00:00:00Z',
      dateModified: '2026-06-30T00:00:00Z',
      author: { '@type': 'Organization', name: 'Left Diary', url: 'https://leftdiary.com' },
      publisher: { '@type': 'Organization', name: 'Left Diary', url: 'https://leftdiary.com' },
      mainEntityOfPage: 'https://leftdiary.com/posts/what-is-the-ruling-class',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://leftdiary.com/posts/what-is-the-ruling-class#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is there a ruling class?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Sociologist C. Wright Mills argued in 'The Power Elite' (1956) that the US is governed by an interlocking network of corporate, military, and political elites who share social formation, rotate between positions, and share common interests. The data supports a weaker version of this claim: in the UK, 7% of the population attends private school, but 65% of senior judges, 57% of the House of Lords, and 43% of newspaper columnists did. In the US, every Secretary of State since 1953 has been a Council on Foreign Relations member except one. These are documented facts, not conspiracy. They suggest a governing network with strong self-reinforcing characteristics.",
          },
        },
        {
          '@type': 'Question',
          name: "What is C. Wright Mills' The Power Elite?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Published in 1956, 'The Power Elite' by Columbia sociologist C. Wright Mills analyzed how three interlocking elites — corporate executives, military leaders, and senior politicians — had formed a unified network that controlled major decisions in American life. Mills argued this wasn't a conspiracy but a structural reality: the same people moved between boardrooms, government offices, and military commands, shared educational backgrounds, and consistently made decisions in ways that served their shared class interests. The book was controversial but its empirical core — documented by academic sociologists for decades since — has held up.",
          },
        },
        {
          '@type': 'Question',
          name: 'What is the revolving door in politics?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "The revolving door describes the movement of individuals between government regulatory positions and the industries they formerly regulated (or will regulate). Examples: Hank Paulson moved from Goldman Sachs CEO to US Treasury Secretary, where he oversaw a $700 billion bank bailout that included Goldman. Mark Carney moved from Goldman Sachs to Bank of England Governor. Tony Blair became a JP Morgan adviser after leaving as Prime Minister. This isn't secret — it's reported, legal, and routine. That's the point: the revolving door doesn't require conspiracy because it operates openly and structurally.",
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between a ruling class and a conspiracy?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "A conspiracy requires secret coordination for specific ends. A ruling class requires shared interests, shared social formation, and shared access to power — none of which need be secret. If 100 people all own property, they will all tend to vote against rent control independently — that's class interest, not conspiracy. Scale that up: if an interlocking network of people went to the same schools, sit on each other's boards, and rotate through government and finance, their interests converge and their communication is constant. You don't need a secret meeting when your interests already align and you already know each other socially.",
          },
        },
        {
          '@type': 'Question',
          name: 'What is the Council on Foreign Relations?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "The Council on Foreign Relations (CFR) is an American think tank and membership organization focused on US foreign policy. Founded in 1921, its membership is selective and limited. It publishes 'Foreign Affairs,' the most influential foreign policy journal in the US. Every US Secretary of State since 1953 has been a CFR member except one (Rex Tillerson, who joined after appointment). Its members include most US presidents post-WWII, virtually all senior State Department officials, and the chairs of major financial institutions and corporations.",
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://leftdiary.com/posts/what-is-the-ruling-class#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://leftdiary.com' },
        { '@type': 'ListItem', position: 2, name: 'Posts', item: 'https://leftdiary.com/posts' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Is There a Ruling Class?',
          item: 'https://leftdiary.com/posts/what-is-the-ruling-class',
        },
      ],
    },
  ],
};

const TOC_ITEMS: TOCItem[] = [
  { id: 'the-term-that-sounds-extreme', text: "The Term That Sounds Extreme", level: 2 },
  { id: 'mills-and-the-power-elite', text: 'The Interlocking Elites', level: 2 },
  { id: 'the-schools', text: 'The Schools', level: 2 },
  { id: 'uk-eton-pipeline', text: 'The UK: Eton to Everywhere', level: 3 },
  { id: 'us-ivy-league-pipeline', text: 'The US: Ivy League to Everything', level: 3 },
  { id: 'the-revolving-door', text: 'The Revolving Door', level: 2 },
  { id: 'the-forums', text: 'The Forums No One Voted For', level: 2 },
  { id: 'not-a-conspiracy', text: "It's All in Public", level: 2 },
  { id: 'class-not-cabal', text: 'No Secret Meeting Required', level: 3 },
  { id: 'what-the-ruling-class-actually-does', text: 'What the Ruling Class Actually Does', level: 2 },
  { id: 'faq', text: 'Common Questions', level: 2 },
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Is there a ruling class?',
    answer: (
      <>
        Sociologist{' '}
        <a
          href="https://en.wikipedia.org/wiki/C._Wright_Mills"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-gray-400 hover:decoration-gray-700"
        >
          C. Wright Mills
        </a>{' '}
        argued in{' '}
        <a
          href="https://en.wikipedia.org/wiki/The_Power_Elite"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-gray-400 hover:decoration-gray-700"
        >
          <em>The Power Elite</em>
        </a>{' '}
        (1956) that the US is governed by an interlocking network of corporate, military, and
        political elites who share social formation, rotate between positions, and share common
        interests. The data supports a weaker version: in the UK, 7% of the population attends
        private school, but 65% of senior judges and 57% of the House of Lords did. In the US,
        every Secretary of State since 1953 has been a CFR member except one. These are
        documented facts suggesting a governing network with strong self-reinforcing
        characteristics.
      </>
    ),
  },
  {
    question: "What is C. Wright Mills' The Power Elite?",
    answer: (
      <>
        Published in 1956,{' '}
        <a
          href="https://en.wikipedia.org/wiki/The_Power_Elite"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-gray-400 hover:decoration-gray-700"
        >
          <em>The Power Elite</em>
        </a>{' '}
        by Columbia sociologist C. Wright Mills analyzed how three interlocking elites — corporate
        executives, military leaders, and senior politicians — had formed a unified network that
        controlled major decisions in American life. Mills argued this wasn&apos;t a conspiracy but
        a structural reality: the same people moved between boardrooms, government, and military
        commands, shared educational backgrounds, and consistently made decisions serving their
        shared interests.
      </>
    ),
  },
  {
    question: 'What is the revolving door in politics?',
    answer: (
      <>
        The revolving door describes movement between government positions and the industries those
        officials formerly regulated. Examples: Hank Paulson from Goldman Sachs CEO to US Treasury
        Secretary, where he oversaw the $700 billion bank bailout. Mark Carney from Goldman Sachs
        to Bank of England Governor. Tony Blair to JP Morgan advisory role. This isn&apos;t
        secret — it&apos;s reported, legal, and routine. The{' '}
        <a
          href="https://en.wikipedia.org/wiki/Revolving_door_(politics)"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-gray-400 hover:decoration-gray-700"
        >
          revolving door
        </a>{' '}
        doesn&apos;t require conspiracy because it operates openly and structurally.
      </>
    ),
  },
  {
    question: 'What is the difference between a ruling class and a conspiracy?',
    answer: (
      <>
        A conspiracy requires secret coordination for specific ends. A class requires shared
        interests, shared social formation, and shared access to power — none of which need be
        secret. If 100 people all own property, they tend to vote against rent control
        independently — that&apos;s class interest, not conspiracy. Scale that up to an
        interlocking network who went to the same schools, sit on each other&apos;s boards, and
        rotate through government and finance: their interests converge and their communication is
        constant. No secret meeting required.
      </>
    ),
  },
  {
    question: 'What is the Council on Foreign Relations?',
    answer: (
      <>
        The{' '}
        <a
          href="https://en.wikipedia.org/wiki/Council_on_Foreign_Relations"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-gray-400 hover:decoration-gray-700"
        >
          Council on Foreign Relations (CFR)
        </a>{' '}
        is an American think tank and selective membership organization focused on US foreign
        policy, founded in 1921. It publishes <em>Foreign Affairs</em>, the most influential
        foreign policy journal in the US. Every US Secretary of State since 1953 has been a CFR
        member except one (Rex Tillerson, who joined after appointment). Its members include most
        postwar US presidents and virtually all senior State Department officials.
      </>
    ),
  },
];

const FURTHER_READING: FurtherReadingItem[] = [
  {
    href: '/posts/debt-as-social-control',
    title: 'How Does Debt Keep People In Line?',
    description: 'Debt disciplines individuals. IMF debt disciplines nations. The ruling class uses both.',
  },
  {
    href: '/posts/why-do-the-rich-keep-getting-richer',
    title: 'Why Do the Rich Keep Getting Richer?',
    description: 'Piketty\'s r > g plus regulatory capture: the ruling class writes the rules that make r > g permanent.',
  },
  {
    href: '/posts/how-did-people-survive-before-capitalism',
    title: 'How Did People Survive Before Capitalism?',
    description: 'The Commons was enclosed by Parliament — controlled by landlords. The ruling class preceded industrial capitalism.',
  },
  {
    href: 'https://en.wikipedia.org/wiki/The_Power_Elite',
    title: "The Power Elite — C. Wright Mills (Wikipedia)",
    description: "Mills' 1956 sociological study of America's interlocking corporate, military, and political elite.",
    external: true,
  },
  {
    href: 'https://en.wikipedia.org/wiki/Council_on_Foreign_Relations',
    title: 'Council on Foreign Relations — Wikipedia',
    description: 'The CFR and its documented membership overlapping with virtually all senior US foreign policy officials.',
    external: true,
  },
  {
    href: 'https://www.theguardian.com/education/2019/jun/24/half-of-englands-top-jobs-still-go-to-private-school-elite-study-finds',
    title: 'Half of England\'s top jobs go to private school elite — The Guardian',
    description: 'The Sutton Trust\'s documented research on private school backgrounds across UK elite institutions.',
    external: true,
  },
];

export default function WhatIsTheRulingClass() {
  return (
    <ArticleLayout jsonLd={jsonLd}>
      <ArticleHeader
        categories={['Politics', 'Power', 'Class']}
        title="Is There a Ruling Class?"
        lead="Parliament — controlled by landowners — passed 5,000 laws to enclose the commons. Colonial administrators designed the hut tax to force Africans into labor. The capital gains tax was written at half the income tax rate by people who earn from capital. The question isn't whether powerful people make decisions that serve themselves. The question is whether they form something more coherent — and whether we can document it."
        date="June 30, 2026"
        dateTime="2026-06-30"
        readingTime="14 min read"
      />

      <ArticleTOC items={TOC_ITEMS} />

      <ArticleSection>
        <H2 id="the-term-that-sounds-extreme">The Term That Sounds Extreme</H2>
        <P>
          If you say &ldquo;the ruling class,&rdquo; most people in a mainstream conversation will
          get uncomfortable. It sounds Marxist. It sounds like you&apos;re claiming someone is
          pulling strings. It sounds like the kind of thing people say when they&apos;ve gone down
          a rabbit hole.
        </P>
        <P>
          But consider what we&apos;ve established across six articles:
        </P>
        <P>
          <Link
            href="/posts/how-did-people-survive-before-capitalism"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            Parliament — controlled by landowners — passed 5,000 laws
          </Link>{' '}
          to enclose the commons and manufacture a workforce.{' '}
          <Link
            href="/posts/why-did-colonizers-tax-africans"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            Colonial administrators
          </Link>{' '}
          designed the hut tax specifically to force Africans into labor markets. The capital gains
          tax rate was written into law at half the rate of income tax —{' '}
          <Link
            href="/posts/why-do-the-rich-keep-getting-richer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            legislation written and passed by people who earn from capital
          </Link>
          . The IMF imposes conditions on indebted nations that prevent them from using the exact
          development strategies that today&apos;s wealthy nations used.
        </P>
        <P>
          In each case: decisions were made. By people. In rooms. Those decisions consistently
          served the interests of people who owned capital, and consistently constrained the options
          of people who didn&apos;t. Across 300 years and multiple continents.
        </P>
        <P>
          At what point does that become a question worth asking sociologically?
        </P>
        <P>
          The question isn&apos;t whether powerful people exist. Obviously they do. The question is
          whether they form something more than a collection of individuals — whether there is
          something that functions like a <em>class</em>. A group with common interests, shared
          social formation, and networks through which they communicate and coordinate, in ways that
          consistently maintain their position.
        </P>
        <P>
          That&apos;s not a conspiracy theory. That&apos;s a sociology question. And it has been
          studied rigorously.
        </P>
      </ArticleSection>

      <ArticleSection>
        <H2 id="mills-and-the-power-elite">The Interlocking Elites</H2>
        <P>
          Who actually makes the major decisions? Not in theory — in practice. Who runs the
          economy, the military, and the government? When that question was studied empirically
          in mid-20th century America, the finding was consistent.
        </P>
        <P>
          Three interlocking elites had, by that point, formed something like a unified command
          structure. Not through conspiracy. Through a convergence that had built over decades:
        </P>
        <P>
          <strong>The corporate elite</strong> — the boards and executives of the 200 or so
          largest corporations, which by the 1950s controlled a disproportionate share of US
          industrial output, employment, and investment decisions.
        </P>
        <P>
          <strong>The military elite</strong> — the senior officer corps and the civilian defense
          establishment, which had permanently expanded after World War II (unlike in previous
          wars) and now represented a permanent large institution with enormous budgets and
          political connections.
        </P>
        <P>
          <strong>The political elite</strong> — the senior executive branch (not Congress, which
          Mills saw as more dispersed and less powerful), specifically the presidency and the
          agencies that executed policy.
        </P>
        <P>
          What made these three groups interconnected was the membership: the same individuals
          moved between corporate boards, government positions, and defense contracts. Dwight
          Eisenhower — the president who famously warned about the &ldquo;military-industrial
          complex&rdquo; in his farewell address — was describing what he had personally operated.
          The man who named it was the man who had run it.
        </P>
        <P>
          The claim is not that these people coordinate secretly. It is more boring than that,
          and more durable: they share backgrounds, share interests, and rotate through the same
          positions. Coordination doesn&apos;t require a secret room. It emerges from shared
          formation.{' '}
          <span className="text-sm text-gray-400 not-italic">(Mills,{' '}
            <a href="https://en.wikipedia.org/wiki/The_Power_Elite" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-400 hover:decoration-gray-600">
              <em>The Power Elite</em>
            </a>
          , 1956)</span>
        </P>
      </ArticleSection>

      <ArticleSection>
        <H2 id="the-schools">The Schools</H2>
        <P>
          The single most consistent finding in the sociology of elites across multiple countries
          is the disproportionate role of specific educational institutions. Not just
          &ldquo;good schools&rdquo; — specific schools attended by a tiny fraction of the
          population, which then account for a staggering fraction of the people running things.
        </P>

        <H3 id="uk-eton-pipeline">The UK: Eton to Everywhere</H3>
        <P>
          About 7% of British children attend private (fee-paying) secondary schools. The{' '}
          <a
            href="https://www.suttontrust.com/our-research/elitist-britain-2019/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            Sutton Trust&apos;s 2019 &ldquo;Elitist Britain&rdquo; report
          </a>{' '}
          found that privately educated people made up:
        </P>
        <P>
          — 65% of senior judges
          <br />
          — 57% of the House of Lords
          <br />
          — 52% of senior diplomats
          <br />
          — 43% of newspaper columnists
          <br />
          — 39% of Cabinet ministers
        </P>
        <P>
          One school in particular:{' '}
          <a
            href="https://en.wikipedia.org/wiki/Eton_College"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            Eton College
          </a>
          . Founded in 1440 to educate poor scholars, it now charges approximately £50,000 per
          year. Among its alumni: twenty British prime ministers, including David Cameron, Boris
          Johnson, and Harold Macmillan. The governors of the Bank of England. Editors of major
          newspapers. Senior figures in the intelligence services.
        </P>
        <P>
          Eton&apos;s intake: around 1,300 boys in the school at any one time, drawn from a very
          narrow demographic. Its output: a disproportionate share of the people who run Britain.
          This isn&apos;t secret. It&apos;s the subject of books, journalistic investigations,
          parliamentary debates. The British know about it. They just, for the most part, accept
          it.
        </P>

        <H3 id="us-ivy-league-pipeline">The US: Ivy League to Everything</H3>
        <P>
          In the United States, the pipeline runs through a different set of institutions but the
          logic is identical. The{' '}
          <a
            href="https://en.wikipedia.org/wiki/Ivy_League"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            Ivy League
          </a>{' '}
          universities (Harvard, Yale, Princeton, Columbia, Penn, Cornell, Dartmouth, Brown) enroll
          around 140,000 students total — a fraction of 1% of all US college students. They produce
          a plurality of US senators, Supreme Court justices, and cabinet members.
        </P>
        <P>
          At Yale specifically:{' '}
          <a
            href="https://en.wikipedia.org/wiki/Skull_and_Bones"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            Skull and Bones
          </a>
          , a secret senior society founded in 1832, taps 15 students per year. Its alumni
          include George H.W. Bush, George W. Bush, John Kerry, William Howard Taft, and hundreds
          of senators, federal judges, CIA directors, and corporate executives. The society is
          real. Its alumni network is real. Its power is real. And it&apos;s been written about
          openly for decades.
        </P>
        <P>
          These aren&apos;t secret societies in any operational sense. They&apos;re alumni
          networks. But alumni networks create preferential hiring, social bonds, access to
          introductions, and shared context. When the person interviewing you for the Treasury
          Department went to Yale and you went to Yale, things go a little differently.
        </P>
      </ArticleSection>

      <ArticleSection>
        <H2 id="the-revolving-door">The Revolving Door</H2>
        <P>
          The movement of individuals between government and industry — specifically the industries
          they regulate — is called the{' '}
          <a
            href="https://en.wikipedia.org/wiki/Revolving_door_(politics)"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            revolving door
          </a>
          . It is documented. It is legal. It is routine. And it is specifically the mechanism
          through which class interest and policy interest become the same thing.
        </P>
        <P>
          <strong>Henry &ldquo;Hank&rdquo; Paulson</strong>: CEO of Goldman Sachs from 1999 to
          2006, where he was paid $700 million over his career. Treasury Secretary from 2006 to
          2009. In that role he oversaw the{' '}
          <a
            href="https://en.wikipedia.org/wiki/Emergency_Economic_Stabilization_Act_of_2008"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            $700 billion TARP bailout
          </a>{' '}
          of financial institutions, including Goldman Sachs. Paulson granted himself a specific
          tax exemption to avoid paying capital gains taxes on his Goldman stock when he was
          confirmed — a provision that exists to encourage executives to enter public service.
        </P>
        <P>
          <strong>Mark Carney</strong>: Thirteen years at Goldman Sachs. Governor of the Bank of
          Canada. Governor of the Bank of England (the most powerful unelected financial position
          in the UK). After leaving: chair of Brookfield Asset Management, one of the world&apos;s
          largest private equity firms. UN Special Envoy on Climate Action and Finance.
        </P>
        <P>
          <strong>Tony Blair</strong>: Prime Minister of the United Kingdom for ten years. After
          leaving office: JP Morgan adviser (role paid to be undisclosed, estimated at £2 million
          per year), adviser to multiple foreign governments for undisclosed fees, founder of a
          consulting firm with corporate clients. The UK registered{' '}
          <a
            href="https://en.wikipedia.org/wiki/Transparency_of_Lobbying,_Non-Party_Campaigning_and_Trade_Union_Administration_Act_2014"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            lobbyists
          </a>{' '}
          so poorly that for years his firm wasn&apos;t required to register.
        </P>
        <P>
          The pattern across dozens of examples: government service, particularly in financial
          regulation, is a step in a career that includes corporate finance. The people regulating
          Goldman Sachs came from Goldman Sachs and will return to Goldman Sachs. This doesn&apos;t
          require conspiracy. It requires only that the social network of people considered
          qualified for senior economic policy positions overlaps almost entirely with the social
          network of senior finance executives.
        </P>
        <P>
          Which it does. Because they went to the same schools.
        </P>
      </ArticleSection>

      <ArticleSection>
        <H2 id="the-forums">The Forums No One Voted For</H2>
        <P>
          Above the level of individual nations, there are forums where the agenda-setting for
          the global economy happens. None of them are democratic. None were chosen by anyone
          outside a narrow circle. All of them have substantial influence.
        </P>
        <P>
          <strong>The World Economic Forum</strong> (Davos): an annual gathering in the Swiss
          Alpine town of Davos of approximately 2,500 business leaders, heads of government,
          academics, and journalists, organized by a private Swiss nonprofit. Members pay up to{' '}
          $600,000 per year for access. The agenda: global economic governance, climate, trade,
          labor markets. Decisions are not made at Davos — but the framework of what problems
          matter and what solutions are legitimate is substantially shaped there.
        </P>
        <P>
          <strong>The Bilderberg Group</strong>: an annual private conference of approximately 130
          participants from North America and Europe — politicians, senior executives, academics,
          journalists. Founded in 1954. No press is permitted. The agenda and discussion are not
          published. The group is real, documented, not secret — participants are listed each year.
          It simply meets privately and doesn&apos;t report what it discussed. What comes out of
          it, if anything, is unknown. What can be said: the people making major economic and
          foreign policy decisions have, for seventy years, been meeting privately to discuss them.
        </P>
        <P>
          <strong>The Council on Foreign Relations</strong>: founded in 1921, the CFR is arguably
          the most influential foreign policy institution in the United States. Its members include
          every US Secretary of State since 1953 except one. Its journal, <em>Foreign Affairs</em>,
          sets the parameters of mainstream foreign policy debate. Its task forces produce reports
          that become the basis for policy. It is not elected. Membership is selective. It is,
          however, publicly transparent about its membership and publications — unlike Bilderberg.
        </P>
        <P>
          The question these forums raise isn&apos;t conspiratorial. It&apos;s structural: the
          people who make major economic and political decisions in the world&apos;s most powerful
          countries regularly gather, privately, outside of any democratic accountability, to
          discuss those decisions. The outcomes of those discussions shape policy that affects
          billions of people who were not invited, did not vote for the participants, and are not
          told what was said.
        </P>
      </ArticleSection>

      <ArticleSection>
        <H2 id="not-a-conspiracy">It&apos;s All in Public</H2>
        <P>
          None of what we&apos;ve described requires secrecy. That&apos;s what makes it durable.
        </P>
        <P>
          The school statistics are from the Sutton Trust — a published report. The revolving door
          is reported in mainstream journalism every time a Goldman Sachs partner becomes Treasury
          Secretary. The Bilderberg attendance list is posted publicly each year. The CFR membership
          is on their website. Charles Koch wrote about his strategy to fund think tanks and shift
          what was considered acceptable policy — in his own book.
        </P>
        <P>
          None of it is hidden. It operates openly, in plain sight, and has for decades. The reason
          it feels like a conspiracy when someone names it is not because the facts are secret. It&apos;s
          because the facts are familiar and naming them — putting them together and saying what they
          add up to — is treated as the suspicious act.
        </P>

        <H3 id="class-not-cabal">No Secret Meeting Required</H3>
        <P>
          If every landlord in a city votes against rent control, is that a conspiracy? No. It&apos;s
          each person acting in their own interest. No coordination needed — the interest is shared,
          so the behavior converges.
        </P>
        <P>
          Scale that up. A network of people who went to the same schools, share boards and
          foundations and alumni networks, all hold substantial capital — they don&apos;t need to
          meet secretly. They already agree on the fundamentals because their position makes those
          fundamentals in their interest. And they do meet constantly: at Davos, at Bilderberg,
          in board rooms, at foundations that function as their social infrastructure. The
          coordination isn&apos;t hidden. It&apos;s just called networking.
        </P>

        <P>
          The people who own the major institutions — production, media, education, finance —
          find that their way of seeing things is the one that gets taught, amplified, and
          treated as common sense. Not because they hold secret meetings about it. Because when
          you own the newspaper and fund the university and staff the government, your worldview
          is already in the room.{' '}
          <span className="text-sm text-gray-400 not-italic">(Marx &amp; Engels, <em>The German Ideology</em>, 1845)</span>
        </P>
      </ArticleSection>

      <ArticleSection>
        <H2 id="what-the-ruling-class-actually-does">What the Ruling Class Actually Does</H2>
        <P>
          Not: meet in a secret bunker and decide everything. Too complex, too dynamic, too
          contested even within the elite for that.
        </P>
        <P>
          Yes, concretely:
        </P>
        <P>
          <strong>Fund think tanks that shift the Overton window.</strong> Charles Koch spent
          decades and hundreds of millions of dollars funding a network of libertarian think tanks
          — the Cato Institute, the Heritage Foundation, the Mercatus Center — explicitly to make
          free-market ideas mainstream. He wrote about this strategy in{' '}
          <a
            href="https://en.wikipedia.org/wiki/Charles_Koch"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            his own books and memos
          </a>
          . It worked. Ideas that were considered fringe in the 1970s (deregulation, privatization,
          cutting top tax rates) became mainstream policy by the 1990s.
        </P>
        <P>
          <strong>Finance political campaigns to shape policy.</strong> The top 1% donate around
          40% of all political donations in the US. This doesn&apos;t buy specific votes (the
          evidence for direct quid pro quo corruption is mixed) but it shapes{' '}
          <em>which issues get discussed</em>, which candidates have access to money, and which
          policy positions are considered &ldquo;serious.&rdquo;
        </P>
        <P>
          <strong>Staff regulatory agencies with industry insiders.</strong> The revolving door
          isn&apos;t just individual careers. It&apos;s the structural pipeline through which the
          people considered qualified to regulate finance are the people who came from finance.
          When the FDA is staffed by people from pharmaceutical companies, when the EPA is led by
          people from energy companies, when the Treasury is run by people from investment banks —
          the regulatory outcomes reflect those backgrounds.
        </P>
        <P>
          <strong>Own the newspapers and broadcast platforms that define &ldquo;common sense.&rdquo;</strong>{' '}
          Six companies control around 90% of US media — a statistic that has been reported and
          repeated so often it no longer surprises anyone, though its implications remain largely
          undiscussed. The owners of those companies share the class position of the people we&apos;ve
          been describing. Their outlets&apos; editorial positions reflect that position.
        </P>
        <P>
          Each of these is documented. Each is reported. None requires a conspiracy. Together they
          describe a class that exercises substantial influence over the conditions of its own rule.
        </P>

        <ArticleCallout variant="dark" title="And Because This Is True, Something Else Collapses">
          There is a ruling class. It is documented. Named. Visible. Its continued power does not
          rest only on money and legislation and debt — though it rests on those. It rests on the
          majority of people not challenging it. Not because they are stupid. But because the ideas
          that justify the current distribution of power are everywhere — in schools, in newspapers,
          in what gets called serious and what gets called extreme.
          <br />
          <br />
          The ruling class doesn&apos;t need to censor alternative ideas if those ideas never feel
          credible, never get amplified, never appear on the front page. The media that decides
          what counts as serious, what gets labeled &ldquo;extreme,&rdquo; and what is presented
          as the natural state of things is not neutral. It is owned by someone. Someone with
          interests.
          <br />
          <br />
          <Link
            href="/posts/who-owns-the-media"
            className="underline decoration-gray-200 hover:decoration-white"
          >
            The next article: who owns the media — and what does ownership actually do to what you
            think?
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
          C. Wright Mills,{' '}
          <a
            href="https://en.wikipedia.org/wiki/The_Power_Elite"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            <em>The Power Elite</em>
          </a>
          , Oxford University Press, 1956.
        </li>
        <li>
          G. William Domhoff,{' '}
          <a
            href="https://en.wikipedia.org/wiki/Who_Rules_America%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            <em>Who Rules America? Power, Politics, and Social Change</em>
          </a>
          , McGraw-Hill, 1967 (updated multiple times through 2022). The most sustained
          empirical updating of Mills&apos;s work.
        </li>
        <li>
          Sutton Trust,{' '}
          <a
            href="https://www.suttontrust.com/our-research/elitist-britain-2019/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            &ldquo;Elitist Britain 2019,&rdquo;
          </a>{' '}
          research on private school backgrounds across UK elite institutions.
        </li>
        <li>
          Christopher Hayes,{' '}
          <a
            href="https://en.wikipedia.org/wiki/Twilight_of_the_Elites"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            <em>Twilight of the Elites: America After Meritocracy</em>
          </a>
          , Crown, 2012.
        </li>
        <li>
          Jane Mayer,{' '}
          <a
            href="https://en.wikipedia.org/wiki/Dark_Money_(book)"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            <em>Dark Money: The Hidden History of the Billionaires Behind the Rise of the
            Radical Right</em>
          </a>
          , Doubleday, 2016 — the documented account of Koch network funding.
        </li>
        <li>
          Karl Marx and Friedrich Engels,{' '}
          <a
            href="https://en.wikipedia.org/wiki/The_German_Ideology"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            <em>The German Ideology</em>
          </a>
          , 1845 (published 1932).
        </li>
        <li>
          Antonio Gramsci,{' '}
          <a
            href="https://en.wikipedia.org/wiki/Prison_Notebooks"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            <em>Prison Notebooks</em>
          </a>
          , written 1929–1935 — the foundational account of how ruling class hegemony operates
          through culture and &ldquo;common sense&rdquo; rather than force alone.
        </li>
      </ArticleSources>
    </ArticleLayout>
  );
}
