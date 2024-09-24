"use clinet";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useRef, useState } from "react";

// component
import Item from "./item";
import SectionWrapper from "@/components/global/section-wrapper";
import TypingEffect from "@/components/global/typing-effect";

// hooks
import useActiveLanguage from "@/hooks/use-active-language";

// data
import skillsData from "@/data/skills";

const Skills = ({ parentRef }: { parentRef: any }) => {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(-1);
  const { skill: lang } = useActiveLanguage();

  return (
    <SectionWrapper parentRef={parentRef} sectionNumber={2} elementRef={sectionRef}>
      <motion.div
        ref={sectionRef}
        id="section-two"
        className="bg-carribean-60 text-white py-24 md:pt-24 md:pb-32 lg:pt-32 lg:pb-48 px-10 w-full h-fit"
      >
        <h2 className="text-lg lg:text-xl text-center xl:text-xl lg:mx-24 xl:mx-40">
          {lang.dedicate}{" "}
          <span className="text-xl lg:text-3xl py-1 px-2 lg:px-3 bg-light-orange-50 text-black">
            <TypingEffect bg="bg-black" height="h-7 lg:h-8">{`3-4 ${lang.year}`}</TypingEffect>
          </span>{" "}
          {lang.tobe}
        </h2>

        <h2
          className="text-lg lg:text-xl text-center xl:text-xl mt-5 lg:mx-24 xl:mx-40 mb-10 lg:mb-20"
          dangerouslySetInnerHTML={{ __html: lang.masteredSkill }}
        ></h2>

        <div className="flex items-start justify-center flex-col-reverse md:flex-row-reverse gap-10 lg:gap-20">
          <div className="md:sticky md:top-1/4 w-full md:basis-6/12 lg:basis-4/12 flex justify-end">
            <div className="relative w-full">
              <div className="bg-earth-yellow-100 aspect-[4/6] sm:aspect-[4/2] md:aspect-square relative z-10 border-black border-2 text-black p-4 md:p-6 overflow-y-auto">
                {active === -1 ? (
                  <div className="flex items-center justify-center w-full h-full p-4">
                    <div className="text-lg md:text-xl lg:text-2xl text-center flex items-center flex-col gap-5">
                      <div className="flex gap-4">
                        <Image
                          src="/left-arrow.png"
                          width="50"
                          height="20"
                          alt="left"
                          className="rotate-90 lg:rotate-0"
                        ></Image>
                        <Image
                          src="/left-arrow.png"
                          width="50"
                          height="20"
                          alt="left"
                          className="rotate-90 lg:rotate-0"
                        ></Image>
                        <Image
                          src="/left-arrow.png"
                          width="50"
                          height="20"
                          alt="left"
                          className="rotate-90 lg:rotate-0"
                        ></Image>
                      </div>
                      <p>{lang.choose}</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <h4 className="text-left text-lg md:text-2xl font-bold w-full">
                      {skillsData[active].title.toUpperCase()}
                    </h4>
                    <p
                      className="text-left text-md md:text-lg mt-1 md:mt-3"
                      dangerouslySetInnerHTML={{ __html: lang[skillsData[active].id as keyof typeof lang] }}
                    ></p>
                  </>
                )}
              </div>
              <div className="absolute w-full h-full bg-falu-red-10 border-black border-2 z-0 left-2 top-2"></div>
            </div>
          </div>

          <div className="w-full md:basis-6/12 lg:basis-4/12">
            <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-4 gap-4 w-full">
              {skillsData.map((skill, index) => {
                return (
                  <Item
                    key={index}
                    isActive={active === index}
                    onClick={() => (active !== index ? setActive(index) : setActive(-1))}
                    image={skill.image}
                  ></Item>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Skills;
