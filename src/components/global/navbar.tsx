"use client";

import useActiveSection from "@/store/use-active-section";
import React, { useEffect, useState } from "react";
import { AnimatePresence, delay, motion, useAnimation } from "framer-motion";
import sectionSettings from "@/constant/section-settings";
import useLanguage, { langOptions } from "@/store/use-language";
import { cn } from "@/lib/utils";
import LanguageWrapper from "./language-wrapper";
import useActiveLanguage from "@/hooks/use-active-language";

const Navbar = () => {
  const activeSection = useActiveSection((state) => state.activeSection);
  const previousSection = useActiveSection((state) => state.previousSection);
  const controls = useAnimation();
  const activeLang = useLanguage((state) => state.activeLang);
  const [openLangOption, setOpenLangOption] = useState<boolean>(false);

  useEffect(() => {
    if (activeSection.no === 1 && previousSection.no === 0) {
      controls.start("initial");
      return;
    }

    for (let key in sectionSettings) {
      if (activeSection.no === Number(key)) {
        controls.start(sectionSettings[activeSection.no].navbarControlsName);
      }
    }
  }, [activeSection, previousSection, controls]);

  const generateNavbarVariants = () => {
    let variants = {
      initial: {
        y: 0,
        background: sectionSettings[1].navbarBackground,
        color: sectionSettings[1].navbarTextColor,
        transition: { type: "spring", stiffness: 200, damping: 15, delay: 0.75 },
      },
    };

    let background = {
      initial: {
        background: sectionSettings[1].navbarBackgroundInClass,
        color: sectionSettings[1].navbarTextColor,
        transition: { type: "spring", stiffness: 200, damping: 15 },
      },
    };

    for (let key in sectionSettings) {
      const currentSection = sectionSettings[key as unknown as number];
      background = {
        ...background,
        [currentSection.navbarControlsName]: {
          background: currentSection.navbarBackground,
          color: currentSection.navbarTextColor,
          transition: { duration: 0 },
        },
      };

      variants = {
        ...variants,
        [currentSection.navbarControlsName]: {
          background: currentSection.navbarBackground,
          color: currentSection.navbarTextColor,
          transition: { duration: 0 },
        },
      };
    }

    return { variants, background };
  };

  const generateNavbarCircleVariants = () => {
    let variants = {
      initial: {
        x: -20,
        background: "#036977",
        transition: { type: "spring", stiffness: 250, damping: 15, delay: 1.25 },
      },
    };

    for (let key in sectionSettings) {
      const currentSection = sectionSettings[key as unknown as number];
      variants = {
        ...variants,
        [currentSection.navbarControlsName]: {
          x: currentSection.navbarCirclePosition - 20,
          background: currentSection.navbarCircle,
          transition: { type: "spring", stiffness: 250, damping: 15 },
        },
      };
    }

    return variants;
  };

  const { navbar: lang } = useActiveLanguage();

  if (!activeSection.no) return null;

  return (
    <AnimatePresence>
      <motion.nav
        className="fixed top-0 left-0 right-0 flex justify-center bg-light-orange-50 border-b-3 border-black z-50"
        initial={{
          y: -100,
        }}
        animate={controls}
        variants={generateNavbarVariants().variants}
      >
        <div className="w-full  max-w-[1440px] flex p-4 md:px-12 md:py-4 items-center justify-between">
          <div>
            <div className="text-2xl md:text-3xl font-bold !leading-none">
              {lang.chapter.toUpperCase()} {activeSection.no}
            </div>
            <div className="text-md md:text-xl !leading-none">
              {lang[String(activeSection.no) as keyof typeof lang]}
            </div>
          </div>
          <div className="md:flex md:items-center  gap-2">
            <motion.div
              className="w-10 h-10 rounded-full hidden md:inline-block border-black border-3"
              initial={{ x: 500 }}
              variants={generateNavbarCircleVariants()}
              animate={controls}
            ></motion.div>
            <div className="relative z-50">
              <motion.div
                animate={controls}
                whileHover={{ x: 0, y: 0, transition: { ease: "circInOut", duration: 0.2, delay: 0.01 } }}
                initial={{ x: -5, y: -5, background: sectionSettings[1].navbarBackground }}
                variants={generateNavbarVariants().background}
                className="py-1 px-2 relative z-50 border-black border-3 cursor-pointer"
                onClick={() => setOpenLangOption(!openLangOption)}
              >
                {activeLang}
              </motion.div>
              <div className="absolute w-full h-full bg-black border-black border-3 z-40 left-0 top-0"></div>
              <LanguageWrapper
                variantsNavbar={generateNavbarVariants().variants}
                controls={controls}
                isOpened={openLangOption}
                onClose={() => setOpenLangOption(false)}
              ></LanguageWrapper>
            </div>
          </div>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};

export default Navbar;
