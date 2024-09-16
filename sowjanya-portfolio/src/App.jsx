import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Home from './pages/Home';
import AboutMe from './pages/Aboutme';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Technologies from './pages/Technologies';
import Resume from './pages/Resume';


function App() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="App">
      <Navbar />
      {/* <header>
        <button onClick={() => setNavOpen(!navOpen)}>Open Nav</button>
      </header> */}
      
        <Home />
        <AboutMe />
        <Contact />
        <Projects />
        <Technologies />
        <Resume />
    </div>
  );
}

export default App;