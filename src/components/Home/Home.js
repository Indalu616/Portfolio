import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import me from "../../Images/me.png";
import "./Home.css";
import AboutModal from "../AboutModal/AboutModal";
function Home() {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Software Engineer",
        "Web Developer",
        "Freelancer",
        "Data Analyst",
      ],
      typeSpeed: 50,
      backSpeed: 100,
      loop: true,
      loopCount: Infinity,
      showCursor: false,
      smartBackspace: true,
    });
    typed.start();
  });
  return (
    <div className="container home-cont">
      <div className="row">
        <div className="col-lg-4 img-section">
          <div className="img-box">
            <img src={me} alt="my-image"></img>
          </div>
        </div>
        <div className="col-lg-8 about-section">
          <div className="about-desc">
            <h1>I'm Indalu Kelbesa</h1>
            <h1>
              <span id="el" ref={el}></span>
            </h1>
            <p>
              Hello There! I'm Indalu Kelbesa, a front end web developer and UI
              designer with pixel-perfect precision.Proficient in frameworks
              such as React and tools like Git, I ensure seamless user
              experiences across various devices and browsers.
            </p>
            <AboutModal />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
