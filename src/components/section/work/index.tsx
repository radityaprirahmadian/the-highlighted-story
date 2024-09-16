import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import Item from "./item";
import SectionWrapper from "@/components/global/section-wrapper";

const worksData = [
  {
    image: "/rekalogi-4.png",
    name: "Rekalogi",
    title: "Project Manager Intern",
    from: "Mar 2019",
    to: "Jun 2019",
    slug: "rekalogi",
    description:
      "Rekalogi is a dynamic software house based in Bandung, where he had the opportunity to <span class='py-1 px-2 bg-carribean-10 text-white'>intern as a Project Manager</span>. During his time there, he gained hands-on experience in managing projects and learned about the <span class='py-1 px-2 bg-carribean-10 text-white'>result-based management system</span>. It was a pivotal experience that deepened his understanding of project workflows and effective outcome-driven strategies.",
  },
  {
    image: "/docheck.png",
    name: "DoCheck",
    from: "Mar 2021",
    title: "Frontend Web Developer",
    to: "Nov 2021",
    slug: "docheck",
    description:
      "At DoCheck, he built the  <span class='py-1 px-2 bg-carribean-10 text-white'>admin dashboard from the scratch</span> using <span class='py-1 px-2 bg-carribean-10 text-white'>React and TypeScript</span> to manage the to-do list app. He also managed and optimized the company profile on <span class='py-1 px-2 bg-carribean-10 text-white'>WordPress</span>, implementing <span class='py-1 px-2 bg-carribean-10 text-white'>SEO</span> strategies and integrating <span class='py-1 px-2 bg-carribean-10 text-white'>Google Analytics</span> to boost visibility and user engagement. His work not only streamlined backend operations but also elevated the company's online presence and performance.",
  },
  {
    image: "/avana.webp",
    name: "Avana",
    title: "Frontend Web Developer",
    from: "Mar 2022",
    to: "Jun 2023",
    slug: "avana",
    description:
      "At Avana, a social commerce company based in <span class='py-1 px-2 bg-carribean-10 text-white'>Malaysia</span>, he managed and enhanced <span class='py-1 px-2 bg-carribean-10 text-white'>3</span> websites using <span class='py-1 px-2 bg-carribean-10 text-white'>ReactJS, Redux, and Bulma</span> within a <span class='py-1 px-2 bg-carribean-10 text-white'>Scrum</span> framework with 2-week sprint cycles. He played a key role in <span class='py-1 px-2 bg-carribean-10 text-white'>integrating shipping</span> functionalities with third-party services and created a comprehensive component library using <span class='py-1 px-2 bg-carribean-10 text-white'>Storybook</span>. These contributions improved site performance and user experience.",
  },
  {
    image: "/lerero.png",
    name: "Lerero (The KPI Institute)",
    title: "Frontend Web Developer",
    from: "Apr 2023",
    to: "",
    slug: "lerero",
    description:
      "At Lerero, an educational company with bases in <span class='py-1 px-2 bg-carribean-10 text-white'>Romania and Australia</span>, he was part of the <span class='py-1 px-2 bg-carribean-10 text-white'>Scrum</span> development team. He was responsible for two websites; <span class='py-1 px-2 bg-carribean-10 text-white'>Learning Management System (LMS) and Marketplace</span>. He utilized <span class='py-1 px-2 bg-carribean-10 text-white'>Next.js and styled-components</span> in his work, and applied <span class='py-1 px-2 bg-carribean-10 text-white'>custom hooks</span> as a coding pattern to enhance functionality and maintainability.",
  },
];

const Works = ({ parentRef }: { parentRef: any }) => {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(-1);

  return (
    <SectionWrapper parentRef={parentRef} sectionNumber={4} elementRef={sectionRef}>
      <motion.div
        ref={sectionRef}
        id="section-4"
        className="bg-falu-red-60 text-white py-10 md:py-48 px-10 w-full h-fit"
      >
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
                description={data.description}
                isActive={active === index}
                onClick={() => setActive(active === index ? -1 : index)}
              ></Item>
            );
          })}
        </div>
        <p className="mt-10 text-center text-earth-yellow-100">*click to expand</p>
      </motion.div>
    </SectionWrapper>
  );
};

export default Works;
