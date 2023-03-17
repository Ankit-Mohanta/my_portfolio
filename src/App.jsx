import './App.scss'
import About from './Components/About/About'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Experience from './Components/Experience/Experience'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'

function App() {

  return (
    <div className='App'>
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="header">
        <Header/>
      </div>
      <div className="about">
        <About/>
      </div>
      <div className="experience">
        <Experience/>
      </div>
      <div className="projects">
        <Projects/>
      </div>
      {/* <div className="contact">
        <Contact/>
      </div> */}
    </div>
  )
}

export default App
