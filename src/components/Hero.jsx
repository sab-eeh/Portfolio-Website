import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { IoMdContact } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
            <span className="text-black tracking-wide font-extrabold">
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

        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 md:gap-5 pt-4"
        >
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 font-semibold px-6 py-2 border-1 border-purple-600 rounded-xl cursor-pointer hover:bg-purple-600 "
            >
              <IoMdContact className="text-lg md:text-xl" />
              <p>Contact</p>
            </motion.button>
          </Link>

          <div className="flex gap-2">
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.4 }}
              whileHover={{ scale: 1.1 }}
              href="https://www.linkedin.com/in/sabeeh-uddin-91464a252/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-purple-600 border-1 border-purple-500 p-2 rounded-4xl"
            >
              <FaLinkedin className="text-lg md:text-2xl cursor-pointer" />
            </motion.a>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.4 }}
              whileHover={{ scale: 1.1 }}
              href="https://github.com/sab-eeh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-purple-600 border-1 border-purple-500 p-2 rounded-4xl"
            >
              <FaGithub className="text-xl md:text-2xl cursor-pointer" />
            </motion.a>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.4 }}
              whileHover={{ scale: 1.1 }}
              href="mailto:usabeeh72@gmail.com"
              className="hover:bg-purple-600 border-1 border-purple-500 p-2 rounded-4xl"
            >
              <BiLogoGmail className="text-xl md:text-2xl cursor-pointer" />
            </motion.a>
          </div>
        </motion.div> */}
      </div>
    </div>
  );
};

export default Hero;
