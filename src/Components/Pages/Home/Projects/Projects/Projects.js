import React, { useEffect } from "react";
import Project from "../Project/Project";
import "././Projects.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useData } from "../../../../../Hooks/useData";

const Projects = () => {
  const [projects] = useData();

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

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
