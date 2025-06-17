/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */
import { experiences } from "../constants";
import Title from "../components/Title";
import { useTranslation } from "react-i18next";
import {
  BriefcaseIcon,
  CalendarIcon,
  LinkIcon,
} from "../constants/ExperienceIcons";

const Experience = () => {
  const { t } = useTranslation();
  const translatedExperiencie = experiences.map((experience) => ({
    ...experience,
    title: t(experience.titleKey),
    description: t(experience.descriptionKey),
  }));

  return (
    <div className="container mx-auto px-4 md:py-12">
      <Title>{t("projectsTitle")}</Title>

      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200"></div>

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
              {/* Desktop version (hidden in mobile)  */}
              <div
                className={`hidden md:flex ${
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

              {/* Mobile version */}
              <div className="flex flex-col md:flex-row items-start md:hidden">
                <div className="hidden md:block absolute left-5 md:left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-4 h-4 rounded-full bg-blue-500 border-2 border-white"></div>
                </div>

                <div
                  className={`w-full ${
                    isEven ? "md:w-1/2 md:pr-8" : "md:w-1/2 md:pl-8"
                  } md:text-right`}
                >
                  <div className="bg-white p-6 rounded-lg shadow-md relative pl-10 md:pl-6 border-l-4 border-blue-200">
                    <div className="absolute left-2 top-6 md:hidden">
                      <BriefcaseIcon />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900">
                      {exp.title}
                    </h3>
                    <h4 className="text-lg font-semibold text-gray-700 mb-2">
                      {exp.company}
                    </h4>
                    <p className="text-gray-600 mb-4">{exp.description}</p>

                    <div className="mt-4 flex flex-col space-y-2 text-sm md:hidden">
                      <div className="flex items-center text-gray-500">
                        <CalendarIcon />
                        <span>{exp.date}</span>
                      </div>
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-500 hover:text-blue-700 font-medium"
                      >
                        <LinkIcon />
                        <span>{t("visitWebsite")}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
