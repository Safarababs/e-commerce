import React from "react";
import Irani from "./Irani";
import Iraqi from "./Iraqi";
import Scarf from "./Scarf";
import Kids from "./Kids";
import Maqna from "./Maqna";

function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <h1 className="heading">
        <span>product gallery</span>
      </h1>

      <ul className="controls">
        <li className="btn button-active" data-filter="all">
          all
        </li>
        <li className="btn" data-filter="irani">
          irani shawls
        </li>
        <li className="btn" data-filter="iraqi">
          iraqi abaya
        </li>
        <li className="btn" data-filter="maqna">
          maqna
        </li>
        <li className="btn" data-filter="scarf">
          scarf
        </li>
        <li className="btn" data-filter="kids">
          kids prayer
        </li>
      </ul>

      <div className="image-container">
        <Irani />
        <Iraqi />
        <Scarf />
        <Kids />
        <Maqna />
      </div>
    </section>
  );
}

export default Gallery;
