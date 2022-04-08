import React from "react";
import "./about.css";
import ME from "../../assets/about2.jpg";
function about() {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about image" />
          </div>
        </div>
        <div className="about__content">
          <p>Hi I started learning web development 6 months ago now I have a good understanding of how to develop a good website I know how to connect the front end with the backend and how to fetch data from the database. I understand the importance of security Additionally I have 1.7 years of experience in computer networking and I understand very well how much security is important for anyone. I can create a secure website with the best UX</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
}

export default about;
