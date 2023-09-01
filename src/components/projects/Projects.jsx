import React from 'react'
import './projects.scss'
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
            <a href="https://gametag.netlify.app/" target='blank'>View website</a>
            <a href="https://github.com/ajdinhusetovic/game-tag" target='blank'>View GitHub</a>
          </section>
        </section>
        <section className='projects-card'>
          <section className='img-wrapper'>
            <img src={easyCrochetPicture} />
          </section>
          <section className='project-content-wrapper'>
            <p>Easy Crochet</p>
            <a href="https://easycrochet.netlify.app/" target='blank'>View website</a>
            <a href="https://github.com/ajdinhusetovic/easy-crochet" target='blank'>View GitHub</a>
          </section>
        </section>
      </article>
    </article>
  )
}
