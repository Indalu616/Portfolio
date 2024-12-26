import React, { useState } from "react";
import "./Portfolio.css";
import Projects from "./Projects";
import { Works } from "./WorksList";
function Portfolio() {
  const [results, setResults] = useState(Works);
  const [el, setEl] = useState("all");
  const filterProject = (type) => {
    setEl(type);
    setResults(Works.filter((work) => work.type === type));
  };

  return (
    <div className="container my-works pro">
      <h1 className="text-center text-uppercase">
        My <span>Portfolio</span>
      </h1>
      <div className="filters">
        <p
          className={
            el === "all" ? "text-uppercase under-line" : "text-uppercase"
          }
          onClick={() => {
            setResults(Works);
            setEl("all");
          }}
        >
          All
        </p>
        <p
          className={
            el === "React" ? "text-uppercase under-line" : "text-uppercase"
          }
          onClick={() => filterProject("React")}
        >
          React
        </p>
        <p
          className={
            el === "Java" ? "text-uppercase under-line" : "text-uppercase"
          }
          onClick={() => filterProject("Java")}
        >
          Java
        </p>
        <p
          className={
            el === "Javascript" ? "text-uppercase under-line" : "text-uppercase"
          }
          onClick={() => filterProject("Javascript")}
        >
          Javascript
        </p>
        <p
          className={
            el === "powerbi" ? "text-uppercase under-line" : "text-uppercase"
          }
          onClick={() => filterProject("powerbi")}
        >
          Power BI
        </p>
      </div>
      <Projects projects={results} />
    </div>
  );
}

export default Portfolio;
