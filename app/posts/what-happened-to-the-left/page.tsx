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
  title: 'What Happened to the Left?',
  description:
    "In 1945, Labour won the most decisive election victory in British history and built the NHS. In 1981, Reagan fired 11,000 striking air traffic controllers — and union membership began a collapse that hasn't stopped. Here's how the most powerful labor movement in history was defeated, and what was used to defeat it.",
  keywords: [
    'what happened to the left',
    'why did the left fail',
    'history of the labor movement',
    'what is neoliberalism explained',
    'Reagan PATCO strike explained',
    'Thatcher miners strike explained',
    'COINTELPRO explained',
    'Mont Pelerin Society explained',
    'history of trade unions',
    'how were unions destroyed',
  ],
  openGraph: {
    title: 'What Happened to the Left?',
    description:
      "In 1945, Labour built the NHS. In 1981, Reagan fired 11,000 striking workers and union power collapsed. Here's the deliberate counter-revolution that dismantled the postwar left — and why the ideas didn't die with it.",
    type: 'article',
    publishedTime: '2026-06-30T00:00:00Z',
    authors: ['Left Diary'],
    tags: ['Politics', 'History', 'Labor', 'Neoliberalism', 'Left'],
  },
  alternates: {
    canonical: 'https://leftdiary.com/posts/what-happened-to-the-left',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://leftdiary.com/posts/what-happened-to-the-left#article',
      headline: 'What Happened to the Left?',
      description:
        "In 1945, Labour won a landslide and built the NHS. In 1981, Reagan fired 11,000 striking workers and union power began to collapse. Here's the deliberate counter-revolution that dismantled the postwar left.",
      image: 'https://leftdiary.com/images/left-history-cover.jpg',
      datePublished: '2026-06-30T00:00:00Z',
      dateModified: '2026-06-30T00:00:00Z',
      author: { '@type': 'Organization', name: 'Left Diary', url: 'https://leftdiary.com' },
      publisher: { '@type': 'Organization', name: 'Left Diary', url: 'https://leftdiary.com' },
      mainEntityOfPage: 'https://leftdiary.com/posts/what-happened-to-the-left',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://leftdiary.com/posts/what-happened-to-the-left#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What happened to the left politically?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "The postwar left — labor unions, social democratic parties, socialist movements — reached its peak power in the 1945-1975 period. In that era, unions in the US represented 35% of the workforce, top income tax rates were 91%, and the postwar Keynesian consensus held that government management of the economy was legitimate and necessary. The collapse came through a combination of: the economic crises of the 1970s (stagflation, oil shocks) which discredited Keynesian approaches; deliberate counter-organizing by business interests through think tanks (Heritage, Cato) and the Mont Pelerin Society's network; Reagan and Thatcher dismantling labor power (PATCO firing, miners' strike defeat); and COINTELPRO-style suppression of radical left organizations.",
          },
        },
        {
          '@type': 'Question',
          name: 'What was the PATCO strike?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "In August 1981, the Professional Air Traffic Controllers Organization (PATCO) went on strike demanding better pay, shorter hours, and improved working conditions. President Reagan declared the strike illegal (federal employees were banned from striking), gave strikers 48 hours to return to work, then fired all 11,359 who didn't. He had them permanently banned from federal employment. The signal sent to American business was unambiguous: the government would not protect workers who went on strike against their employers. Union membership in the US fell from 20% in 1983 to 10% by 2023.",
          },
        },
        {
          '@type': 'Question',
          name: 'What was COINTELPRO?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "COINTELPRO (Counter Intelligence Program) was an FBI program run from 1956 to 1971 that systematically targeted left-wing organizations in the United States. It surveilled, infiltrated, and disrupted civil rights organizations, socialist groups, antiwar activists, feminist organizations, and the Black Panther Party. Tactics included: forged letters to create internal conflict, blackmail using surveillance material, planting false evidence, and coordinating with local police. Fred Hampton, chairman of the Illinois Black Panther Party, was killed by Chicago police in a raid coordinated with the FBI in 1969. He was 21 years old.",
          },
        },
        {
          '@type': 'Question',
          name: 'What is neoliberalism?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "In 1947, Friedrich Hayek convened 36 economists and intellectuals at Mont Pelerin, Switzerland. Their explicit goal: to counter the postwar drift toward state planning and rebuild the case for free markets. For thirty years they operated at the margins. Then the 1970s gave them their opening. Margaret Thatcher (1979) and Ronald Reagan (1981) implemented the agenda: cut top tax rates, reduce union power, privatize public services, deregulate financial markets. 'There is no alternative,' said Thatcher. The word 'neoliberalism' is what economists call what those specific institutions, funders, and politicians built — starting in 1947 and implemented from 1979 onward.",
          },
        },
        {
          '@type': 'Question',
          name: 'How were unions destroyed?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Unions were destroyed through several simultaneous moves. Reagan fired 11,359 PATCO strikers and banned them from federal employment for life — the signal that striking workers were on their own. Thatcher defeated the miners in a confrontation she had specifically prepared for. Legal changes made organizing harder. Manufacturers moved production to lower-wage countries, gutting the industries where unions were strongest. The financial industry grew to dominate employment in sectors that had never been organized. US union membership fell from 35% in the 1950s to around 10% today.",
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://leftdiary.com/posts/what-happened-to-the-left#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://leftdiary.com' },
        { '@type': 'ListItem', position: 2, name: 'Posts', item: 'https://leftdiary.com/posts' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'What Happened to the Left?',
          item: 'https://leftdiary.com/posts/what-happened-to-the-left',
        },
      ],
    },
  ],
};

