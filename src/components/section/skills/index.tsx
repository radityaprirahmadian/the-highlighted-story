"use clinet";
import { cn } from "@/lib/utils";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import Item from "./item";
import useActiveSection from "@/store/use-active-section";
import SectionWrapper from "@/components/global/section-wrapper";
import Image from "next/image";

const skillsData = [
  {
    image: "/react.png",
    title: "ReactJS",
    description:
      "For the past <span class='py-1 px-2 bg-pumpkin-100 font-normal text-white'>3-4 years</span> as a Frontend Web Developer, ReactJS has been his go-to tool, helping him build everything from sleek websites to complex dashboards. Whether it's simple projects or mind-bending challenges, ReactJS has been at the heart of his work.",
  },
  {
    image: "/next.png",
    title: "NextJS",
    description:
      "Next.js has been his favorite for <span class='py-1 px-2 bg-pumpkin-100 font-normal text-white'>the past 3 years</span>, offering the perfect balance of performance and flexibility. From building dynamic websites to SEO optimization, it's been a game-changer in his development process. Now, he's diving into the latest features of <span class='py-1 px-2 bg-pumpkin-100 font-normal text-white'>Next.js 14</span>, eager to explore its new capabilities and take his projects even further.",
  },
  {
    image: "/redux.png",
    title: "Redux",
    description:
      "His <span class='py-1 px-2 bg-pumpkin-100 font-normal text-white'>first dive into global state management</span> started with Redux, which he used during the <span class='py-1 px-2 bg-pumpkin-100 font-normal text-white'>first 2 years of his journey</span> as a Frontend Web Developer. What began as a simple tool for managing global state soon evolved into tackling more complex challenges, like RTK Query. It was helping him understand the deeper intricacies of state management.",
  },
  {
    image: "/tailwind.png",
    title: "TailwindCSS",
    description:
      "Lately, TailwindCSS has become his go-to framework and a new favorite, almost <span class='py-1 px-2 bg-pumpkin-100 font-normal text-white'>used in all his current projects</span>. Its utility-first approach allows him to build custom designs quickly and efficiently, without the limitations of traditional CSS frameworks.",
  },
  {
    image: "/typesript.png",
    title: "Typescript",
    description:
      "For <span class='py-1 px-2 bg-pumpkin-100 font-normal text-white'>the past 3 years</span>, TypeScript has been a cornerstone of his development toolkit. Its strong typing and robust type system have significantly improved code quality and maintainability.",
  },
  {
    image: "/bootstrap.png",
    title: "Bootstrap",
    description:
      "In the early days of his frontend journey, Bootstrap was his trusted toolkit. It provided a solid foundation for building responsive, visually appealing websites with ease. As he honed his skills, Bootstrap became more than just a framework—it was his introduction to structured, scalable design systems.",
  },
  {
    image: "/jest.jpg",
    title: "Jest (plus React Testing Library)",
    description:
      "For <span class='py-1 px-2 bg-pumpkin-100 font-normal text-white'>the past 2 years</span>, Jest has been his go-to testing framework. Paired with <span class='py-1 px-2 bg-pumpkin-100 font-normal text-white'>React Testing Library</span>, it’s streamlined his approach to writing reliable unit and integration tests. These tools give him the confidence that his code is solid and ready for production, ensuring each project is both high-quality and bug-free.",
  },
  {
    image: "/storybook.png",
    title: "Storybook",
    description:
      "Though he use Storybook <span class='py-1 px-2 bg-pumpkin-100 font-normal text-white'>less frequently</span>, he appreciate its value in his development process. It offers a powerful environment for building and testing UI components in isolation, helping him ensure consistency and design quality. When he do use it, Storybook enhances his workflow and adds a layer of confidence to his UI development.",
  },
  {
    image: "/zustand.png",
    title: "Zustand",
    description:
      "Zustand became <span class='py-1 px-2 bg-pumpkin-100 font-normal text-white'>the state management solution that made him move away from Redux</span>. Its simplicity and minimal boilerplate allow for a more intuitive and flexible approach to managing state. It’s fast, scalable, and has completely transformed the way he handle state in his applications.",
  },
  {
    image: "/react-query.png",
    title: "React Query",
    description:
      "React Query became <span class='py-1 px-2 bg-pumpkin-100 font-normal text-white'>his go-to</span> for data fetching and synchronization, leading him to <span class='py-1 px-2 bg-pumpkin-100 font-normal text-white'>move away from RTK Query</span>. Its powerful features for managing server state and caching, combined with a straightforward API, have streamlined his data handling and improved performance across his projects.",
  },
];

const Skills = ({ parentRef }: { parentRef: any }) => {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(-1);

  return (
    <SectionWrapper parentRef={parentRef} sectionNumber={2} elementRef={sectionRef}>
      <motion.div
        ref={sectionRef}
        id="section-two"
        className="bg-carribean-60 text-white py-24 md:py-32 lg:py-48 px-10 w-full h-fit"
      >
        <div className="flex items-start justify-center flex-col-reverse md:flex-row-reverse gap-10 lg:gap-20">
          <div className="md:sticky md:top-1/4 w-full md:basis-6/12 lg:basis-4/12 flex justify-end">
            <div className="relative w-full">
              <div className="bg-earth-yellow-100 aspect-[4/6] sm:aspect-[4/2] md:aspect-square rounded-md relative z-10 border-black border-2 text-black p-4 md:p-6 overflow-y-auto">
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
                      <p>CHOOSE THE ICON</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <h4 className="text-left text-lg md:text-2xl font-bold w-full">
                      {skillsData[active].title.toUpperCase()}
                    </h4>
                    <p
                      className="text-left text-md md:text-lg mt-1 md:mt-3"
                      dangerouslySetInnerHTML={{ __html: skillsData[active].description }}
                    ></p>
                  </>
                )}
              </div>
              <div className="absolute w-full h-full rounded-md bg-falu-red-10 border-black border-2 z-0 left-2 top-2"></div>
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
