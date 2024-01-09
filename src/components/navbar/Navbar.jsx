import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'
import './navbar.scss'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useRef } from 'react'

export const Navbar = () => {

  const navRef = useRef()

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }

  return (
    <header>
      <img src={logo} alt="logo" />
      <nav ref={navRef}>
        <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} >
          About
        </Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500} >
          Skills
        </Link>
        <Link activeClass="active" to="experience" spy={true} smooth={true} offset={-100} duration={500} >
          Experience
        </Link>
        <Link activeClass="active" to="projects" spy={true} smooth={true} offset={50} duration={500} >
          Projects
        </Link>
        <Link activeClass="contact" to="contact" spy={true} smooth={true} offset={50} duration={500} >
          Contact
        </Link>
        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className='nav-btn' onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  )
}
