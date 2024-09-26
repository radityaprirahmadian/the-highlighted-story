import { motion } from "framer-motion";
import React, { useRef } from "react";
import SectionWrapper from "@/components/global/section-wrapper";
import Link from "next/link";
import useActiveLanguage from "@/hooks/use-active-language";
import Stars from "../introduction/stars";

const Closing = ({ parentRef }: { parentRef: any }) => {
  const sectionRef = useRef(null);
  const { closing: lang } = useActiveLanguage();

  return (
    <SectionWrapper parentRef={parentRef} sectionNumber={7} elementRef={sectionRef}>
      <motion.div
        ref={sectionRef}
        id="section-4"
        className="bg-light-orange-50 px-10 pt-48 lg:px-56 lg:pt-60 lg:pb-24 w-full h-[90vh] relative"
      >
        <div className="text-center text-lg lg:text-xl text-black relative">
          <Stars className="left-0 -top-10" delay={2} rotate={200}></Stars>
          <Stars className="right-0 top-40" delay={1} rotate={10}></Stars>
          <Stars className="right-24 top-28" delay={1.05} rotate={30}></Stars>
          <Stars className="left-12 top-20" delay={1.2} rotate={90}></Stars>
          <Stars className="right-28 -top-10" delay={0.5} rotate={60}></Stars>
          <Stars className="right-40 -top-28" delay={0.7} rotate={100}></Stars>
          <p dangerouslySetInnerHTML={{ __html: lang.quote }}></p>

          <p className="mt-3">{lang.question}</p>
        </div>
        <motion.div
          className="relative mt-16 w-fit mx-auto h-fit"
          whileTap={{
            scale: 0.9,
            transition: { type: "spring", stiffness: 500, damping: 0.2 },
          }}
        >
          <motion.div
            initial={{ x: -5, y: -5 }}
            whileHover={{ x: 0, y: 0, transition: { ease: "circInOut", duration: 0.2, delay: 0.01 } }}
            className="border-2 relative z-10 text-lg lg:text-xl text-white border-black bg-pumpkin-100 cursor-pointer"
          >
            <Link
              href="https://www.linkedin.com/in/radityaprirahmadian/"
              target="_blank"
              className="inline-block py-2 px-24 "
            >
              {lang.button}
            </Link>
          </motion.div>
          <div className="absolute w-full h-full bg-black z-0 left-0 top-0"></div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Closing;
