import React from "react";
import { FaHtml5, FaWordpress } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { FaReact, FaNodeJs, FaFigma } from "react-icons/fa6";
import { SiExpress, SiMongodb , SiMysql  } from "react-icons/si";

const Icons = [
  { icon: <FaHtml5 className="text-white" size={46} />, name: "HTML5" },
  { icon: <IoLogoCss3 className="text-white" size={46} />, name: "CSS3" },
  {
    icon: <IoLogoJavascript className="text-white" size={46} />,
    name: "JavaScript",
  },
  { icon: <FaReact className="text-white" size={46} />, name: "React" },
  { icon: <FaNodeJs className="text-white" size={46} />, name: "Node.js" },
  { icon: <SiExpress className="text-white" size={46} />, name: "Express.js" },
  { icon: <SiMongodb className="text-white" size={46} />, name: "MongoDB" },
  { icon: <SiMysql  className="text-white" size={46} />, name: "MySQL" },
  { icon: <FaWordpress className="text-white" size={46} />, name: "WordPress" },
  { icon: <FaFigma className="text-white" size={46} />, name: "Figma" },
];
const Skills = () => {
  return (
    <>
      <div className="lg:flex lg:flex-col lg:gap-18 lg:px-20 lg:py-10 text-white">
        <div className="text-center lg:space-y-4 lg:px-30">
          <h1 className="font-extrabold lg:text-6xl">
            <span className="bg-gradient-to-r from-purple-600 to-purple-300 text-transparent bg-clip-text">
              MY SKILLS
            </span>
          </h1>
          <p className="text-white text-lg">
            I craft tailored web solutions by blending creativity with technical
            precision—powered by these technologies to elevate your brand and
            engage your audience.
          </p>
        </div>
        <div className="flex flex-wrap justify-center lg:gap-8 lg:px-20">
          {Icons.map((skill, index) => (
            <div
              key={index}
              className="w-30 border-1 border-gray-800 rounded-lg backdrop-blur-2xl bg-[#1a153557] lg:py-6 flex flex-col items-center space-y-2 text-center cursor-pointer hover:bg-[#1a1535d2] hover:border-gray-600"
            >
              {skill.icon}
              <span className="text-purple-200 text-md font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
