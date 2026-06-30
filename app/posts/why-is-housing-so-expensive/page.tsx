import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Why Is Housing So Expensive? | Left Diary",
  description: "Why is housing so expensive? Not because of supply and demand — because land enclosure, financialization, and deliberate policy choices turned shelter into an asset class. Here is the real political history of why you cannot afford to live.",
  keywords: [
    "why is housing so expensive",
    "who benefits from high house prices",
    "how did land become a commodity",
    "history of land enclosure and private property",
    "why does owning property build wealth but renting doesn't",
    "housing as financialization",
    "land value tax explained",
    "Henry George explained",
    "housing crisis political causes",
    "enclosure of the commons housing",
    "Karl Polanyi great transformation housing",
    "social housing Vienna model",
    "housing financialization explained",
    "why renting doesn't build wealth"
  ],
  openGraph: {
    title: "Why Is Housing So Expensive?",
    description: "Why is housing so expensive? Not because of supply and demand — because land enclosure, financialization, and deliberate policy choices turned shelter into an asset class. Here is the real political history.",
    images: [
      {
        url: 'https://leftdiary.com/images/cover_pages/housing-financialization-cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Why Is Housing So Expensive — Left Diary'
      }
    ],
    type: 'article',
    publishedTime: '2026-06-30',
    modifiedTime: '2026-06-30',
    authors: ['https://leftdiary.com/about'],
    section: 'Economics',
    tags: ['housing', 'land', 'financialization', 'enclosure', 'capitalism', 'political economy', 'Henry George'],
    siteName: 'Left Diary',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Why Is Housing So Expensive?",
    description: "Why is housing so expensive? Not because of supply and demand — because land enclosure and financialization turned shelter into an asset class. Here is the real political history.",
    site: '@leftdiary',
    creator: '@leftdiary',
    images: ['https://leftdiary.com/images/cover_pages/housing-financialization-cover.jpg'],
  },
  alternates: {
    canonical: 'https://leftdiary.com/posts/why-is-housing-so-expensive'
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
      '@id': 'https://leftdiary.com/posts/why-is-housing-so-expensive#article',
      'headline': 'Why Is Housing So Expensive?',
      'description': 'Why is housing so expensive? Not because of supply and demand — because land enclosure, financialization, and deliberate policy choices turned shelter into an asset class. Here is the real political history of why you cannot afford to live.',
      'image': [
        {
          '@type': 'ImageObject',
          'url': 'https://leftdiary.com/images/cover_pages/housing-financialization-cover.jpg',
          'width': 1200,
          'height': 630
        }
      ],
      'datePublished': '2026-06-30T00:00:00+00:00',
      'dateModified': '2026-06-30T00:00:00+00:00',
      'author': {
        '@type': 'Organization',
        'name': 'Left Diary',
        'url': 'https://leftdiary.com'
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'Left Diary',
        'url': 'https://leftdiary.com',
        'logo': {
          '@type': 'ImageObject',
          'url': 'https://leftdiary.com/logo.png',
          'width': 600,
          'height': 60
        }
      },
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': 'https://leftdiary.com/posts/why-is-housing-so-expensive'
      },
      'keywords': 'why is housing so expensive, who benefits from high house prices, housing as financialization, history of land enclosure, why does owning property build wealth but renting doesn\'t, Henry George land value tax',
      'articleSection': 'Economics',
      'wordCount': 3800,
      'inLanguage': 'en-US',
      'isAccessibleForFree': true,
      'about': [
        { '@type': 'Thing', 'name': 'Housing Economics' },
        { '@type': 'Thing', 'name': 'Land Value' },
        { '@type': 'Thing', 'name': 'Financialization' },
        { '@type': 'Thing', 'name': 'Enclosure Movement' },
        { '@type': 'Person', 'name': 'Henry George' }
      ],
      'mentions': [
        { '@type': 'Person', 'name': 'Henry George' },
        { '@type': 'Person', 'name': 'Karl Polanyi' },
        { '@type': 'Person', 'name': 'Silvia Federici' },
        { '@type': 'Person', 'name': 'David Graeber' }
      ]
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://leftdiary.com/posts/why-is-housing-so-expensive#faq',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Why is housing so expensive?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Housing is so expensive because of three interconnected causes: (1) land enclosure — the centuries-long process by which common land was privatized and made a commodity, beginning with the English Enclosure Acts from the 1500s to 1850s; (2) financialization — the deliberate deregulation of mortgage markets from the 1980s onward that flooded property markets with investment capital, turning homes from places to live into financial assets; and (3) tax policy — governments actively subsidize homeownership and property investment through mortgage interest deductions and low capital gains taxes on property, while land value taxes that would reduce speculation have never been implemented at scale.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Who benefits from high house prices?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Three groups benefit from high house prices: (1) large-scale property investors and REITs, who hold assets that appreciate and extract rent — Blackstone alone owns over 300,000 rental homes in the US; (2) outright homeowners, particularly those who bought decades ago and use rising house prices as a pension substitute; and (3) the financial sector, which profits from mortgage interest on the debt that high prices force buyers to take on. Renters — disproportionately young, working-class, and from minority groups — bear all the costs.'
          }
        },
        {
          '@type': 'Question',
          'name': 'How did land become a commodity?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Land became a commodity through the Enclosure Acts — over 5,000 pieces of parliamentary legislation between roughly 1500 and 1850 that transferred millions of acres of English common land into private ownership. Before enclosure, land was managed communally under customary rights. Enclosure abolished those rights, made land privately owned and saleable, and created a class of people who had no land and no alternative but to sell their labor for wages. Karl Polanyi called this "a revolution of the rich against the poor."'
          }
        },
        {
          '@type': 'Question',
          'name': 'Why does owning property build wealth but renting doesn\'t?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'In a financialized housing market, homeowners capture rising land values — the appreciation in the price of the location itself — while renters pay it. This rising value is not created by the homeowner: it comes from collective investment in surrounding infrastructure, density, and economic activity. Henry George called this "economic rent." Renters pay for shelter and receive shelter. Owners pay for shelter and simultaneously accumulate an appreciating asset. The wealth gap between owners and renters is not a result of individual choices — it is a structural transfer of value that the political system has chosen not to tax away.'
          }
        },
        {
          '@type': 'Question',
          'name': 'What is housing financialization?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Housing financialization describes the process by which homes shifted from being primarily places to live into financial investment vehicles. It accelerated from the 1980s onward through mortgage deregulation, which allowed pension funds, private equity, and global capital to flow into property markets. When large amounts of investment capital compete for a fixed supply of land, prices rise — not because demand for shelter increased, but because demand for property as an investment increased. The result is housing that functions like a stock: valued not for its use but for the expectation that someone will pay more for it in the future.'
          }
        },
        {
          '@type': 'Question',
          'name': 'What is a land value tax and would it fix housing?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'A land value tax (LVT), proposed most famously by Henry George in Progress and Poverty (1879), falls on the unimproved value of land itself — not the buildings on it. Because it taxes land value regardless of what is built there, it cannot be passed on to tenants and cannot be avoided by moving or restructuring. It penalizes land banking and idle speculation, making development more attractive than sitting on land waiting for values to rise. Virtually all mainstream and heterodox economists have endorsed its logic. It has not been implemented at meaningful scale anywhere because the people who own land also tend to control the political process.'
          }
        }
      ]
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://leftdiary.com/posts/why-is-housing-so-expensive#breadcrumb',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': 'https://leftdiary.com'
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Posts',
          'item': 'https://leftdiary.com/posts'
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': 'Why Is Housing So Expensive?',
          'item': 'https://leftdiary.com/posts/why-is-housing-so-expensive'
        }
      ]
    }
  ]
};

