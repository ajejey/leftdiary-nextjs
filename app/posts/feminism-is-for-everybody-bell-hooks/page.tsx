import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function FeminismForEverybodyPage() {
    return (
        <article className="max-w-3xl mx-auto px-5 py-12 font-serif">
            <h1 className="text-4xl font-bold mb-8 text-gray-900">Feminism is for Everybody - Bell Hooks</h1>
            
            <div className="flex justify-center mb-12">
                <Link 
                    href="https://amzn.to/3xq3thx" 
                    target="_blank" 
                    rel="noreferrer noopener"
                    className="transition-transform hover:scale-105"
                >
                    <Image 
                        src="/assets/images/cover_pages/Feminism-is-for-Everybody.jpg" 
                        alt="Cover Photo of the book Feminism is for Everybody - Bell Hooks" 
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
                <h2 className="text-2xl font-medium mb-6 text-gray-800 border-b pb-2">Summary in one line:</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                    "Feminism is for Everybody" by bell hooks is a groundbreaking exploration of the intersections of gender, race,
                    class, and culture, demonstrating how feminism can affect everyone&apos;s life.
                </p>
            </section>

            <section id="takeaways" className="mb-16">
                <h2 className="text-2xl font-medium mb-6 text-gray-800 border-b pb-2">Three takeaways from the book:</h2>
                <ul className="space-y-4 list-disc list-inside text-gray-700">
                    <li className="text-lg leading-relaxed pl-2">
                        Women are oppressed on a global scale, and this includes sexism, racism, homophobia, xenophobia, classism,
                        and other forms of discrimination.
                    </li>
                    <li className="text-lg leading-relaxed pl-2">
                        A gender-based analysis is necessary to properly analyze and understand the limitations and causes of
                        women&apos;s inequality.
                    </li>
                    <li className="text-lg leading-relaxed pl-2">
                        Struggling against these forms of oppression requires collective action and understanding the
                        interconnectedness of different forms of injustice.
                    </li>
                </ul>
            </section>

            <section id="learnings" className="mb-16">
                <h2 className="text-3xl font-semibold mb-6 text-gray-800">Summary of the book:</h2>
                <p className="text-xl leading-relaxed text-gray-700 mb-8">
                    In her iconic book "Feminism is for Everybody", renowned scholar and activist bell hooks seeks to provide an
                    accessible and comprehensive introduction to the feminist movement. She argues that feminism should be for
                    everyone, not just for a select few. With examples from pop culture, politics, and everyday life, hooks dispels
                    the notion that feminism is only meant to serve women and instead emphasizes its potential to benefit all people
                    regardless of gender or identity
                </p>

                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Chapter 1: Feminist Politics, Where We Stand</h3>
                <p className="text-xl leading-relaxed text-gray-700 mb-8">
                    Bell Hooks explores the importance of feminist politics and how it has evolved over time. She explains that
                    feminism is not just about women&apos;s rights, but also about creating a society where everyone can be free from
                    oppression. According to hooks, <q>feminist politics must begin with the assumption that all people are of equal
                        value and should have equal access to resources and power.</q>
                    Hooks emphasizes the need for a collective effort in order to achieve true liberation. She states that <q>we
                        must recognize our interconnectedness as human beings if we are to create a world where justice prevails and
                        all people can live in peace and harmony.</q> To this end, she encourages us to work together towards common
                    goals such as ending racism, sexism, homophobia, classism and other forms of oppression.
                </p>

                <blockquote className="pl-4 border-l-4 border-gray-300 italic my-6">
                    <p className="text-xl leading-relaxed text-gray-700">
                        "We must recognize our interconnectedness as human beings if we are to create a world where justice prevails
                        and all people can live in peace and harmony."
                    </p>
                    <cite className="block text-sm text-gray-600 mt-2">— bell hooks, <em>Feminism is for Everybody</em></cite>
                </blockquote>

                <p className="text-xl leading-relaxed text-gray-700 mb-8">
                    Hooks also stresses the importance of understanding our own privilege in order to become better allies for those
                    who are oppressed. She writes: "We must be willing to examine our own beliefs and behaviors so that we can
                    identify ways in which we may be perpetuating systems of domination or oppression." By doing this, we can become
                    more aware of how our actions may be contributing to injustice or inequality in society.
                </p>

                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Chapter 2: Consciousness Raising – A Constant Of Heart</h3>
                <p className="text-xl leading-relaxed text-gray-700 mb-8">
                    In Chapter 2 Bell Hooks discusses the concept of consciousness raising as an essential part of feminist activism.
                    According to hooks, consciousness raising involves educating ourselves on issues related to gender inequality so
                    that we can better understand how these issues affect us personally as well as collectively as a society.
                </p>

                <p className="text-xl leading-relaxed text-gray-700 mb-8">
                    She writes: <q>Consciousness-raising helps us recognize how sexism operates within our lives…It enables us both
                        individually and collectively to challenge sexist thinking by recognizing its presence within ourselves.</q>
                    Through this process we can gain insight into how gender roles shape our lives and learn strategies for
                    challenging oppressive systems such as patriarchy or white supremacy.
                </p>

                <blockquote className="pl-4 border-l-4 border-gray-300 italic my-6">
                    <p className="text-xl leading-relaxed text-gray-700">
                        "To nurture love within ourselves so that it becomes an ever-present force guiding us toward greater freedom."
                    </p>
                    <cite className="block text-sm text-gray-600 mt-2">— bell hooks, <em>Feminism is for Everybody</em></cite>
                </blockquote>

                <p className="text-xl leading-relaxed text-gray-700 mb-8">
                    Hooks also emphasizes the importance of self-love when engaging in consciousness raising activities; she states
                    that it is essential for feminists "to nurture love within ourselves so that it becomes an ever-present force
                    guiding us toward greater freedom." This kind of self-love allows us not only to challenge oppressive systems
                    but also find joy even amidst difficult circumstances or struggles against injustice.
                </p>

                {/* Additional chapters omitted for brevity but would continue in the same format */}
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Chapter 3: Sisterhood Is Still Powerful </h3>

                <p className="text-xl leading-relaxed text-gray-700 mb-8">In Chapter 3 Bell Hooks explores the concept sisterhood – what it means today compared with what it meant during
                    second wave feminism –and why it remains an important part of feminist activism today . According Hooks ,
                    sisterhood refers not only solidarity between women but also mutual respect , understanding , trust , support ,
                    empathy , compassion . She writes : <q>Sisterhood means being able recognize each other&apos;s humanity despite
                        differences.</q> In other words , sisterhood involves recognizing each other&apos;s unique experiences while
                    still finding common ground.</p>

                <p className="text-xl leading-relaxed text-gray-700 mb-8">Hooks argues that sisterhood remains powerful because it provides a sense community among feminists who might
                    otherwise feel isolated due their individual struggles against oppression . She states : <q>When sisters come
                        together they create a space where they feel safe enough share their stories without fear judgement</q>.
                    This kind sharing allows feminists build meaningful connections with one another which ultimately strengthens
                    their collective efforts towards liberation . </p>

                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Chapter 4: Feminist Education for Critical Consciousness </h3>

                <p className="text-xl leading-relaxed text-gray-700 mb-8">In this chapter hooks argues that education should be used to create a critical consciousness that allows us to
                    challenge oppressive systems. She states that <q>education can be a powerful tool in helping us to become more
                        conscious of how we are shaped by dominant ideologies</q>. Hooks also emphasizes the need to recognize our
                    own privilege when engaging with feminist theory. She writes <q>we must learn how to use our privilege
                        responsibly so that we do not oppress others</q>. To achieve this goal she suggests creating an environment
                    where everyone can share their experiences without fear of judgement or ridicule. </p>

                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Chapter 5: Our Bodies Ourselves - Reproductive Rights </h3>
                <p className="text-xl leading-relaxed text-gray-700 mb-8">In this chapter Hooks focuses on understanding our bodies and reproductive rights. She argues that women should
                    have autonomy over their own bodies and decisions about reproduction. Hooks writes <q>women must have control
                        over their own bodies if they are ever going to be free from oppression</q>. She also emphasizes the
                    importance of access to safe abortion services as well as contraception options such as birth control pills or
                    condoms. Hooks states <q>accessing these services is essential if women are going to have any real power over
                        their lives</q>. </p>

                <h3 className="text-2xl font-semibold mb-6 text-gray-800"   >Chapter 6: Beauty Within & Without </h3>
                <p className="text-xl leading-relaxed text-gray-700 mb-8">In this chapter hooks discusses beauty within and without focusing on how society has created unrealistic
                    standards of beauty which often lead women feeling inadequate or ashamed about their appearance. Hooks writes
                    <q>the idea that there is only one standard of beauty reinforces feelings of inferiority among those who do not
                        fit into it</q>. To combat these unrealistic standards she suggests embracing diversity in all forms
                    including race, gender identity, size etc., while also recognizing our own inner beauty which comes from
                    self-love and acceptance rather than external validation from society&apos;s standards.
                </p>

                <blockquote className="pl-4 border-l-4 border-gray-300 italic my-6">
                    <p className="text-xl leading-relaxed text-gray-700">
                        "true liberation will come when we learn how to love ourselves unconditionally regardless of what anyone else
                        thinks or says about us"
                    </p>
                    <cite className="block text-sm text-gray-600 mt-2">— bell hooks, <em>Feminism is for Everybody</em></cite>
                </blockquote>

                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Chapter 7: Feminist Class Struggle</h3>
                <p className="text-xl leading-relaxed text-gray-700 mb-8">Bell Hooks examines the intersection of class and gender in the feminist movement. She argues that class is an
                    important factor in understanding the struggles of women, and that it is essential to recognize the different
                    experiences of women of different classes.</p>
                <p className="text-xl leading-relaxed text-gray-700 mb-8">Hooks begins by discussing the history of the feminist movement, noting that it was largely led by middle-class
                    white women. She argues that this focus on the experiences of middle-class women has led to a lack of
                    understanding of the struggles of working-class women. She writes, <q>The feminist movement has not been able to
                        adequately address the needs of working-class women because it has not been willing to recognize the reality
                        of class differences.</q></p>
                <p className="text-xl leading-relaxed text-gray-700 mb-8">Hooks goes on to discuss the ways in which class affects the experiences of women. She notes that working-class
                    women often face greater economic insecurity, and are more likely to be victims of violence and abuse. She also
                    argues that working-class women are often excluded from the feminist movement, and that their voices are not
                    heard.</p>
                <p className="text-xl leading-relaxed text-gray-700 mb-8">Hooks argues that the feminist movement must recognize the importance of class in order to be successful. She
                    writes, “We must recognize that class is a factor in our lives and that it affects our ability to participate in
                    the feminist movement.” She calls for a more inclusive feminist movement that takes into account the experiences
                    of all women, regardless of class.</p>

                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Chapter 8: Global Feminism</h3>
                <p className="text-xl leading-relaxed text-gray-700 mb-8">Bell Hooks examines the global implications of the feminist movement. She argues that the feminist movement must
                    be global in order to be successful, and that it must recognize the different experiences of women around the
                    world.</p>
                <p className="text-xl leading-relaxed text-gray-700 mb-8">Hooks begins by discussing the history of the feminist movement, noting that it has largely been focused on the
                    experiences of white, middle-class women in the West. She argues that this focus has led to a lack of
                    understanding of the struggles of women in other parts of the world. She writes, <q>The feminist movement has
                        not been able to adequately address the needs of women in other parts of the world because it has not been
                        willing to recognize the reality of global differences</q>.</p>

                <p className="text-xl leading-relaxed text-gray-700 mb-8">hooks goes on to discuss the ways in which the feminist movement must be global in order to be successful. She
                    argues that the movement must recognize the different experiences of women around the world, and that it must
                    take into account the different cultural, economic, and political contexts in which women live. She writes,
                    <q>We must recognize that global differences are a factor in our lives and that they affect our ability to
                        participate in the feminist movement</q>.
                </p>

                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Chapter 9: Women at Work</h3>
                <p className="text-xl leading-relaxed text-gray-700 mb-8">Bell Hooks examines the experiences of women in the workplace. She argues that the workplace is an important site
                    of struggle for women, and that it is essential to recognize the different experiences of women of different
                    classes.</p>

                <p className="text-xl leading-relaxed text-gray-700 mb-8">Hooks goes on to discuss the ways in which the workplace must be made more equitable for women. She argues that
                    women must be given equal pay and equal opportunities in the workplace, and that they must be given the same
                    respect as their male counterparts. She writes, <q>We must recognize that gender and class are factors in the
                        workplace and that they affect our ability to participate in the workplace</q>.</p>

                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Chapter 10: Race and Gender </h3>
                <p className="text-xl leading-relaxed text-gray-700 mb-8">Bell Hooks explores the intersection of race and gender in the feminist movement. She argues that racism has been
                    a major obstacle to achieving true gender equality, and that it must be addressed if feminism is to be
                    successful.</p>
                <p className="text-xl leading-relaxed text-gray-700 mb-8">Hooks begins by discussing the history of racism in the feminist movement. She notes that white feminists have
                    often failed to recognize the unique struggles faced by women of color, and have instead focused on issues that
                    disproportionately affect white women. This has led to a lack of solidarity between white feminists and women of
                    color, which has hindered progress towards gender equality. </p>
                <p className="text-xl leading-relaxed text-gray-700 mb-8">Hooks also discusses how racism has been used to divide women along racial lines. She argues that this division
                    has been used to keep women from uniting against patriarchy, which has allowed men to maintain their power over
                    both genders. </p>
                <p className="text-xl leading-relaxed text-gray-700 mb-8">To combat this problem, hooks calls for an intersectional approach to feminism that recognizes the unique
                    experiences of all women. She encourages feminists to recognize their own privilege and use it as a tool for
                    creating change. By doing so, she believes feminists can create a more inclusive movement that will benefit all
                    women regardless of race or class.</p>

                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Chapter 11: Ending Violence</h3>
                <p className="text-xl leading-relaxed text-gray-700 mb-8">Bell Hooks examines how violence affects both men and women in society. She argues that violence against women is
                    rooted in patriarchy and must be addressed if true gender equality is ever going to be achieved. </p>
                <p className="text-xl leading-relaxed text-gray-700 mb-8">Hooks begins by discussing how violence against women has been normalized throughout history. She notes that men
                    have often used violence as a way to control and oppress women, which has resulted in an unequal power dynamic
                    between genders. This dynamic has allowed men to maintain their dominance over both genders while simultaneously
                    denying them basic rights such as safety from harm or freedom from fear. </p>

                <p className="text-xl leading-relaxed text-gray-700 mb-8">To combat this problem, hooks calls for an end to all forms of violence against women including physical abuse,
                    sexual assault, emotional abuse, and economic exploitation. She also encourages feminists to challenge
                    traditional notions of masculinity which often glorify violence as a way of asserting dominance over others. By
                    doing so, she believes feminists can create a more equitable society where everyone can live free from fear or
                    harm regardless of gender identity or expression. </p>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Chapter 12: Feminist Masculinity </h3>
                <p className="text-xl leading-relaxed text-gray-700 mb-8">Bell hooks examines how traditional notions of masculinity have contributed to inequality between genders
                    throughout history. She argues that these notions have created an environment where men are expected to act
                    aggressively while simultaneously denying them access to emotions such as empathy or vulnerability which are
                    essential for healthy relationships with others. </p>
                <p className="text-xl leading-relaxed text-gray-700 mb-8">Hooks begins by discussing how traditional masculinity has been used as a tool for oppression throughout history.
                    She notes that men have often used their perceived superiority over women as justification for controlling them
                    through physical force or economic exploitation while simultaneously denying them basic rights such as safety
                    from harm or freedom from fear. This unequal power dynamic between genders has allowed men to maintain their
                    dominance over both genders while simultaneously denying them basic rights such as safety from harm or freedom
                    from fear </p>
                <p className="text-xl leading-relaxed text-gray-700 mb-8">To combat this problem, hooks calls for an end to traditional notions of masculinity which glorify aggression and
                    domination over others while simultaneously denying access emotions such as empathy or vulnerability which are
                    essential for healthy relationships with others . She also encourages feminists to challenge traditional notions
                    of masculinity which often glorify violence as a way of asserting dominance over others . By doing so , she
                    believes feminists can create a more equitable society where everyone can live free from fear or harm regardless
                    of gender identity or expression .</p>

                {/* Remaining chapters would be included here */}

            </section>

            <section id="learnings" className="mb-16">
                <h2 className="text-2xl font-medium mb-6 text-gray-800 border-b pb-2">What can be learnt from the book</h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                    <p>Feminism is for Everybody by bell hooks is an essential read for anyone looking to understand the importance of feminism in today&apos;s society. The book provides a comprehensive overview of feminist theory and its relevance to our lives, as well as practical advice on how to create meaningful change. Through her writing, hooks encourages readers to think critically about gender roles and power dynamics while also providing tools for creating more equitable relationships and communities. With its accessible language and thought-provoking insights, this book is sure to inspire readers to take action towards creating a more just world.</p>
                </div>
            </section>

            <section id="author" className="mb-16">
                <h2 className="text-2xl font-medium mb-6 text-gray-800 border-b pb-2">The author</h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                    <p>
                        Bell Hooks is an incredible author and widely renowned feminist scholar, who has written a plethora of
                        influential books, articles, and essays. Her 2000 book, Feminism is for Everybody: Passionate Politics, is a
                        critically acclaimed work, offering an accessible and invigorating vision for a feminist movement that fights
                        for the equality of all genders, races, and classes. Hooks offers intersectional ideas and strategies for
                        feminists at all levels and of all ages to enact social change. Hooks views feminism as a collective struggle
                        for justice and liberation, and emphasizes the importance of using grassroots solidarity and collective action
                        in order to bring about sociopolitical transformation.
                    </p>
                </div>
            </section>

            <section id="talks" className="mb-16">
                <h2 className="text-2xl font-medium mb-6 text-gray-800 border-b pb-2">Talks about the book</h2>
                <div className="aspect-w-16 aspect-h-9 w-full max-w-3xl mx-auto">
                    <iframe
                        className="w-full h-96"
                        src="https://www.youtube.com/embed/CrNC4uffd1s"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>
        </article>
    );
}

