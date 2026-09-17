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
  title: 'What Is Money: Part 6 | Left Diary',
  description: "A tax on your own house, small enough to sound reasonable, provoked a war large enough to need an army to put down. Two thousand kilometers away, a king who didn't bother with a tax at all built a machine that paid its soldiers in severed hands. A third empire wrote a body of law that needed neither. Three empires, working independently, kept arriving at the same answer.",
  keywords: [
    'hut tax explained',
    'Bai Bureh Hut Tax War 1898',
    'Congo Free State Leopold II explained',
    'Casement Report Congo',
    'indigenat code French colonies',
    'colonial taxation Africa history',
    'hut tax Nyasaland Rhodesia',
    'history of colonialism and money',
    'history of money part 6'
  ],
  openGraph: {
    title: 'What Is Money: Part 6',
    description: "A small tax on your own house provoked a war. A king who skipped the tax entirely paid his soldiers in severed hands. A third empire wrote a law that needed neither. Three empires, the same answer, independently.",
    type: 'article',
    publishedTime: '2026-09-17',
    modifiedTime: '2026-09-17',
    authors: ['https://leftdiary.com/about'],
    section: 'Economics',
    tags: ['money', 'colonialism', 'hut tax', 'Congo Free State', 'history'],
    siteName: 'Left Diary',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Is Money: Part 6',
    description: "A small tax on your own house provoked a war. A king who skipped the tax entirely paid his soldiers in severed hands. Three empires, the same answer, independently.",
    site: '@leftdiary',
    creator: '@leftdiary',
  },
  alternates: {
    canonical: 'https://leftdiary.com/posts/how-did-three-empires-fence-a-continent'
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
      '@id': 'https://leftdiary.com/posts/how-did-three-empires-fence-a-continent#article',
      'headline': 'What Is Money: Part 6',
      'description': "A tax on your own house, small enough to sound reasonable, provoked a war large enough to need an army to put down. Two thousand kilometers away, a king who didn't bother with a tax at all built a machine that paid its soldiers in severed hands. A third empire wrote a body of law that needed neither. Three empires, working independently, kept arriving at the same answer.",
      'image': [
        {
          '@type': 'ImageObject',
          'url': 'https://leftdiary.com/posts/how-did-three-empires-fence-a-continent/opengraph-image',
          'width': 1200,
          'height': 630
        }
      ],
      'datePublished': '2026-09-17T00:00:00+00:00',
      'dateModified': '2026-09-17T00:00:00+00:00',
      'author': { '@type': 'Organization', 'name': 'Left Diary', 'url': 'https://leftdiary.com' },
      'publisher': {
        '@type': 'Organization',
        'name': 'Left Diary',
        'url': 'https://leftdiary.com',
        'logo': { '@type': 'ImageObject', 'url': 'https://leftdiary.com/logo.png', 'width': 600, 'height': 60 }
      },
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': 'https://leftdiary.com/posts/how-did-three-empires-fence-a-continent'
      },
      'keywords': 'hut tax, Bai Bureh, Hut Tax War 1898, Congo Free State, Casement Report, indigenat, colonial taxation Africa',
      'articleSection': 'Economics',
      'wordCount': 5600,
      'inLanguage': 'en-US',
      'isAccessibleForFree': true,
      'about': [
        { '@type': 'Thing', 'name': 'Hut Tax War of 1898' },
        { '@type': 'Thing', 'name': 'Congo Free State' },
        { '@type': 'Thing', 'name': 'Indigénat' },
        { '@type': 'Thing', 'name': 'Colonialism in Africa' }
      ]
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://leftdiary.com/posts/how-did-three-empires-fence-a-continent#breadcrumb',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://leftdiary.com' },
        { '@type': 'ListItem', 'position': 2, 'name': 'Posts', 'item': 'https://leftdiary.com/posts' },
        { '@type': 'ListItem', 'position': 3, 'name': 'What Is Money: Part 6', 'item': 'https://leftdiary.com/posts/how-did-three-empires-fence-a-continent' }
      ]
    }
  ]
};

