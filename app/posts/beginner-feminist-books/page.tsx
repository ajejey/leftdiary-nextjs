import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "New to Feminism? Here are 10 Essential Books to Get You Started",
  description: "Explore the world of feminism with these 10 essential books for beginners. From classic works to contemporary essays, discover the voices that have shaped the movement.",
  openGraph: {
    title: "New to Feminism? Here are 10 Essential Books to Get You Started",
    description: "Explore the world of feminism with these 10 essential books for beginners.",
    images: ['/assets/images/cover_pages/feminism.png'],
  },
};
interface BookSectionProps {
  id: string;
  title: string;
  amazonLink: string;
  imageUrl: string;
  children: React.ReactNode;
}

const BookSection = ({ id, title, amazonLink, imageUrl, children }: BookSectionProps) => (
  <section id={id} className="mb-16 flex flex-col md:flex-row gap-8 items-start">
    <div className="md:w-1/3 text-center">
      <Link href={amazonLink} target="_blank" rel="noopener noreferrer" className="inline-block transition-transform hover:scale-105">
        <Image
          src={imageUrl}
          alt={title}
          width={300}
          height={450}
          className="rounded-md shadow-lg mx-auto"
        />
      </Link>
    </div>
    <div className="md:w-2/3">
      <h2 className="text-3xl font-semibold mb-4 text-gray-800">
        <Link href={amazonLink} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
          {title}
        </Link>
      </h2>
      <div className="text-xl leading-relaxed text-gray-700 space-y-4">
        {children}
      </div>
      <Link href={amazonLink} target="_blank" rel="noopener noreferrer" className="inline-block mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
        Get the Book
      </Link>
    </div>
  </section>
);

