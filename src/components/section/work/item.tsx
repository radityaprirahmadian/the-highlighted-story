import { cn } from "@/lib/utils";
import React, { useEffect } from "react";
import { cubicBezier, motion, useAnimation, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Item = ({
  name,
  image,
  from,
  to,
  slug,
  title,
  description,
  isActive,
  onClick,
}: {
  name: string;
  image: string;
  from: string;
  title: string;
  to: string;
  slug: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
}) => {
  const controls = useAnimation();
  const router = useRouter();

  const isVertical = window.innerWidth <= 1024 && window.innerWidth > 768;
  const isSmallVertical = window.innerWidth <= 768;

  useEffect(() => {
    if (isVertical && isActive) controls.start("active-vertical");
    if (isVertical && !isActive) controls.start("inactive-vertical");
    if (isSmallVertical && isActive) controls.start("active-small-vertical");
    if (isSmallVertical && !isActive) controls.start("inactive-small-vertical");
    if (!isVertical && !isSmallVertical && isActive) controls.start("active");
    if (!isVertical && !isSmallVertical && !isActive) controls.start("inactive");
  }, [isVertical, isSmallVertical, isActive]);

  return (
    <motion.div
      animate={controls}
      variants={{
        active: {
          flexGrow: 1,
          filter: `brightness(1)`,
          transition: { ease: "circOut", duration: 0.2 },
        },
        ["active-vertical"]: {
          height: 450,
          filter: `brightness(1)`,
          transition: { ease: "circOut", duration: 0.2 },
        },
        ["inactive-vertical"]: {
          height: 128,
          filter: `brightness(70%)`,
          transition: { ease: "circOut", duration: 0.2 },
        },
        ["active-small-vertical"]: {
          height: 600,
          filter: `brightness(1)`,
          transition: { ease: "circOut", duration: 0.2 },
        },
        ["inactive-small-vertical"]: {
          height: 128,
          filter: `brightness(70%)`,
          transition: { ease: "circOut", duration: 0.2 },
        },
        inactive: {
          flexGrow: 0,
          height: "24rem",
          filter: `brightness(70%)`,
          transition: { ease: "circOut", duration: 0.2 },
        },
      }}
      initial={{ flexGrow: 0 }}
      onClick={onClick}
      className={cn(
        "relative w-full lg:w-[12%] xl:w-[10%] h-32 lg:h-96 cursor-pointer",
        !isActive ? "hover:!brightness-90" : ""
      )}
    >
      <div
        className={cn(
          `w-full h-full relative z-10 overflow-hidden rounded-md border-black border-2 bg-light-orange-90 text-black lg:pt-10 flex flex-col lg:flex-row items-start gap-10`
        )}
      >
        <div
          className={cn(
            "flex flex-row-reverse lg:items-start lg:flex-col justify-end lg:justify-between h-full w-full",
            isActive ? "lg:basis-3/12" : "",
            isSmallVertical && isActive ? "items-start" : "items-start"
          )}
        >
          <Image
            src={image}
            alt={name}
            width="200"
            height="200"
            className="max-w-fit md:h-auto w-7/12 md:w-[170px] lg:h-[60%] lg:w-auto object-cover object-left pl-4"
          ></Image>

          <motion.div
            className="p-2 w-full min-w-[60%] lg:min-w-fit"
            animate={controls}
            initial={{ x: 0 }}
            variants={{
              active: {
                x: -400,
                transition: { type: "spring", stiffness: 300, damping: 25, delay: 0.1 },
              },
              inactive: {
                x: 0,
                transition: { type: "spring", stiffness: 200, damping: 25, delay: 0.1 },
              },
              ["active-small-vertical"]: {
                x: -400,
                transition: { type: "spring", stiffness: 300, damping: 25, delay: 0.1 },
              },
              ["inactive-small-vertical"]: {
                x: 0,
                transition: { type: "spring", stiffness: 200, damping: 25, delay: 0.1 },
              },
              ["active-vertical"]: {
                x: -400,
                transition: { type: "spring", stiffness: 300, damping: 25, delay: 0.1 },
              },
              ["inactive-vertical"]: {
                x: 0,
                transition: { type: "spring", stiffness: 200, damping: 25, delay: 0.1 },
              },
            }}
          >
            {name}
          </motion.div>

          <motion.div
            className="text-lg md:text-2xl p-6 absolute top-0 lg:bottom-0 lg:top-auto right-0 left-0 w-6/12 xl:w-full"
            animate={controls}
            initial={{ x: -400 }}
            variants={{
              active: {
                x: 0,
                transition: { type: "spring", stiffness: 300, damping: 25, delay: 0.1 },
              },
              inactive: {
                x: -400,
                transition: { type: "spring", stiffness: 200, damping: 25 },
              },
              ["active-small-vertical"]: {
                x: 0,
                transition: { type: "spring", stiffness: 300, damping: 25, delay: 0.1 },
              },
              ["inactive-small-vertical"]: {
                x: -400,
                transition: { type: "spring", stiffness: 200, damping: 25 },
              },
              ["active-vertical"]: {
                x: 0,
                transition: { type: "spring", stiffness: 300, damping: 25, delay: 0.1 },
              },
              ["inactive-vertical"]: {
                x: -400,
                transition: { type: "spring", stiffness: 200, damping: 25 },
              },
            }}
          >
            {name}
            <br />
            <div className="text-sm md:text-lg">{title}</div>
            <div className="italic text-sm md:text-md">
              {from} - {to ? to : "Current"}
            </div>
          </motion.div>
        </div>

        {isActive ? (
          <motion.div
            className="basis-9/12 p-4 lg:pt-0 lg:pl-0 lg:pr-6 lg:pb-6 h-full flex flex-col justify-between items-end"
            animate={controls}
            initial={{ x: 1200 }}
            variants={{
              active: {
                x: 0,
                transition: { type: "spring", stiffness: 300, damping: 25, delay: 0.1 },
              },
              inactive: {
                x: 1200,
                transition: { type: "spring", stiffness: 200, damping: 25, delay: 0.1 },
              },
              ["active-vertical"]: {
                x: 0,
                transition: { type: "spring", stiffness: 300, damping: 25, delay: 0.1 },
              },
              ["inactive-vertical"]: {
                x: 1200,
                transition: { type: "spring", stiffness: 200, damping: 25, delay: 0.1 },
              },
              ["active-small-vertical"]: {
                x: 0,
                transition: { type: "spring", stiffness: 300, damping: 25, delay: 0.1 },
              },
              ["inactive-small-vertical"]: {
                x: 1200,
                transition: { type: "spring", stiffness: 200, damping: 25, delay: 0.1 },
              },
            }}
          >
            <div
              className="text-right text-sm md:text-lg lg:text-left"
              dangerouslySetInnerHTML={{ __html: description }}
            ></div>
            <motion.div
              className="relative w-fit mt-3 lg:mt-0"
              onClick={(e) => {
                e.stopPropagation();
              }}
              whileTap={{
                scale: 0.9,
                transition: { type: "spring", stiffness: 500, damping: 0.2 },
              }}
            >
              <div
                className="py-2 px-8 rounded-md border relative z-10 text-md text-white border-black bg-pumpkin-100 hover:bg-pumpkin-40 cursor-pointer"
                onClick={() => router.push(`/works?type=${slug}`)}
              >
                View Details
              </div>
              <div className="absolute w-full h-full rounded-md bg-black z-0 left-1 top-1"></div>
            </motion.div>
          </motion.div>
        ) : null}
      </div>
      <div className="absolute w-full rounded-md h-full bg-black z-0 left-1 top-1"></div>
    </motion.div>
  );
};

export default Item;
