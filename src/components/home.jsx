import img1 from "./images/home_img1.jpg";
import img2 from "./images/home_img2.jpg";
import img3 from "./images/home_img3.jpg";
import img4 from "./images/home_img4.jpg";




function Home() {
    return (
        <section className="home" id="home">

            <div className="home-slider owl-carousel">

                <div className="item">
                    <img src={img1} alt="not supported in your browser contact developer" />
                    <div className="content">
                        <h3>heavy discounts</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, neque.</p>
                        <a href="#"><button className="btn">discover</button></a>
                    </div>
                </div>

                <div className="item">
                    <img src={img2} alt="not supported in your browser contact developer" />
                    <div className="content">
                        <h3>latest gadegts</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, neque.</p>
                        <a href="#"><button className="btn">discover</button></a>
                    </div>
                </div>

                <div className="item">
                    <img src={img3} alt="not supported in your browser contact developer" />
                    <div className="content">
                        <h3>trending shoes</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, neque.</p>
                        <a href="#"><button className="btn">discover</button></a>
                    </div>
                </div>

                <div className="item">
                    <img src={img4} alt="not supported in your browser contact developer" />
                    <div className="content">
                        <h3>fresh groceries</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, neque.</p>
                        <a href="#"><button className="btn">discover</button></a>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Home;