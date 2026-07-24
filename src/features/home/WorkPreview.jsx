import { Sparkles } from "lucide-react";

import ProjectCarousel from "../projects/ProjectCarousel";

const WorkPreview = () => {
  return (
    <section
      id="projects"
      className="
      relative

      overflow-hidden

      bg-[#f5f5f5]

      py-16
      md:py-20
      "
    >
      {/* BACKGROUND GLOW */}
      <div
        className="
        absolute
        top-0
        right-0

        w-[420px]
        h-[420px]

        bg-orange-500/[0.06]

        blur-[120px]

        pointer-events-none
        "
      />

      <div
        className="
        relative
        z-10

        max-w-[1440px]
        mx-auto

        px-4
        sm:px-6
        lg:px-8
        "
      >
        {/* HEADER */}
        <div
          className="
          flex
          flex-col
          lg:flex-row
          lg:items-end
          lg:justify-between

          gap-6

          mb-10
          md:mb-12
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
              border-black/10

              bg-white/70

              px-3.5
              py-1.5

              mb-5
              "
            >
              <Sparkles size={13} className="text-orange-500" />

              <span
                className="
                text-[12px]
                font-medium
                tracking-[-0.01em]

                text-black/60
                "
              >
                Featured Work
              </span>
            </div>

            {/* TITLE */}
            <h2
              className="
              text-[36px]
              sm:text-[44px]
              md:text-[52px]
              lg:text-[58px]

              font-semibold

              leading-[0.95]
              tracking-[-0.05em]

              text-[#111111]
              "
            >
              Selected
              <br />
              Projects
            </h2>
          </div>

          {/* DESCRIPTION */}
          <div className="max-w-sm">
            <p
              className="
              text-[15px]
              sm:text-[16px]

              leading-relaxed

              text-black/60
              "
            >
              A collection of selected projects focused on premium UI/UX,
              scalable systems, modern frontend engineering, and immersive
              digital experiences.
            </p>
          </div>
        </div>

        {/* CAROUSEL */}
        <div className="relative">
          <ProjectCarousel />
        </div>
      </div>
    </section>
  );
};

export default WorkPreview;
