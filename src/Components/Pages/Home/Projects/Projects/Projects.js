import React, { useEffect, useState } from 'react';
import Project from '../Project/Project';
import '././Projects.css';
import Aos from 'aos';
import "aos/dist/aos.css";

const Projects = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        Aos.init({duration:1000});
        fetch('./projects.json').then(res=>res.json()).then(data=>setProjects(data))
    },[])

    return (
        <div className="projects full-vh">
            <h1>Projects</h1>
            <div data-aos="fade-left" className="container py-5">
                <div className= "row row-cols-1 row-cols-md-3 g-3">
                    {
                        projects.map(project => <Project key={project.id} project={project}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;