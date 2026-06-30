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
  title: 'Who Owns the Media?',
  description:
    "Six companies control roughly 90% of US media. In the UK, three men — Rupert Murdoch, the Barclay brothers' estate, and Viscount Rothermere — own most of the national press. Noam Chomsky called it Manufacturing Consent. Here's how media ownership shapes what you think is possible.",
  keywords: [
    'who owns the media',
    'media ownership concentration',
    'manufacturing consent explained',
    'who owns the news',
    'is the media biased',
    'Noam Chomsky manufacturing consent',
    'media bias explained',
    'who owns Fox News',
    'Rupert Murdoch media empire',
    'how media shapes public opinion',
  ],
  openGraph: {
    title: 'Who Owns the Media?',
    description:
      "Six companies control roughly 90% of US media. In the UK, three men own most of the national press. Chomsky called it Manufacturing Consent. Here's how it actually works — not through censorship, but through what never feels credible.",
    type: 'article',
    publishedTime: '2026-06-30T00:00:00Z',
    authors: ['Left Diary'],
    tags: ['Media', 'Politics', 'Power', 'Noam Chomsky', 'Propaganda'],
  },
  alternates: {
    canonical: 'https://leftdiary.com/posts/who-owns-the-media',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://leftdiary.com/posts/who-owns-the-media#article',
      headline: 'Who Owns the Media?',
      description:
        "Six companies control roughly 90% of US media. In the UK, three men own most of the national press. Chomsky called it Manufacturing Consent. Here's how media ownership shapes what you're allowed to think is possible.",
      image: 'https://leftdiary.com/images/media-ownership-cover.jpg',
      datePublished: '2026-06-30T00:00:00Z',
      dateModified: '2026-06-30T00:00:00Z',
      author: { '@type': 'Organization', name: 'Left Diary', url: 'https://leftdiary.com' },
      publisher: { '@type': 'Organization', name: 'Left Diary', url: 'https://leftdiary.com' },
      mainEntityOfPage: 'https://leftdiary.com/posts/who-owns-the-media',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://leftdiary.com/posts/who-owns-the-media#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Who owns the media in the US?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "As of the mid-2020s, six major corporations control the vast majority of US media: Comcast (NBC, Universal, MSNBC), Disney (ABC, ESPN, FX), Warner Bros. Discovery (CNN, HBO, TNT), News Corp/Fox (Fox News, Wall Street Journal, New York Post), Paramount (CBS, MTV, BET), and Sony (primarily film and music). These six companies — through their subsidiaries — own most major TV channels, film studios, and news networks. In 1983, 90% of US media was owned by 50 companies. Now it's roughly six.",
          },
        },
        {
          '@type': 'Question',
          name: "What is Chomsky's Manufacturing Consent?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "In 'Manufacturing Consent: The Political Economy of the Mass Media' (1988), Edward Herman and Noam Chomsky proposed a 'propaganda model' — five structural filters that shape media content without requiring direct censorship. The filters: (1) ownership by large profit-maximizing corporations, (2) dependence on advertising revenue from other large corporations, (3) sourcing from government and corporate PR (official sources), (4) flak — organized pressure campaigns from powerful interests, (5) a common ideological framework (anti-communism in their original edition, broadly pro-market since). The model predicts which stories get covered and how, based on structure rather than individual editorial decisions.",
          },
        },
        {
          '@type': 'Question',
          name: 'How does media ownership affect news coverage?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Media ownership shapes coverage without requiring direct instruction. The editor spikes the story that embarrasses the advertiser because revenue depends on that advertiser. The journalist learns which stories get promoted and which get buried. The people who rise are the ones who understood the culture. Studies show systematic differences based on ownership: Murdoch-owned outlets consistently supported his favored political positions across Australia, the UK, and the US. The effect isn't primarily about what's said — it's about what's considered newsworthy, and what framing is applied.",
          },
        },
        {
          '@type': 'Question',
          name: "What is Gramsci's hegemony?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Antonio Gramsci, writing from a Fascist prison in the 1930s, developed the concept of cultural hegemony — the process by which a ruling class maintains power not just through force and law but through establishing its worldview as 'common sense.' When people accept the current social order as natural and inevitable, the ruling class doesn't need to coerce — people coerce themselves. Hegemony is maintained through cultural institutions: schools, churches, media, professional organizations. It's why 'there is no alternative' feels like a fact rather than an argument.",
          },
        },
        {
          '@type': 'Question',
          name: 'Does social media change media power?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Social media has disrupted the old media gatekeepers but created new ones. Facebook, YouTube, and Twitter/X are now among the most influential news distributors in the world — and they are also owned by a tiny number of people (Mark Zuckerberg controls Meta with a class of shares that gives him majority voting power regardless of how many shares he owns; Elon Musk bought Twitter and immediately changed its moderation policies in visible ways). Their algorithms don't optimize for truth; they optimize for engagement, which means emotionally charged and outrage-generating content is systematically amplified. The media landscape shifted from six gatekeepers to a few hundred thousand creators amplified by three or four algorithm-controlling platforms — also owned by the very wealthy.",
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://leftdiary.com/posts/who-owns-the-media#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://leftdiary.com' },
        { '@type': 'ListItem', position: 2, name: 'Posts', item: 'https://leftdiary.com/posts' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Who Owns the Media?',
          item: 'https://leftdiary.com/posts/who-owns-the-media',
        },
      ],
    },
  ],
};

