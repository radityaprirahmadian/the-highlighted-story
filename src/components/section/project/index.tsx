import { motion } from "framer-motion";
import React, { useRef } from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import SectionWrapper from "@/components/global/section-wrapper";
import Image from "next/image";

const ImageContainer = ({ src }: { src: string }) => (
  <div className="flex flex-1 w-full min-h-40 md:min-h-14 bg-gradient-to-br rounded-lg overflow-hidden object-cover bg-earth-yellow-100 border-2 border-black">
    <Image src={src} width={600} height={100} alt="image" className="object-cover"></Image>
  </div>
);

const items = [
  {
    title: "Landing Page PLN Icon Plus",
    description: "Refactoring PLN Icon Plus landing page, with new implemented design.",
    header: <ImageContainer src={"/pln.png"} />,
    tech: ["Tailwind", "NextJS"],
    slug: "pln-icon-plus",
  },
  {
    title: "Masjid Ramah KEMENAG",
    description: "A platform for competition between mosque that nurtured by Kemenag.",
    header: <ImageContainer src={"/masjid.png"} />,
    tech: ["ReactJS", "Redux", "Tailwind"],
    slug: "masjid-ramah-kemenag",
  },
  {
    title: "BNI X Bluebird & Traveloka",
    description: "Integration between BNI Mobile with Bluebird & Traveloka API.",
    header: <ImageContainer src={"/bni.png"} />,
    tech: ["NextJS", "Redux Toolkit"],
    slug: "bni-bluebird-traveloka",
  },
  {
    title: "Website Peminjaman Ruangan PPBS",
    description: "A platform for booking room(s) in PPBS, one of the build in Universitas Padjadjaran.",
    header: <ImageContainer src={"/ppbs.png"} />,
    tech: ["ReactJS", "Bootstrap"],
    slug: "website-peminjaman-ruangan-ppbs",
  },
  {
    title: "Lerero LMS",
    description: "A Learning Management System platform that created by Lerero.",
    header: <ImageContainer src={"/lererolms.png"} />,
    tech: ["NextJS", "Bootstrap"],
    slug: "lerero-lms",
  },
  {
    title: "SIMONEV KEMENKO PMK",
    description: "System for Monitoring and Evaluating of Kemenko PMK.",
    header: <ImageContainer src={"/simonev.png"} />,
    tech: ["ReactJS", "Bootstrap"],
    slug: "simonev-kemenko-pmk",
  },
  {
    title: "Avana Dashboard",
    description: "Dashboard for managing online store, such as shipping, stocking, etc. Created by Avana.",
    header: <ImageContainer src={"/avanadashboard.png"} />,
    tech: ["ReactJS", "Redux", "Tailwind"],
    slug: "avana-dashboard",
  },
];

const Projects = ({ parentRef }: { parentRef: any }) => {
  const sectionRef = useRef(null);

  return (
    <SectionWrapper parentRef={parentRef} sectionNumber={3} elementRef={sectionRef}>
      <motion.div
        ref={sectionRef}
        id="section-4"
        className="bg-earth-yellow-100  text-white py-10 lg:py-40 w-full h-fit"
      >
        <BentoGrid className="px-10 lg:px-40 mx-auto">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              tech={item.tech}
              slug={item.slug}
              background={
                i % 3 === 0
                  ? "bg-light-orange-80 text-black"
                  : i % 2 === 0
                  ? "bg-persian-red-20 text-white"
                  : "bg-carribean-20"
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
