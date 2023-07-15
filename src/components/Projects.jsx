import ProjectsSecondary from "./ProjectsSecondary";

function Projects() {

  const variables = [
    {
      titulo: "Advice Generator",
      imagen: "https://i.postimg.cc/9M8RwsKP/Proyecto1.png",
      descripcion: "Mi primer proyecto con Tailwind y uso sin ninguna guia de APIs",
      linkGithub: "https://github.com/DeusExcalibur/AdviceGenerator",
      linkPagina: "https://deusexcalibur.github.io/AdviceGenerator/"
    },
    {
      titulo: "Diccionario Ingles",
      imagen: "https://i.postimg.cc/zfMbPX0Z/Proyecto6.png",
      descripcion: "Diccionario simple de ingles con React",
      linkGithub: "https://github.com/DeusExcalibur/English-Dictionary",
      linkPagina: "https://deusexcalibur.github.io/English-Dictionary/"
    },
    {
      titulo: "Dice Game",
      imagen: "https://i.postimg.cc/Jzgv0bxP/Proyecto2.png",
      descripcion: "1ra practica de DOM Manipulation con JS",
      linkGithub: "https://github.com/DeusExcalibur/DiceGame",
      linkPagina: "https://deusexcalibur.github.io/DiceGame/"
    },
    {
      titulo: "Simon Game",
      imagen: "https://i.postimg.cc/9f7S7rNV/Proyecto3.png",
      descripcion: "Juego de seguir una secuencia de colores",
      linkGithub: "https://github.com/DeusExcalibur/SimonGame",
      linkPagina: "https://deusexcalibur.github.io/SimonGame/"
    },
    {
      titulo: "Age Calculator",
      imagen: "https://i.postimg.cc/vZDCGPr4/Proyecto4.png",
      descripcion: "Página para calcular tu edad exacta",
      linkGithub: "https://github.com/DeusExcalibur/AgeCalculator",
      linkPagina: "https://deusexcalibur.github.io/AgeCalculator/"
    },
    {
      titulo: "Página web Responsive",
      imagen: "https://i.postimg.cc/LXFWB2rP/Proyecto5.png",
      descripcion: "Esta página fue mi 1ra practica de CSS Responsive Vanilla",
      linkGithub: "https://github.com/DeusExcalibur/1st-responsive",
      linkPagina: "https://deusexcalibur.github.io/1st-responsive/"
    },
  ] 

  return (
    <div className="pb-12">
      <h2 className="text-black text-center text-7xl mt-8 mb-8">Proyectos</h2>
      <p className="text-black text-center mb-4">Clickea la imagen para ver el repositorio</p>
      <div className="flex basis-1/4 flex-wrap gap-4 justify-around">
          {variables.map((values)=>{
            return (
              <div key={values.titulo}
              className="bg-black basis-[90vw] md:basis-[45vw] xl:basis-[30vw] text-center rounded-3xl">
                <ProjectsSecondary	
                  imagen={values.imagen}
                  descripcion={values.descripcion}
                  linkGithub={values.linkGithub}
                  linkPagina={values.linkPagina}
                />
              </div>
            )
          })}
      </div>
    </div>
  );
}

export default Projects;
