import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import DecorationOne from "./decoration-one";
import DecorationTwo from "./decoration-two";
import Right from "./right";

const Introduction = () => {
  return (
    <AnimatePresence>
      <motion.div
        className="max-w-[1440px] py-10 lg:py-24 xl:pb-96 w-full flex flex-col md:flex-row gap-7 xl:gap-0 justify-between bg-light-orange-50 relative"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        <Image
          src={"/block_green.png"}
          className="absolute z-1 hidden md:inli right-[-60px] top-2/4"
          width="200"
          height="200"
          alt="circle"
        ></Image>
        <div className="basis-12/12 md:basis-5/12 lg:basis-6/12 px-6 flex items-center justify-center">
          <div className="relative w-[80%] sm:w-[50%] aspect-square md:w-[300px] md:h-[260px] lg:w-[400px] lg:h-[380px]">
            <div className="bg-light-orange-80 h-full w-full z-10 relative border-2 border-black">
              <Image
                src={"/test.png"}
                alt="asdasd"
                width={450}
                height={450}
                className="absolute bottom-0 left-2/4 translate-x-[-45%] z-20"
              ></Image>
              <Image
                src={"/test-black.png"}
                alt="asdasd"
                width={450}
                height={450}
                className="absolute bottom-[-1%] left-[52%] translate-x-[-45%] z-10"
              ></Image>
            </div>
            <DecorationOne></DecorationOne>
            <DecorationTwo></DecorationTwo>
          </div>
        </div>
        <div className="basis-12/12 md:basis-5/12 lg:basis-6/12 flex items-center">
          <Right></Right>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Introduction;
