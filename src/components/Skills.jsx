import "./Skills.css";
import imagen1 from "../images/html.png"
import imagen2 from "../images/css-3.png"
import imagen3 from "../images/java-script.png"
import imagen4 from "../images/react.png"

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

  return (
    <div className="text-center">
      <h2 className="text-black text-5xl md:text-7xl pt-16 md:mb-8 ">Habilidades</h2>
      <section aria-label="Newest Photos">
    <div className="carousel lg:w-[50%]" data-carousel>
      <button onClick={buttonClicked} className="carousel-button prev" data-carousel-button="prev">&#8656;</button>
      <button onClick={buttonClicked} className="carousel-button next" data-carousel-button="next">&#8658;</button>
      <ul data-slides>
        <li className="slide" data-active>
          <img src={imagen1} alt="Nature Image #1" />
          <div className="collapse bg-base-200 w-[80%] lg:w-[50%] mx-auto">
            <input type="checkbox" /> 
            <div className="collapse-title text-xl font-medium 
            px-0 w-[90%] mx-auto">
              Show/Hide
            </div>
            <div className="collapse-content w-[90%] mx-auto"> 
              <p>HTML5</p>
            </div>
          </div>
        </li>
        <li className="slide">
          <img src={imagen2} alt="Nature Image #1" />
          <div className="collapse bg-base-200">
            <input type="checkbox" /> 
            <div className="collapse-title text-xl font-medium">
              Show/Hide
            </div>
            <div className="collapse-content"> 
              <p>CSS, SASS, Bootstrap/React-Bootstrap, Tailwind, DaisyUI, entre otros frameworks y preprocesadores</p>
            </div>
          </div>
        </li>
        <li className="slide">
          <img src={imagen3} alt="Nature Image #1" />
          <div className="collapse bg-base-200">
            <input type="checkbox" /> 
            <div className="collapse-title text-xl font-medium">
              Show/Hide
            </div>
            <div className="collapse-content"> 
              <p>Javascript, JQuery, JSX</p>
            </div>
          </div>
        </li>
        <li className="slide">
          <img src={imagen4} alt="Nature Image #1" />
          <div className="collapse bg-base-200">
            <input type="checkbox" /> 
            <div className="collapse-title text-xl font-medium">
              Show/Hide
            </div>
            <div className="collapse-content"> 
              <p>React, React-Router, Hooks, etc</p>
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
