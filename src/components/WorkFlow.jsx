import React from "react";
import { motion } from "framer-motion";

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

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const WorkFlow = () => {
  return (
    <div className="text-white px-4 lg:px-25 py-16 space-y-12 bg-[#F6F6F6] shadow-lg">
      

      {/* Header */}
      <motion.div
        className="text-center space-y-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <h1 className="text-4xl lg:text-6xl font-extrabold">
          <span className="text-black">
            DEVELOPMENT WORKFLOW
          </span>
        </h1>
        <p className="text-lg text-black font-semibold max-w-3xl mx-auto">
          Here’s how I take your idea and turn it into a fully functional,
          professional website:
        </p>
      </motion.div>

      {/* Steps */}
      <motion.div
        className="flex flex-col gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {processSteps.map((step, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 px-6 py-6 rounded-md shadow-lg border bg-[#F6F6F6] border-gray-800 text-black hover:bg-black hover:text-white transition-all duration-200"
          >
            {/* Index + Title */}
            <div className="flex items-center gap-4 w-full lg:w-1/2">
              <span className=" font-extrabold text-lg">
                {step.index}
              </span>
              <h2 className="text-xl lg:text-3xl font-bold">{step.heading}</h2>
            </div>

            {/* Description */}
            <div className="w-full lg:w-1/2 text-sm lg:text-base font-medium ">
              {step.content}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default WorkFlow;