const TOC_ITEMS: TOCItem[] = [
  { id: 'the-obvious-question', text: 'The Obvious Question Nobody Asks', level: 2 },
  { id: 'who-owns-us-media', text: 'Who Actually Owns US Media', level: 2 },
  { id: 'uk-three-men', text: 'The UK: Three Men and the National Press', level: 2 },
  { id: 'murdoch-as-case-study', text: 'Murdoch as Case Study', level: 3 },
  { id: 'how-it-works-without-censorship', text: 'How It Works Without Censorship', level: 2 },
  { id: 'five-filters', text: 'The Five Filters: Manufacturing Consent', level: 3 },
  { id: 'gramsci-hegemony', text: 'When One Class Owns the Room', level: 2 },
  { id: 'what-gets-left-out', text: 'What Gets Left Out', level: 2 },
  { id: 'social-media-new-gatekeepers', text: 'Social Media: New Gatekeepers, Same Class', level: 2 },
  { id: 'faq', text: 'Common Questions', level: 2 },
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Who owns the media in the US?',
    answer: (
      <>
        Six major corporations control the vast majority of US media: Comcast (NBC, MSNBC,
        Universal), Disney (ABC, ESPN, FX), Warner Bros. Discovery (CNN, HBO), News Corp/Fox (Fox
        News, Wall Street Journal, New York Post), Paramount (CBS, MTV), and Sony. In 1983, 90%
        of US media was owned by{' '}
        <a
          href="https://en.wikipedia.org/wiki/Concentration_of_media_ownership"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-gray-400 hover:decoration-gray-700"
        >
          50 companies
        </a>
        . The consolidation happened through mergers driven by deregulation — specifically the{' '}
        <a
          href="https://en.wikipedia.org/wiki/Telecommunications_Act_of_1996"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-gray-400 hover:decoration-gray-700"
        >
          1996 Telecommunications Act
        </a>
        .
      </>
    ),
  },
  {
    question: "What is Chomsky's Manufacturing Consent?",
    answer: (
      <>
        In{' '}
        <a
          href="https://en.wikipedia.org/wiki/Manufacturing_Consent"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-gray-400 hover:decoration-gray-700"
        >
          <em>Manufacturing Consent</em>
        </a>{' '}
        (1988), Edward Herman and Noam Chomsky proposed a propaganda model with five structural
        filters: ownership by large profit-maximizing corporations, dependence on advertising
        revenue, sourcing from government and corporate PR, organized pressure (flak) from powerful
        interests, and a common ideological framework. The model predicts which stories get covered
        and how, based on structure rather than individual editorial decisions.
      </>
    ),
  },
  {
    question: 'How does media ownership affect news coverage?',
    answer: (
      <>
        Media ownership shapes coverage without requiring direct instruction. Owners rarely need
        to call editors. Instead: the editor spikes the story that embarrasses the advertiser
        because revenue depends on that advertiser; the journalist learns which stories get
        promoted and which get buried; the people who rise are the ones who understood the
        culture. Studies show systematic differences based on ownership: Murdoch-owned outlets
        consistently supported his favored political positions across Australia, the UK, and the
        US. The effect is primarily about what&apos;s considered newsworthy and what framing is
        applied — not what is censored.
      </>
    ),
  },
  {
    question: "What is Gramsci's hegemony?",
    answer: (
      <>
        Writing from a Fascist prison in the 1930s,{' '}
        <a
          href="https://en.wikipedia.org/wiki/Antonio_Gramsci"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-gray-400 hover:decoration-gray-700"
        >
          Antonio Gramsci
        </a>{' '}
        developed{' '}
        <a
          href="https://en.wikipedia.org/wiki/Cultural_hegemony"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-gray-400 hover:decoration-gray-700"
        >
          cultural hegemony
        </a>{' '}
        — the process by which a ruling class maintains power by establishing its worldview as
        &ldquo;common sense.&rdquo; When the current social order feels natural and inevitable,
        the ruling class doesn&apos;t need to coerce — people coerce themselves. Hegemony is
        maintained through cultural institutions: schools, media, professional organizations.
        It&apos;s why &ldquo;there is no alternative&rdquo; feels like a fact rather than an
        argument.
      </>
    ),
  },
  {
    question: 'Does social media change media power?',
    answer: (
      <>
        Social media disrupted old gatekeepers but created new ones. Facebook, YouTube, and
        Twitter/X are now among the most influential news distributors in the world — owned by a
        tiny number of people. Their algorithms don&apos;t optimize for truth; they optimize for
        engagement, meaning outrage-generating content is systematically amplified. The landscape
        shifted from six gatekeepers to a few hundred thousand creators, amplified by three or
        four algorithm-controlling platforms — also owned by the very wealthy. Elon Musk bought
        Twitter and immediately changed its moderation policies. Mark Zuckerberg controls Meta
        with super-voting shares regardless of his ownership stake.
      </>
    ),
  },
];