const TOC_ITEMS: TOCItem[] = [
  { id: 'when-it-worked', text: 'When It Worked', level: 2 },
  { id: 'the-postwar-peak', text: 'The Postwar Peak', level: 2 },
  { id: 'nhs-welfare-state', text: '1945: Labour Wins and Builds the NHS', level: 3 },
  { id: 'american-new-deal', text: 'The New Deal Coalition', level: 3 },
  { id: 'the-counter-revolution', text: 'The Counter-Revolution That Was Planned', level: 2 },
  { id: 'mont-pelerin', text: 'The Mont Pelerin Society', level: 3 },
  { id: 'powell-memo', text: 'The Powell Memo', level: 3 },
  { id: 'reagan-and-thatcher', text: 'Reagan and Thatcher: Dismantling Labor Power', level: 2 },
  { id: 'patco', text: 'PATCO: The Strike That Changed Everything', level: 3 },
  { id: 'miners-strike', text: "Thatcher and the Miners' Strike", level: 3 },
  { id: 'cointelpro', text: 'COINTELPRO: The Suppression of the Radical Left', level: 2 },
  { id: 'what-the-left-lost', text: 'What the Left Lost — and What It Didn\'t', level: 2 },
  { id: 'faq', text: 'Common Questions', level: 2 },
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'What happened to the left politically?',
    answer: (
      <>
        The postwar left reached its peak in 1945–1975. Unions represented 35% of the US
        workforce; top income tax rates were 91%; Keynesian economic management was the
        mainstream. The collapse came through: economic crises of the 1970s (stagflation, oil
        shocks) that discredited Keynesian policy; decades of counter-organizing through think
        tanks (Heritage Foundation, Cato Institute) funded by business interests; Reagan and
        Thatcher systematically dismantling labor power; and active state suppression of radical
        left organizations through programs like COINTELPRO.
      </>
    ),
  },
  {
    question: 'What was the PATCO strike?',
    answer: (
      <>
        In August 1981, the{' '}
        <a
          href="https://en.wikipedia.org/wiki/PATCO_strike"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-gray-400 hover:decoration-gray-700"
        >
          Professional Air Traffic Controllers Organization (PATCO)
        </a>{' '}
        went on strike. Reagan declared the strike illegal, gave strikers 48 hours to return to
        work, then permanently fired all 11,359 who didn&apos;t. He banned them from federal
        employment for life. The signal to American business: the government would not protect
        striking workers. US union membership fell from 20% in 1983 to 10% by 2023.
      </>
    ),
  },
  {
    question: 'What was COINTELPRO?',
    answer: (
      <>
        <a
          href="https://en.wikipedia.org/wiki/COINTELPRO"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-gray-400 hover:decoration-gray-700"
        >
          COINTELPRO
        </a>{' '}
        (Counter Intelligence Program) was an FBI program from 1956 to 1971 that surveilled,
        infiltrated, and disrupted civil rights organizations, socialist groups, antiwar activists,
        and the Black Panther Party. Tactics included forged letters to create internal conflict,
        blackmail, false evidence, and coordination with local police. Fred Hampton, chairman of
        the Illinois Black Panther Party, was killed in an FBI-coordinated Chicago police raid in
        1969. He was 21 years old.
      </>
    ),
  },
  {
    question: 'What is neoliberalism?',
    answer: (
      <>
        In 1947, Hayek convened 36 economists and intellectuals at the{' '}
        <a
          href="https://en.wikipedia.org/wiki/Mont_Pelerin_Society"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-gray-400 hover:decoration-gray-700"
        >
          Mont Pelerin Society
        </a>
        {' '}with a specific goal: to counter the postwar drift toward state planning. For thirty
        years they built the intellectual network. Then the 1970s gave them their opening.
        Thatcher (1979) and Reagan (1981) implemented the agenda: cut top tax rates, break union
        power, privatize public services, deregulate financial markets. &ldquo;There is no
        alternative,&rdquo; said Thatcher.{' '}
        <a
          href="https://en.wikipedia.org/wiki/Neoliberalism"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-gray-400 hover:decoration-gray-700"
        >
          Neoliberalism
        </a>{' '}
        is what economists call what those specific people built — starting in 1947 and
        implemented from 1979.
      </>
    ),
  },
  {
    question: 'How were unions destroyed?',
    answer: (
      <>
        Unions were destroyed through several simultaneous moves. Reagan fired 11,359 PATCO
        strikers and banned them from federal employment for life — the signal that striking workers
        were on their own. Thatcher defeated the miners in a confrontation she had specifically
        prepared for. Legal changes made organizing harder to sustain. Manufacturers moved
        production to lower-wage countries, gutting the industries where unions were strongest.
        The financial industry — deregulated from 1986 onward — grew to dominate employment in
        sectors that had never been organized. US union membership fell from 35% in the 1950s to
        around 10% today.
      </>
    ),
  },
];

