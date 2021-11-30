import React from 'react';
import './About.css';


const About = () => {
    return (
        <div className="about">
            <h1 className="section-heading">About</h1>
            <div className="container pt-3 pb-5">
                <div className="row row-cols-1 row-cols-md-2 g-3">
                    <div className="bio px-2">
                        <p>From websites to simple illustrations, I love designing things from scratch. I spend a significant amount of time visualizing what I'm about to create before jumping in to a project.</p>
                        <p>Development is sort of an art form to me. I need everything to work perfectly and look beautiful. I believe that a good UX can never be traded off for anything else. </p>
                        <p>I care about the things i do in order to do them well. </p>
                        <p>Currently working as a Social Media Designer at Dazzle, but I'm open for Frontend Web Developer roles.</p>
                    </div>
                    <div className="skills">
                        <img className="img-fluid" width="450px" src="https://trnwrckd.github.io/ph-simplePortfolio/images/skillSet.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;