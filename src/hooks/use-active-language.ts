"use client";

import useLanguage from "@/store/use-language";
import introductionLang from "@/lang/section/introduction";
import closingLang from "@/lang/section/closing";
import avanaLang from "@/lang/works/avana";
import skillLang from "@/lang/section/skills";
import navbarLang from "@/lang/navbar";
import projectLang from "@/lang/section/projects";
import workLang from "@/lang/section/works";
import impressionLang from "@/lang/section/impression";
import connectLang from "@/lang/section/connect";

const useActiveLanguage = () => {
  const activeLang = useLanguage((state) => state.activeLang);

  return {
    closing: closingLang[activeLang],
    introduction: introductionLang[activeLang],
    skill: skillLang[activeLang],
    project: projectLang[activeLang],
    work: workLang[activeLang],
    impression: impressionLang[activeLang],
    connect: connectLang[activeLang],
    avana: avanaLang[activeLang],
    navbar: navbarLang[activeLang],
  };
};

export default useActiveLanguage;
