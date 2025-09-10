// src/components/Works.jsx
import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import image1 from "../assets/images/spotify ui.webp";
import image2 from "../assets/images/news web.webp";
import image3 from "../assets/images/inotebook.webp";
import image4 from "../assets/images/ecommerce.webp";
import image5 from "../assets/images/precision.webp";
import image6 from "../assets/images/katalyxmedia.webp";

const projects = [
  {
    img: image4,
    title: "Ecommerce Website",
    description:
      "A full-stack ecommerce platform for purchasing Apple iPhones online with a seamless shopping experience, responsive design, and secure transactions.",
    tech: ["React.js", "TailwindCSS", "Node.js", "MySQL"],
    github: "https://github.com/sab-eeh/Iphone-Purchase-Ecommerce-Website",
  },
  {
    img: image5,
    title: "Precision Toronto",
    description:
      "A client project for a detailing business featuring a modern interface and an integrated booking system to streamline customer appointments.",
    tech: ["React.js", "TailwindCSS", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/sab-eeh/Precision-Toronto",
  },
  {
    img: image6,
    title: "Katalyx Media",
    description:
      "A sleek, conversion-focused landing page built for a marketing agency to showcase services and strengthen brand presence online.",
    tech: ["Next.js", "TailwindCSS", "Framer Motion"],
    github: "https://github.com/sab-eeh/katalyx-Media-Landing-Page",
  },
  {
    img: image1,
    title: "Spotify UI Clone",
    description:
      "A pixel-perfect front-end clone of Spotify’s interface featuring smooth transitions, immersive layouts, and a modern dark theme.",
    tech: ["React.js", "TailwindCSS", "Framer Motion"],
    github: "https://github.com/sab-eeh/Spotify-Clone",
  },
  {
    img: image3,
    title: "iNotebook",
    description:
      "A notes management app with authentication that allows users to create, edit, and organize notes securely in real time.",
    tech: ["React.js", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/sab-eeh/iNoteBook",
  },
  {
    img: image2,
    title: "News Application",
    description:
      "A responsive web app delivering live news updates with category filtering, clean UI, and smooth browsing experience.",
    tech: ["React.js", "NewsAPI", "Bootstrap"],
    github: "https://github.com/sab-eeh/News-Application",
  },
];

const Works = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: "trimSnaps", // makes sure no empty gaps
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollTo = useCallback(
    (i) => emblaApi && emblaApi.scrollTo(i),
    [emblaApi]
  );
  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", () =>
      setSelectedIndex(emblaApi.selectedScrollSnap())
    );
  }, [emblaApi]);

  return (
    <section className="w-full bg-[var(--color-section)] text-[var(--color-primary)] px-6 sm:px-10 lg:px-14 py-20 rounded-2xl shadow-inner shadow-amber-100">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-3xl mx-auto mb-14 space-y-4"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          <span className="italic text-[#d0bfae]">My</span> Works
        </h1>
        <p className="text-[var(--color-primary)] text-base sm:text-lg font-medium">
          A glimpse into some of the projects I’ve built recently.
        </p>
      </motion.div>

      {/* Carousel */}
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="flex-[0_0_100%] sm:flex-[0_0_70%] md:flex-[0_0_55%] lg:flex-[0_0_33%] px-1"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="bg-[#111111] border border-[#f5dec8] rounded-2xl p-6 space-y-5 shadow-lg hover:shadow-amber-200/20 transition-all flex flex-col h-full">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="rounded-xl w-full object-cover h-48"
                  />
                  <div className="flex-grow flex flex-col space-y-3">
                    <h2 className="text-2xl font-bold text-[var(--color-secondary)]">
                      {project.title}
                    </h2>
                    <p className="text-[var(--color-primary)] text-sm flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs border border-[#d0bfae] px-2 py-1 rounded-full text-[var(--color-primary)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-all mt-auto"
                  >
                    <FaGithub className="text-lg" />
                    View Project
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <button
          onClick={scrollPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#111111] p-3 rounded-full border border-[#d0bfae] hover:bg-[#d0bfae]/20 transition"
        >
          <ChevronLeft className="text-[var(--color-primary)]" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#111111] p-3 rounded-full border border-[#d0bfae] hover:bg-[#d0bfae]/20 transition"
        >
          <ChevronRight className="text-[var(--color-primary)]" />
        </button>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-6">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`w-3 h-3 rounded-full transition ${
                i === selectedIndex
                  ? "bg-[#d0bfae]"
                  : "bg-gray-600 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
