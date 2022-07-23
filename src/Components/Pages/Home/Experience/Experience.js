import React from "react";
import { useData } from "../../../../Hooks/useData";
import "./Experience.css";

export default function Experience() {
  const data = useData();
  const experiences = data[1];
  return (
    <div className="experiences" id="experiences">
      <h1 className="section-heading">Experience</h1>
      <div className="container pb-5">
        {experiences.map((exp) => (
          <div className="experience py-3" key={exp.id}>
            <h2>
              <span className="text-orange">{exp.position}</span> at{" "}
              {exp.organization}
            </h2>
            <h5>{exp.duration}</h5>
            <h4>{exp.description}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
