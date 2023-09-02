import React from 'react'
import './experience.scss'

export const Experience = () => {
    return (
        <article id='experience' className='experience-wrapper'>
            <section className='experience-title-wrapper'>
                <h1>Experience</h1>
            </section>
            <section className='experience-cards-wrapper'>
                <section className='experience-card'>
                    <p className='role-title'>Front-End Developer</p>
                    <p className='role-date'>Jan 2023 - Feb 2023</p>
                    <ul>
                        <li>blah blah</li>
                        <li>blah blah</li>
                        <li>blah blah</li>
                        <li>blah blah</li>
                    </ul>
                </section>
            </section>
        </article>
    )
}
