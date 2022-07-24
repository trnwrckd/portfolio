import { useEffect, useState } from "react";

export const useData = () => {
  const [projects, setProjects] = useState([]);
  const [experiences, setExperiences] = useState([]);

  const [experienceLoaded, setExperiencesLoaded] = useState(false);
  const [projectsLoaded, setProjectsLoaded] = useState(false);

  const projectsUrl = process.env.PUBLIC_URL + "./projects.json";
  const experienceUrl = process.env.PUBLIC_URL + "./experiences.json";

  useEffect(() => {
    // fetch projects
    fetch(projectsUrl)
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setProjectsLoaded(true);
      });
    // fetch experience
    fetch(experienceUrl)
      .then((res) => res.json())
      .then((data) => {
        setExperiences(data);
        setExperiencesLoaded(true);
      });
  });

  return [projects, projectsLoaded, experiences, experienceLoaded];
};
