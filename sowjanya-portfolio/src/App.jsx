import './App.css'
import Navbar from './components/navbar'
import Home from './pages/Home'
import Aboutme from './pages/Aboutme'
import Technologies from './pages/Technologies'
import Projects from './pages/projects'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App() {
 
  return (
    <>
      <Navbar/>
      <Home/>
      <Aboutme/>
      <Technologies/>
      <Projects/>
      <Contact/>
      <Footer/>
    

    </>
  )
}

export default App