export default function HousingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="max-w-3xl mx-auto px-5 py-12 font-serif">

        <header className="mb-12">
          <div className="text-sm uppercase tracking-widest text-gray-500 mb-4">Economics · History · Housing</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            Why Is Housing So Expensive?
          </h1>
          <p className="text-2xl leading-relaxed text-gray-600 font-light">
            Why is housing so expensive? The answer isn&apos;t supply and demand. Land enclosure,
            financial deregulation, and deliberate policy choices turned shelter into an asset class
            over several centuries. Here is the real political history — and who made these decisions.
          </p>
          <div className="mt-6 text-sm text-gray-500">By Left Diary &nbsp;·&nbsp; June 30, 2026 &nbsp;·&nbsp; 16 min read</div>
        </header>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">The Answer Nobody Gives You</h2>
          <p className="text-xl leading-relaxed text-gray-700 mb-6">
            Why is housing so expensive? When you ask this question, politicians and economists reach
            for the same answer: supply and demand. Not enough homes have been built. Zoning laws are
            too restrictive. NIMBYs block development. If only we built more, prices would fall.
            The solution, in this framing, is technical — update the planning rules, incentivize
            developers, release more land for construction.
          </p>
          <p className="text-xl leading-relaxed text-gray-700 mb-6">
            This framing has one remarkable feature: it treats the current arrangement of land
            ownership as a natural baseline, and asks only how to make it function more efficiently.
            It never asks the prior question — why is land privately owned at all? Why does a piece
            of the earth&apos;s surface, which no one made and which preceded every human institution by
            billions of years, belong to specific individuals who can charge others for the right
            to exist on it?
          </p>
          <p className="text-xl leading-relaxed text-gray-700 mb-6">
            That question sounds radical. But it was once perfectly mainstream. The history of how
            land became a commodity — how something that was common became private — is the history
            of some of the most deliberate, violent, and politically contested decisions in human
            history. Understanding it doesn&apos;t just explain why housing is so expensive. It explains
            capitalism itself.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Land Was Never Naturally a Commodity</h2>
          <p className="text-xl leading-relaxed text-gray-700 mb-6">
            For most of human history, the idea that someone could permanently own a piece of land —
            could exclude others from it, sell it, pass it to heirs, sit on it idle while charging
            others rent — would have been incomprehensible. Land was something communities used. It
            was managed collectively, governed by custom, and understood as belonging to no one in
            the same way air and water belonged to no one.
          </p>
          <p className="text-xl leading-relaxed text-gray-700 mb-6">
            In medieval England, the system that prevailed for centuries was the commons. Open fields,
            meadows, forests, and fens were available to the people of a village for grazing, gathering
            firewood, cutting peat, and gleaning after harvest. No single person owned these resources.
            The right to use them was attached to your membership in the community, not to any deed
            or title. You had rights in the land. You did not own it.
          </p>
          <p className="text-xl leading-relaxed text-gray-700 mb-6">
            This was not a state of primitive chaos. It was a stable, sophisticated system that had
            sustained rural communities for generations. The question of what replaced it — and why —
            is where the real history begins.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-800">The Enclosures: Land Theft by Parliamentary Act</h3>
          <p className="text-xl leading-relaxed text-gray-700 mb-6">
            Between roughly 1500 and 1850, the English commons were systematically abolished. Through
            over 5,000 Enclosure Acts, Parliament transferred millions of acres of common land into
            private ownership. Hedges were built. Fences went up. People who had grazed their animals
            on common land for generations were told that the land now belonged to a landlord, and
            they were trespassing.
          </p>
          <p className="text-xl leading-relaxed text-gray-700 mb-6">
            The beneficiaries were almost exclusively the landowning aristocracy and the emerging
            capitalist class. The people who lost were the peasants, the cottagers, the rural poor —
            everyone who had depended on common land for subsistence. Almost overnight, they had
            nothing to sell but their labor. Which was, of course, the point.
          </p>
          <p className="text-xl leading-relaxed text-gray-700 mb-6">
            Silvia Federici, in <em>Caliban and the Witch</em>, documents how enclosure was not just an
            economic policy but a project of social discipline. Common land gave people an exit option.
            If you could grow food, gather wood, and graze animals on the commons, you were not
            entirely dependent on wages. Enclosure destroyed that independence. It created a class
            of people who had no choice but to work for whoever owned the means of production —
            because the alternative was starvation. The wage labor system that we now treat as natural
            was constructed, violently, through the expropriation of the commons.
          </p>
          <p className="text-xl leading-relaxed text-gray-700 mb-6">
            Contemporary observers were clear about what was happening. Thomas More, writing in
            <em> Utopia</em> (1516), described sheep eating men — the wealthy converting arable land
            to pasture for wool production, driving peasants off their holdings and into beggary.
            This was not invisible. It was obvious, condemned, and done anyway, because it served
            the interests of the powerful.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Karl Polanyi and the Great Transformation</h2>
          <p className="text-xl leading-relaxed text-gray-700 mb-6">
            The Hungarian economic historian Karl Polanyi gave this process its most rigorous analysis
            in <em>The Great Transformation</em> (1944). Polanyi identified what he called the &quot;fictitious
            commodities&quot; — things treated as market commodities that fundamentally were not: land,
            labor, and money.
          </p>
          <p className="text-xl leading-relaxed text-gray-700 mb-6">
            These things are not produced for sale. Land is not manufactured. Labor is human life —
            it cannot be separated from the person performing it. Money is a social institution, not a
            natural resource. Treating these as ordinary market commodities, Polanyi argued, was not
            a discovery of some natural economic order. It was a political project, violently enforced,
            that subordinated society to the market rather than the other way around.
          </p>
          <p className="text-xl leading-relaxed text-gray-700 mb-6">
            Before the market economy, land was embedded in social relations. You had obligations to
            those who worked it. You had obligations to the community that surrounded it. The idea of
            treating land as purely a financial instrument — buying it low, selling it high, extracting
            maximum rent, leaving it idle if that produced better returns — required dismantling
            centuries of social obligation and replacing them with the single logic of price.
          </p>
          <p className="text-xl leading-relaxed text-gray-700 mb-6">
            Polanyi called the enclosure movement &quot;a revolution of the rich against the poor.&quot; He was
            describing England in the 18th century. He might as well have been describing London,
            Sydney, Toronto, or San Francisco today.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">How Land Became a Financial Asset</h2>
          <p className="text-xl leading-relaxed text-gray-700 mb-6">
            The enclosures created private land ownership. But they did not, by themselves, create
            the current housing crisis. That required a further step: the transformation of land and
            housing from a place to live into a vehicle for financial speculation.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Mortgage Deregulation and the Finance Flood</h3>
          <p className="text-xl leading-relaxed text-gray-700 mb-6">
            Until the 1970s and 1980s, housing in most wealthy countries operated under significant
            constraints. Mortgage credit was regulated. Interest rates were controlled. Speculation
            was limited. Then came financial deregulation. In the UK, the 1986 Big Bang deregulated
            financial markets. In the US, the Depository Institutions Deregulation and Monetary
            Control Act (1980) and the Garn-St. Germain Act (1982) loosened controls on mortgage
            lending. Pension funds, insurance companies, and eventually global investment capital
            were permitted — and encouraged — to flow into property markets.
          </p>
          <p className="text-xl leading-relaxed text-gray-700 mb-6">
            The effect was immediate and predictable. When you flood a market with cheap credit,
            prices rise. More money chasing the same supply of land drives up prices. Landlords
            found they could charge more. Speculators found they could buy property, hold it, and
            sell it at a profit — even without doing anything useful with it. Housing began to
            function less like shelter and more like stock: something you held as an investment,
            something whose value came not from use but from the expectation that someone else
            would pay more for it in the future.
          </p>
          <p className="text-xl leading-relaxed text-gray-700 mb-6">
            This process — <em>financialization</em> — describes what happens when financial logic
            colonizes sectors of the economy previously governed by different values. Housing is
            the clearest example in the modern world.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-800">The Tax Subsidies That Made It Worse</h3>
          <p className="text-xl leading-relaxed text-gray-700 mb-6">
            The financialization of housing was not just permitted by policy. It was actively
            subsidized. In the United States, the mortgage interest deduction allowed homeowners
            to deduct mortgage interest from taxable income — worth tens of billions of dollars
            a year, flowing predominantly to wealthy homeowners with large mortgages. Capital
            gains on property sales were taxed at lower rates than wages.
          </p>
          <p className="text-xl leading-relaxed text-gray-700 mb-6">
            At the same time, taxes on land value were abolished or allowed to atrophy. Land value
            tax — which falls on the unimproved value of the land itself, not the buildings on it —
            is one of the most economically efficient taxes ever theorized. It cannot be passed on
            to tenants. It cannot be avoided by relocating or restructuring. It penalizes land
            banking and idle speculation. Virtually every serious economist across the political
            spectrum has endorsed it at some point.
          </p>
          <p className="text-xl leading-relaxed text-gray-700 mb-6">
            It has not been implemented anywhere at meaningful scale, because the people who own
            land also tend to own the political process.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Henry George and the Road Not Taken</h2>
          <p className="text-xl leading-relaxed text-gray-700 mb-6">
            In 1879, the American journalist and theorist Henry George published <em>Progress and Poverty</em>.
            It became one of the bestselling books in the English-speaking world — read by Leo Tolstoy,
            George Bernard Shaw, Albert Einstein, and Winston Churchill. Its central argument is still
            one of the most radical and most correct analyses of capitalism ever written.
          </p>
          <p className="text-xl leading-relaxed text-gray-700 mb-6">
            George noticed a paradox: as societies became richer through industrial progress, poverty
            was not declining. Where was the wealth going? To the landowners. The gains from economic
            progress — better infrastructure, denser cities, rising productivity — automatically
            accrued to those who owned land in the right places. A railway line is built through a
            city. Everyone who owns land near the stations becomes richer, simply by owning. They did
            nothing. They produced nothing. But the value of their land increased because of collective
            investment in public infrastructure. This value — which George called &quot;economic rent&quot; —
            was extracted by private landowners who had done nothing to create it.
          </p>
          <p className="text-xl leading-relaxed text-gray-700 mb-6">
            His solution: tax away all economic rent through a single land value tax. Leave the returns
            to labor and capital, but capture for the public the value that society collectively creates
            through its presence and investment. Abolish all other taxes. Fund public goods directly
            from the wealth that belongs to the commons.
          </p>
          <p className="text-xl leading-relaxed text-gray-700 mb-6">
            George&apos;s ideas terrified the landowning classes precisely because they were so hard to
            argue against on purely economic grounds. The pushback came not from rational refutation
            but from political suppression. His movement was deliberately marginalized in economic
            education over the following decades. Standard economics textbooks folded &quot;land&quot; into
            &quot;capital,&quot; erasing the distinction that made George&apos;s analysis so dangerous. If land is
            just another form of capital, there is nothing special about landownership — no need to
            treat it differently, tax it differently, or question it at all.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Who Benefits from High House Prices</h2>
          <p className="text-xl leading-relaxed text-gray-700 mb-6">
            The housing crisis is presented as a problem everyone shares. This is false. Whether high
            house prices hurt you or help you depends entirely on your relationship to property ownership.
          </p>
          <p className="text-xl leading-relaxed text-gray-700 mb-6">
            For <strong>renters</strong> — disproportionately young, working-class, and from racial minorities —
            high house prices are catastrophic. They mean spending 30%, 40%, sometimes 50% of income
            on housing. No asset accumulation. No inheritance to pass on. Permanent vulnerability to
            a landlord who can raise rent, sell up, or evict.
          </p>
          <p className="text-xl leading-relaxed text-gray-700 mb-6">
            For <strong>mortgaged homeowners</strong>, high house prices are a mixed blessing. They feel wealthy
            on paper. Their home is their pension plan. They have strong incentives to oppose new
            construction that might bring prices down and vote against land value taxes. This is not
            false consciousness — it is rational behavior given the system they are embedded in.
            The system has made their retirement security dependent on housing scarcity.
          </p>
          <p className="text-xl leading-relaxed text-gray-700 mb-6">
            For <strong>large-scale property investors</strong> — developers, REITs, private equity firms, offshore
            wealth funds — high house prices are straightforwardly profitable. Blackstone alone owns
            more than 300,000 rental homes in the United States. They hold assets that appreciate.
            They extract rent. They use housing scarcity as a business model.
          </p>
          <p className="text-xl leading-relaxed text-gray-700 mb-6">
            The political system consistently chooses policies that inflate prices and benefit owners
            over renters, speculators over people who need somewhere to live. This is not an oversight.
            It is the outcome of a political system that is more responsive to property owners than
            to those without property.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Why Does Owning Property Build Wealth but Renting Doesn&apos;t</h2>
          <p className="text-xl leading-relaxed text-gray-700 mb-6">
            Why does owning property build wealth but renting doesn&apos;t? The usual answer is about
            equity: when you own, your mortgage payments build ownership in an asset. But this
            misses the deeper structural explanation.
          </p>
          <p className="text-xl leading-relaxed text-gray-700 mb-6">
            In a financialized housing market, homeowners simultaneously pay for shelter and capture
            rising land values — the economic rent that George described. This rising value is not
            created by anything the homeowner does. It comes from the collective activity of the
            city: new infrastructure, economic density, public investment, the simple presence of
            millions of people making the location desirable. The homeowner captures this value.
            The renter pays it, in the form of rent increases that track rising land prices.
          </p>
          <p className="text-xl leading-relaxed text-gray-700 mb-6">
            This means wealth accumulation through homeownership is not a reward for thrift or hard
            work. It is a structural transfer of value from renters to owners — a mechanism that
            enriches those who already have assets at the expense of those who don&apos;t. It operates
            completely independently of individual choices or merit.
          </p>
          <p className="text-xl leading-relaxed text-gray-700 mb-6">
            The policy implication should be obvious: if you want to reduce wealth inequality, you
            need to change the system that makes housing an investment vehicle. But changing that
            system means reducing house prices — which means hurting the asset values of the
            homeowning class, who are the most politically engaged, the most likely to vote, the
            most likely to donate to political parties.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Colonial Enclosure: The Same Story Globally</h2>
          <p className="text-xl leading-relaxed text-gray-700 mb-6">
            The enclosure of common land that created English capitalism was not a uniquely English
            event. It was a template that European colonialism exported across the globe, with
            consequences that remain unresolved.
          </p>
          <p className="text-xl leading-relaxed text-gray-700 mb-6">
            In Africa, Asia, and the Americas, colonizers encountered land-use systems that looked
            like the English commons — communal, governed by custom, not alienable as private property.
            They proceeded to enclose them. The legal instruments varied: homestead acts, crown land
            declarations, native reserve systems, registration requirements that extinguished customary
            rights. The logic was identical: define common land as &quot;unoccupied&quot; or &quot;waste,&quot; vest it
            in colonial state or private ownership, and force the people who depended on it into the
            wage economy.
          </p>
          <p className="text-xl leading-relaxed text-gray-700 mb-6">
            The hut tax — imposed across British Africa in the late 19th and early 20th centuries —
            was a precise mechanism for this: tax people in cash for the right to live in their own
            homes, then force them to seek wage labor when they couldn&apos;t pay. Land enclosure and
            labor coercion were not separate policies. They were two sides of the same coin.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">What the Supply Argument Gets Wrong</h2>
          <p className="text-xl leading-relaxed text-gray-700 mb-6">
            The supply argument for housing affordability is not entirely wrong. Building more homes
            does, in general, reduce upward price pressure in a given market. Restrictive zoning does
            contribute to scarcity. But taken alone, the supply argument is radically insufficient
            for several reasons.
          </p>
          <p className="text-xl leading-relaxed text-gray-700 mb-6">
            First, in a financialized housing market, new supply does not automatically become
            affordable housing. Developers build for the most profitable segment of the market.
            In cities with extreme land costs, that means luxury development. New luxury supply may
            eventually filter down over decades, but the timeline is cold comfort for people who
            need housing now.
          </p>
          <p className="text-xl leading-relaxed text-gray-700 mb-6">
            Second, the supply argument sidesteps the question of ownership. Even if you build enough
            homes to house everyone, if those homes are owned by private investors and rented at
            market rates, you have not solved the problem of housing insecurity — you have merely
            displaced it. The wealth transfer from renters to owners continues.
          </p>
          <p className="text-xl leading-relaxed text-gray-700 mb-6">
            Third, the supply framing accepts land privatization as unchallengeable. It asks how to
            produce more housing within a financialized system, not why housing is financialized in
            the first place. It is a technical question posed in place of a political one.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">What Would Actually Change Things</h2>

          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Land Value Tax</h3>
          <p className="text-xl leading-relaxed text-gray-700 mb-6">
            A meaningful land value tax would fundamentally change the incentive structure of land
            ownership. It would penalize idle speculation and land banking. It would reduce the
            incentive to hold land as a pure investment. Every serious economist who has examined
            it endorses its logic. The political barriers are not intellectual — they are a direct
            expression of concentrated landowning power.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Social Housing at Scale</h3>
          <p className="text-xl leading-relaxed text-gray-700 mb-6">
            Vienna has maintained a system of municipal housing — Gemeindebau — for over a century.
            Roughly 60% of Vienna&apos;s population lives in publicly subsidized housing. Rents are capped.
            Tenure is secure. Vienna consistently ranks among the world&apos;s most livable cities, with
            housing costs that are a fraction of London&apos;s or San Francisco&apos;s. This is not a fantasy.
            It exists. It has existed for a century.
          </p>
          <p className="text-xl leading-relaxed text-gray-700 mb-6">
            The question is not whether publicly organized housing can work — it demonstrably can.
            The question is why English-speaking governments systematically dismantled their public
            housing stock from the 1980s onward, sold it off at below-market prices, and then made
            it impossible to replace by prohibiting councils from reinvesting the proceeds in new
            social housing. That was a political decision — a transfer of assets from the public to
            the private.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Security of Tenure</h3>
          <p className="text-xl leading-relaxed text-gray-700 mb-6">
            Germany, the Netherlands, and Sweden maintain rent controls alongside coordinated housing
            policy — and do not produce the market collapse that Anglo-American economists predict.
            What they produce is security: the ability of people to remain in their homes and
            communities without being forced out by market-rate increases. Security of tenure is
            not a luxury. It is a precondition for human flourishing.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-8 text-gray-800">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Why is housing so expensive?</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Three interconnected causes: land was privatized through centuries of enclosure, which
                made shelter a commodity in the first place. Then financial deregulation from the 1980s
                flooded property markets with investment capital, turning homes into financial assets.
                Tax policy actively subsidized homeownership and investment while suppressing land value
                taxes that would reduce speculation. Supply is a symptom, not the cause.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Who benefits from high house prices?</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Large-scale property investors and REITs (Blackstone owns over 300,000 US rental homes),
                outright homeowners using property as a pension substitute, and the financial sector
                extracting mortgage interest. Renters — disproportionately young, working-class, and
                from minority groups — bear all the costs.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">How did land become a commodity?</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Through over 5,000 Enclosure Acts between 1500 and 1850 that transferred millions of
                acres of English common land into private ownership. Before enclosure, land was managed
                communally under customary rights. Karl Polanyi called this &quot;a revolution of the rich
                against the poor.&quot; The same process was exported through colonialism globally.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Why does owning property build wealth but renting doesn&apos;t?</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Homeowners capture rising land values — the &quot;economic rent&quot; that Henry George described —
                created by collective infrastructure and density, not by anything they did. Renters pay
                those rising land values as higher rent. The wealth gap between owners and renters is
                not about individual choices. It is a structural transfer built into how the system works.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">What is housing financialization?</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Housing financialization is the process by which homes shifted from places to live into
                financial investment vehicles. It accelerated from the 1980s through mortgage deregulation,
                which allowed pension funds, private equity, and global capital to flood property markets.
                The result: housing valued not for its use but for the expectation that someone will pay
                more for it in the future.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">What is a land value tax and would it fix housing?</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                A land value tax (LVT) — proposed by Henry George in <em>Progress and Poverty</em> (1879) —
                taxes the unimproved value of land itself, not the buildings on it. It cannot be passed
                to tenants. It penalizes idle speculation and land banking. Every mainstream and heterodox
                economist endorses its logic. It has not been implemented at scale because landowners
                control the political process.
              </p>
            </div>
          </div>
        </section>

        {/* Further Reading */}
        <section className="mb-12 bg-gray-50 border border-gray-200 rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Go Deeper</h2>
          <ul className="space-y-3">
            <li>
              <Link href="/posts/did-humans-ever-barter-before-money" className="text-gray-800 font-medium hover:text-gray-600 underline decoration-gray-300 hover:decoration-gray-600 transition-all">
                Did Humans Ever Barter Before Money?
              </Link>
              <span className="text-gray-600"> — the founding fiction of economics that makes the current market order look natural</span>
            </li>
            <li>
              <Link href="/posts/federici-caliban-witch-capitalism" className="text-gray-800 font-medium hover:text-gray-600 underline decoration-gray-300 hover:decoration-gray-600 transition-all">
                Federici&apos;s Caliban and the Witch
              </Link>
              <span className="text-gray-600"> — the enclosures, the witch trials, and the violent construction of capitalism</span>
            </li>
            <li>
              <Link href="/posts/graeber-bullshit-jobs-summary" className="text-gray-800 font-medium hover:text-gray-600 underline decoration-gray-300 hover:decoration-gray-600 transition-all">
                Graeber&apos;s Bullshit Jobs
              </Link>
              <span className="text-gray-600"> — why high housing costs make the disciplining function of work more effective</span>
            </li>
          </ul>
        </section>

        <section className="mb-12 bg-gray-900 text-white rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-4">The System Is Rigged: Understanding How</h2>
          <p className="text-lg text-gray-300 mb-4">
            This article is part of Left Diary&apos;s ongoing series examining the political and historical
            roots of systems that feel natural but were deliberately built: money, land, debt, work.
            None of it was inevitable. All of it was chosen, by people with interests, against the
            interests of people who had less power.
          </p>
          <p className="text-lg text-gray-300">
            Understanding the construction is the first step toward imagining the reconstruction.
          </p>
        </section>

        <footer className="border-t border-gray-200 pt-8 text-sm text-gray-500">
          <p>
            <strong>Primary sources:</strong> Karl Polanyi, <em>The Great Transformation</em> (1944);
            Henry George, <em>Progress and Poverty</em> (1879); Silvia Federici, <em>Caliban and the Witch</em> (2004);
            David Graeber, <em>Debt: The First 5,000 Years</em> (2011); E.P. Thompson, <em>The Making of the English
            Working Class</em> (1963); Josh Ryan-Collins, Toby Lloyd, and Laurie Macfarlane, <em>Rethinking the
            Economics of Land and Housing</em> (2017).
          </p>
        </footer>

      </article>
    </>
  );
}
