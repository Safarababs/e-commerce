import React from "react";
import kid1 from "./images/kids.jpg";
import kid2 from "./images/kids2.jpg";
import kid3 from "./images/kidss.webp";

function Kids() {
  return (
    <>
      <div className="box kids">
        <div className="image">
          <img src={kid1} alt="" />
        </div>
        <div className="info">
          <h3>kid namaz chadar</h3>

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

      <div className="box kids">
        <div className="image">
          <img src={kid2} alt="" />
        </div>
        <div className="info">
          <h3>kid namaz chadar</h3>
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

      <div className="box kids">
        <div className="image">
          <img src={kid3} alt="" />
        </div>
        <div className="info">
          <h3>kid namaz chadar</h3>
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
}

export default Kids;
