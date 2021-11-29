import React, { useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useTransition, animated } from 'react-spring';
import { BaseModal, ModalCloseTarget } from 'react-spring-modal';

const Header = () => {

    const [displaySideBar, setdisplaySideBar] = useState(false);

    const transition = useTransition(displaySideBar,{
    });

    const toggleSideNav = () => {
        // setdisplaySideBar(!displaySideBar);
    }

    const staticModalStyles = {
        position: 'absolute',
        top: '0px'
        // width: '100%',
    };

    return (
        <div className="header">
            <h1 onClick={toggleSideNav} id="hamburger"><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></h1>

            <BaseModal
                isOpen={displaySideBar}
                onDismiss={() => setdisplaySideBar(false)}
                contentTransition={{
                    from: {  left: '-100%' },
                    enter: {  left: '0' },
                    leave: {  left: '-100%' }
                }}
                contentProps={{ style: staticModalStyles }}
            >
                <div className="sideBar">
                    <p>Home</p>
                    <p>Skills</p>
                    <p>Projects</p>
                    <p>Contact</p>
                </div> 
            </BaseModal>          
        </div>
    );
};

export default Header;