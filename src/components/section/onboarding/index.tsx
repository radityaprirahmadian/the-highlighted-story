import React from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import StartButton from "./start";
import useActiveSection from "@/store/use-active-section";
import sectionSettings from "@/constant/section-settings";
import Text from "./text";

const Onboarding = () => {
  const controls = useAnimation();

  const setActiveSection = useActiveSection((state) => state.setActiveSection);
  const activeSection = useActiveSection((state) => state.activeSection);

  const handleOnClick = () => {
    controls.start("click");
    setTimeout(() => {
      localStorage.setItem("old-visitor", "true");
      controls.start("effect");
    }, 100);
  };

  return (
    <AnimatePresence>
      {!activeSection.no ? (
        <motion.div
          className="flex w-full items-center flex-col justify-center h-full"
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
          animate={controls}
        >
          <Text />
          <StartButton
            onClick={() => {
              handleOnClick();
              setTimeout(() => setActiveSection({ no: 1, title: sectionSettings[1].title }), 500);
            }}
          ></StartButton>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default Onboarding;
