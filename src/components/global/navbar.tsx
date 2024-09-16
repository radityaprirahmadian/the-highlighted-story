"use client";

import useActiveSection from "@/store/use-active-section";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import sectionSettings from "@/constant/section-settings";
import useLanguage, { langOptions } from "@/store/use-language";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const activeSection = useActiveSection((state) => state.activeSection);
  const previousSection = useActiveSection((state) => state.previousSection);
  const controls = useAnimation();
  const activeLang = useLanguage((state) => state.activeLang);
  const setActiveLang = useLanguage((state) => state.setActiveLang);
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
        transition: { type: "spring", stiffness: 200, damping: 15 },
      },
    };

    let background = {
      [1 as number]: sectionSettings[1].navbarBackgroundInClass,
    };

    for (let key in sectionSettings) {
      const currentSection = sectionSettings[key as unknown as number];
      background = {
        ...background,
        [key as unknown as number]: currentSection.navbarBackgroundInClass,
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
        transition: { type: "spring", stiffness: 250, damping: 15, delay: 1 },
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

  if (!activeSection.no) return null;

  return (
    <AnimatePresence>
      <motion.nav
        className="sticky top-0 left-0 right-0 flex justify-center bg-light-orange-50 z-50"
        initial={{
          y: -100,
        }}
        animate={controls}
        variants={generateNavbarVariants().variants}
      >
        <div className="w-full flex p-4 md:px-12 md:py-4 items-center justify-between border-b-2 border-black">
          <div>
            <div className="text-2xl md:text-3xl font-bold !leading-none">CHAPTER {activeSection.no}</div>
            <div className="text-md md:text-xl !leading-none">{activeSection.title}</div>
          </div>
          <div className="md:flex md:items-center  gap-2">
            <motion.div
              className="w-10 h-10 rounded-full hidden md:inline-block border-black border-2"
              initial={{ x: 500 }}
              variants={generateNavbarCircleVariants()}
              animate={controls}
            ></motion.div>
            {/* <div className="relative z-50">
              <div
                className="py-1 px-2 border-black border cursor-pointer"
                onClick={() => setOpenLangOption(!openLangOption)}
              >
                {activeLang}
              </div>
              {openLangOption ? (
                <div className="absolute flex gap-1 left-0 right-0 bottom-[-220%] flex-col shadow-sm ">
                  <motion.div
                    className={cn("border-black border py-1 px-2 cursor-pointer")}
                    animate={controls}
                    initial={{ background: sectionSettings[1].navbarBackground }}
                    variants={generateNavbarVariants().variants}
                    onClick={() => {
                      setOpenLangOption(false);
                      setActiveLang(langOptions.id);
                    }}
                  >
                    id
                  </motion.div>
                  <motion.div
                    className={cn("border-black border py-1 px-2 cursor-pointer")}
                    animate={controls}
                    initial={{ background: sectionSettings[1].navbarBackground }}
                    variants={generateNavbarVariants().variants}
                    onClick={() => {
                      setOpenLangOption(false);
                      setActiveLang(langOptions.en);
                    }}
                  >
                    en
                  </motion.div>
                </div>
              ) : null}
            </div> */}
          </div>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};

export default Navbar;
