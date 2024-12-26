import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./ProjectModal.css";
function ProjectModal({ work }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button
        onClick={handleShow}
        style={{
          backgroundColor: "transparent",
          padding: "0",
          width: "100%",
          border: "none",
        }}
      >
        <div className="project-box" style={{ height: "250px" }}>
          <img
            src={work.imgUrl}
            alt="project"
            className="img-fluid rounded"
            style={{ height: "250px", width: "100%" }}
          ></img>
          <div className="pro-title rounded">
            <p className="text-uppercase">{work.name}</p>
          </div>
        </div>
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title
            className="text-uppercase"
            style={{ fontSize: "1.2rem", fontWeight: "700" }}
          >
            {work.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col">
              <p>Project: Website</p>
              <p>Language: React</p>
            </div>
            <div className="col">
              <p>Client: Personal Project</p>
              <p>
                Preview: <a href={work.url}>Click here</a>
              </p>
            </div>
          </div>
          <div className="pro-img">
            <img
              src={work.imgUrl}
              className="img-fluid rounded"
              alt="project"
            ></img>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProjectModal;
