import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <div className="container contact">
      <h1 className="text-center">
        GET IN <span>TOUCH</span>
      </h1>
      <div className="row">
        <div className="col address-section">
          <div className="address">
            <h2 className="text-uppercase">feel free to contact me!</h2>
            <p>
              Feel free to get in touch with me. I am always open to discuss new
              projects, creative ideas or opportunities to be part of your
              visions.
            </p>
            <div className="my-address">
              <div className="icon-sec">
                <i className="fa-solid fa-map"></i>
              </div>
              <div className="desc-sec">
                <h3 className="text-uppercase">Address</h3>
                <p>Abu Dhabi,UAE</p>
              </div>
            </div>

            <div className="my-address">
              <div className="icon-sec">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="desc-sec">
                <h3 className="text-uppercase">mail me</h3>
                <p>endalukalbesa511@gmail.com</p>
              </div>
            </div>

            <div className="my-address">
              <div className="icon-sec">
                <i className="fa-solid fa-square-phone"></i>
              </div>
              <div className="desc-sec">
                <h3 className="text-uppercase">call me</h3>
                <p>+971509223870</p>
              </div>
            </div>
            <button>
              <i className="fa-brands fa-facebook"></i>
            </button>
            <button>
              <i className="fa-brands fa-github"></i>
            </button>
            <button>
              <i className="fa-brands fa-linkedin-in"></i>
            </button>
            <button>
              <i className="fa-brands fa-telegram"></i>
            </button>
          </div>
        </div>
        <div className="col message-section">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="YOUR NAME"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="eamil"
                placeholder="YOUR EMAIL"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="5"
                placeholder="type here..."
              ></textarea>
            </div>
            <button>
              SEND MESSAGE <i className="fa-solid fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
