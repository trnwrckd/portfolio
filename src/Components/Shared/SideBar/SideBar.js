import React from "react";
import "./SideBar.css";

const SideBar = (props) => {
  const { scrollToHash } = props;
  return (
    <div className="sideBar">
      <p
        onClick={() => {
          scrollToHash("home");
        }}
      >
        Home
      </p>
      <p
        onClick={() => {
          scrollToHash("about");
        }}
      >
        About
      </p>
      <p
        onClick={() => {
          scrollToHash("projects");
        }}
      >
        Projects
      </p>
      {/* <p onClick={()=>{scrollToHash("blogs")}}>Blogs</p> */}
    </div>
  );
};

export default SideBar;