const TOC_ITEMS: TOCItem[] = [
  { id: 'the-question-part-five-left-open', text: 'The Question Part Five Left Open', level: 2 },
  { id: 'a-tax-with-no-explanation', text: 'A Tax With No Explanation', level: 2 },
  { id: 'the-same-ordinance-six-times-over', text: 'The Same Ordinance, Six Times Over', level: 2 },
  { id: 'the-free-state-that-wasnt-free', text: "The Free State That Wasn't Free", level: 2 },
  { id: 'a-hand-for-every-bullet', text: 'A Hand for Every Bullet', level: 2 },
  { id: 'a-law-that-needed-neither', text: 'A Law That Needed Neither', level: 2 },
  { id: 'the-same-fence-three-times', text: 'The Same Fence, Three Times', level: 2 },
  { id: 'faq', text: 'Frequently Asked Questions', level: 2 },
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'What was the hut tax and why did it cause a war in Sierra Leone?',
    answer: (
      <>
        A tax imposed by British colonial administrations on each dwelling, payable in cash or,
        in several colonies, in a fixed period of labor. In Sierra Leone, Governor Frederic
        Cardew&rsquo;s ordinance took effect on 1 January 1898: five shillings a year for a small
        hut, ten for a larger one. Twenty-four local chiefs petitioned against it and were
        ignored. Temne chief Bai Bureh then led an armed uprising, the Hut Tax War, from February
        to November 1898, one of the largest anti-colonial revolts West Africa had seen. He was
        captured and exiled; 96 of his allies were executed by the British afterward.
      </>
    ),
  },
  {
    question: 'Was the hut tax only used in Sierra Leone?',
    answer: (
      <>
        No. Britain introduced essentially the same tax, within a few years of each other, in
        Nyasaland (from 1891&ndash;95), Southern and North-Eastern Rhodesia, Kenya, and Gambia.
        Several versions explicitly let a household pay in a fixed period of labor, usually one
        month a year, instead of cash. Historians of colonial taxation in Africa (see Leigh
        Gardner, <em>Taxing Colonial Africa</em>, 2012) describe the tax as serving several
        purposes at once: raising revenue, giving the colonial currency something to be worth,
        expanding the cash economy, and pushing people who had no need for wages before into
        wage labor.
      </>
    ),
  },
  {
    question: 'What was the Congo Free State, and how was it different from a normal colony?',
    answer: (
      <>
        The Congo Free State (1885&ndash;1908) was not Belgium&rsquo;s colony. It was the personal
        property of King Leopold II of Belgium, a claim recognized by the other European powers
        at the Berlin Conference of 1884&ndash;85. Leopold ran it as a private commercial venture,
        primarily through concession companies like the Anglo-Belgian India Rubber Company
        (ABIR), extracting rubber through fixed quotas rather than a monetary tax, enforced by his
        own private army, the Force Publique.
      </>
    ),
  },
  {
    question: 'What was the "hand for a bullet" system in the Congo Free State?',
    answer: (
      <>
        Force Publique officers required their soldiers to account for every cartridge fired,
        to prevent ammunition from being wasted or sold, by presenting a severed human hand as
        proof each bullet had been used on a person rather than an animal or misused. Because
        quotas for both rubber and cartridges were often unmeetable, this system led directly to
        hands being taken from living people to make up the count. The scale and specificity of
        these atrocities were documented by the British consul Roger Casement in his 1904 report,
        which named specific victims, places, and dates.
      </>
    ),
  },
  {
    question: 'How many people died under the Congo Free State?',
    answer: (
      <>
        Genuinely disputed, and this piece does not adopt one figure. Historians Adam Hochschild
        and Jan Vansina estimate roughly 10 million deaths, close to half the region&rsquo;s
        population, between 1880 and 1920. Other historians, working from different population
        and mortality estimates, put the figure as low as 1.2 million. What is not disputed is
        that the deaths were driven by forced labor, starvation, disease spread by the disruption
        of normal life, and direct violence, and that international pressure following Roger
        Casement&rsquo;s 1904 report and the Congo Reform Association&rsquo;s campaign forced Leopold to
        hand the territory to the Belgian state in 1908.
      </>
    ),
  },
  {
    question: 'What was the French code de l’indigénat?',
    answer: (
      <>
        A separate body of law, applying only to colonial subjects, first imposed on Algeria in
        1881 and extended to other French colonies from 1887 onward. It allowed summary
        punishment without trial for offenses that existed only for colonial subjects, such as
        unauthorized travel or &ldquo;disrespect&rdquo; toward an administrator, banned firearm ownership
        and public criticism of colonial rule, and included forced labor obligations (the{' '}
        <em>corvée</em>), a labor-tax (the <em>prestation</em>), and forced military conscription
        (referred to as the &ldquo;blood tax&rdquo;). It was not abolished until 1946.
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
    href: '/posts/how-did-interest-lead-to-the-conquest-of-bengal',
    title: 'What Is Money: Part 4',
    description: 'how a charter that had to keep growing found Bengal, and bought it rather than conquered it',
  },
  {
    href: '/posts/how-did-a-famine-turn-into-a-land-grab',
    title: 'What Is Money: Part 5',
    description: 'a famine, a book, and the theory of history that turned Bengal’s land into private property',
  },
];

