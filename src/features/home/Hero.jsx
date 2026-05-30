import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import profile from "../../assets/images/profile.webp";

const Hero = () => {
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
      id="home"
      className="
      relative

      overflow-hidden

      bg-[#f5f5f5]

      min-h-screen
      "
    >
      {/* BACKGROUND GLOW */}
      <div
        className="
        absolute
        inset-0

        bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.08),transparent_42%)]

        pointer-events-none
        "
      />

      {/* GRID */}
      <div
        className="
        absolute
        inset-0

        opacity-[0.025]

        [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
        [background-size:60px_60px]

        pointer-events-none
        "
      />

      <div
        className="
        relative
        z-10

        max-w-[1440px]
        mx-auto

        min-h-screen

        px-4
        sm:px-6
        lg:px-8
        "
      >
        <div
          className="
          flex
          flex-col

          min-h-screen
          "
        >
          {/* HERO CONTENT */}
          <div
            className="
            flex-1

            flex
            flex-col

            items-center
            justify-between

            pt-28
            sm:pt-32
            lg:pt-36
            "
          >
            {/* TOP CONTENT */}
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              className="
              relative
              z-20

              w-full

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
                backdrop-blur-xl

                px-3.5
                py-1.5

                mb-5

                shadow-[0_8px_30px_rgba(0,0,0,0.04)]
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
                  Modern Digital Experiences
                </span>
              </div>

              {/* TITLE */}
              <h1
                className="
                max-w-[980px]

                mx-auto

                font-semibold

                leading-[0.92]
                tracking-[-0.06em]

                text-[#111111]
                "
              >
                <span
                  className="
                  block

                  text-[38px]
                  sm:text-[52px]
                  md:text-[62px]
                  lg:text-[72px]
                  "
                >
                  Hello, I’m <span className="text-orange-500">Sabeeh</span>
                </span>

                <span
                  className="
                  block

                  mt-1.5

                  text-[42px]
                  sm:text-[56px]
                  md:text-[66px]
                  lg:text-[74px]
                  "
                >
                  Full Stack Developer
                </span>
              </h1>

              {/* DESCRIPTION */}
              <p
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
                I build premium digital experiences through modern frontend
                engineering, scalable architecture, cinematic interfaces, and
                performance-focused development.
              </p>
            </motion.div>

            {/* VISUAL SECTION */}
            <div
              className="
              relative

              flex
              items-end
              justify-center

              w-full

              mt-10
              "
            >
              {/* LEFT INFO */}
              <div
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                }}
                className="
                hidden
                xl:flex

                absolute
                left-0
                bottom-[26%]

                flex-col
                gap-5

                max-w-[220px]
                "
              >
                <div>
                  <h3
                    className="
                    text-[32px]

                    font-semibold

                    tracking-[-0.04em]

                    text-[#111111]
                    "
                  >
                    5+
                  </h3>

                  <p
                    className="
                    mt-1

                    text-[14px]

                    leading-relaxed

                    text-black/50
                    "
                  >
                    Years creating modern and scalable digital experiences.
                  </p>
                </div>

                <div
                  className="
                  w-14
                  h-px

                  bg-black/10
                  "
                />

                <p
                  className="
                  text-[14px]

                  leading-relaxed

                  text-black/55
                  "
                >
                  Specialized in premium frontend systems, motion design, and
                  modern React architecture.
                </p>
              </div>

              {/* RIGHT INFO */}
              <div
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                }}
                className="
                hidden
                xl:flex

                absolute
                right-0
                bottom-[28%]

                flex-col
                items-end
                gap-2

                text-right
                "
              >
                <div
                  className="
                  flex
                  items-center
                  gap-1

                  text-orange-500

                  text-sm
                  "
                >
                  ★ ★ ★ ★ ★
                </div>

                <h3
                  className="
                  text-[28px]

                  font-semibold

                  tracking-[-0.04em]

                  text-[#111111]
                  "
                >
                  Premium UI
                </h3>

                <p
                  className="
                  max-w-[220px]

                  text-[14px]

                  leading-relaxed

                  text-black/50
                  "
                >
                  Focused on cinematic interfaces, responsive systems, and
                  scalable UI architecture.
                </p>
              </div>

              {/* ORANGE CIRCLE */}
              <div
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.8,
                }}
                className="
                absolute
                left-1/2
                -translate-x-1/2

                bottom-[-18%]
                sm:bottom-[-22%]
                md:bottom-[-26%]

                w-[360px]
                h-[360px]

                sm:w-[460px]
                sm:h-[460px]

                md:w-[560px]
                md:h-[560px]

                lg:w-[620px]
                lg:h-[620px]

                rounded-full

                bg-orange-500

                z-0
                "
              />

              {/* SOFT GLOW */}
              <div
                className="
                absolute
                left-1/2
                -translate-x-1/2

                bottom-[-26%]

                w-[620px]
                h-[620px]

                rounded-full

                bg-orange-500/20

                blur-[40px]

                z-0
                "
              />

              {/* IMAGE */}
              <motion.img
                src={profile}
                alt="Sabeeh"
                width="500"
                height="650"
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                }}
                className="
                relative
                z-20

                object-contain

                w-[280px]
                sm:w-[320px]
                md:w-[380px]
                lg:w-[440px]
                xl:w-[500px]

                translate-y-[-40px]
                md:translate-y-[-40px]

                select-none
                pointer-events-none
                drop-shadow-[0_35px_60px_rgba(0,0,0,0.45)]
                "
              />

              {/* CTA */}
              <div
                initial={{
                  opacity: 0,
                  y: 16,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.3,
                }}
                className="
                absolute

                bottom-[12%]
                md:bottom-[14%]

                z-30
                "
              >
                <div
                  className="
                  md:flex
                  items-center
                  gap-2

                  rounded-full

                  border
                  border-white/40

                  bg-white/90
             

                  p-2

                  shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                  hidden
                  
                  "
                >
                  {/* PRIMARY BUTTON */}
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="
                    group

                    inline-flex
                    items-center
                    gap-2

                    rounded-full

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
                    View Portfolio
                    <ArrowRight
                      size={16}
                      className="
                      transition-transform
                      duration-300

                      group-hover:translate-x-1
                      "
                    />
                  </button>

                  {/* SECONDARY BUTTON */}
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="
                    rounded-full

                    bg-black/[0.04]

                    px-5
                    py-3

                    text-[14px]
                    font-medium
                    tracking-[-0.01em]

                    text-[#111111]

                    transition-all
                    duration-300

                    hover:bg-black/[0.07]
                    "
                  >
                    Hire Me
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM FADE */}
          <div
            className="
            absolute
            bottom-0
            left-0
            right-0

            h-24

            bg-gradient-to-b
            from-transparent
            to-black/[0.03]

            pointer-events-none
            "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
