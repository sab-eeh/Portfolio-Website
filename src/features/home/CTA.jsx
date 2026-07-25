import { motion } from "framer-motion";

import {
  ArrowRight,
  Sparkles,
  Zap,
  Rocket,
  Code2,
} from "lucide-react";

const CTA = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const features = [
    { icon: Code2, label: "Clean Code", desc: "Production-ready architecture" },
    { icon: Zap, label: "Fast Performance", desc: "Optimized & scalable solutions" },
    { icon: Rocket, label: "Quick Turnaround", desc: "Efficient project delivery" },
  ];

  return (
    <section
      className="
      relative

      overflow-hidden

      bg-gradient-to-br
      from-[#f5f5f5]
      to-[#ffffff]

      py-16
      md:py-24
      "
    >
      {/* BACKGROUND ELEMENTS */}
      <div
        className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2

        w-[600px]
        h-[600px]

        rounded-full

        bg-orange-500/[0.08]

        blur-[150px]

        pointer-events-none
        "
      />

      <div
        className="
        absolute
        bottom-0
        right-0

        w-[400px]
        h-[400px]

        rounded-full

        bg-blue-500/[0.05]

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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="
          max-w-3xl

          mx-auto

          text-center

          mb-12
          "
        >
          <div
            className="
            inline-flex
            items-center
            gap-2

            rounded-full

            border
            border-orange-500/30

            bg-orange-500/10

            px-4
            py-2

            mb-6
            "
          >
            <Sparkles size={14} className="text-orange-500" />
            <span className="text-[12px] font-medium text-orange-600">
              Ready to Elevate Your Vision
            </span>
          </div>

          <h2
            className="
            text-[36px]
            sm:text-[44px]
            md:text-[52px]
            lg:text-[60px]

            font-bold

            leading-[1.1]
            tracking-[-0.02em]

            text-[#111111]

            mb-6
            "
          >
            Let's Turn Your <span className="text-orange-500">Ideas</span> Into
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              Digital Reality
            </span>
          </h2>

          <p
            className="
            text-[16px]
            sm:text-[17px]

            leading-relaxed

            text-black/60

            max-w-2xl

            mx-auto
            "
          >
            Whether you need a stunning portfolio, a powerful web application,
            or a complete digital transformation, I'm here to bring your vision
            to life with cutting-edge technology and expert craftsmanship.
          </p>
        </motion.div>

        {/* FEATURES GRID */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="
          grid
          md:grid-cols-3

          gap-4

          mb-12
          "
        >
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="
              relative

              overflow-hidden

              rounded-[20px]

              border
              border-black/[0.08]

              bg-white/50

              backdrop-blur-xl

              p-6

              hover:border-orange-500/30
              hover:bg-white

              transition-all
              duration-300

              group
              "
            >
              {/* BACKGROUND GLOW */}
              <div
                className="
                absolute
                inset-0

                bg-gradient-to-br
                from-orange-500/5
                to-transparent

                opacity-0

                group-hover:opacity-100

                transition-opacity
                duration-300

                pointer-events-none
                "
              />

              <div className="relative z-10">
                <div
                  className="
                  inline-flex
                  items-center
                  justify-center

                  w-12
                  h-12

                  rounded-[14px]

                  bg-orange-500/10

                  mb-4

                  group-hover:bg-orange-500/20

                  transition-colors
                  duration-300
                  "
                >
                  <feature.icon
                    size={22}
                    className="text-orange-500"
                  />
                </div>

                <h3 className="text-[16px] font-semibold text-[#111111] mb-2">
                  {feature.label}
                </h3>

                <p className="text-[13px] text-black/55">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="
          relative

          overflow-hidden

          rounded-[32px]

          border
          border-black/[0.06]

          bg-gradient-to-br
          from-white/80
          to-white/40

          backdrop-blur-2xl

          px-6
          sm:px-8
          lg:px-12

          py-12
          sm:py-16
          lg:py-20

          shadow-[0_20px_60px_rgba(0,0,0,0.08)]
          "
        >
          {/* DECORATIVE ELEMENTS */}
          <div
            className="
            absolute
            top-0
            right-0

            w-[300px]
            h-[300px]

            rounded-full

            bg-gradient-to-br
            from-orange-500/10
            to-transparent

            blur-[100px]

            pointer-events-none
            "
          />

          <div
            className="
            relative
            z-10

            max-w-2xl

            mx-auto

            text-center
            "
          >
            <h3
              className="
              text-[28px]
              sm:text-[34px]
              md:text-[40px]

              font-bold

              tracking-[-0.02em]

              text-[#111111]

              mb-4
              "
            >
              Ready to Get Started?
            </h3>

            <p
              className="
              text-[15px]
              sm:text-[16px]

              text-black/60

              mb-8
              "
            >
              Fill out the contact form below, and I'll get back to you within
              24 hours with tailored solutions for your project.
            </p>

            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
              group

              inline-flex
              items-center
              justify-center
              gap-3

              rounded-[20px]

              bg-gradient-to-r
              from-orange-500
              to-orange-600

              px-8
              py-4

              text-[15px]
              font-bold
              tracking-[-0.01em]

              text-white

              transition-all
              duration-300

              hover:shadow-lg
              hover:shadow-orange-500/30
              hover:from-orange-600
              hover:to-orange-700
              "
            >
              <span>Contact Me Now</span>
              <ArrowRight
                size={18}
                className="
                transition-transform
                duration-300

                group-hover:translate-x-1
                "
              />
            </motion.button>
          </div>
        </motion.div>

        {/* BOTTOM STATS */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="
          mt-12

          flex
          flex-wrap
          justify-center

          gap-x-8
          gap-y-3

          text-[13px]
          sm:text-[14px]

          text-black/55
          "
        >
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            100+ Projects Completed
          </span>

          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            4.9/5 Client Rating
          </span>

          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            24/7 Support Available
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
