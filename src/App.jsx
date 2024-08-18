import Navbar from "./components/elements/Navbar";
import './App.css';  // Import your CSS file

function App() {
  return (
    <>
      <Navbar />
      <div className="relative">
        <img src="src/assets/Desain tanpa judul.png" alt="" className="w-full" />
        <h1 className="absolute top-[45%] left-[60%] translate-x-[-50%] translate-y-[-50%] text-5xl font-bold">
          Explore Culinary <h1 className="text-orange-300 mt-3 italic">Delights.</h1> 
        </h1>
      </div>
    </>
  );
}

export default App;
