import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'
import './navbar.scss'

export const Navbar = () => {
  return (
    <header>
      <img src={logo} alt="logo" />
      <nav>
        <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} >
          About
        </Link>
        <Link activeClass="active" to="projects" spy={true} smooth={true} offset={50} duration={500} >
          Projects
        </Link>
      </nav>
    </header>
  )
}