const FURTHER_READING: FurtherReadingItem[] = [
  {
    href: '/posts/what-is-the-ruling-class',
    title: 'Is There a Ruling Class?',
    description: 'The interlocking elite network that the media is part of — schools, revolving door, forums, and now broadcast infrastructure.',
  },
  {
    href: '/posts/why-do-the-rich-keep-getting-richer',
    title: 'Why Do the Rich Keep Getting Richer?',
    description: 'The same regulatory capture that shapes tax law also shaped the Telecommunications Act that allowed media consolidation.',
  },
  {
    href: 'https://en.wikipedia.org/wiki/Manufacturing_Consent',
    title: 'Manufacturing Consent — Wikipedia',
    description: "Herman and Chomsky's five-filter propaganda model and how it applies to contemporary media.",
    external: true,
  },
  {
    href: 'https://en.wikipedia.org/wiki/Cultural_hegemony',
    title: 'Cultural Hegemony — Wikipedia',
    description: "Gramsci's concept of how ruling class worldviews become 'common sense' through cultural institutions.",
    external: true,
  },
  {
    href: 'https://en.wikipedia.org/wiki/Concentration_of_media_ownership',
    title: 'Concentration of Media Ownership — Wikipedia',
    description: 'The documented history of media consolidation across countries.',
    external: true,
  },
];

