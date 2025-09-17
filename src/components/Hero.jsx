import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import image1 from "../assets/images/ecommerce.webp";
import image2 from "../assets/images/precision.webp";
import image3 from "../assets/images/katalyxmedia.webp";
import profile from "../assets/images/profile.png";

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

// Animation variants for reusable popout effect
const popout = {
  hidden: { opacity: 0, scale: 0.9, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

const Hero = () => {
  const [active, setActive] = useState("Soft Form");

  return (
    <section className="w-full min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-3 max-w-8xl mx-auto h-auto md:h-[100vh]">
        {/* Intro Card */}
        <motion.div
          variants={popout}
          initial="hidden"
          whileInView="visible"
          className="md:col-span-2 bg-[var(--color-section)] text-white rounded-xl p-8 flex items-center justify-center"
        >
          <h1 className="text-3xl md:text-5xl font-bold leading-snug text-center md:text-left">
            Full Stack{" "}
            <span className="italic text-[var(--color-secondary)]">
              Developer
            </span>{" "}
            & <span className="text-[var(--color-secondary)]">UI/UX</span>{" "}
            Designer.
          </h1>
        </motion.div>
        {/* Profile Image */}
        <motion.div
          variants={popout}
          initial="hidden"
          whileInView="visible"
          className="bg-[var(--color-section)] rounded-xl overflow-hidden flex items-center justify-center"
        >
          <img
            src={profile}
            alt="profile"
            className="w-full h-full object-cover"
          />
        </motion.div>
        {/* Showcase Options */}
        <motion.div
          variants={popout}
          initial="hidden"
          whileInView="visible"
          className="bg-[var(--color-section)] rounded-xl p-4 flex flex-col justify-between row-span-2"
        >
          {[
            {
              title: "Ecommerce Website",
              src: image1, // replace with your asset path
            },
            {
              title: "Precision Toronto",
              src: image2, // replace with your asset path
            },
            {
              title: "Landing Page",
              src: image3, // replace with your asset path
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-6 relative rounded-lg overflow-hidden"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
        {/* About Card */}
        <motion.div
          variants={popout}
          initial="hidden"
          whileInView="visible"
          className="bg-[var(--color-section)] rounded-xl p-6"
        >
          <p className="text-md leading-relaxed text-[var(--color-secondary)] text-center md:text-left">
            Hi, I'm Sabeeh Uddin, a full-stack developer and web designer
            specializing in crafting modern, scalable, and visually engaging
            digital experiences. I merge clean code with impactful design to
            create solutions that stand out.
          </p>
        </motion.div>
        {/* Contact Card */}
        <motion.div
          variants={popout}
          initial="hidden"
          whileInView="visible"
          onClick={() => scrollToSection("contact")}
          className="bg-[#A8977A] text-[#0f0f0d] rounded-xl p-6 flex flex-col justify-between cursor-pointer hover:scale-105 transition-transform"
        >
          <div className="text-sm text-[#0f0f0d]">Have some questions?</div>
          <div className="flex justify-between items-center mt-4">
            <h2 className="text-2xl font-bold italic">Contact me</h2>
            <FaCircleArrowRight size={26} />
          </div>
        </motion.div>
        {/* Social Icons */}
        <motion.div
          variants={popout}
          initial="hidden"
          whileInView="visible"
          className="bg-[var(--color-section)] rounded-xl flex flex-col items-center justify-center gap-4 p-4"
        >
          <p className="text-sm uppercase tracking-wide text-[var(--color-secondary)]">
            Connect with me
          </p>
          <div className="flex gap-6 text-2xl">
            <a
              href="https://www.linkedin.com/in/sabeeh-uddin-91464a252/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-3xl text-[var(--color-accent)] hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://github.com/sab-eeh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-3xl text-[var(--color-accent)] hover:scale-110 transition-transform" />
            </a>
            <a
              className="text-[var(--color-primary)] hover:text-[var(--color-accent)]"
              href="mailto:usabeeh72@gmail.com"
            >
              <BiLogoGmail className="text-3xl text-[var(--color-accent)] hover:scale-110 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
