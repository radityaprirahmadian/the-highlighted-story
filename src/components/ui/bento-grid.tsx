"use client";

import useActiveLanguage from "@/hooks/use-active-language";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";
import { useRouter } from "next/navigation";

export const BentoGrid = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[23rem] grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  tech,
  description,
  background,
  header,
  slug,
}: {
  className?: string;
  background?: string;
  tech?: string[];
  slug: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  const controls = useAnimation();
  const router = useRouter();

  const { project: lang } = useActiveLanguage();
  return (
    <div className={cn("row-span-1 relative dark:bg-black dark:border-white/[0.2] ", className)}>
      <motion.div
        initial={{ x: -9, y: -9 }}
        whileHover={{ x: 0, y: 0, transition: { ease: "circInOut", duration: 0.2, delay: 0.01 } }}
        className={cn(`relative z-10 p-4 border-3 h-full border-black`, background)}
        onMouseOver={() => controls.start("hovered")}
        onMouseLeave={() => controls.start("unhovered")}
      >
        <motion.div
          className="absolute left-0 right-0 bottom-0 top-0 flex items-center justify-center"
          initial={{ background: "rgba(0,0,0,0)", opacity: 0 }}
          whileHover={{ background: "rgba(0,0,0,0.2)", opacity: 1, transition: { ease: "circOut", duration: 0.2 } }}
        >
          <div className="relative cursor-pointer" onClick={() => router.push(`/projects?type=${slug}`)}>
            <motion.div
              initial={{ x: -5, y: -5 }}
              whileHover={{ x: 0, y: 0, transition: { ease: "circInOut", duration: 0.2, delay: 0.01 } }}
              className="px-6 py-2 z-10 relative text-md border-black border-3 bg-pumpkin-100 text-black"
            >
              {lang.detail}
            </motion.div>
            <div className="absolute w-full h-full bg-black z-0 top-0 left-0"></div>
          </div>
        </motion.div>
        <div className="flex flex-col justify-between flex-wrap h-full">
          {header}
          <div>
            <div className="font-normal text-lg lg:text-xl mt-6">{title}</div>
            <div className="font-normal text-xs lg:text-xs mt-3">{description}</div>
            <div className="mt-4 flex flex-wrap gap-1">
              {tech?.map((item, i) => {
                return (
                  <div key={i} className="bg-light-orange-80 border-3 text-black text-xs border-black px-2 py-1">
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="absolute w-full h-full border-black border-3 bg-earth-yellow-100 z-0 top-0 left-0"
        animate={controls}
      ></motion.div>
    </div>
  );
};
