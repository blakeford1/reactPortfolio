import React from "react";
import Footer from "./Footer";

function About() {
  return (
    <section
      className="about"
      id="about"
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-delay="300"
      data-aos-easing="ease-in-sine"
    >
      <div className="container">
        <div className="profile-img">
          <img
            src={"./assets/Images/profile.JPG"}
            style={{ paddingTop: "50px" }}
            alt=""
          />
        </div>
        <div className="about-details" style={{ paddingTop: "70px" }}>
          <div className="about-heading">
            <h1>About</h1>
            <h6>Me</h6>
          </div>
          <p>
            Coding truly astonishes me and has peaked my interest lately. We use
            our phones, laptops , and tablets every day in numerous ways.
            Throughout our day we are using it for everything from business to
            private matters. Since we use it every day of our lives, wouldn't
            you want to know the backbone that lets us use these websites and
            applications? Building applications and websites is now my lifelong
            dream. That is why it fascinates me so much! It is constantly
            changing and evolving. I want to evolve and change with it.
            Transforming me into the best software developer i can be.
          </p>
          <div className="social-media">
            <ul className="nav-list">
              <li>
                <a href="https://github.com/blakeford1" className="icon-link">
                  <i className="fab fa-github-square"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/blake-ford1/"
                  className="icon-link"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default About;
