import React from "react";
import { useProjects } from "../../../../../Hooks/useProjects";
import Project from "../Project/Project";
import Loader from "../../../../Shared/Loader/Loader";
import "aos/dist/aos.css";
import "././Projects.css";

const Projects = () => {
  const [projects, loaded] = useProjects();
  if (!loaded) return <Loader />;
  return (
    <div className="projects" id="projects">
      <h1 className="section-heading">Projects</h1>
      <div data-aos="fade-in" className=" container projects-container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
          {projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
