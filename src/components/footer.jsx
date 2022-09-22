function Footer(){
    return(
        <section className="footer">
             <div className="box-container">

                <div className="box">
                    <a href="#" className="logo"><i className="fas fa-shopping-bad"></i>shopping</a>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique expedita molestiae distinctio facere beatae velit, maiores ullam molestias necessitatibus sapiente.</p>
                </div>

                <div className="box">
                    <h3>links</h3>
                    <a className="active" href="#home">home</a>
                    <a href="#arrival">arrival</a>
                    <a href="#featured">featured</a>
                    <a href="#gallery">gallery</a>
                    <a href="#deal">deal</a>
                </div>

                <div className="box">
                    <h3>contact us</h3>
                    <p> <i className="fas fa-home"></i>bhera, sargodha, punjab, pakistan - 40540</p>
                    <p> <i className="fas fa-phone"></i>+923016005735</p>
                    <p> <i className="fas fa-globe"></i>xyz@yoursite.com</p>
                </div>
             </div>

             <h1 className="credit">© Copyright @ {new Date().getFullYear()} <span>mr. safar abbas</span> | all rights reserved.</h1>
        </section>
    )
}

export default Footer;