export default function BeginnerFeministBooks() {
    return (
        <article className="max-w-4xl mx-auto px-5 py-12 font-serif">
            <header className="text-center mb-16">
                <div className="mb-8">
                    <Image
                        src="/images/cover_pages/feminism.png"
                        alt="Feminism 10 essential Books"
                        width={700}
                        height={400}
                        priority
                        className="rounded-lg shadow-md mx-auto"
                    />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                    New to Feminism? Here are 10 Essential Books to Get You Started
                </h1>
                <div className="text-gray-600">
                    <span>By Left Diary</span>
                    <span className="mx-2">â¢</span>
                    <span>February 15, 2023</span>
                </div>
            </header>

            <div className="text-xl leading-relaxed text-gray-700 space-y-6 mb-16">
                <p>If you&apos;re new to the world of feminism and looking to explore and learn more, you&apos;ve come to the right place. Feminism is a vast and complex subject, and reading feminist literature is one of the best ways to gain a deeper understanding of its principles and values.</p>
                <p>To get you started, I&apos;ve compiled a list of 10 beginner-friendly books written by some of the most influential feminist writers of all time. These books cover a range of topics from race, gender, and sexuality to housework, reproduction, and body image. Whether you&apos;re interested in memoirs, theory, or essays, this list has something for everyone.</p>
                <p>These books have been chosen because they are easy to understand and written in accessible language. Reading these books will inspire you to delve deeper into the world of feminism and to become more knowledgeable and informed on the issues that affect women around the world. So, pick up a book, get inspired, and start your journey into the wonderful world of feminism!</p>
            </div>

            <BookSection 
              id="book1" 
              title="1. We Should All Be Feminists by Chimamanda Ngozi Adichie" 
              amazonLink="https://amzn.to/3Xz6A19"
              imageUrl="https://m.media-amazon.com/images/P/110191176X.01._SCLZZZZZZZ_SX500_.jpg"
            >
              <p>"We Should All Be Feminists" by Chimamanda Ngozi Adichie is a powerful and essential book that provides a thought-provoking introduction to the world of feminism. Adichie argues that feminism is not just a women&apos;s issue, but a human rights issue that affects everyone, and she urges readers to consider what a more equal and just society might look like.</p>
              <p>In her engaging and relatable style, Adichie shares her personal experiences with sexism and discrimination, highlighting the ways in which gender inequality affects us all. She writes, "We teach girls to shrink themselves, to make themselves smaller. We say to girls, you can have ambition, but not too much. You should aim to be successful, but not too successful. Otherwise, you would threaten the man."</p>
              <p>Adichie also explores the intersectionality of feminism, acknowledging the unique challenges faced by women of color and those from marginalized communities. She states, "The problem with gender is that it prescribes how we should be rather than recognizing how we are. Imagine how much happier we would be, how much freer to be our true individual selves, if we didn&apos;t have the weight of gender expectations."</p>
            </BookSection>

            <BookSection 
              id="book2" 
              title="2. Hood Feminism: Notes from the Women That a Movement Forgot by Mikki Kendall" 
              amazonLink="https://amzn.to/3XzpEfC"
              imageUrl="https://m.media-amazon.com/images/P/0525560564.01._SCLZZZZZZZ_SX500_.jpg"
            >
              <p>"Hood Feminism: Notes from the Women That a Movement Forgot" by Mikki Kendall is a powerful and necessary book that sheds light on the often-overlooked experiences of women of color in the feminist movement. Kendall, a writer and activist, draws on her own experiences growing up in poverty and her work with marginalized communities to call attention to the ways in which mainstream feminism has failed to address the needs of those who are most vulnerable.</p>
              <p>In "Hood Feminism," Kendall challenges readers to broaden their understanding of what feminism is and what it can achieve. She writes, "Feminism is flawed because it is a movement powered by people and people are inherently flawed. But this doesn&apos;t mean that feminism is useless or that we should abandon it." She urges readers to recognize the importance of intersectionality and to prioritize the needs of those who are most marginalized in the fight for gender equality.</p>
            </BookSection>

            <BookSection 
              id="book3" 
              title="3. The Guilty Feminist: From Our Noble Goals to Our Worst Hypocrisies by Deborah Frances-White" 
              amazonLink="https://amzn.to/3S3CnpK"
              imageUrl="https://m.media-amazon.com/images/P/B0774RTVV6.01._SCLZZZZZZZ_SX500_.jpg"
            >
              <p>"The Guilty Feminist" by Deborah Frances-White is a witty and insightful exploration of the complexities of modern feminism. Frances-White, a comedian and writer, shares her own struggles and hypocrisies as a feminist, encouraging readers to embrace their own imperfections and work towards a more inclusive and intersectional movement.</p>
              <p>She covers a wide range of topics, from body image to workplace inequality to the power of language. She writes, "We are all feminists, but sometimes we feel like we&apos;re failing. Sometimes we feel guilty, or we feel like we&apos;re not doing enough." Through humor and relatable anecdotes, she encourages readers to recognize the importance of their own experiences and to continue pushing for progress.</p>
            </BookSection>

            <BookSection 
              id="book4" 
              title="4. Men to Avoid in Art and Life by Nicole Tersigni" 
              amazonLink="https://amzn.to/3I30fWf"
              imageUrl="https://m.media-amazon.com/images/P/B08DDKN671.01._SCLZZZZZZZ_SX500_.jpg"
            >
              <p>If you&apos;re looking for a fun and informative read that will help you navigate the world of toxic masculinity, then "Men to Avoid in Art and Life" by Nicole Tersigni is the perfect choice. The book is a collection of Tersigni&apos;s illustrations, paired with witty commentary and practical advice on how to identify and avoid "men to avoid" in various aspects of life.</p>
              <p>She writes, "The men to avoid are the ones who diminish and belittle women, who feel entitled to our time and attention, and who refuse to see us as equals." Tersigni&apos;s humor and empathy make the book a joy to read, and her advice is both practical and empowering.</p>
            </BookSection>

            <BookSection 
              id="book5" 
              title="5. Feminism, Interrupted: Disrupting Power by Lola Olufemi" 
              amazonLink="https://amzn.to/3E9JRBW"
              imageUrl="https://m.media-amazon.com/images/P/0745340067.01._SCLZZZZZZZ_SX500_.jpg"
            >
              <p>"Feminism, Interrupted" by Lola Olufemi offers a powerful critique of mainstream feminism and calls for a more inclusive, intersectional approach. Olufemi writes, "Feminism, Interrupted is a call to imagine a feminist movement that is alive to the complexity and diversity of our lives and that refuses to be confined by the narrow boundaries of mainstream feminist thought."</p>
              <p>One of the key themes of the book is the need to center the experiences and perspectives of marginalized groups in feminist activism. Olufemi argues that mainstream feminism has often ignored the needs and struggles of women of color, LGBTQ+ individuals, and other groups who face multiple forms of oppression.</p>
            </BookSection>

            <BookSection 
              id="book6" 
              title="6. Eloquent Rage: A Black Feminist Discovers Her Superpower by Brittney Cooper" 
              amazonLink="https://amzn.to/3S4Mn2o"
              imageUrl="https://d1b14unh5d6w7g.cloudfront.net/1250112885.01.S001.LXXXXXXX.jpg?Expires=1676571327&Signature=B4mWWxwoqjFYfpHNQIE2-RrT3nc9Euk5QB~NsUbL6Zru1ldVDOgAhndxJ0DhJgWoGUu3kCLEiuZlp1NSH9mWTqWlZBLZyFI-Pv4EG5rkPVIBVoyBxuFXfb0AAtwB1iPJsidxlArsrOHRjR7Q~qdlK6LOoTLt3ccbbgjmafzc4WY_&Key-Pair-Id=APKAIUO27P366FGALUMQ"
            >
              <p>"Eloquent Rage" by Brittney Cooper is a powerful memoir that explores the intersection of race and gender in contemporary society. Cooper shares her experiences as a black woman navigating the world, and delves into the history of black feminism and the ways in which it has been erased from mainstream discourse.</p>
              <p>Throughout the book, she encourages readers to embrace their anger and use it as a tool for change, stating "Anger is our birthright, and our obligation. It is the force that propels us forward, the energy that makes us feel most alive."</p>
            </BookSection>

            <BookSection 
              id="book7" 
              title="7. All About Love: New Visions by bell hooks" 
              amazonLink="https://amzn.to/3jYAsGu"
              imageUrl="https://m.media-amazon.com/images/P/0060959479.01._SCLZZZZZZZ_SX500_.jpg"
            >
              <p>"All About Love: New Visions" by bell hooks is a powerful and insightful book that explores the meaning and practice of love in our society. hooks presents a compelling argument for why love is not just a personal feeling, but a political act that can transform society.</p>
              <p>As hooks puts it, "Genuine love is rarely an emotional space where needs are instantly gratified. To know love we have to invest time and commitment." The book covers a range of topics such as self-love, parenting, masculinity, the LGBTQ+ community, marriage and romantic love, and social justice.</p>
            </BookSection>

            <BookSection 
              id="book8" 
              title="8. Why I&apos;m No Longer Talking to White People About Race by Reni Eddo-Lodge" 
              amazonLink="https://amzn.to/3xvXoQt"
              imageUrl="https://m.media-amazon.com/images/P/1635572959.01._SCLZZZZZZZ_SX500_.jpg"
            >
              <p>"Why I&apos;m No Longer Talking to White People About Race" is a powerful and thought-provoking book by Reni Eddo-Lodge that explores the complexity of racial inequality in Britain. Eddo-Lodge&apos;s book provides an unflinching look at how Britain&apos;s history of colonialism and slavery continue to impact people&apos;s lives today.</p>
              <p>She covers topics such as white privilege, the history of racism in Britain, and the complexities of intersectionality. As she says in the book, "We need to talk about race, but we also need to act on it." This book is a call to action for anyone who wants to be a part of the solution to racial inequality.</p>
            </BookSection>

            <BookSection 
              id="book9" 
              title="9. The Feminine Mystique by Betty Friedan" 
              amazonLink="https://amzn.to/40YTFsj"
              imageUrl="https://m.media-amazon.com/images/P/0393322572.01._SCLZZZZZZZ_SX500_.jpg"
            >
              <p>"The Feminine Mystique" by Betty Friedan is a seminal work in the history of feminism, published in 1963. In this book, Friedan analyzes the lives of women in the 1950s and 60s and the ways in which they were encouraged to conform to traditional gender roles. Friedan coins the term "the problem that has no name" to describe the pervasive sense of dissatisfaction and unfulfillment experienced by many women at this time.</p>
              <p>Friedan&apos;s book had a significant impact on the feminist movement and is credited with inspiring the second wave of feminism. As Friedan writes, "The only way for a woman, as for a man, to find herself, to know herself as a person, is by creative work of her own."</p>
            </BookSection>

            <BookSection 
              id="book10" 
              title="10. A Room of One&apos;s Own by Virginia Woolf" 
              amazonLink="https://amzn.to/3xpZqle"
              imageUrl="https://m.media-amazon.com/images/P/9355200544.01._SCLZZZZZZZ_SX500_.jpg"
            >
              <p>"A Room of One&apos;s Own" is a seminal work of feminist literature by Virginia Woolf. In this book, Woolf explores the constraints that have held women back from achieving their full potential throughout history. She argues that women have been historically disadvantaged because they have not been afforded the same opportunities for education and creative expression as men.</p>
              <p>Woolf famously wrote, "A woman must have money and a room of her own if she is to write fiction." This book explores the societal and cultural limitations that have kept women from having those two things.</p>
            </BookSection>

        </article>
    )
}

