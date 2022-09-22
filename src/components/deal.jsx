import img1 from "./images/deal1.jpg";
import img2 from "./images/deal2.jpg";


function Deal(){
    return(
        <section className="deal" id="deal">
            <h1 className="heading"><span>best deals</span></h1>

            <div className="box-container">

                <div className="box">
                    <img src={img1} />

                    <div className="content">
                        <h3>latest laptop</h3>
                        <p>upto 25% off on first purchase</p>
                        <a href="#"><button>explore</button></a>
                    </div>
                </div>

                <div className="box">
                    <img src={img2} />

                    <div className="content">
                        <h3>new headphones</h3>
                        <p>upto 25% off on first purchase</p>
                        <a href="#"><button>explore</button></a>
                    </div>
                </div>
            </div>

            <div className="icons-container">

                <div className="icons">

                    <i className="fas fa-shipping-fast"></i>
                    <h3>fast delievery</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, molestiae?</p>
                </div>

                <div className="icons">

                    <i className="fas fa-box"></i>
                    <h3>10 days replacements</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, molestiae?</p>
                </div>

                <div className="icons">

                    <i className="fas fa-user-clock"></i>
                    <h3>24 x 7 support</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, molestiae?</p>
                </div>

                <div className="icons">

                    <i className="fas fa-money-check-alt"></i>
                    <h3>easy payments</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, molestiae?</p>
                </div>
            </div>
        </section>
    )
}

export default Deal;