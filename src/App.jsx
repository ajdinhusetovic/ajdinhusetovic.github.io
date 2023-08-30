import './app.scss'
import { Contact } from './components/contact/Contact'
import { Intro } from './components/intro/Intro'
import { Navbar } from './components/navbar/Navbar'
import { Projects } from './components/projects/Projects'
import Headroom from 'react-headroom'

function App() {

  return (
    <>
      <Headroom>
        <Navbar />
      </Headroom>
      <div className='components-wrapper'>
        <Intro />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default App
