function Footer() {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <a href="#" className="logo">
            <i className="fas fa-shopping-bad"></i>hijab-e-fatimi
          </a>
          <p>
            Hijab-e-fatimi is an online service from where you can buy Abaya,
            scarg, maqna, irani shawl, iraqi abaya. (prayer shawl and abaya for
            kids availbe too){" "}
          </p>
        </div>

        <div className="box">
          <h3>links</h3>
          <a className="active" href="#home">
            home
          </a>
          <a href="#arrival">arrival</a>
          <a href="#featured">featured</a>
          <a href="#gallery">gallery</a>
          <a href="#deal">deal</a>
        </div>

        <div className="box">
          <h3>contact us</h3>
          <p>
            {" "}
            <i className="fas fa-home" style={{ marginRight: "1rem" }}></i>
            Sahiwal, punjab, pakistan
          </p>
          <p>
            {" "}
            <i className="fas fa-phone" style={{ marginRight: "1rem" }}></i>
            +92-342-7714021
          </p>
          <p>
            {" "}
            <i className="fas fa-envelope" style={{ marginRight: "1rem" }}></i>
            <a href="mailto:asmasajjad333@gmail.com" style={{ color: "#333" }}>
              asmasajjad333@gmail
            </a>
          </p>
        </div>
      </div>

      <h1 className="credit">
        copyright© {new Date().getFullYear()} <span>hijab-e-fatimi</span> || all
        rights reserved.
      </h1>
    </section>
  );
}

export default Footer;
