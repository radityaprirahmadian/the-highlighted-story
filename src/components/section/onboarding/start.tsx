import React from "react";
import { motion } from "framer-motion";
import sectionSettings from "@/constant/section-settings";

const StartButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <motion.div
      className="flex items-center w-full justify-center mt-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 1, delay: 1 }}
    >
      <motion.div
        className="relative"
        whileTap={{
          scale: 0.9,
          transition: { type: "spring", stiffness: 500, damping: 0.2 },
        }}
        transition={{ ease: "easeInOut", duration: 1 }}
        onClick={() => {
          onClick();
        }}
      >
        <motion.div
          initial={{ x: -5, y: -5 }}
          whileHover={{ x: 0, y: 0, transition: { ease: "circInOut", duration: 0.2, delay: 0.01 } }}
          className="py-2 px-12 border-3 relative z-10 text-black text-lg border-black bg-pumpkin-100 cursor-pointer"
        >
          Chapter 1: {sectionSettings[1].title}
        </motion.div>
        <div className="absolute w-full h-full bg-black z-0 left-0 top-0"></div>
      </motion.div>
    </motion.div>
  );
};

export default StartButton;
