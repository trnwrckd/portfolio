import React from 'react';
import './About.css';
import skills from './skills.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const About = () => {
    return (
        <div className="about" id="about">
                <h1 className="section-heading">About Me</h1>
            <div className="container  pb-5">
                <div className="row row-cols-1 row-cols-md-2 g-3 d-flex align-items-center">
                    <div className="bio px-3">
                        <p>From websites to simple illustrations, I love designing things from scratch. I spend a significant amount of time visualizing what I'm about to create before jumping in to a project.</p>
                        <p>Development is sort of an art form to me. I need everything to work perfectly and look beautiful. I believe that a good UX can never be traded off for anything else. </p>
                        <p>I care about the things i do in order to do them well. </p>
                        <p>Currently working as a Social Media Designer at Dazzle, but I'm open for Frontend Web Developer roles.</p>
                        <div className="d-flex justify-content-center">
                            <a href="https://github.com/trnwrckd" target="_blank" rel="noopener noreferrer">
                                <h1 className="social me-3"><FontAwesomeIcon icon={faGithub}/></h1> 
                            </a>
                            <a href="https://www.linkedin.com/in/ishmamur-rahman/" target="_blank" rel="noopener noreferrer">
                                <h1 className="social "><FontAwesomeIcon icon={ faLinkedin}/></h1> 
                            </a>
                        </div>
                    </div>
                    <div className="skills">
                        <img className="img-fluid" width="450px" src={skills} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;