import React from "react";
import "./experience.css";
import { BiBadgeCheck } from "react-icons/bi";
const experience = () => {
  return (
    <section id="ecpereance">
      <h5>What Skill I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experence__content">
            <article className="experence__details">
              <BiBadgeCheck className="experence__details-icon" />
              <div>
              <h4>HTML</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experence__details">
              <BiBadgeCheck className="experence__details-icon" />
             <div>
             <h4>CSS</h4>
              <small className="text-light">Intermediate</small>
             </div>
            </article>
            <article className="experence__details">
              <BiBadgeCheck className="experence__details-icon" />
              <div>
              <h4>JavaScript</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experence__details">
              <BiBadgeCheck className="experence__details-icon" />
             <div>
             <h4>Bootstrap</h4>
              <small className="text-light">Intermediate</small>
             </div>
            </article>
            <article className="experence__details">
              <BiBadgeCheck className="experence__details-icon" />
              <div>
              <h4>Reactjs</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        {/* Backend content*************** */}

        <div className="experence__backend">
          <h3>Backend Development</h3>
          <div className="experence__content">
            <article className="experence__details">
              <BiBadgeCheck className="experence__details-icon" />
              <div>
              <h4>Java</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experence__details">
              <BiBadgeCheck className="experence__details-icon" />
              <div>
              <h4>J2EE</h4>
              <small className="text-light">Bigneer</small>
              </div>
            </article>
            <article className="experence__details">
              <BiBadgeCheck className="experence__details-icon" />
              <div>
              <h4>SQL</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experence__details">
              <BiBadgeCheck className="experence__details-icon" />
              <div>
              <h4>PHP</h4>
              <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default experience;
