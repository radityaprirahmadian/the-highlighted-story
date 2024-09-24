"use client";

import { useEffect, useRef } from "react";

import sectionSettings from "@/constant/section-settings";
import useActiveSection from "@/store/use-active-section";

// component
import Navbar from "@/components/global/navbar";
import Closing from "@/components/section/closing";
import Contacts from "@/components/section/contact";
import Introduction from "@/components/section/introduction";
import ProgressLayout from "@/components/section/progress";
import Projects from "@/components/section/project";
import Recommendations from "@/components/section/recommendation";
import Skills from "@/components/section/skills";
import Works from "@/components/section/work";
import Onboarding from "@/components/section/onboarding";

const Index = () => {
  const scrollableDivRef = useRef(null);
  const tes = useRef<HTMLDivElement>(null);

  const activeSection = useActiveSection((state) => state.activeSection);
  const setActiveSection = useActiveSection((state) => state.setActiveSection);
  const setPreviousSection = useActiveSection((state) => state.setPreviousSection);

  useEffect(() => {
    setPreviousSection({ no: 0, title: "s" });

    const isOldVisitor = JSON.parse(localStorage.getItem("old-visitor") as string);
    if (isOldVisitor) {
      console.log("sdasda");
      setActiveSection({ no: 1, title: sectionSettings[1].title });
      // tes?.current?.scrollTo({ top: tes.current?.scrollTop + 500 });
    }
  }, [setPreviousSection, setActiveSection]);

  console.log(activeSection);
  return (
    <div
      className="bg-light-orange-50 h-full relative z-10  border-2 border-black overflow-y-auto overflow-x-hidden"
      ref={scrollableDivRef}
    >
      <Navbar></Navbar>
      {!activeSection.no ? (
        <Onboarding></Onboarding>
      ) : (
        <div className="w-full flex justify-center items-center flex-col" ref={tes}>
          <Introduction></Introduction>
          <Skills parentRef={scrollableDivRef}></Skills>
          <Projects parentRef={scrollableDivRef}></Projects>
          <Works parentRef={scrollableDivRef}></Works>
          <Recommendations parentRef={scrollableDivRef}></Recommendations>
          <Contacts parentRef={scrollableDivRef}></Contacts>
          <Closing parentRef={scrollableDivRef}></Closing>
        </div>
      )}
    </div>
  );
};

export default Index;
