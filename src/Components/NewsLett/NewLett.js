import React from "react";
import "./NewLett.css";

const NewLett = () => {
  return (
    <div className="NewLett-container-b">
      <div className="NewLett-container">
        <h1 className="NewLett-container-h">Newsletter Signup</h1>
        <p className="NewLett-container-p">
          Subscribe now and don't miss a single deal!
        </p>
        <div className="NewLett-container-embut">
          <input
            type="email"
            placeholder="Your email..."
            className="NewLett-container-embut-inp"
          />
          <button className="NewLett-container-embut-but"> SUBSCRIBE </button>
        </div>
      </div>
    </div>
  );
};

export default NewLett;
