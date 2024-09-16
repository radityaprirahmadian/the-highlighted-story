import SectionWrapper from "@/components/global/section-wrapper";
import useActiveSection from "@/store/use-active-section";
import { cn } from "@/lib/utils";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import Item from "./item";

const data = [
  {
    id: 2,
    name: "Malik Zulfikar Gantina",
    text: "He excels at <span class='py-1 px-2 bg-pumpkin-100 font-normal text-white'>identifying the root cause of issues</span>, enabling QA teams to quickly understand and address problems.",
    position: "Quality Assurance Engineer at Krom Bank",
    linkedIn: "https://www.linkedin.com/in/malikzulfikar/",
  },
  {
    id: 6,
    name: "Zaenal Muttaqien",
    text: "Has an exceptional ability to <span class='py-1 px-2 bg-pumpkin-100 font-normal text-white'>understand briefs clearly</span>, and his strong communication skills combined with his deep knowledge of Frontend Web Development make it easy for the team to execute tasks efficiently.",
    position: "Project Manager at PLABS.ID",
    linkedIn: "https://www.linkedin.com/in/zaenal-muttaqien/",
  },
  {
    id: 11,
    name: "Ardiansyah Purwanto",
    text: "magni dolores eos qui ratione vest, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi",
    position: "Senior Frontend Developer at Sinarmas",
    linkedIn: "https://www.linkedin.com/in/malikzulfikar/",
  },
  {
    id: 9,
    name: "Ayi Muhammad Iqbal Nasuha",
    text: "Always understanding!",
    position: "Senior Software Engineer at FAR Capital",
    linkedIn: "https://www.linkedin.com/in/malikzulfikar/",
  },
  {
    id: 1,
    name: "Bariq Mbani",
    text: "Lorem ipsum cing elit, sed do eiusmod tempor i",
    position: "API Developer at Hitachi Channel Solution",
    linkedIn: "https://www.linkedin.com/in/malikzulfikar/",
  },
  {
    id: 7,
    name: "David Ferdinand Imanuel Manurung",
    text: "He has a  <span class='py-1 px-2 bg-pumpkin-100 font-normal text-white'>great eye for detail</span>, and his focus on delivering each component efficiently made everything run smoothly.",
    position: "Software Engineer at Autobahn Security",
    linkedIn: "https://www.linkedin.com/in/davidfim/",
  },
  {
    id: 8,
    name: "Rais Sabilullah",
    text: "Radit constantly  <span class='py-1 px-2 bg-pumpkin-100 font-normal text-white'>seeking out new technologies and knowledge</span>, always eager to learn and stay ahead in the field. He also dedicated hardworker to achieve outstanding result",
    position: "Software Engineer at Biteship",
    linkedIn: "https://www.linkedin.com/in/muhammad-rais-sabilullah/",
  },
  {
    id: 12,
    name: "Anugerah Prima Bagaskara",
    text: "He has been both <span class='py-1 px-2 bg-pumpkin-100 font-normal text-white'>a coach and a trusted companion</span>, guiding me from college through my entire journey into Frontend Development.",
    position: "Frontend Developer at PT Neural Technologies Indonesia",
    linkedIn: "https://www.linkedin.com/in/bagasapk/",
  },
];

const Recommendations = ({ parentRef }: { parentRef: any }) => {
  const sectionRef = useRef(null);

  return (
    <SectionWrapper parentRef={parentRef} sectionNumber={5} elementRef={sectionRef}>
      <motion.div
        ref={sectionRef}
        id="section-4"
        className="bg-carribean-20 text-black py-10 lg:py-48 px-10 w-full h-fit"
      >
        <div className="grid gap-2 lg:grid-cols-12 lg:grid-rows-6 w-full justify-center">
          {[...new Array(12)].map((_, index) => {
            const displayedData = data.filter((item) => item.id === index + 1)[0];
            return <Item index={index} displayedData={displayedData} key={index}></Item>;
          })}
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Recommendations;
