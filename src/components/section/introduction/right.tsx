import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Stars from "./stars";
import useActiveLanguage from "@/hooks/use-active-language";
import Link from "next/link";

const Right = () => {
  const { introduction: lang } = useActiveLanguage();

  return (
    <div className="text-center md:text-left p-10 md:py-10 md:pr-0 md:pl-0 md:pb-0 lg:pr-10 xl:py-20 xl:pr-20 relative">
      <Stars className="left-0 top-0" delay={2} rotate={200}></Stars>
      <Stars className="right-52 top-20" delay={2.5} rotate={200}></Stars>
      <Stars className="left-72 top-40" delay={2} rotate={100}></Stars>
      <Stars className="bottom-0 right-2/4" delay={2.2} rotate={100}></Stars>
      <Stars className="bottom-10 right-[52%]" delay={2.8} rotate={100}></Stars>
      <Stars className="bottom-24 right-[47%]" delay={3} rotate={100}></Stars>

      <p className="text-md md:text-lg">
        {lang.hisname}{" "}
        <span className="py-1 px-2 bg-carribean-50 text-white text-lg md:text-xl">Raditya Prirahmadian,</span>{" "}
        {lang.indefinite}
      </p>
      <h1 className="text-3xl lg:text-5xl font-bold mt-1">FRONTEND WEB DEVELOPER</h1>
      <p className="mt-12">{lang.story},</p>
      <div className="flex items-center flex-col md:flex-row gap-5 mt-2">
        <p>{lang.youCan}</p>
        <motion.div
          className="relative w-full md:w-fit"
          whileTap={{
            scale: 0.9,
            transition: { type: "spring", stiffness: 500, damping: 0.2 },
          }}
        >
          <motion.div
            initial={{ x: -7, y: -7 }}
            whileHover={{ x: 0, y: 0, transition: { ease: "circInOut", duration: 0.2, delay: 0.01 } }}
            className="py-2 px-6 lg:px-12 border-2 relative z-10 text-sm lg:text-lg text-white border-black bg-persian-red-90 cursor-pointer"
          >
            <Link href={"/cv.pdf"} target="_blank" dangerouslySetInnerHTML={{ __html: lang.downloadButton }}></Link>
          </motion.div>
          <div className="absolute w-full h-full bg-light-orange-50 border-black border-2 z-0 top-0 left-0"></div>
        </motion.div>
      </div>
      <p className="mt-5" dangerouslySetInnerHTML={{ __html: lang.continue }}></p>
    </div>
  );
};

export default Right;
