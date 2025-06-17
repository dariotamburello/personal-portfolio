import React from "react";
import { motion } from "framer-motion";

const Title = ({ children }) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-3xl font-bold text-gray-900 mb-12 text-center"
      viewport={{ once: true }}
    >
      {children}
    </motion.h2>
  );
};

export default Title;
