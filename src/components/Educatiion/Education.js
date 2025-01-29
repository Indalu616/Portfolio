import React from "react";
import "./Education.css";
function Education({ modal }) {
  return (
    <div className="container education-section">
      <h2 className="text-center text-white text-uppercase edu-h2">
        Education & Experience
      </h2>
      <div className="row">
        <div className={modal ? "col-12" : "col"}>
          <div className="exp-section">
            <div className="exp-container rounded">
              <p>2023-PRESENT</p>
              <h3>
                WEB DEVELOPER- <span>ABU DHABI</span>
              </h3>
              <p className="exp-p">
                I am a Web Developer based in Abu Dhabi, working on personal and
                client projects. I specialize in creating responsive,
                user-friendly websites and web applications, focusing on modern
                design, performance, and functionality.
              </p>
              <div className="basket-badge">
                <i className="fa-solid fa-briefcase"></i>
              </div>
            </div>

            <div className="exp-container rounded">
              <p>May 2024-july 2024</p>
              <h3>
                FRONT-END DEVELOPER- <span>PRODIGY INFOTECH</span>
              </h3>
              <p className="exp-p">
                I am a Frontend Developer at Prodigy Infotech, specializing in
                building responsive and visually appealing web applications. I
                work on personal and client projects, focusing on modern UI/UX
                design, performance optimization, and seamless user experiences.
              </p>
              <div className="basket-badge">
                <i className="fa-solid fa-briefcase"></i>
              </div>
            </div>

            <div className="exp-container rounded">
              <p>2023-PRESENT</p>
              <h3>
                COURSE ASSISTANT- <span>ABU DHABI UNIVERSITY</span>
              </h3>
              <p className="exp-p">
                I am a Course Assistant at Abu Dhabi University with over two
                years of experience, assisting students in understanding course
                materials and supporting faculty with academic tasks. My role
                involves guiding students, providing technical support, and
                enhancing the learning experience.
              </p>
              <div className="basket-badge">
                <i className="fa-solid fa-briefcase"></i>
              </div>
            </div>
          </div>
        </div>
        <div className={modal ? "col-12" : "col"}>
          <div className="exp-section">
            <div className="exp-container rounded">
              <p>2023-PRESENT</p>
              <h3>
                BACHELOR DEGREE- <span>ABU DHABI UNIVERSITY</span>
              </h3>
              <p className="exp-p">
                I am a Software Engineering student at Abu Dhabi University,
                passionate about technology, coding, and problem-solving. I
                enjoy developing innovative solutions, exploring new programming
                languages, and staying up to date with the latest trends in
                software development. My goal is to build efficient, scalable,
                and user-friendly applications that make a real impact.
              </p>
              <div className="basket-badge">
                <i className="fa-solid fa-briefcase"></i>
              </div>
            </div>

            <div className="exp-container rounded">
              <p>Future Plan</p>
              <h3>
                MASTER DEGREE- <span>HARVARD UNIVERSITY</span>
              </h3>
              <p className="exp-p">
                I am looking forward to pursuing my master's degree at Harvard
                University to deepen my knowledge, enhance my skills, and
                explore advanced research opportunities in my field. This will
                be a significant step toward achieving my academic and
                professional goals.
              </p>
              <div className="basket-badge">
                <i className="fa-solid fa-briefcase"></i>
              </div>
            </div>

            <div className="exp-container rounded">
              <p>December 2023-August 2024</p>
              <h3>
                ONLINE BOOTCAMP- <span>UDEMY</span>
              </h3>
              <p className="exp-p">
                I am a certified Full Stack Developer from Udemy, skilled in
                both frontend and backend development. I specialize in building
                dynamic, responsive, and scalable web applications using modern
                technologies.
              </p>
              <div className="basket-badge">
                <i className="fa-solid fa-briefcase"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
