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
    <>
      <div className="lg:px-20 lg:py-10">
        <div className="text-center lg:space-y-4 lg:px-30 lg:py-20">
          <h1 className="font-extrabold lg:text-6xl">
            <span className="bg-gradient-to-r from-purple-600 to-purple-300 text-transparent bg-clip-text">
              DEVELOPMENT WORKFLOW
            </span>
          </h1>
          <p className="text-white text-lg">
            Here’s how I take your idea and turn it into a fully functional,
            professional website:
          </p>
        </div>
        <div className="flex flex-col lg:gap-3">
          {processSteps.map((step, index) => (
            <div key={index} className="hover:bg-gradient-to-r from-purple-500 to-purple-900 flex items-center justify-between px-10 py-4 rounded-md text-white cursor-pointer">
                <div className="w-full flex items-center gap-5">
                    <span className="text-white font-extrabold">{step.index}</span>
                    <h1 className="text-3xl font-bold">{step.heading}</h1>
                </div>
                <div className="w-full  text-left">
                    <p>{step.content}</p>
                </div>

            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WorkFlow;
