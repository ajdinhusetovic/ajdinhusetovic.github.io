import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiOutlineMail, AiOutlineTwitter } from 'react-icons/ai'
import './contact.scss'

export const Contact = () => {
  return (
    <article id='contact' className='contact-wrapper'>
      <section className='contact-title-wrapper'>
        <h1>Contact</h1>
      </section>
      <section className='links-wrapper'>
        <a href="https://github.com/ajdinhusetovic"><AiFillGithub /></a>
        <a href="https://www.linkedin.com/in/ajdinhusetovic/"><AiFillLinkedin /></a>
        <a href="mailto:ahusetovic1@gmail.com"><AiOutlineMail /></a>
        <a href="https://twitter.com/ajdin_husetovic"><AiOutlineTwitter /></a>
      </section>
    </article>
  )
}
