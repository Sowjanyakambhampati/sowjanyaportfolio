import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar';

function App() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="App">
      <Navbar />
      <header>
        <button onClick={() => setNavOpen(!navOpen)}>Open Nav</button>
      </header>
    </div>
  );
}

export default App;