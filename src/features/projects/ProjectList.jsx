import ProjectCard from "./ProjectCard";

import { projects } from "./projectsData";

const ProjectList = () => {
  return (
    <div
      className="
      grid

      grid-cols-1
      lg:grid-cols-2

      gap-8
      lg:gap-10
      "
    >
      {projects.map((project) => (
        <div
          key={project.id}
          className="
          relative
          "
        >
          <ProjectCard
            project={project}
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectList;