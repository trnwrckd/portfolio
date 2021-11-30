import React, { useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { BaseModal, ModalCloseTarget } from 'react-spring-modal';
import SideBar from '../SideBar/SideBar';

const Header = () => {

    const [displaySideBar, setdisplaySideBar] = useState(false);

    const toggleSideNav = () => {
        setdisplaySideBar(!displaySideBar);
    }

    const staticModalStyles = {
        position: 'fixed',
        top: '0px',
        width: '80%'
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
                <SideBar />
                <ModalCloseTarget>
                    <div className="w-100 d-flex justify-content-end">
                        <button className="btn-close-modal d-block">╳</button>
                    </div>
                </ModalCloseTarget>
            </BaseModal>          
        </div>
    );
};

export default Header;