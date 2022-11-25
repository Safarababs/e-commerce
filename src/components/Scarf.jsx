import React from "react";
import scarf from "./images/scarf.webp";
import scarf1 from "./images/scarf2.jpg";
import scarf2 from "./images/scarf3.jpg";

const Scarf = () => {
  return (
    <>
      <div className="box scarf">
        <div className="image">
          <img src={scarf} alt="" />
        </div>
        <div className="info">
          <h3>scarf</h3>
          <div className="subInfo">
            <strong className="price">$1000</strong>
            <div className="stars">
              <a href="https://wa.me/923427714021/?text=I%20need%20some%20information%20can%20i%20?">
                <button className="btn">buy now</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="box scarf">
        <div className="image">
          <img src={scarf1} alt="" />
        </div>
        <div className="info">
          <h3>scarf</h3>
          <div className="subInfo">
            <strong className="price">$1000</strong>
            <div className="stars">
              <a href="https://wa.me/923427714021/?text=I%20need%20some%20information%20can%20i%20?">
                <button className="btn">buy now</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="box scarf">
        <div className="image">
          <img src={scarf2} alt="" />
        </div>
        <div className="info">
          <h3>scarf</h3>
          <div className="subInfo">
            <strong className="price">$1000</strong>
            <div className="stars">
              <a href="https://wa.me/923427714021/?text=I%20need%20some%20information%20can%20i%20?">
                <button className="btn">buy now</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Scarf;
