import { motion } from "framer-motion";

import { ArrowLeft, ArrowUpRight, Sparkles } from "lucide-react";

import { useNavigate } from "react-router-dom";

const ProjectDetail = ({ project }) => {
  const navigate = useNavigate();

  return (
    <section
      className="
      relative

      overflow-hidden

      bg-[#f5f5f5]

      min-h-screen

      pt-28
      md:pt-32

      pb-16
      md:pb-20
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

        rounded-full

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
        {/* BACK BUTTON */}
        <button
          onClick={() => navigate(-1)}
          className="
          group

          inline-flex
          items-center
          gap-2

          rounded-full

          border
          border-black/10

          bg-white/70

          px-4
          py-2.5

          text-[14px]
          font-medium

          text-black/60

          transition-all
          duration-300

          hover:border-orange-200
          hover:text-orange-500
          "
        >
          <ArrowLeft
            size={16}
            className="
            transition-transform
            duration-300

            group-hover:-translate-x-1
            "
          />
          Back to Projects
        </button>

        {/* HERO IMAGE */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="
          relative

          overflow-hidden

          rounded-[28px]
          lg:rounded-[32px]

          mt-8

          border
          border-black/[0.05]

          shadow-[0_20px_60px_rgba(0,0,0,0.06)]
          "
        >
          {/* GRID */}
          <div
            className="
            absolute
            inset-0

            opacity-[0.02]

            [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
            [background-size:56px_56px]

            pointer-events-none
            "
          />

          {/* IMAGE */}
          <img
            src={project.thumbnail}
            alt={project.title}
            className="
            w-full

            h-[240px]
            sm:h-[360px]
            md:h-[460px]
            lg:h-[540px]

            object-cover
            "
          />

          {/* OVERLAY */}
          <div
            className="
            absolute
            inset-0

            bg-gradient-to-t
            from-black/10
            via-transparent
            to-transparent
            "
          />
        </motion.div>

        {/* CONTENT GRID */}
        <div
          className="
          mt-10

          grid
          lg:grid-cols-[1fr_360px]

          gap-6
          lg:gap-8
          "
        >
          {/* LEFT CONTENT */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.1,
              duration: 0.5,
            }}
          >
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
                {project.category}
              </span>
            </div>

            {/* TITLE */}
            <h1
              className="
              max-w-4xl

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
              {project.title}
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
              mt-5

              max-w-3xl

              text-[15px]
              sm:text-[16px]

              leading-relaxed

              text-black/60
              "
            >
              {project.tagline}
            </p>

            {/* EXTRA CONTENT */}
            <div
              className="
              mt-8

              rounded-[28px]

              border
              border-black/[0.05]

              bg-white/70

              backdrop-blur-xl

              p-5
              sm:p-6

              shadow-[0_15px_40px_rgba(0,0,0,0.04)]
              "
            >
              <h3
                className="
                text-[22px]

                font-semibold

                tracking-[-0.03em]

                text-[#111111]
                "
              >
                Project Overview
              </h3>

              <p
                className="
                mt-4

                text-[15px]

                leading-relaxed

                text-black/60
                "
              >
                {project.description}
              </p>
            </div>
          </motion.div>

          {/* RIGHT SIDEBAR */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.15,
              duration: 0.5,
            }}
          >
            <div
              className="
              sticky
              top-28

              rounded-[28px]

              border
              border-black/[0.05]

              bg-white/75

              backdrop-blur-xl

              p-5
              sm:p-6

              shadow-[0_15px_40px_rgba(0,0,0,0.04)]
              "
            >
              {/* TITLE */}
              <h3
                className="
                text-[22px]

                font-semibold

                tracking-[-0.03em]

                text-[#111111]
                "
              >
                Technologies
              </h3>

              {/* TECH STACK */}
              <div
                className="
                flex
                flex-wrap

                gap-3

                mt-6
                "
              >
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="
                      px-4
                      py-2.5

                      rounded-full

                      border
                      border-black/[0.05]

                      bg-[#f8f8f8]

                      text-[13px]
                      font-medium

                      text-[#111111]
                      "
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* DIVIDER */}
              <div
                className="
                w-full
                h-px
                
                flex-col
                justify-between
                items-center
                gap-2

                bg-black/[0.06]

                my-7
                "
              />

              {/* CTA */}
              <div
                className="   
                flex
                flex-col
                justify-between
                items-center
                gap-2"
              >
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="
                group
                cursor-pointer
                inline-flex
                items-center
                justify-center
                gap-2

                w-full

                rounded-[18px]

                bg-orange-500

                px-5
                py-3.5

                text-[14px]
                font-medium

                text-white

                transition-all
                duration-300

                hover:bg-orange-600
                "
                >
                  Visit Live Project
                  <ArrowUpRight
                    size={16}
                    className="
                  transition-transform
                  duration-300

                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                  "
                  />
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="
                group
                cursor-pointer
                inline-flex
                items-center
                justify-center
                gap-2

                w-full

                rounded-[18px]
                border-1
                border-orange-500

                bg-white

                px-5
                py-3.5

                text-[14px]
                font-medium

                text-black

                transition-all
                duration-300

                hover:bg-orange-500
                "
                >
                 View on Github
                  <ArrowUpRight
                    size={16}
                    className="
                  transition-transform
                  duration-300

                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                  "
                  />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
