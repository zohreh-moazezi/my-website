import React from "react";
import { SiGmail } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { AiOutlineLinkedin , AiOutlinePhone } from "react-icons/ai";

const Contact = () => {
    var x = document.createElement("footer");
return(   
  <>
    <div id="AllComponent" className="contactSection">
      <div className="Headers" data-aos="fade-down">
        <h1 className="contactHeader">Contact</h1>
      </div>
      <address className="contact">
        <div className="iconButton">
          <div className="icon">
            <a href="mailto : zohreh.moazezi94@gmail.com" className="gmail">
              <SiGmail className="myIcon" />
            </a>
          </div>
          <p className="label">Gmail</p>
        </div>
        <div className="iconButton middle">
          <div className="icon">
            <a href="https://github.com/zohreh-moazezi" className="gitHub">
              <VscGithub className="myIcon" />
            </a>
          </div>
          <p className="label">GitHub</p>
        </div>

        <div className="iconButton">
          <div className="icon">
            <a href="https://www.linkedin.com/in/zohreh-moazezi-88011898/" className="linkedIn">
              <AiOutlineLinkedin className="myIcon" />
            </a>
          </div>
          <p className="label">LinkedIn</p>
        </div>
        <div className="iconButton phoneIcon">
          <div className="icon">
            <a href="tel:+989032562396" className="phone">
              <AiOutlinePhone className="myIcon" />
            </a>
          </div>
          <p className="label">+989032562396</p>
        </div>
      </address>
    </div>
  </>
);
}
export default Contact;
