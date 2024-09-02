import "./experience.scss";

export const Experience = () => {
  return (
    <article id="experience" className="experience-wrapper">
      <section className="experience-title-wrapper">
        <h1>Experience</h1>
      </section>
      <section className="experience-cards-wrapper">
        <section className="experience-card">
          <p className="role-title">Full Stack Developer Intern</p>
          <p className="role-company">Evvent</p>
          <p className="role-date">April 2024 - September 2024</p>
          <ul>
            <li>
              Designed and implemented a comprehensive review and chatting
              system
            </li>
            <li>Developed reusable and modular UI components.</li>
            <li>
              Collaborated with the design and development team to ensure
              consistency and functionality.
            </li>
            <li>
              Actively participated in team meetings to discuss project goals,
              progress and challenges.
            </li>
            <li>
              Gained hands-on experience with Next.js, React, Tailwindcss and
              tRPC.
            </li>
          </ul>
        </section>
        <section className="experience-card">
          <p className="role-title">Front-End Developer</p>
          <p className="role-company">Blue Schindler Studios</p>
          <p className="role-date">November 2023 - March 2024</p>
          <ul>
            <li>
              Worked with a photography studio based in New York, USA to improve
              their presence online by developing a portfolio website.
            </li>
            <li>
              Developed a fully responsive portfolio website in collaboration
              with the Blue Schindler Studios team using React and SCSS.
            </li>
            <li>
              Enhanced the user experience of the photography portfolio website
              by actively incorporating client feedback and design preferences.
            </li>
            <li>
              Maintained a close relationship with a photography client,
              exceeding their expectations by implementing design revisions
              promptly.
            </li>
            <li>
              Assisted client with the selection and setup of a hosting plan.
            </li>
          </ul>
        </section>
      </section>
    </article>
  );
};
