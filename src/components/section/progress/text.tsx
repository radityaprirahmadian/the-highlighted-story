"use client";

import useInterval from "@/hooks/use-interval";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const text = ["Loading", "Preparing the platform", "Please, wait a moment", "Something great is coming"];

const Text = ({ value }: { value: number }) => {
  const [displayedTextIndex, setDisplayedTextIndex] = useState(0);
  useInterval({
    setState: setDisplayedTextIndex,
    intervalPer: 2000,
    valueAdded: 1,
    stopWhen: value >= 100,
  });

  if (value < 100) {
    return (
      <motion.div
        className="absolute bottom-10 text-xl"
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        {text[displayedTextIndex % text.length]}
      </motion.div>
    );
  }

  return null;
};

export default Text;
