import React from "react";
import "./about.css";
import ME from "../../assets/about-me.jpg";
function about() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <p>
            {" "}
            Hello my self Naveen kumar I am from Bihar and you have completed
            your B.Tech degree from People's University in Bhopal, Madhya
            Pradesh. I have a solid foundation in HTML, CSS,Bootstrap,
            JavaScript, Reactjs, Java, and SQL. As a Full Stack Developer, I
            have likely skilled in both front-end and back-end development, and
            have experience with designing and building web applications from
            scratch. You may have worked on projects that involve database
            integration, user authentication, and data visualization. With your
            education and experience, you have the potential to contribute
            greatly to the tech industry and build innovative solutions that
            make a positive impact on people's lives.
          </p>
          <a href="#contect" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default about;
