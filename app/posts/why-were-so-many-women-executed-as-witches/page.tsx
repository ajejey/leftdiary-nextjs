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
  description: "We are told the witch hunts were medieval superstition and mob hysteria. The records say something different: they peaked in the age of printing, universities and the Reformation, and they were run by courts, with paperwork. Who was accused, what the laws of the time were doing to women's bodies and work, what historians can and cannot prove, and where it is still happening today.",
  keywords: [
    'were the witch hunts about superstition',
    'why were women executed as witches',
    'witch hunts and enclosure Federici',
    'Pendle witches 1612 explained',
    'Malleus Maleficarum history',
    'witch trials peak 1560 1630',
    'did the witch hunts target midwives',
    'modern witch hunts India Africa',
    'Silvia Federici Caliban and the Witch evidence',
    'history of money part 3'
  ],
  openGraph: {
    title: 'What Is Money: Part 3',
    description: "The witch hunts were not medieval, and they were not a mob. They peaked in the age of printing and universities, and they were run by courts. What the records show, and what they don't.",
    type: 'article',
    publishedTime: '2026-10-01',
    modifiedTime: '2026-10-01',
    authors: ['https://leftdiary.com/about'],
    section: 'Economics',
    tags: ['money', 'witch hunts', 'women', 'history', 'Federici'],
    siteName: 'Left Diary',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Is Money: Part 3',
    description: "The witch hunts were not medieval, and they were not a mob. They peaked in the age of printing and universities, and they were run by courts.",
    site: '@leftdiary',
    creator: '@leftdiary',
  },
  alternates: {
    canonical: 'https://leftdiary.com/posts/why-were-so-many-women-executed-as-witches'
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
      '@id': 'https://leftdiary.com/posts/why-were-so-many-women-executed-as-witches#article',
      'headline': 'What Is Money: Part 3',
      'description': "We are told the witch hunts were medieval superstition and mob hysteria. The records say something different: they peaked in the age of printing, universities and the Reformation, and they were run by courts, with paperwork.",
      'image': [
        {
          '@type': 'ImageObject',
          'url': 'https://leftdiary.com/posts/why-were-so-many-women-executed-as-witches/opengraph-image',
          'width': 1200,
          'height': 630
        }
      ],
      'datePublished': '2026-10-01T00:00:00+00:00',
      'dateModified': '2026-10-01T00:00:00+00:00',
      'author': { '@type': 'Organization', 'name': 'Left Diary', 'url': 'https://leftdiary.com' },
      'publisher': {
        '@type': 'Organization',
        'name': 'Left Diary',
        'url': 'https://leftdiary.com',
        'logo': { '@type': 'ImageObject', 'url': 'https://leftdiary.com/logo.png', 'width': 600, 'height': 60 }
      },
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': 'https://leftdiary.com/posts/why-were-so-many-women-executed-as-witches'
      },
      'keywords': 'witch hunts, Pendle witches, Malleus Maleficarum, Federici, Caliban and the Witch, Levack, Kepler, modern witch hunts',
      'articleSection': 'Economics',
      'wordCount': 5500,
      'inLanguage': 'en-US',
      'isAccessibleForFree': true,
      'about': [
        { '@type': 'Thing', 'name': 'European witch hunts' },
        { '@type': 'Thing', 'name': 'Pendle witches' },
        { '@type': 'Thing', 'name': 'Silvia Federici' },
        { '@type': 'Thing', 'name': 'Modern witch hunts' }
      ]
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://leftdiary.com/posts/why-were-so-many-women-executed-as-witches#breadcrumb',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://leftdiary.com' },
        { '@type': 'ListItem', 'position': 2, 'name': 'Posts', 'item': 'https://leftdiary.com/posts' },
        { '@type': 'ListItem', 'position': 3, 'name': 'What Is Money: Part 3', 'item': 'https://leftdiary.com/posts/why-were-so-many-women-executed-as-witches' }
      ]
    }
  ]
};

