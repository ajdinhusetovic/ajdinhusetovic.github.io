import "./app.scss";
import { AboutMe } from "./components/about-me/AboutMe";
import { Contact } from "./components/contact/Contact";
import { Experience } from "./components/experience/Experience";
import { Intro } from "./components/intro/Intro";
import { Navbar } from "./components/navbar/Navbar";
import { Projects } from "./components/projects/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <AboutMe />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
