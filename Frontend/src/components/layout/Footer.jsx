import React from "react";

import { ArrowUpRight, Mail, Sparkles } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

import { motion } from "framer-motion";

const navigationLinks = [
  {
    name: "Home",
    id: "home",
  },


  {
    name: "About",
    id: "about",
  },


  {
    name: "Projects",
    id: "projects",
  },



  {
    name: "Contact",
    id: "contact",
  },
];

const socialLinks = [


  {
    icon: FaGithub,
    link: "https://github.com/sab-eeh",
  },

  {
    icon: FaLinkedinIn,
    link: "https://www.linkedin.com/in/sabeeh-uddin-91464a252/",
  },
];

const Footer = () => {
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
    <footer
      className="
      relative

      overflow-hidden

      bg-[#f5f5f5]

      pb-6
      md:pb-8
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
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.45,
          }}
          className="
          relative

          overflow-hidden

          rounded-[28px]
          lg:rounded-[32px]

          bg-[#111111]

          px-5
          sm:px-6
          lg:px-8

          pt-7
          lg:pt-8

          pb-5
          lg:pb-6

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

          {/* GLOW */}
          <div
            className="
            absolute
            top-0
            right-0

            w-[320px]
            h-[320px]

            rounded-full

            bg-orange-500/[0.08]

            blur-[100px]

            pointer-events-none
            "
          />

          {/* TOP ROW */}
          <div
            className="
            relative
            z-10

            flex
            flex-col
            sm:flex-row

            items-start
            sm:items-center

            justify-between

            gap-5

            border-b
            border-white/10

            pb-6
            "
          >
            {/* TITLE */}
            <div>
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

                mb-3
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
                  Let’s Connect
                </span>
              </div>

              <h2
                className="
                text-[28px]
                sm:text-[32px]

                font-semibold

                leading-[1]

                tracking-[-0.04em]

                text-white
                "
              >
                Let’s Build Something
                <span className="text-orange-500"> Great</span>
              </h2>
            </div>

            {/* BUTTON */}
            <button
              onClick={() => scrollToSection("contact")}
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

              text-white

              transition-all
              duration-300

              hover:bg-orange-600
              "
            >
              Hire Me
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

          {/* CONTENT */}
          <div
            className="
            relative
            z-10

            grid

            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4

            gap-8
            lg:gap-10

            py-8
            "
          >
            {/* BRAND */}
            <div>
              {/* LOGO */}
              <div
                className="
                flex
                items-center

                gap-3
                "
              >
                <div
                  className="
                  flex
                  items-center
                  justify-center

                  w-10
                  h-10

                  rounded-full

                  bg-orange-500

                  text-[15px]
                  font-semibold

                  text-white
                  "
                >
                  S
                </div>

                <h3
                  className="
                  text-[20px]

                  font-semibold

                  tracking-[-0.03em]

                  text-white
                  "
                >
                  Sabeeh
                </h3>
              </div>

              {/* TEXT */}
              <p
                className="
                mt-5

                max-w-[260px]

                text-[14px]

                leading-relaxed

                text-white/55
                "
              >
                Building premium digital experiences with modern frontend
                development, scalable systems, and intuitive UI/UX solutions.
              </p>

              {/* SOCIALS */}
              <div
                className="
                flex
                items-center

                gap-3

                mt-6
                "
              >
                {socialLinks.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
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

                        text-white/70

                        transition-all
                        duration-300

                        hover:border-orange-500
                        hover:bg-orange-500
                        hover:text-white
                        "
                    >
                      <Icon size={14} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* NAVIGATION */}
            <div>
              <h4
                className="
                text-[14px]

                font-semibold

                text-orange-500

                mb-5
                "
              >
                Links
              </h4>

              <ul
                className="
                space-y-3
                "
              >
                {navigationLinks.map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="
                        text-[14px]

                        text-white/55

                        transition-colors
                        duration-300

                        hover:text-white
                        "
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <h4
                className="
                text-[14px]

                font-semibold

                text-orange-500

                mb-5
                "
              >
                Contact
              </h4>

              <ul
                className="
                space-y-3

                text-[14px]

                text-white/55
                "
              >
                <li>+92 331 290 4878</li>

               

                <li>usabeeh72@gmail.com</li>
              </ul>
            </div>

            {/* NEWSLETTER */}
            <div>
              <h4
                className="
                text-[14px]

                font-semibold

                text-orange-500

                mb-5
                "
              >
                Newsletter
              </h4>

              <p
                className="
                text-[14px]

                leading-relaxed

                text-white/55

                mb-5
                "
              >
                Get the latest updates, insights, and project news.
              </p>

              {/* INPUT */}
              <div
                className="
                flex
                items-center

                overflow-hidden

                rounded-full

                bg-white

                h-[52px]

                pl-4

                shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                "
              >
                <Mail size={16} className="text-black/40" />

                <input
                  type="email"
                  placeholder="Email address"
                  className="
                  flex-1

                  h-full

                  bg-transparent

                  outline-none

                  px-3

                  text-[14px]

                  text-[#111111]

                  placeholder:text-black/35
                  "
                />

                <button
                  className="
                  flex
                  items-center
                  justify-center

                  w-[52px]
                  h-[52px]

                  bg-orange-500

                  text-white

                  transition-all
                  duration-300

                  hover:bg-orange-600
                  "
                >
                  <ArrowUpRight size={17} />
                </button>
              </div>
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div
            className="
            relative
            z-10

            border-t
            border-white/10

            pt-5

            flex
            flex-col
            md:flex-row

            items-center
            justify-between

            gap-4
            "
          >
            {/* COPYRIGHT */}
            <p
              className="
              text-[13px]

              text-center
              md:text-left

              text-white/45
              "
            >
              Copyright © {new Date().getFullYear()}{" "}
              <span className="text-orange-500">Sabeeh</span>. All Rights
              Reserved.
            </p>

            {/* LINKS */}
            <div
              className="
              flex
              items-center

              gap-5

              text-[13px]

              text-white/40
              "
            >
              <button
                className="
                transition-colors
                duration-300

                hover:text-white
                "
              >
                Terms
              </button>

              <button
                className="
                transition-colors
                duration-300

                hover:text-white
                "
              >
                Privacy
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
