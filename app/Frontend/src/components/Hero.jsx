import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { IoMdContact } from "react-icons/io";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="absolute w-[150px] h-[150px] top-20 left-10 bg-purple-400 z-30 opacity-30 " style={{borderRadius : "30%"}}></div>
      <div className="absolute w-[150px] h-[150px] top-100 right-10 bg-purple-400 z-30 opacity-30 " style={{borderRadius : "30%"}}></div>
      <div className="relative lg:h-[100vh] w-full text-white text-center flex items-center justify-center px-20 backdrop-blur-2xl z-40">
        <div className="px-50 space-y-4">
          <h1 className="font-bold lg:text-3xl">
            <span className="">Hello,</span> I'm Sabeeh Uddin
          </h1>
          <h1 className="font-extrabold lg:text-6xl ">
            <span className="bg-gradient-to-r from-purple-600 to-purple-400 text-transparent bg-clip-text">
              Full Stack Developer
            </span>
          </h1>
          <p className="font-semibold text-lg">
            I craft intuitive, high-performing websites and web apps using
            modern technologies like React, Node.js, and MongoDB. My mission is
            to simplify complex ideas into clean, scalable solutions that
            elevate user experiences.
          </p>
          <div className="flex items-center justify-center gap-5">
            <Link to="/contact">
              <button className="flex items-center gap-1 font-semibold px-6 py-2 bg-purple-600 rounded-xl cursor-pointer hover:bg-purple-700 hover:border-1 hover:border-purple-300">
                <IoMdContact className="lg:text-lg" /> <p>Contact</p>
              </button>
            </Link>

            <a
              className="hover:text-purple-300"
              href="https://www.linkedin.com/in/sabeeh-uddin-91464a252/"
              target="blank"
            >
              <FaLinkedin className="lg:text-2xl cursor-pointer" />
            </a>
            <a
              className="hover:text-purple-300"
              href="https://github.com/sab-eeh"
              target="blank"
            >
              <FaGithub className="lg:text-2xl cursor-pointer" />
            </a>
            <a className="hover:text-purple-300" href="">
              <BiLogoGmail className="lg:text-2xl cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
