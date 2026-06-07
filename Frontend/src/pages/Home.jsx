import { lazy, Suspense } from "react";

import Hero from "../features/home/Hero";

const About = lazy(() => import("../features/home/About.jsx"));
const Skills = lazy(() => import("../features/home/Skills"));
const Services = lazy(() => import("../features/home/Services.jsx"));
const WorkPreview = lazy(() => import("../features/home/WorkPreview.jsx"));
const Testimonials = lazy(() => import("../features/home/Testimonials.jsx"));
const CTA = lazy(() => import("../features/home/CTA.jsx"));
const Contact = lazy(() => import("../features/home/Contact.jsx"));

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

      <Suspense fallback={null}>
        <Services />
      </Suspense>

      <Suspense fallback={null}>
        <About />
      </Suspense>

      <Suspense fallback={null}>
        <Skills />
      </Suspense>

      <Suspense fallback={null}>
        <WorkPreview />
      </Suspense>

      <Suspense fallback={null}>
        <CTA />
      </Suspense>

      <Suspense fallback={null}>
        <Testimonials />
      </Suspense>

      <Suspense fallback={null}>
        <Contact />
      </Suspense>
    </main>
  );
};

export default Home;
