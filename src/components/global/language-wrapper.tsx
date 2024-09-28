import sectionSettings from "@/constant/section-settings";
import useLanguage, { langOptions } from "@/store/use-language";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";

const LanguageWrapper = ({
  variantsNavbar,
  controls,
  isOpened,
  onClose,
}: {
  variantsNavbar: any;
  controls: any;
  isOpened: boolean;
  onClose: () => void;
}) => {
  const setActiveLang = useLanguage((state) => state.setActiveLang);
  const controls2 = useAnimation();

  useEffect(() => {
    if (isOpened) {
      controls2.start("opened");
    } else controls2.start("closed");
  }, [isOpened, controls2]);

  return (
    <>
      <motion.div
        animate={controls2}
        initial={{ y: 0 }}
        onClick={() => onClose()}
        variants={{
          opened: { y: 40, transition: { ease: "easeInOut", duration: "0.2" } },
          closed: { y: 0, transition: { ease: "easeInOut", duration: "0.2" } },
        }}
        className="absolute gap-1 z-30 left-0 right-0 bottom-0 shadow-sm"
      >
        <motion.div
          className={cn("border-black border-3 py-1 px-2 cursor-pointer")}
          animate={controls}
          initial={{ background: sectionSettings[1].navbarBackground }}
          variants={variantsNavbar}
          onClick={() => {
            setActiveLang(langOptions.id);
          }}
        >
          id
        </motion.div>
      </motion.div>
      <motion.div
        animate={controls2}
        initial={{ y: 0 }}
        onClick={() => onClose()}
        variants={{
          opened: { y: 77, transition: { ease: "easeInOut", duration: "0.2" } },
          closed: { y: 0, transition: { ease: "easeInOut", duration: "0.2" } },
        }}
        className="absolute gap-1 z-20 left-0 right-0 bottom-0 shadow-sm"
      >
        <motion.div
          className={cn("border-black border-3 py-1 px-2 cursor-pointer")}
          animate={controls}
          initial={{ background: sectionSettings[1].navbarBackground }}
          variants={variantsNavbar}
          onClick={() => {
            setActiveLang(langOptions.en);
          }}
        >
          en
        </motion.div>
      </motion.div>
    </>
  );
};

export default LanguageWrapper;
