import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container-b">
      <div className="footer-container">
        <div className="footer-container-text">
          <div className="footer-container-text-column">
            <h2 className="footer-container-text-column-title">Categories</h2>
            <p className="footer-container-text-column-p">Watches</p>
            <p className="footer-container-text-column-p">Cameras</p>
            <p className="footer-container-text-column-p">Phones</p>
            <p className="footer-container-text-column-p">Tablets</p>
            <p className="footer-container-text-column-p">Computers</p>
          </div>
          <div className="footer-container-text-column">
            <h2 className="footer-container-text-column-title">About us</h2>
            <p className="footer-container-text-column-p">Our Story</p>
            <p className="footer-container-text-column-p">Press</p>
            <p className="footer-container-text-column-p">Blog</p>
            <p className="footer-container-text-column-p">Awards</p>
            <p className="footer-container-text-column-p">Stores</p>
          </div>
          <div className="footer-container-text-column">
            <h2 className="footer-container-text-column-title">Social Media</h2>
            <p className="footer-container-text-column-p">Facebook</p>
            <p className="footer-container-text-column-p">LinkedIn</p>
            <p className="footer-container-text-column-p">Instagram</p>
            <p className="footer-container-text-column-p">Twitter</p>
            <p className="footer-container-text-column-p">Youtube</p>
          </div>
          <div className="footer-container-text-column">
            <h2 className="footer-container-text-column-title">
              Customer Service
            </h2>
            <p className="footer-container-text-column-p">Live Chat</p>
            <p className="footer-container-text-column-p">Contact Us</p>
            <p className="footer-container-text-column-p">Terms & Conditions</p>
            <p className="footer-container-text-column-p">Delivery & Returns</p>
            <p className="footer-container-text-column-p">Finance</p>
          </div>
        </div>
      </div>
      <div className="footer-container-bar">
        <p>2020 @ All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
