import React from "react";

const About = () => {
  return (
    <div className="text-white px-4 sm:px-6 md:px-10 lg:px-20 py-10 sm:py-14 lg:py-20">
      <div className="space-y-4 text-center lg:text-left">
        <h1 className="text-purple-200 font-medium text-lg sm:text-xl md:text-2xl">
          INTRODUCTION
        </h1>
        <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl">
          <span className="bg-gradient-to-r from-purple-600 to-purple-300 text-transparent bg-clip-text">
            About Me.
          </span>
        </h1>
      </div>

      <div className="pt-8 mx-auto lg:mx-0">
        <p className="text-base sm:text-lg leading-relaxed text-center lg:text-left">
          I'm Sabeeh Uddin, a dedicated{" "}
          <span className="text-purple-400">Web developer</span> currently
          pursuing a Bachelor's degree in Computer Science at{" "}
          <span className="text-purple-400">UIT University</span>. With a strong
          focus on both frontend and backend development, I specialize in the
          MERN stack and WordPress, creating scalable, responsive, and
          user-centric web applications.
          <br />
          <br />
          In addition to my academic and freelance work, I am an active member
          of{" "}
          <span className="text-purple-400">
            Google Developer Group on Campus UIT (GDGOC)
          </span>
          .
          <br />
          I also had the opportunity to participate in a national-level
          hackathon, where my team was shortlisted among the{" "}
          <span className="text-purple-400">Top 5 finalists</span>, highlighting
          my ability to collaborate effectively and develop innovative technical
          solutions under pressure.
        </p>
      </div>
    </div>
  );
};

export default About;
