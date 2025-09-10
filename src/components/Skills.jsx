import React from "react";
import { FaHtml5, FaWordpress } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { FaReact, FaNodeJs, FaFigma } from "react-icons/fa6";
import { SiExpress, SiMongodb, SiMysql } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { motion } from "framer-motion";

const Icons = [
  { icon: <FaHtml5 size={38} />, name: "HTML5" },
  { icon: <IoLogoCss3 size={38} />, name: "CSS3" },
  { icon: <IoLogoJavascript size={38} />, name: "JavaScript" },
  { icon: <BiLogoTypescript size={38} />, name: "TypeScript" },
  { icon: <FaReact size={38} />, name: "React" },
  { icon: <FaNodeJs size={38} />, name: "Node.js" },
  { icon: <SiExpress size={38} />, name: "Express.js" },
  { icon: <RiNextjsFill size={38} />, name: "Next.js" },
  { icon: <SiMongodb size={38} />, name: "MongoDB" },
  { icon: <SiMysql size={38} />, name: "MySQL" },
  { icon: <FaWordpress size={38} />, name: "WordPress" },
  { icon: <FaFigma size={38} />, name: "Figma" },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const Skills = () => {
  return (
    <section className="w-full bg-[var(--color-section)] text-[var(--color-primary)] px-6 sm:px-10 lg:px-16 py-16 rounded-2xl  shadow-inner shadow-amber-100 inset-shadow-amber-100 ">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-14 space-y-4"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          <span className="italic text-[var(--color-secondary)]">My</span> Skills
        </h1>
        <p className="text-[var(--color-primary)] text-base sm:text-lg font-medium">
          From crafting seamless user interfaces to building powerful backend
          systems, these are the tools and technologies I use to bring ideas to
          life.
        </p>
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {Icons.map((skill, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.08, y: -4 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
            className="flex flex-col items-center justify-center p-5 rounded-xl 
                       bg-[#111111] border border-[#f5dec8]
                    
                    
                       hover:border-[#d0bfae]/60 transition-all"
          >
            <div className="text-[var(--color-secondary)]">{skill.icon}</div>
            <span className="text-sm font-medium text-[var(--color-primary)] mt-2">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
