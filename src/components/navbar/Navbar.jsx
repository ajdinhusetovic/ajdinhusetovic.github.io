import { motion } from "framer-motion";
import logo from "../../assets/ah_logo.png";
import { Link } from "react-scroll";
import "./navbar.scss";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import resume from "../../assets/AjdinHusetovic.pdf";

export const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <img src={logo} alt="logo" />
      <nav ref={navRef}>
        <Link
          activeClass="active"
          to="about-me"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          About Me
        </Link>
        <Link
          activeClass="active"
          to="experience"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Experience
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Projects
        </Link>
        <Link
          activeClass="contact"
          to="contact"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Contact
        </Link>
        <motion.a
          href={resume}
          download="AjdinHusetovic.pdf"
          target="_blank"
          className="resume-btn"
        >
          Download Resume
        </motion.a>
        <motion.button
          className="nav-btn nav-close-btn"
          onClick={showNavbar}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaTimes />
        </motion.button>
      </nav>
      <motion.button
        className="nav-btn"
        onClick={showNavbar}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaBars />
      </motion.button>
    </header>
  );
};
