import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="bg-white min-h-screen font-spaceGrotesk">
      <div className="w-11/12 xl:w-[80%] m-auto">
        <div className="flex justify-center">
          <Navbar />
        </div>
        <Main />
        <Experience />
      </div>
    </div>
  );
}

export default App;
