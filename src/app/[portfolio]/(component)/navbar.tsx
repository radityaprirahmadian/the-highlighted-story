"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = ({ type, title }: { type: string | undefined; title: string | undefined }) => {
  return (
    <AnimatePresence>
      <motion.nav
        className="sticky top-0 left-0 right-0 flex justify-center bg-light-orange-50 z-50"
        initial={{
          y: -100,
        }}
        animate={{
          y: 0,
          transition: { type: "spring", stiffness: 200, damping: 15 },
        }}
      >
        <div className="w-full text-center py-4 border-b-2 border-black">
          <div className="text-3xl font-bold leading-none">
            {type ?? "NOT FOUND"}
            {type ? `: ${title ?? "NOT FOUND"}` : ""}
          </div>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};

export default Navbar;