const FURTHER_READING: FurtherReadingItem[] = [
  {
    href: '/posts/who-owns-the-media',
    title: 'Who Owns the Media?',
    description: 'Media concentration was part of the same counter-revolution. Murdoch built Fox News specifically to shift the political landscape.',
  },
  {
    href: '/posts/what-is-the-ruling-class',
    title: 'Is There a Ruling Class?',
    description: 'The Mont Pelerin Society, the Powell Memo, COINTELPRO — all expressions of a class acting in its interests.',
  },
  {
    href: '/posts/how-did-people-survive-before-capitalism',
    title: 'How Did People Survive Before Capitalism?',
    description: 'The labor movement fought to recover what enclosure took. Here\'s what was lost.',
  },
  {
    href: 'https://en.wikipedia.org/wiki/COINTELPRO',
    title: 'COINTELPRO — Wikipedia',
    description: "The FBI's documented program of surveilling, infiltrating, and disrupting left-wing organizations from 1956 to 1971.",
    external: true,
  },
  {
    href: 'https://en.wikipedia.org/wiki/Mont_Pelerin_Society',
    title: 'Mont Pelerin Society — Wikipedia',
    description: "Hayek's 1947 network that incubated the ideas implemented by Reagan and Thatcher thirty years later.",
    external: true,
  },
  {
    href: 'https://en.wikipedia.org/wiki/Powell_Memorandum',
    title: 'Powell Memorandum — Wikipedia',
    description: "Lewis Powell's 1971 memo to the US Chamber of Commerce calling for organized business opposition to the left.",
    external: true,
  },
];

