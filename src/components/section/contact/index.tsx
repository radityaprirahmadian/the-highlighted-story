import SectionWrapper from "@/components/global/section-wrapper";
import connectData from "@/data/connect";
import useActiveLanguage from "@/hooks/use-active-language";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const Contacts = ({ parentRef }: { parentRef: any }) => {
  const sectionRef = useRef(null);
  const { connect: lang } = useActiveLanguage();

  return (
    <SectionWrapper parentRef={parentRef} sectionNumber={6} elementRef={sectionRef}>
      <motion.div ref={sectionRef} id="section-4" className="w-full h-fit bg-pumpkin-10 pt-32 pb-20 lg:pt-32 md:pb-48">
        <h2
          className="text-center text-lg lg:text-xl mb-24 px-10"
          dangerouslySetInnerHTML={{ __html: lang.title }}
        ></h2>
        <div className="grid grid-cols-12 grid-rows-8 lg:grid-rows-4 relative">
          <div className=" opacity-50 row-span-3 row-start-1 col-span-5 bg-pumpkin-10 border-black border border-t-0 border-l-0"></div>
          <div className=" opacity-50 row-span-1 row-start-1 col-start-10 col-span-3 h-24 bg-pumpkin-10 border-t-0 border-r-0 border-black border"></div>
          <div className=" opacity-50 row-span-1 bg-persian-red-20 col-span-4 border-black border border-t-2"></div>
          <div className=" opacity-50 row-span-1 row-start-2 col-start-8 bg-persian-red-20 col-span-5 border-black border"></div>
          <div className=" opacity-50 row-span-1 row-start-3 col-start-7 bg-persian-red-20 col-span-3 border-black border"></div>
          <div className=" opacity-50 row-span-1 row-start-3 col-start-6 bg-carribean-20 col-span-1 border-black border"></div>
          <div className=" opacity-50 row-span-1 row-start-3 col-start-10 bg-pumpkin-10 col-span-2 border-r-0 border-black border"></div>
          <div className=" opacity-50 row-span-1 col-start-6 row-start-2 bg-carribean-20 col-span-2 border-black border"></div>
          <div className=" opacity-50 row-span-1 col-start-1 row-start-4 bg-carribean-20 col-span-11 border-b-2 border-r-2 border-l-0 border-black border"></div>
          <div className=" opacity-50 row-span-2 col-start-12 row-start-3 bg-pumpkin-10 col-span-2 border-black border border-b-0 border-l-0 border-r-0"></div>

          <div className="absolute left-0 right-0 top-0 bottom-0 grid grid-cols-12 grid-rows-4 gap-5 px-10 py-10">
            <div className="relative row-span-2 mt-2.5 lg:mt-0 row-start-3 lg:row-start-4 col-span-8 col-start-3 lg:col-start-12 h-fit opacity-50">
              <div className="relative z-10 bg-white text-black border-2 border-black p-5"></div>
              <div className="absolute w-full h-full bg-black z-0 left-1 top-1"></div>
            </div>
            <div className="relative row-span-2 row-start-2 col-span-3 col-start-5 h-fit opacity-50">
              <div className="relative z-10 bg-white text-black border-2 border-black p-5"></div>
              <div className="absolute w-full h-full bg-black z-0 left-1 top-1"></div>
            </div>
            <div className="relative h-fit row-span-1 col-span-5 opacity-50">
              <div className="relative z-10 bg-white text-black border-2 border-black p-5"></div>
              <div className="absolute w-full h-full bg-black z-0 left-1 top-1"></div>
            </div>
            <div className="relative h-40 row-span-2 col-span-2 row-start-4 col-start-2 lg:col-start-8 opacity-50">
              <div className="relative z-10 bg-white text-black border-2 border-black h-full"></div>
              <div className="absolute w-full h-full bg-black z-0 left-1 top-1"></div>
            </div>

            <div className="relative h-fit row-span-1 col-span-5 md:col-span-3 row-start-1 lg:col-span-2  xl:col-span-2 lg:row-start-1 col-start-2 md:col-start-4 lg:col-start-9 xl:col-start-10">
              <motion.a
                href={connectData.github}
                target="_blank"
                initial={{ x: -5, y: -5 }}
                whileHover={{ x: 0, y: 0, transition: { ease: "circInOut", duration: 0.2, delay: 0.01 } }}
                className="relative z-10 bg-white text-black border-2 border-black p-5 cursor-pointer flex items-center justify-center"
              >
                <Image src={"/github.png"} alt="github" width="75" height="75" />
              </motion.a>
              <div className="absolute w-full h-full bg-black z-0 left-0 top-0"></div>
            </div>

            <div className="relative h-fit row-span-1 -mt-2.5 lg:mt-5 col-span-5 md:col-span-3 lg:col-span-2  xl:col-span-2 row-start-2 lg:row-start-3 col-start-8 md:col-start-8 lg:col-start-5 xl:col-start-5">
              <motion.a
                href={connectData.wa}
                target="_blank"
                initial={{ x: -5, y: -5 }}
                whileHover={{ x: 0, y: 0, transition: { ease: "circInOut", duration: 0.2, delay: 0.01 } }}
                className="relative z-10 bg-white text-black border-2 border-black p-5 cursor-pointer flex items-center justify-center"
              >
                <Image src={"/wa.png"} alt="github" width="75" height="75" />
              </motion.a>
              <div className="absolute w-full h-full bg-black z-0 left-0 top-0"></div>
            </div>

            <div className="relative h-fit row-span-1 mt-2.5 lg:mt-0 col-span-5 md:col-span-3 lg:col-span-2  xl:col-span-2 row-start-2 lg:row-start-2 col-start-1 md:col-start-1 lg:col-start-2 xl:col-start-2">
              <motion.a
                href={connectData.linkedIn}
                target="_blank"
                initial={{ x: -5, y: -5 }}
                whileHover={{ x: 0, y: 0, transition: { ease: "circInOut", duration: 0.2, delay: 0.01 } }}
                className="relative z-10 bg-white text-black border-2 border-black p-5 cursor-pointer flex items-center justify-center"
              >
                <Image src={"/linkedin.png"} alt="github" width="75" height="75" />
              </motion.a>
              <div className="absolute w-full h-full bg-black z-0 left-0 top-0"></div>
            </div>

            <div className="relative h-fit row-span-1 -mt-2.5 lg:mt-8 col-span-5 md:col-span-3 lg:col-span-2  xl:col-span-2 row-start-3 lg:row-start-4 col-start-6 md:col-start-6 lg:col-start-10 xl:col-start-11">
              <motion.a
                href={connectData.gmail}
                target="_blank"
                initial={{ x: -5, y: -5 }}
                whileHover={{ x: 0, y: 0, transition: { ease: "circInOut", duration: 0.2, delay: 0.01 } }}
                className="relative z-10 bg-white text-black border-2 border-black p-5 cursor-pointer flex items-center justify-center"
              >
                <Image src={"/gmail.png"} alt="github" width="75" height="75" />
              </motion.a>
              <div className="absolute w-full h-full bg-black z-0 left-0 top-0"></div>
            </div>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Contacts;
