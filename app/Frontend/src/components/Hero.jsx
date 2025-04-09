import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { IoMdContact } from "react-icons/io";

const Home = () => {
  return (
    <>
      <div className="hero-section lg:h-[90vh] w-full text-white text-center flex items-center justify-center px-20">
        <div className="px-50 space-y-4">
          <h1 className="font-bold lg:text-3xl"><span className="">Hello,</span> I'm Sabeeh Uddin</h1>
          <h1 className="font-extrabold lg:text-6xl "><span className="bg-gradient-to-r from-purple-600 to-purple-400 text-transparent bg-clip-text">Full Stack Developer</span></h1>
          <p className="font-semibold text-lg">
            I craft intuitive, high-performing websites and web apps using
            modern technologies like React, Node.js, and MongoDB. My mission is
            to simplify complex ideas into clean, scalable solutions that
            elevate user experiences.
          </p>
          <div className="flex items-center justify-center gap-5">
            <button className="flex items-center gap-1 font-semibold px-6 py-2 bg-purple-600 rounded-xl cursor-pointer">
              <IoMdContact className="lg:text-lg" /> <p>Contact</p>
            </button>
            <FaLinkedin className="lg:text-2xl cursor-pointer" />
            <FaGithub className="lg:text-2xl cursor-pointer" />
            <BiLogoGmail className="lg:text-2xl cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
