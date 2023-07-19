import "./Skills.css";
import imagen1 from "../images/html.png"
import imagen2 from "../images/css-3.png"
import imagen3 from "../images/java-script.png"
import imagen4 from "../images/react.png"
import { useTranslation } from 'react-i18next';

function Skills() {

  const buttonClicked = (e) =>{
    const offset = e.target.dataset.carouselButton === "next" ? 1 : -1
    const slides = e.target.closest("[data-carousel]")
    .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
      let newIndex = [...slides.children].indexOf(activeSlide) + offset
      if (newIndex < 0) newIndex = slides.children.length - 1
      if (newIndex >= slides.children.length) newIndex = 0

      slides.children[newIndex].dataset.active = true
      delete activeSlide.dataset.active
  }

  const [t, i18n] = useTranslation("global");

  return (
    <div className="text-center bg-slate-900 mt-24 lg:rounded-full w-[90vw] lg:w-[50vw] xl:w-[40vw] mx-auto rounded-3xl">
      <h2 className="text-white text-5xl md:text-7xl pt-16 md:mb-8 ">{t("Skills.header")}</h2>
      <section aria-label="Newest Photos">
    <div className="carousel" data-carousel>
      <button onClick={buttonClicked} className="carousel-button prev" data-carousel-button="prev">&#8656;</button>
      <button onClick={buttonClicked} className="carousel-button next" data-carousel-button="next">&#8658;</button>
      <ul data-slides>
        <li className="slide" data-active>
          <img src={imagen1} alt="Nature Image #1" />
          <div className="collapse bg-slate-800 w-[90%] lg:w-[50%] mx-auto">
            <input type="checkbox" /> 
            <div className="collapse-title text-xl font-medium 
            px-0 mx-auto">
              {t("Skills.skill1")}
            </div>
            <div className="collapse-content w-[90%] mx-auto"> 
              <p>{t("Skills.description1")}</p>
            </div>
          </div>
        </li>
        <li className="slide">
          <img src={imagen2} alt="Nature Image #1" />
          <div className="collapse bg-gray-800 w-[80%] lg:w-[50%] mx-auto">
            <input type="checkbox" /> 
            <div className="collapse-title text-xl font-medium px-0 w-[90%] mx-auto">
              {t("Skills.skill2")}
            </div>
            <div className="collapse-content w-[90%] mx-auto"> 
              <p>{t("Skills.description2")}</p>
            </div>
          </div>
        </li>
        <li className="slide">
          <img src={imagen3} alt="Nature Image #1" />
          <div className="collapse bg-gray-800 w-[80%] lg:w-[50%] mx-auto">
            <input type="checkbox" /> 
            <div className="collapse-title text-xl font-medium px-0 w-[90%] mx-auto">
              {t("Skills.skill3")}
            </div>
            <div className="collapse-content"> 
              <p>{t("Skills.description3")}</p>
            </div>
          </div>
        </li>
        <li className="slide">
          <img src={imagen4} alt="Nature Image #1" />
          <div className="collapse bg-gray-800 w-[80%] lg:w-[50%] mx-auto">
            <input type="checkbox" /> 
            <div className="collapse-title text-xl font-medium px-0 w-[90%] mx-auto">
              {t("Skills.skill4")} 
            </div>
            <div className="collapse-content"> 
              <p>{t("Skills.description4")}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
    </div>
  );
}

export default Skills;
