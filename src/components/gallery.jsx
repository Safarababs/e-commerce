import img1 from "./images/g_img1.jpg";
import img2 from "./images/g_img2.jpg";
import img3 from "./images/g_img3.jpg";
import img4 from "./images/g_img4.jpg";
import img5 from "./images/g_img5.jpg";
import img6 from "./images/g_img6.jpg";
import img7 from "./images/g_img7.jpg";
import img8 from "./images/g_img8.jpg";
import img9 from "./images/g_img9.jpg";


function Gallery() {
    return (
        <section className="gallery" id="gallery">
            <h1 className="heading"><span>product gallery</span></h1>

            <ul className="controls">
                <li className="btn button-active" data-filter="all">all</li>
                <li className="btn" data-filter="phone">phone</li>
                <li className="btn" data-filter="laptop">laptop</li>
                <li className="btn" data-filter="headphone">headphones</li>
                <li className="btn" data-filter="shoes">shoes</li>
            </ul>

            <div className="image-container">
                <div className="box phone">
                    <div className="image">
                        <img src={img1} alt="" />
                    </div>
                    <div className="info">
                        <h3>smartphones</h3>
                        <div className="subInfo">
                            <strong className="price">$1000</strong>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="box phone">
                    <div className="image">
                        <img src={img2} alt="" />
                    </div>
                    <div className="info">
                        <h3>smartphones</h3>
                        <div className="subInfo">
                            <strong className="price">$1000</strong>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="box laptop">
                    <div className="image">
                        <img src={img3} alt="" />
                    </div>
                    <div className="info">
                        <h3>laptop</h3>
                        <div className="subInfo">
                            <strong className="price">$1000</strong>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="box shoes">
                    <div className="image">
                        <img src={img4} alt="" />
                    </div>
                    <div className="info">
                        <h3>shoes</h3>
                        <div className="subInfo">
                            <strong className="price">$1000</strong>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="box laptop">
                    <div className="image">
                        <img src={img5} alt="" />
                    </div>
                    <div className="info">
                        <h3>laptop</h3>
                        <div className="subInfo">
                            <strong className="price">$1000</strong>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="box headphone">
                    <div className="image">
                        <img src={img6} alt="" />
                    </div>
                    <div className="info">
                        <h3>headphone</h3>
                        <div className="subInfo">
                            <strong className="price">$1000</strong>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="box shoes">
                    <div className="image">
                        <img src={img7} alt="" />
                    </div>
                    <div className="info">
                        <h3>shoes</h3>
                        <div className="subInfo">
                            <strong className="price">$1000</strong>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="box headphone">
                    <div className="image">
                        <img src={img8} alt="" />
                    </div>
                    <div className="info">
                        <h3>headphone</h3>
                        <div className="subInfo">
                            <strong className="price">$1000</strong>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="box headphone">
                    <div className="image">
                        <img src={img9} alt="" />
                    </div>
                    <div className="info">
                        <h3>headphone</h3>
                        <div className="subInfo">
                            <strong className="price">$1000</strong>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half"></i>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Gallery;