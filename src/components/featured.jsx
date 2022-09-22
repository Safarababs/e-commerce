import watch1 from "./images/watch1.jpg";
import watch2 from "./images/watch2.jpg";
import watch3 from "./images/watch3.jpg";
import watch4 from "./images/watch4.jpg";




function Featured() {
    return (
        <section className="feature" id="featured">

            <h1 className="heading"> <span> featured product </span> </h1>

            <div className="row">

                <div className="image-container">

                    <div className="big-image">
                        <img src={watch1} alt="" />
                    </div>

                    <div className="small-image">
                        <img src={watch2} alt="" />
                        <img src={watch3} alt="" />
                        <img src={watch4} alt="" />
                        <img className="image-active" src={watch1} alt="" />
                    </div>

                </div>

                <div className="content">

                    <h3>smart watches</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <span>(500+) reviews</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, at!</p>
                    <strong className="price">₹1000 <span>₹1500</span> </strong>
                    <a href="#"><button className="btn">buy now</button></a>

                </div>

            </div>

        </section>
    )
}

export default Featured;