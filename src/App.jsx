import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

import "../i18n.js";
import Header from "./sections/Header";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Skills from "./sections/Skills";
import MainMenu from "./components/MainMenu.jsx";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  const [homeRef, homeInView] = useInView({ threshold: 0.3 });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.2 });
  const [experienceRef, experienceInView] = useInView({ threshold: 0.3 });
  const [skillsRef, skillsInView] = useInView({ threshold: 0.3 });
  const [contactRef, contactInView] = useInView({ threshold: 0.4 });

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
      <MainMenu
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <main>
        <section id="home" ref={homeRef}>
          <Header />
        </section>
        <section id="projects" ref={projectsRef} className="py-20 bg-white">
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
