import React from "react";
import iraq from "./images/iraqi.jpg";
import iraq1 from "./images/iraqi.webp";

const Iraqi = () => {
  return (
    <>
      <div className="box iraqi">
        <div className="image">
          <img src={iraq} alt="" />
        </div>
        <div className="info">
          <h3>iraqi abaya</h3>
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

      <div className="box iraqi">
        <div className="image">
          <img src={iraq1} alt="" />
        </div>
        <div className="info">
          <h3>iraqi abaya</h3>
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

export default Iraqi;
