import React from 'react'
import './intro.scss'
import mypic from '../../assets/picture.jpeg'
import resume from '../../assets/AjdinHusetovic.pdf'
import { motion } from 'framer-motion'

export const Intro = () => {
    return (
        <article className='intro-wrapper' id='intro'>
            <section className='img-wrapper'>
                <img src={mypic} alt="" />
            </section>
            <article className='short-about-me-wrapper'>
                <section className='full-name'>
                    <h1>Ajdin Husetović</h1>
                </section>
                <section className='short-about-me'>
                    <p>Hello! I'm Ajdin Husetović, a passionate front-end developer on a journey to becoming a well-rounded full-stack developer. I enjoy designing user-friendly websites and aspire to blend great visuals with strong functionality. My aim is to create digital solutions that truly connect with users.I love learning and taking on new challenges. I'm excited to grow my skills and always curious to find opportunities that let me learn and contribute to cool projects.</p>
                </section>
                <motion.a href={resume} download="AjdinHusetovic.pdf" target='_blank' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className='resume-btn'>Download Resume</motion.a>
            </article>
        </article>
    )
}
