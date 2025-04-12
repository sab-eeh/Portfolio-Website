import React from "react";

const processSteps = [
  {
    index: "01.",
    heading: "Discovery & Planning",
    content:
      "We’ll start with a quick discussion to understand your goals, audience, and what success looks like for your website.",
  },
  {
    index: "02.",
    heading: "Content & Strategy",
    content:
      "You provide the content (or I can help with it), and together we outline the site structure, messaging, and must-have features.",
  },
  {
    index: "03.",
    heading: "Design & Stack Selection",
    content:
      "I design a clean, modern interface and choose the right tech stack (WordPress, React, Next.js, etc.) based on your needs.",
  },
  {
    index: "04.",
    heading: "Development & Optimization",
    content:
      "I bring the design to life with responsive, SEO-friendly code and ensure fast loading, smooth animations, and great UX on all devices.",
  },
  {
    index: "05.",
    heading: "Launch & Support",
    content:
      "Once everything is tested and approved, your site goes live. I also offer post-launch support, updates, and performance monitoring.",
  },
];

const WorkFlow = () => {
  return (
    <div className="text-white px-4 lg:px-20 py-16 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl lg:text-6xl font-extrabold">
          <span className="bg-gradient-to-r from-purple-600 to-purple-300 text-transparent bg-clip-text">
            DEVELOPMENT WORKFLOW
          </span>
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Here’s how I take your idea and turn it into a fully functional,
          professional website:
        </p>
      </div>

      {/* Steps */}
      <div className="flex flex-col gap-6">
        {processSteps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 px-6 py-6 rounded-md border border-gray-700 text-white hover:bg-purple-700 transition-all duration-200"
          >
            {/* Index + Title */}
            <div className="flex items-center gap-4 w-full lg:w-1/2">
              <span className="text-purple-300 font-extrabold text-lg">
                {step.index}
              </span>
              <h2 className="text-xl lg:text-2xl font-bold">{step.heading}</h2>
            </div>

            {/* Description */}
            <div className="w-full lg:w-1/2 text-sm lg:text-base text-gray-200">
              {step.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkFlow;
