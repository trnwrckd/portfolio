import React from 'react';
import './Project.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Project = (props) => {
    
    const { title, shortDesc, img } = props.project;

    return (
        <div className="col">
            <div className="project-img-container">
                <div className="icons">
                    <FontAwesomeIcon icon={faGithub}/>
                    <p>log</p>
                    <p>log</p>
                </div>
                <img className="project-img" src={img} alt="" />
            </div>
            <h3>{title}</h3>
            <h5>{shortDesc}</h5>
        </div>
    );
};

export default Project;