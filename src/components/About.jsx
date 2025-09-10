import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="w-full bg-[var(--color-section)] text-[var(--color-primary)] px-6 sm:px-10 lg:px-16 py-16 rounded-2xl shadow-inner shadow-amber-100 inset-shadow-amber-100">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Section Heading */}
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center text-[var(--color-accent)] uppercase tracking-widest text-sm sm:text-base font-semibold"
        >
          About Me
        </motion.h3>

        {/* Main Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center leading-snug"
        >
          Crafting{" "}
          <span className="italic text-[var(--color-secondary)]">scalable solutions</span> &{" "}
          <span className="italic text-[var(--color-secondary)]">impactful</span> digital
          experiences
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-base sm:text-lg md:text-xl leading-relaxed text-[var(--color-primary)] text-center"
        >
          Hey, I’m a passionate{" "}
          <span className="text-[var(--color-secondary)] font-semibold">web developer</span>{" "}
          with a strong foundation in both frontend and backend technologies.
          Currently pursuing a Bachelor's degree in Computer Science at UIT
          University, I specialize in building modern, responsive web
          experiences using the{" "}
          <span className="text-[var(--color-secondary)] font-medium">MERN stack</span> and{" "}
          <span className="text-[var(--color-secondary)] font-medium">WordPress</span>.
          <br /> <br />
          With a keen eye for usability and performance, I create websites and
          applications that balance clean design with solid engineering. From
          dynamic UIs to robust backend systems, I aim to deliver products that
          are both functional and user-focused.
          <br /> <br />
          Beyond development, I’m an active member of{" "}
          <span className=" text-[var(--color-secondary)] font-medium">
            Google Developer Group on Campus (GDGOC)
          </span>{" "}
          and was shortlisted among the{" "}
          <span className="text-[var(--color-secondary)] font-medium">
            Top 5 teams at a national-level hackathon
          </span>
          . Let’s build something meaningful together — where{" "}
          <span className="italic text-[var(--color-secondary)]">design meets code</span> and
          ideas become reality.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
