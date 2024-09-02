import "./aboutMe.scss";

export const AboutMe = () => {
  return (
    <>
      <article className="about-me-wrapper" id="about-me">
        <div className="about-me-first">
          <h1>About Me</h1>
          <p>Below you can read more about me and my skills</p>
        </div>
        <div className="about-me-wrapper-content">
          <section className="about-me-text">
            <h1>My profile</h1>
            <p>
              I am a Full Stack Developer with a bit over 1.5 years of
              experience. I'm extremely passionate about coding and building
              things on the web. I love learning and I'm always learning new
              things, along with improving and expanding my existing knowledge.
              I thrive on leveraging my skills to craft innovative solutions and
              contribute to existing projects.
            </p>
            <p>
              I'm open to job opportunities where I can contribute, learn and
              grow. If you have a good opportunity that matches my skills and
              experience then don't hesitate to contact me.
            </p>
          </section>
          <section className="about-me-skills">
            <h1>Skills</h1>
            <div className="skills-container">
              <p>HTML/CSS</p>
              <p>SCSS</p>
              <p>TailwindCSS</p>
              <p>JavaScript</p>
              <p>TypeScript</p>
              <p>React</p>
              <p>Node.js</p>
              <p>Express.js</p>
              <p>NestJS</p>
              <p>MongoDB</p>
              <p>PostgreSQL</p>
              <p>Python</p>
              <p>Next.js</p>
              <p>tRPC</p>
            </div>
          </section>
        </div>
      </article>
    </>
  );
};
