import { cn } from "@/lib/utils";
import { motion, useAnimation, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import React, { useEffect } from "react";

const Item = ({ isActive, image, onClick }: { isActive: boolean; image: string; onClick: () => void }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (isActive) controls.start("active");
    else controls.start("inactive");
  }, [isActive]);

  return (
    <motion.div
      className={cn(`relative`, isActive ? "scale-105" : "grayscale")}
      initial={{ scale: 1 }}
      animate={controls}
      variants={{
        active: {
          scale: 1.6,
          zIndex: 10,
          filter: `grayscale(0)  brightness(1)`,
          transition: { ease: "circOut", duration: 0.2 },
        },
        inactive: {
          scale: 1,
          zIndex: 1,
          filter: `grayscale(1) brightness(70%)`,
          transition: { ease: "circOut", duration: 0.2 },
        },
      }}
    >
      <motion.div
        initial={{ x: -7, y: -7 }}
        whileHover={{ x: 0, y: 0, transition: { ease: "circInOut", duration: 0.2, delay: 0.01 } }}
        onClick={() => onClick()}
        className="aspect-square relative z-10 flex items-center justify-center bg-earth-yellow-100 border-black border-2 text-center text-black cursor-pointer"
      >
        <Image alt="tes" src={image} width="60" height="60" className="p"></Image>
      </motion.div>
      <div className="absolute w-full h-full bg-falu-red-10 border-black border-2 z-0 left-0 top-0"></div>
    </motion.div>
  );
};

export default Item;
