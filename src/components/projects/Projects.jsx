import React from 'react'
import './projects.scss'
import { motion } from 'framer-motion'
import gameTagPicture from '../../assets/game-tag.png'
import easyCrochetPicture from '../../assets/easy-crochet.png'

export const Projects = () => {
  return (
    <article id='projects' className='projects-wrapper'>
      <section className='projects-title'>
        <h1>Projects</h1>
      </section>
      <article className='projects-cards-wrapper'>
        <section className='projects-card'>
          <section className='img-wrapper'>
            <img src={gameTagPicture} />
          </section>
          <section className='project-content-wrapper'>
            <p>Game Tag</p>
            <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} href="https://gametag.netlify.app/" target='blank'>View website</motion.a>
            <motion.a whileHover={{scale: 1.1}} whileTap={{scale: 0.95}} href="https://github.com/ajdinhusetovic/game-tag" target='blank'>View GitHub</motion.a>
          </section>
        </section>
        <section className='projects-card'>
          <section className='img-wrapper'>
            <img src={easyCrochetPicture} />
          </section>
          <section className='project-content-wrapper'>
            <p>Easy Crochet</p>
            <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} href="https://easycrochet.netlify.app/" target='blank'>View website</motion.a>
            <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} href="https://github.com/ajdinhusetovic/easy-crochet" target='blank'>View GitHub</motion.a>
          </section>
        </section>
      </article>
    </article>
  )
}
