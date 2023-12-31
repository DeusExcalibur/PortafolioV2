import './App.scss'
import NavBar from './components/NavBar'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    AOS.init({duration: 1000});

  }, []);

  return (
    <>
      <a name="Inicio"></a>
      <NavBar/>
      <div data-aos="zoom-in-down">
        <AboutMe />
      </div>


      <a name="Habilidades"></a>

      <div data-aos="zoom-in-right"
      data-aos-anchor-placement="top-center"
      data-aos-duration="500">
        <Skills />
      </div>

      <a name="Proyectos"></a>

      <Projects />

      <div data-aos="fade-down"
      data-aos-anchor-placement="center-bottom">
        <Footer />
      </div>
      <a name="Contactame"></a>

    </>
  )
}

export default App
