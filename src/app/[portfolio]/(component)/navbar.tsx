"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";
import useLanguage, { langOptions } from "@/store/use-language";
import LanguageWrapper from "@/components/global/language-wrapper";
import sectionSettings from "@/constant/section-settings";
import Link from "next/link";

const Navbar = ({ type, title }: { type: string | undefined; title: string | undefined }) => {
  const [openLangOption, setOpenLangOption] = useState<boolean>(false);
  const controls = useAnimation();
  const activeLang = useLanguage((state) => state.activeLang);
  const setActiveLang = useLanguage((state) => state.setActiveLang);

  useEffect(() => {
    controls.start("initial");
  }, [controls]);

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
        <div className="w-full relative text-left p-4 md:px-12  md:py-4 border-b-2 flex items-center justify-between border-black">
          <div>
            <div className="text-2xl md:text-3xl font-bold leading-none">
              {type ?? "NOT FOUND"}
              {type ? `- ${title ?? "NOT FOUND"}` : ""}
            </div>
            <Link href={"/"} className="leading-none">
              or <span className="underline">back to home</span>
            </Link>
          </div>

          <div className="relative z-50">
            <motion.div
              animate={controls}
              whileHover={{ x: 0, y: 0, transition: { ease: "circInOut", duration: 0.2, delay: 0.01 } }}
              initial={{ x: -5, y: -5, background: sectionSettings[1].navbarBackground }}
              className="py-1 px-2 relative z-50 border-black border-2 cursor-pointer"
              onClick={() => setOpenLangOption(!openLangOption)}
            >
              {activeLang}
            </motion.div>
            <div className="absolute w-full h-full bg-black border-black border-2 z-40 left-0 top-0"></div>
            <LanguageWrapper
              controls={controls}
              variantsNavbar={{ initial: { background: sectionSettings[1].navbarBackground } }}
              isOpened={openLangOption}
              onClose={() => setOpenLangOption(false)}
            ></LanguageWrapper>
          </div>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};

export default Navbar;
