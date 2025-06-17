/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */ import { skills } from "../constants";
import "./Skills.css";
import FlipCard from "../components/FlipCard";
import Title from "../components/Title";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();
  const translatedProjects = skills.map((skill) => ({
    ...skill,
    category: t(skill.categoryKey),
  }));
  return (
    <div className="container mx-auto px-4">
      <Title>{t("skillsTitle")}</Title>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        {translatedProjects.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group h-[400px] perspective-1000"
          >
            <FlipCard category={category} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
