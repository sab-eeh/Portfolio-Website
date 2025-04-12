import React from "react";
import { FaHtml5, FaWordpress } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { FaReact, FaNodeJs, FaFigma } from "react-icons/fa6";
import { SiExpress, SiMongodb, SiMysql } from "react-icons/si";

const Icons = [
  { icon: <FaHtml5 size={40} />, name: "HTML5" },
  { icon: <IoLogoCss3 size={40} />, name: "CSS3" },
  { icon: <IoLogoJavascript size={40} />, name: "JavaScript" },
  { icon: <FaReact size={40} />, name: "React" },
  { icon: <FaNodeJs size={40} />, name: "Node.js" },
  { icon: <SiExpress size={40} />, name: "Express.js" },
  { icon: <SiMongodb size={40} />, name: "MongoDB" },
  { icon: <SiMysql size={40} />, name: "MySQL" },
  { icon: <FaWordpress size={40} />, name: "WordPress" },
  { icon: <FaFigma size={40} />, name: "Figma" },
];

const Skills = () => {
  return (
    <div className="text-white px-4 md:px-10 lg:px-20 py-14">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          <span className="bg-gradient-to-r from-purple-600 to-purple-300 text-transparent bg-clip-text">
            MY SKILLS
          </span>
        </h1>
        <p className="text-lg text-gray-300">
          I craft tailored web solutions by blending creativity with technical
          precision—powered by these technologies to elevate your brand and engage your audience.
        </p>
      </div>

      {/* Flex icon cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {Icons.map((skill, index) => (
          <div
            key={index}
            className="w-[120px] h-[120px] flex flex-col items-center justify-center space-y-2 rounded-lg border border-gray-700 bg-[#1a153557] hover:bg-[#1a1535d2] hover:border-purple-500 transition-all duration-200"
          >
            <div className="text-white">{skill.icon}</div>
            <span className="text-purple-200 text-sm font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
