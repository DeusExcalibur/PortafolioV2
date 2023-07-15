import Yo from "../images/yo.jpg";

function AboutMe() {
  return (
    <div className="w-[90%] mx-auto mt-16 text-center text-zinc-950">
      <h2 className="pt-8 mb-8 text-6xl md:text-7xl">Sobre Mi</h2>
      <img className="rounded-full mx-auto w-32" src={Yo} alt="XD" />
      <p className="mt-8 mb-16 text-4xl md:text-6xl md:w-[50vw] md:mx-auto">Desarrollador Front-End independiente</p>
    </div>
  )
}

export default AboutMe