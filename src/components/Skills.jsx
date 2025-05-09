import React from "react";
import { FaHtml5, FaWordpress } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { FaReact, FaNodeJs, FaFigma } from "react-icons/fa6";
import { SiExpress, SiMongodb, SiMysql } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { motion } from "framer-motion";

const Icons = [
  { icon: <FaHtml5 size={40} />, name: "HTML5" },
  { icon: <IoLogoCss3 size={40} />, name: "CSS3" },
  { icon: <IoLogoJavascript size={40} />, name: "JavaScript" },
  { icon: <BiLogoTypescript size={40} />, name: "TypeScript" },
  { icon: <FaReact size={40} />, name: "React" },
  { icon: <FaNodeJs size={40} />, name: "Node.js" },
  { icon: <SiExpress size={40} />, name: "Express.js" },
  { icon: <RiNextjsFill size={40} />, name: "Next.js" },
  { icon: <SiMongodb size={40} />, name: "MongoDB" },
  { icon: <SiMysql size={40} />, name: "MySQL" },
  { icon: <FaWordpress size={40} />, name: "WordPress" },
  { icon: <FaFigma size={40} />, name: "Figma" },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const Skills = () => {
  return (
    <div className="relative text-white px-4 md:px-10 lg:px-15 py-14 backdrop-blur-xl bg-black/90 shadow-lg">
      <div className="absolute w-[200px] h-[200px] bg-blue-700/50 blur-[140px] rounded-full -z-10 bottom-0 right-50"></div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-12 space-y-4"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold">
          <span className="bg-gradient-to-r from-purple-600 to-purple-300 text-transparent bg-clip-text">
            MY SKILLS
          </span>
        </h1>
        <p className="text-lg text-gray-300">
          I craft tailored web solutions by blending creativity with technical
          precision—powered by these technologies to elevate your brand and
          engage your audience.
        </p>
      </motion.div>

      {/* Skills Cards */}
      <motion.div
        className="flex flex-wrap justify-center gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {Icons.map((skill, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="w-[120px] h-[120px] flex flex-col items-center justify-center space-y-2 rounded-lg bg-white/5 border border-gray-800 backdrop-blur-xl shadow-lg hover:bg-[#1a1535d2] hover:border-purple-500 transition-all duration-200"
          >
            <div className="text-white">{skill.icon}</div>
            <span className="text-purple-200 text-sm font-medium">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
