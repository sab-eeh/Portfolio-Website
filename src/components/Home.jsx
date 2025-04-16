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
    <main className="scroll-smooth pt-12">
      <section id="home">
        <Hero />
      </section>
      <section id="about" >
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="works">
        <Works/>
      </section>
      <section id="workflow">
        <WorkFlow />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
};

export default Home;
