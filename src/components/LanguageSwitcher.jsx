import React from "react";
import { useTranslation } from "react-i18next";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */

const languages = ["en", "es"];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="relative flex bg-gray-200 rounded-full p-1 w-fit">
      {languages.map((lng) => (
        <button
          key={lng}
          onClick={() => changeLanguage(lng)}
          className={`relative z-10 px-2 md:px-4 py-1 text-xs md:text-sm font-medium rounded-full transition-all cursor-pointer ${
            currentLang === lng ? "text-white" : "text-gray-700"
          }`}
        >
          {lng.toUpperCase()}
        </button>
      ))}

      <motion.div
        layout
        layoutId="language-pill"
        className="absolute top-0 left-0 w-1/2 h-full bg-gray-400 rounded-full"
        animate={{
          x: currentLang === "es" ? "100%" : "0%",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
    </div>
  );
};

export default LanguageSwitcher;
