import './app.scss'
import { About } from './components/about/About'
import { Navbar } from './components/navbar/Navbar'
import { Projects } from './components/projects/Projects'
import Headroom from 'react-headroom'

function App() {

  return (
    <>
      <Headroom>
        <Navbar />
      </Headroom>
      <About />
      <Projects />
    </>
  )
}

export default App
