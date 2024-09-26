import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import Item from "./item";
import SectionWrapper from "@/components/global/section-wrapper";
import TypingEffect from "@/components/global/typing-effect";
import useActiveLanguage from "@/hooks/use-active-language";
import useLanguage from "@/store/use-language";
import worksData from "@/data/works";

const Works = ({ parentRef }: { parentRef: any }) => {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(-1);

  const activeLang = useLanguage((state) => state.activeLang);
  const { work: lang } = useActiveLanguage();

  return (
    <SectionWrapper parentRef={parentRef} sectionNumber={4} elementRef={sectionRef}>
      <motion.div
        ref={sectionRef}
        id="section-4"
        className="bg-falu-red-60 text-white py-24 md:pt-24 md:pb-32 lg:pt-32 lg:pb-48 px-4 w-full h-fit"
      >
        <h2 className="text-left mb-10 lg:mb-24 text-lg lg:text-xl lg:px-28">
          <span className="py-1 px-2 bg-carribean-10 text-white text-2xl lg:text-3xl">3</span> {lang.titleOne}, <br />
          {lang.mean} 3{" "}
          <span className="py-1 px-2 bg-carribean-10 text-white text-2xl lg:text-3xl">
            {activeLang === "en" && lang.different}{" "}
            <TypingEffect bg="bg-earth-yellow-100" height="h-7 lg:h-8">
              {[lang.titleTwo, lang.titleThree]}
            </TypingEffect>
            {activeLang === "id" && `${" "}${lang.different}`}
          </span>
          .{" "}
        </h2>
        <div className="flex items-center flex-col lg:flex-row justify-center gap-4">
          {worksData.map((data, index) => {
            return (
              <Item
                key={index}
                image={data.image}
                name={data.name}
                from={data.from}
                title={data.title}
                slug={data.slug}
                to={data.to}
                description={lang[data.id as keyof typeof lang]}
                isActive={active === index}
                onClick={() => setActive(active === index ? -1 : index)}
              ></Item>
            );
          })}
        </div>
        <p className="mt-10 text-center text-earth-yellow-100">*{lang.click}</p>
      </motion.div>
    </SectionWrapper>
  );
};

export default Works;
