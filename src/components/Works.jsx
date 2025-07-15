import React from "react";
import { FaGithub } from "react-icons/fa";
import { RiExternalLinkFill } from "react-icons/ri";
import { motion } from "framer-motion";
import image1 from "../assets/images/spotify ui.webp";
import image2 from "../assets/images/news web.webp";
import image3 from "../assets/images/inotebook.webp";
import appmockup from "../assets/images/smartphone/mobileapp.jpg";
import webmockup from "../assets/images/web/landingpage.jpg";

const projects = [
  {
    img: image1,
    title: "Spotify UI Clone",
    description:
      "A beautiful front-end replica of Spotify's interface built with modern UI principles and smooth transitions. It offers an immersive design experience using clean layout and dark mode aesthetics.",
    tech: ["React.js", "TailwindCSS", "Framer Motion"],
    github: "https://github.com/sab-eeh/Spotify-Clone",
    website: "https://sspotifyyclone.netlify.app/",
  },
  {
    img: image3,
    title: "iNotebook",
    description:
      "A full-stack notes management app with secure authentication. Users can create, edit, and delete personal notes in real-time with clean UI and protected routes.",
    tech: ["React.js", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/sab-eeh/iNoteBook",
  },
  {
    img: image2,
    title: "News Application",
    description:
      "A responsive application delivering real-time news from around the world. Built using external APIs, it features category-wise filtering and elegant UI components.",
    tech: ["React.js", "External NewsAPI", "Bootstrap"],
    github: "https://github.com/sab-eeh/News-Application",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Works = () => {
  return (
    <div className="px-6 py-20 lg:px-15 text-white backdrop-blur-xl bg-[#F6F6F6]">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4 mb-12"
      >
        <h1 className="font-extrabold text-4xl lg:text-6xl">
          <span className="text-black ">PORTFOLIO</span>
        </h1>
        <p className="text-lg text-black font-semibold">
          A glimpse into some of the projects I’ve built recently.
        </p>
      </motion.div>

      {/* Project Cards */}
      <motion.div
        className="flex flex-col lg:flex-row flex-wrap justify-center lg:items-stretch gap-8 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="w-full sm:w-[90%] md:w-[80%] lg:w-[30%] border bg-[#0F0F0F] border-gray-700 rounded-2xl shadow-xlh over:border-purple-500 transition-all duration-200 p-6 space-y-5 cursor-pointer"
          >
            <div>
              <img
                loading="lazy"
                src={project.img}
                alt="project image"
                className="rounded-xl object-cover w-full"
              />
            </div>
            <h2 className="text-2xl font-bold text-white">{project.title}</h2>
            <p className="text-[#979797]">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-sm border border-[#979797] px-2 py-1 rounded-full text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#979797] hover:text-white transition-all"
              >
                <FaGithub className="text-lg" />
                View Project
              </a>
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#979797] hover:text-white transition-all"
              >
                <RiExternalLinkFill className="text-lg" />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* <section class="w-full py-16 px-4 flex flex-col items-center text-center">
        <div class="mb-12 max-w-2xl">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-black ">
            Our Latest Designs
          </h2>
          <p class="text-lg text-black">
            A showcase of our recent UI concepts — crafted for web and mobile
            platforms.
          </p>
        </div>

        <div class="flex flex-col md:flex-row items-center justify-center gap-10">
          <div class="w-full md:w-2/3 max-w-[550px]">
            <img
              src={webmockup}
              alt="Web Dashboard Mockup"
              class="w-full h-auto rounded-xl shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>

          <div class="w-full md:w-1/3 max-w-[500px]">
            <img
              src={appmockup}
              alt="Mobile App Mockup"
              class="w-full h-auto rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Works;
