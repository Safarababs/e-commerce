function Header() {
  return (
    <header>
      <div className="header-1">
        <div className="form-container">
          <marquee
            direction="right"
            scrollamount="8"
            style={{ textTransform: "none", fontFamily: "Noto Nastaliq Urdu" }}
          >
            آج بھی لوگ حضرت فاطمہ زھراہ کے منہ پر طمانچے مارتے ہیں تو پوچھا گیا
            کون ہیں وہ لوگ؟ آغا بہجت نے جواب دیا ہر وہ شیعہ عورت جو بے حجاب
            ہوتی ہے وہ ہر روز سیدہ فاطمہ کے چہرے پہ طمانچے مارتی ہے آیت اللہ
            تقی بہجت
          </marquee>
        </div>
      </div>

      <div className="header-2">
        <div id="menu" className="fas fa-bars"></div>

        <nav className="navbar">
          <ul>
            <li>
              <a className="active" href="#home">
                home
              </a>
            </li>
            <li>
              <a href="#arrival">arrival</a>
            </li>
            <li>
              <a href="#featured">featured</a>
            </li>
            <li>
              <a href="#gallery">gallery</a>
            </li>
            <li>
              <a href="#deal">deal</a>
            </li>
          </ul>
        </nav>

        <a href="#gallery" className="logo">
          {" "}
          <i className="fas fa-shopping-bag"></i> hijab-e-fatimi{" "}
        </a>
      </div>
    </header>
  );
}

export default Header;
