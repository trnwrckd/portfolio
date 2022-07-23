import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div>
        <div className="px-5">
          <p className="name"> Ishmamur Rahman</p>
          <p className="role">
            <span style={{ color: "#ff922d" }}>Frontend</span> Developer{" "}
          </p>
        </div>
        <div>
          <a
            href={`https://drive.google.com/uc?export=download&id=1dcd6jdfshRhmqheHwZ2b5Kn5QI2EfYnT`}
            download
          >
            <button className="btn-resume">Download Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
