import React, { useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useTransition , animated} from 'react-spring';

const Header = () => {

    const [displaySideBar, setdisplaySideBar] = useState(false);

    const transition = useTransition(displaySideBar,{
    });

    const toggleSideNav = () => {
        setdisplaySideBar(!displaySideBar);
        // console.log(displaySideBar)
    }

    return (
        <div className="header">
            <h1 onClick={toggleSideNav} id="hamburger"><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></h1>
                {transition((style, i) => {
                        i &&
                        <animated.div style={style} className="sideBar">
                            <p>Home</p>
                            <p>Skills</p>
                            <p>Projects</p>
                            <p>Contact</p>
                        </animated.div> 
                })}            
        </div>
    );
};

export default Header;