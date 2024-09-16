import React from "react";
import { motion } from "framer-motion";

const Hero = ({ active }: { active: any }) => {
  return (
    <motion.div
      className="relative h-fit min-h-80 md:min-h-56 lg:min-h-80 w-full"
      initial={{ x: -2000 }}
      animate={{ x: 0 }}
      transition={{ ease: "easeInOut", duration: 1, stiffness: 200, type: "spring", damping: 15 }}
    >
      <div className="w-full p-2 bg-light-orange-90 h-fit min-h-80 md:min-h-56 lg:min-h-80 relative z-10 border-2 text-2xl border-black">
        <div className="mb-2">{!active ? "Coba" : active.id}</div>

        <div>{active.text}</div>
      </div>
      <div className="absolute w-full h-full bg-black z-0 left-1 top-1"></div>
    </motion.div>
  );
};

export default Hero;
