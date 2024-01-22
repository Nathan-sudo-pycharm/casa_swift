import "./App.css";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Osheen from "./components/Osheen";

function App() {
  return (
    <div>
      <div className="px-50 ">
        <NavBar />
        <Hero />
        <Osheen />
      </div>
    </div>
  );
}

export default App;
