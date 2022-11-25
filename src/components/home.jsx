import React from "react";

function Home() {
  return (
    <>
      <section className="landing" id="home">
        <h1>
          Hijab-e-fatimei <br></br>lets be an islamic women
        </h1>
        <a href="https://wa.me/923427714021/?text=I%20need%20some%20information%20can%20i%20?">
          <button className="btn">get started</button>
        </a>
      </section>

      <header>
        <div className="header-1">
          <div className="form-container">
            <marquee
              direction="left"
              scrollamount="8"
              style={{ textTransform: "none" }}
            >
              Hijab-e-Fatimi's aim is to spread sunna of Syeda Fatima Zahra s.A.
              She says to her belovers that women's favourite ornament is abaya
              through which she can live in janna forever.
            </marquee>
          </div>
        </div>
      </header>
    </>
  );
}

export default Home;
