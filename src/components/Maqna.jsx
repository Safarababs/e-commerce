import React from "react";
import maqna from "./images/maqna1.jpg";
import maqna2 from "./images/maqna2.jpg";
import maqna3 from "./images/maqna3.jpg";

const Maqna = () => {
  return (
    <>
      <div className="box maqna">
        <div className="image">
          <img src={maqna} alt="" />
        </div>
        <div className="info">
          <h3>maqna</h3>
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

      <div className="box maqna">
        <div className="image">
          <img src={maqna2} alt="" />
        </div>
        <div className="info">
          <h3>maqna</h3>
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

      <div className="box maqna">
        <div className="image">
          <img src={maqna3} alt="" />
        </div>
        <div className="info">
          <h3>maqna</h3>
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

export default Maqna;
