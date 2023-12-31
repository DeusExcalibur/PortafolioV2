import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Yo from "../images/yo.jpg";

import { useTranslation } from 'react-i18next';

export default function Example() {
  const [t, i18n] = useTranslation("global");

  const navigation = [
    { name: `${t("NavBar.title1")}`, href: "#Inicio", current: true },
    { name: `${t("NavBar.title2")}`, href: "#Habilidades", current: false },
    { name: `${t("NavBar.title3")}`, href: "#Proyectos", current: false },
    { name: `${t("NavBar.title4")}`, href: "#Contactame", current: false },
  ];
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <div className="min-h-full w-[90vw] mx-auto mt-4 sticky top-2 z-10">
        <Disclosure
          as="nav"
          className="bg-gray-800 lg:rounded-full rounded-3xl shadow-lg shadow-gray-500"
        >
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between md:justify-around">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8 rounded-full"
                        src={Yo}
                        alt="Your Company"
                      />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="
                            text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium "
                          >
                            {item.name}
                          </a>
                        ))}

                        <div className="dropdown">
                          <label
                            tabIndex={0}
                            className="cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium"
                          >
                            {t("NavBar.title5")}
                          </label>
                          <ul
                            tabIndex={0}
                            className="dropdown-content z-[1] menu p-2 shadow bg-gray-800 rounded-box w-52 mt-2"
                          >
                            <li>
                              <button onClick={()=> i18n.changeLanguage("es")}>{t("NavBar.options1.language1")}</button>
                            </li>
                            <li>
                            <button onClick={()=> i18n.changeLanguage("en")}>{t("NavBar.options1.language2")}</button>

                            </li>
                          </ul>
                        </div>

                        {/* <div className="dropdown">
                          <label
                            tabIndex={0}
                            className="cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium"
                          >
                            {t("NavBar.title6")}
                          </label>
                          <ul
                            tabIndex={0}
                            className="dropdown-content z-[1] menu p-2 shadow bg-gray-800 rounded-box w-52 mt-2"
                          >
                            <li>
                              <a>{t("NavBar.options2.color1")}</a>
                            </li>
                            <li>
                              <a>{t("NavBar.options2.color2")}</a>
                            </li>
                          </ul>
                        </div> */}
                      </div>
                    </div>
                  </div>

                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>

                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                    <div className="dropdown">
                      <label
                        tabIndex={0}
                        className="cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                      >
                        Idioma
                      </label>
                      <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-2"
                      >
                        <li>
                          <button onClick={()=> i18n.changeLanguage("en")}>Ingles</button>
                        </li>
                        <li>
                          <button onClick={()=> i18n.changeLanguage("es")}>Español</button>
                        </li>
                      </ul>
                      <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-2"
                      >          
                      </ul>
                    </div>
                  </div>
                  {/* <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                    <div className="dropdown">
                      <label
                        tabIndex={0}
                        className="cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                      >
                        Color
                      </label>
                      <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-2"
                      >
                        <li>
                          <button>Claro</button>
                        </li>
                        <li>
                          <button>Oscuro</button>
                        </li>
                      </ul>
                      <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-2"
                      >          
                      </ul>
                    </div>
                  </div> */}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
}
