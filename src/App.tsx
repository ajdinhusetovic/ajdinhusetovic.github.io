import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-white h-screen font-spaceGrotesk">
      <div className="w-11/12 xl:w-[80%] m-auto">
        <div className="flex justify-center">
          <Navbar />
        </div>
      </div>
    </div>
  );
}

export default App;
