import React from "react";
import "./SideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";

const SideBar = (props) => {
  const { scrollToHash } = props;
  return (
    <div className="sideBar">
      <p
        className="sidebar-nav-item"
        onClick={() => {
          scrollToHash("home");
        }}
      >
        Home
      </p>
      <p
        className="sidebar-nav-item"
        onClick={() => {
          scrollToHash("about");
        }}
      >
        About
      </p>
      <p
        className="sidebar-nav-item"
        onClick={() => {
          scrollToHash("projects");
        }}
      >
        Projects
      </p>
      {/* <p onClick={()=>{scrollToHash("blogs")}}>Blogs</p> */}
      <div className="d-flex justify-content-center">
        <a href="https://github.com/trnwrckd" target="_blank">
          <h1 className="sidebar-nav-item me-3">
            <FontAwesomeIcon icon={faGithub} />
          </h1>
        </a>
        <a href="https://www.linkedin.com/in/ishmamur-rahman/" target="_blank">
          <h1 className="sidebar-nav-item me-3">
            <FontAwesomeIcon icon={faLinkedin} />
          </h1>
        </a>
        <a href="https://codepen.io/trnwrckd" target="_blank">
          <h1 className="sidebar-nav-item ">
            <FontAwesomeIcon icon={faCodepen} />
          </h1>
        </a>
      </div>
    </div>
  );
};

export default SideBar;
