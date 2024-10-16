import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="bg-white min-h-screen font-spaceGrotesk">
      <div className="w-11/12 xl:w-[80%] m-auto">
        <div className="flex justify-center">
          <Navbar />
        </div>
        <Main />
        <Experience />
        <Projects />
        <Skills />
      </div>
    </div>
  );
}

export default App;
