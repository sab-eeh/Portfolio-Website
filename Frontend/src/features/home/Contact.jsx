import React, { useState } from "react";

import { motion } from "framer-motion";

import {
  Mail,
  Phone,
  Linkedin,
  Github,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: (i = 1) => ({
    opacity: 1,
    y: 0,

    transition: {
      delay: i * 0.08,
      duration: 0.45,
      ease: "easeOut",
    },
  }),
};

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const API_URL = import.meta.env.VITE_API_URL;

      await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname: formData.fullname,
          email: formData.email,
          message: formData.message,
        }),
      });

      let data = {};

      try {
        data = await response.json();
      } catch {
        throw new Error("Invalid server response");
      }

      if (!response.ok) {
        throw new Error(data.message);
      }

      setStatus(data.message);
      setFormData({
        fullname: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      alert(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
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
        {/* HEADER */}
        <motion.div
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
            duration: 0.45,
          }}
          className="
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
            <Sparkles size={13} className="text-orange-500" />

            <span
              className="
              text-[12px]
              font-medium
              tracking-[-0.01em]

              text-black/60
              "
            >
              Contact Me
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

            text-[#111111]
            "
          >
            Let’s Build Something
            <span className="text-orange-500"> Amazing</span>
          </h2>

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
            Have a startup, business, or project idea that needs a modern
            digital experience? Let’s create something impactful together.
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div
          className="
          mt-10

          grid
          lg:grid-cols-[1fr_0.42fr]

          gap-5
          "
        >
          {/* FORM CARD */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="
            relative

            overflow-hidden

            rounded-[28px]

            border
            border-black/[0.05]

            bg-white/70

            backdrop-blur-xl

            p-5
            sm:p-6
            lg:p-7

            shadow-[0_20px_60px_rgba(0,0,0,0.04)]
            "
          >
            {/* CONTENT */}
            <div className="relative z-10">
              {/* TOP */}
              <div
                className="
                flex
                items-start
                justify-between

                gap-4
                "
              >
                <div>
                  <h3
                    className="
                    text-[24px]
                    sm:text-[28px]

                    font-semibold

                    tracking-[-0.03em]

                    text-[#111111]
                    "
                  >
                    Send Me a Message
                  </h3>

                  <p
                    className="
                    mt-2

                    text-[14px]

                    text-black/50
                    "
                  >
                    I usually reply within 24 hours.
                  </p>
                </div>

                <div
                  className="
                  hidden
                  sm:flex

                  items-center
                  justify-center

                  w-12
                  h-12

                  rounded-[18px]

                  bg-orange-500

                  text-white
                  "
                >
                  <ArrowUpRight size={18} />
                </div>
              </div>

              {/* FORM */}
              <form
                onSubmit={handleSubmit}
                className="
                mt-8

                space-y-4
                "
              >
                {/* NAME */}
                <div>
                  <label
                    className="
                    text-[13px]

                    text-black/50
                    "
                  >
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="
                    mt-2

                    w-full

                    rounded-[18px]

                    border
                    border-transparent

                    bg-[#f8f8f8]

                    px-4
                    py-3.5

                    text-[14px]

                    outline-none

                    transition-all
                    duration-300

                    focus:border-orange-300
                    focus:bg-white
                    "
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label
                    className="
                    text-[13px]

                    text-black/50
                    "
                  >
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="
                    mt-2

                    w-full

                    rounded-[18px]

                    border
                    border-transparent

                    bg-[#f8f8f8]

                    px-4
                    py-3.5

                    text-[14px]

                    outline-none

                    transition-all
                    duration-300

                    focus:border-orange-300
                    focus:bg-white
                    "
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label
                    className="
                    text-[13px]

                    text-black/50
                    "
                  >
                    Message
                  </label>

                  <textarea
                    rows="5"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project..."
                    className="
                    mt-2

                    w-full

                    resize-none

                    rounded-[18px]

                    border
                    border-transparent

                    bg-[#f8f8f8]

                    px-4
                    py-3.5

                    text-[14px]

                    outline-none

                    transition-all
                    duration-300

                    focus:border-orange-300
                    focus:bg-white
                    "
                  />
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  disabled={loading}
                  className="
                  group

                  inline-flex
                  items-center
                  justify-center
                  gap-2

                  w-full

                  rounded-[18px]

                  bg-[#111111]

                  px-5
                  py-3.5

                  text-[14px]
                  font-medium
                  tracking-[-0.01em]

                  text-white

                  transition-all
                  duration-300

                  hover:bg-orange-500
                  "
                >
                  {loading ? "Sending..." : "Send Message"}

                  <ArrowUpRight
                    size={16}
                    className="
                    transition-transform
                    duration-300

                   
                    "
                  />
                </button>

                {/* STATUS */}
                {status && (
                  <p
                    className="
                    text-center

                    text-[13px]

                    text-orange-500
                    "
                  >
                    {status}
                  </p>
                )}
              </form>
            </div>
          </motion.div>

          {/* INFO SIDE */}
          <div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            className="
            flex
            flex-col

            gap-5
            "
          >
            {/* CONTACT CARD */}
            <div
              className="
              rounded-[28px]

              border
              border-black/[0.05]

              bg-white/70

              backdrop-blur-xl

              p-5
              sm:p-6

             shadow-sm
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
                Contact Info
              </h3>

              <div
                className="
                mt-7

                space-y-5
                "
              >
                {/* EMAIL */}
                <div
                  className="
                  flex
                  items-start

                  gap-4
                  "
                >
                  <div
                    className="
                    flex
                    items-center
                    justify-center

                    w-11
                    h-11

                    rounded-[16px]

                    bg-orange-500/[0.10]
                    "
                  >
                    <Mail size={18} className="text-orange-500" />
                  </div>

                  <div>
                    <p
                      className="
                      text-[13px]

                      text-black/45
                      "
                    >
                      Email
                    </p>

                    <a
                      href="mailto:usabeeh72@gmail.com"
                      className="
                      mt-1

                      block

                      text-[14px]

                      text-[#111111]

                      transition-colors
                      duration-300

                      hover:text-orange-500
                      "
                    >
                      usabeeh72@gmail.com
                    </a>
                  </div>
                </div>

                {/* PHONE */}
                <div
                  className="
                  flex
                  items-start

                  gap-4
                  "
                >
                  <div
                    className="
                    flex
                    items-center
                    justify-center

                    w-11
                    h-11

                    rounded-[16px]

                    bg-orange-500/[0.10]
                    "
                  >
                    <Phone size={18} className="text-orange-500" />
                  </div>

                  <div>
                    <p
                      className="
                      text-[13px]

                      text-black/45
                      "
                    >
                      Phone
                    </p>

                    <p
                      className="
                      mt-1

                      text-[14px]

                      text-[#111111]
                      "
                    >
                      +92 331 290 4878
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SOCIAL CARD */}
            <div
              className="
              rounded-[28px]

              border
              border-black/[0.05]

              bg-white/70

              

              p-5
              sm:p-6

              shadow-[0_20px_60px_rgba(0,0,0,0.04)]
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
                Follow Me
              </h3>

              <div
                className="
                mt-7

                flex
                items-center

                gap-3
                "
              >
                {/* GITHUB */}
                <a
                  href="https://github.com/sab-eeh"
                  target="_blank"
                  rel="noreferrer"
                  className="
                  flex
                  items-center
                  justify-center

                  w-12
                  h-12

                  rounded-[18px]

                  bg-[#111111]

                  text-white

                  transition-all
                  duration-300

                  hover:bg-orange-500
                  "
                >
                  <Github size={18} />
                </a>

                {/* LINKEDIN */}
                <a
                  href="https://www.linkedin.com/in/sabeeh-uddin-91464a252/"
                  target="_blank"
                  rel="noreferrer"
                  className="
                  flex
                  items-center
                  justify-center

                  w-12
                  h-12

                  rounded-[18px]

                  bg-[#111111]

                  text-white

                  transition-all
                  duration-300

                  hover:bg-orange-500
                  "
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
