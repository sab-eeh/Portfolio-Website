import { useParams } from "react-router-dom";

import { projects } from "../features/projects/projectsData";

import ProjectDetail from "../features/projects/ProjectDetail";

export const ProjectPage = () => {
  const { slug } = useParams();

  const project = projects.find((item) => item.slug === slug);

  /* PROJECT NOT FOUND */
  if (!project) {
    return (
      <section
        className="
        relative

        flex
        items-center
        justify-center

        min-h-screen

        overflow-hidden

        bg-[#f5f5f5]

        px-4
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

        {/* CONTENT */}
        <div
          className="
          relative
          z-10

          text-center
          "
        >
          <h1
            className="
            text-[36px]
            sm:text-[42px]
            md:text-[48px]

            font-semibold

            leading-[0.95]
            tracking-[-0.05em]

            text-[#111111]
            "
          >
            Project Not Found
          </h1>

          <p
            className="
            mt-4

            text-[15px]
            sm:text-[16px]

            leading-relaxed

            text-black/60
            "
          >
            The project you are looking for does not exist or may have been
            removed.
          </p>
        </div>
      </section>
    );
  }

  return (
    <main
      className="
      overflow-x-hidden
      "
    >
      <ProjectDetail project={project} />
    </main>
  );
};

export default ProjectPage;
