import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Why Is Housing So Expensive? The Political History of Land as a Commodity | Left Diary",
  description: "Housing didn't get expensive by accident. Land enclosure, financialization, and deliberate policy choices turned shelter into an asset class. Here's the real history of why you can't afford to live.",
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
    "enclosure of the commons housing"
  ],
  openGraph: {
    title: "Why Is Housing So Expensive? The Political History of Land as a Commodity",
    description: "Housing didn't get expensive by accident. Land enclosure, financialization, and deliberate policy choices turned shelter into an asset class. Here's the real history of why you can't afford to live.",
    images: ['/images/cover_pages/housing-financialization-cover.jpg'],
    type: 'article',
    publishedTime: '2026-06-30',
    authors: ['Left Diary'],
    section: 'Economics',
    tags: ['housing', 'land', 'financialization', 'enclosure', 'capitalism', 'political economy'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Why Is Housing So Expensive? The Political History of Land as a Commodity",
    description: "Housing didn't get expensive by accident. Land enclosure and financialization turned shelter into an asset class. Here's why you can't afford to live.",
    site: '@leftdiary',
  },
  alternates: {
    canonical: 'https://leftdiary.com/posts/why-is-housing-so-expensive'
  }
};

export default function HousingPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-12 font-serif">

      <header className="mb-12">
        <div className="text-sm uppercase tracking-widest text-gray-500 mb-4">Economics · History · Housing</div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
          Why Is Housing So Expensive? The Political History of Land as a Commodity
        </h1>
        <p className="text-2xl leading-relaxed text-gray-600 font-light">
          Housing didn&apos;t get expensive by accident. Land enclosure, deliberate policy choices, and
          the financialization of shelter turned a basic human need into an asset class. Here&apos;s the
          real history of why you can&apos;t afford to live — and who decided it would be this way.
        </p>
        <div className="mt-6 text-sm text-gray-500">By Left Diary &nbsp;·&nbsp; June 30, 2026 &nbsp;·&nbsp; 16 min read</div>
      </header>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">The Question Nobody Asks</h2>
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          When housing becomes unaffordable, politicians and commentators reach for the same explanation:
          supply and demand. Not enough homes built. Zoning restrictions. NIMBYism. If only we built more,
          prices would fall. The solution is technical: update planning rules, incentivize developers,
          release more land for construction.
        </p>
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          This framing has one remarkable feature: it treats the current arrangement of land ownership as
          a natural baseline, and asks only how to make it function more efficiently. It never asks the
          prior question — why is land privately owned at all? Why does a piece of the earth&apos;s surface,
          which no one made and which preceded every human institution by billions of years, belong to
          specific individuals who can charge others for the right to exist on it?
        </p>
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          That question sounds radical because we&apos;ve been trained to hear it that way. But it was once
          perfectly mainstream. The history of how land became a commodity — how something that was
          common became private — is the history of some of the most deliberate, violent, and politically
          contested decisions in human history.
        </p>
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          Understanding it doesn&apos;t just explain the housing crisis. It explains capitalism itself.
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
          firewood, cutting peat, gleaning after harvest. No single person owned these resources.
          The right to use them was attached to your membership in the community, not to any deed or
          title. You had rights in the land. You did not own it.
        </p>
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          This was not a state of primitive chaos that the market eventually improved upon. It was a
          stable, sophisticated system that had sustained rural communities for generations. It worked.
          The question of what replaced it — and why — is where the real history begins.
        </p>

        <h3 className="text-2xl font-semibold mb-4 text-gray-800">The Enclosures: Land Theft by Parliamentary Act</h3>
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          Between roughly 1500 and 1850, the English commons were systematically abolished. Through a
          series of Enclosure Acts — there were over 5,000 of them — Parliament transferred millions
          of acres of common land into private ownership. Hedges were built. Fences went up. People
          who had grazed their animals on common land for generations were told that the land now
          belonged to a landlord, and they were trespassing.
        </p>
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          The beneficiaries were almost exclusively the landowning aristocracy and the emerging
          capitalist class. The people who lost were the peasants, the cottagers, the rural poor —
          everyone who had depended on common land for subsistence. Almost overnight, they had nothing
          to sell but their labor. Which was, of course, the point.
        </p>
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          Silvia Federici, in <em>Caliban and the Witch</em>, documents how enclosure was not just an economic
          policy but a project of social discipline. Common land gave people an exit option. If you
          could grow food, gather wood, and graze animals on the commons, you were not entirely
          dependent on wages. Enclosure destroyed that independence. It created a class of people
          who had no choice but to work for whoever owned the means of production — because the
          alternative was starvation. The wage labor system that we now treat as natural was
          constructed, violently, through the expropriation of the commons.
        </p>
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          Contemporary observers were clear about what was happening. Oliver Goldsmith wrote in
          1770: &quot;a bold peasantry, their country&apos;s pride, when once destroyed can never be supplied.&quot;
          Thomas More, writing even earlier in <em>Utopia</em> (1516), described sheep eating men — the
          wealthy converting arable land to pasture for wool production, driving peasants off their
          holdings and into beggary. This was not invisible. It was obvious, condemned, and done
          anyway, because it served the interests of the powerful.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Karl Polanyi and the Great Transformation</h2>
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          The Hungarian economic historian Karl Polanyi gave this process its most rigorous analysis
          in <em>The Great Transformation</em> (1944). Polanyi identified what he called the &quot;fictitious
          commodities&quot; — things that were treated as market commodities but fundamentally were not:
          land, labor, and money.
        </p>
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          These things are not produced for sale. Land is not manufactured. Labor is human life —
          it cannot be separated from the person performing it. Money is a social institution, not
          a natural resource. Treating these as ordinary market commodities, Polanyi argued, was
          not a discovery of some natural economic order. It was a political project, violently
          enforced, that subordinated society to the market rather than the other way around.
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
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          This transformation happened in the late 20th century, and it was not inevitable. It
          was the product of specific policy decisions.
        </p>

        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Mortgage Deregulation and the Finance Flood</h3>
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          Until the 1970s and 1980s, housing in most wealthy countries operated under significant
          constraints. Mortgage credit was regulated. Interest rates were controlled. Speculation
          was limited. Housing was expensive relative to wages, but not catastrophically so —
          a significant portion of the working class could afford to buy homes or pay rents that
          left enough for a reasonable life.
        </p>
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          Then came financial deregulation. In the UK, the 1986 Big Bang deregulated financial
          markets. In the US, the Depository Institutions Deregulation and Monetary Control Act
          (1980) and the Garn-St. Germain Act (1982) loosened controls on mortgage lending.
          Pension funds, insurance companies, and eventually global investment capital were
          permitted — and encouraged — to flow into property markets.
        </p>
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          The effect was immediate and predictable. When you flood a market with cheap credit,
          prices rise. More money chasing the same supply of land drives up prices. Landlords
          found they could charge more. Speculators found they could buy property, hold it, and
          sell it at a profit — even without doing anything useful with it. Housing began to
          function less like shelter and more like stock: something you held as an investment,
          something that appreciated, something whose value came not from use but from the
          expectation that someone else would pay more for it in the future.
        </p>
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          This process has a name: financialization. It describes what happens when financial
          logic — returns, yields, asset appreciation — colonizes sectors of the economy that
          were previously governed by different values. Housing is the clearest example.
        </p>

        <h3 className="text-2xl font-semibold mb-4 text-gray-800">The Tax Subsidy for Property Owners</h3>
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          The financialization of housing was not just permitted by policy. It was actively
          subsidized. In the United States, the mortgage interest deduction allowed homeowners
          to deduct mortgage interest from taxable income — a benefit worth tens of billions of
          dollars a year, flowing predominantly to wealthy homeowners with large mortgages.
          Capital gains on property sales were taxed at lower rates than wages. In the UK,
          buy-to-let landlords could deduct mortgage interest as a business expense (a
          concession partially unwound only in 2017).
        </p>
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          At the same time, taxes on land value were abolished or allowed to atrophy. Land
          value tax — which falls on the unimproved value of the land itself, not the buildings
          on it — is one of the most economically efficient taxes ever theorized. It cannot be
          passed on to tenants (because it falls on the value that exists regardless of what
          is built there). It cannot be avoided by relocating or restructuring. It penalizes
          land banking and idle speculation. Virtually every serious economist across the
          political spectrum has endorsed it at some point.
        </p>
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          It has not been implemented anywhere at meaningful scale, because the people who own
          land also tend to own the political process.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Henry George and the Road Not Taken</h2>
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          In 1879, the American journalist and social theorist Henry George published
          <em> Progress and Poverty</em>. It became one of the bestselling books in the English-speaking
          world — read by Leo Tolstoy, George Bernard Shaw, Sun Yat-sen, Albert Einstein, and
          Winston Churchill. Its central argument is still one of the most radical and most
          correct analyses of capitalism ever written.
        </p>
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          George noticed a paradox: as societies became richer through industrial progress, poverty
          was not declining. It was increasing. Workers produced more, but they captured less of
          what they produced. Where was the wealth going?
        </p>
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          To the landowners. George observed that the gains from economic progress — better
          infrastructure, denser cities, rising productivity — almost automatically accrued to
          those who owned land in the right places. A railway line is built through a city.
          Everyone who owns land near the stations becomes richer, simply by owning. They did
          nothing. They produced nothing. But the value of their land increased because of
          collective investment in public infrastructure. This value — which George called
          &quot;economic rent&quot; — was extracted by private landowners who had done nothing to create it.
        </p>
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          His solution was elegant: tax away all economic rent through a single land value tax.
          Leave the returns to labor and capital, but capture for the public the value that
          society collectively creates through its presence and investment. Abolish all other
          taxes. Fund public goods directly from the wealth that belongs to the commons.
        </p>
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          George&apos;s ideas terrified the landowning classes precisely because they were so hard
          to argue against on purely economic grounds. The pushback came not from rational
          refutation but from political suppression. His Single Tax movement was deliberately
          marginalized in economic education over the following decades. Standard economics
          textbooks folded &quot;land&quot; into &quot;capital,&quot; erasing the distinction that made George&apos;s
          analysis so dangerous.
        </p>
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          That erasure was not an accident. It was politically useful. If land is just another
          form of capital, there is nothing special about landownership — no need to treat it
          differently, tax it differently, or question it at all.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Who Benefits from High House Prices</h2>
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          The housing crisis is presented as a problem that everyone shares — as if rising house
          prices hurt everyone equally. This is false. Whether high house prices hurt you or
          help you depends entirely on your relationship to property ownership.
        </p>
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          For renters — who are disproportionately young, working-class, and from racial minorities
          in most wealthy countries — high house prices are catastrophic. They mean spending
          30%, 40%, sometimes 50% of income on housing. They mean geographic immobility, being
          unable to move to better jobs. They mean no asset accumulation, no inheritance to pass
          on. They mean being perpetually subject to the decisions of a landlord who can raise
          rent, sell up, or evict.
        </p>
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          For homeowners with mortgages — a large and politically important constituency in
          wealthy countries — high house prices are a mixed blessing. They feel wealthy on paper.
          Their home is their pension plan, their buffer against adversity. They have strong
          incentives to support policies that keep prices high, oppose new construction that
          might bring prices down, and vote against land value taxes that might fall on them.
          This is not false consciousness. It is rational behavior given the system they are
          embedded in. The system has made their retirement security dependent on housing
          scarcity.
        </p>
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          For large-scale property investors — developers, REITs, private equity firms, offshore
          wealth funds — high house prices are straightforwardly profitable. They hold assets
          that appreciate. They extract rent. They use housing scarcity as a business model.
          Blackstone alone owns more than 300,000 rental homes in the United States.
        </p>
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          This is not a bug. This is the intended function of a financialized housing market.
          The question of why housing is so expensive cannot be answered with supply and demand
          alone, because supply and demand do not explain why the political system consistently
          chooses policies that inflate prices and benefit owners over renters, speculators over
          people who need somewhere to live.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Why Renting Doesn&apos;t Build Wealth</h2>
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          The question of why owning property builds wealth while renting doesn&apos;t is usually
          answered with platitudes about equity and investment. But the real answer is structural.
        </p>
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          When you rent, you pay for shelter. You get shelter. At the end of your tenancy, you
          have nothing. When you own, you also pay for shelter — but simultaneously, in a
          financialized housing market, you hold an asset that appreciates. You are not just
          paying for somewhere to live. You are capturing the rising value of land — value
          created by the collective activity of the city around you, not by anything you did.
        </p>
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          This is George&apos;s insight applied to the personal scale. The homeowner benefits from
          economic rent — the rising value of location — while the renter pays it.
        </p>
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          But this means wealth accumulation through homeownership is not a reward for thrift
          or hard work. It is a transfer of value from renters to owners — a structural
          mechanism that enriches those who already have assets at the expense of those who
          don&apos;t. It is one of the primary engines of intergenerational wealth inequality in
          wealthy countries, and it operates completely independently of anyone&apos;s individual
          choices or merit.
        </p>
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          The policy implication should be obvious: if you want to reduce wealth inequality,
          you need to change the system that makes housing an investment vehicle. But changing
          that system means reducing house prices, which means hurting the asset values of
          the homeowning class — who also happen to be the most politically engaged, the most
          likely to vote, the most likely to donate to political parties.
        </p>
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          This is why the housing crisis is not an oversight or a failure of policy. It is
          the outcome of a political system responsive to property owners and unresponsive
          to those without property. Democracy and capitalism have a problem when the
          distribution of political voice tracks the distribution of wealth.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Colonial Enclosure: The Same Story, Globally</h2>
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          The enclosure of common land that created English capitalism was not a uniquely English
          event. It was a template that European colonialism exported across the globe, with
          catastrophic and still-unresolved consequences.
        </p>
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          In Africa, Asia, and the Americas, colonizers encountered land-use systems that looked
          like the English commons — communal, governed by custom, not alienable as private
          property. They proceeded to enclose them. The legal instruments varied: homestead
          acts, crown land declarations, native reserve systems, registration requirements that
          extinguished customary rights. The logic was identical: define common land as
          &quot;unoccupied&quot; or &quot;waste,&quot; vest it in colonial state or private ownership, and
          force the people who depended on it into the wage economy.
        </p>
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          The hut tax — imposed across British Africa in the late 19th and early 20th centuries —
          was a precise mechanism for this: tax people in cash for the right to live in their
          own homes, then force them to seek wage labor when they couldn&apos;t pay. Land enclosure
          and labor coercion were not separate policies. They were two sides of the same coin.
        </p>
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          The legacies persist. In many formerly colonized countries, the dual land tenure systems
          created by colonialism — formal private title coexisting uneasily with customary land
          rights — remain unresolved. Millions of people hold land by custom but not by title,
          making them vulnerable to dispossession by the same logic that destroyed the English
          commons: formal legality overriding lived legitimacy.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">What the Supply Argument Gets Wrong</h2>
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          The supply argument for housing affordability is not entirely wrong. Building more
          homes does, in general, reduce upward pressure on prices in a given market. Restrictive
          zoning does contribute to scarcity. NIMBYism is a real phenomenon with real costs.
          Anyone who denies this entirely is not engaging seriously with the evidence.
        </p>
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          But the supply argument, taken alone, is radically insufficient for several reasons.
        </p>
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          First, in a financialized housing market, new supply does not automatically become
          affordable housing. Developers build for the most profitable segment of the market.
          In cities with extreme land costs, that means luxury development. New luxury supply
          may eventually filter down over decades, but the timeline is cold comfort for people
          who need housing now, and the &quot;filtering&quot; process depends on assumptions about
          mobility and substitution that don&apos;t hold reliably in tight markets.
        </p>
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          Second, the supply argument sidesteps the question of ownership. Even if you build
          enough homes to house everyone, if those homes are owned by private investors and
          rented at market rates, you have not solved the problem of housing insecurity — you
          have merely displaced it. The wealth transfer from renters to owners continues. The
          political economy of housing remains unchanged.
        </p>
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          Third, and most fundamentally, the supply framing accepts land privatization as
          an unchallengeable given. It asks how we can produce more housing within a
          financialized system, rather than asking why housing is financialized in the first
          place. It is a technical question posed in place of a political one.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">What Would Actually Change Things</h2>
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          The demand for &quot;realistic&quot; policy solutions to the housing crisis tends to confine itself
          to what the landowning class will accept. This is a mistake. History suggests that when
          housing crises become severe enough, states have intervened far more dramatically than
          supply-side economists recommend.
        </p>

        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Land Value Tax</h3>
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          A meaningful land value tax — as George proposed — would fundamentally change the
          incentive structure of land ownership. It would penalize idle speculation and land
          banking. It would reduce the incentive to hold land as a pure investment. It would
          make development more attractive relative to sitting on land and waiting for values
          to rise. Every serious economist who has looked at it endorses its logic. The
          political barriers are not intellectual — they are a direct expression of
          concentrated landowning power.
        </p>

        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Social Housing at Scale</h3>
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          Vienna has maintained a system of municipal housing — Gemeindebau — for over a century.
          Roughly 60% of Vienna&apos;s population lives in publicly subsidized housing. Rents are
          capped. Tenure is secure. The housing market is not left to be governed purely by
          private capital. The result: Vienna consistently ranks among the world&apos;s most
          livable cities, with housing costs that are a fraction of London&apos;s or San Francisco&apos;s.
        </p>
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          This is not a fantasy from an imaginary society. It exists. It has existed for a
          century. The question is not whether publicly organized housing can work — it demonstrably
          can. The question is why English-speaking governments systematically dismantled their
          public housing stock from the 1980s onward, sold it off at below-market prices to
          private buyers (often the same people living in it), and then made it impossible to
          replace by prohibiting councils from reinvesting the proceeds in new social housing.
        </p>
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          That was not an economic decision. It was a political decision — a transfer of assets
          from the public to the private, and a deliberate reduction in the state&apos;s capacity
          to provide shelter outside the market.
        </p>

        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Rent Control and Tenant Protections</h3>
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          Rent controls have a complicated empirical record — badly designed controls can reduce
          supply in the long run. But the economic consensus against rent controls is often
          presented as cleaner than it is. Rent controls in cities with strong tenant protections
          and coordinated housing policy — Germany, the Netherlands, Sweden — do not produce the
          dire outcomes that Anglo-American economists predict. What they produce is security:
          the ability of people to remain in their homes, their neighborhoods, and their
          communities without being forced out by market-rate rent increases.
        </p>
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          Security of tenure is not a luxury. It is a precondition for human flourishing —
          for building community, raising children, aging in place, belonging somewhere. A
          housing system that treats security of tenure as economically unaffordable has
          inverted the relationship between the economy and human life.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">The Connection to Debt, Work, and Enclosure</h2>
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          The housing crisis is not a separate problem from the other crises of contemporary
          capitalism. It is a node in the same network.
        </p>
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          The original English enclosures created a class of people who had no land, no
          commons, no alternative to selling their labor. Today&apos;s housing crisis performs
          an analogous function: it ties workers to expensive cities because that is where
          the jobs are, extracts a large portion of their wages as rent, prevents asset
          accumulation among the non-owning class, and makes it economically catastrophic
          to withdraw from the labor market. High housing costs are not just a burden.
          They are a mechanism of labor discipline.
        </p>
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          The connection to debt is equally direct. When people cannot afford to buy homes
          outright — and in financialized housing markets, they increasingly cannot — they
          must borrow. The mortgage is the primary mechanism by which most working-class
          homeowners in wealthy countries have historically accessed the housing market.
          But the mortgage is also debt: decades of obligation to a financial institution,
          which in turn profits enormously from the interest. The 30-year mortgage is not
          the natural way to buy housing. It is a financial product invented in the 20th
          century, which transformed housing from a thing you owned into a stream of
          payments you made to a bank.
        </p>
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          As Graeber argues in <em>Debt: The First 5,000 Years</em>, debt is not just a financial
          relationship. It is a social relationship of power — one in which the creditor has
          leverage over the debtor&apos;s choices, time, and freedom. A population in mortgage
          debt is a population that cannot easily strike, quit, organize, or leave. This is
          not an unfortunate side effect of the housing market. It is one of its functions.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">The Founding Fiction of Land</h2>
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          We began with the barter myth: the foundational fiction of economics that makes
          the current market order look natural and inevitable. Land privatization is a
          parallel fiction — the idea that the current arrangement of land ownership
          reflects something deep and permanent about human society, rather than a
          historically specific and violently enforced set of property relations.
        </p>
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          John Locke, the philosopher whose ideas underpinned modern Anglo-American property
          theory, argued that property rights in land arise from &quot;mixing your labor&quot; with
          it: if you cultivate a piece of land, you have a natural right to it. But this
          theory, however elegant, was written to justify colonial land seizure — specifically
          to argue that Indigenous peoples who did not use land in ways recognizable to
          English eyes had forfeited their rights to it. It was ideology in service of theft,
          dressed as philosophy.
        </p>
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          The current housing crisis is a downstream consequence of decisions made centuries
          ago about what could be owned, by whom, under what conditions. Those decisions were
          not made by markets. They were made by states, for the benefit of the powerful.
          They can be unmade by states, if the political will exists.
        </p>
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          The question is not whether housing can be decommodified. History shows clearly
          that it can be, and that when it is, people live better. The question is who has
          the power to keep it commodified, why they use that power as they do, and what
          it would take to change the balance.
        </p>
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          That is not a question with a technical answer. It is a political question. And
          like all political questions, the answer depends on what the people without power
          decide to do about the people who have it.
        </p>
      </section>

      {/* Further Reading */}
      <section className="mb-12 bg-gray-50 border border-gray-200 rounded-xl p-8">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Go Deeper</h2>
        <p className="text-lg text-gray-700 mb-6">
          This article is part of an ongoing series on the political economy of everyday life.
          Related reading from Left Diary:
        </p>
        <ul className="space-y-3">
          <li>
            <Link href="/posts/humans-never-bartered-barter-myth" className="text-gray-800 font-medium hover:text-gray-600 underline decoration-gray-300 hover:decoration-gray-600 transition-all">
              Humans Never Bartered: The Economic Myth That Justifies Everything
            </Link>
            <span className="text-gray-600"> — how the founding story of economics was invented to make the market look natural</span>
          </li>
          <li>
            <Link href="/posts/federici-caliban-witch-capitalism" className="text-gray-800 font-medium hover:text-gray-600 underline decoration-gray-300 hover:decoration-gray-600 transition-all">
              Federici&apos;s Caliban and the Witch: How Capitalism Was Built on Women&apos;s Bodies
            </Link>
            <span className="text-gray-600"> — the enclosures, the witch trials, and the violent construction of capitalism</span>
          </li>
          <li>
            <Link href="/posts/graeber-bullshit-jobs-summary" className="text-gray-800 font-medium hover:text-gray-600 underline decoration-gray-300 hover:decoration-gray-600 transition-all">
              Graeber&apos;s Bullshit Jobs: Why Modern Work Is Meaningless by Design
            </Link>
            <span className="text-gray-600"> — why high housing costs make the disciplining function of work more effective</span>
          </li>
        </ul>
      </section>

      {/* Series callout */}
      <section className="mb-12 bg-gray-900 text-white rounded-xl p-8">
        <h2 className="text-2xl font-semibold mb-4">The System Is Rigged: Understanding How</h2>
        <p className="text-lg text-gray-300 mb-4">
          This article is part of Left Diary&apos;s ongoing series examining the political and historical
          roots of the systems that feel natural but were deliberately built: money, land, debt, work.
          None of it was inevitable. All of it was chosen, by people with interests, against the
          interests of people who had less power.
        </p>
        <p className="text-lg text-gray-300">
          Understanding the construction is the first step toward imagining the reconstruction.
        </p>
      </section>

      <footer className="border-t border-gray-200 pt-8 text-sm text-gray-500">
        <p className="mb-2">
          <strong>Primary sources and further reading:</strong> Karl Polanyi, <em>The Great Transformation</em> (1944);
          Henry George, <em>Progress and Poverty</em> (1879); Silvia Federici, <em>Caliban and the Witch</em> (2004);
          David Graeber, <em>Debt: The First 5,000 Years</em> (2011); E.P. Thompson, <em>The Making of the English
          Working Class</em> (1963); Josh Ryan-Collins, Toby Lloyd, and Laurie Macfarlane, <em>Rethinking the
          Economics of Land and Housing</em> (2017).
        </p>
      </footer>

    </article>
  );
}
