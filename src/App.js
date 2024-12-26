import { useState } from "react";
import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/contact/Contact";
function App() {
  const [page, setPage] = useState("home");
  return (
    <div className="App">
      <div className="side-bar">
        <div className="side-menu">
          <p
            className={page === "home" ? "active" : ""}
            onClick={() => setPage("home")}
          >
            <i className="fa-solid fa-house"></i>
          </p>
          <p
            className={page === "about" ? "active" : ""}
            onClick={() => setPage("about")}
          >
            <i className="fa-solid fa-user"></i>
          </p>
          <p
            className={page === "portfolio" ? "active" : ""}
            onClick={() => setPage("portfolio")}
          >
            <i className="fa-solid fa-briefcase"></i>
          </p>
          <p
            className={page === "contact" ? "active" : ""}
            onClick={() => setPage("contact")}
          >
            <i className="fa-regular fa-envelope"></i>
          </p>
        </div>
      </div>
      {page === "home" && <Home />}
      {page === "about" && <About />}
      {page === "portfolio" && <Portfolio />}
      {page === "contact" && <Contact />}
    </div>
  );
}

export default App;
