import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiOutlineMail, AiOutlineTwitter } from 'react-icons/ai'
import { motion } from 'framer-motion'
import './contact.scss'

export const Contact = () => {
  return (
    <article id='contact' className='contact-wrapper'>
      <section className='contact-title-wrapper'>
        <h1>Contact</h1>
      </section>
      <section className='links-wrapper'>
        <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} href="https://github.com/ajdinhusetovic"><AiFillGithub /></motion.a>
        <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} href="https://www.linkedin.com/in/ajdinhusetovic/"><AiFillLinkedin /></motion.a>
        <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} href="mailto:ahusetovic1@gmail.com"><AiOutlineMail /></motion.a>
        <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} href="https://twitter.com/ajdin_husetovic"><AiOutlineTwitter /></motion.a>
      </section>
    </article>
  )
}
