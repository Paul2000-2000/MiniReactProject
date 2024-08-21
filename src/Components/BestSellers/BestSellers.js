import React from "react";
import "./BestSellers.css";
import vrImage1 from "../../Assests/vr1.jpg";
import vrImage2 from "../../Assests/vr2.jpg";
import vrImage3 from "../../Assests/vr3.jpg";

const BestSellers = () => {
  return (
    <div className="best-sellers-container">
      <h1 className="best-sellers-container-title">Best Sellers</h1>
      <div className="best-sellers-items">
        <div className="best-sellers-items-item">
          <button className="best-sellers-items-item-button">New</button>
          <img
            src={vrImage1}
            alt="vr1"
            className="best-sellers-items-item-img"
          />
          <div>
            <p className="best-sellers-items-item-category">Headsets, Apple</p>
            <h2 className="best-sellers-items-item-product">Apple Headset</h2>
            <h1 className="best-sellers-items-item-price">US$ 450.00</h1>
          </div>
          <button className="best-sellers-items-item-add">ADD TO BAG</button>
        </div>
        <div className="best-sellers-items-item">
          <button className="best-sellers-items-item-button">New</button>
          <img
            src={vrImage2}
            alt="vr2"
            className="best-sellers-items-item-img"
          />
          <div>
            <p className="best-sellers-items-item-category">Headsets, PS</p>
            <h2 className="best-sellers-items-item-product">
              Playstation Headset
            </h2>
            <h1 className="best-sellers-items-item-price">US$ 399.99</h1>
          </div>
          <button className="best-sellers-items-item-add">ADD TO BAG</button>
        </div>
        <div className="best-sellers-items-item">
          <img
            src={vrImage3}
            alt="vr3"
            className="best-sellers-items-item-img"
          />
          <div className="best-sellers-items-item-text">
            <p className="best-sellers-items-item-category">Headsets, Oculus</p>
            <h2 className="best-sellers-items-item-product">Oculus Headset</h2>
            <div className="best-sellers-items-item-text-item3-price">
              <h1 className="best-sellers-items-item-price">US$ 349.99</h1>
              <h3 className="discounted-price">US$ 419.99</h3>
            </div>
          </div>
          <button className="best-sellers-items-item-add">ADD TO BAG</button>
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
