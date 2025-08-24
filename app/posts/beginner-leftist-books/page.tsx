import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Beginner Leftist Books",
  description: "A list of essential books for those beginning their journey into leftism, covering foundational concepts without overwhelming theory.",
  openGraph: {
    title: "Beginner Leftist Books",
    description: "A list of essential books for those beginning their journey into leftism.",
    images: ["/images/cover_pages/Beginner_leftist_books.png"],
  },
};
interface BookSectionProps {
  number: number;
  title: string;
  amazonLink: string;
  imageUrl: string;
  summaryLink?: string;
  children: React.ReactNode;
}

const BookSection = ({ number, title, amazonLink, imageUrl, summaryLink, children }: BookSectionProps) => (
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
        <div className="mt-4 flex flex-col gap-2">
          {summaryLink && (
              <Link href={summaryLink} className="inline-block px-6 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition-colors">
                Read Summary
              </Link>
          )}
          <Link href={amazonLink} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Get the Book
          </Link>
        </div>
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

export default function BeginnerLeftistBooks() {
  return (
    <article className="max-w-4xl mx-auto px-5 py-12 font-serif">
      <header className="text-center mb-16">
        <div className="mb-8">
          <Image 
            src="/images/cover_pages/Beginner_leftist_books.png"
            alt="Beginner leftist books"
            width={800}
            height={500}
            className="rounded-lg shadow-lg mx-auto"
            priority
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Beginner Leftist Books</h1>
        <div className="text-gray-600">
          <span>By Left Diary</span>
          <span className="mx-2">â¢</span>
          <span>June 17, 2020</span>
        </div>
      </header>

      <section className="text-xl leading-relaxed text-gray-700 mb-16 border-b pb-10">
        <p>
          Have you just realized that there is something fundamentally wrong with the world we live in
          today? Have you been wondering where to begin to learn more about the world we live in today and
          what is wrong with it? Have you been inspired by the leftist ideology and want to begin your
          reading journey? Then look no further (or maybe do!). Here is a list of books you can start
          with in your journey of leftism. I have not included books that have complicated theories or
          that have terms and vocabulary that a new leftist may not understand. I hope some of them will
          inspire you to read more.
        </p>
      </section>

      <BookSection
        number={1}
        title="Marx&apos;s Kapital for Beginners - David N.Smith"
        amazonLink="https://amzn.to/3I3qb4Z"
        imageUrl="/images/beginner_leftist_books/Das_Kapital.png"
      >
        <p>Ready to dive into the world of Marxist economics but feeling overwhelmed by the sheer size and complexity of &apos;Das Kapital&apos;? Look no further! Introducing &apos;Marx&apos;s Kapital for Beginners&apos; by David N. Smith, the perfect guide for those who are new to Marxist thought.</p>
        <p>This concise and accessible book will take you on a journey through the fundamental concepts of Marxist economics, breaking down complex theories into easily digestible pieces. Whether you&apos;re an aspiring socialist, a curious student, or just looking to expand your knowledge, this book is the perfect starting point.</p>
      </BookSection>

      <BookSection
        number={2}
        title="The Communist Manifesto"
        amazonLink="https://amzn.to/3YcuQY3"
        imageUrl="/assets/images/beginner_leftist_books/Communist_manifesto.png"
      >
        <p>My fellow aspiring lefties! I know I said I&apos;d steer clear of books with complicated theories or confusing vocabulary, but I&apos;ve got a real doozy for you today. The Communist Manifesto is a classic piece of literature that was written specifically for the working-class masses in 1848. Although it may sound intimidating, I promise it&apos;s explained in a way that even someone with zero Marxist knowledge can comprehend.</p>
        <p>Trust me, reading this book before diving into other works will give you a solid foundation and a better understanding of the world we live in. Plus, even if you don&apos;t fully get it at first, the ideas and concepts presented in this manifesto will stick with you and inform your thinking as you continue your leftist education.</p>
      </BookSection>

      <BookSection
        number={3}
        title="Pedagogy Of The Oppressed â Paulo Freire"
        amazonLink="https://amzn.to/3HHs4my"
        imageUrl="/assets/images/beginner_leftist_books/pedagogy-of-the-oppressed.jpg"
        summaryLink="/posts/pedagogy-of-the-oppressed"
      >
        <p>Pedagogy Of The Oppressed by Paulo Freire is a must-read for anyone who cares about education and the role it plays in shaping our world. This book delves into the mind of the brilliant Brazilian radical educator and philosopher and explores his approach to education as a means of liberation. Freire argues that traditional pedagogy, which views students as passive recipients of knowledge, is misguided and fails to address the root causes of oppression.</p>
        <p>This book is an inspiring call to arms for all those who believe that education has the power to change the world. It is a powerful reminder that education must be more than just the transfer of information - it must be a transformative experience that helps individuals understand and challenge the forces that hold them back.</p>
      </BookSection>

      <BookSection
        number={4}
        title="Anarchism and other essays â Emma Goldman"
        amazonLink="https://amzn.to/3Ycg03J"
        imageUrl="/assets/images/beginner_leftist_books/Anarchism.png"
      >
        <p>Now, I know what you&apos;re thinking. "Anarchism? Isn&apos;t that just chaos and destruction?" Not even close! This book offers a nuanced and passionate look at the principles of anarchism and how they can be used to create a better world for all of us. Emma Goldman&apos;s writing is infused with empathy, and her arguments are so persuasive that you&apos;ll find yourself nodding along in agreement.</p>
        <p>The book covers a wide range of topics, from the struggles of working-class people to the fight for women&apos;s rights. And don&apos;t worry, the writing is accessible and easy to understand. You don&apos;t need to be a seasoned anarchist to get something out of this book. Just bring an open mind and a willingness to learn!</p>
      </BookSection>

      <BookSection
        number={5}
        title="Don&apos;t let my past be your future â Harry Leslie Smith"
        amazonLink="https://amzn.to/2UOOgDW"
        imageUrl="/assets/images/beginner_leftist_books/Dont_let_my_past_be_your_future.png"
      >
        <p>This book is a memoir of a man who lived through the Great Depression, fought in World War II, and witnessed the birth of the National Health Service. Harry&apos;s life story is a testament to the transformative power of progressive political movements and the importance of fighting for a more equitable society.</p>
        <p>With heart-wrenching honesty and vivid storytelling, Harry shares his experiences and reflects on the lessons that can be learned from the past. He offers a powerful reminder of how far we&apos;ve come, but also how much further we still need to go to ensure a better future for all.</p>
      </BookSection>

      <BookSection
        number={6}
        title="Understanding Power â Noam Chomsky"
        amazonLink="https://amzn.to/3xlwmvr"
        imageUrl="/assets/images/beginner_leftist_books/Understanding_power.png"
      >
        <p>Get ready for a journey through the mind of one of the greatest intellectuals of our time â Noam Chomsky. In "Understanding Power," Chomsky takes us on a deep dive into the world of politics, power, and media. With his trademark wit and clarity, Chomsky sheds light on some of the most pressing issues of our time, from the role of the media in shaping public opinion to the rise of the military-industrial complex. He&apos;ll make you see the world in a whole new way.</p>
        <blockquote className="pl-4 border-l-4 border-gray-300 italic my-4">
          <p>"World affairs are trivial: there&apos;s nothing in the social sciences or history or whatever that is beyond the intellectual capacities of an ordinary fifteen-year-old."</p>
        </blockquote>
      </BookSection>

      <BookSection
        number={7}
        title="The Mismeasure of Man â Stephen Jay Gould"
        amazonLink="https://amzn.to/3HJ3ulc"
        imageUrl="/assets/images/beginner_leftist_books/The_mismeasure_of_man.png"
      >
        <p>"The Mismeasure of Man" is a groundbreaking exploration of one of the most insidious and harmful beliefs in modern history: the belief in the scientific validity of intelligence testing. Gould, a renowned paleontologist and science historian, meticulously exposes the flaws and biases in the field of intelligence testing, which has been used as a tool of oppression for far too long.</p>
        <p>This book is not only a brilliant critique of the scientific establishment, but also a call to action for us to question the beliefs we hold about ourselves and others. It will challenge your understanding of the world and inspire you to fight against the forces of injustice.</p>
      </BookSection>

      <BookSection
        number={8}
        title="23 things they don&apos;t tell you about Capitalism - Ha-Joon Chang"
        amazonLink="https://amzn.to/3DNKnpj"
        imageUrl="/assets/images/beginner_leftist_books/23_things_they_dont_tell_you_about_capitalism.png"
      >
        <p>Thing 1: There is no such thing as free market. Thing 4: The washing machine has changed the world more than the Internet. Thing 5: Assume the worst about people, and you get the worst. Thing 13: Making rich people richer doesn&apos;t make the rest of us richer.</p>
        <p>If you&apos;ve wondered how we did not see the economic collapse coming, Ha-Joon Chang knows the answer: We didn&apos;t ask what they didn&apos;t tell us about capitalism. This is a lighthearted book with a serious purpose: to question the assumptions behind the dogma and sheer hype that the dominant school of neoliberal economists have spun since the Age of Reagan.</p>
      </BookSection>

      <BookSection
        number={9}
        title="This Changes Everything: Capitalism vs the Climate by Naomi Klein"
        amazonLink="https://amzn.to/3RGyl6w"
        imageUrl="/assets/images/beginner_leftist_books/This_changes_everything.png"
      >
        <p>In this game-changing work, Klein delves into the heart of the climate crisis and shows us how it&apos;s not just an environmental issue, but a direct result of the unchecked greed and exploitation of our current capitalist system. She argues that the root cause of the crisis is not just our reliance on fossil fuels, but the profit-driven mindset that dominates our world. This book is a call to action, a wake-up call, and a roadmap for a better future.</p>
      </BookSection>

      <BookSection
        number={10}
        title="Anarcho-syndicalism by Rudolf Rocker"
        amazonLink="https://amzn.to/3jGoAJd"
        imageUrl="/images/beginner_leftist_books/Anarcho_syndicalism.png"
      >
        <p>"Anarcho-syndicalism: Theory and Practice" explores the philosophical foundations of anarchism and its practical application through the lens of syndicalism. Rocker argues that true freedom can only be achieved through the abolition of wage slavery and the establishment of a society based on self-management and mutual aid. This book will challenge your preconceptions about the state, capitalism, and the role of the individual in society.</p>
      </BookSection>

    </article>
  );
}

