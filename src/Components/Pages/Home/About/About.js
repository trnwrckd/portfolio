import React from 'react';
import './About.css';


const About = () => {
    return (
        <div className="about">
            <h1 className="section-heading">About</h1>
            <div className="container pt-3 pb-5">
                <div className="row row-cols-1 row-cols-md-2 g-3">
                    <div className="bio">
                        I am fascinated by so many things. Designing, for instance. From simple illustrations to web designing. Some people are gifted but not being one of them, I want to find out how much difference is actually made by putting an effort.
                        I am keen on Web Development. I've experience with Svelte and React. I have some experience in android development with Flutter.
                        Being a Machine Learning enthusiast, I spend a fair amount of my time working on my BSc thesis these days. I use Python3.0, scikit-learn and Tensorflow in my codes.
                        There is so much left to learn, and I have only now discovered that.
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