import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { IoMdContact } from "react-icons/io";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative w-full text-white text-center flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-20 py-16 md:py-24 lg:py-0 lg:h-[100vh]">
      <div className="max-w-5xl w-full space-y-6">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl">
          Hello, I'm Sabeeh Uddin
        </h1>

        <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight">
          <span className="bg-gradient-to-r from-purple-600 to-purple-400 text-transparent bg-clip-text">
            Full Stack Developer
          </span>
        </h1>

        <p className="font-medium text-base sm:text-lg md:text-xl leading-relaxed px-2 md:px-0">
          I craft intuitive, high-performing websites and web apps using modern
          technologies like React, Node.js, and MongoDB. My mission is to
          simplify complex ideas into clean, scalable solutions that elevate
          user experiences.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-5 pt-4">
          <Link to="/contact">
            <button className="flex items-center gap-2 font-semibold px-6 py-2 bg-purple-600 rounded-xl cursor-pointer hover:bg-purple-700 hover:border-1 hover:border-purple-300">
              <IoMdContact className="text-lg md:text-xl" />
              <p>Contact</p>
            </button>
          </Link>

          <a
            className="hover:text-purple-300"
            href="https://www.linkedin.com/in/sabeeh-uddin-91464a252/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-xl md:text-2xl cursor-pointer" />
          </a>
          <a
            className="hover:text-purple-300"
            href="https://github.com/sab-eeh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-xl md:text-2xl cursor-pointer" />
          </a>
          <a
            className="hover:text-purple-300"
            href="mailto:sabeehuddin.dev@gmail.com"
          >
            <BiLogoGmail className="text-xl md:text-2xl cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
