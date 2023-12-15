import React from "react";
import "./skills.scss";
import htmlLogo from "../../assets/html-logo.png";
import cssLogo from "../../assets/css-logo.png";
import jsLogo from "../../assets/javascript-logo.png";
import scssLogo from "../../assets/scss-logo.png";
import tailwindLogo from "../../assets/tailwind-logo.png";
import reactLogo from "../../assets/react-logo.png";
import pythonLogo from "../../assets/python-logo.png";
import nodejsLogo from "../../assets/nodejs-logo.png";
import mongodbLogo from "../../assets/mongodb.png";
import expressLogo from "../../assets/express.png";

export const Skills = () => {
  return (
    <>
      <article className="skills-wrapper" id="skills">
        <h1>Skills</h1>
        <div className="skills-cards-wrapper">
          <section className="skills-card">
            <img src={htmlLogo} alt="" />
            <p>HTML</p>
          </section>
          <section className="skills-card">
            <img src={cssLogo} alt="" />
            <p>CSS</p>
          </section>
          <section className="skills-card">
            <img src={jsLogo} alt="" />
            <p>JavaScript</p>
          </section>
          <section className="skills-card">
            <img src={scssLogo} alt="" />
            <p>SCSS</p>
          </section>
          <section className="skills-card">
            <img src={tailwindLogo} alt="" />
            <p>Tailwindcss</p>
          </section>
          <section className="skills-card">
            <img src={reactLogo} alt="" />
            <p>React</p>
          </section>
          <section className="skills-card">
            <img src={nodejsLogo} alt="" />
            <p>Node.js</p>
          </section>
          <section className="skills-card">
            <img src={expressLogo} alt="" />
            <p>Express</p>
          </section>
          <section className="skills-card">
            <img src={mongodbLogo} alt="" />
            <p>MongoDB</p>
          </section>
          <section className="skills-card">
            <img src={pythonLogo} alt="" />
            <p>Python</p>
          </section>
        </div>
      </article>
    </>
  );
};
