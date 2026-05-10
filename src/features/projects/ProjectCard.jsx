import { motion } from "framer-motion";

import { ArrowUpRight } from "lucide-react";

import { useNavigate } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.45,
      }}
      whileHover={{
        y: -4,
      }}
      className="group"
    >
      {/* IMAGE CARD */}
      <div
        onClick={() => navigate(`/projects/${project.slug}`)}
        className="
        relative

        overflow-hidden

        rounded-[28px]

        cursor-pointer

        border
        border-black/[0.05]

        bg-white

        shadow-[0_15px_40px_rgba(0,0,0,0.05)]

        transition-all
        duration-300
        "
      >
        {/* GRID OVERLAY */}
        <div
          className="
          absolute
          inset-0

          opacity-[0.02]

          [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
          [background-size:52px_52px]

          pointer-events-none

          z-10
          "
        />

        {/* IMAGE */}
        <div className="overflow-hidden">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="
            w-full

            h-[240px]
            sm:h-[300px]
            lg:h-[340px]

            object-cover

            transition-transform
            duration-700

            group-hover:scale-[1.04]
            "
          />
        </div>

        {/* OVERLAY */}
        <div
          className="
          absolute
          inset-0

          bg-gradient-to-t
          from-black/25
          via-black/[0.02]
          to-transparent
          "
        />

        {/* BUTTON */}
        <motion.div
          whileHover={{
            scale: 1.05,
          }}
          className="
          absolute
          bottom-5
          right-5

          z-20

          flex
          items-center
          justify-center

          w-11
          h-11

          rounded-full

          bg-orange-500

          text-white

          shadow-[0_10px_30px_rgba(249,115,22,0.35)]
          "
        >
          <ArrowUpRight size={17} />
        </motion.div>
      </div>

      {/* CONTENT */}
      <div className="pt-5">
        {/* CATEGORY */}
        <p
          className="
          text-[11px]

          uppercase

          tracking-[0.16em]

          font-medium

          text-orange-500
          "
        >
          {project.category}
        </p>

        {/* TITLE */}
        <h3
          className="
          mt-3

          text-[24px]
          sm:text-[28px]

          font-semibold

          leading-[1.05]
          tracking-[-0.04em]

          text-[#111111]
          "
        >
          {project.title}
        </h3>

        {/* DESCRIPTION */}
        <p
          className="
          mt-4

          max-w-2xl

          text-[14px]
          sm:text-[15px]

          leading-relaxed

          text-black/60
          "
        >
          {project.tagline}
        </p>

        {/* TECH STACK */}
        <div
          className="
          flex
          flex-wrap

          gap-2.5

          mt-5
          "
        >
          {project.tech.map((item, i) => (
            <span
              key={i}
              className="
                px-3.5
                py-2

                rounded-full

                border
                border-black/[0.05]

                bg-white

                text-[12px]
                font-medium

                text-[#111111]

                shadow-[0_6px_20px_rgba(0,0,0,0.03)]
                "
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
