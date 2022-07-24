import { useEffect, useState } from "react";

export const useExperiences = () => {
  const [experiences, setExperiences] = useState([]);
  const [experienceLoaded, setExperiencesLoaded] = useState(false);

  const experienceUrl = process.env.PUBLIC_URL + "./experiences.json";

  useEffect(() => {
    // fetch experience
    fetch(experienceUrl)
      .then((res) => res.json())
      .then((data) => {
        setExperiences(data);
        setExperiencesLoaded(true);
      });
  });

  return [experiences, experienceLoaded];
};
