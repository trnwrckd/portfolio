import React from "react";
import "./Footer.css";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <div className="footer py-3">
      <h5>© Ishmamur Rahman, {date}</h5>
    </div>
  );
};

export default Footer;