const TOC_ITEMS: TOCItem[] = [
  { id: 'the-story-we-were-told', text: 'The Story We Were Told', level: 2 },
  { id: 'the-date-that-doesnt-fit', text: "The Date That Doesn't Fit", level: 2 },
  { id: 'ten-people-at-lancaster', text: 'Ten People at Lancaster', level: 2 },
  { id: 'the-neighbour-who-said-no', text: 'The Neighbour Who Said No', level: 2 },
  { id: 'a-machine-with-a-printing-press', text: 'A Machine With a Printing Press', level: 2 },
  { id: 'a-cold-century', text: 'A Cold Century', level: 2 },
  { id: 'who-got-to-have-children', text: 'Who Got to Have Children', level: 2 },
  { id: 'what-a-woman-could-earn', text: 'What a Woman Could Earn', level: 2 },
  { id: 'what-the-records-dont-say', text: "What the Records Don't Say", level: 2 },
  { id: 'still-happening', text: 'Still Happening', level: 2 },
  { id: 'what-comes-down-with-it', text: 'What Comes Down With It', level: 2 },
  { id: 'faq', text: 'Frequently Asked Questions', level: 2 },
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'How many people were executed in the European witch hunts?',
    answer: (
      <>
        Historian Brian Levack, surveying regional studies, counts roughly 110,000 trials between
        about 1450 and 1750, and puts executions at somewhere between 40,000 and 60,000, with 75 to
        80 percent of the accused being women. Anne Barstow has argued for higher figures: around
        200,000 accused and at least 100,000 killed once lynchings are counted. Older books and
        popular accounts that speak of &ldquo;millions&rdquo; are not supported by the archives. The Holy
        Roman Empire, roughly modern Germany and its neighbours, accounts for around half of all
        executions.
      </>
    ),
  },
  {
    question: 'Were the witch hunts a medieval phenomenon?',
    answer: (
      <>
        No. The great hunts came after the Middle Ages. The papal bull authorizing inquisitors to
        pursue witchcraft in Germany dates from 1484, the <em>Malleus Maleficarum</em> from about
        1486, and historians place the peak of the persecutions between roughly 1560 and 1630, in
        the age of the printing press, the Reformation, and the scientific revolution. The last
        executions in England were in 1682, and the English law against witchcraft was repealed in
        1736.
      </>
    ),
  },
  {
    question: 'Did the witch hunts target midwives?',
    answer: (
      <>
        It is one of the most repeated claims about this history, and it does not survive the trial
        records. The <em>Malleus Maleficarum</em> does link midwives with the deaths of infants, so
        the idea existed in the demonologists&rsquo; books. But David Harley, examining the actual
        cases in 1990, found that midwives appear among the accused only in small numbers, no more
        often than other trades, and that being a midwife did not make a woman more likely to be
        charged.
      </>
    ),
  },
  {
    question: 'Were witch accusations connected to the enclosure of common land?',
    answer: (
      <>
        Silvia Federici argues in <em>Caliban and the Witch</em> (2004) that the witch hunts and the
        loss of common land and women&rsquo;s independence belong to one process. It is an argument,
        not a settled finding. The specific claim that accusations clustered where land was being
        enclosed is often traced to Alan Macfarlane&rsquo;s study of Essex, but in his own account of
        that county he reported no particular relationship between accusations and enclosure.
        Macfarlane and Keith Thomas instead found that English accusations often followed a
        neighbour being refused charity.
      </>
    ),
  },
  {
    question: 'How many people were executed for witchcraft in England and Scotland?',
    answer: (
      <>
        England saw around 500 executions under the witchcraft laws of 1542, 1563 and 1604, about
        100 to 300 of them in the East Anglian panic of 1644&ndash;47 associated with Matthew Hopkins.
        Scotland was harsher: the Survey of Scottish Witchcraft records about 3,800 people accused
        between 1563 and 1736, about three-quarters of them women, with estimates of executions
        ranging from roughly 1,500 to roughly 2,500.
      </>
    ),
  },
  {
    question: 'Do witch hunts still happen?',
    answer: (
      <>
        Yes. The United Nations has reported witchcraft accusations used to justify violence against
        older women in at least 41 African and Asian countries. India&rsquo;s National Crime Records
        Bureau recorded about 2,500 murders linked to witchcraft accusations between 2000 and 2016,
        mostly of women. A Tanzanian human rights centre counted 2,585 killings of older women in
        eight regions between 2004 and 2009. In northern Ghana, women banished as witches live in
        camps; a 2021 survey of two camps found 259 of 277 residents were women, and most were over
        65.
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
    description: 'the commons fenced off and standing still made a crime, until the wage was the only door left',
  },
  {
    href: '/posts/how-did-the-king-lose-the-power-to-make-money',
    title: 'What Is Money: Part 4',
    description: 'the 1694 deal that gave a private institution the permanent power to create money',
  },
  {
    href: '/posts/how-did-three-empires-fence-a-continent',
    title: 'What Is Money: Part 7',
    description: 'the hut tax, the Congo Free State and the French indigénat: three empires, one continent',
  },
  {
    href: 'https://en.wikipedia.org/wiki/Caliban_and_the_Witch',
    title: 'Caliban and the Witch — Silvia Federici',
    description: 'the fullest argument that the witch hunts and the fencing of the commons were one process',
    external: true,
  },
];

