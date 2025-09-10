import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    company: "Katalyx Media Agency",
    review:
      "Sabeeh is a great web developer to work with. From the beginning to the end Sabeeh’s communication and attention to detail amazed me. If your looking for a reliable web developer who’s easy to work with, work with Sabeeh",
    name: "Laksh Puri",
    designation: "Owner",
  },
  {
    company: "SkyWebDesign Agency",
    review:
      "Sabeeh created an exceptional website for our agency, capturing our brand essence perfectly. His expertise in design and development ensured a seamless experience from concept to launch.",
    name: "Luspex",
    designation: "Owner",
  },
  {
    company: "Yash",
    review:
      "Sabeeh brilliantly translated our Figma design into a stunning, functional website. His attention to detail and technical proficiency exceeded our expectations.",
    name: "Yash",
    designation: "Client",
  },
  {
    company: "Wajeeh",
    review:
      "Working with Sabeeh was a delight. He not only met but exceeded our expectations with his professionalism and creativity. Our new website has received rave reviews!",
    name: "Wajeeh",
    designation: "Client",
  },
];

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
  );
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
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-3xl mx-auto mb-14 space-y-4"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          <span className="italic text-[var(--color-accent)]">Client</span> Stories
        </h1>
        <p className="text-[var(--color-primary)] text-base sm:text-lg font-medium">
          Experiences shared by some amazing clients I had the privilege to work
          with.
        </p>
      </motion.div>

      {/* Carousel */}
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="flex-[0_0_100%] sm:flex-[0_0_70%] md:flex-[0_0_55%] lg:flex-[0_0_40%] px-1"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="bg-[var(--color-section)] border border-[#f5dec8] rounded-2xl p-8 h-full shadow-lg hover:shadow-amber-200/20 transition-all flex flex-col justify-between">
                  <FaQuoteLeft className="text-[var(--color-accent)] text-2xl mb-4" />
                  <p className="text-[var(--color-primary)] text-base italic">"{t.review}"</p>
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-[var(--color-accent)]">{t.company}</h3>
                    <p className="text-[var(--color-primary)] text-sm">
                      {t.name} — {t.designation}
                    </p>
                  </div>
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

export default Testimonials;
