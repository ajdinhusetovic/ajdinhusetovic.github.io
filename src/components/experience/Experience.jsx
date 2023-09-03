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
                        <li>Designed and developed user-centric login, registration, and dashboard pages for a web application.</li>
                        <li>Ensured a simple and responsive design for accessibility on various devices, in coordination with team members.</li>
                        <li>Supported the overall user experience enhancement efforts as part of a team.</li>
                        <li>Contributed to the user interface's visual appeal and usability.</li>
                    </ul>
                </section>
            </section>
        </article>
    )
}
