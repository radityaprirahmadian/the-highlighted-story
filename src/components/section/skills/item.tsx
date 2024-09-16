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
      <div
        onClick={() => onClick()}
        className="aspect-square rounded-md relative z-10 flex items-center justify-center bg-earth-yellow-100 border-black border-2 text-center text-black cursor-pointer"
      >
        <Image alt="tes" src={image} width="70" height="70" className="p"></Image>
      </div>
      <div className="absolute w-full h-full rounded-md bg-falu-red-10 border-black border-2 z-0 left-1 top-1"></div>
    </motion.div>
  );
};

export default Item;
