import { motion } from "framer-motion";
import { projects } from "../constants";
import { techIcons } from "../constants/tech-icons";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { DarkButtonLink, LightButtonLink } from "../components/ButtonLink";
import { useTranslation } from "react-i18next";
import Title from "../components/Title";

const Projects = () => {
  const { t } = useTranslation();
  const translatedProjects = projects.map((project) => ({
    ...project,
    description: t(project.descriptionKey),
  }));

  return (
    <div className="container mx-auto px-4">
      <Title>{t("projectsTitle")}</Title>

      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          {translatedProjects.slice(0, 3).map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 1, scale: 0.9 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 750,
                    damping: 50,
                  },
                }}
                viewport={{
                  margin: "-40% 0px -30% 0px",
                  once: false,
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-100 rounded-2xl shadow-xl overflow-hidden hover:bg-gray-200 transition-all duration-300"
              >
                <div
                  className={`flex flex-col lg:flex-row ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className="lg:w-1/2 p-8 lg:p-12 space-y-8">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech, i) => {
                        const IconComponent = techIcons[tech]?.icon;
                        return (
                          <span
                            key={i}
                            className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm"
                            style={{ color: techIcons[tech]?.color }}
                          >
                            {IconComponent && (
                              <IconComponent className="text-xl" />
                            )}
                            <span className="text-sm font-medium">{tech}</span>
                          </span>
                        );
                      })}
                    </div>

                    <div className="flex gap-4 mt-6">
                      <DarkButtonLink
                        url={project.url}
                        className="px-6 py-3 justify-center"
                      >
                        <FaExternalLinkAlt /> {t("access")}
                      </DarkButtonLink>
                      <LightButtonLink
                        url={project.repo}
                        className="px-6 py-3 justify-center"
                      >
                        <FaGithub /> Github
                      </LightButtonLink>
                    </div>
                  </div>

                  <div className="hidden lg:block lg:w-1/2 relative aspect-video lg:aspect-auto p-8">
                    <div className="absolute inset-0 w-1/3 z-10" />
                    <img
                      src={project.image}
                      alt={`Snapshot of ${project.title}`}
                      className="w-full h-full object-cover rounded-lg shadow-lg"
                      loading="lazy"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additionals projects */}
        {translatedProjects.length > 3 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-12">
              {projects.slice(3).map((project, index) => (
                <motion.div
                  key={index + 3}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-100 rounded-xl shadow-md overflow-hidden hover:bg-gray-200 transition-all duration-300"
                >
                  <div className="flex flex-col h-full">
                    {/* Imagen en la parte superior */}
                    <div className="w-full h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    {/* Contenido */}
                    <div className="p-6 space-y-4 flex-1">
                      <h3 className="text-xl font-bold text-gray-900">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.tech.map((tech, i) => {
                          const IconComponent = techIcons[tech]?.icon;
                          return (
                            <span
                              key={i}
                              className="flex items-center gap-1 px-2 py-1 bg-white rounded-full shadow-sm text-xs"
                              style={{ color: techIcons[tech]?.color }}
                            >
                              {IconComponent && (
                                <IconComponent className="text-sm" />
                              )}
                              <span>{tech}</span>
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    <div className="px-4 py-2 flex  gap-2 border-t border-gray-200">
                      <DarkButtonLink
                        url={project.url}
                        className="text-sm py-2 px-4 justify-center"
                      >
                        <FaExternalLinkAlt className="text-xs" /> Access
                      </DarkButtonLink>
                      <LightButtonLink
                        url={project.repo}
                        className="text-sm py-2 px-4 justify-center"
                      >
                        <FaGithub className="text-xs" /> Code
                      </LightButtonLink>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Projects;
