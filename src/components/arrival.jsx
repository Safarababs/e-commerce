import img1 from "./images/arr_img1.jpg";
import img2 from "./images/arr_img2.jpg";
import img3 from "./images/arr_img3.jpg";
import img4 from "./images/arr_img4.jpg";
import img5 from "./images/arr_img5.jpg";
import img6 from "./images/arr_img6.jpg";






function Arrival(){
    return(
        <section className="arrival" id="arrival">
            <h1 className="heading"><span>new arrivals</span></h1>

            <div className="box-container">

                <div className="box">
                    <div className="image">
                        <img src={img1} alt="not supported in your browser contact developer"/>
                    </div>

                    <div className="info">
                        <h3>smart tv</h3>
                        <div className="subInfo">
                            <strong className="price">$500/- <span>$1500/-</span></strong>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half"></i>
                            </div>
                        </div>
                    </div>

                    <div className="overlay">
                        <a href="#" style={{"--i":1}} className="fas fa-heart" ></a>
                        <a href="#" style={{"--i":2}} className="fas fa-shopping-cart" ></a>
                        <a href="#" style={{"--i":3}} className="fas fa-search" ></a>
                    </div>
                </div>

                <div className="box">
        <div className="image">
            <img src={img2} alt="" />
        </div>
        <div className="info">
            <h3>game console</h3>
            <div className="subInfo">
                <strong className="price"> $1000/- <span>$1500/-</span> </strong>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half"></i>
                </div>
            </div>
        </div>
        <div className="overlay">
            <a href="#" style={{"--i":1}} className="fas fa-heart"></a>
            <a href="#" style={{"--i":2}} className="fas fa-shopping-cart"></a>
            <a href="#" style={{"--i":3}} className="fas fa-search"></a>
        </div>
    </div>

    <div className="box">
        <div className="image">
            <img src={img3} alt="" />
        </div>
        <div className="info">
            <h3>latest shoes</h3>
            <div className="subInfo">
                <strong className="price"> $1000/- <span>$1500/-</span> </strong>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half"></i>
                </div>
            </div>
        </div>
        <div className="overlay">
            <a href="#" style={{"--i":1}} className="fas fa-heart"></a>
            <a href="#" style={{"--i":2}} className="fas fa-shopping-cart"></a>
            <a href="#" style={{"--i":3}} className="fas fa-search"></a>
        </div>
    </div>

    <div className="box">
        <div className="image">
            <img src={img4} alt="" />
        </div>
        <div className="info">
            <h3>smartphones</h3>
            <div className="subInfo">
                <strong className="price"> $1000/- <span>$1500/-</span> </strong>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half"></i>
                </div>
            </div>
        </div>
        <div className="overlay">
            <a href="#" style={{"--i":1}} className="fas fa-heart"></a>
            <a href="#" style={{"--i":2}} className="fas fa-shopping-cart"></a>
            <a href="#" style={{"--i":3}} className="fas fa-search"></a>
        </div>
    </div>

    <div className="box">
        <div className="image">
            <img src={img5} alt="" />
        </div>
        <div className="info">
            <h3>branded t-shirts</h3>
            <div className="subInfo">
                <strong className="price"> $1000/- <span>$1500/-</span> </strong>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half"></i>
                </div>
            </div>
        </div>
        <div className="overlay">
            <a href="#" style={{"--i":1}} className="fas fa-heart"></a>
            <a href="#" style={{"--i":2}} className="fas fa-shopping-cart"></a>
            <a href="#" style={{"--i":3}} className="fas fa-search"></a>
        </div>
    </div>

    <div className="box">
        <div className="image">
            <img src={img6} alt="" />
        </div>
        <div className="info">
            <h3>amazing speakers</h3>
            <div className="subInfo">
                <strong className="price"> $1000/- <span>$1500/-</span> </strong>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half"></i>
                </div>
            </div>
        </div>
        <div className="overlay">
            <a href="#" style={{"--i":1}} className="fas fa-heart"></a>
            <a href="#" style={{"--i":2}} className="fas fa-shopping-cart"></a>
            <a href="#" style={{"--i":3}} className="fas fa-search"></a>
        </div>
    </div>

            </div>
        </section>
    )
}

export default Arrival;