export default function WhoOwnsTheMedia() {
  return (
    <ArticleLayout jsonLd={jsonLd}>
      <ArticleHeader
        categories={['Media', 'Politics', 'Power']}
        title="Who Owns the Media?"
        lead={
          <>
            Every night, you watch the news. The news is owned by someone. The newspaper you read
            online — owned by someone. The social media algorithm that decides which posts you see
            — controlled by someone. The ownership is documented. The question is what it does —
            not through dramatic censorship, but through the quieter process of shaping what counts
            as normal, serious, and possible.
          </>
        }
        date="June 30, 2026"
        dateTime="2026-06-30"
        readingTime="13 min read"
      />

      <ArticleTOC items={TOC_ITEMS} />

      <ArticleSection>
        <H2 id="the-obvious-question">The Obvious Question Nobody Asks</H2>
        <P>
          Here is a strange fact. When you read about media bias — whether from the right (&ldquo;the
          mainstream media is liberal&rdquo;) or from the left (&ldquo;the media serves corporate
          interests&rdquo;) — the argument is almost always about the journalists. Their education,
          their class background, their politics, their groupthink.
        </P>
        <P>
          But journalists don&apos;t own news organizations. They work for them.
        </P>
        <P>
          The more obvious question — who owns the organizations? — is asked much less often. And
          when it is asked, the answer is quite boring, in the sense that it&apos;s not surprising
          at all once you look at it. The media is owned by the same class of people who own
          everything else. Large corporations, controlled by wealthy shareholders, governed by
          boards drawn from the interlocking network we described{' '}
          <Link
            href="/posts/what-is-the-ruling-class"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            in the previous article
          </Link>
          .
        </P>
        <P>
          Which means the institutions that tell most people what is happening in the world, what
          is serious, what is extreme, and what is possible — are owned by people with very specific
          class interests.
        </P>
        <P>
          That&apos;s who owns the institutions that tell you what is happening in the world. And
          the question is what it produces.
        </P>
      </ArticleSection>

      <ArticleSection>
        <H2 id="who-owns-us-media">Who Actually Owns US Media</H2>
        <P>
          In 1983, approximately 90% of American media was owned by{' '}
          <a
            href="https://en.wikipedia.org/wiki/Concentration_of_media_ownership"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            50 companies
          </a>
          . That was already a significant concentration. Today, the same proportion of US media is
          owned by roughly six:
        </P>
        <P>
          <strong>Comcast</strong> — owns NBC, MSNBC, Universal Pictures, Universal Theme Parks,
          DreamWorks Animation, E!, Bravo, USA Network, Sky (in Europe), and dozens of regional
          news channels. Annual revenue: approximately $120 billion.
        </P>
        <P>
          <strong>Walt Disney Company</strong> — owns ABC, ESPN, FX, Hulu, National Geographic,
          Pixar, Marvel, Lucasfilm, and dozens of TV channels. Annual revenue: approximately $88
          billion.
        </P>
        <P>
          <strong>Warner Bros. Discovery</strong> — owns CNN, HBO, Max, TNT, TBS, Turner Classic
          Movies, the DC Comics IP, and the Warner Bros. film studio. Annual revenue: approximately
          $41 billion.
        </P>
        <P>
          <strong>News Corp / Fox Corporation</strong> (controlled by the Murdoch family) — owns
          Fox News, Fox Business, the Wall Street Journal, the New York Post, the Times and Sunday
          Times (UK), and news outlets across Australia. Rupert Murdoch and his family hold
          controlling voting rights despite not owning the majority of shares.
        </P>
        <P>
          <strong>Paramount Global</strong> — owns CBS, MTV, BET, Nickelodeon, Comedy Central,
          and Paramount Pictures.
        </P>
        <P>
          <strong>Sony</strong> — primarily entertainment (Columbia Pictures, music) rather than
          news.
        </P>
        <P>
          The consolidation didn&apos;t happen through natural market competition. It happened
          through mergers enabled by deregulation — specifically the{' '}
          <a
            href="https://en.wikipedia.org/wiki/Telecommunications_Act_of_1996"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            Telecommunications Act of 1996
          </a>
          , which loosened restrictions on how many outlets a single company could own in a single
          market. The act was lobbied for heavily by the companies that benefited from it. It was
          written in close collaboration with industry. It passed.
        </P>
        <P>
          The 1996 Telecommunications Act was written in close collaboration with the industry it
          was supposed to regulate. The same companies that lobbied for it benefited from it.{' '}
          <Link
            href="/posts/why-do-the-rich-keep-getting-richer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            The same pattern played out with financial deregulation.
          </Link>{' '}
          The outcome: an industry that has fewer owners, more concentrated power, and more capacity
          to influence what 330 million Americans consider the natural state of the world.
        </P>
      </ArticleSection>

      <ArticleSection>
        <H2 id="uk-three-men">The UK: Three Men and the National Press</H2>
        <P>
          The United Kingdom has a press landscape that is, if anything, more concentrated than the
          US and more politically visible in its ownership effects.
        </P>
        <P>
          As of the mid-2020s, the UK national newspaper market is controlled substantially by
          three groups:
        </P>
        <P>
          <strong>News UK</strong> (owned by Rupert Murdoch&apos;s News Corp): the Times, the
          Sunday Times, and the Sun. The Sun is the UK&apos;s best-selling tabloid. The Times is
          the newspaper of the establishment.
        </P>
        <P>
          <strong>Daily Mail Group</strong> (controlled by Viscount Rothermere, the fourth
          Viscount, who is a non-domiciled UK tax resident): the Daily Mail, the Mail on Sunday,
          the Metro, and MailOnline — one of the most visited English-language news websites in the
          world.
        </P>
        <P>
          <strong>Telegraph Media Group</strong> (owned at various points by private equity and
          currently subject to political controversy regarding its ownership): the Daily Telegraph,
          the Sunday Telegraph, and the Spectator magazine.
        </P>
        <P>
          The Guardian is separately owned by the Scott Trust, a nonprofit structure explicitly
          designed to prevent private ownership. The Financial Times is owned by Nikkei, a Japanese
          media company. The Independent is owned by INDY100 (a conglomerate with Gulf investment).
        </P>
        <P>
          So: for most UK readers, the information they receive about politics, economics, and
          society comes from outlets controlled by a hereditary media baron who is a foreign
          national, or by a hereditary aristocrat who pays no UK tax, or by foreign capital.
          The outlets funded by public money (the BBC) are, as we&apos;ll see, not straightforwardly
          independent either.
        </P>

        <H3 id="murdoch-as-case-study">Murdoch as Case Study</H3>
        <P>
          Rupert Murdoch is the most documented case in the world of a media owner using his
          properties to pursue specific political outcomes. Not alleged — documented, in parliamentary
          inquiries, in leaked messages, in the testimony of editors and politicians who have
          worked with and for him.
        </P>
        <P>
          In Australia, every major election since 1975 has been contested on a media landscape
          where Murdoch&apos;s News Corp controls approximately 70% of newspaper circulation. In
          that time, News Corp outlets have supported the winning side in every federal election
          with one exception.
        </P>
        <P>
          In the UK, the Sun endorsed every winning prime minister from Margaret Thatcher onward
          until Jeremy Corbyn&apos;s Labour in 2017 (which it opposed) and Keir Starmer in 2024
          (which it endorsed only in the final week, after it was clear Labour would win). Tony
          Blair, in his memoir, describes flying to Australia to attend a Murdoch conference before
          the 1997 election. He needed to secure the Sun&apos;s support. He did. He won.
        </P>
        <P>
          In the US, Fox News was co-created by{' '}
          <a
            href="https://en.wikipedia.org/wiki/Roger_Ailes"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            Roger Ailes
          </a>
          , a Republican political consultant who had worked for Nixon, Reagan, and George H.W.
          Bush before joining News Corp. The channel&apos;s original slogan (&ldquo;Fair and
          Balanced&rdquo;) was a conscious rebrand — its actual function, documented in internal
          memos and confirmed in the{' '}
          <a
            href="https://en.wikipedia.org/wiki/Dominion_Voting_Systems_v._Fox_News_Network"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            Dominion Voting Systems lawsuit
          </a>
          , was to serve as an advocacy operation for conservative politics.
        </P>
        <P>
          In the Dominion lawsuit, internal Fox texts and emails were made public. Tucker Carlson,
          one of the most watched hosts on American television, wrote that he privately believed the
          claims he was broadcasting about election fraud were &ldquo;insane&rdquo; and &ldquo;not
          true.&rdquo; He broadcast them anyway because the audience response to not broadcasting
          them was hurting ratings. In the lawsuit&apos;s terminology: Fox hosts had deceived their
          viewers to protect the network&apos;s commercial interests. Fox settled for $787 million.
        </P>
        <P>
          This is the market in media. The viewers weren&apos;t deceived to serve a political
          agenda. They were deceived to retain an audience. The political and the commercial
          merged into the same incentive.
        </P>
      </ArticleSection>

      <ArticleSection>
        <H2 id="how-it-works-without-censorship">How It Works Without Censorship</H2>
        <P>
          The naive version of media power is censorship: the owner calls the editor and says
          &ldquo;don&apos;t run that story.&rdquo; This happens, but it&apos;s not the primary
          mechanism. Direct censorship is rare, detectable, and occasionally gets reported.
        </P>
        <P>
          The actual mechanism is subtler and more durable. It operates through the structure of
          the institution rather than the instruction of any individual.
        </P>
        <P>
          A journalist who files a story that embarrasses a major advertiser — the editor spikes
          it. Not because the owner called. Because the editor knows from experience what happens
          to advertising revenue when you run that story. The journalist learns. They file fewer
          stories like that.
        </P>
        <P>
          A journalist who files stories that consistently criticize the owner&apos;s favored
          political positions — they are not promoted. They don&apos;t get the prime slots. They
          move to smaller outlets. The people who understand the editorial culture and work within
          it advance. Not because of explicit instruction. Because organizations promote the people
          who fit the culture.
        </P>
        <P>
          A journalist who files stories from sources outside the official establishment — their
          stories require more editing, more legal scrutiny, more corroboration, and are published
          less prominently than stories sourced from press releases from the government or from
          major corporations. The structural incentives favor official sources.
        </P>
        <P>
          None of this requires conspiracy. It requires only that the people who rise in any
          institution are the ones who understood what that institution selects for.
        </P>

        <H3 id="five-filters">The Five Filters: Manufacturing Consent</H3>
        <P>
          In 1988,{' '}
          <a
            href="https://en.wikipedia.org/wiki/Edward_S._Herman"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            Edward Herman
          </a>{' '}
          and{' '}
          <a
            href="https://en.wikipedia.org/wiki/Noam_Chomsky"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            Noam Chomsky
          </a>{' '}
          published{' '}
          <a
            href="https://en.wikipedia.org/wiki/Manufacturing_Consent"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            <em>Manufacturing Consent: The Political Economy of the Mass Media</em>
          </a>
          . They proposed a &ldquo;propaganda model&rdquo; — not propaganda in the sense of an
          active state program, but structural propaganda: the filters that any story must pass
          through to become news.
        </P>
        <P>
          <strong>Filter 1: Ownership.</strong> Media outlets owned by large profit-seeking
          corporations will not systematically undermine profit-seeking corporations. This
          isn&apos;t because owners give orders — it&apos;s because the culture, the hiring, the
          promotion all reflect the owner&apos;s interests over time. A fish tank maintains the
          temperature its owner sets, not through individual instruction to each fish.
        </P>
        <P>
          <strong>Filter 2: Advertising.</strong> Commercial media is funded primarily by
          advertising from other large corporations. Stories that threaten advertisers threaten
          revenue. The structural incentive to please advertisers shapes editorial choices without
          a single phone call being made.
        </P>
        <P>
          <strong>Filter 3: Sourcing.</strong> Journalists need sources they can quote and who will
          speak on the record. The most reliable sources — government press offices, corporate PR
          departments, official think tanks — are the same sources who have interests in the
          stories being told a certain way. Independent or critical voices are harder to source,
          require more corroboration, and are used less. The news systematically overrepresents
          official perspectives.
        </P>
        <P>
          <strong>Filter 4: Flak.</strong> Organized campaigns of criticism targeting journalists
          or outlets for stories that challenge powerful interests. These can come from PR firms,
          from political operations, from organized letter-writing campaigns. Flak is expensive
          to absorb. It shapes what editors are willing to defend.
        </P>
        <P>
          <strong>Filter 5: The shared framework.</strong> Herman and Chomsky originally
          identified this as anti-communism — the assumption that markets are natural and
          collective alternatives are dangerous. Since the Cold War, this has settled into
          something so pervasive it reads as common sense: growth is always the goal, markets
          always outperform governments, property rights are the foundation of freedom. Ideas that
          challenge this don&apos;t get censored — they get labeled &ldquo;extreme&rdquo; or
          &ldquo;outside the mainstream.&rdquo;
        </P>
        <P>
          The model doesn&apos;t require every journalist to be corrupt or every editor to take
          orders. It just requires that the people who rise within these institutions are the ones
          who worked naturally within these filters. Most journalists sincerely believe they&apos;re
          covering the truth. The model says they&apos;re covering the truth as it appears through
          five filters that consistently favour certain kinds of stories over others.
        </P>
      </ArticleSection>

      <ArticleSection>
        <H2 id="gramsci-hegemony">When One Class Owns the Room</H2>
        <P>
          The five filters explain how the mechanism works. There&apos;s a prior question: why
          doesn&apos;t it look like bias? Why does the media&apos;s consistent tilt toward certain
          interests read as &ldquo;the news&rdquo; rather than as propaganda?
        </P>
        <P>
          Because when one class owns the newspapers, funds the universities, and staffs the
          government — their assumptions about what&apos;s normal, serious, and possible become
          everyone&apos;s assumptions. Not by argument. Not by instruction. By saturation.
        </P>
        <P>
          Margaret Thatcher&apos;s phrase was &ldquo;There Is No Alternative.&rdquo; TINA. It
          worked not because she was a compelling debater but because the conditions for it feeling
          true had already been built. The economists who appeared on the BBC came from departments
          funded by the same financial interests her government served. The journalists who rose
          to prominence understood the editorial culture. The newspapers were owned by people in
          her class. She didn&apos;t need to control the message — the message was already in the
          room.
        </P>

        <Blockquote cite="Antonio Gramsci, Prison Notebooks (written 1929–1935)">
          &ldquo;The intellectuals are the dominant group&apos;s deputies exercising the
          subaltern functions of social hegemony and political government. These comprise: the
          spontaneous consent given by the great masses of the population to the general direction
          imposed on social life by the dominant fundamental group.&rdquo;
        </Blockquote>

        <P>
          Gramsci, writing from a Fascist prison in 1929, named the same pattern.
          &ldquo;Spontaneous consent&rdquo; — not coerced, not deceived in any single act. Just:
          the ruling class&apos;s way of seeing things slowly becomes common sense, through
          saturation of the cultural institutions they control. You don&apos;t need a censor when
          the alternative ideas never feel credible enough to publish, never get the front page,
          never get called serious.
        </P>
        <P>
          The circle: the media that defines what&apos;s serious is owned by the same class of
          people whose interests are served by the current definition of seriousness.
        </P>
      </ArticleSection>

      <ArticleSection>
        <H2 id="what-gets-left-out">What Gets Left Out</H2>
        <P>
          The effect of this structure isn&apos;t primarily visible in what media gets wrong.
          It&apos;s visible in what media systematically never covers, never frames as a legitimate
          question, or covers only in a way that makes the answer seem obvious.
        </P>
        <P>
          Consider{' '}
          <Link
            href="/posts/how-do-banks-create-money-out-of-nothing"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            the fact that banks create money when they make loans
          </Link>
          . The Bank of England confirmed this in 2014. It contradicts the standard textbook
          account of banking. It has significant implications for how we understand government
          spending, deficits, and the &ldquo;we can&apos;t afford it&rdquo; argument.{' '}
          <Link
            href="/posts/why-did-colonizers-tax-africans"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            If governments can create money
          </Link>
          , the constraint on public spending is not &ldquo;can we afford it&rdquo; but
          &ldquo;will this cause inflation.&rdquo; These are very different questions with very
          different political implications.
        </P>
        <P>
          How often is this discussed in mainstream coverage of government budgets? Almost never.
          The framing is always about &ldquo;fiscal responsibility,&rdquo; &ldquo;balancing the
          books,&rdquo; and &ldquo;where will the money come from.&rdquo; Questions that assume
          governments operate like households running low on cash.
        </P>
        <P>
          Consider housing. The standard media frame: supply and demand. Build more houses. That&apos;s
          the answer. Rarely discussed: who owns existing housing stock, the role of buy-to-let
          investors, the mortgage interest deduction, the financialization of property, the role
          of central bank policy in inflating asset prices. These are discussions that might imply
          the people who currently own property — a group that heavily overlaps with media owners
          and their advertisers — are part of the problem.
        </P>
        <P>
          Consider strikes. In UK and US media, strike coverage systematically focuses on the
          disruption to the public (commuters inconvenienced, schools closed) rather than the
          conditions that led to the strike (real wage cuts, unsafe conditions, employer bad faith
          in negotiations). Studies of BBC coverage have documented this asymmetry. The effect:
          strikes feel like an attack on the public rather than a negotiation between workers and
          employers.
        </P>
        <P>
          None of these require a single phone call from a media baron to an editor. They emerge
          from the structure: who do journalists source from (government and corporate
          spokespersons), what assumptions do they bring (markets work, property rights are
          natural, debt must be repaid), who do they worry about alienating (advertisers,
          official sources, the owner who could fire the editor).
        </P>
      </ArticleSection>

      <ArticleSection>
        <H2 id="social-media-new-gatekeepers">Social Media: New Gatekeepers, Same Class</H2>
        <P>
          The internet and social media disrupted the old media gatekeepers. This is real.
          Something profound happened when anyone with a phone could publish to a global audience
          and bypass the institutional filters of traditional media.
        </P>
        <P>
          What emerged, though, was not a level playing field. It was a new set of gatekeepers.
        </P>
        <P>
          The platforms that distribute most of the world&apos;s online content — Facebook (now
          Meta), YouTube (owned by Alphabet/Google), Twitter/X, TikTok — are controlled by a
          very small number of people:
        </P>
        <P>
          <strong>Mark Zuckerberg</strong> holds a special class of shares in Meta (Facebook,
          Instagram, WhatsApp) that give him 57% of shareholder voting rights while owning a much
          smaller economic stake. This structure was deliberate: it means Zuckerberg controls Meta
          regardless of what institutional investors or public shareholders want. He has explicitly
          said he will not allow Meta to be taken over by outsiders. The platform that reaches 3
          billion people is a personal fiefdom.
        </P>
        <P>
          <strong>Elon Musk</strong> bought Twitter in 2022 for $44 billion. Immediately after
          acquisition, he reinstated accounts that had been banned for policy violations, fired
          most of the content moderation team, changed the verification system, and made platform
          decisions that visibly tracked his political preferences. Twitter/X is the primary
          platform for political journalism, real-time news, and political discourse in the
          English-speaking world. It is now owned and operated as an extension of one man&apos;s
          political project.
        </P>
        <P>
          Beyond ownership: the algorithms of these platforms don&apos;t optimize for truth,
          accuracy, or public benefit. They optimize for engagement — time spent on the platform,
          clicks, shares, reactions. And what drives engagement? Emotional response. Outrage,
          fear, indignation, tribal confirmation.
        </P>
        <P>
          The result: the most inflammatory content travels fastest. The most nuanced,
          complicated, factually accurate content travels slowest. On a platform optimizing for
          engagement, the viral unit of political communication is not the well-sourced analysis.
          It&apos;s the outrage meme.
        </P>
        <P>
          This doesn&apos;t only serve the right. It affects political communication across the
          spectrum. But it systematically disadvantages anyone whose ideas require explanation,
          qualification, or historical context — and advantages anyone whose message fits on a
          card and produces an immediate emotional response.
        </P>
        <P>
          The new media landscape replaced six old gatekeepers with a few new ones. The new ones
          are richer. They are less accountable. And their algorithmic systems may be more
          systematically distorting than any individual editorial decision.
        </P>

        <ArticleCallout variant="dark" title="What This Means Altogether">
          We have now traced eight interlocking mechanisms. The foundational myths of economics
          (barter, neutral money, banks-as-intermediaries, taxes-as-revenue). The enclosure of
          land and commons. The manufacture of wage dependency. The channeling of new money
          upward through bank credit. The mathematical concentration of wealth through r &gt; g.
          The disciplinary function of debt at both personal and national scale. The interlocking
          network of people who share schools, boards, and revolving-door careers. And the media
          infrastructure that makes all of this feel normal, natural, and inevitable.
          <br />
          <br />
          These are not eight separate problems. They are eight connected mechanisms, built,
          maintained, and defended by a specific class of people in their specific interests.
          None of this was inevitable. All of it was built.
          <br />
          <br />
          The media piece has not reversed. It has accelerated. From 50 companies to 6. Then
          social media — even more concentrated, less accountable, algorithmically optimized to
          prevent the sustained attention that serious critique requires. The tools for
          determining what counts as serious, normal, and possible are, if anything, more
          concentrated now than in 1988 when Herman and Chomsky described them.
          <br />
          <br />
          The next article takes up the question of what has actually been tried:{' '}
          <Link
            href="/posts/what-happened-to-the-left"
            className="underline decoration-gray-200 hover:decoration-white"
          >
            what happened to the left?
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
          Edward Herman and Noam Chomsky,{' '}
          <a
            href="https://en.wikipedia.org/wiki/Manufacturing_Consent"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            <em>Manufacturing Consent: The Political Economy of the Mass Media</em>
          </a>
          , Pantheon Books, 1988.
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
          , written 1929–1935 (English translation: Lawrence &amp; Wishart, 1971).
        </li>
        <li>
          Ben Bagdikian,{' '}
          <a
            href="https://en.wikipedia.org/wiki/The_Media_Monopoly"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            <em>The Media Monopoly</em>
          </a>
          , Beacon Press, 1983 (updated through 2004 as <em>The New Media Monopoly</em>). Bagdikian
          documented the consolidation from 50 companies in 1983 through successive editions.
        </li>
        <li>
          Media Reform Coalition / Ofcom, annual{' '}
          <a
            href="https://www.ofcom.org.uk/research-and-data/telecoms-research/connected-nations"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            UK Media Nations reports
          </a>
          , documenting concentration in the UK media market.
        </li>
        <li>
          Dominion Voting Systems v. Fox News Network, No. 1:21-cv-01068-LPS (D. Del. 2023).
          Settled for $787.5 million; the disclosed internal communications documented Fox
          hosts&apos; private views versus on-air statements.
        </li>
        <li>
          Frances Haugen,{' '}
          <a
            href="https://en.wikipedia.org/wiki/Facebook%E2%80%93Cambridge_Analytica_data_scandal"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            Facebook whistleblower testimony
          </a>
          , US Senate, October 2021 — on algorithmic amplification of divisive content.
        </li>
        <li>
          Justin Lewis,{' '}
          <em>The Rise of Neoliberalism and the Decline of the BBC</em> — academic study of
          Sutton Trust data on private school backgrounds in UK journalism and broadcasting.
        </li>
      </ArticleSources>
    </ArticleLayout>
  );
}
