import React from "react";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import WorkFlow from "./WorkFlow";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Works from "./Works";

const Home = () => {
  return (
    <main className="p-2 w-full min-h-screen bg-[#362b22] text-white font-[Poppins] overflow-x-hidden scroll-smooth flex flex-col gap-2">
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Skills Section */}
      <section id="skills">
        <Skills />
      </section>

      {/* Works Section */}
      <section id="works">
        <Works />
      </section>

      {/* Workflow Section */}
      <section id="workflo">
        <WorkFlow />
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className=""
      >
        <Testimonials />
      </section>

      {/* Contact Section */}
      <section id="contact" className="">
        <Contact />
      </section>
    </main>
  );
};

export default Home;
