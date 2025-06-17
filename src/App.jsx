import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import "../i18n.js";
import Header from "./sections/Header";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Skills from "./sections/Skills";

const App = () => {
  const { t } = useTranslation();

  const [activeSection, setActiveSection] = useState("home");

  const [homeRef, homeInView] = useInView({ threshold: 0.3 });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.2 });
  const [experienceRef, experienceInView] = useInView({ threshold: 0.3 });
  const [skillsRef, skillsInView] = useInView({ threshold: 0.3 });
  const [contactRef, contactInView] = useInView({ threshold: 0.4 });

  const navLinks = [
    { name: t("home"), target: "home" },
    { name: t("projects"), target: "projects" },
    { name: t("experience"), target: "experience" },
    { name: t("skills"), target: "skills" },
    { name: t("contact"), target: "contact" },
  ];

  useEffect(() => {
    if (contactInView) setActiveSection("contact");
    else if (skillsInView) setActiveSection("skills");
    else if (experienceInView) setActiveSection("experience");
    else if (projectsInView) setActiveSection("projects");
    else if (homeInView) setActiveSection("home");
  }, [
    homeInView,
    projectsInView,
    experienceInView,
    skillsInView,
    contactInView,
  ]);

  return (
    <div className="min-h-screen relative">
      <nav
        className="fixed top-0 left-1/2 h-[4.5rem] w-full z-10 rounded-none border border-white border-opacity-40 bg-gray-200/70 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full "
        style={{
          opacity: "1",
          transform: "translateX(-50%) translateY(0px) translateZ(0px)",
        }}
      >
        <ul className="flex justify-around h-full items-center text-gray-600 text-base relative">
          {navLinks.map((link, index) => (
            <motion.li
              key={index}
              className="relative h-3/4 flex items-center justify-center px-3"
            >
              <Link
                to={link.target}
                smooth={true}
                duration={500}
                className={`hover:text-gray-950 transition-colors cursor-pointer z-20 ${
                  activeSection === link.target ? "text-white" : ""
                }`}
                onClick={() => setActiveSection(link.target)}
              >
                {link.name}
              </Link>
              {activeSection === link.target && (
                <motion.span
                  layoutId="activeTab"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="absolute inset-0 bg-gray-400 rounded-full z-10" // Fondo del elemento activo
                ></motion.span>
              )}
            </motion.li>
          ))}
        </ul>
      </nav>

      <main className="">
        <section id="home" ref={homeRef}>
          <Header />
        </section>
        <section id="projects" ref={projectsRef} className="py-20 bg-white ">
          <Projects />
        </section>
        <section
          id="experience"
          ref={experienceRef}
          className="py-20 bg-gray-50"
        >
          <Experience />
        </section>
        <section id="skills" ref={skillsRef} className="py-20 bg-white">
          <Skills />
        </section>
        <section
          id="contact"
          ref={contactRef}
          className="py-20 bg-gray-50 mb-12"
        >
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default App;
