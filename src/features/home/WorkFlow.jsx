import React from "react";
import { motion } from "framer-motion";

const processSteps = [
  {
    index: "01",
    heading: "Discovery & Planning",
    content:
      "We’ll start with a quick discussion to understand your goals, audience, and what success looks like for your website.",
  },
  {
    index: "02",
    heading: "Content & Strategy",
    content:
      "You provide the content (or I can help with it), and together we outline the site structure, messaging, and must-have features.",
  },
  {
    index: "03",
    heading: "Design & Stack Selection",
    content:
      "I design a clean, modern interface and choose the right tech stack (WordPress, React, Next.js, etc.) based on your needs.",
  },
  {
    index: "04",
    heading: "Development & Optimization",
    content:
      "I bring the design to life with responsive, SEO-friendly code and ensure fast loading, smooth animations, and great UX on all devices.",
  },
  {
    index: "05",
    heading: "Launch & Support",
    content:
      "Once everything is tested and approved, your site goes live. I also offer post-launch support, updates, and performance monitoring.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const WorkFlow = () => {
  return (
    <section className="w-full bg-[var(--color-section)] text-[var(--color-primary)] px-6 sm:px-10 lg:px-16 py-20 rounded-2xl shadow-inner shadow-amber-100 inset-shadow-amber-100">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-14 space-y-4"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          <span className="italic text-[var(--color-accent)]">Development</span> Workflow
        </h1>
        <p className="text-[var(--color-primary)] text-base sm:text-lg font-medium">
          From discovery to launch, here’s the streamlined process I follow to
          transform your idea into a fully functional, professional website.
        </p>
      </motion.div>

      {/* Steps */}
      <div className="flex flex-col gap-8">
        {processSteps.map((step, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="flex flex-col md:flex-row items-start md:items-center gap-6 p-6 md:p-8 rounded-xl 
            bg-[var(--color-section)] border border-[#f5dec8] 
                       hover:border-[#d0bfae]/60 transition-all duration-300"
          >
            {/* Step Index */}
            <div
              className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-full 
                            bg-gradient-to-br from-[#d0bfae] to-[#f5dec8] text-black font-bold text-lg shadow-md"
            >
              {step.index}
            </div>

            {/* Content */}
            <div className="flex flex-col space-y-2">
              <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-primary)]">
                {step.heading}
              </h2>
              <p className="text-[var(--color-secondary)] text-sm md:text-base max-w-2xl leading-relaxed">
                {step.content}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkFlow;
