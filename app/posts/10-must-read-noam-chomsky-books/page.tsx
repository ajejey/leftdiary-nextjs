import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "10 Must Read Noam Chomsky Books",
  description: "A curated list of 10 must-read books for anyone new to the work of Noam Chomsky, the leading critic of US foreign policy, neoliberalism, and mass media.",
  openGraph: {
    title: "10 Must Read Noam Chomsky Books",
    description: "A curated list of 10 must-read books for anyone new to the work of Noam Chomsky.",
    images: ['/images/top10_Chomsky_2000x1000.jpg'],
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

export default function NoamChomskyBooks() {
  return (
    <article className="max-w-4xl mx-auto px-5 py-12 font-serif">
      <header className="text-center mb-16">
        <div className="relative w-full aspect-[2/1] mb-8 max-w-3xl mx-auto">
          <Image 
            src="/images/cover_pages/top10_Chomsky_2000x1000.jpg"
            alt="Noam Chomsky Books"
            fill
            priority
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">10 Must Read Noam Chomsky Books</h1>
        <div className="text-gray-600">
          <span>By Left Diary</span>
          <span className="mx-2">&middot;</span>
          <span>April 30, 2020</span>
        </div>
      </header>

      <section className="text-xl leading-relaxed text-gray-700 mb-16 border-b pb-10">
        <p><strong>Noam Chomsky is one of the most cited scholars alive.</strong> A leading critic of US foreign policy, neoliberalism, and state capitalism, Chomsky is also known as <strong>The Father of Modern Linguistics</strong>. He has authored over 100 books on linguistics, war, politics, and mass media. As an Anarcho-syndicalist and Libertarian Socialist, his work offers a profound critique of power. Following are 10 must-read books if you are a beginner new to Noam Chomsky&apos;s writings.</p>
      </section>

      <BookSection
        number={1}
        title="Requiem for the American Dream"
        amazonLink="https://amzn.to/35E2iw1"
        imageUrl="/images/top10_chomsky/top101_requiem-04.jpg"
      >
        <p>This is perhaps the most accessible distillation of Chomsky&apos;s political thought. He lays out ten principles of the concentration of wealth and power, arguing that the "American Dream" has been systematically dismantled by neoliberal policies that favor the rich. Chomsky explains how the cycle of wealth concentrating political power, which then legislates to protect that wealth, has created unprecedented inequality.</p>
        <blockquote className="pl-4 border-l-4 border-gray-300 italic my-4">
          <p>"Solidarity is quite dangerous. From the point of view of the masters, you&apos;re only supposed to care about yourself, not about other people."</p>
        </blockquote>
        <p>It&apos;s a foundational text for understanding the mechanics of modern inequality.</p>
      </BookSection>

      <BookSection
        number={2}
        title="The Responsibility of Intellectuals"
        amazonLink="https://amzn.to/35E2iw1"
        imageUrl="/images/top10_chomsky/top102_responsibility-04.jpg"
      >
        <p>In this seminal 1967 essay, Chomsky delivers a powerful moral challenge. He argues that intellectuals, due to their privilege, training, and access to information, have a profound duty to scrutinize the actions of their governments and expose lies. He fiercely critiques the "cult of the expert," where technocrats and academics often provide justifications for state violence and oppression rather than holding power accountable.</p>
        <blockquote className="pl-4 border-l-4 border-gray-300 italic my-4">
          <p>"It is the responsibility of intellectuals to speak the truth and to expose lies."</p>
        </blockquote>
      </BookSection>

      <BookSection
        number={3}
        title="Understanding Power"
        amazonLink="https://amzn.to/35E2iw1"
        imageUrl="/images/top10_chomsky/top103_understanding-04.jpg"
      >
        <p>A collection of wide-ranging talks and discussions, this book is a masterclass in critical thinking. Chomsky connects the dots between U.S. foreign policy, corporate power, and the decline of domestic social services. He argues that authority is not inherently legitimate and that the burden of proof is always on those who claim it. It&apos;s an indispensable guide to dissecting power structures and the propaganda that sustains them.</p>
        <blockquote className="pl-4 border-l-4 border-gray-300 italic my-4">
          <p>"The core of the anarchist tradition, as I understand it, is that power is always illegitimate, unless it proves itself to be legitimate."</p>
        </blockquote>
      </BookSection>

      <BookSection
        number={4}
        title="Who Rules the World?"
        amazonLink="https://amzn.to/35E2iw1"
        imageUrl="/images/top10_chomsky/top104_whorules-04.jpg"
      >
        <p>Here, Chomsky provides a thorough and incisive analysis of the modern international order. He argues that the United States, through its military-first policies and disregard for international law, acts as a rogue state that poses a threat to world peace. He dissects the hypocrisy of American exceptionalism and shows how U.S. foreign policy is consistently driven by a desire to maintain economic and political dominance, not to promote democracy.</p>
        <blockquote className="pl-4 border-l-4 border-gray-300 italic my-4">
          <p>"As long as the general population is passive, apathetic, and diverted to consumerism or hatred of the vulnerable, then the powerful can do as they please..."</p>
        </blockquote>
      </BookSection>

      <BookSection
        number={5}
        title="Manufacturing Consent"
        amazonLink="https://amzn.to/35E2iw1"
        imageUrl="/images/top10_chomsky/top105_manufacturing-04.jpg"
      >
        <p>Co-authored with Edward S. Herman, this is a landmark work of media criticism. The book introduces the "Propaganda Model," a framework that explains how the mass media function to serve the interests of the elite. They argue that through five systemic filters (ownership, advertising, sourcing, flak, and anti-ideology), the media systematically produce propaganda that integrates people into the existing power structures, rather than acting as a watchdog.</p>
        <blockquote className="pl-4 border-l-4 border-gray-300 italic my-4">
          <p>"The mass media serve as a system for communicating messages and symbols to the general populace... In a world of concentrated wealth and major conflicts of class interest, to fulfil this role requires systematic propaganda."</p>
        </blockquote>
      </BookSection>

      <BookSection
        number={6}
        title="Profit Over People"
        amazonLink="https://amzn.to/35E2iw1"
        imageUrl="/images/top10_chomsky/top106_profit-04.jpg"
      >
        <p>Chomsky traces the history and devastating impact of neoliberalism, the pro-corporate ideology that has dominated global economics for decades. He critiques institutions like the IMF and WTO, arguing they impose policies on developing nations that benefit private interests at the expense of the general population. The result is an atomized society of disengaged individuals, where profit is valued above all else.</p>
        <blockquote className="pl-4 border-l-4 border-gray-300 italic my-4">
          <p>"Neoliberal democracy. Instead of citizens, it produces consumers. Instead of communities, it produces shopping malls. The net result is an atomized society of disengaged individuals who feel demoralized and socially powerless."</p>
        </blockquote>
      </BookSection>

      <BookSection
        number={7}
        title="On Anarchism"
        amazonLink="https://amzn.to/35E2iw1"
        imageUrl="/images/top10_chomsky/top107_anarchism-04.jpg"
      >
        <p>This collection of essays and interviews provides a clear introduction to Chomsky&apos;s libertarian socialist principles. He refutes the notion that anarchism means chaos, arguing instead for a highly organized society based on democratic control from below. For Chomsky, anarchism is the conviction that any form of authority must justify itself, and if it cannot, it should be dismantled to allow for human freedom and creativity to flourish.</p>
        <blockquote className="pl-4 border-l-4 border-gray-300 italic my-4">
          <p>"That is what I have always understood to be the essence of anarchism: the conviction that the burden of proof has to be placed on authority, and that it should be dismantled if that burden cannot be met."</p>
        </blockquote>
      </BookSection>

      <BookSection
        number={8}
        title="Government of the Future"
        amazonLink="https://amzn.to/35E2iw1"
        imageUrl="/images/top10_chomsky/top108_government-04.jpg"
      >
        <p>In this classic 1970 lecture, Chomsky outlines his vision for social change by contrasting various political ideologies. He defends libertarian socialism as the proper and natural extension of classical liberalism into an era of advanced industrial society. He argues that true freedom requires direct popular control over all institutions, including economic ones, and that this can only be achieved through a popular revolutionary movement.</p>
        <blockquote className="pl-4 border-l-4 border-gray-300 italic my-4">
          <p>"If you assume that there&apos;s no hope, you guarantee that there will be no hope. If you assume that there is an instinct for freedom, there are opportunities to change things, there&apos;s a chance you may contribute to making a better world. The choice is yours."</p>
        </blockquote>
      </BookSection>

      <BookSection
        number={9}
        title="Failed States"
        amazonLink="https://amzn.to/35E2iw1"
        imageUrl="/images/top10_chomsky/top109_failed-04.jpg"
      >
        <p>Chomsky turns the concept of the "failed state" on its head, applying it directly to the United States. He argues that a state that does not protect its citizens, that regards itself as beyond the reach of international law, and that suffers from a severe "democratic deficit" is, by definition, failing. He meticulously documents how U.S. policies escalate global risks, from nuclear war to environmental disaster, making it a danger to the world.</p>
        <blockquote className="pl-4 border-l-4 border-gray-300 italic my-4">
          <p>"One commonly hears that carping critics complain about what is wrong, but do not present solutions. There is an accurate translation for that charge: &apos;They present solutions, but I don&apos;t like them.&apos;"</p>
        </blockquote>
      </BookSection>

      <BookSection
        number={10}
        title="Occupy"
        amazonLink="https://amzn.to/35E2iw1"
        imageUrl="/images/top10_chomsky/top110_occupy-04.jpg"
      >
        <p>As a vocal supporter of the Occupy movement, Chomsky saw it as the first major public response to decades of class war waged by the rich. He argues that the movement&apos;s greatest success was shifting the public narrative to focus on the extreme inequality between the "1% and the 99%." He celebrated the spontaneous communities built on mutual aid and cooperation as a model for a more democratic and humane way of living.</p>
        <blockquote className="pl-4 border-l-4 border-gray-300 italic my-4">
          <p>"The Occupy movement did create spontaneously communities that taught people something: you can be in a supportive community of mutual aid and cooperation and develop your own health system and library and have open space for democratic discussion and participation."</p>
        </blockquote>
      </BookSection>

    </article>
  );
}

