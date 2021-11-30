import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

import './Blogs.css';

const Blogs = () => {

    const navigate = useNavigate();

    return (
        <div className="blogs px-5">
            <div className="d-flex align-items-center">
                <h1 onClick={()=>{navigate('/')}} className="cursor-pointer"><FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon></h1>    
                <h1 className="section-heading ps-4"> Blogs</h1>
            </div>
            <div className="sorry px-1">
                <p style={{fontSize: '4rem'}}>Working on it..</p>            
            </div>
        </div >
    );
};

export default Blogs;