import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";

const Item = ({
  index,
  displayedData,
}: {
  index: number;
  displayedData: { text: string; name: string; position: string; linkedIn: string };
}) => {
  const control = useAnimation();
  return (
    <motion.div
      key={index}
      className={cn(
        "border-black border-2 col-span-3 rounded-md p-4 flex gap-2 flex-col justify-between relative",
        index % 2 === 0 ? "row-span-1" : "row-span-2",
        displayedData ? "opacity-100 bg-earth-yellow-100" : "opacity-60 bg-white"
      )}
    >
      {displayedData ? (
        <>
          <div className="text-md">
            <p dangerouslySetInnerHTML={{ __html: `&ldquo;${displayedData.text}&rdquo;` }}></p>
          </div>
          <div className="relative text-sm mt-3">
            <Link href={displayedData.linkedIn} target="_blank" className="flex items-center gap-2 cursor-pointer">
              {displayedData.name}{" "}
              <span>
                <Image src={"/linkedin.png"} alt="github" width="15" height="15" />
              </span>
            </Link>
            <i className="text-xs">{displayedData.position}</i>
          </div>
        </>
      ) : (
        <>
          <div>
            <div className="bg-gray-200 h-5 w-full rounded-md"></div>
            {index % 2 !== 0 ? (
              <>
                <div className="bg-gray-200 h-5 w-full mt-2 rounded-md"></div>
                <div className="bg-gray-200 h-5 w-full mt-2 rounded-md"></div>
              </>
            ) : null}
          </div>
          <div className={cn(index % 2 === 0 ? "mt-3" : "")}>
            <div className={cn("bg-gray-200 h-5 w-8/12 rounded-md mb-3")}></div>
            <div className={cn("bg-gray-200 h-5 w-5/12 rounded-md")}></div>
          </div>
          <div className="absolute bg-[rgba(0,0,0,0.2)] top-0 left-0 bottom-0 right-0 flex items-center justify-center">
            <div className="font-bold text-2xl">LOCKED</div>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default Item;
