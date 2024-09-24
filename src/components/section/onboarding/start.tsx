import React from "react";
import { motion } from "framer-motion";
import sectionSettings from "@/constant/section-settings";

const StartButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <motion.div
      className="flex items-center w-full justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }}
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
        <div className="py-2 px-7 border relative z-10 text-white text-lg border-black bg-pumpkin-100 cursor-pointer">
          Read Chapter 1: {sectionSettings[1].title}
        </div>
        <div className="absolute w-full h-full bg-black z-0 left-1 top-1"></div>
      </motion.div>
    </motion.div>
  );
};

export default StartButton;
