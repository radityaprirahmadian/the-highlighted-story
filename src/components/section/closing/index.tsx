import { motion } from "framer-motion";
import React, { useRef } from "react";
import SectionWrapper from "@/components/global/section-wrapper";
import Link from "next/link";

const Closing = ({ parentRef }: { parentRef: any }) => {
  const sectionRef = useRef(null);

  return (
    <SectionWrapper parentRef={parentRef} sectionNumber={7} elementRef={sectionRef}>
      <motion.div
        ref={sectionRef}
        id="section-4"
        className="bg-light-orange-50 px-10 pt-48 lg:px-56 lg:pt-60 lg:pb-24 w-full h-[90vh]"
      >
        <div className="text-center text-xl lg:text-3xl text-black">
          Great things are built by{" "}
          <span className="py-1 px-2 bg-carribean-10 text-white">solving small problems with precision and care</span>
          . <br />
          Want to bring this mindset to your team?
        </div>
        <motion.div
          className="relative mt-10 w-fit mx-auto h-fit"
          whileTap={{
            scale: 0.9,
            transition: { type: "spring", stiffness: 500, damping: 0.2 },
          }}
        >
          <div className="border rounded-md relative z-10 text-xl lg:text-3xl text-white border-black bg-pumpkin-40 hover:bg-pumpkin-100 cursor-pointer">
            <Link
              href="https://www.linkedin.com/in/radityaprirahmadian/"
              target="_blank"
              className="inline-block py-3 px-24 "
            >
              YES!
            </Link>
          </div>
          <div className="absolute w-full h-full rounded-md bg-black z-0 left-2 top-2"></div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Closing;
