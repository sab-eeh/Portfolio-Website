import { useCallback, useEffect, useState } from "react";

import useEmblaCarousel from "embla-carousel-react";

import { motion } from "framer-motion";

import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";

import landing from "../../assets/images/landingpage.webp";
import fullstack from "../../assets/images/fullstack.webp";
import automation from "../../assets/images/Automation.webp";

const services = [
  {
    title: "Landing Pages",
    description:
      "High-converting landing pages focused on performance, responsiveness, and premium UI experiences.",
    image: landing,
    featured: false,
  },

  {
    title: "Full Stack Development",
    description:
      "Scalable applications powered by clean frontend architecture, APIs, and production-ready systems.",
    image: fullstack,
    featured: true,
  },

  {
    title: "AI Automation",
    description:
      "Workflow automations, AI integrations, and smart productivity-driven digital systems.",
    image: automation,
    featured: false,
  },
];

const Services = () => {
  // ONLY FOR MOBILE/TABLET
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    dragFree: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);

    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const Card = ({ service, index }) => {
    return (
      <motion.div
        whileHover={{
          y: -4,
        }}
        transition={{
          duration: 0.3,
        }}
        className={`
          group
          relative
          overflow-hidden
          rounded-[24px]
          border
          flex
          flex-col
          min-h-[420px]
          transition-all
          duration-300

          ${
            service.featured
              ? `
                bg-orange-500
                border-orange-400/20
              `
              : `
                bg-white/[0.03]
                border-white/10
                backdrop-blur-xl
              `
          }
        `}
      >
        {/* CARD CONTENT */}
        <div
          className="
            flex
            flex-col
            h-full
            p-5
            sm:p-6
          "
        >
          {/* NUMBER */}
          <span
            className={`
              text-[11px]
              font-medium
              tracking-[0.14em]
              uppercase

              ${service.featured ? "text-white/70" : "text-white/35"}
            `}
          >
            0{index + 1}
          </span>

          {/* TEXT */}
          <div className="mt-4">
            <h3
              className="
                text-[24px]
                md:text-[26px]
                font-semibold
                leading-[1]
                tracking-[-0.04em]
                text-white
              "
            >
              {service.title}
            </h3>

            <p
              className={`
                mt-3
                text-[14px]
                leading-relaxed

                ${service.featured ? "text-white/80" : "text-white/50"}
              `}
            >
              {service.description}
            </p>
          </div>

          {/* IMAGE AREA */}
          <div
            className="
              relative
              mt-7
              flex-1
              flex
              items-end
              justify-center
            "
          >
            {/* STACK 1 */}
            <div
              className={`
                absolute
                bottom-4
                w-[84%]
                h-[84%]
                rounded-[20px]
                rotate-[-5deg]

                ${service.featured ? "bg-white/10" : "bg-white/[0.04]"}
              `}
            />

            {/* STACK 2 */}
            <div
              className={`
                absolute
                bottom-2
                w-[90%]
                h-[90%]
                rounded-[20px]
                rotate-[4deg]

                ${service.featured ? "bg-white/15" : "bg-white/[0.06]"}
              `}
            />

            {/* IMAGE */}
            <div
              className="
                relative
                z-10
                overflow-hidden
                rounded-[22px]
                w-full
                h-[220px]
              "
            >
              <img
                src={service.image}
                alt={service.title}
                className="
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              {/* OVERLAY */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/20
                  to-transparent
                "
              />
            </div>
          </div>
        </div>

        {/* BUTTON */}
        {/* <button
          className={`
            absolute
            bottom-5
            right-5
            z-20
            flex
            items-center
            justify-center
            w-11
            h-11
            rounded-full
            transition-all
            duration-300

            ${
              service.featured
                ? `
                  bg-white
                  text-orange-500
                `
                : `
                  bg-[#1b1b1b]
                  text-white
                  border
                  border-white/10
                  hover:bg-orange-500
                `
            }
          `}
        >
          <ArrowUpRight size={17} />
        </button> */}

        {/* HOVER GLOW */}
        <div
          className="
            absolute
            inset-0
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-500
            bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.08),transparent_40%)]
            pointer-events-none
          "
        />
      </motion.div>
    );
  };

  return (
    <section
      id="services"
      className="
        relative
        bg-[#f5f5f5]
        -mt-10
        md:-mt-12
        z-20
        pb-16
        md:pb-20
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
          {/* GRID */}
          <div
            className="
              absolute
              inset-0
              opacity-[0.025]
              [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
              [background-size:56px_56px]
              pointer-events-none
            "
          />

          {/* ORANGE GLOW */}
          <div
            className="
              absolute
              top-0
              right-0
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
              flex
              flex-col
              lg:flex-row
              lg:items-end
              lg:justify-between
              gap-6
              mb-8
            "
          >
            {/* LEFT */}
            <div className="max-w-2xl">
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
                  Premium Services
                </span>
              </div>

              {/* TITLE */}
              <h2
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
                Modern Services
                <span className="text-orange-500"> Built For</span>
                <br />
                Premium Experiences
              </h2>
            </div>

            {/* DESCRIPTION */}
            <div className="max-w-sm">
              <p
                className="
                  text-[14px]
                  sm:text-[15px]
                  leading-relaxed
                  text-white/55
                "
              >
                I design and develop premium digital products with modern
                frontend systems, scalable architecture, and clean user
                experiences.
              </p>
            </div>
          </div>

          {/* DIVIDER */}
          <div
            className="
              relative
              z-10
              w-full
              h-px
              bg-white/10
              mb-8
            "
          />

          {/* ========================= */}
          {/* DESKTOP GRID */}
          {/* ========================= */}

          <div className="hidden lg:grid grid-cols-3 gap-5 relative z-10">
            {services.map((service, index) => (
              <Card key={index} service={service} index={index} />
            ))}
          </div>

          {/* ========================= */}
          {/* MOBILE/TABLET CAROUSEL */}
          {/* ========================= */}

          <div className="lg:hidden relative z-10">
            {/* EMBLA */}
            <div
              className="
                overflow-hidden
                -mx-2
              "
              ref={emblaRef}
            >
              <div className="flex">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="
                        min-w-0
                        flex-[0_0_100%]
                        sm:flex-[0_0_78%]
                        px-2
                      "
                  >
                    <Card service={service} index={index} />
                  </div>
                ))}
              </div>
            </div>

            {/* MOBILE/TABLET NAVIGATION */}
            <div
              className="
                flex
                items-center
                justify-center
                gap-3
                mt-7
              "
            >
              {/* PREV */}
              <button
                onClick={scrollPrev}
                className="
                  flex
                  items-center
                  justify-center
                  w-10
                  h-10
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.04]
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
                  flex
                  items-center
                  justify-center
                  w-10
                  h-10
                  rounded-full
                  bg-orange-500
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
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`
                    rounded-full
                    transition-all
                    duration-300

                    ${
                      selectedIndex === index
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

export default Services;
