import { useEffect, useState } from "react";

export const useData = () => {
  const [projects, setProjects] = useState([]);
  const [experiences, setExperiences] = useState([]);

  const [loaded, setLoaded] = useState(false);

  const projectsUrl = process.env.PUBLIC_URL + "./projects.json";
  const experienceUrl = process.env.PUBLIC_URL + "./experiences.json";

  useEffect(() => {
    fetch(projectsUrl)
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoaded(true);
      });
  });

  useEffect(() => {
    fetch(experienceUrl)
      .then((res) => res.json())
      .then((data) => {
        setExperiences(data);
      });
  });

  return [projects, experiences, loaded];
};
