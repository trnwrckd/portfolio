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
                <div className="d-flex align-items-center project-title">
                    <p onClick={()=>{navigate('/')}} className="cursor-pointer"><FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon></p>
                    <p className="ps-4"> {title} </p>
                </div>
                <div className="links">
                    {links.url && <a href={links.url}> Live Site</a>}
                    {links.front && <a href={links.front}> Frontend</a>}
                    {links.back && <a href={links.back}> Backend</a>}
                </div>
            </div>
            


            <div className="px-md-2 px-lg-4 row row-cols-1 row-cols-lg-2 g-3 details-container">
                <div className="col py-3">
                    <div className="d-flex flex-column">
                        <div><img src={img} className="img-fluid project-details-img" width="100%" alt="" /></div>
                        <div className="py-3">
                            <h3 className="text-start mb-4">Tech Used</h3>
                            <div className="row row-cols-3 row-cols-md-4 g-3">
                                {
                                    techs.map( tech=> <div key={tech} className="col tech"> {tech}</div> )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col features text-start ">
                    <div className="px-0 px-xl-3 py-3">

                    <h1 className="mb-3">Features</h1>
                    {
                        features.map(feature => 
                            <div key={feature} className= "d-flex justify-content-start">
                                <small><FontAwesomeIcon icon={faDotCircle}></FontAwesomeIcon></small>
                                <p className="d-inline-block ps-2">{feature}</p>
                            </div>
                        )
                    }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;