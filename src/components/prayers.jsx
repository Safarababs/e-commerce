import React from "react";

function Prayers() {
  const pray = [
    "اللھم ارزقنا شفاعۃ الحسین یوم الورود",
    "اللھم ارزقنا فی الدنیا زیارۃ الحسین",
    "اللھم اکتبنا من زوار الحسین",
    "اللھم اجعلنا من الباقین فی عزا الحسین",
    "اللھم صل علی محمد وآل محمد",
    "اللھم احشرنا فی زمرۃ الحسین",
    "اللھم ادخلناالجنۃ من باب الحسین",
    "ٓالسلام علیک یا ابا عبداللہ الحسین و علی اولاد الحسین وعلی اصحاب الحسین",
    "آج بھی لوگ حضرت فاطمہ زھراہ کے منہ پر طمانچے مارتے ہیں تو پوچھا گیا کون ہیں وہ لوگ؟ آغا بہجت نے جواب دیا ہر وہ شیعہ عورت جو بے حجاب ہوتی ہے وہ ہر روز سیدہ فاطمہ کے چہرے پہ طمانچے مارتی ہے آیت اللہ تقی بہجت😢",
  ];

  function Prayers() {
    return (
      <marquee
        direction="right"
        scrollamount="12"
        width="100vw"
        style={{
          color: "white",
          fontSize: "4rem",
          fontFamily: "Noto Nastaliq Urdu",
          lineHeight: "5rem",
          letterSpacing: ".1rem",
          height: "30vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {pray[Math.floor(Math.random() * pray.length)]}
      </marquee>
    );
  }
  return <section style={{ background: "transparent" }}>{Prayers()}</section>;
}

export default Prayers;
