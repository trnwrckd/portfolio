import React, { useEffect } from 'react';
import './ProjectDetails.css';
import { useParams , useNavigate} from 'react-router-dom';
import { useProjects } from '../../../Hooks/useProjects';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft  , faDotCircle} from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import NotFound from '../NotFound/NotFound';

const ProjectDetails = () => {
    
    const { id } = useParams();
    const navigate = useNavigate();
    const [projects , loaded] = useProjects();

    const thisProject = projects[id - 1];
    const { title, img , links, techs , features}  = thisProject ? thisProject : {};

    useEffect(()=>{AOS.init()},[])

    if( loaded && typeof(thisProject) === 'undefined') return <NotFound/>

    return (
        <div data-aos="fade-in" className="px-5 pt-3 project-details">
            <div className="d-flex flex-column">
                <div className="d-flex">
                    <h1 onClick={()=>{navigate('/')}} className="cursor-pointer"><FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon></h1>
                    <h1 className="ps-4"> {title} </h1>
                </div>
                <div className="links">
                    {links.url && <a href={links.url}> Live Site</a>}
                    {links.front && <a href={links.front}> Frontend</a>}
                    {links.back && <a href={links.back}> Backend</a>}
                </div>
            </div>
            


            <div className="px-md-2 px-lg-4 row row-cols-1 row-cols-lg-2 g-3 details-container">
                <div className="col py-3">
                    <div className="d-flex flex-column my-auto">
                        <div><img src={img} className="img-fluid project-details-img" width="100%" alt="" /></div>
                        <div className="py-3">
                            <h3 className="text-start">Tech Used</h3>
                            <div className="row row-cols-4 g-3">
                                {
                                    techs.map( tech=> <div key={tech} className="p"> {tech}</div> )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col ps-4 py-3">
                    <h2 className="text-start">Features</h2>
                    {
                        features.map(feature => 
                            <div key={feature} className = "d-flex align-items-center">
                                <FontAwesomeIcon icon={faDotCircle}></FontAwesomeIcon>
                                <p>{feature}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;