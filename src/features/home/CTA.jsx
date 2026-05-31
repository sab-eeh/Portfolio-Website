import { motion } from "framer-motion";

import {
  Mail,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const marqueeItems = [
  "UI/UX Design",
  "Web Development",
  "Landing Pages",
  "Automate Systems",
  "Frontend Systems",
  "Dashboards",
  "Mobile UI",
];

const CTA = () => {
  return (
    <section
      
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
        left-1/2
        -translate-x-1/2

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
        {/* MAIN CARD */}
        <div
          className="
          relative

          overflow-hidden

          rounded-[28px]
          lg:rounded-[32px]

          border
          border-black/[0.05]

          bg-white/70

          backdrop-blur-xl

          px-5
          sm:px-6
          lg:px-8

          py-8
          lg:py-10

          shadow-[0_20px_60px_rgba(0,0,0,0.05)]
          "
        >
          {/* GRID */}
          <div
            className="
            absolute
            inset-0

            opacity-[0.025]

            [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
            [background-size:56px_56px]

            pointer-events-none
            "
          />

          {/* CONTENT */}
          <div
            className="
            relative
            z-10

            max-w-3xl

            mx-auto

            text-center
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
              border-black/10

              bg-white/70

              px-3.5
              py-1.5

              mb-4
              "
            >
              <Sparkles
                size={13}
                className="text-orange-500"
              />

              <span
                className="
                text-[12px]
                font-medium
                tracking-[-0.01em]

                text-black/60
                "
              >
                Let’s Work Together
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

              text-[#111111]
              "
            >
              Have An Awesome
              <br />
              Project Idea?
              <span className="text-orange-500">
                {" "}
                Let’s Discuss
              </span>
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
                duration: 0.5,
              }}
              className="
              mt-5

              max-w-2xl

              mx-auto

              text-[15px]
              sm:text-[16px]

              leading-relaxed

              text-black/60
              "
            >
              Let’s create premium digital
              experiences with modern UI systems,
              scalable development, and clean
              frontend architecture.
            </motion.p>

            {/* FORM */}
            <div
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
                delay: 0.2,
                duration: 0.5,
              }}
              className="
              mt-8

              flex
              flex-col
              sm:flex-row

              items-center

              gap-3

              rounded-[24px]

              border
              border-black/[0.05]

              bg-white

              p-2

              shadow-[0_10px_30px_rgba(0,0,0,0.04)]

              max-w-2xl

              mx-auto
              "
            >
              {/* INPUT WRAPPER */}
              <div
                className="
                flex
                items-center
                gap-3

                flex-1

                w-full

                px-4
                py-3
                "
              >
                <Mail
                  size={17}
                  className="text-orange-500"
                />

                <input
                  type="email"
                  placeholder="Enter your email"

                  className="
                  w-full

                  bg-transparent

                  outline-none

                  text-[14px]
                  sm:text-[15px]

                  text-[#111111]

                  placeholder:text-black/40
                  "
                />
              </div>

              {/* BUTTON */}
              <button
                className="
                group

                inline-flex
                items-center
                justify-center
                gap-2

                w-full
                sm:w-auto

                rounded-[18px]

                bg-orange-500

                px-5
                py-3

                text-[14px]
                font-medium
                tracking-[-0.01em]

                text-white

                transition-all
                duration-300

                hover:bg-orange-600
                "
              >
                Send

                <ArrowUpRight
                  size={16}
                  className="
                  transition-transform
                  duration-300

                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                  "
                />
              </button>
            </div>

            {/* STATS */}
            <div
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{
                delay: 0.3,
                duration: 0.5,
              }}
              className="
              mt-6

              flex
              flex-wrap
              justify-center

              gap-x-6
              gap-y-2

              text-[13px]
              sm:text-[14px]

              text-black/55
              "
            >
              <span>
                ✔ 4.9/5 Average Ratings
              </span>

              <span>
                ✔ Top 8 in Hackathon
              </span>

              <span>
                ✔ Premium Frontend Systems
              </span>
            </div>
          </div>
        </div>

        {/* MARQUEE */}
        <div
          className="
          relative

          overflow-hidden

          mt-10

          rounded-[24px]

          border
          border-black/[0.05]

          bg-white/70

          backdrop-blur-xl
          "
        >
          {/* TOP LINE */}
          <div className="h-[2px] w-full bg-orange-500" />

          {/* STRIP */}
          <div
            className="
            relative

            overflow-hidden

            py-4
            "
          >
            <motion.div
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                repeat: Infinity,
                duration: 18,
                ease: "linear",
              }}
              className="
              flex

              whitespace-nowrap
              "
            >
              {[...Array(2)].map((_, i) => (
                <div
                  key={i}
                  className="
                  flex
                  items-center

                  gap-8

                  px-4
                  "
                >
                  {marqueeItems.map(
                    (item, index) => (
                      <span
                        key={index}
                        className="
                        text-[15px]
                        sm:text-[16px]

                        font-medium

                        tracking-[-0.01em]

                        text-[#222222]
                        "
                      >
                        {item}

                        <span className="text-orange-500 ml-3">
                          ✦
                        </span>
                      </span>
                    )
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;