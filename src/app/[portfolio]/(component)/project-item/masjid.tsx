"use client";

import React from "react";
import { motion } from "framer-motion";

const Masjid = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      <div className="bg-black w-full h-72"></div>
    </motion.div>
  );
};

export default Masjid;
