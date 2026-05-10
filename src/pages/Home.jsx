import Hero from "../features/home/Hero";

import { About } from "../features/home/About";

import Skills from "../features/home/Skills";

import Services from "../features/home/Services";

import WorkPreview from "../features/home/WorkPreview";

import Testimonials from "../features/home/Testimonials";

import CTA from "../features/home/CTA";

import Contact from "../features/home/Contact";



const Home = () => {
  return (
    <main
      className="
      w-full

      overflow-x-hidden

      bg-[#f5f5f5]
      "
    >
      {/* HERO */}
      <Hero />

      {/* SERVICES */}
      <Services />

      {/* ABOUT */}
      <About />

      {/* SKILLS */}
      <Skills />

      {/* PROJECTS */}
      <WorkPreview />
      {/* CTA */}
      <CTA />

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* CONTACT */}
      <Contact />
    </main>
  );
};

export default Home;
