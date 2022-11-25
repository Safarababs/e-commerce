import watch1 from "./images/irani chadar.jpg";
import watch2 from "./images/irani2.webp";
import watch3 from "./images/irani3.webp";
import watch4 from "./images/irani4.jpg";

function Featured() {
  return (
    <section className="feature" id="featured">
      <h1 className="heading">
        {" "}
        <span> featured product </span>{" "}
      </h1>

      <div className="row">
        <div className="image-container">
          <div className="big-image">
            <img src={watch3} alt="" />
          </div>

          <div className="small-image">
            <img src={watch1} alt="" />
            <img src={watch2} alt="" />
            <img src={watch4} alt="" />
            <img className="image-active" src={watch1} alt="" />
          </div>
        </div>

        <div className="content">
          <h3>irani chadar</h3>
          <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <span>(500+) reviews</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
            at!
          </p>
          <strong className="price">
            ₹1000 <span>₹1500</span>{" "}
          </strong>
          <a href="https://wa.me/923427714021/?text=I%20need%20some%20information%20can%20i%20?">
            <button className="btn">buy now</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Featured;
