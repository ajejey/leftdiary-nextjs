import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Socialism in Fiction - A Beginner's Guide to Leftist Novels",
  description: "A beginner's guide to leftist novels. Discover powerful stories of resistance and resilience, and learn about the struggles and triumphs of marginalized communities.",
  openGraph: {
    title: "Socialism in Fiction - A Beginner's Guide to Leftist Novels",
    description: "A beginner's guide to leftist novels and fiction.",
    images: ['/images/cover_pages/Socialism-in-Fiction.jpeg'],
  },
};
interface BookSectionProps {
  number: number;
  title: string;
  amazonLink: string;
  imageUrl: string;
  children: React.ReactNode;
}

const BookSection = ({ number, title, amazonLink, imageUrl, children }: BookSectionProps) => (
  <section className="mb-16 border-b pb-10">
    <div className="flex flex-col md:flex-row gap-8 items-start">
      <div className="md:w-1/4 text-center flex-shrink-0 mx-auto">
        <Link href={amazonLink} target="_blank" rel="noopener noreferrer" className="inline-block transition-transform hover:scale-105">
          <Image
            src={imageUrl}
            alt={title}
            width={200}
            height={450}
            className="rounded-md shadow-lg mx-auto"
          />
        </Link>
        <Link href={amazonLink} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          Get the Book
        </Link>
      </div>
      <div className="md:w-3/4">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">
          <Link href={amazonLink} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
            {number}. {title}
          </Link>
        </h2>
        <div className="text-xl leading-relaxed text-gray-700 space-y-4">
          {children}
        </div>
      </div>
    </div>
  </section>
);

