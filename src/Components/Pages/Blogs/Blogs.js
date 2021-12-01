import React , {useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Aos from 'aos';

import './Blogs.css';

const Blogs = () => {

    const navigate = useNavigate();

    useEffect(() => {
        Aos.init()
    }  ,[])

    return (
        <div data-aos="fade-in" data-aos-duration="1000" className="blogs px-5">
            <div className="d-flex align-items-center section-heading">
                <p onClick={()=>{navigate('/')}} className="cursor-pointer-white"><FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon></p>    
                <p className="ps-4"> Blogs</p>
            </div>
            <div className="sorry px-1 section-heading">
                <p>Working on it..</p>            
            </div>
        </div >
    );
};

export default Blogs;