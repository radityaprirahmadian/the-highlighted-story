import React from "react";
import { motion } from "framer-motion";

const DecorationTwo = () => {
  return (
    <motion.div
      initial={{ x: 0, y: 0 }}
      animate={{ x: 16, y: 16 }}
      //   transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.5 }}
      transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.8 }}
      className="absolute w-full h-full bg-carribean-20 z-0 left-0 top-0 border-2 border-black"
    ></motion.div>
  );
};

export default DecorationTwo;
