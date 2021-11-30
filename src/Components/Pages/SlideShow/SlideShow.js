import React ,{ useEffect, useState} from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './SlideShow.css';
import Aos from 'aos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft , faAngleRight } from '@fortawesome/free-solid-svg-icons';
import useScreenWidth from '../../../Hooks/useScreenWidth';



const SlideShow = (props) => {

    const { state } = useLocation();
    const navigate = useNavigate();
    const { images, links } = state;
    
    const width = useScreenWidth();

    const slideProperties = {
        prevArrow : <div className="arrow"><FontAwesomeIcon icon={faAngleLeft} /></div>,
        nextArrow : <div className="arrow"><FontAwesomeIcon icon={faAngleRight} /></div>
    }

    useEffect(() => {
        Aos.init();
    },[])

    return (
        <div data-aos="slide-left" className="px-5 py-4">
            <div className="d-flex align-items-center project-title text-light">
                    <p onClick={() => { navigate(-1) }} className="cursor-pointer-white">
                        <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
                    </p>
                    <p className="mb-3 ms-3 text-start">SlideShow</p>
                </div>
            <div>
                {
                    width > 700 ?
                        <Fade {...slideProperties}>
                            {images.map((image, index)=> (
                                <div className="slide" key={index}> 
                                    <img src={image} className="img-fluid rounded img-fit" alt="" />
                                </div>
                            ))} 
                        </Fade>
                    : 
                        images.map(image =>
                            <div key={image} className="mb-3">
                                <img src={image} className="img-fluid" alt="" />
                            </div>
                            )
                }
                <a href={links.url} target="_blank" rel="noopener noreferrer">
                    <h1 className="slide-text">View Project</h1>
                </a>
            </div>

        </div>
    );
};

export default SlideShow;