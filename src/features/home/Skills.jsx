import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import { FaHtml5, FaWordpress, FaNodeJs, FaFigma } from "react-icons/fa";

import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";

import { SiExpress, SiMongodb, SiMysql } from "react-icons/si";

import { BiLogoTypescript } from "react-icons/bi";

import { RiNextjsFill } from "react-icons/ri";

const skills = [
  {
    icon: <FaHtml5 />,
    name: "HTML5",
  },

  {
    icon: <IoLogoCss3 />,
    name: "CSS3",
  },

  {
    icon: <IoLogoJavascript />,
    name: "JavaScript",
  },

  {
    icon: <BiLogoTypescript />,
    name: "TypeScript",
  },

  {
    icon: <RiNextjsFill />,
    name: "Next.js",
  },

  {
    icon: <FaNodeJs />,
    name: "Node.js",
  },

  {
    icon: <SiExpress />,
    name: "Express",
  },

  {
    icon: <SiMongodb />,
    name: "MongoDB",
  },

  {
    icon: <SiMysql />,
    name: "MySQL",
  },

  {
    icon: <FaWordpress />,
    name: "WordPress",
  },

  {
    icon: <FaFigma />,
    name: "Figma",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="
      relative

      overflow-hidden

      bg-[#f5f5f5]

      py-16
      md:py-20
      "
    >
      {/* BACKGROUND GLOW */}
      <div
        className="
        absolute
        top-1/2
        left-1/2
        -translate-x-1/2
        -translate-y-1/2

        w-[420px]
        h-[420px]

        rounded-full

        bg-orange-500/[0.06]

        blur-[120px]

        pointer-events-none
        "
      />

      <div
        className="
        relative
        z-10

        max-w-[1440px]
        mx-auto

        px-4
        sm:px-6
        lg:px-8
        "
      >
        {/* HEADER */}
        <div
          className="
          max-w-3xl

          mx-auto

          text-center
          "
        >
          {/* BADGE */}
          <div
            className="
            inline-flex
            items-center
            gap-2

            rounded-full

            border
            border-black/10

            bg-white/70

            px-3.5
            py-1.5

            mb-5
            "
          >
            <Sparkles size={13} className="text-orange-500" />

            <span
              className="
              text-[12px]
              font-medium
              tracking-[-0.01em]

              text-black/60
              "
            >
              Technologies & Tools
            </span>
          </div>

          {/* TITLE */}
          <h2
            className="
            text-[36px]
            sm:text-[44px]
            md:text-[52px]
            lg:text-[58px]

            font-semibold

            leading-[0.95]
            tracking-[-0.05em]

            text-[#111111]
            "
          >
            Skills & Tools
            <br />I Use Everyday
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
            mt-5

            max-w-2xl

            mx-auto

            text-[15px]
            sm:text-[16px]

            leading-relaxed

            text-black/60
            "
          >
            Building premium digital experiences using modern frontend systems,
            scalable backend technologies, UI/UX tools, and production-ready
            workflows.
          </p>
        </div>

        {/* SKILLS GRID */}
        <div
          className="
          mt-12

          grid
          grid-cols-3
          sm:grid-cols-4
          lg:grid-cols-7
          xl:grid-cols-7

          gap-4
          "
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.35,
                delay: index * 0.04,
              }}
              whileHover={{
                y: -4,
              }}
              className="
              group

              relative

              overflow-hidden

              rounded-[24px]

              border
              border-black/[0.05]

              bg-white/80

              backdrop-blur-xl

              px-4
              py-5

              transition-all
              duration-300

              hover:border-orange-200
              hover:shadow-[0_15px_40px_rgba(0,0,0,0.05)]
              "
            >
              {/* HOVER GLOW */}
              <div
                className="
                absolute
                inset-0

                opacity-0
                group-hover:opacity-100

                transition-opacity
                duration-500

                bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.08),transparent_55%)]

                pointer-events-none
                "
              />

              {/* CONTENT */}
              <div
                className="
                relative
                z-10

                flex
                flex-col
                items-center

                text-center
                "
              >
                {/* ICON BOX */}
                <div
                  className="
                  flex
                  items-center
                  justify-center

                  w-10
                  h-10

                  rounded-2xl

                  bg-orange-500/[0.08]

                  text-[26px]
                  text-orange-500

                  transition-all
                  duration-300

                  group-hover:bg-orange-500
                  group-hover:text-white
                  group-hover:scale-105
                  "
                >
                  {skill.icon}
                </div>

                {/* SKILL NAME */}
                <h3
                  className="
                  mt-4

                  text-[15px]
                  sm:text-[16px]

                  font-medium

                  tracking-[-0.01em]

                  text-[#111111]
                  "
                >
                  {skill.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
