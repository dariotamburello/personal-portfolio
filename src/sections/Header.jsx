/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PiReadCvLogoFill } from "react-icons/pi";
import ParticlesBackground from "../components/ParticlesBackground";
import userAvatar from "../assets/avatar.webp";
import { DarkButtonLink, LightButtonLink } from "../components/ButtonLink";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="top-0 left-0 w-full z-50 shadow-md bg-[rgba(var(--color-bg),0.8)] backdrop-blur-sm  ">
      <div className="absolute inset-0 -z-10">
        <ParticlesBackground />
      </div>

      <nav className="fixed top-20 right-2 md:right-10 md:top-10 z-10">
        <LanguageSwitcher />
      </nav>

      <div className="flex flex-col items-center justify-center h-screen text-center text-gray-100">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-8"
        >
          <div className="w-1/2 relative aspect-video lg:aspect-auto ">
            <img
              src={userAvatar}
              width={200}
              height={200}
              loading="lazy"
              alt="Photo of Darío"
              className="w-full h-full object-cover rounded-full shadow-lg"
            />
          </div>
        </motion.h1>
        <div className="max-w-2/3 mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-balance md:text-2xl lg:text-3xl mb-8"
          >
            {t("hello")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col md:flex-row gap-4 justify-center text-xl mb-8  md:items-center"
          >
            <DarkButtonLink
              url="https://github.com/dariotamburello"
              className="px-6 py-3 justify-center"
            >
              <FaGithub /> Github
            </DarkButtonLink>
            <LightButtonLink
              url="https://www.linkedin.com/in/dariotamburello89/"
              className="px-6 py-3 justify-center"
            >
              <FaLinkedin /> LinkedIn
            </LightButtonLink>
            <LightButtonLink
              url="https://cv.dariotamburello.dev"
              className="px-6 py-3 justify-center"
            >
              <PiReadCvLogoFill /> {t("myResume")}
            </LightButtonLink>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;
