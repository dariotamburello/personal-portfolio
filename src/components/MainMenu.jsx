/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */
import { AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const MainMenu = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const navLinks = [
    { name: "Home", target: "home" },
    { name: "Projects", target: "projects" },
    { name: "Experience", target: "experience" },
    { name: "Skills", target: "skills" },
    { name: "Contact", target: "contact" },
  ];

  const handleSectionChange = (target) => {
    setActiveSection(target);
    setIsMenuOpen(false);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav
      ref={menuRef}
      className={`fixed top-0 h-12 md:h-[3rem] left-1/2 w-full z-10 rounded-none ${
        isMenuOpen ? "bg-gray-100/95" : "bg-gray-600/50"
      } bg-gray-100/60 md:border md:border-white border-opacity-40 md:bg-gray-200/70 shadow-lg shadow-black/[0.03] 
      md:backdrop-blur-md md:top-6 md:h-[3.25rem] md:w-[36rem] md:rounded-full`}
      style={{
        opacity: "1",
        transform: "translateX(-50%) translateY(0px) translateZ(0px)",
      }}
    >
      {/* collapse button */}
      <div className="md:hidden absolute right-4 top-1/2 transform -translate-y-1/2 z-30">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`${
            isMenuOpen ? "text-gray-700" : "text-white"
          }  hover:text-gray-900 focus:outline-none transition-all duration-500 ease-in-out `}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Desktop menu */}
      <ul className="hidden md:flex justify-around h-full items-center text-gray-600 text-base relative">
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
                className="absolute inset-0 bg-gray-400 rounded-full z-10"
              ></motion.span>
            )}
          </motion.li>
        ))}
      </ul>

      {/* Menu  mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden absolute top-full  left-0 right-0 bg-gray-100/95 shadow-lg backdrop-blur-lg z-20 overflow-hidden`}
          >
            <ul className="flex flex-col">
              {navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="w-full"
                >
                  <Link
                    to={link.target}
                    smooth={true}
                    duration={500}
                    className={`block py-3 px-6 text-center transition-colors cursor-pointer font-medium ${
                      activeSection === link.target
                        ? "bg-gray-300 text-gray-900"
                        : "text-gray-700 hover:bg-gray-200"
                    }`}
                    onClick={() => handleSectionChange(link.target)}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MainMenu;
