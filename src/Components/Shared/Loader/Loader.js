import React from "react";
import "./Loader.css";

export default function Loader() {
  return (
    <div className="loader-container d-flex flex-column">
      <div className="loader">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
}
