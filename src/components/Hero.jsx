import React from "react";
import { motion } from "framer-motion";
import { FaCircleArrowRight } from "react-icons/fa6";

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Hero = () => {
  return (
    <div className="relative w-full text-white text-center flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-20 py-16 md:py-24 lg:py-0 lg:h-[100vh] backdrop-blur-xl bg-[#F6F6F6] shadow-lg">
      <div className="max-w-5xl pt-15 w-full space-y-6">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-semibold text-2xl sm:text-3xl md:text-2xl text-black"
          >
            👋 Hello, I’m Sabeeh Uddin and I am a freelance
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className=" text-4xl sm:text-5xl md:text-7xl leading-tight"
          >
            <span className="text-black -tracking-tighter font-extrabold">
              WEB DESINER
            </span>
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="heading-Inter text-4xl sm:text-5xl md:text-7xl leading-tight "
          >
            <span className="text-black font-extrabold outlined-text tracking-wider ">
              & FULL STACK DEVELOPER
            </span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="font-medium text-base sm:text-lg md:text-xl leading-relaxed px-2 md:px-0 text-[black]"
        >
          I design and develop fast, user-friendly websites and web applications
          using modern technologies like React, Node.js, and MongoDB. My goal is
          to turn complex ideas into clean, scalable solutions that deliver
          exceptional user experiences.
        </motion.p>
        <button
          onClick={() => scrollToSection("contact")}
          className="bg-black py-3 px-5  rounded-3xl flex items-center border border-black gap-4 mx-auto cursor-pointer text-white hover:text-black hover:bg-white  font-medium"
        >
          Get in Touch
          <FaCircleArrowRight size={22} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
