import "./App.css";
import BestSellers from "./Components/BestSellers/BestSellers";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import NewLett from "./Components/NewsLett/NewLett";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <BestSellers />
      <NewLett />
      <Footer />
    </div>
  );
}

export default App;
