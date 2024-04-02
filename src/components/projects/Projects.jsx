import "./projects.scss";
import { motion } from "framer-motion";
import gameTagPicture from "../../assets/game-tag.png";
import recipiPicture from "../../assets/recipi.png";
import amhMoviesPicture from "../../assets/amhmovies.png";

export const Projects = () => {
  return (
    <article id="projects" className="projects-wrapper">
      <section className="projects-title">
        <h1>Projects</h1>
      </section>
      <article className="projects-cards-wrapper">
        <section className="projects-card">
          <section className="img-wrapper">
            <img src={recipiPicture} />
          </section>
          <section className="project-content-wrapper">
            <h1>Recipi</h1>
            <p className="description">
              Platform where sharing, discovering and managing recipes has never
              been easier
            </p>
            <div className="project-links">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://recipie-j65d.onrender.com/"
                target="blank"
              >
                Website
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/ajdinhusetovic/recipi"
                target="blank"
              >
                GitHub
              </motion.a>
            </div>
          </section>
        </section>
        <section className="projects-card">
          <section className="img-wrapper">
            <img src={amhMoviesPicture} />
          </section>
          <section className="project-content-wrapper">
            <h1>AMH Movies</h1>
            <p className="description">Personal to-watch list for movies.</p>
            <div className="project-links">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://amh-movies-ajdin-husetovics-projects.vercel.app/movies"
                target="blank"
              >
                Website
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/ajdinhusetovic/amh-movies"
                target="blank"
              >
                GitHub
              </motion.a>
            </div>
          </section>
        </section>
        <section className="projects-card">
          <section className="img-wrapper">
            <img src={gameTagPicture} />
          </section>
          <section className="project-content-wrapper">
            <h1>Game Tag</h1>
            <p className="description">
              Website where you can see the latest and best deals in the gaming
              world
            </p>
            <div className="project-links">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://gametag.netlify.app/"
                target="blank"
              >
                Website
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/ajdinhusetovic/game-tag"
                target="blank"
              >
                GitHub
              </motion.a>
            </div>
          </section>
        </section>
      </article>
    </article>
  );
};
