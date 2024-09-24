import React from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

const Text = () => {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mb-5 text-xl px-4 w-full md:w-6/12 text-center"
      transition={{ ease: "easeInOut", duration: 0.5 }}
    >
      Welcome to <span className="py-1 px-2 bg-carribean-10 text-white">The Highlighted Story</span> -
    </motion.p>
  );
};

export default Text;
