import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <h1>VR</h1>
        <div className="navbar-left-circle"></div>
        <div className="navbar-left-circle"></div>
        <h1>Headsets</h1>
      </div>
      <div className="navbar-right">
        <div>About us</div>
        <div>Best Sellers</div>
        <div>Newsletter</div>
      </div>
    </div>
  );
};

export default Navbar;
