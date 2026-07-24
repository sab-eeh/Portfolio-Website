import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

import profile from "../../assets/images/profile.webp";

const stats = [
  {
    value: "25+",
    label: "Projects Completed",
  },

  {
    value: "10+",
    label: "Industries Covered",
  },

  {
    value: "3+",
    label: "Years Experience",
  },
];

export const About = () => {
   const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (!section) return;

    const offset = window.innerWidth < 768 ? 80 : 100;

    const top = section.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };
  return (
    <section
      id="about"
      className="
      relative

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
        {/* MAIN CARD */}
        <div
          className="
          relative

          overflow-hidden

          rounded-[30px]
          lg:rounded-[36px]

          border
          border-black/[0.04]

          bg-[#ececec]

          px-5
          sm:px-6
          lg:px-8

          py-8
          lg:py-10
          "
        >
          {/* SUBTLE GRID */}
          <div
            className="
            absolute
            inset-0

            opacity-[0.03]

            [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
            [background-size:56px_56px]

            pointer-events-none
            "
          />

          {/* SOFT GLOW */}
          <div
            className="
            absolute
            left-0
            bottom-0

            w-[420px]
            h-[420px]

            bg-orange-500/10

       blur-[90px]

            pointer-events-none
            "
          />

          <div
            className="
            relative
            z-10

            grid
           lg:grid-cols-[0.85fr_1.15fr]

            items-center

            gap-8
            lg:gap-6
            "
          >
            {/* LEFT SIDE */}
            <motion.div
              initial={{
                opacity: 0,
                x: -40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
              }}
              className="
              relative

              flex
              items-end
              justify-center
              lg:justify-start

              min-h-[340px]
              "
            >
              {/* ORANGE CIRCLE */}
              <div
                className="
                absolute
                bottom-0

                w-[280px]
                h-[280px]

                sm:w-[340px]
                sm:h-[340px]

                md:w-[360px]
                md:h-[360px]
                

                rounded-full

                bg-orange-500
                "
              />

              {/* GLOW */}
              <div
                className="
                absolute
                bottom-[-40px]

                w-[420px]
                h-[420px]

                rounded-full

                bg-orange-500/20

                blur-3xl
                "
              />

              {/* IMAGE */}
              <img
                src={profile}
                alt="profile"
                className="
                relative
                z-10

                object-contain

                w-[240px]
                sm:w-[300px]
                md:w-[340px]
                lg:w-[350px]
                -translate-y-12
                
                select-none
                pointer-events-none
               drop-shadow-[0_35px_60px_rgba(0,0,0,0.45)]
                "
              />

              {/* DECORATION */}
              <div
                className="
                absolute
                top-6
                right-4
                md:right-10

                rotate-12
                "
              >
                <div
                  className="
                  grid
                  grid-cols-4

                  gap-1.5
                  "
                >
                  {Array.from({
                    length: 12,
                  }).map((_, i) => (
                    <span
                      key={i}
                      className="
                      w-[4px]
                      h-[12px]

                      rounded-full

                      bg-black/70
                      "
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* RIGHT SIDE */}
            <motion.div
              initial={{
                opacity: 0,
                x: 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
              }}
              className="
              text-center
              lg:text-left
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

                bg-white/60

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
                  About Me
                </span>
              </div>

              {/* HEADING */}
              <h2
                className="
                max-w-[700px]

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
                Why You Should <span className="text-orange-500">Hire Me</span>{" "}
                For Your Next Project
              </h2>

              {/* DESCRIPTION */}
              <p
                className="
                mt-6

                max-w-[620px]

                mx-auto
                lg:mx-0

                text-[15px]
                sm:text-[16px]

                leading-relaxed

                text-black/60
                "
              >
                I create modern digital experiences that combine premium UI
                design, scalable frontend architecture, smooth motion systems,
                and performance-focused development to help brands stand out
                with impactful products.
              </p>

              {/* STATS */}
              <div
                className="
                grid
                grid-cols-3

                gap-4
                sm:gap-5

                mt-8
                "
              >
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="
                    rounded-[22px]

                    border
                    border-black/[0.05]

                    bg-white/60

                    px-4
                    py-4

                    backdrop-blur-xl
                    "
                  >
                    <h3
                      className="
                      text-[24px]
sm:text-[28px]

                      font-semibold

                      tracking-[-0.04em]

                      text-[#111111]
                      "
                    >
                      {stat.value}
                    </h3>

                    <p
                      className="
                      mt-1

                      text-[13px]
                      sm:text-[14px]

                      leading-relaxed

                      text-black/50
                      "
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* BUTTON */}
              <div className="mt-8">
                <button
                 onClick={() => scrollToSection("contact")}
                  className="
                  group

                  inline-flex
                  items-center
                  gap-2

                  rounded-full

                  bg-[#111111]

                  px-6
                  sm:px-7

                  py-3

                  text-[14px]
                  font-medium
                  tracking-[-0.01em]

                  text-white

                  transition-all
                  duration-300

                  hover:bg-orange-500
                  "
                >
                  Let’s Work Together
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
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