export default function WhatHappenedToTheLeft() {
  return (
    <ArticleLayout jsonLd={jsonLd}>
      <ArticleHeader
        categories={['Politics', 'History', 'Labor']}
        title="What Happened to the Left?"
        lead={
          <>
            In 1945, the British Labour Party won the most decisive election victory in British
            history — 393 seats, an outright majority. Within six years, they had built the
            National Health Service, nationalized coal, steel, railways, and utilities, and created
            the modern welfare state. In 1984, Margaret Thatcher broke the miners&apos; strike
            in eleven months of pitched battle, and UK union membership entered a collapse that
            hasn&apos;t stopped. Here is what happened between those two dates — and why the story
            matters for what is possible now.
          </>
        }
        date="June 30, 2026"
        dateTime="2026-06-30"
        readingTime="16 min read"
      />

      <ArticleTOC items={TOC_ITEMS} />

      <ArticleSection>
        <H2 id="when-it-worked">When It Worked</H2>
        <P>
          There is a tendency, on the left, to treat its history as a long story of defeat. That&apos;s
          wrong, and getting it wrong matters. Because if the left has only ever lost, then losing
          feels inevitable, feels natural — and that feeling is exactly what the people who
          dismantled it wanted.
        </P>
        <P>
          The actual history is more complicated and more interesting. There was a period — roughly
          from the late 19th century through the mid-20th — when the labor movement in the United
          States, the United Kingdom, and across Western Europe achieved things that had seemed
          impossible:
        </P>
        <P>
          The{' '}
          <a
            href="https://en.wikipedia.org/wiki/Eight-hour_day"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            8-hour work day
          </a>
          . The{' '}
          <a
            href="https://en.wikipedia.org/wiki/Weekend"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            weekend
          </a>
          . Child labor laws. Workplace safety regulations. Unemployment insurance. Social Security.
          The 91% top marginal income tax rate under Eisenhower. The National Health Service.
          Universal suffrage. The{' '}
          <a
            href="https://en.wikipedia.org/wiki/Civil_Rights_Act_of_1964"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            Civil Rights Act
          </a>
          .
        </P>
        <P>
          None of these were given. All were fought for. Each required decades of organizing,
          striking, marching, dying, and sustained political pressure. The weekend you might be
          reading this on was won by people who went on strike in the 1890s and were beaten by
          police and Pinkertons for it. The{' '}
          <Link
            href="/posts/how-did-people-survive-before-capitalism"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            8-hour day
          </Link>
          , which had seemed an absurd demand to factory owners in 1880, was federal law by 1938.
        </P>
        <P>
          The left, in other words, has not only ever lost. It has won things that the people who
          owned the economy said were economically impossible. And the current attack on those
          gains is what we&apos;re really talking about when we ask what happened.
        </P>
      </ArticleSection>

      <ArticleSection>
        <H2 id="the-postwar-peak">The Postwar Peak</H2>
        <P>
          The left reached its historical peak of power in the years immediately following World
          War II. The reasons were specific and worth understanding, because they explain both why
          it was possible and what had to be dismantled to end it.
        </P>
        <P>
          The war had destroyed an enormous amount of inherited wealth — the capital that, as
          Piketty documented, normally ensures that{' '}
          <Link
            href="/posts/why-do-the-rich-keep-getting-richer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            r consistently exceeds g
          </Link>
          . The ruling class was weakened. The working class, which had fought and died in
          disproportionate numbers, emerged from the war with political demands and the
          organizational capacity to press them.
        </P>
        <P>
          In the United States, the{' '}
          <a
            href="https://en.wikipedia.org/wiki/Congress_of_Industrial_Organizations"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            CIO
          </a>{' '}
          had organized the mass production industries (steel, auto, rubber) in the 1930s. By the
          1950s, around{' '}
          <a
            href="https://en.wikipedia.org/wiki/Labor_unions_in_the_United_States"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            35% of American workers were union members
          </a>
          . That&apos;s not a fringe. That&apos;s enough to win elections, enough to sustain
          strikes, enough to set the terms of the broader political economy.
        </P>

        <H3 id="nhs-welfare-state">1945: Labour Wins and Builds the NHS</H3>
        <P>
          The 1945 British general election is one of the most dramatic in democratic history.
          Winston Churchill, who had just led Britain through World War II as its wartime prime
          minister, was expected to win easily. He lost by one of the largest landslides in British
          electoral history.
        </P>
        <P>
          Labour won 393 seats to the Conservatives&apos; 213. The British people, who had just
          spent five years being told their collective sacrifice was necessary for the national
          good, decided they wanted the national good to be distributed more collectively. They
          weren&apos;t interested in going back to the 1930s — mass unemployment, means-tested
          poverty relief, a healthcare system where you paid or you didn&apos;t see a doctor.
        </P>
        <P>
          What followed: the{' '}
          <a
            href="https://en.wikipedia.org/wiki/National_Health_Service"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            National Health Service
          </a>
          , free at point of use, funded through taxation. Nationalization of coal, steel,
          electricity, gas, railways, the Bank of England. The Beveridge welfare state — universal
          unemployment insurance, old-age pensions, family allowances. Council housing built at
          scale.
        </P>
        <P>
          The{' '}
          <a
            href="https://en.wikipedia.org/wiki/Aneurin_Bevan"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            Aneurin Bevan
          </a>
          , the Health Secretary who built the NHS, came from a Welsh mining family. His father
          had died of pneumoconiosis — a lung disease from coal dust — because working miners in
          Wales couldn&apos;t afford adequate medical care. He built the NHS specifically so that
          would never happen again. The programme was financed partly through{' '}
          <a
            href="https://en.wikipedia.org/wiki/Lend-Lease"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            Marshall Plan money
          </a>{' '}
          from the United States. The richest country in the world helped pay for Britain&apos;s
          socialist programme.
        </P>

        <H3 id="american-new-deal">The New Deal Coalition</H3>
        <P>
          In the United States, the equivalent moment came a decade earlier. Franklin Roosevelt&apos;s{' '}
          <a
            href="https://en.wikipedia.org/wiki/New_Deal"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            New Deal
          </a>
          , from 1933, created Social Security, the Securities and Exchange Commission, the Federal
          Deposit Insurance Corporation, the Wagner Act (protecting the right to unionize), and
          massive public employment programs. The top marginal income tax rate reached 94% in 1944.
        </P>
        <P>
          Roosevelt was not a socialist. He was a wealthy patrician from a prominent New York
          family who believed that capitalism needed to be saved from its own worst tendencies. In
          a famous phrase, he told the American business community that he was their best friend
          — that by accepting some regulation and redistribution, they could prevent the kind of
          revolutionary upheaval that had happened in Russia and was threatening in Europe.
        </P>
        <P>
          They hated him for it anyway. The American Liberty League, funded by DuPont, General
          Motors, and other industrial concerns, ran sustained propaganda campaigns accusing
          Roosevelt of socialism, communism, and tyranny. The business community never accepted
          the New Deal as legitimate, even as it presided over the most sustained economic growth
          and broadly-shared prosperity in American history.
        </P>
        <P>
          This matters: the postwar compromise wasn&apos;t won through persuading the ruling class.
          It was won by having enough political and economic power that the ruling class had to
          accept it temporarily. And as soon as circumstances shifted, the effort to dismantle it
          began.
        </P>
      </ArticleSection>

      <ArticleSection>
        <H2 id="the-counter-revolution">The Counter-Revolution That Was Planned</H2>
        <P>
          What produced Reagan and Thatcher was not a spontaneous reaction to economic crisis.
          It was a deliberate long-term project, begun in the 1940s, funded by business interests,
          and intellectually developed in networks that spent thirty years waiting for their opening.
        </P>

        <H3 id="mont-pelerin">The Mont Pelerin Society</H3>
        <P>
          In April 1947,{' '}
          <a
            href="https://en.wikipedia.org/wiki/Friedrich_Hayek"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            Friedrich Hayek
          </a>{' '}
          convened a gathering of 36 economists, philosophers, and intellectuals at the Hotel du
          Parc on Mont Pelerin, Switzerland. Among those present:{' '}
          <a
            href="https://en.wikipedia.org/wiki/Milton_Friedman"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            Milton Friedman
          </a>
          , Ludwig von Mises, Karl Popper. They founded the{' '}
          <a
            href="https://en.wikipedia.org/wiki/Mont_Pelerin_Society"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            Mont Pelerin Society
          </a>
          .
        </P>
        <P>
          The society&apos;s explicit purpose: to counter what its founders saw as the drift toward
          socialism and state planning in the postwar world. To develop and propagate free-market
          ideas. To build an international network of economists and intellectuals who shared those
          ideas and could promote them across institutions.
        </P>
        <P>
          For thirty years, they operated at the margins of mainstream economics. Keynes was
          dominant. Planning was respectable. The idea that markets should be left to themselves
          seemed, after the Great Depression, like the kind of thing that caused catastrophes.
        </P>
        <P>
          Then came the 1970s. Stagflation — simultaneous high inflation and high unemployment —
          appeared to contradict the Keynesian framework, which predicted the two couldn&apos;t
          coexist. The oil shocks of 1973 and 1979 created economic instability that governments
          seemed unable to manage. The postwar consensus was struggling.
        </P>
        <P>
          The Mont Pelerin network had their opening. Their ideas — deregulate, privatize, cut
          taxes, break unions, remove capital controls — were suddenly on offer as the alternative
          to a model that appeared to be failing. Hayek won the Nobel Prize in Economics in 1974.
          Friedman in 1976. The intellectual tide had turned.
        </P>

        <H3 id="powell-memo">The Powell Memo</H3>
        <P>
          In August 1971, a corporate lawyer named Lewis Powell wrote a confidential memo to the
          US Chamber of Commerce. It was titled{' '}
          <a
            href="https://en.wikipedia.org/wiki/Powell_Memorandum"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            &ldquo;Attack on American Free Enterprise System.&rdquo;
          </a>
        </P>
        <P>
          Powell&apos;s argument: the business community had been too passive in the face of
          attacks from the left — from Ralph Nader&apos;s consumer movement, from labor unions,
          from liberal academics, from media. He called for organized, coordinated, long-term
          counter-action:
        </P>

        <Blockquote cite="Lewis Powell, Confidential Memorandum to the US Chamber of Commerce, August 1971">
          &ldquo;The most disquieting voices joining the chorus of criticism come from perfectly
          respectable elements of society: from the college campus, the pulpit, the media, the
          intellectual and literary journals, the arts and sciences, and from politicians. In most
          of these groups the movement against the system is participated in only by minorities.
          Yet, these are often the most articulate, the most vocal, the most prolific in their
          writing and speaking.&rdquo;
        </Blockquote>

        <P>
          He recommended: funding business-friendly academics and endowing business school chairs,
          attacking hostile textbooks, funding a business presence in the courts, monitoring media
          and demanding equal time, mobilizing shareholder power, and building political influence.
        </P>
        <P>
          Two months after writing the memo, Powell was appointed to the Supreme Court by Richard
          Nixon.
        </P>
        <P>
          The memo became a blueprint. In the years following, the{' '}
          <a
            href="https://en.wikipedia.org/wiki/Heritage_Foundation"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            Heritage Foundation
          </a>{' '}
          (founded 1973),{' '}
          <a
            href="https://en.wikipedia.org/wiki/Cato_Institute"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            Cato Institute
          </a>{' '}
          (founded 1977),{' '}
          <a
            href="https://en.wikipedia.org/wiki/American_Enterprise_Institute"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            American Enterprise Institute
          </a>{' '}
          (expanded under business funding), and dozens of other think tanks were funded by
          corporate and wealthy individual money to do exactly what Powell described: produce
          research, popularize ideas, lobby politicians, and shift the Overton window of what was
          considered economically serious.
        </P>
      </ArticleSection>

      <ArticleSection>
        <H2 id="reagan-and-thatcher">Reagan and Thatcher: Dismantling Labor Power</H2>
        <P>
          When Ronald Reagan and Margaret Thatcher came to power — Reagan in 1981, Thatcher in
          1979 — the ideological work was done. The Mont Pelerin network had spent thirty years
          making free-market ideas intellectually respectable. The business community had spent a
          decade building the institutional infrastructure to amplify those ideas. The economic
          crises of the 1970s had discredited the alternatives.
        </P>
        <P>
          What followed was not primarily an intellectual revolution. It was a political one,
          focused specifically on breaking the institutional power of the labor movement.
        </P>

        <H3 id="patco">PATCO: The Strike That Changed Everything</H3>
        <P>
          On August 3, 1981, the{' '}
          <a
            href="https://en.wikipedia.org/wiki/PATCO_strike"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            Professional Air Traffic Controllers Organization (PATCO)
          </a>{' '}
          went on strike. Their demands were not especially radical: a 32-hour work week (down
          from 40), a $10,000 pay raise, better retirement benefits, and relief from what they
          described as an increasingly stressful and dangerous work environment.
        </P>
        <P>
          Reagan declared the strike illegal — federal employees are prohibited from striking by
          law. He gave the strikers 48 hours to return to work. 11,359 did not.
        </P>
        <P>
          He fired them all. Permanently. They were banned from federal employment for life.
        </P>
        <P>
          The message to American employers was unambiguous: if the President of the United States
          would not protect workers who went on strike, private employers certainly didn&apos;t
          have to. The implicit protection that the labor movement had enjoyed — that strikes,
          however disruptive, would eventually be resolved through negotiation rather than mass
          firing — evaporated.
        </P>
        <P>
          US union membership at the time of the PATCO strike was around 20%. Today it is around
          10%. The decline is not entirely attributable to the PATCO firing, but the PATCO firing
          marked the moment the rules changed. Employers learned they could break strikes. Unions
          learned they were not protected. Organizing became harder and more dangerous.
        </P>

        <H3 id="miners-strike">Thatcher and the Miners&apos; Strike</H3>
        <P>
          The UK equivalent — larger in scale, longer in duration, more visceral in its imagery —
          was the{' '}
          <a
            href="https://en.wikipedia.org/wiki/United_Kingdom_miners%27_strike_(1984%E2%80%9385)"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            miners&apos; strike of 1984–85
          </a>
          .
        </P>
        <P>
          The National Union of Mineworkers (NUM), led by{' '}
          <a
            href="https://en.wikipedia.org/wiki/Arthur_Scargill"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            Arthur Scargill
          </a>
          , went on strike in March 1984 against the closure of collieries. It lasted twelve months.
          At its peak, 142,000 miners were on strike. The British government had specifically
          prepared for this: stockpiled coal at power stations, trained police in riot tactics,
          restricted miners&apos; movements using road traffic laws. Cabinet documents released
          under the 30-year rule showed Thatcher had planned to confront and defeat the NUM
          specifically, as the most powerful union in the country, in order to break the broader
          labor movement.
        </P>
        <P>
          The strike was defeated in March 1985. Miners returned to work without agreement. Within
          a decade, most of the pits they had been striking to save were closed anyway.
        </P>
        <P>
          Scargill had called Thatcher and her government &ldquo;the enemy within.&rdquo; She had
          called the miners&apos; leadership &ldquo;the enemy within.&rdquo; Both meant it. This
          was a political confrontation, not a labor dispute. And the ruling class won it.
        </P>
      </ArticleSection>

      <ArticleSection>
        <H2 id="cointelpro">COINTELPRO: The Suppression of the Radical Left</H2>
        <P>
          The defeat of the organized labor movement was one side of the picture. On the other
          side: the more systematic suppression of the radical left — specifically the organizations
          that might have provided a revolutionary rather than merely reformist challenge to the
          existing order.
        </P>
        <P>
          <a
            href="https://en.wikipedia.org/wiki/COINTELPRO"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            COINTELPRO
          </a>{' '}
          — the FBI&apos;s Counter Intelligence Program — ran from 1956 to 1971. Its targets:
          the Communist Party USA, the Socialist Workers Party, the civil rights movement, the
          antiwar movement, the Black Panther Party, the American Indian Movement, feminist
          organizations, and essentially any left-wing group deemed a threat to &ldquo;national
          security.&rdquo;
        </P>
        <P>
          The methods: physical surveillance, informants, forged letters designed to create
          conflict between organizations, anonymous letters to family members and employers to
          destroy individuals&apos; lives, false evidence planted to justify prosecutions, and
          coordination with local police for direct violence.
        </P>
        <P>
          <a
            href="https://en.wikipedia.org/wiki/Fred_Hampton"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            Fred Hampton
          </a>
          , chairman of the Illinois Black Panther Party, was killed in a raid by Chicago police
          and FBI agents on December 4, 1969. He was 21 years old. He was shot in his bed.
          Evidence later showed that an FBI informant had provided the floor plan of his apartment
          and that police fired approximately 90 shots while Hampton fired one (which may have been
          fired by someone else). An independent investigation found the raid was a planned
          assassination. The federal government paid $1.85 million to the Hampton family in
          settlement — without admitting liability.
        </P>
        <P>
          COINTELPRO was not exposed by investigative journalism. It was exposed because a group
          called the Citizens Commission to Investigate the FBI broke into an FBI field office in
          Media, Pennsylvania, in 1971 and stole documents. The documents revealed the program.
          J. Edgar Hoover had run it for fifteen years without congressional knowledge or approval.
        </P>
        <P>
          The program was officially discontinued in 1971. Scholars who have studied the FBI since
          have documented the continuation of similar tactics under different names.
        </P>
        <P>
          The point is not that COINTELPRO alone explains what happened to the left. It&apos;s
          that the left was facing: organized intellectual opposition (Mont Pelerin), organized
          institutional opposition (think tanks, business associations), political dismantling of
          its economic base (PATCO, miners), media opposition (
          <Link
            href="/posts/who-owns-the-media"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            Murdoch&apos;s outlets consistently attacked union power
          </Link>
          ), and active intelligence suppression of its most radical elements. All simultaneously.
          The surprise, from this perspective, is not that the left lost ground. The surprise is
          that it kept anything at all.
        </P>
      </ArticleSection>

      <ArticleSection>
        <H2 id="what-the-left-lost">What the Left Lost — and What It Didn&apos;t</H2>
        <P>
          Between 1979 and 2000, the gains of the postwar period were substantially eroded:
        </P>
        <P>
          Top marginal income tax rates in the US fell from 70% (1980) to 28% (1988) under Reagan.
          UK top rates fell from 83% (1979) to 40% (1988) under Thatcher. Capital gains tax rates
          were cut. Estate taxes were reduced. Union membership halved. Public utilities were
          privatized. Social housing was sold off (Right to Buy in the UK, and not replaced).
          Financial markets were deregulated — the{' '}
          <Link
            href="/posts/why-is-housing-so-expensive"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            1986 Big Bang in the UK
          </Link>{' '}
          was a direct product of Thatcher&apos;s deregulation agenda.
        </P>
        <P>
          What was not lost: the NHS, Social Security, Medicare and Medicaid, public schooling,
          and the basic infrastructure of the welfare state. These survived not because they were
          economically untouchable — the ruling class had ideological objections to all of them —
          but because they were politically untouchable. Too popular. Too embedded in how
          ordinary people lived. Thatcher tried to privatize the NHS and was stopped. Reagan tried
          to cut Social Security and was stopped.
        </P>
        <P>
          The political constraint is real: people protect what they have. The left&apos;s
          surviving institutional achievements are the most popular policies in most Western
          countries. The right has spent forty years trying to privatize or defund them and has
          only partially succeeded.
        </P>
        <P>
          What did survive: the NHS, Social Security, Medicare and Medicaid, public education.
          Not because they were economically untouchable — the ruling class had ideological
          objections to all of them — but because they were too politically embedded to remove.
          Thatcher tried to privatize the NHS and was stopped. Reagan tried to cut Social Security
          and was stopped. The left built those fortresses when it was strong. They survived
          because they were built to last.
        </P>
        <P>
          The conditions that generated the labor movement — inequality, poverty, precarity —
          have not been resolved. They have gotten worse since the 1980s. But the conditions that
          made the labor movement powerful have been systematically dismantled: 35% union density
          is now 10%, the industrial sectors that sustained organizing are gutted, the political
          parties that represented workers have largely stopped doing so. The Amazon union and the
          Starbucks baristas are real. They are also what starting over from 10% looks like.
          That is not the same thing as recovery. It is the beginning of a longer question.
        </P>

        <ArticleCallout variant="dark" title="What This Series Has Established">
          Over nine articles, we have traced a single argument: the economic world most people
          inhabit is not natural, not inevitable, and not the product of neutral market forces.
          It was built — through enclosure, through colonial taxation, through bank money directed
          upward, through debt, through media ownership, through the defeat of organized labor —
          by people who benefited from building it.
          <br />
          <br />
          And it has been contested, repeatedly, by people who recognized what was being done and
          organized to change it. They won things: the NHS, the 8-hour day, the weekend, social
          security. And then a counter-revolution dismantled much of what they had built.
          <br />
          <br />
          The most important question — the one this whole series has been approaching — is what
          comes next. Given what the record shows about how power actually works — who built it,
          how they defended it, what it took to challenge it and what happened when people did —
          what would it take to build something different? What has actually been tried? What
          worked, where, and why? That&apos;s where the next articles go.
        </ArticleCallout>
      </ArticleSection>

      <ArticleSection>
        <H2 id="faq">Common Questions</H2>
        <ArticleFAQ items={FAQ_ITEMS} />
      </ArticleSection>

      <ArticleFurtherReading items={FURTHER_READING} />

      <ArticleSources>
        <li>
          Lewis Powell,{' '}
          <a
            href="https://en.wikipedia.org/wiki/Powell_Memorandum"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            Confidential Memorandum: Attack on American Free Enterprise System
          </a>
          , August 23, 1971.
        </li>
        <li>
          Friedrich Hayek,{' '}
          <a
            href="https://en.wikipedia.org/wiki/The_Road_to_Serfdom"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            <em>The Road to Serfdom</em>
          </a>
          , University of Chicago Press, 1944 — the intellectual foundation Hayek brought to the
          1947 Mont Pelerin gathering.
        </li>
        <li>
          Thomas Piketty,{' '}
          <a
            href="https://en.wikipedia.org/wiki/Capital_in_the_Twenty-First_Century"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            <em>Capital in the Twenty-First Century</em>
          </a>
          , Harvard University Press, 2013 — on the postwar compression of inequality and its
          reversal.
        </li>
        <li>
          Jane Mayer,{' '}
          <a
            href="https://en.wikipedia.org/wiki/Dark_Money_(book)"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            <em>Dark Money: The Hidden History of the Billionaires Behind the Rise of the Radical
            Right</em>
          </a>
          , Doubleday, 2016.
        </li>
        <li>
          FBI,{' '}
          <a
            href="https://vault.fbi.gov/cointel-pro"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            COINTELPRO documents
          </a>{' '}
          (released under FOIA), available at the FBI&apos;s Freedom of Information reading room.
        </li>
        <li>
          Jeffrey Toobin, &ldquo;The PATCO Strike: Reagan&apos;s Opening Salvo in the War on
          Unions,&rdquo; and subsequent academic literature on the strike&apos;s impact on US
          labor organizing.
        </li>
        <li>
          Raphael Samuel, Barbara Bloomfield, and Guy Boanas (eds),{' '}
          <em>The Enemy Within: Pit Villages and the Miners&apos; Strike of 1984–5</em>,
          Routledge &amp; Kegan Paul, 1986.
        </li>
        <li>
          Quinn Slobodian,{' '}
          <a
            href="https://en.wikipedia.org/wiki/Globalists_(book)"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            <em>Globalists: The End of Empire and the Birth of Neoliberalism</em>
          </a>
          , Harvard University Press, 2018 — the most rigorous history of the Mont Pelerin
          network and its political implementation.
        </li>
      </ArticleSources>
    </ArticleLayout>
  );
}
