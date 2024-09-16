import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Stars from "./stars";

const Right = () => {
  return (
    <div className="mt-10 md:mt-0 text-center md:text-left p-10 md:py-10 md:pr-10 md:pl-0 md:pb-0 xl:py-20 xl:pr-20 relative">
      <Stars className="left-0 top-0" delay={2} rotate={200}></Stars>
      <Stars className="right-52 top-20" delay={2.5} rotate={200}></Stars>
      <Stars className="left-72 top-40" delay={2} rotate={100}></Stars>
      <Stars className="bottom-0 right-2/4" delay={2.2} rotate={100}></Stars>
      <Stars className="bottom-10 right-[52%]" delay={2.8} rotate={100}></Stars>
      <Stars className="bottom-24 right-[47%]" delay={3} rotate={100}></Stars>

      <span className="text-md md:text-lg">His name is</span>
      <h1 className="text-3xl lg:text-4xl font-bold">RADITYA PRIRAHMADIAN</h1>
      <h5 className="text-md md:text-lg mt-5">
        He is a highly skilled <span className="py-1 px-2 bg-carribean-10 text-white">Frontend Web Developer</span> with
        over <span className="py-1 px-2 bg-carribean-10 text-white">3</span> years of experience in{" "}
        <span className="py-1 px-2 bg-carribean-10 text-white">ReactJS and Next.js</span>. Having worked in diverse
        industries, he excels at building scalable websites while delivering features aligned with business goals in{" "}
        <span className="py-1 px-2 bg-carribean-10 text-white">Scrum-driven teams</span>.
      </h5>
      <motion.div
        className="relative mt-5 w-full md:w-fit"
        whileTap={{
          scale: 0.9,
          transition: { type: "spring", stiffness: 500, damping: 0.2 },
        }}
      >
        <div className="py-2 px-12 rounded-md border relative z-10 text-lg text-white border-black bg-persian-red-90 hover:bg-persian-red-100 cursor-pointer">
          Explore
        </div>
        <div className="absolute w-full h-full rounded-md bg-black z-0 left-1 top-1"></div>
      </motion.div>
    </div>
  );
};

export default Right;
