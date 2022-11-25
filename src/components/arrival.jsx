import img1 from "./images/irani2.webp";
import img2 from "./images/iraqi.webp";
import img3 from "./images/kids.jpg";
import img4 from "./images/maqna1.jpg";
import img5 from "./images/scarf.webp";
import img6 from "./images/kid.jpg";

function Arrival() {
  return (
    <section className="arrival" id="arrival">
      <h1 className="heading">
        <span>new arrivals</span>
      </h1>

      <div className="box-container">
        <div className="box">
          <div className="image">
            <img
              src={img1}
              alt="not supported in your browser contact developer"
            />
          </div>

          <div className="info">
            <h3>Irani chadar</h3>
            <div className="subInfo">
              <strong className="price">
                $500/- <span>$1500/-</span>
              </strong>
              <div className="stars">
                <a href="https://wa.me/923427714021/?text=I%20need%20some%20information%20can%20i%20?">
                  <button className="btn">buy now</button>
                </a>
              </div>
            </div>
          </div>

          <div className="overlay">
            <a
              href="https://wa.me/923427714021/?text=I%20need%20some%20information%20can%20i%20?"
              style={{ "--i": 2 }}
              className="fas fa-shopping-bag"
            >
              <p style={{ display: "inline-block", marginLeft: ".5rem" }}>
                shop now
              </p>
            </a>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img src={img2} alt="" />
          </div>
          <div className="info">
            <h3>iraqi abaya</h3>
            <div className="subInfo">
              <strong className="price">
                {" "}
                $1000/- <span>$1500/-</span>{" "}
              </strong>
              <div className="stars">
                <a href="https://wa.me/923427714021/?text=I%20need%20some%20information%20can%20i%20?">
                  <button className="btn">buy now</button>
                </a>
              </div>
            </div>
          </div>
          <div className="overlay">
            <a
              href="https://wa.me/923427714021/?text=I%20need%20some%20information%20can%20i%20?"
              style={{ "--i": 2 }}
              className="fas fa-shopping-bag"
            >
              <p style={{ display: "inline-block", marginLeft: ".5rem" }}>
                shop now
              </p>
            </a>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img src={img3} alt="" />
          </div>
          <div className="info">
            <h3>kids namaz chadar</h3>
            <div className="subInfo">
              <strong className="price">
                {" "}
                $1000/- <span>$1500/-</span>{" "}
              </strong>
              <div className="stars">
                <a href="https://wa.me/923427714021/?text=I%20need%20some%20information%20can%20i%20?">
                  <button className="btn">buy now</button>
                </a>
              </div>
            </div>
          </div>
          <div className="overlay">
            <a
              href="https://wa.me/923427714021/?text=I%20need%20some%20information%20can%20i%20?"
              style={{ "--i": 2 }}
              className="fas fa-shopping-bag"
            >
              <p style={{ display: "inline-block", marginLeft: ".5rem" }}>
                shop now
              </p>
            </a>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img src={img4} alt="" />
          </div>
          <div className="info">
            <h3>maqna</h3>
            <div className="subInfo">
              <strong className="price">
                {" "}
                $1000/- <span>$1500/-</span>{" "}
              </strong>
              <div className="stars">
                <a href="https://wa.me/923427714021/?text=I%20need%20some%20information%20can%20i%20?">
                  <button className="btn">buy now</button>
                </a>
              </div>
            </div>
          </div>
          <div className="overlay">
            <a
              href="https://wa.me/923427714021/?text=I%20need%20some%20information%20can%20i%20?"
              style={{ "--i": 2 }}
              className="fas fa-shopping-bag"
            >
              <p style={{ display: "inline-block", marginLeft: ".5rem" }}>
                shop now
              </p>
            </a>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img src={img5} alt="" />
          </div>
          <div className="info">
            <h3>Scarf's</h3>
            <div className="subInfo">
              <strong className="price">
                {" "}
                $1000/- <span>$1500/-</span>{" "}
              </strong>
              <div className="stars">
                <a href="https://wa.me/923427714021/?text=I%20need%20some%20information%20can%20i%20?">
                  <button className="btn">buy now</button>
                </a>
              </div>
            </div>
          </div>
          <div className="overlay">
            <a
              href="https://wa.me/923427714021/?text=I%20need%20some%20information%20can%20i%20?"
              style={{ "--i": 2 }}
              className="fas fa-shopping-bag"
            >
              <p style={{ display: "inline-block", marginLeft: ".5rem" }}>
                shop now
              </p>
            </a>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img src={img6} alt="" />
          </div>
          <div className="info">
            <h3>kids abaya</h3>
            <div className="subInfo">
              <strong className="price">
                {" "}
                $1000/- <span>$1500/-</span>{" "}
              </strong>
              <div className="stars">
                <a href="https://wa.me/923427714021/?text=I%20need%20some%20information%20can%20i%20?">
                  <button className="btn">buy now</button>
                </a>
              </div>
            </div>
          </div>
          <div className="overlay">
            <a
              href="https://wa.me/923427714021/?text=I%20need%20some%20information%20can%20i%20?"
              style={{ "--i": 2 }}
              className="fas fa-shopping-bag"
            >
              <p style={{ display: "inline-block", marginLeft: ".5rem" }}>
                shop now
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Arrival;
