import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="relative text-white px-4 sm:px-6 md:px-10 lg:px-20 py-10 sm:py-14 lg:py-20 backdrop-blur-xl bg-black/20 shadow-lg">
      {/* Background blur blob */}
      <div className="absolute w-[300px] h-[300px] bg-purple-700/20 blur-[140px] rounded-full -z-10 left-150"></div>

      {/* Header section */}
      <div className="space-y-4 text-center lg:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-purple-200 font-medium text-lg sm:text-xl md:text-2xl"
        >
          INTRODUCTION
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-extrabold text-4xl sm:text-5xl md:text-6xl"
        >
          <span className="bg-gradient-to-r from-purple-600 to-purple-300 text-transparent bg-clip-text">
            About Me.
          </span>
        </motion.h1>
      </div>

      {/* Paragraph section */}
      <div className="pt-8 mx-auto lg:mx-0">
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-lg leading-relaxed text-center lg:text-left"
        >
          I'm Sabeeh Uddin, a dedicated{" "}
          <span className="text-purple-400">Web developer</span> currently
          pursuing a Bachelor's degree in Computer Science at{" "}
          <span className="text-purple-400">UIT University</span>. With a strong
          focus on both frontend and backend development, I specialize in the
          MERN stack and WordPress, creating scalable, responsive, and
          user-centric web applications.
          <br />
          <br />
          In addition to my academic and freelance work, I am an active member
          of{" "}
          <span className="text-purple-400">
            Google Developer Group on Campus UIT (GDGOC)
          </span>
          .
          <br />I also had the opportunity to participate in a national-level
          hackathon, where my team was shortlisted among the{" "}
          <span className="text-purple-400">Top 5 finalists</span>, highlighting
          my ability to collaborate effectively and develop innovative technical
          solutions under pressure.
        </motion.p>
      </div>
    </div>
  );
};

export default About;
