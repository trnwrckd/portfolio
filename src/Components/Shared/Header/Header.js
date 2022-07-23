import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { BaseModal } from "react-spring-modal";
import SideBar from "../SideBar/SideBar";
import { useNavigate } from "react-router";
import "@reach/dialog/styles.css";

import "./Header.css";

const Header = () => {
  const [displaySideBar, setDisplaySideBar] = useState(false);
  const navigate = useNavigate();

  const toggleSideBar = (e) => {
    setDisplaySideBar(!displaySideBar);
  };

  const staticModalStyles = {
    position: "absolute",
    top: "-125px",
    width: "75%",
    // height: '100%',
  };

  const scrollToHash = (hash) => {
    setDisplaySideBar(false);
    if (hash === "blogs") {
      const redirectURL = `/${hash}`;
      navigate(redirectURL);
    } else {
      const hashLoc = document.getElementById(hash);
      hashLoc.scrollIntoView();
    }
  };

  return (
    <div className="header">
      <h1 onClick={toggleSideBar} id="hamburger">
        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
      </h1>

      <div>
        <BaseModal
          isOpen={displaySideBar}
          onDismiss={() => setDisplaySideBar(false)}
          contentTransition={{
            from: { left: "-100%" },
            enter: { left: "0" },
            leave: { left: "-100%" },
          }}
          contentProps={{ style: staticModalStyles }}
        >
          <div className="sidebar-container">
            <SideBar
              scrollToHash={scrollToHash}
              setDisplaySideBar={setDisplaySideBar}
            />
          </div>
        </BaseModal>
      </div>
    </div>
  );
};

export default Header;
