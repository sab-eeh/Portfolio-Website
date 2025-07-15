import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="relative text-white px-4 sm:px-6 md:px-10 lg:px-20 py-10 sm:py-14 lg:py-20 backdrop-blur-xl bg-[#0F0F0F] shadow-lg flex flex-col lg:flex-row items-start justify-between gap-10">
      {/* Header section */}
      <div className="space-y-4 text-center lg:text-left w-full lg:w-1/2">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-white font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
        >
          CRAFTING SCALABLE SOLUTIONS & IMPACTFUL DIGITAL EXPERIENCES
        </motion.h1>
      </div>

      {/* Paragraph section */}
      <div className="mx-auto lg:mx-0 w-full lg:w-1/2">
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-lg leading-relaxed text-gray-300 text-center lg:text-left"
        >
          Hey, I’m Sabeeh — a passionate <span className="text-white">web developer</span> with a strong foundation
          in both frontend and backend technologies. Currently pursuing a
          Bachelor's degree in Computer Science at UIT University, I specialize
          in creating modern, responsive web experiences using the <span className="text-white">MERN stack </span> 
          and <span className="text-white">WordPress.</span>  <br /> <br />
           With a keen eye for usability and a drive for
          performance, I build websites and applications that balance clean
          design with solid engineering. From dynamic UIs to robust backend
          systems, I aim to deliver products that are both functional and
          user-focused. <br /> <br /> Beyond development, I’m actively engaged in the tech
          community as a member of <span className="text-white">Google Developer Group on Campus (GDGOC)</span> and
          have proven my collaborative problem-solving skills by being
          shortlisted in the <span className="text-white">Top 5 teams at a national-level hackathon.</span> <br /> Let’s
          build something meaningful together — where design meets code and
          ideas become reality.
        </motion.p>
      </div>
    </div>
  );
};

export default About;
