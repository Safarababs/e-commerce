import React from "react";
import iran1 from "./images/irani chadar.jpg";
import iran2 from "./images/irani2.webp";

const Irani = () => {
  return (
    <>
      <div className="box irani">
        <div className="image">
          <img src={iran1} alt="" />
        </div>
        <div className="info">
          <h3>irani chadar</h3>
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

      <div className="box irani">
        <div className="image">
          <img src={iran2} alt="" />
        </div>
        <div className="info">
          <h3>irani chadar</h3>
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

      <div className="box irani">
        <div className="image">
          <img src={iran2} alt="" />
        </div>
        <div className="info">
          <h3>irani chadar</h3>
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

export default Irani;
