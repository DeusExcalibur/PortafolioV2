import './App.scss'
import NavBar from './components/NavBar'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

import { useTranslation } from 'react-i18next';

function App() {

  useEffect(() => {
    AOS.init({duration: 1000});

  }, []);

  const [t, i18n] = useTranslation("global");

  return (
    <>
      <a name="Inicio"></a>
      <p>{t("header.message")}</p>
      <button onClick={()=> i18n.changeLanguage("es")}>ES</button>
      <button onClick={()=> i18n.changeLanguage("en")}>EN</button>
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

      <div data-aos="fade-down">
        <Footer />
      </div>
      <a name="Contactame"></a>

    </>
  )
}

export default App