export default function WhyWereSoManyWomenExecutedAsWitchesPage() {
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
            , I showed you the land being fenced and standing still being made a crime. There is
            something from the same centuries that I left out on purpose, because it doesn&rsquo;t fit
            on a map of fences. The story we are all handed about it is close to the reverse of what
            the records show.
          </>
        }
        date="October 1, 2026"
        dateTime="2026-10-01"
        readingTime="25 min read"
      />

      <ArticleTOC items={TOC_ITEMS} />

      <ArticleSection id="the-story-we-were-told">
        <H2 id="the-story-we-were-told">The Story We Were Told</H2>
        <P>
          Say the words &ldquo;witch hunt&rdquo; to almost anyone and a picture arrives before you have
          finished the sentence. A village. A crowd. Torches, perhaps. A frightened, ignorant mob
          that believes in curses and drags an old woman to a fire because the crops died or a cow
          fell sick. And with the picture comes a date that nobody quite chose: the Middle Ages.
          The Dark Ages, even. A time before schools and science, when people were, we are told,
          simply too uneducated to know better.
        </P>
        <P>
          I want to give that story its due, because parts of it are true. Almost everyone in
          sixteenth-century Europe did believe that harm could be done by curses, and that some
          people had the power to do it. They did fear it. A cow did die. A child did fall ill, and
          the people left standing needed to understand why. Nothing I am about to say takes away
          from the fact that these were real beliefs, held by real and frightened people.
        </P>
        <P>
          But look at what the story does for us. It says: this was a matter of ignorance, of a
          time before ours, of a crowd. It puts the whole thing safely behind a wall of centuries
          and a wall of stupidity, and neither wall is anywhere near us. Hold on to that, because
          the first thing the records do is knock both walls over.
        </P>
      </ArticleSection>

      <ArticleSection id="the-date-that-doesnt-fit">
        <H2 id="the-date-that-doesnt-fit">The Date That Doesn&rsquo;t Fit</H2>
        <P>
          Start with the dates, because they are the part of the picture that is easiest to check.
          In 1484, Pope Innocent VIII issued a bull, <em>Summis desiderantes affectibus</em>,
          complaining about the spread of witchcraft in Germany and authorizing two Dominican
          inquisitors to stamp it out. Around 1486, one of those two men, Heinrich Kramer, and his
          colleague Jacob Sprenger published a handbook for judges called the{' '}
          <em>Malleus Maleficarum</em>, the &ldquo;Hammer of Witches.&rdquo;{' '}
          <span className="text-sm text-gray-400 not-italic">
            (<em>Summis desiderantes affectibus</em>, 1484; Kramer &amp; Sprenger,{' '}
            <em>Malleus Maleficarum</em>, c. 1486)
          </span>{' '}
          It was printed. The printing press was only a few decades old, and one of the first
          bestsellers it produced was a manual on how to find, question and convict witches. It went
          through some 28 editions by 1600, and Catholics and Protestants alike used it.{' '}
          <span className="text-sm text-gray-400 not-italic">
            (<em>Malleus Maleficarum</em>, editions 1486&ndash;1600, Encyclopaedia Britannica)
          </span>
        </P>
        <P>
          Now the part that should bother you. The persecution did not peak in the Middle Ages. It
          peaked after them. Historians who have counted the trials place the worst decades between
          about 1560 and 1630: the years of the Reformation and the Counter-Reformation, of
          universities and law faculties, of Copernicus&rsquo;s book on the movement of the planets
          (1543) and Galileo&rsquo;s telescope (1610).{' '}
          <span className="text-sm text-gray-400 not-italic">
            (Levack, <em>The Witch-Hunt in Early Modern Europe</em>)
          </span>
        </P>
        <P>
          Here is one case that puts the two worlds in the same room. In August 1620, the astronomer
          Johannes Kepler, who had by then published all three of his laws of planetary motion,
          found that his own mother, Katharina, had been arrested in the village of Heumaden on 49
          counts of witchcraft. She spent 405 days in custody. On 28 September 1620, the
          executioner showed her the instruments of torture: the rack, the branding irons, the
          pricking needles. She is reported to have answered that even if they pulled the veins out
          of her body one by one she would have nothing to confess. Kepler spent the year writing
          her defence, much of it in a 128-page statement, and she was acquitted in October 1621.
          She died about six months later.{' '}
          <span className="text-sm text-gray-400 not-italic">
            (Katharina Kepler, arrest 7 August 1620, acquittal October 1621; see APS News, August
            2015, and standard biographies of Kepler)
          </span>{' '}
          Notice who ruled that she be shown the instruments but not yet tortured: the law faculty
          of the University of Tübingen. That was not a mob. That was a university&rsquo;s lawyers.
        </P>
        <P>
          So here is the question a child would ask, and it is one the old story cannot answer. If
          the witch hunts were what happens when people are ignorant, why did they get worse as
          Europe got more educated? And why are the surviving records not accounts of crowds, but
          of courts?
        </P>
      </ArticleSection>

      <ArticleSection id="ten-people-at-lancaster">
        <H2 id="ten-people-at-lancaster">Ten People at Lancaster</H2>
        <P>
          I want to take you to one small case in detail, because it is the best documented
          English one, and because the way it began is the most important thing in this whole
          piece.
        </P>
        <P>
          On 21 March 1612, a local woman named Alizon Device was walking near Trawden Forest in
          Lancashire when she met a pedlar, John Law, a man from Halifax who was travelling with
          his son. Alizon asked him for some pins. It was a small thing to ask. He refused. Alizon
          cursed him. And moments later, he
          fell to the ground, struck down by what looks to us very much like a stroke.{' '}
          <span className="text-sm text-gray-400 not-italic">
            (Pendle witches, 21 March 1612; account in Potts, <em>The Wonderfull Discoverie of
            Witches in the Countie of Lancaster</em>, 1613)
          </span>
        </P>
        <P>
          Nine days later, Alizon, her mother Elizabeth and her brother James were brought before a
          local magistrate, Roger Nowell. Alizon confessed. She believed she had done it. Nowell
          kept pulling the thread. By the time he was done, the names of Alizon&rsquo;s grandmother,
          Elizabeth Southerns, called Old Demdike, known locally as a healer, and of a rival
          family&rsquo;s matriarch, Anne Whittle, called Chattox, had been added. Old Demdike died in Lancaster
          gaol before she could be tried. The key witness at the trial in August was a child.
          Alizon&rsquo;s nine-year-old sister Jennet Device testified against her own mother and
          brother, and her evidence was accepted.{' '}
          <span className="text-sm text-gray-400 not-italic">
            (Pendle witch trials, Lancaster Assizes, August 1612)
          </span>
        </P>
        <P>
          On 20 August 1612, ten people were hanged at Gallows Hill in Lancaster, the largest
          single witchcraft execution in English history. The court clerk, Thomas Potts, wrote it
          all up in a book the following year, with the dates, the names and the testimony. It reads
          as an assurance that the law had done its work properly.
        </P>
        <P>
          Sit with how this started. Not with a coven. Not with a devil. With a request for pins,
          a refusal, a curse, and a man who fell down. A woman asked a man for a small thing, he
          said no, and by the end of the summer ten people were dead. Why does a refusal turn into
          a capital charge? That is the question the next section tries to answer, and it is where
          the story stops being about superstition.
        </P>
      </ArticleSection>

      <ArticleSection id="the-neighbour-who-said-no">
        <H2 id="the-neighbour-who-said-no">The Neighbour Who Said No</H2>
        <P>
          Two English historians, Keith Thomas and Alan Macfarlane, spent years going through
          hundreds of English witchcraft cases in the 1960s, and both noticed the same pattern, a
          pattern that Pendle fits exactly. A person, usually poor and usually older, usually a
          woman, asks a neighbour for something: milk, bread, a loan, a few pins. The neighbour
          refuses. The person leaves muttering. Some time later, something goes wrong in the
          neighbour&rsquo;s life: a cow dies, a child falls ill. And the neighbour, remembering the
          refusal and the muttering, starts to wonder.{' '}
          <span className="text-sm text-gray-400 not-italic">
            (Thomas, <em>Religion and the Decline of Magic</em>, 1971; Macfarlane,{' '}
            <em>Witchcraft in Tudor and Stuart England</em>, 1970)
          </span>
        </P>
        <P>
          Thomas put the mechanism most sharply. A person who has turned away someone in need feels
          guilty, whether or not they admit it, and guilt wants somewhere to go. One of the easiest
          places for it to go is the belief that the person you turned away must have been someone
          who deserved it: a witch. If she was a witch, then refusing her was not unkindness, it
          was self-defence. The guilt dissolves, and the accusation takes its place.
        </P>
        <P>
          Now ask why that guilt was there to be felt. Go back to the very first part of this
          series: the &ldquo;I owe you one,&rdquo; the elevator button, the way people who know each other
          simply help each other without counting. That was the old rule of a village. If your
          neighbour asked you for milk, you gave it, and one day she would give you something back,
          and nobody wrote any of it down. Macfarlane himself linked the rise in accusations in the
          late sixteenth century to a change from a close, interdependent village to a more
          individualistic one.{' '}
          <span className="text-sm text-gray-400 not-italic">
            (Macfarlane, 1970, as summarized in later historiography)
          </span>{' '}
          Over those same decades, giving without counting was being replaced by statute: laws,
          some of which I showed you last time, about who counted as a vagrant, who could be whipped
          for begging, and who was entitled to relief and from whom. An old woman at your door
          asking for milk had gone, in a single generation, from being your neighbour to being a
          problem. And when something went wrong
          in the house of the person who had turned her away, the old village had no word for
          what had happened. The new courts did.
        </P>
        <P>
          I want to be careful here, because historians have pushed back on this explanation, and
          they are right to. Poor people were, simply, the largest group in society, so they were
          always going to appear in large numbers among the accused. And the accused were not
          always poorer than their accusers; Macfarlane found they were on a slightly lower level
          than the people who accused them, not the very poorest in the village.{' '}
          <span className="text-sm text-gray-400 not-italic">
            (Macfarlane, 1970; critique in Sharpe and later historiography)
          </span>{' '}
          And a neighbour&rsquo;s guilt explains a village case like Pendle. It does not explain why
          one German bishop could burn hundreds of people in a few years. For that you need a
          different kind of explanation.
        </P>
      </ArticleSection>

      <ArticleSection id="a-machine-with-a-printing-press">
        <H2 id="a-machine-with-a-printing-press">A Machine With a Printing Press</H2>
        <P>
          That explanation is a legal one, and it is the part of this story that I find hardest to
          read, because nothing in it needs anyone to be mad.
        </P>
        <P>
          Take the English version first. Parliament made witchcraft a crime in 1542, repealed
          that law, and passed another in 1563 making death by witchcraft a felony punishable by
          hanging. In 1604, under James I, a new Act went further: even harm that did not kill
          anyone was now a capital offence.{' '}
          <span className="text-sm text-gray-400 not-italic">
            (Witchcraft Acts of 1542, 1563 and 1604)
          </span>{' '}
          A neighbour&rsquo;s accusation could now be taken to a magistrate, and the magistrate had a
          statute to apply.
        </P>
        <P>
          Then take the method that spread across much of the Continent. The accused was arrested
          and questioned under torture, to confess to intercourse with the devil, to a pact with
          him, to attending a gathering of witches. And then she was asked a final question: who
          else was there? Every confession produced names, and every name was a new arrest, and
          every new arrest produced more names. You can feel the shape of that. Each answer
          demanded the next, and there was no point at which the questions had to end.
        </P>
        <P>
          The numbers where it ran unchecked are hard to look at. In the Archbishopric of Trier,
          the persecution began in 1581 and reached the city itself in 1587; between 1587 and 1593,
          368 people were burned alive across twenty-two villages, and a total of a thousand has
          been suggested but never confirmed.{' '}
          <span className="text-sm text-gray-400 not-italic">
            (Trier witch trials, 1581&ndash;1593)
          </span>{' '}
          In Würzburg, during the rule of Prince-Bishop Philipp Adolf von Ehrenberg from 1623 to
          1631, about 900 people were executed, among them his own nephew, between 19 and 43
          Catholic priests, and children as young as seven.{' '}
          <span className="text-sm text-gray-400 not-italic">
            (Würzburg witch trials, 1623&ndash;1631)
          </span>{' '}
          In neighbouring Bamberg, between 1626 and 1631, the Prince-Bishop built a dedicated
          &ldquo;witch-house&rdquo; with a torture chamber decorated with verses from the Bible, and the
          executions there are estimated at somewhere between 300 and more than 900.{' '}
          <span className="text-sm text-gray-400 not-italic">
            (Bamberg witch trials, 1626&ndash;1631)
          </span>
        </P>
        <P>
          Now the scale, because this is where honesty about the numbers matters. Brian Levack, who
          surveyed the regional studies, counts roughly 110,000 trials across Europe between about
          1450 and 1750, and between 40,000 and 60,000 executions, with 75 to 80 percent of the
          accused being women. Roughly half or more of the executions took place in the Holy Roman
          Empire.
          Anne Barstow has argued for higher figures, around 200,000 accused and at least 100,000
          killed once lynchings are counted. Older popular books speak of millions. The archives do
          not support millions.{' '}
          <span className="text-sm text-gray-400 not-italic">
            (Levack, <em>The Witch-Hunt in Early Modern Europe</em>; Barstow, <em>Witchcraze</em>,
            1994)
          </span>
        </P>
        <P>
          Here is the finding I think matters most, and it is Levack&rsquo;s. The places where the
          burnings were worst were the places where justice was most decentralized: the many small
          states of the Holy Roman Empire, and Scotland, where local courts answered to nobody who
          could tell them to stop. The places where a central authority could say stop, such as
          Spain, where witchcraft cases went to centralized church courts, saw very few.{' '}
          <span className="text-sm text-gray-400 not-italic">
            (Levack, <em>The Witch-Hunt in Early Modern Europe</em>)
          </span>{' '}
          England, with its central courts, had around 500 executions in all, and roughly 100 to
          300 of those came in the East Anglian panic of 1644&ndash;47 associated with Matthew Hopkins,
          who called himself Witchfinder General, a title Parliament never gave him. Scotland, by
          contrast, had about 3,800 people accused between 1563 and 1736.{' '}
          <span className="text-sm text-gray-400 not-italic">
            (Witch trials in England; Survey of Scottish Witchcraft)
          </span>{' '}
          The last English executions were in 1682, when three women from Bideford in Devon were
          hanged outside Exeter on the evidence of hearsay and one confession. Parliament repealed
          the witchcraft laws in 1736.
        </P>
        <P>
          Put those facts next to each other and the picture of a crowd falls apart. What the
          records show is a legal procedure with a printed manual, an agreed set of questions, a
          standard method for producing more defendants from the previous one, and a clerk to write
          it all down. The hunt was not what happened when the law broke down. It was what the law
          did when nobody was in a position to stop it.
        </P>
      </ArticleSection>

      <ArticleSection id="a-cold-century">
        <H2 id="a-cold-century">A Cold Century</H2>
        <P>
          None of that explains why the burnings came when they did. There is a second set of
          findings that explains the timing, and it has nothing to do with women or laws.
        </P>
        <P>
          Between roughly the sixteenth and the eighteenth centuries, Europe went through what
          climate historians call the Little Ice Age. The economist Emily Oster collected weather
          records and witch-trial records from 1520 to 1770 and found a statistically significant
          relationship: in colder years, with failed crops and hungry winters, there were more
          trials. And in periods when living standards were improving more slowly there were more
          trials, even after she accounted for the weather.{' '}
          <span className="text-sm text-gray-400 not-italic">
            (Oster, &ldquo;Witchcraft, Weather and Economic Growth in Renaissance Europe,&rdquo;{' '}
            <em>Journal of Economic Perspectives</em>, 2004)
          </span>
        </P>
        <P>
          I want to be clear about what this does and doesn&rsquo;t tell us. It is a pattern across
          many years and many places, not a document showing that a particular bad harvest led to a
          particular accusation. And it does not explain why the people blamed were so often women.
          But it does tell us that when a community was hungry and frightened, there was an
          established legal channel waiting to turn that fear into a name and a trial. A cold year
          did not create the courts. It filled them.
        </P>
      </ArticleSection>

      <ArticleSection id="who-got-to-have-children">
        <H2 id="who-got-to-have-children">Who Got to Have Children</H2>
        <P>
          So far everything I have told you comes from historians who disagree with each other
          about almost everything else. Now I want to take you to the part of the story that
          Silvia Federici built her argument on, and I want to be precise about which pieces of it
          are documented, because the documented pieces are enough to be disturbing by themselves.
        </P>
        <P>
          In 1347 to 1352, the Black Death killed something like a third of Europe. Populations did
          not recover to their earlier size until somewhere between 1500 and 1600.{' '}
          <span className="text-sm text-gray-400 not-italic">
            (population estimates, economic historians of the Black Death)
          </span>{' '}
          Think about what that means for rulers. Fewer people means fewer workers, fewer soldiers,
          fewer people paying rent and tax. When the Crown&rsquo;s first answer, the Statute of Labourers
          in 1351, tried to freeze wages at their old level, it failed completely; contemporaries
          said so.{' '}
          <span className="text-sm text-gray-400 not-italic">
            (Statute of Labourers, 1351)
          </span>{' '}
          By the later sixteenth century the question of how many people there were, and who
          decided whether they were born, was an open political question.
        </P>
        <P>
          One of the sharpest minds of the age saw it that way. The French jurist Jean Bodin, in
          his <em>Six Books of the Commonwealth</em> (1576), argued that there is no wealth and no
          strength but in men. Four years later, in <em>De la démonomanie des sorciers</em> (1580),
          one of the most widely read books on witchcraft in Europe, he wrote at length about
          witches who prevent conception and kill infants. Federici reads the two as expressions of
          one worry: a population anxiety, written up once as political theory and once as
          demonology.{' '}
          <span className="text-sm text-gray-400 not-italic">
            (Bodin, 1576 and 1580; Federici, <em>Caliban and the Witch</em>, 2004)
          </span>
        </P>
        <P>
          Whether or not you accept that reading, here are two laws that nobody disputes. In 1556,
          the French king Henri II issued an edict requiring women to declare every pregnancy, and
          prescribing death for a woman whose child died before baptism after a concealed
          delivery, whether or not any wrongdoing could be proved.{' '}
          <span className="text-sm text-gray-400 not-italic">
            (Edict of Henri II, 1556)
          </span>{' '}
          And in 1624, England passed &ldquo;An Act to prevent the destroying and murthering of bastard
          children.&rdquo; Under it, an unmarried woman who gave birth in secret and whose child was
          found dead was presumed to have murdered it, unless she could produce at least one
          witness who would swear the child had been born dead. If she proved a stillbirth, the
          charge fell to concealing the birth, and that was still a capital offence.{' '}
          <span className="text-sm text-gray-400 not-italic">
            (Act of 1624; see Cambridge University Press, <em>Infanticide in Tudor and Stuart
            England</em>)
          </span>
        </P>
        <P>
          Read that again. In English criminal law a person was almost always presumed innocent
          until proved guilty. This Act reversed that, for one kind of person,
          for one kind of event, and the event was an alarmingly common one, because stillbirths
          were common. It stayed on the statute book until 1803.{' '}
          <span className="text-sm text-gray-400 not-italic">
            (Concealment of Birth; repealed 1803)
          </span>{' '}
          A woman who gave birth alone and lost the child could be hanged, and it fell to her to
          prove she was innocent.
        </P>
        <P>
          Nobody in these laws says: we are doing this because we need more workers. But laws are
          not written in a vacuum. These were written in a Europe that had been emptied by plague
          and was still counting its people, in which the leading political thinkers were saying
          that people were the only real wealth. They all land in the same place: what a woman did
          with her own pregnancy had become a matter for the state, in a new and much harsher way,
          and the state&rsquo;s answer was the gallows.
        </P>
      </ArticleSection>

      <ArticleSection id="what-a-woman-could-earn">
        <H2 id="what-a-woman-could-earn">What a Woman Could Earn</H2>
        <P>
          There is one more documented piece, and it is quieter than the gallows. It has to do with
          beer.
        </P>
        <P>
          For most of the Middle Ages in England, ale was women&rsquo;s work. Women brewed it at home,
          sold the surplus to neighbours, and for many widows and single women it was a real income.
          The historian Judith Bennett followed that trade through the records from 1300 to 1600
          and found that after about 1350, men slowly took it over. As brewing became a bigger,
          more commercial business, with guilds and licences and larger equipment, the women were
          pushed to the edge. By the sixteenth century fewer than one licence in ten went to a woman,
          and those mostly to widows of brewers who had died.{' '}
          <span className="text-sm text-gray-400 not-italic">
            (Bennett, <em>Ale, Beer, and Brewsters in England: Women&rsquo;s Work in a Changing World,
            1300&ndash;1600</em>, 1996)
          </span>
        </P>
        <P>
          I am not telling you that brewing led to witch hunts. Bennett does not claim that, and I
          would be making it up. What I am showing you is what was happening, in the same centuries,
          to one very well-documented way that a woman could earn her own living without a husband.
          It was being closed, by licence and by guild, with no fire and no rack involved at all.
          Put it next to the laws on pregnancy and you can see two different doors being narrowed at
          once: what a woman could do with her body, and what she could do with her hands.
        </P>
      </ArticleSection>

      <ArticleSection id="what-the-records-dont-say">
        <H2 id="what-the-records-dont-say">What the Records Don&rsquo;t Say</H2>
        <P>
          This is the section where I have to be most careful, because this is exactly the place
          where it would be easy to tell you a tidier story than the evidence allows.
        </P>
        <P>
          If you have read about this history before, you have probably come across the claim that
          the witch hunts were aimed at midwives, women who held independent knowledge of the body,
          of birth and of how to prevent it. It is one of the most repeated claims in popular
          accounts, and it does not survive the trial records. The <em>Malleus Maleficarum</em> does
          connect midwives with the deaths of infants, so the idea was there in the demonologists&rsquo;
          books. But in 1990 the historian David Harley went through the actual cases and found that
          midwives turn up among the accused only in small numbers, no more often than any other
          trade, and that being a midwife did not make a woman more likely to be charged.{' '}
          <span className="text-sm text-gray-400 not-italic">
            (Harley, &ldquo;Historians as Demonologists: The Myth of the Midwife-Witch,&rdquo;{' '}
            <em>Social History of Medicine</em>, 1990)
          </span>{' '}
          Even the authors of the book that made the claim famous have said in a later introduction
          that parts of it need updating.
        </P>
        <P>
          A second popular claim is that accusations clustered in the places where common land was
          being fenced off. It is often traced to Macfarlane&rsquo;s study of Essex. But in his own
          account of witchcraft in that county, Macfarlane reported that there seemed to be no
          particular relationship between where accusations happened and population density, the
          new cloth trades, enclosure, or forest land.{' '}
          <span className="text-sm text-gray-400 not-italic">
            (Macfarlane, &ldquo;Witchcraft in Tudor and Stuart Essex&rdquo;)
          </span>{' '}
          I cannot give you the map that connects the two, because the historian whose map it is said
          it was not there.
        </P>
        <P>
          And the largest gap of all: nobody has found a document in which anyone says, we will burn
          women in order to raise the birth rate, or to push them into wage work, or to clear their
          land. Silvia Federici&rsquo;s argument in <em>Caliban and the Witch</em> is that the witch hunts
          were part of one process with the fencing of common land: the breaking of women&rsquo;s
          independent control over their bodies and their labour, so that a population would be
          available for work. She is a serious scholar, and the laws I have just shown you are real.
          But her thesis is an argument built from a pattern. Several historians have criticized it
          for taking correlation as cause, for using sources selectively, and for projecting later
          economic categories back onto the sixteenth century. It may be right. It is not proved,
          and I would be doing exactly what I have been asking you to distrust if I told you it was.
        </P>
        <P>
          So here is what I can say, and I think it is enough. The hunts peaked in the age of
          printing and universities, not the dark ages. They were run by courts, with manuals,
          clerks and a procedure that produced new defendants. They grew worst where nobody could
          stop them, and they grew in cold, hungry years. They fell overwhelmingly on women. And in
          the same centuries the law was deciding, for the first time, what a woman could do with
          her pregnancy and her trade. Whether those facts are one story or several is a thread
          that is still open.
        </P>
      </ArticleSection>

      <ArticleSection id="still-happening">
        <H2 id="still-happening">Still Happening</H2>
        <P>
          I could stop there and leave you with a history. But that would be giving you back the
          comforting story in a more sophisticated form, with the walls of centuries still standing.
          They aren&rsquo;t.
        </P>
        <P>
          In India, the National Crime Records Bureau recorded around 2,500 murders linked to
          witchcraft accusations between 2000 and 2016, most of the victims women, averaging around
          150 killings a year. In the state of Jharkhand alone, 593 women were killed between 2001 and
          2021. In 2017 the Bureau stopped publishing a separate figure.{' '}
          <span className="text-sm text-gray-400 not-italic">
            (National Crime Records Bureau; analysis in the Oxford Human Rights Hub)
          </span>{' '}
          Legal researchers working on these cases describe the same profile again and again: a
          widow, an older woman, a woman who holds land or speaks up, accused after a disease, a
          death or a dispute over property, and then beaten, driven out or killed.
        </P>
        <P>
          In Tanzania, a human rights centre counted 2,585 killings of older women in eight regions
          between 2004 and 2009, an average of more than 500 a year. In northern Ghana, women
          banished as witches live in camps; a 2021 survey of two of them found that 259 of the 277
          residents were women and that more than 83 percent were over 65. The United Nations has
          reported witchcraft accusations used to justify violence against older women in at least
          41 countries across Africa and Asia.{' '}
          <span className="text-sm text-gray-400 not-italic">
            (Tanzania Legal and Human Rights Centre, 2004&ndash;2009; Amnesty International, Ghana; UN
            Human Rights, 2014)
          </span>
        </P>
        <P>
          I need to say what I am and am not claiming. I am not claiming these killings are the same
          machine as the courts of Trier and Würzburg; the mechanism is different, and these are
          mostly neighbours and communities, not prince-bishops. Federici, in a later book, ties them
          to modern land grabs and to the policies imposed on poorer countries from the 1980s, and I
          will come back to that kind of policy later in this series; for now, that is her argument
          and it needs its own examination. What I can say is smaller and still enough: the person
          who gets accused is, over centuries and across continents, strikingly consistent. Older.
          Poor. Often widowed. Often someone who has something another person wants, or who cannot
          defend herself, and the accusation arrives dressed as a neighbour&rsquo;s fear.
        </P>
      </ArticleSection>

      <ArticleSection id="what-comes-down-with-it">
        <H2 id="what-comes-down-with-it">What Comes Down With It</H2>
        <P>
          Go back to the story we started with. A crowd, a fire, an ignorant century. If the records
          say anything clearly, they say that story is false in the ways that matter. The danger was
          never a crowd. It was a procedure: a manual, a set of questions, a method for turning one
          name into ten, and an official who could be told, truthfully, that everything was being
          done according to law.
        </P>
        <P>
          That is a more uncomfortable thing to know, because a crowd goes away, and a procedure does
          not. It only needs somebody to be afraid, somebody to be blamed, and nobody with the power
          to say stop. It also suggests something about the other stories this series has been
          picking apart. We were taught that the fencing of the land, the vagrancy laws and the loss
          of the commons were a kind of progress, an unfortunate side-effect of a more advanced way
          of living. We were taught that the burning of women was a relic of ignorance. Both stories
          do the same job: they put what happened somewhere behind us and away from anyone with a
          name.
        </P>
        <P>
          I have now shown you three things closing in the same centuries: the land, the freedom to
          stand still, and a woman&rsquo;s say over her own pregnancy and her own trade. And all of it
          ends in the same place: a person with nothing left to sell but their time, and nobody to
          answer to but whoever will pay for it. But a wage is paid in money, and I have not once
          asked where that money came from, or who got to make it. A king used to mint it. In the
          next part, he loses that power in a single deal.{' '}
          <Link
            href="/posts/how-did-the-king-lose-the-power-to-make-money"
            className="underline decoration-gray-400 hover:decoration-gray-700"
          >
            That is where we go next.
          </Link>
        </P>
      </ArticleSection>

      <ArticleFAQ items={FAQ_ITEMS} />

      <ArticleFurtherReading title="Go Deeper" items={FURTHER_READING} />

      <ArticleCallout variant="dark" title="Not Superstition, Paperwork">
        <p>
          The witch hunts did not come from a dark age, and they did not come from a crowd. They
          peaked in the age of printing and universities, and they were run by courts, with
          manuals, clerks and a procedure that turned one confession into many. What was done to
          the women who were accused is documented. Why it was done, and whether it was part of
          the same process that fenced the land, is still a live argument, and anyone who tells you
          it is closed, in either direction, is giving you a tidier story than the evidence allows.
        </p>
      </ArticleCallout>

      <ArticleSources>
        <p>
          <strong>Primary and archival sources:</strong> Papal bull <em>Summis desiderantes
          affectibus</em> (1484); Heinrich Kramer and Jacob Sprenger, <em>Malleus Maleficarum</em>
          (c. 1486); English Witchcraft Acts of 1542, 1563 and 1604; Edict of Henri II of France
          (1556); &ldquo;An Act to prevent the destroying and murthering of bastard children&rdquo; (1624);
          Thomas Potts, <em>The Wonderfull Discoverie of Witches in the Countie of Lancaster</em>
          (1613); Statute of Labourers (1351); Jean Bodin, <em>Six Books of the Commonwealth</em>
          (1576) and <em>De la démonomanie des sorciers</em> (1580).
        </p>
        <p>
          <strong>Secondary sources:</strong> Brian Levack, <em>The Witch-Hunt in Early Modern
          Europe</em>; Anne Llewellyn Barstow, <em>Witchcraze</em> (1994); Keith Thomas,{' '}
          <em>Religion and the Decline of Magic</em> (1971); Alan Macfarlane, <em>Witchcraft in Tudor
          and Stuart England</em> (1970) and &ldquo;Witchcraft in Tudor and Stuart Essex&rdquo;; David Harley,
          &ldquo;Historians as Demonologists: The Myth of the Midwife-Witch,&rdquo; <em>Social History of
          Medicine</em> (1990); Emily Oster, &ldquo;Witchcraft, Weather and Economic Growth in
          Renaissance Europe,&rdquo; <em>Journal of Economic Perspectives</em> (2004); Judith Bennett,{' '}
          <em>Ale, Beer, and Brewsters in England</em> (1996); Silvia Federici, <em>Caliban and the
          Witch</em> (2004) and <em>Witches, Witch-Hunting, and Women</em> (2018); Barbara Ehrenreich
          and Deirdre English, <em>Witches, Midwives, and Nurses</em> (1973); Survey of Scottish
          Witchcraft; Tanzania Legal and Human Rights Centre; Amnesty International on Ghana; UN
          Human Rights (2014); India National Crime Records Bureau data and the Oxford Human Rights
          Hub analysis.
        </p>
        <p>
          <strong>Notes on disputed points:</strong> the total number of executions in the European
          witch hunts is contested. This piece uses Levack&rsquo;s roughly 110,000 trials and 40,000 to
          60,000 executions, and notes Barstow&rsquo;s higher estimate; it does not support older claims of
          millions. Estimates of executions in Scotland vary between sources, from roughly 1,500 to
          roughly 2,500. Estimates of the number of people sent to their deaths by Matthew Hopkins
          vary between roughly 100 and 300. The account of Macfarlane&rsquo;s Essex findings is drawn from
          his published study of the county; readers should check the original text. The Thomas and
          Macfarlane &ldquo;charity refused&rdquo; explanation has been criticized as not accounting for the
          size of the poor population or for accusers and accused who were close in wealth. Federici&rsquo;s
          thesis linking the witch hunts to the fencing of the commons and the control of women&rsquo;s
          reproduction is an argument that remains contested; this piece presents the documented laws
          and facts it rests on, not the thesis as established. The statistics on modern witch-hunting
          come from national and NGO sources whose methods differ; the Indian figures end in 2017
          because the National Crime Records Bureau stopped publishing a separate category. No claim
          is made that modern killings share a mechanism with the early modern courts.
        </p>
      </ArticleSources>
    </ArticleLayout>
  );
}
