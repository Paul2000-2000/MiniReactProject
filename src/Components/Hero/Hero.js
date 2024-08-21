import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-content">
      <div className="hero-content-text">
        <h1 className="hero-content-text-h">
          Discover our line of VR Headsets
        </h1>
        <p className="hero-content-text-p">
          Sed up perspiciatis unde omnis iste natus error sit voluptaterm
          accusantium doloremque laudantium.
        </p>
        <button className="hero-content-text-button">VIEW HEADSETS</button>
      </div>
    </div>
  );
};

export default Hero;
