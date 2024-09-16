import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

const Stars = ({ delay, className, rotate }: { delay: number; className: string; rotate: number }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("initial");

    const timeout = setTimeout(() => {
      controls.start("animatie");
    }, delay * 1000 + 200);

    return () => {
      clearTimeout(timeout);
    };
  }, [delay]);

  return (
    <motion.div
      initial={{ scale: 0, rotate: rotate }}
      variants={{
        initial: {
          scale: 0.8,
          rotate: rotate,
          transition: { ease: "easeInOut", duration: 0.2, delay: delay },
        },
        animatie: {
          scale: 0,
          rotate: rotate,
          transition: { ease: "easeInOut", duration: 0.4, repeat: Infinity, repeatType: "reverse" },
        },
      }}
      className={`absolute z-1 ${className}`}
      animate={controls}
    >
      <Image src={"/star_red.png"} width="20" height="20" alt="circle"></Image>
    </motion.div>
  );
};

export default Stars;