export default function HowDidThreeEmpiresFenceAContinentPage() {
  return (
    <ArticleLayout jsonLd={jsonLd}>
      <ArticleHeader
        categories={['Economics', 'History', 'Colonialism', 'Money']}
        title="What Is Money: Part 6"
        lead={
          <>
            <Link
              href="/posts/how-did-a-famine-turn-into-a-land-grab"
              className="underline decoration-gray-400 hover:decoration-gray-700"
            >
              Last time
            </Link>
            , I told you this was never just England&rsquo;s story, and never just Bengal&rsquo;s either.
            I want to make good on that now, properly, by showing you what happened when three
            separate empires, with no need to coordinate or copy from each other, reached the
            same continent in the same fifty-year window, and kept landing on some version of the
            same answer.
          </>
        }
        date="September 17, 2026"
        dateTime="2026-09-17"
        readingTime="26 min read"
      />

      <ArticleTOC items={TOC_ITEMS} />

      <ArticleSection id="the-question-part-five-left-open">
        <H2 id="the-question-part-five-left-open">The Question Part Five Left Open</H2>
        <P>
          I&rsquo;ve shown you, at length now, exactly one specific machine: a King mints a coin,
          demands it back as tax, and in that single move creates both the coin&rsquo;s value and the
          market it moves through. I&rsquo;ve shown you what happens when that machine has to keep
          growing past the point where growth is comfortable: it enclosed English commons, it
          bought an Indian treasury with a bribe, it fenced Bengal&rsquo;s farmland behind a theory of
          history dressed up as science.
        </P>
        <P>
          Here is the question I want to sit with now. Was any of that a coincidence of English
          history specifically, one particularly ruthless island nation&rsquo;s specific bad luck? Or
          is it what happens, reliably, whenever an unaccountable power gets to decide what you
          need in order to survive?
        </P>
        <P>
          I want to answer that honestly, which means I can&rsquo;t just show you one more example.
          One more example proves a pattern <em>can</em> repeat. It doesn&rsquo;t prove the pattern is
          close to universal. So I&rsquo;m going to show you three, from three different empires, using
          three genuinely different tools, arriving independently at the same place, on the same
          continent, inside the same fifty years.
        </P>
      </ArticleSection>

      <ArticleSection id="a-tax-with-no-explanation">
        <H2 id="a-tax-with-no-explanation">A Tax With No Explanation</H2>
        <P>
          Here is the official story, and I want you to hear it the way a British colonial
          official in the 1890s would have told it, straight, no mockery yet. The British
          government had just declared a Protectorate over the interior of Sierra Leone, and
          running any territory costs money: administrators, roads, courts, the ordinary
          business of governing. So in 1896, the Governor, Colonel Frederic Cardew, proposed a
          simple, modest solution: a small annual tax on every dwelling. Five shillings a year for
          a small hut, ten for a larger one, an amount Cardew genuinely seems to have believed was
          reasonable.{' '}
          <span className="text-sm text-gray-400 not-italic">
            (Hut Tax Ordinance, effective 1 January 1898)
          </span>{' '}
          A tax to pay for government. That&rsquo;s the whole official story. It sounds, on its own,
          almost boring.
        </P>
        <P>
          Now here is the loose thread, and it&rsquo;s a simple one: a small, boring, once-a-year tax
          on your own house does not, on its own, provoke one of the largest anti-colonial wars
          West Africa had ever seen. Twenty-four local chiefs tried the quiet route first,
          submitting a formal petition against the tax, explaining specifically how it would harm
          their people. They were ignored entirely. Then, in February 1898, Temne chief Bai Bureh
          refused to pay and refused to help collect it from others. When the British issued a
          warrant for his arrest, he didn&rsquo;t go quietly, he declared war, and other chiefs,
          Temne and Mende alike, joined him.{' '}
          <span className="text-sm text-gray-400 not-italic">
            (Hut Tax War of 1898, Feb&ndash;Nov 1898)
          </span>{' '}
          If the tax really was just an administrative fee, why would fighting it, at enormous
          risk, against the army of the most powerful empire on Earth, make more sense to an
          entire region&rsquo;s worth of chiefs than simply paying it?
        </P>
        <P>
          The war lasted from February to November 1898. British military records count 66 to 67
          of their own soldiers killed and around 185 wounded, plus roughly 90 non-combatant
          carriers killed. No comparable count of Temne and Mende dead survives in the colonial
          record, which tells you something on its own about whose deaths a colonial
          administration considered worth counting.{' '}
          <span className="text-sm text-gray-400 not-italic">
            (British casualty figures, Hut Tax War, 1898)
          </span>{' '}
          Bai Bureh was finally captured on 11 November 1898 and exiled to the Gold Coast. Ninety-six
          of his allies were hanged.
        </P>
        <P>
          So the tax wasn&rsquo;t just an administrative fee. Something about it was worth an entire
          region going to war over, and worth the British executing 96 people to make sure the
          lesson landed. What, specifically?
        </P>
      </ArticleSection>

      <ArticleSection id="the-same-ordinance-six-times-over">
        <H2 id="the-same-ordinance-six-times-over">The Same Ordinance, Six Times Over</H2>
        <P>
          Here is the first thing that should stop you. This was not one governor&rsquo;s one
          idea, tried once, in one place. Britain introduced a hut tax, with only minor variation
          in the numbers, in Nyasaland starting in 1891 and made universal by 1906, three shillings
          a year, reducible to nothing if a household supplied one month of labor instead. In
          North-Eastern Rhodesia the rate ran three to five shillings a hut; in Nyasaland itself,
          later, six shillings, or three if a man could prove he had worked a month during the
          year.{' '}
          <span className="text-sm text-gray-400 not-italic">
            (Hut tax legislation, Nyasaland 1891&ndash;1906; North-Eastern Rhodesia, various)
          </span>{' '}
          Kenya adopted it. Gambia adopted it. Southern Rhodesia adopted it. Read that clause
          again: reducible to nothing if you work a month instead. This was never disguised. The
          law itself told you, in writing, that the tax and your labor were interchangeable, that
          the actual thing being demanded was not five shillings, it was a month of your body&rsquo;s
          effort, spent wherever the colonial economy needed it spent.
        </P>
        <P>
          Notice what that means once you put it next to everything else in this series. This is
          not a new idea colonial administrators invented for Africa. This is the exact King&rsquo;s
          coin-and-tax move from Part 1, run again, on purpose, by people who had learned it
          their whole lives as the ordinary, natural way government worked at home. Mint or import
          a currency. Demand it back as tax, in an amount fixed regardless of what the household
          actually produced or needed. Whoever cannot get the currency any other way must now sell
          the one thing they have left: their own labor, at whatever wage the person demanding the
          tax is willing to pay. Historians who study colonial taxation in Africa describe the hut
          tax as doing several things simultaneously: raising revenue for the colonial
          administration, giving the colonial currency something to be worth in the first place,
          expanding the reach of a cash economy that otherwise had no foothold, and forcing people
          who had never needed wages before into wage labor for the first time in their lives.{' '}
          <span className="text-sm text-gray-400 not-italic">
            (see Leigh Gardner, <em>Taxing Colonial Africa: The Political Economy of British
            Colonial Rule</em>, 2012)
          </span>{' '}
          Four outcomes from one tax, and every single one of them benefits only the people who
          get to set the tax, never the people paying it.
        </P>
        <P>
          Karl Polanyi, the same economic historian this series has quoted before, put the English
          and colonial versions of this trick side by side directly: &ldquo;The colonists may decide
          to cut the breadfruit trees down in order to create an artificial food scarcity or may
          impose a hut tax on the native to force him to barter away his labor. In either case the
          effect is similar to that of Tudor enclosures with their wake of vagrant hordes.&rdquo;{' '}
          <span className="text-sm text-gray-400 not-italic">
            (Polanyi, <em>The Great Transformation</em>, ch. 14, 1944)
          </span>{' '}
          Not the same tool. The same people, wanting the same thing, using whatever tool the
          local situation handed them.
        </P>
      </ArticleSection>

      <ArticleSection id="the-free-state-that-wasnt-free">
        <H2 id="the-free-state-that-wasnt-free">The Free State That Wasn&rsquo;t Free</H2>
        <P>
          Now I want to take you somewhere the tax trick doesn&rsquo;t even appear, because a
          completely different empire reached for a completely different tool, and I think seeing
          that difference matters more than seeing another repetition would.
        </P>
        <P>
          Here is the official story, again told straight, the way it was told to the rest of
          Europe at the time. In 1885, at a conference held in Berlin with no African
          representatives present, the major European powers formally recognized a new state in
          Central Africa: the Congo Free State. Its founder and sole owner, King Leopold II of
          Belgium, presented it as a humanitarian project: a state that would open Central Africa
          to free trade, suppress the Arab-run slave trade already operating there, and bring what
          the language of the era called civilization.{' '}
          <span className="text-sm text-gray-400 not-italic">
            (Berlin Conference, 1884&ndash;85; proclamation of the Congo Free State)
          </span>{' '}
          Notice the name itself: the <em>Free</em> State. Free trade, free labor, a free territory
          opened to the world.
        </P>
        <P>
          Here is the detail the official story leaves out, and it is not a small detail. The
          Congo Free State was not Belgium&rsquo;s colony. It was Leopold&rsquo;s personal property, held
          in what was legally called a personal union: he ruled it as a private individual, not
          as the Belgian head of state, and its revenue was his revenue, not his country&rsquo;s.{' '}
          <span className="text-sm text-gray-400 not-italic">
            (Congo Free State, personal union status under Leopold II, 1885&ndash;1908)
          </span>{' '}
          One man, personally, owned a territory roughly seventy-five times the size of Belgium
          itself. If that man needed the territory to turn a profit, and it was his own money on
          the line, what exactly was going to stop him from extracting as much as the land and its
          people could physically produce?
        </P>
      </ArticleSection>

      <ArticleSection id="a-hand-for-every-bullet">
        <H2 id="a-hand-for-every-bullet">A Hand for Every Bullet</H2>
        <P>
          Nothing stopped him. And because Leopold owned the territory outright rather than merely
          governing it, he didn&rsquo;t need the coin-and-tax trick at all. He skipped the currency
          step entirely and went straight to demanding the actual physical thing he wanted: rubber,
          the raw material a booming global bicycle and automobile industry couldn&rsquo;t get enough
          of in the 1890s.
        </P>
        <P>
          Concession companies, the largest being the Anglo-Belgian India Rubber Company, known as
          ABIR, were granted enormous stretches of territory and assigned each village a fixed
          quota: roughly four kilograms of dried wild rubber per adult male, every two weeks,
          gathered from vines deep in the forest, a task that grew more dangerous and
          time-consuming as the nearest vines were stripped bare.{' '}
          <span className="text-sm text-gray-400 not-italic">
            (ABIR concession rubber quotas, 1890s&ndash;1900s)
          </span>{' '}
          Enforcement was handled by Leopold&rsquo;s own private army, the Force Publique, officered
          largely by Europeans and staffed largely by conscripted or coerced Congolese soldiers.
        </P>
        <P>
          Here is the detail I want you to sit with, because it is the single clearest piece of
          evidence in this entire series that the violence was never incidental to the system, it{' '}
          <em>was</em> the system. Force Publique officers, worried that soldiers might waste
          cartridges hunting animals for themselves or sell them, or simply fire into the air to
          fake having met a quota, required every soldier to account for every bullet fired. The
          proof required was a human hand, severed from the body of whoever the bullet had
          supposedly killed.{' '}
          <span className="text-sm text-gray-400 not-italic">
            (Force Publique cartridge-accounting practice, documented in the Casement Report, 1904)
          </span>{' '}
          Read what that actually creates: an incentive structure where a soldier who missed a
          shot, or who wanted to save a bullet, or who simply hadn&rsquo;t killed enough people that
          week to explain his ammunition use, had every reason in the world to take a hand from
          someone still alive. Baskets of severed hands, delivered to European agents as
          bookkeeping, are not a rumor or a exaggeration invented by later critics. They are
          documented, named, dated, and photographed.
        </P>
        <P>
          The man who forced this into public view was Roger Casement, a British consul sent to
          investigate conditions in the Congo, who traveled the rubber districts in 1903 and
          published his findings in 1904. His report didn&rsquo;t deal in vague horror. It named
          specific victims, specific villages, specific dates, specific officials.{' '}
          <span className="text-sm text-gray-400 not-italic">
            (Casement Report, 1904)
          </span>{' '}
          E.D. Morel, a shipping clerk who had independently noticed that Congo&rsquo;s trade ledgers
          showed valuable exports leaving and almost nothing but guns and ammunition coming back
          in, no wages, no goods, nothing that looked like payment for anything, joined with
          Casement to found the Congo Reform Association that same year, and spent the following
          decade turning that ledger anomaly and Casement&rsquo;s testimony into a sustained public
          campaign.{' '}
          <span className="text-sm text-gray-400 not-italic">
            (Congo Reform Association, founded 1904)
          </span>{' '}
          It worked, eventually. Under mounting international pressure, Leopold was forced to
          hand the Congo over to the Belgian state in 1908, ending his personal ownership, though
          not, by itself, ending forced labor in the territory.
        </P>
        <P>
          How many people died getting to that point is genuinely disputed, and I&rsquo;m not going to
          pretend it isn&rsquo;t. The historians Adam Hochschild and Jan Vansina, working from
          population estimates before and after this period, put the toll at roughly 10 million,
          close to half the entire population of the region. Other historians, using different
          methods and more skeptical of the population baseline, argue for a lower figure, as low
          as 1.2 million.{' '}
          <span className="text-sm text-gray-400 not-italic">
            (Death toll estimates: Hochschild, <em>King Leopold&rsquo;s Ghost</em>, 1998; Vansina;
            lower estimates from other demographic historians)
          </span>{' '}
          I don&rsquo;t know the true number and I don&rsquo;t think anyone alive does either. What isn&rsquo;t
          disputed by anyone is the mechanism: quotas that could not be met without violence,
          enforced by a private army answerable to one man, on a continent where that one man had
          never set foot.
        </P>
      </ArticleSection>

      <ArticleSection id="a-law-that-needed-neither">
        <H2 id="a-law-that-needed-neither">A Law That Needed Neither</H2>
        <P>
          Two entirely different tools so far: a tax that manufactures dependency on a currency,
          and a private owner&rsquo;s direct quota backed by a private army. I want to show you a third,
          because a third empire, working from an entirely different starting point, still arrived
          somewhere close to the same place.
        </P>
        <P>
          France, unlike Britain in Sierra Leone or Leopold in the Congo, told itself and the
          world a story about assimilation: that its colonial subjects were, in principle, on a
          path to becoming French citizens, sharing eventually in the same rights as anyone in
          Paris. That was the official story, and I want it to stand on its own for a second,
          because it is a genuinely different story from &ldquo;pay this tax&rdquo; or &ldquo;meet this quota.&rdquo;
          It promises inclusion, eventually, as the whole point.
        </P>
        <P>
          Here is the loose thread. If colonial subjects were really on a path toward equal
          citizenship, why did France, starting in Algeria in 1881, write an entire separate body
          of law that applied only to them?
        </P>
        <P>
          The <em>code de l&rsquo;indigénat</em>, the &ldquo;native code,&rdquo; was first imposed on Algeria&rsquo;s
          Muslim population in 1881, nominally as a temporary measure for seven years. It lasted,
          in Algeria specifically, until 1944. It was extended to other French colonies, including
          Senegal and New Caledonia, starting in 1887, and continued spreading, in various local
          forms, into the early 1900s.{' '}
          <span className="text-sm text-gray-400 not-italic">
            (Code de l&rsquo;indigénat, Algeria 1881, extended from 1887)
          </span>{' '}
          Under it, an administrator could summarily punish, without trial, offenses that existed
          only for colonial subjects: traveling without a permit, &ldquo;disrespect&rdquo; toward a French
          official, failing to comply with an administrative order, and, from 1902 onward,
          dedicated &ldquo;repressive tribunals&rdquo; existed specifically to handle these cases outside the
          ordinary courts. The same law banned colonial subjects from owning firearms and
          criminalized public criticism of colonial rule itself.
        </P>
        <P>
          And the labor obligations built into it should sound familiar by now, even though the
          mechanism generating them was neither a hut tax nor a company quota. The <em>corvée</em>
          required unpaid labor on public works, roads, buildings, whatever the administration
          needed built. The <em>prestation</em> was, in effect, a tax payable specifically in
          labor rather than currency, only converted into a cash-equivalent tax in 1930, and only
          then because international pressure through the Geneva Convention had made forced labor
          harder to defend openly. A separate obligation, referred to plainly at the time as the
          &ldquo;blood tax,&rdquo; meant forced military conscription.{' '}
          <span className="text-sm text-gray-400 not-italic">
            (corvée, prestation, and military conscription under the indigénat regime; prestation
            converted to a cash tax by decree, 1930)
          </span>{' '}
          None of this required a currency dependency to be manufactured first, the way the hut
          tax did. None of it required a private company chasing a rubber quota. It required only
          a second, separate legal system, applied to people the first legal system had already
          decided did not fully belong inside it. The <em>indigénat</em> was not abolished until
          1946.
        </P>
      </ArticleSection>

      <ArticleSection id="the-same-fence-three-times">
        <H2 id="the-same-fence-three-times">The Same Fence, Three Times</H2>
        <P>
          I want to be honest about something before I draw this together, because this series has
          tried, from the first part, never to paper over a gap with a theory. These are three
          genuinely different mechanisms. The hut tax works by manufacturing a need for currency
          where none existed before, and then letting the demand for that currency do the work of
          forcing people into wage labor. The Congo Free State skipped currency almost entirely
          and went straight to a physical quota, enforced by direct, personal, private violence.
          The <em>indigénat</em> didn&rsquo;t tax or requisition anything as its starting move, it simply
          built a second set of courts and rights, permanently, for one category of person. I am
          not going to pretend these are the same tool wearing three disguises. They aren&rsquo;t.
        </P>
        <P>
          But look at what all three of them accomplish, underneath the specific mechanism. In
          Sierra Leone, Nyasaland, and Rhodesia, a person who had survived perfectly well for
          generations without English coin suddenly needed it, or their body&rsquo;s labor instead, or
          they had no legal way to exist. In the Congo, a person who had survived by farming,
          hunting, and trading suddenly needed to spend most of their time gathering a rubber quota
          they had never wanted, or a member of their family lost a hand, or their life. Under the{' '}
          <em>indigénat</em>, a person could be punished, jailed, conscripted, or worked without pay
          for actions that were not even crimes anywhere else in the same French legal system. Three
          different doors, built by three empires who were not coordinating with each other, and
          every single one of them closes on the same thing: your ability to simply continue
          living the way you and your ancestors always had, without first satisfying a demand set
          by someone who answers to no one you have any power over.
        </P>
        <P>
          That is what should actually unsettle you here, more than any single atrocity on its own.
          If this were one king&rsquo;s cruelty, or one governor&rsquo;s bad ordinance, you could tell
          yourself it was a matter of who happened to be in charge, fixable by better men in the
          same jobs. But three separate empires, operating under three different legal traditions,
          with three different declared justifications, none of them copying a shared playbook,
          kept arriving at some version of the identical outcome. That isn&rsquo;t what a coincidence
          looks like. That is what happens, reliably, whenever one party gets to decide, entirely
          on their own terms, what another party needs in order to survive.
        </P>
        <P>
          Every one of these territories eventually won some form of formal independence: Sierra
          Leone in 1961, the Congo in 1960, France&rsquo;s African colonies through the late 1950s and
          1960s. The flags changed. The fence did not necessarily come down with them, and what
          replaced the King&rsquo;s hand and the Company&rsquo;s ledger and the concession company&rsquo;s quota
          did not have to be invented from nothing either. That is where I want to go next.
        </P>
      </ArticleSection>

      <ArticleFAQ items={FAQ_ITEMS} />

      <ArticleFurtherReading title="Go Deeper" items={FURTHER_READING} />

      <ArticleCallout variant="dark" title="Not a Coincidence, a Pattern">
        <p>
          A tax on your own house, small enough on paper to sound reasonable, provoked ninety-six
          executions and an unrecorded number of deaths on the other side. A king who skipped the
          tax entirely built a machine that priced a human hand at one bullet. A third empire
          needed neither a tax nor a company, only a second set of courts. None of these three
          empires copied the other&rsquo;s paperwork. All three arrived at the same place anyway.
          Whatever word you want to use for that, it is not an accident of history, and it is not
          a matter of which particular men happened to be holding the pen.
        </p>
      </ArticleCallout>

      <ArticleSources>
        <p>
          <strong>Primary and archival sources:</strong> Hut Tax Ordinance, Sierra Leone
          Protectorate, effective 1 January 1898; British military casualty records, Hut Tax War,
          1898; the Casement Report (1904); records of the Berlin Conference (1884&ndash;85) and the
          proclamation of the Congo Free State; the <em>code de l&rsquo;indigénat</em> as first applied
          in Algeria (1881) and extended from 1887.
        </p>
        <p>
          <strong>Secondary sources:</strong> Karl Polanyi, <em>The Great Transformation</em>, ch.
          14 (1944); Leigh Gardner, <em>Taxing Colonial Africa: The Political Economy of British
          Colonial Rule</em> (2012); Adam Hochschild, <em>King Leopold&rsquo;s Ghost: A Story of Greed,
          Terror, and Heroism in Colonial Africa</em> (1998); Jan Vansina&rsquo;s demographic work on
          Congo Free State population loss; standard historical accounts of the Congo Reform
          Association (founded 1904) and the French <em>indigénat</em> regime (1881&ndash;1946).
        </p>
        <p>
          <strong>Notes on disputed points:</strong> no total death toll for the indigenous side
          of the 1898 Hut Tax War survives in the historical record; only British military
          casualties (66&ndash;67 killed, roughly 185 wounded, plus around 90 non-combatant carriers
          killed) are documented with any precision, a gap this piece treats as itself
          significant rather than filling with an estimate. The Congo Free State death toll is
          genuinely and substantially disputed among historians, ranging from roughly 1.2 million
          to roughly 10 million depending on population baseline and method; this piece does not
          adopt a single figure. The exact year the <em>indigénat</em> was fully generalized across
          all French colonies varies by territory and source; this piece cites 1881 for its
          Algerian origin and 1887 for its first extension to other colonies, without claiming a
          single uniform date empire-wide.
        </p>
      </ArticleSources>
    </ArticleLayout>
  );
}
