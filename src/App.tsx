import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ResumeButton from "./components/ResumeButton";

function App() {
  return (
    <div className="bg-green-bg min-h-screen font-spaceGrotesk py-4">
      <div className="w-11/12 xl:w-[80%] m-auto">
        <div className="flex justify-center">
          <Navbar />
        </div>
        <Main />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <ResumeButton />
      </div>
    </div>
  );
}

export default App;
