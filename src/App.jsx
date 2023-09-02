import './app.scss'
import { Contact } from './components/contact/Contact'
import { Experience } from './components/experience/Experience'
import { Intro } from './components/intro/Intro'
import { Navbar } from './components/navbar/Navbar'
import { Projects } from './components/projects/Projects'
import { Skills } from './components/skills/Skills'
import Headroom from 'react-headroom'

function App() {

  return (
    <>
      <Navbar />
      <div className='components-wrapper'>
        <Intro />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default App
