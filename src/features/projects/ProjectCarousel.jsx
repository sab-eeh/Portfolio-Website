import { useCallback, useEffect, useState } from "react";

import useEmblaCarousel from "embla-carousel-react";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { projects } from "./projectsData";

import ProjectCard from "./ProjectCard";

const ProjectCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    dragFree: false,
    containScroll: "trimSnaps",
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

  return (
    <div className="relative">
      {/* CAROUSEL */}
      <div
        className="
        overflow-hidden

        -mx-2
        "
        ref={emblaRef}
      >
        <div className="flex">
          {projects.map((project) => (
            <div
              key={project.id}
              className="
              min-w-0

              flex-[0_0_100%]
              sm:flex-[0_0_82%]
              lg:flex-[0_0_50%]

              px-2
              "
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      {/* NAVIGATION */}
      <div
        className="
        hidden
        lg:flex

        items-center
        justify-between

        absolute
        inset-x-0

        top-[38%]

        -translate-y-1/2

        pointer-events-none

        px-2

        z-20
        "
      >
        {/* PREV */}
        <button
          onClick={scrollPrev}
          className="
          pointer-events-auto

          flex
          items-center
          justify-center

          w-11
          h-11

          rounded-full

          border
          border-black/[0.08]

          bg-white/90

          backdrop-blur-xl

          text-[#111111]

          shadow-[0_10px_30px_rgba(0,0,0,0.06)]

          transition-all
          duration-300

          hover:border-orange-200
          hover:bg-orange-500
          hover:text-white
          "
        >
          <ChevronLeft size={18} />
        </button>

        {/* NEXT */}
        <button
          onClick={scrollNext}
          className="
          pointer-events-auto

          flex
          items-center
          justify-center

          w-11
          h-11

          rounded-full

          bg-orange-500

          text-white

          shadow-[0_10px_30px_rgba(249,115,22,0.30)]

          transition-all
          duration-300

          hover:bg-orange-600
          "
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* MOBILE NAV */}
      <div
        className="
        flex
        lg:hidden

        items-center
        justify-center

        gap-3

        mt-6
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
          border-black/[0.08]

          bg-white

          text-[#111111]

          shadow-[0_8px_24px_rgba(0,0,0,0.05)]

          transition-all
          duration-300

          hover:bg-orange-500
          hover:text-white
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

          shadow-[0_8px_24px_rgba(249,115,22,0.25)]

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

        mt-7
        "
      >
        {projects.map((_, index) => (
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

                  bg-black/15
                `
            }
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;
