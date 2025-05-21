// src/App.jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./App.css";
import Services from "./components/Services";
import FeaturedCars from "./components/FeaturedCars";
import Footer from "./components/Footer";

function App() {
  return (
    <>
        <div className="background-wrapper">
      <Navbar />
      <Hero />
    </div>
    <Services/>
    <FeaturedCars/>
    <Footer/>
    </>

  );
}

export default App;
