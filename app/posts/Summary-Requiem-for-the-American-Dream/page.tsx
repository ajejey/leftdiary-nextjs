import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

  export const metadata: Metadata = {
    title: 'Requiem for the American Dream - Noam Chomsky',
    description: 'Requiem for the American dream is a book where Noam Chomsky gives us a set of 10 principles that were adopted since the beginning of the 1970s elaborating on how neoliberalism basically destroyed the notion of democracy and completely changed the face of human history to bring an unprecedented level of inequality, irreversible climate change and a hopeless future for the human society',
  };

export default function RequiemForTheAmericanDream() {
  return (
    <article className="container mx-auto px-4 py-8 max-w-4xl">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Requiem for the American Dream - Noam Chomsky</h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
          <span>Author: Noam Chomsky</span>
          <span>Category: Neoliberalism, Capitalism</span>
        </div>
      </header>

      <div className="text-center mb-8">
        <a href="https://amzn.to/2WzdiXw" rel="noreferrer noopener" target="_blank" className="inline-block">
          <Image 
            src="/images/cover_pages/Requiem_small.jpg" 
            alt="Cover Photo of the book Requiem for the American Dream" 
            width={200} 
            height={300} 
            className="mb-2"
          />
          <span className="text-blue-600 hover:underline">Get the book</span>
        </a>
      </div>

      <div className="mb-8 p-4 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Peek in</h2>
        <ul className="space-y-2">
          <li><a href="#summary" className="text-blue-600 hover:underline">Summary in one line</a></li>
          <li><a href="#takeaways" className="text-blue-600 hover:underline">Three takeaways from the book</a></li>
          <li><a href="#learnings" className="text-blue-600 hover:underline">What can be learnt from the book</a></li>
          <li><a href="#author" className="text-blue-600 hover:underline">The Author</a></li>
          <li><a href="#talks" className="text-blue-600 hover:underline">Talks by the Author about the book</a></li>
        </ul>
      </div>

      <section id="summary" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Summary in one line:</h2>
        <p>Requiem for the American dream is a book where Noam Chomsky gives us a set of 10 principles that were adopted since the beginning of the 1970s elaborating on how neoliberalism basically destroyed the notion of democracy and completely changed the face of human history to bring an unprecedented level of inequality, irreversible climate change and a hopeless future for the human society.</p>
      </section>

      <section id="takeaways" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Three takeaways from the book:</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>We live in a society that is called &apos;democracy&apos; but the general population has no power or say over policies that affect their own lives</li>
          <li>The top 1%, the major corporations, basically make the policies that ensure their profits and security.</li>
          <li>The general population is kept from having a say in policies by increasing their insecurity and engineering their consent.</li>
        </ul>
      </section>

      <section id="learnings" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What can be learnt from the book:</h2>
        
        <p className="mb-4">Noam Chomsky recalls his childhood days, when the economy of going through The Great Depression. Chomsky points that there was hope that things are going to be brighter in the future. It was a time of a lot of political radicalism — one with justice, equality and freedom. But now in the present time, it feels like it&apos;s all over with no hope for the future. Inequality in present time has been the worst in American history and it comes from the extreme wealth of the fraction of 1 percent.</p>
        
        <p className="mb-4">This happened due to the shift in the socio economic policy, shift to a policy that provides enormous benefits to the very rich and completely acts against the will of the general population. The idea — that if you are born poor, you work hard and you get rich — has collapsed.</p>
        
        <p className="mb-4">The meaning of democracy is that the public participate in policy making and the determine the actions carried out by the government. The power lies in the hands of the people and away from the privileged and the powerful. But that&apos;s not what we see today.</p>
        
        <p className="mb-4">What we see today is a cycle — when there are elections, politicians spend enormously that are funded by major corporations, to get elected. This political power then quickly translates into legislation that increases the concentration of wealth and this in turn yields more political power to do the same thing again. This was actually described by Adam Smith in 1776 in his Wealth of Nations. And in the absence of reaction from the general population, you&apos;d expect it to continue until it harms everyone else.</p>
        
        <p className="mb-4">Chomsky outlines 10 principles that were undertaken which lead to extreme concentration of wealth and power:</p>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Principle 1: Reduce Democracy</h3>
        <p className="mb-4">It can easily be seen that when you have Democracy, everyone would vote freely. And the poor, who are the majority, will organize and take away the property of the rich — which would be called land reform. The poor would take away what was theirs before the rich took it from them. The rich wouldn&apos;t let that happen. So a constitutional system was setup in the United States to prevent democracy and to ensure the property of the opulent is not interfered with.</p>
        
        <p className="mb-4">Aristotle, when he discussed democracy, came across the same problem — of majority, the poor, organizing and taking their property back from the rich. His solution was to reduce the inequality between the poor and the rich. It was not handing over power to the people, but something like a welfare state, where the rich distribute public meals and the like, to keep the poor from revolting.</p>
        
        <p className="mb-4">So the history is a constant struggle between two tendencies — a democratizing tendency, and a tendency of concentration of wealth and power. The democratizing tendency has won many victories such as women&apos;s rights, freeing of slaves, labor movements etc. But the reaction to these democratizing effects — the economic forces, the disciplinary techniques that would be used to deal with it, were unimaginable.</p>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Principle 2: Shape Ideology:</h3>
        <p className="mb-4">In the beginning of the &apos;70s the very rich started feeling persecuted and felt there was an "excess of democracy" and decided to fight back their power.</p>
        
        <p className="mb-4">To begin with, they were particularly concerned with the fact that young people were getting too free and independent and said there was a failure on the part of the schools, universities, and churches in "indoctrination of the young". Hence proposals were made and changes were implemented. For example, college tuitions are made ridiculously high, which keep the students in debt for life. This makes sure that they devote themselves to subordination to power. Same with schools — education is reduced to mechanical skills, undermining creativity and independence. The slogans like "teaching to the test", "No child left behind", "Race to the top" are methods of indoctrination and control.</p>
        
        <p className="mb-4">Then the media, which was out of control, was brought in line. The media never mentions the private business anymore. The private businesses are allowed to have lobbyists, buy campaigns, make decisions etc, but the general population is subdued.</p>
        
        <p className="mb-4">Shaping ideology of the population was one thing but the major backlash by the rich came when they redesigned the economy.</p>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Principle 3: Redesign the economy:</h3>
        <p className="mb-4">Before the &apos;70s the US economy was largely based on production. Financial institutions like banks were small part of the economy. There was no speculation against currency. That was completely dismantled and enormous changes in the financial sector from traditional banks to risky investments, complex financial instruments, money manipulations etc., were brought about.</p>
        
        <p className="mb-4">Production of goods was shifted to places where there is cheaper labor, no environmental regulations etc, consciously to hollow out the production in the US. Through this, the businesses make money, the population does not. The trade system is then explicitly designed to put working people in competition with each other all over the world while the highly paid professionals are protected. Capital is free to move but labor can&apos;t move. The very foundation of a "free trade system" was destroyed.</p>
        
        <p className="mb-4">Policies were designed to increase worker insecurity. This is to keep them from asking decent wages or working conditions or opportunity to unionize. This is done by making people go deeper and deeper into debt, getting them to buy worthless assets, at inflated housing prices, giving them an illusion of wealth. This has led to a disciplinary effect — less freedom, less leisure, less time for thought etc.</p>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Principle 4: Shift the burden:</h3>
        <p className="mb-4">The "Plutocrats" as Chomsky calls them, soon realized that their portfolio outperforms the market when they invest in the products made for the ultra-rich. So they began investing only for the small percentage of the population that are wealthy. The concern for the rest of the population was substantially lessened. The powerful state subsidizes the research and development, provides bailouts with taxpayer&apos;s money when corporations fail. But what happens to the rest of the population was of no concern. The working people, the "Precariats" live insecure, precarious lives, getting by if they can, and suffering in various ways. Corporate taxes used to be much higher in the &apos;50s and &apos;60s and that changed in the &apos;70s. The Plutocrats brought policies that lifted the tax on dividends and shifted the tax burden on to the wages and consumption. The major American corporations shifted the burden of sustaining the society on the rest of the population by doing this.</p>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Principle 5: Attack solidarity:</h3>
        <p className="mb-4">In a normal functional society people are in solidarity, which means people have empathy for one another and act in ways that benefits everyone in the society. The "masters of mankind" realized this is not good for the market and people are only supposed to care about themselves and not others. Social security, public healthcare, public education systems are all ways of showing solidarity in a society.</p>
        
        <p className="mb-4">Such institutions are first defunded. When they are defunded, they can&apos;t operate efficiently.</p>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Principle 6: Run the Regulators:</h3>
        <p className="mb-4">Soon, the regulators who regulate the corporations started getting run by the corporations themselves. The business being regulated is in fact running the regulators. This lead to deregulations, and in-turn lead naturally to financial crashes. And when the markets crash, the businesses don&apos;t pay the cost. Instead the government bails them out without any trial using the tax payer&apos;s money.</p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Principle 7: Engineer Elections:</h3>
        <p className="mb-4">The fourteenth amendment is interpreted in a way that corporations and business are treated as persons and get the same rights as people. And actual people, who maybe undocumented, are shown to be non-persons. This perversion of morality is quite incredible. As an extension of that, corporation also won the right of free speech — mainly to spend as much money as they want without constraint. This doesn&apos;t just get their candidates in, it buys privileged access to the staff of the legislator who write laws that favor the corporations.</p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Principle 8: Keep the rabble in line:</h3>
        <p className="mb-4">Labor unions are a very strong force that is at the forefront of the efforts of improvement of the general population. After the Second World War, massive corporate propaganda offensives began that attacked labor unions. They took over the educational systems, sports leagues, churches and almost everything. Words like labor unions, class consciousness were made into "dirty" words, and people couldn&apos;t say them anymore along with the words like communism and socialism.</p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Principle 9: Manufacture Consent:</h3>
        <p className="mb-4">It had become clear to the plutocrats that it&apos;s not easy to control the population by force. In every state, whether feudal, militaristic, authoritative, or democratic, power lies in the hands of the people. As long as they are made to feel that they are powerless, the powerful can rule them. From this understanding raised the Public Relation (PR) industry. The way it is done is by "engineering of consent" of the population to what the masters decide. The advertising industry exploded, with the goal of fabricating consumers and trapping people into consumerism, with great sophistication — a perfect system where everyone is in control. Simply put, advertising is, creating uninformed consumers who will make irrational choices.</p>
        
        <p className="mb-4">The PR same industry handles the election system too, creating an uninformed electorate that will make irrational choices, often against their own interests. This turns the people into being spectators, and not participants in a democracy. This is called as a "properly functioning democracy" when people are marginalized, atomized and their attitudes and concerns are directed away from what really matters in a free and vibrant democratic society. The plutocrats understand very well that the general population is inherently rational. That is why hundreds of millions of dollars are spent and huge efforts are put to turn people into irrational creatures.</p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Principle 10: Marginalize the population:</h3>
        <p className="mb-4">Policies today have no correlation with public attitude, but they are very closely correlated to corporate interests. This doesn&apos;t come as a surprise as the government policy is designed for the corporate power; the welfare of the population is often not cared for at all.</p>
        
        <p className="mb-4">This doesn&apos;t mean the general population doesn&apos;t get angry. In fact they are extremely angry — the governments are disliked, presidency is disliked, corporations are disliked and even science is disliked. But it is made sure that the anger is kept unfocused. The unfocused anger is directed towards hatred and attacks on each other and on the vulnerable. Through this hatred, people start supporting political figures whose goal is to harm them as much as possible. People hate and fear each other, look out only for themselves and do nothing for anyone else. If a society is based on control by private wealth, it will reflect those values— values of greed and the desire to maximize personal gains at the expense of others.</p>
      </section>

      <section id="author" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">The author</h2>
        
        <figure className="mb-4 text-center">
          <Image 
            src="/images/Noam_Chomsky.jpg" 
            alt="Picture of Noam Chomsky" 
            width={400} 
            height={300} 
            className="mx-auto mb-2"
          />
          <figcaption className="text-sm text-gray-600">
            Picture of Noam Chomsky | Photo Credit <a href="https://commons.wikimedia.org/wiki/File:Noam_Chomsky_Toronto_2011.jpg" className="text-blue-600 hover:underline">Andrew Rusk</a>
          </figcaption>
        </figure>
        
        <p className="mb-4">Avram Noam Chomsky is an American philosopher, linguist, cognitive scientist, historian, social critic, and political activist. Sometimes called <strong>The Father of modern Linguistics</strong>. Known as one of the <strong>most important intellectuals of our time</strong>.</p>
      </section>

      <section id="talks" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Requiem for the American Dream documentary film</h2>
        <div className="aspect-w-16 aspect-h-9 mb-4">
          <iframe 
            title="Requiem for the American Dream documentary film" 
            src="https://www.youtube.com/embed/wp6Rbgv1MLg" 
            width="640" 
            height="360" 
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            className="w-full h-full rounded"
          ></iframe>
        </div>
      </section>
    </article>
  );
}

