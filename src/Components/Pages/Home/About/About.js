import React, { useEffect } from "react";
import "./About.css";
import skills from "./skills.png";

import Aos from "aos";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="about" id="about">
      <h1 className="section-heading">About Me</h1>
      <div className="container  pb-5">
        <div className="row row-cols-1 row-cols-md-2 g-3 d-flex align-items-center">
          <div className="bio px-3">
            <p>
              From websites to simple illustrations, I love
              <span className="text-orange">
                {" "}
                designing things from scratch.{" "}
              </span>
              I spend a significant amount of time
              <span className="text-green"> visualizing </span>
              what I'm about to create before jumping in to a project.
            </p>
            <p>
              Development is sort of an{" "}
              <span className="text-orange"> art form </span> to me. I need
              everything to work perfectly and look beautiful. I believe that a{" "}
              <span className="text-green"> good UX </span> can never be traded
              off for anything else.{" "}
            </p>
            <p>I care about the things i do in order to do them well. </p>
            <p>
              Currently working as a Social Media Designer at
              <a
                href="https://www.facebook.com/dazzle.ctg"
                target="_blank"
                rel="noopener noreferrer"
                className="dazzle"
              >
                Dazzle
              </a>
              , but I'm open for Frontend Web Developer roles.
            </p>
            <div className="d-flex justify-content-center">
              <a
                href="https://github.com/trnwrckd"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h1 className="social me-3">
                  <FontAwesomeIcon icon={faGithub} />
                </h1>
              </a>
              <a
                href="https://www.linkedin.com/in/ishmamur-rahman/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h1 className="social me-3">
                  <FontAwesomeIcon icon={faLinkedin} />
                </h1>
              </a>
              <a
                href="https://codepen.io/trnwrckd"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h1 className="social">
                  <FontAwesomeIcon icon={faCodepen} />
                </h1>
              </a>
            </div>
          </div>
          <div className="skills" data-aos="fade-in">
            <img className="img-fluid" width="450px" src={skills} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
