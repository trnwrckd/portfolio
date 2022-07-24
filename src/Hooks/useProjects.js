import { useEffect, useState } from "react";

export const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [projectsLoaded, setProjectsLoaded] = useState(false);

  const projectsUrl = process.env.PUBLIC_URL + "./projects.json";

  useEffect(() => {
    // fetch projects
    fetch(projectsUrl)
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setProjectsLoaded(true);
      });
  });

  return [projects, projectsLoaded];
};
