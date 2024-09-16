"use client";

import React, { forwardRef, useEffect, useRef, useState } from "react";
import { Progress } from "@/components/ui/progress";
import Text from "./text";
import useInterval from "@/hooks/use-interval";
import { motion, AnimatePresence } from "framer-motion";
import StartButton from "./start";
import useActiveSection from "@/store/use-active-section";
import Introduction from "../introduction";
import Skills from "../skills";
import Projects from "../project";
import sectionSettings from "@/constant/section-settings";

// const ProgressLayout = forwardRef<HTMLDivElement, unknown>((props, ref) => {
//   const [value, setValue] = useState(0);
//   const [isOldVisitor, setIsOldVisitor] = useState<boolean>(false);

//   const setActiveSection = useActiveSection((state) => state.setActiveSection);
//   const activeSection = useActiveSection((state) => state.activeSection);

//   useInterval({ setState: setValue, intervalPer: 1, valueAdded: 1 / 10, stopWhen: value >= 110 });

//   useEffect(() => {
//     const isOld = JSON.parse(localStorage.getItem("old-visitor") as string) as boolean;
//     console.log(isOld);
//     setIsOldVisitor(isOld);
//   }, []);
//   return (
//     <>
//       {/* {!activeSection.no ? (
//         <div className="flex w-full items-center justify-center h-full">
//           <StartButton
//             onClick={() => setTimeout(() => setActiveSection({ no: 1, title: sectionOptions.INTRODUCTION }), 500)}
//           ></StartButton>
//         </div>
//       ) : null} */}
//       <AnimatePresence>
//         {value >= 110 && !activeSection.no ? (
//           <div className="flex w-full items-center justify-center h-full">
//             <StartButton
//               isStart={!isOldVisitor}
//               onClick={() => setTimeout(() => setActiveSection({ no: 1, title: sectionSettings[1].title }), 500)}
//             ></StartButton>
//           </div>
//         ) : null}
//       </AnimatePresence>

//       {!activeSection.no && value < 110 ? (
//         <div className="h-full flex items-center justify-center">
//           <motion.div
//             className={`flex-col  gap-4 w-6/12 items-center relative ${value >= 110 ? "hidden" : "flex"}`}
//             initial={{ opacity: 1 }}
//             animate={{ opacity: 0 }}
//             transition={{ ease: "easeInOut", duration: 0.3, delay: 12.5 }}
//           >
//             <Text value={value}></Text>

//             <div className="relative w-full">
//               <Progress value={value} />
//               <div className="absolute h-7 left-1 w-full overflow-hidden rounded-full bg-black top-1"></div>
//             </div>
//           </motion.div>
//         </div>
//       ) : null}
//     </>
//   );
// });

// export default ProgressLayout;
