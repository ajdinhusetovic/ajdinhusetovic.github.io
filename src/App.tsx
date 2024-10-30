import Main from "./components/Main";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ResumeButton from "./components/ResumeButton";

function App() {
  return (
    <div className="bg-green-bg min-h-screen font-spaceGrotesk py-4 flex justify-center items-center app">
      <div className="w-11/12 md:w-10/12 lg:w-10/12 xl:w-11/12 h-full flex flex-col xl:flex-row xl:justify-between">
        <div className="xl:relative xl:flex-shrink-0 xl:w-1/3">
          <Main />
        </div>
        <div className="flex flex-col items-center justify-center xl:w-2/3 h-full overflow-y-auto">
          <Experience />
          <Projects />
          <Skills />
          <Contact />
          <ResumeButton />
        </div>
      </div>
    </div>
  );
}

export default App;
