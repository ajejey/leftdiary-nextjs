import React from 'react';
import ArticleRenderer from '../../../components/blog/ArticleRenderer';

export default function ArticleExamplePage() {
  // Example article with structured content sections
  const exampleArticle = {
    title: "Climate Justice: How Grassroots Movements Are Challenging Power",
    date: "August 20, 2025",
    contentSections: [
      {
        type: 'introduction' as const,
        content: '<p>As world leaders prepare for yet another climate summit filled with hollow promises and corporate greenwashing, grassroots climate activists are taking matters into their own hands. The recent wave of protests across major cities represents more than just a cry for environmental action—it\'s a fundamental challenge to the capitalist systems that prioritize profit over planetary survival.</p>'
      },
      {
        type: 'section' as const,
        title: 'The Rising Tide of Direct Action',
        content: '<p class="text-xl leading-relaxed text-gray-700 mb-8">Climate activism has evolved significantly over the past decade. What began as polite requests for policy change has transformed into a militant movement that recognizes the need for system-wide transformation. Activists are increasingly targeting the financial institutions and corporations that fund and profit from environmental destruction.</p><p class="text-xl leading-relaxed text-gray-700 mb-8">These actions represent a growing understanding that climate change is not merely an environmental issue but a manifestation of capitalism\'s inherent contradictions. The endless pursuit of growth on a finite planet has created a crisis that cannot be solved within the same economic paradigm that produced it.</p>'
      },
      {
        type: 'quote' as const,
        content: '<p class="text-xl">"The climate crisis is a crisis of political will, and that political will is being corrupted by the fossil fuel industry and their allies in government who have a vested interest in maintaining the status quo."</p>'
      },
      {
        type: 'section' as const,
        title: 'Beyond Reform: Demanding System Change',
        content: '<p class="text-xl leading-relaxed text-gray-700 mb-8">Today\'s climate justice movement has moved beyond demands for incremental reform. Activists are calling for:</p>'
      },
      {
        type: 'list' as const,
        content: '<ul class="space-y-5 text-xl leading-relaxed text-gray-700 pl-6 mb-8"><li>Immediate phase-out of fossil fuel infrastructure</li><li>Democratic control of energy systems</li><li>Just transition for workers in carbon-intensive industries</li><li>Climate reparations for communities most affected by ecological devastation</li><li>Rejection of market-based "solutions" that commodify nature</li></ul>'
      },
      {
        type: 'statistics' as const,
        title: 'Key Statistics',
        content: '<ul class="space-y-3 text-gray-700"><li><span class="font-semibold">100 companies:</span> Responsible for 71% of global emissions since 1988</li><li><span class="font-semibold">$5.9 trillion:</span> Annual fossil fuel subsidies globally</li><li><span class="font-semibold">3.3-3.6°C:</span> Projected warming by 2100 under current policies</li></ul>'
      },
      {
        type: 'conclusion' as const,
        title: 'From Protest to Power',
        content: '<p class="text-xl leading-relaxed text-gray-700">The climate justice movement represents one of the most significant challenges to capitalist hegemony in the 21st century. By connecting ecological devastation to economic exploitation, racial injustice, and colonial legacies, activists are building a powerful coalition capable of imagining and fighting for a different world. As the climate crisis accelerates, these movements will only grow in size and militancy—posing fundamental questions about who controls resources and how society should be organized.</p>'
      },
      {
        type: 'sources' as const,
        content: '<ul class="space-y-2 text-gray-700"><li><a href="#" class="text-blue-600 hover:underline">Carbon Majors Report 2017</a> - Analysis of global industrial carbon emissions</li><li><a href="#" class="text-blue-600 hover:underline">IMF Working Paper: Global Fossil Fuel Subsidies</a> - Comprehensive assessment of direct and indirect subsidies</li><li><a href="#" class="text-blue-600 hover:underline">IPCC Sixth Assessment Report</a> - Climate projections under various scenarios</li></ul>'
      }
    ]
  };

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8 px-4">
        <h1 className="text-2xl font-bold mb-4">Article Example with Structured Content</h1>
        <p className="text-gray-600">
          This page demonstrates rendering an article using the new ArticleRenderer component 
          with structured content sections.
        </p>
      </div>
      
      {/* Render the article using structured content */}
      <ArticleRenderer 
        title={exampleArticle.title}
        date={exampleArticle.date}
        contentSections={exampleArticle.contentSections}
        useStructuredContent={true}
      />
    </div>
  );
}
