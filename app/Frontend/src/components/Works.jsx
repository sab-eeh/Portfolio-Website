import React from "react";
import { FaGithub } from "react-icons/fa";
import image1 from "../assets/images/spotify ui.png";
import image2 from "../assets/images/news web.png";
import image3 from "../assets/images/inotebook.jpg";

const projects = [
  {
    img: image1,
    title: "Spotify UI Clone",
    description:
      "A beautiful front-end replica of Spotify's interface built with modern UI principles and smooth transitions. It offers an immersive design experience using clean layout and dark mode aesthetics.",
    tech: ["React.js", "TailwindCSS", "Framer Motion"],
    github: "https://github.com/sab-eeh/React-Spotify-Clone",
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

const Works = () => {
  return (
    <div className="px-6 py-20 lg:px-20 text-white">
      <div className="text-center space-y-4 mb-12">
        <h1 className="font-extrabold text-4xl lg:text-6xl">
          <span className="bg-gradient-to-r from-purple-600 to-purple-300 text-transparent bg-clip-text">
            My Work
          </span>
        </h1>
        <p className="text-lg text-gray-300">
          A glimpse into some of the projects I’ve built recently.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row flex-wrap justify-center lg:items-stretch gap-8 items-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-full sm:w-[90%] md:w-[80%] lg:w-[30%] border border-gray-800 rounded-2xl backdrop-blur-2xl bg-[#1a153557] hover:bg-[#1a153577] transition-all duration-300 p-6 space-y-5"
          >
            <div>
            <img src={project.img} alt="project image" className="rounded-xl object-cover w-full " />
            </div>
            <h2 className="text-2xl font-bold text-purple-400">
              {project.title}
            </h2>
            <p className="text-gray-300">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-sm bg-purple-800/20 border border-purple-500 px-2 py-1 rounded-full text-purple-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-200 transition-all"
            >
              <FaGithub className="text-lg" />
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
