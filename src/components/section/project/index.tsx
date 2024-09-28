import { motion } from "framer-motion";
import React, { useRef } from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import SectionWrapper from "@/components/global/section-wrapper";
import Image, { StaticImageData } from "next/image";
import useActiveLanguage from "@/hooks/use-active-language";

import avanaDashboard from "@/../public/works/avana/avanadashboard.png";
import bni from "@/../public/projects/bni.png";
import lereroLms from "@/../public/lererolms.png";
import masjidRamah from "@/../public/masjid.png";
import pln from "@/../public/pln.png";
import ppbs from "@/../public/projects/ppbs.png";
import simonev from "@/../public/projects/simonev.png";

const ImageContainer = ({ src }: { src: StaticImageData }) => (
  <div className="flex flex-1 w-full min-h-40 md:min-h-10 bg-gradient-to-br overflow-hidden object-cover bg-earth-yellow-100 border-3 border-black">
    <Image src={src} width={600} height={50} alt="image" className="object-cover"></Image>
  </div>
);

const items = [
  {
    title: "Landing Page PLN Icon Plus",
    header: <ImageContainer src={pln} />,
    tech: ["Tailwind", "NextJS"],
    id: "pln",
    slug: "pln-icon-plus",
  },
  {
    title: "Masjid Ramah KEMENAG",
    header: <ImageContainer src={masjidRamah} />,
    tech: ["ReactJS", "Redux", "Tailwind"],
    id: "masjid",
    slug: "masjid-ramah-kemenag",
  },
  {
    title: "BNI X Bluebird & Traveloka",
    header: <ImageContainer src={bni} />,
    tech: ["NextJS", "Redux Toolkit"],
    id: "bni",
    slug: "bni-bluebird-traveloka",
  },
  {
    title: "Website Peminjaman Ruangan PPBS",
    header: <ImageContainer src={ppbs} />,
    tech: ["ReactJS", "Bootstrap"],
    id: "ppbs",
    slug: "website-peminjaman-ruangan-ppbs",
  },
  {
    title: "Lerero LMS",
    header: <ImageContainer src={lereroLms} />,
    tech: ["NextJS", "Bootstrap"],
    id: "lerero",
    slug: "lerero-lms",
  },
  {
    title: "SIMONEV KEMENKO PMK",
    header: <ImageContainer src={simonev} />,
    tech: ["ReactJS", "Bootstrap"],
    id: "kemenko",
    slug: "simonev-kemenko-pmk",
  },
  {
    title: "Avana Dashboard",
    header: <ImageContainer src={avanaDashboard} />,
    tech: ["ReactJS", "Redux", "Tailwind"],
    id: "avana",
    slug: "avana-dashboard",
  },
];

const Projects = ({ parentRef }: { parentRef: any }) => {
  const sectionRef = useRef(null);
  const { project: lang } = useActiveLanguage();

  return (
    <SectionWrapper parentRef={parentRef} sectionNumber={3} elementRef={sectionRef}>
      <motion.div
        ref={sectionRef}
        id="section-4"
        className="bg-earth-yellow-100  text-white py-24 md:pt-24 md:pb-32 lg:pt-32 lg:pb-48 px-6 lg:px-24 xl:px-40 w-full h-fit"
      >
        <h2
          className="mb-10 lg:mb-24 text-black text-center text-xl lg:text-3xl"
          dangerouslySetInnerHTML={{ __html: lang.title }}
        ></h2>

        <BentoGrid className=" mx-auto">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={lang[item.id as keyof typeof lang]}
              tech={item.tech}
              slug={item.slug}
              background={
                i % 3 === 0
                  ? "bg-earth-yellow-100 text-black"
                  : i % 2 === 0
                  ? "bg-falu-red-50 text-white"
                  : "bg-carribean-50"
              }
              header={item.header}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </motion.div>
    </SectionWrapper>
  );
};

export default Projects;
