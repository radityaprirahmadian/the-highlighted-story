"use client";

import React, { RefObject, useEffect, useLayoutEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useActiveSection from "@/store/use-active-section";
import sectionSettings from "@/constant/section-settings";

const Wrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const setActiveSection = useActiveSection((state) => state.setActiveSection);

  useEffect(() => {
    setActiveSection({ no: 1, title: sectionSettings[1].title });
  }, [setActiveSection]);
  return (
    <AnimatePresence>
      <motion.div
        className="mt-10 px-4 md:w-8/12 m-auto mb-16"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Wrapper;
