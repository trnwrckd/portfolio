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
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="about" id="about">
      <h1 className="section-heading">About Me</h1>
      <div className="container  pb-5">
        <div className="row row-cols-1 row-cols-md-2 g-3 d-flex align-items-center">
          <div className="bio px-3">
            <p>
              I love
              <span className="text-orange">
                {" "}
                designing web applications from scratch.{" "}
              </span>
            </p>
            <p>
              Frontend development is sort of an{" "}
              <span className="text-yellow"> art form </span> to me. I like
              implementing the{" "}
              <span className="text-orange">user centric features.</span> I
              believe that a <span className="text-yellow"> good UX </span> can
              never be traded off for anything else.{" "}
            </p>
            <p>
              Being a CS graduate from University of Chittagong, these days I'm
              working on improving my problem solving skills on platforms like{" "}
              <span className="text-orange">HackerRank</span> and{" "}
              <span className="text-yellow">LeetCode</span>, and I've got some
              exciting side projects going &#129395;
            </p>
            <p>I care about the things I do in order to do them well. </p>
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
