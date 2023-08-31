import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'
import './navbar.scss'

export const Navbar = () => {
  return (
    <header>
      <img src={logo} alt="logo" />
      <nav>
        <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} >
          About
        </Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500} >
          Skills
        </Link>
        <Link activeClass="active" to="projects" spy={true} smooth={true} offset={50} duration={500} >
          Projects
        </Link>
        <Link activeClass="contact" to="projects" spy={true} smooth={true} offset={50} duration={500} >
          Contact
        </Link>
      </nav>
    </header>
  )
}
