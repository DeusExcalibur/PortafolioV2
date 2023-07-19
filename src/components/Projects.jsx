import ProjectsSecondary from "./ProjectsSecondary";
import { useTranslation } from 'react-i18next';

function Projects() {

  const [t, i18n] = useTranslation("global");

  const variables = [
    {
      titulo: `${t("Projects.proyecto1.title")}`,
      imagen: "https://i.postimg.cc/9M8RwsKP/Proyecto1.png",
      descripcion: `${t("Projects.proyecto1.description")}`,
      linkGithub: "https://github.com/DeusExcalibur/AdviceGenerator",
      linkPagina: "https://deusexcalibur.github.io/AdviceGenerator/"
    },
    {
      titulo: `${t("Projects.proyecto2.title")}`,
      imagen: "https://i.postimg.cc/zfMbPX0Z/Proyecto6.png",
      descripcion: `${t("Projects.proyecto2.description")}`,
      linkGithub: "https://github.com/DeusExcalibur/English-Dictionary",
      linkPagina: "https://deusexcalibur.github.io/English-Dictionary/"
    },
    {
      titulo: `${t("Projects.proyecto3.title")}`,
      imagen: "https://i.postimg.cc/Jzgv0bxP/Proyecto2.png",
      descripcion: `${t("Projects.proyecto3.description")}`,
      linkGithub: "https://github.com/DeusExcalibur/DiceGame",
      linkPagina: "https://deusexcalibur.github.io/DiceGame/"
    },
    {
      titulo: `${t("Projects.proyecto4.title")}`,
      imagen: "https://i.postimg.cc/9f7S7rNV/Proyecto3.png",
      descripcion: `${t("Projects.proyecto4.description")}`,
      linkGithub: "https://github.com/DeusExcalibur/SimonGame",
      linkPagina: "https://deusexcalibur.github.io/SimonGame/"
    },
    {
      titulo: `${t("Projects.proyecto5.title")}`,
      imagen: "https://i.postimg.cc/vZDCGPr4/Proyecto4.png",
      descripcion: `${t("Projects.proyecto5.description")}`,
      linkGithub: "https://github.com/DeusExcalibur/AgeCalculator",
      linkPagina: "https://deusexcalibur.github.io/AgeCalculator/"
    },
    {
      titulo: `${t("Projects.proyecto6.title")}`,
      imagen: "https://i.postimg.cc/LXFWB2rP/Proyecto5.png",
      descripcion: `${t("Projects.proyecto6.description")}`,
      linkGithub: "https://github.com/DeusExcalibur/1st-responsive",
      linkPagina: "https://deusexcalibur.github.io/1st-responsive/"
    },
  ] 

  return (
    <div className="pb-12">
      <h2 className="text-black text-center text-7xl mt-8 mb-8">{t("Projects.header")}</h2>
      <p className="text-black text-center mb-4">{t("Projects.description")}</p>
      <div className="flex basis-1/4 flex-wrap gap-4 justify-around">
          {variables.map((values)=>{
            return (
              <div key={values.titulo}
              className="bg-black basis-[90vw] md:basis-[45vw] xl:basis-[30vw] text-center rounded-3xl">
                <ProjectsSecondary	
                  titulo={values.titulo}
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
