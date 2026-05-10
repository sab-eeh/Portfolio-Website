import React from "react";

import { motion } from "framer-motion";

import { ArrowLeft, Sparkles } from "lucide-react";

import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <section
      className="
      relative

      flex
      items-center
      justify-center

      overflow-hidden

      min-h-screen

      bg-[#f5f5f5]

      px-4
      sm:px-6
      "
    >
      {/* BACKGROUND GLOW */}
      <div
        className="
        absolute
        top-1/2
        left-1/2
        -translate-x-1/2
        -translate-y-1/2

        w-[420px]
        h-[420px]

        rounded-full

        bg-orange-500/[0.06]

        blur-[120px]

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
        [background-size:56px_56px]

        pointer-events-none
        "
      />

      {/* CONTENT */}
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
          duration: 0.45,
        }}
        className="
        relative
        z-10

        text-center

        max-w-2xl
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
            404 Error
          </span>
        </div>

        {/* ERROR NUMBER */}
        <h1
          className="
          text-[90px]
          sm:text-[120px]
          md:text-[140px]

          font-semibold

          leading-[0.9]
          tracking-[-0.08em]

          text-orange-500
          "
        >
          404
        </h1>

        {/* TITLE */}
        <h2
          className="
          mt-2

          text-[34px]
          sm:text-[40px]
          md:text-[46px]

          font-semibold

          leading-[0.95]
          tracking-[-0.05em]

          text-[#111111]
          "
        >
          Page Not Found
        </h2>

        {/* DESCRIPTION */}
        <p
          className="
          mt-5

          max-w-xl

          mx-auto

          text-[15px]
          sm:text-[16px]

          leading-relaxed

          text-black/60
          "
        >
          The page you are looking for may have been moved, deleted, or does not
          exist anymore.
        </p>

        {/* BUTTON */}
        <div className="mt-8">
          <Link
            to="/"
            className="
            group

            inline-flex
            items-center
            gap-2

            rounded-full

            bg-[#111111]

            px-5
            py-3

            text-[14px]
            font-medium

            text-white

            transition-all
            duration-300

            hover:bg-orange-500
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
            Back to Home
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default NotFound;