export default function BeginnerLeftistNovels() {
  return (
    <article className="max-w-4xl mx-auto px-5 py-12 font-serif">
      <header className="text-center mb-16">
        <div className="mb-8">
            <Image 
                src="/images/cover_pages/Socialism-in-Fiction.jpeg"
                width={600}
                height={400}
                alt="Socialism in Fiction"
                className="rounded-lg shadow-md mx-auto"
                priority
            />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Socialism in Fiction - A Beginner&apos;s Guide to Leftist Novels</h1>
        <div className="text-gray-600">
            <span>By Left Diary</span>
            <span className="mx-2">â¢</span>
            <span>August 20, 2023</span>
        </div>
      </header>

      <section className="text-xl leading-relaxed text-gray-700 space-y-6 mb-16 border-b pb-10">
        <p>For those beginning a journey into leftist thought, fiction can be a powerful and humanizing entry point. Novels have the unique ability to translate abstract theories of class, power, and justice into the lived experiences of characters, making complex ideas resonate on an emotional level. The following list gathers essential novels that, each in their own way, offer a profound critique of systemic inequality and a vision for a more just world.</p>
        <p>These stories explore the devastating impact of capitalism, the importance of collective struggle, and the resilience of the human spirit in the face of oppression. They are not just stories; they are tools for understanding the world and imagining how it might be changed.</p>
      </section>

      <BookSection
        number={1}
        title="The Jungle by Upton Sinclair"
        amazonLink="https://amzn.to/3P2BsoP"
        imageUrl="https://d1b14unh5d6w7g.cloudfront.net/B09QNW9MHR.01.S001.JUMBOXXX.jpg?Expires=1692608536&Signature=WvTTDIFg3Xdc9ZKSrH~7nIifCUeKz6VpV-26HCNCqHfQ43lOcs1kWc7rOgS~5HggfrTpBz9Q9Jk~dYYmQyl7y5EALvCyWKNGnmk9XEO-HUkA8vHI9V92mfiAJtPUIgAiZvvIBj9KLbtlheqkP2-M5pC051iG8EKZD7cNW79ZuNE_&Key-Pair-Id=APKAIUO27P366FGALUMQ"
      >
        <p>Sinclair&apos;s 1906 novel is a visceral indictment of raw, unregulated capitalism. Following a Lithuanian immigrant family in Chicago&apos;s meatpacking industry, it exposes a system where human beings are treated as disposable cogs in a profit-making machine. The horrific working conditions and institutional corruption serve as a powerful argument that the "American Dream" is a cruel illusion for the working class. The novel&apos;s ultimate turn towards socialism is presented as the only rational and humane alternative to the barbarism of the industrial slaughterhouse.</p>
        <blockquote className="pl-4 border-l-4 border-gray-300 italic my-4">
            <p>"I aimed at the public&apos;s heart, and by accident I hit it in the stomach."</p>
        </blockquote>
      </BookSection>

      <BookSection
        number={2}
        title="The Grapes of Wrath by John Steinbeck"
        amazonLink="https://amzn.to/44dTOZj"
        imageUrl="https://d1b14unh5d6w7g.cloudfront.net/0143039431.01.S001.JUMBOXXX.jpg?Expires=1692609827&Signature=aChZVgOEcuseuTg39GxFyQwX1Otd53J95ioy5U7kxl~4GdU5lHNSqrrMNBdTBIkAkSnNPyGAIg3vuwhoj2F~PXa7ThfzK09hX0xPp5X3xb0zwjm6V2GKvadyJgBjR5hNJvBV3G3UCh42uzQ7jl4GIqHz1k1Hxpu2VNjSjwouQzA_&Key-Pair-Id=APKAIUO27P366FGALUMQ"
      >
        <p>A cornerstone of American social protest literature, this novel chronicles the Joad family&apos;s dispossession during the Great Depression. Steinbeck critiques a capitalist system where banks become faceless monsters and food is destroyed to maintain prices while people starve. The novel powerfully illustrates the shift from individual struggle ("I") to collective consciousness ("We"), arguing that solidarity is the only defense against the dehumanizing forces of capital.</p>
        <blockquote className="pl-4 border-l-4 border-gray-300 italic my-4">
            <p>"In the souls of the people the grapes of wrath are filling and growing heavy, growing heavy for the vintage."</p>
        </blockquote>
      </BookSection>

      <BookSection
        number={3}
        title="To Kill a Mockingbird by Harper Lee"
        amazonLink="https://amzn.to/45yDgwm"
        imageUrl="https://d1b14unh5d6w7g.cloudfront.net/0060935464.01.S001.JUMBOXXX.jpg?Expires=1692609980&Signature=CCBa-XTHBujdbLZ6bRr5qiSfBZqtyzcMEacYBAHP84Gnx82MWsjVGZvNTHpzFHBbhmtAPYGU8i1KoEmsWhvWNZKAxX8bjdEnAqdxfhH1Tez~mxmSAlQDZJspsCgLaJtKBjMlymhc78A9182LlnFpzD4R86EMV5ZI1~Kz7ZfD1V8_&Key-Pair-Id=APKAIUO27P366FGALUMQ"
      >
        <p>While often framed as a simple morality tale, the novel provides a sharp critique of the intersection of class and racial hierarchies in the American South. A leftist reading reveals how the legal system functions not as a dispenser of justice, but as a tool to uphold the existing social order. The poorest, most despised white family, the Ewells, are still granted more power and credibility than a respectable Black man, Tom Robinson, demonstrating how racism is used to divide and control the lower classes.</p>
        <blockquote className="pl-4 border-l-4 border-gray-300 italic my-4">
            <p>"You never really understand a person until you consider things from his point of view... until you climb into his skin and walk around in it."</p>
        </blockquote>
      </BookSection>

      <BookSection
        number={4}
        title="The Handmaid&apos;s Tale by Margaret Atwood"
        amazonLink="https://amzn.to/3P1SpRo"
        imageUrl="https://d1b14unh5d6w7g.cloudfront.net/038549081X.01.S001.JUMBOXXX.jpg?Expires=1692611623&Signature=MAiU1inO9~8ni8oolT1QP1od1AbXw-kurOPAa5CAMGj4Q2elNA2X7Ry6JRFlUQ59r0V1EIv7g01t3l9tD3iAFGrA3aHT9UUFjYHV7o33eKBSN48BYzKHkv9oKJBjaqFiD1yBDNT1zphAKxmi03bbgZrOYBevDRLJpupL7J5BcUM_&Key-Pair-Id=APKAIUO27P366FGALUMQ"
      >
        <p>Atwood&apos;s dystopian masterpiece is a crucial text for understanding the intersection of feminist and leftist critique. It portrays a theocratic totalitarian state, Gilead, where women are reduced to their reproductive function, a stark illustration of the commodification of the human body. The novel serves as a powerful allegory for how patriarchal control, religious extremism, and a rigid class structure are used to strip individuals of their autonomy and humanity, making it a vital warning against right-wing backlash.</p>
        <blockquote className="pl-4 border-l-4 border-gray-300 italic my-4">
            <p>"Better never means better for everyone... It always means worse, for some."</p>
        </blockquote>
      </BookSection>

      <BookSection
        number={5}
        title="The Brief Wondrous Life of Oscar Wao by Junot DÃ­az"
        amazonLink="https://amzn.to/3siEM7r"
        imageUrl="https://d1b14unh5d6w7g.cloudfront.net/1594483299.01.S001.JUMBOXXX.jpg?Expires=1692611522&Signature=ClgRd5F~NskEC-xwABtvtAZRlfrv5crtj7wlbL-8QoUIOvQo98u~NRrTPbrXRv4PAEqkzxq~MkQKum1r~dRrKwad~BImAp1i3F-WmnZ~~dI7kE2EhYymS5UK5yVhUVxHi5uEwHl61NUTmELxGqZ78Fug6Ukr7QQjs2WegP~P4AE_&Key-Pair-Id=APKAIUO27P366FGALUMQ"
      >
        <p>This novel offers a searing critique of authoritarianism and the enduring trauma of colonialism through the story of a Dominican-American family haunted by the legacy of the Trujillo dictatorship. The extensive footnotes provide a historical counter-narrative, detailing the brutalities of the regime and the complicity of U.S. imperialism. It is a profound exploration of how personal history is inescapably shaped by political power, diaspora, and the struggle for self-definition against oppressive forces.</p>
        <blockquote className="pl-4 border-l-4 border-gray-300 italic my-4">
            <p>"But if these years have taught me anything it is this: you can&apos;t run away from the fukÃº. You can&apos;t hide from it... The fukÃº, in the end, will always find you."</p>
        </blockquote>
      </BookSection>

      <BookSection
        number={6}
        title="The House of the Spirits by Isabel Allende"
        amazonLink="https://amzn.to/3QO2JxK"
        imageUrl="/images/books/the-house-of-the-spirits.jpg"
      >
        <p>A multigenerational saga that mirrors the political turmoil of Chile, this novel is a masterful depiction of class struggle from a feminist perspective. It contrasts the conservative, patriarchal landowner Esteban Trueba with the resilient women of his family who embrace social justice and revolutionary change. The book is a testament to the idea that the personal is political, weaving together themes of love, spirituality, and feminist resistance against the backdrop of a rising socialist movement and a brutal right-wing coup.</p>
        <blockquote className="pl-4 border-l-4 border-gray-300 italic my-4">
            <p>"Memory is a selection of images, some elusive, others printed indelibly on the brain. Each image is like a thread, each thread woven together to make a tapestry of intricate texture..."</p>
        </blockquote>
      </BookSection>

      <BookSection
        number={7}
        title="The God of Small Things by Arundhati Roy"
        amazonLink="https://amzn.to/3KLnW7m"
        imageUrl="/images/books/the-god-of-small-things.jpg"
      >
        <p>Roy&apos;s novel is a profound leftist critique of the intersecting oppressions of caste, class, and gender in Kerala, India. It offers a sharp analysis of the hypocrisy within the established Communist Party, which often upholds the very hierarchies it claims to oppose. The central tragedy, a forbidden love affair between a Syrian Christian woman and an Untouchable man, exposes the brutal enforcement of the "Love Laws" that maintain the social order, making it a powerful statement on intersectional injustice.</p>
        <blockquote className="pl-4 border-l-4 border-gray-300 italic my-4">
            <p>"And the air was full of Thoughts and Things to Say. But at times like these, only the Small Things are ever said. Big Things lurk unsaid inside."</p>
        </blockquote>
      </BookSection>

      <BookSection
        number={8}
        title="The Joy Luck Club by Amy Tan"
        amazonLink="https://amzn.to/3OCgigS"
        imageUrl="https://d1b14unh5d6w7g.cloudfront.net/0143038095.01.S001.JUMBOXXX.jpg?Expires=1692612492&Signature=e1kN3rmoo6BwGF0oIVBOvefQyr27~FDf0utI9eibCWfk1mYHT-bXY4rf8q6sqkuhdvKBiy0973-2rjyLw1an7UsPnkyN9yNkNYOphNkVSymGfBoHFxPksE7dyZm5oWLDIRLLjG3halWOWVU44vlYoZaJL8n1xMZxXtpDTbs4WLE_&Key-Pair-Id=APKAIUO27P366FGALUMQ"
      >
        <p>While focused on mother-daughter relationships, this novel offers a subtle critique of the immigrant experience within American capitalism. The mothers escape patriarchal oppression in China only to face economic hardship and racism in the U.S. The daughters, in turn, internalize the pressures of the "American Dream," where individual worth is measured by professional success. The book explores the class mobility and alienation that can arise between generations, questioning the true cost of assimilation.</p>
        <blockquote className="pl-4 border-l-4 border-gray-300 italic my-4">
            <p>"I was raised by my mother, who said, &apos;If you are greedy, you are not a good person.&apos; But in this country, you have to be greedy to get ahead."</p>
        </blockquote>
      </BookSection>

      <BookSection
        number={9}
        title="The Absolutely True Diary of a Part-Time Indian by Sherman Alexie"
        amazonLink="https://amzn.to/3qG7dfa"
        imageUrl="https://d1b14unh5d6w7g.cloudfront.net/0316013684.01.S001.JUMBOXXX.jpg?Expires=1692612599&Signature=SviBU4j4uWcqhsoz~XkCjba7kDKLKEC-l5jaIj1v~~R-n8S1CTlPLy4aDcgV6PQz57OZqPGW~cAIKnnpAhhwsey7gz0-7WwSvJKj5GdtzRGFt6MC8b2uQ~s6YYJIbFx9Qr8FDjNTW69TFOBZOVHdnYHqMHmsBDD4KvUDwOV5tYM_&Key-Pair-Id=APKAIUO27P366FGALUMQ"
      >
        <p>This novel is a sharp critique of the systemic inequality and cyclical poverty forced upon Native American communities. Junior&apos;s journey from the underfunded reservation school to a wealthy white school is a literal crossing of class and racial borders. The book exposes how poverty is a generational trap rooted in historical oppression and how the promise of the "American Dream" often requires assimilation and the painful act of leaving one&apos;s community behind to survive.</p>
        <blockquote className="pl-4 border-l-4 border-gray-300 italic my-4">
            <p>"I think the world is a series of broken dams and floods, and my cartoons are tiny little lifeboats."</p>
        </blockquote>
      </BookSection>

    </article>
  );
}

