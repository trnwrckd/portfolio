import React from 'react';
import './Project.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from "@fortawesome/free-solid-svg-icons";

const Project = (props) => {
    
    const { title, shortDesc, img , url} = props.project;

    return (
        <div className="col">
            <div className="project-img-container">
                <div className="icons">
                    <a href={url} target="blank"> <FontAwesomeIcon icon={faLink}/></a>
                </div>
                <img className="project-img" src={img} alt="" />
            </div>
            <div className="text-start mx-2 mt-2">
                <h3>{title}</h3>
                <h5>{shortDesc}</h5>
            </div>
        </div>
    );
};

export default Project;