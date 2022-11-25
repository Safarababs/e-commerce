import img1 from "./images/irani4.jpg";
import img2 from "./images/irani chadar.jpg";

function Deal() {
  return (
    <section className="deal" id="deal">
      <h1 className="heading">
        <span>best deals</span>
      </h1>

      <div className="box-container">
        <div className="box">
          <img src={img1} alt="" />

          <div className="content">
            <h3>high quality irani chadar</h3>
            <p>upto 10% off on first purchase</p>
            <a href="https://wa.me/923427714021/?text=I%20need%20some%20information%20can%20i%20?">
              <button>explore</button>
            </a>
          </div>
        </div>

        <div className="box">
          <img src={img2} alt="" />

          <div className="content">
            <h3>kids prayer shawl</h3>
            <p>upto 10% off on first purchase</p>
            <a href="https://wa.me/923427714021/?text=I%20need%20some%20information%20can%20i%20?">
              <button>explore</button>
            </a>
          </div>
        </div>
      </div>

      <div className="icons-container">
        <div className="icons">
          <i className="fas fa-shipping-fast"></i>
          <h3>fast delievery</h3>
          <p>We deliver all the produsts at your doorstep</p>
        </div>

        <div className="icons">
          <i className="fas fa-box"></i>
          <h3>10 days replacements</h3>
          <p>you can replace your product in case of any issue</p>
        </div>

        <div className="icons">
          <i className="fas fa-user-clock"></i>
          <h3>24 x 7 support</h3>
          <p>
            we are offering our services to our beloved clients for any time
          </p>
        </div>

        <div className="icons">
          <i className="fas fa-money-check-alt"></i>
          <h3>easy payments</h3>
          <p>
            we give ease to customers to pay their dues. even you can pay via
            jazzcash, easypaisa{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Deal;
