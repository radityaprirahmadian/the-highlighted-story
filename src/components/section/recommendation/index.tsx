import SectionWrapper from "@/components/global/section-wrapper";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Item from "./item";
import useActiveLanguage from "@/hooks/use-active-language";
import impressionData from "@/data/impressions";

const Recommendations = ({ parentRef }: { parentRef: any }) => {
  const sectionRef = useRef(null);
  const { impression: lang } = useActiveLanguage();
  return (
    <SectionWrapper parentRef={parentRef} sectionNumber={5} elementRef={sectionRef}>
      <motion.div
        ref={sectionRef}
        id="section-4"
        className="bg-carribean-50 text-black py-24 md:pt-24 md:pb-32 lg:pt-32 lg:pb-48 px-6 w-full h-fit"
      >
        <h2
          className="mb-10 lg:mb-24 text-lg lg:text-xl text-white text-center"
          dangerouslySetInnerHTML={{ __html: lang.title }}
        ></h2>
        <div className="grid gap-2 lg:grid-cols-12 lg:grid-rows-6 w-full px-0 lg:px-10 justify-center">
          {[...new Array(12)].map((_, index) => {
            const displayedData = impressionData.filter((item) => item.order === index + 1)[0];

            return <Item index={index} displayedData={displayedData} key={index}></Item>;
          })}
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Recommendations;
