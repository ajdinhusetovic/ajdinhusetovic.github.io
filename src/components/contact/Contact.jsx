import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMail,
  AiOutlineTwitter,
} from "react-icons/ai";
import { motion } from "framer-motion";
import "./contact.scss";

export const Contact = () => {
  return (
    <article id="contact" className="contact-wrapper">
      <section className="contact-title-wrapper">
        <h1>Contact</h1>
      </section>
      <section className="links-wrapper">
        <div>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/ajdinhusetovic"
            target="_blank"
          >
            <AiFillGithub size={30} />
          </motion.a>
          <p>GitHub</p>
        </div>
        <div>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/in/ajdinhusetovic/"
            target="_blank"
          >
            <AiFillLinkedin size={30} />
          </motion.a>
          <p>LinkedIn</p>
        </div>
        <div>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:ahusetovic1@gmail.com"
          >
            <AiOutlineMail size={30} />
          </motion.a>
          <p>E-Mail</p>
        </div>
        <div>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="https://twitter.com/ajdin_husetovic"
            target="_blank"
          >
            <AiOutlineTwitter size={30} />
          </motion.a>
          <p>X</p>
        </div>
      </section>
    </article>
  );
};
