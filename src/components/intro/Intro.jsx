import React from 'react'
import './intro.scss'
import mypic from '../../assets/picture.jpeg'

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
                    <p>Hello! I'm Ajdin Husetović, a passionate front-end developer on a journey to becoming a well-rounded full-stack developer. I enjoy designing user-friendly websites and aspire to blend great visuals with strong functionality. My aim is to create digital solutions that truly connect with users.</p>
                </section>
                <button className='resume-btn'>Download Resume</button>
            </article>
        </article>
    )
}
