import React, { useEffect } from "react";
import { useData } from "../../../../../Hooks/useData";
import Project from "../Project/Project";
import Loader from "../../../../Shared/Loader/Loader";
import Aos from "aos";
import "aos/dist/aos.css";
import "././Projects.css";

const Projects = () => {
  const [projects, loaded] = useData();

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
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
