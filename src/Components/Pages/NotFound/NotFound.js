import React, { useEffect } from 'react';
import './NotFound.css';
import Aos from 'aos';
import { useNavigate } from 'react-router';

const NotFound = () => {

    const navigate = useNavigate();
    useEffect(() => {
        Aos.init()
    }  ,[])

    return (
        <div className="not-found d-flex flex-column" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="1000">
            <p data-aos="slide-right" data-aos-duration="1500">Nothing to see here</p>
            <button onClick={()=>{navigate('/')}} data-aos="slide-left" data-aos-duration="1500" className="btn-not-found">Go back</button>
        </div>
    );
};

export default NotFound;