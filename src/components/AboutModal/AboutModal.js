import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Education from "../Educatiion/Education";
import resume from "../../resume/final_resume.pdf"
function AboutModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const downloadResume=()=>{
    let aTag=document.createElement("a")
    aTag.href=resume
    aTag.download="Indalu_resume"
    aTag.click()
  }
  return (
    <>
      <Button onClick={handleShow}>
        MORE ABOUT ME <i className="fa-solid fa-arrow-right"></i>
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>ABOUT ME</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="about p-1">
            <div className="container">
              <h1>
                ABOUT <span>ME</span>
              </h1>
              <div className="row">
                <div className="col personal-info">
                  <h2>Personal Infos</h2>
                  <div className="row">
                    <div className="col info">
                      <div className="single-info">
                        <p>First Name: </p>
                        <p> Indalu</p>
                      </div>
                      <div className="single-info">
                        <p>Freelance: </p>
                        <p className="available"> Available</p>
                      </div>
                      <div className="single-info">
                        <p>Phone: </p>
                        <p> +971509223870</p>
                      </div>
                      <div className="single-info">
                        <p>Telegram: </p>
                        <p> Find me</p>
                      </div>
                    </div>
                    <div className="col info">
                      <div className="single-info">
                        <p>Last Name:</p>
                        <p> Kelbesa</p>
                      </div>
                      <div className="single-info">
                        <p>Nationality:</p>
                        <p>Ethiopian</p>
                      </div>
                      <div className="single-info">
                        <p>Address: </p>
                        <p> Abu Dhabi,UAE</p>
                      </div>
                      <div className="single-info">
                        <p>Languages:</p>
                        <p> English,Arabic</p>
                      </div>
                    </div>
                  </div>
                  <button onClick={()=>downloadResume()}>
                    Download CV <i className="fa-regular fa-circle-down"></i>
                  </button>
                </div>
                <div className="col">
                  <div className="row">
                    <div className="col-12 exp">
                      <div className="exp-box rounded">
                        <h2>
                          <span>3</span>+
                        </h2>
                        <p>
                          <span>Years of</span>
                          <br></br> <span>experience</span>
                        </p>
                      </div>
                    </div>
                    <div className="col-12 exp">
                      <div className="exp-box rounded">
                        <h2>
                          <span>12</span>+
                        </h2>
                        <p>
                          <span>Happy</span> <br></br> <span>customers</span>
                        </p>
                      </div>
                    </div>
                    <div className="col-12 exp">
                      <div className="exp-box rounded">
                        <h2>
                          <span>6</span>+
                        </h2>
                        <p>
                          <span>Projects</span> <br></br> <span>completed</span>
                        </p>
                      </div>
                    </div>
                    <div className="col-12 exp">
                      <div className="exp-box rounded">
                        <h2>
                          <span>10</span>+
                        </h2>
                        <p>
                          <span>Awards</span> <br></br>
                          <span>Won</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* skill section */}
            <div className="container">
              <h2 className="text-center text-white skill-heading">
                MY SKILLS
              </h2>
              <div className="row">
                <div className="col-6 skill">
                  <div className="skill-box">
                    <div className="circle">
                      <h3>95%</h3>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="-1 -1 34 34"
                      >
                        <circle
                          cx="16"
                          cy="16"
                          r="15.9155"
                          class="progress-bar__background html"
                        />
                      </svg>
                    </div>
                    <p>HTML</p>
                  </div>
                </div>

                <div className="col-6 skill">
                  <div className="skill-box">
                    <div className="circle">
                      <h3>95%</h3>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="-1 -1 34 34"
                      >
                        <circle
                          cx="16"
                          cy="16"
                          r="15.9155"
                          class="progress-bar__background css"
                        />
                      </svg>
                    </div>
                    <p>CSS</p>
                  </div>
                </div>

                <div className="col-6 skill">
                  <div className="skill-box">
                    <div className="circle">
                      <h3>95%</h3>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="-1 -1 34 34"
                      >
                        <circle
                          cx="16"
                          cy="16"
                          r="15.9155"
                          class="progress-bar__background js"
                        />
                      </svg>
                    </div>
                    <p>JAVASCRIPT</p>
                  </div>
                </div>

                <div className="col-6 skill">
                  <div className="skill-box">
                    <div className="circle">
                      <h3>90%</h3>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="-1 -1 34 34"
                      >
                        <circle
                          cx="16"
                          cy="16"
                          r="15.9155"
                          class="progress-bar__background rct"
                        />
                      </svg>
                    </div>
                    <p>REACT</p>
                  </div>
                </div>

                <div className="col-6 skill">
                  <div className="skill-box">
                    <div className="circle">
                      <h3>90%</h3>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="-1 -1 34 34"
                      >
                        <circle
                          cx="16"
                          cy="16"
                          r="15.9155"
                          class="progress-bar__background git"
                        />
                      </svg>
                    </div>
                    <p>GIT</p>
                  </div>
                </div>

                <div className="col-6 skill">
                  <div className="skill-box">
                    <div className="circle">
                      <h3>85%</h3>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="-1 -1 34 34"
                      >
                        <circle
                          cx="16"
                          cy="16"
                          r="15.9155"
                          class="progress-bar__background java"
                        />
                      </svg>
                    </div>
                    <p>JAVA</p>
                  </div>
                </div>

                <div className="col-6 skill">
                  <div className="skill-box">
                    <div className="circle">
                      <h3>85%</h3>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="-1 -1 34 34"
                      >
                        <circle
                          cx="16"
                          cy="16"
                          r="15.9155"
                          class="progress-bar__background python"
                        />
                      </svg>
                    </div>
                    <p>PYTHON</p>
                  </div>
                </div>

                <div className="col-6 skill">
                  <div className="skill-box">
                    <div className="circle">
                      <h3>80%</h3>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="-1 -1 34 34"
                      >
                        <circle
                          cx="16"
                          cy="16"
                          r="15.9155"
                          className="firebase"
                        />
                      </svg>
                    </div>
                    <p>FIREBASE</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-edu">
              <Education modal={true}/>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AboutModal;
