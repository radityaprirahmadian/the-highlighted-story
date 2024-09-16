import React, { useRef } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import sectionSettings from "@/constant/section-settings";

const StartButton = ({ onClick, isStart = true }: { onClick: () => void; isStart: boolean }) => {
  const ref = useRef(null);
  const controls = useAnimation();

  const handleOnClick = () => {
    localStorage.setItem("old-visitor", "true");
    controls.start("click");
    setTimeout(() => {
      controls.start("effect");
    }, 100);
  };

  return (
    <motion.div
      className="flex items-center w-full justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 1 }}
    >
      <motion.div
        className="relative"
        whileTap={{
          scale: 0.9,
          transition: { type: "spring", stiffness: 500, damping: 0.2 },
        }}
        variants={{
          click: {
            y: 20,
            scale: 0.7,
            transition: { duration: 0.1, ease: "easeIn" },
          },
          effect: {
            y: -1000,
            scale: 0.2,
            transition: { duration: 0.4, ease: "easeOut" },
          },
        }}
        ref={ref}
        initial={{ opacity: 1 }}
        animate={controls}
        transition={{ ease: "easeInOut", duration: 1 }}
        onClick={() => {
          handleOnClick();
          onClick();
        }}
      >
        <div className="py-2 px-7 border relative z-10 text-earth-yellow-100 text-lg border-black bg-pumpkin-100 cursor-pointer">
          Chapter 1: {sectionSettings[1].title}
        </div>
        <div className="absolute w-full h-full bg-black z-0 left-1 top-1"></div>
      </motion.div>
    </motion.div>
  );
};

export default StartButton;
