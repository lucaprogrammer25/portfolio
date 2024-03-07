import { Route, Routes } from "react-router-dom";
import ParticlesBackground from "./component/ParticlesBackground";
import Contact from "./home-component/Contact";
import Hero from "./home-component/Hero";
import Navbar from "./home-component/Navbar";
import Project from "./home-component/Project";
import DefaultDisplay from "./layout/DefaultDisplay";

function App() {
  return (
    <div className="app">
      <ParticlesBackground id="particles-background" />
      <Routes>
        <Route path="/" element={<DefaultDisplay />}>
          <Route path ="" element={<Hero/>} />
          <Route path ="contact" element={<Contact/>} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;
