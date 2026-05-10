import React, { useEffect, useState, useCallback } from "react";

import useEmblaCarousel from "embla-carousel-react";

import { motion } from "framer-motion";

import { ChevronLeft, ChevronRight, Star, Quote, Sparkles } from "lucide-react";

const testimonials = [
  {
    name: "Katalyx Media Agency",

    role: "Laksh Puri — Owner",

    review:
      "Sabeeh is a great web developer to work with. From beginning to end, his communication and attention to detail amazed me. Reliable, skilled, and easy to collaborate with.",
  },

  {
    name: "SkyWebDesign Agency",

    role: "Luspex — Owner",

    review:
      "Sabeeh created an exceptional website for our agency and captured our brand perfectly. His design and development process was seamless from concept to launch.",
  },

  {
    name: "Yash",

    role: "Client",

    review:
      "Sabeeh translated our Figma design into a stunning and functional website. His technical proficiency and attention to detail exceeded expectations.",
  },

  {
    name: "Wajeeh",

    role: "Client",

    review:
      "Working with Sabeeh was an excellent experience. Professional, creative, and detail-oriented. The final product received amazing feedback from our audience.",
  },
];

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);

    onSelect();
  }, [emblaApi]);

  return (
    <section
      id="testimonials"
      className="
      relative

      overflow-hidden

      bg-[#f5f5f5]

      py-16
      md:py-20
      "
    >
      <div
        className="
        max-w-[1440px]
        mx-auto

        px-4
        sm:px-6
        lg:px-8
        "
      >
        {/* MAIN CONTAINER */}
        <div
          className="
          relative

          overflow-hidden

          rounded-[28px]
          lg:rounded-[32px]

          bg-[#111111]

          px-5
          sm:px-6
          lg:px-8

          py-8
          lg:py-10

          shadow-[0_20px_60px_rgba(0,0,0,0.12)]
          "
        >
       

          {/* ORANGE GLOW */}
          <div
            className="
            absolute
            top-0
            left-1/2
            -translate-x-1/2

            w-[320px]
            h-[320px]

            bg-orange-500/[0.08]

            blur-[100px]

            pointer-events-none
            "
          />

          {/* HEADER */}
          <div
            className="
            relative
            z-10

            text-center

            max-w-2xl

            mx-auto
            "
          >
            {/* BADGE */}
            <div
              className="
              inline-flex
              items-center
              gap-2

              rounded-full

              border
              border-white/10

              bg-white/[0.03]

              px-3.5
              py-1.5

              mb-4
              "
            >
              <Sparkles size={13} className="text-orange-500" />

              <span
                className="
                text-[12px]
                font-medium
                tracking-[-0.01em]

                text-white/60
                "
              >
                Client Feedback
              </span>
            </div>

            {/* TITLE */}
            <motion.h2
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
              }}
              className="
              text-[34px]
              sm:text-[40px]
              md:text-[46px]
              lg:text-[50px]

              font-semibold

              leading-[0.95]
              tracking-[-0.05em]

              text-white
              "
            >
              Testimonials That
              <br />
              Speak To <span className="text-orange-500">My Results</span>
            </motion.h2>

            {/* DESCRIPTION */}
            <motion.p
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{
                delay: 0.1,
              }}
              className="
              mt-5

              max-w-md

              mx-auto

              text-[14px]
              sm:text-[15px]

              leading-relaxed

              text-white/55
              "
            >
              Feedback from agencies, founders, and clients I’ve worked with
              across modern frontend and full stack projects.
            </motion.p>
          </div>

          {/* CAROUSEL */}
          <div className="relative mt-10">
            {/* EMBLA */}
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {testimonials.map((testimonial, index) => {
                  const isActive = selectedIndex === index;

                  return (
                    <div
                      key={index}
                      className="
                        flex-[0_0_92%]
                        sm:flex-[0_0_75%]
                        lg:flex-[0_0_52%]

                        px-2.5
                        "
                    >
                      <motion.div
                        animate={{
                          opacity: isActive ? 1 : 0.4,

                          scale: isActive ? 1 : 0.94,
                        }}
                        transition={{
                          duration: 0.35,
                        }}
                        className="
                          relative

                          overflow-hidden

                          rounded-[24px]

                          border
                          border-white/6

                          bg-white/[0.04]

                          p-5
                          sm:p-6

                          min-h-[240px]
                          "
                      >
                        {/* QUOTE ICON */}
                        <div
                          className="
                            absolute
                            bottom-4
                            right-5

                            text-white/[0.06]
                            "
                        >
                          <Quote size={70} strokeWidth={1.4} />
                        </div>

                        {/* STARS */}
                        <div
                          className="
                            flex
                            items-center
                            gap-1
                            "
                        >
                          {Array(5)
                            .fill()
                            .map((_, i) => (
                              <Star
                                key={i}
                                size={14}
                                fill="currentColor"
                                className="text-orange-500"
                              />
                            ))}

                          <span
                            className="
                              text-[13px]

                              text-white/55

                              ml-2
                              "
                          >
                            5.0
                          </span>
                        </div>

                        {/* REVIEW */}
                        <p
                          className="
                            mt-5

                            text-[14px]
                            sm:text-[15px]

                            leading-relaxed

                            text-white/65
                            "
                        >
                          {testimonial.review}
                        </p>

                        {/* USER */}
                        <div className="mt-7">
                          <h3
                            className="
                              text-[15px]

                              font-medium

                              text-white
                              "
                          >
                            {testimonial.name}
                          </h3>

                          <p
                            className="
                              mt-1

                              text-[13px]

                              text-white/45
                              "
                          >
                            {testimonial.role}
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* NAVIGATION */}
            <div
              className="
              flex
              items-center
              justify-center

              gap-3

              mt-8
              "
            >
              {/* PREV */}
              <button
                onClick={scrollPrev}
                className="
                w-10
                h-10

                rounded-full

                border
                border-white/10

                bg-white/[0.04]

                flex
                items-center
                justify-center

                text-white

                transition-all
                duration-300

                hover:bg-white/[0.08]
                "
              >
                <ChevronLeft size={17} />
              </button>

              {/* NEXT */}
              <button
                onClick={scrollNext}
                className="
                w-10
                h-10

                rounded-full

                bg-orange-500

                flex
                items-center
                justify-center

                text-white

                transition-all
                duration-300

                hover:bg-orange-600
                "
              >
                <ChevronRight size={17} />
              </button>
            </div>

            {/* PAGINATION */}
            <div
              className="
              flex
              justify-center

              gap-2

              mt-5
              "
            >
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={`
                  rounded-full

                  transition-all
                  duration-300

                  ${
                    i === selectedIndex
                      ? `
                        w-5
                        h-2

                        bg-orange-500
                      `
                      : `
                        w-2
                        h-2

                        bg-white/20
                      `
                  }
                  `}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
