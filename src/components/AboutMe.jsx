import Yo from "../images/yo.jpg";
import { useTranslation } from 'react-i18next';

function AboutMe() {

  const [t, i18n] = useTranslation("global");

  return (
    <div className="w-[90%] mx-auto mt-16 text-center bg-gray-800 rounded-2xl p-8 text-white shadow-lg shadow-gray-900">
      <h2 className="pt-8 mb-8 text-6xl md:text-7xl">{t("aboutMe.header")}</h2>
      <img className="rounded-full mx-auto w-32" src={Yo} alt="XD" />
      <p className="mt-8 mb-16 text-4xl md:text-6xl md:w-[50vw] md:mx-auto">{t("aboutMe.description")}</p>
    </div>
  )
}

export default AboutMe