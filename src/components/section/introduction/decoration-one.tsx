import React from "react";
import { motion } from "framer-motion";

const DecorationOne = () => {
  return (
    <motion.div
      initial={{ x: 0, y: 0 }}
      animate={{ x: 32, y: 32 }}
      transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.5 }}
      className="absolute w-full h-full bg-pumpkin-100 z-0 left-0 top-0 border-3 border-black"
    ></motion.div>
  );
};

export default DecorationOne;
