import Image from 'next/image'
import Link from 'next/link'

export default function PedagogyOfTheOppressed() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-12 font-serif">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Pedagogy of the Oppressed - Paulo Freire</h1>
      
      <div className="flex justify-center mb-12">
        <Link 
          href="https://amzn.to/3XxFZSe" 
          target="_blank" 
          rel="noreferrer noopener"
          className="transition-transform hover:scale-105"
        >
          <Image 
            src="/images/cover_pages/pedagogy.jpg" 
            alt="Cover Photo of the book Pedagogy of the Oppressed - Paulo Freire" 
            width={250} 
            height={375} 
            className="rounded-md shadow-lg"
          />
          <span className="mt-4 block text-center text-gray-700 hover:text-blue-600">Get the book</span>
        </Link>
      </div>
      
      <div className="bg-gray-50 p-8 rounded-lg mb-16 shadow-sm border border-gray-100">
        <h2 className="text-2xl font-medium mb-6 text-gray-800">Peek in</h2>
        <ul className="space-y-3 text-gray-700">
          <li><a href="#summary" className="border-b border-gray-300 hover:border-blue-500 pb-1 transition-colors">Summary in one line</a></li>
          <li><a href="#takeaways" className="border-b border-gray-300 hover:border-blue-500 pb-1 transition-colors">Three takeaways from the book</a></li>
          <li><a href="#learnings" className="border-b border-gray-300 hover:border-blue-500 pb-1 transition-colors">What can be learnt from the book</a></li>
          <li><a href="#author" className="border-b border-gray-300 hover:border-blue-500 pb-1 transition-colors">The Author</a></li>
          <li><a href="#talks" className="border-b border-gray-300 hover:border-blue-500 pb-1 transition-colors">Talks by the Author about the book</a></li>
        </ul>
      </div>

      <section id="summary" className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Summary in one line:</h2>
        <p className="text-xl leading-relaxed text-gray-700">
          "Pedagogy of the Oppressed" critiques traditional education systems and advocates for problem-posing education as a means of achieving liberation and empowerment.
        </p>
      </section>

      <section id="takeaways" className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Three takeaways from the book:</h2>
        <ul className="space-y-5 text-xl leading-relaxed text-gray-700 pl-6">
          <li>Traditional education systems perpetuate oppression by treating students as passive recipients of knowledge and failing to address the social and political realities that affect their lives.</li>
          <li>Problem-posing education, in which students are active participants in the process of learning and critical thinking, is necessary to achieve true liberation and empowerment.</li>
          <li>The role of the teacher is to facilitate the process of learning rather than being the all-knowing authority figure.</li>
        </ul>
      </section>

      <section id="learnings" className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">What can be learnt from the book:</h2>
        <p className="text-xl leading-relaxed text-gray-700 mb-8">
          The book "Pedagogy of the Oppressed" by Paulo Freire is a powerful critique of traditional education systems and
          a call for a new approach to education that prioritizes liberation and empowerment. Written in 1968, the book
          remains highly relevant today and offers valuable insights for educators, students, and anyone interested in the
          role of education in society.
        </p>
        <p className="text-xl leading-relaxed text-gray-700 mb-8">
          One of the main ideas of "Pedagogy of the Oppressed" is the concept of "banking education," in which students
          are treated as passive recipients of knowledge, rather than active participants in the process of learning.
          Freire argues that this approach perpetuates oppression by failing to address the social and political realities
          that affect the lives of students. Instead, he advocates for "problem-posing education," in which students are
          encouraged to think critically and question the world around them.
        </p>
        <p className="text-xl leading-relaxed text-gray-700 mb-8">
          Another key concept in "Pedagogy of the Oppressed" is the idea that education should be viewed as a means of
          achieving liberation and empowerment. Freire argues that true education should be focused on helping students
          understand and transform the world around them, rather than simply memorizing facts and figures. He also
          emphasizes the importance of addressing the needs of marginalized communities and working to address issues such
          as poverty and inequality.
        </p>
        <p className="text-xl leading-relaxed text-gray-700 mb-8">
          The role of the teacher is also central to Freire&apos;s ideas. Rather than being the all-knowing authority figure,
          the teacher is seen as a facilitator of the process of learning. Teachers are tasked with creating a safe and
          supportive environment for students to explore and question the world around them. This approach is in contrast
          to the traditional approach where teacher is the source of all knowledge
        </p>
        <p className="text-xl leading-relaxed text-gray-700 mb-8">
          In "Pedagogy of the Oppressed," Freire also outlines five pedagogical approaches: the teacher-student, the
          banking, the problem-posing, the cultural action for freedom, and the practice of freedom. These approaches
          provide a framework for understanding different approaches to education and how they can be used to achieve
          liberation and empowerment.
        </p>
        <p className="text-xl leading-relaxed text-gray-700 mb-8">
          One of the most powerful aspects of "Pedagogy of the Oppressed" is its ability to connect the personal
          experiences of students with broader social and political issues. Freire emphasizes the importance of
          recognizing the ways in which education is interconnected with society and the role that it plays in
          perpetuating or challenging structures of oppression.
        </p>
        <p className="text-xl leading-relaxed text-gray-700 mb-8">
          In conclusion, "Pedagogy of the Oppressed" is a thought-provoking and powerful book that offers valuable
          insights for educators and students alike. Its critiques of traditional education systems and calls for a new
          approach that prioritizes liberation and empowerment are still highly relevant today. This book is an essential
          read for anyone interested in the role of education in society and the pursuit of social justice.
        </p>
      </section>

      <section id="author" className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">The author</h2>
        
        <figure className="my-12 flex flex-col items-center">
          <Image 
            src="https://upload.wikimedia.org/wikipedia/commons/b/be/Paulo_Freire_1977.jpg" 
            alt="Paulo Freire 1977" 
            width={300} 
            height={375}
            className="rounded-md shadow-lg" 
          />
          <figcaption className="text-center text-gray-500 mt-5 text-base italic">
            Photo of Paulo Freire. Photo Credit <a href="https://commons.wikimedia.org/wiki/File:Paulo_Freire_1977.jpg" className="text-blue-600 hover:text-blue-800 transition-colors">Slobodan Dimitrov, CC BY-SA 3.0</a>
          </figcaption>
        </figure>
        
        <p className="text-xl leading-relaxed text-gray-700">
          Paulo Freire was a Brazilian educator and philosopher best known for his book "Pedagogy of the Oppressed," which critiques traditional education systems and advocates for problem-posing education as a means of achieving liberation and empowerment. His ideas have had a significant impact on the field of education and continue to be widely studied and discussed. Freire&apos;s legacy is still alive today and his ideas are widely used in education and in the pursuit of social justice.
        </p>
      </section>

      <section id="talks" className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Talks by the author about the book</h2>
        <h3 className="text-2xl font-medium mb-5 text-gray-700">Paulo Freire Documentary: Seeing Through Paulo&apos;s Glasses - Political Clarity, Courage and Humility</h3>
        <div className="aspect-w-16 aspect-h-9 mb-8 h-[315px]">
          <iframe 
            title="Paulo Freire Documentary: Seeing Through Paulo&apos;s Glasses" 
            src="https://www.youtube.com/embed/U4jPZe-cZgc" 
            className="w-full h-full rounded-md shadow-md"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </article>
  )
}

