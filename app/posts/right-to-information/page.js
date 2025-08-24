import Image from 'next/image';
import Link from 'next/link';

export default function RTIStory() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-12 font-serif">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">The RTI Story - Power to the people - Aruna Roy</h1>
      
      <div className="flex justify-center mb-12">
        <Link 
          href="https://amzn.to/2W9mXoX" 
          target="_blank" 
          rel="noreferrer noopener"
          className="transition-transform hover:scale-105"
        >
          <Image 
            src="/images/cover_pages/The_RTI_Story.jpg" 
            alt="Cover Photo of the book The RTI Story - Power to the people" 
            width={250} 
            height={375} 
            className="rounded-md shadow-lg"
          />
          <span className="mt-4 block text-center text-gray-700 hover:text-blue-600">Get the book</span>
        </Link>
      </div>
      
      <div className="bg-gray-50 p-8 rounded-lg mb-16 shadow-sm border border-gray-100">
        <h2 className="text-2xl font-medium mb-6 text-gray-800">Contents</h2>
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
          This book is the story of how the Mazdoor Kisan Shakti Sanghathan (MKSS) came to be, and how through a decade of campaigns, resistances, fights involving fatal dangers, unprecedented heroism and bravery, and more than sixty deaths, came an act that really puts power in the hands of ordinary people.
        </p>
      </section>

      <section id="takeaways" className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Three takeaways from the book:</h2>
        <ul className="space-y-5 text-xl leading-relaxed text-gray-700 pl-6">
          <li>Direct action by the people, works, however powerless, poor, or underprivileged they maybe.</li>
          <li>The powerful can be defeated and brought to their knees to confess their wrong doings and can be held accountable, that looks impossible to the ordinary man.</li>
          <li>It starts out as a struggle in a remote hamlet, then becomes a campaign among groups of villages then turns into a national movement.</li>
        </ul>
      </section>

      <section id="learnings" className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">What can be learnt from the book:</h2>
        
        <p className="text-xl leading-relaxed text-gray-700 mb-8">
          The book is not just about the nitty-gritty of how the campaign happened, the scope of the law and how the law was made. Most critically, this book is about the idealism that drives the power of activism and it makes you feel that it's possible to create a world that is just. This is a law that has come ground up- the impetus to law making has come from the people via a campaign and decades of struggle. It didn't start with a plan for a law, but it was planned to get justice. It started out as struggle, then a campaign, then a movement. It is really, a dialectic and a game between people and the people in power.
        </p>

        <p className="text-xl leading-relaxed text-gray-700 mb-8">
          The story starts in a mud house, in Devdungri, a village in Rajasthan, where the author Aruna Roy, Nikhil Dey, Shankar Singh, and Anshi began their work in 1987. The discussions and arguments in the house defined MKSS's struggle for the RTI. An accusation of untruth faced by the poor when they demanded their rightful wage- 'If we do not get those records out we will always be liars' was paraphrased here.
        </p>
        
        <figure className="my-12">
          <Image 
            src="/images/Devdungri.png" 
            alt="Picture of Mud house in Devdungri" 
            width={800} 
            height={500}
            className="rounded-md shadow-md w-full" 
          />
          <figcaption className="text-center text-gray-500 mt-4 italic text-base">Picture of Mud house in Devdungri.</figcaption>
        </figure>
        
        <p className="text-xl leading-relaxed text-gray-700 mb-8">I think the book cannot be described in detail better than the author herself:</p>

        <p className="text-xl leading-relaxed text-gray-700 mb-8">
          The book is a collection of ordinary people's stories which shaped ideas, and a legal tool to address corruption and arbitrary use of power – two overpowering deterrents in accessing the people's right to live. Denial of justice often arises from the suppression of the truth and of information, keeping people away from access of food, work, health, justice, education, housing and the right to live with dignity. Corruption is the tangible manifestation of mis-governance and the arbitrary use of power.
        </p>

        <p className="text-xl leading-relaxed text-gray-700 mb-8">
          The casual sequence unravels how people come together for a single purpose, no matter how different the articulation and starting points. The players are from different 'sectors', who analysed and acted to change the nature of their immediate engagement with democratic institutions and governance. They all came to the conclusion separately that corruption and injustice could be controlled only if there was access to information as a right.
        </p>

        <p className="text-xl leading-relaxed text-gray-700 mb-8">
          It is an exercise in building theory through practice. It articulated the implicit argument that participatory democracy can be crafted to be constructive, inclusive and just. Its story celebrates pluralism and participation as important foundations of a democracy. It is a campaign that has been rooted in the complexities of indian democratic processes while carrying the simple straightforward message of transparency to achieve its objective. This people's campaign has added to the lexicon of governance and its understanding by looking at ways in which people could engage with policy and implementation.
        </p>

        <p className="text-xl leading-relaxed text-gray-700 mb-8">
          It offers some ways in which we can actually deal with conflicts in democratic processes between the citizen and the elected representative, between worker and scholar, between action and reflection, between individuals and collectives. Perhaps it will make us realize and recall the strength of the national movement that gave us independence and the constitution we then gave ourselves. The story offers hope that justice and equality need not remain in the tomes of legal guarantees but can –with judicious application- win some battles within the democratic and constitutional paradigm.
        </p>
      </section>

      <section id="author" className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-gray-800">The author</h2>
        
        <figure className="my-12 flex flex-col items-center">
          <Image 
            src="/images/Aruna_Roy_Augustus_Binu_400.png" 
            alt="Picture of Aruna Roy" 
            width={300} 
            height={300}
            className="rounded-full shadow-lg" 
          />
          <figcaption className="text-center text-gray-500 mt-5 text-base italic">
            Picture of Aruna Roy. Photo Credit <a href="https://commons.wikimedia.org/wiki/User:Mydreamsparrow" className="text-blue-600 hover:text-blue-800 transition-colors">Augustus Binu</a>
          </figcaption>
        </figure>
        
        <p className="text-xl leading-relaxed text-gray-700">
          Aruna Roy worked for seven years as a civil servant in the Indian Administrative Service (IAS), after teaching English literature in her alma mater, Indraprastha College for women in Delhi. She resigned from the Indian Administrative services in 1975 to join a rural voluntary organization, Social Work And Research Centre (SWRC) to work with the rural poor in Ajmir district in Rajasthan. She left SWRC after nine years to live and work in a village to enable the people there to access basic political and democratic rights.
        </p>
      </section>

      <section id="talks" className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Talks by the author about the book</h2>
        
        <h3 className="text-2xl font-medium mb-5 text-gray-700">Book Discussion of the book at Bangalore International Centre with Aruna Roy and Nikhil Dey</h3>
        <div className="aspect-w-16 aspect-h-9 mb-8 h-[315px]">
          <iframe 
            title="Discussion around 'The RTI Story' with Aruna Roy, Nikhil Dey, TM Krishna" 
            src="https://www.youtube.com/embed/ObaS1XPTDr0" 
            className="w-full h-full rounded-md shadow-md"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </article>
  );
}
