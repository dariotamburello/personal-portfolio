// src/sections/Experience.jsx
import { motion } from "framer-motion";
import { experiences } from "../constants";
import Title from "../components/Title";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();
  const translatedExperiencie = experiences.map((experience) => ({
    ...experience,
    title: t(experience.titleKey),
    description: t(experience.descriptionKey),
  }));

  return (
    <div className="container mx-auto px-4">
      <Title>{t("projectsTitle")}</Title>

      <div className="relative max-w-4xl mx-auto">
        {/* Línea central vertical */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform -translate-x-1/2"></div>

        {translatedExperiencie.map((exp, index) => {
          const isEven = index % 2 === 0;
          const isLast = index === experiences.length - 1;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative mb-12 ${isLast ? "mb-0" : ""}`}
            >
              {/* Punto en la línea */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-white "></div>

              <div
                className={`flex ${
                  isEven ? "flex-row" : "flex-row-reverse"
                } items-start`}
              >
                <div
                  className={`w-full md:w-1/2 p-6 bg-white rounded-lg shadow-md ${
                    isEven ? "md:pr-8 text-right" : "md:pl-8"
                  }`}
                >
                  <h3 className="text-xl font-bold text-gray-900">
                    {exp.title}
                  </h3>
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">
                    {exp.company}
                  </h4>
                  <p className="text-gray-600 mb-4">{exp.description}</p>
                </div>

                {/* Fecha (derecha para pares, izquierda para impares) */}
                <div
                  className={`hidden md:block w-1/2 p-6 ${
                    isEven ? "md:pl-8 text-left" : "md:pr-8 text-right"
                  }`}
                >
                  <p className="text-lg font-semibold text-gray-900">
                    {exp.date}
                  </p>
                  <a
                    href={exp.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-blue-500 hover:text-blue-700 font-medium"
                  >
                    {t("visitWebsite")}
                  </a>
                </div>
              </div>

              {/* Fecha para móvil (debajo del contenido) */}
              <div className="md:hidden mt-4 text-center">
                <p className="text-lg font-semibold text-gray-900">
                  {exp.date}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
