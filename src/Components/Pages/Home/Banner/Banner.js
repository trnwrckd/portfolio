import React , {useEffect} from 'react';
import './Banner.css';

import Aos from 'aos';


const Banner = () => {

    useEffect(() => {
       Aos.init({duration:2000});
    },[])

    return (
        <div className="banner full-vh">
            <div>
                <div className="px-5">
                    <p className="name"> Ishmamur Rahman</p>
                    <p className="role">Junior <span style={{color:'#ff922d'}}>Frontend</span> Developer </p>
                </div>
                <div>
                    <button className="btn-resume">
                        <a href={`https://drive.google.com/uc?export=download&id=1dcd6jdfshRhmqheHwZ2b5Kn5QI2EfYnT`} download>Download Resume</a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;

