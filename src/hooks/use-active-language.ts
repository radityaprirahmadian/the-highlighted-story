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
import docheckLang from "@/lang/works/docheck";
import bniLang from "@/lang/projects/bni";
import avanaDashboardLang from "@/lang/projects/avana-dashboard";
import simonevKemenkoLang from "@/lang/projects/simonev-kemenko";
import ppbsLang from "@/lang/projects/ppbs";
import plnLang from "@/lang/projects/pln";
import masjidRamahLang from "@/lang/projects/masjid-ramah";
import lereroLMSLang from "@/lang/projects/lerero-lms";
import lereroLang from "@/lang/works/lerero";

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
    docheck: docheckLang[activeLang],
    bni: bniLang[activeLang],
    avanaDashboard: avanaDashboardLang[activeLang],
    simonevKemenko: simonevKemenkoLang[activeLang],
    ppbs: ppbsLang[activeLang],
    pln: plnLang[activeLang],
    masjidRamah: masjidRamahLang[activeLang],
    lereroLMS: lereroLMSLang[activeLang],
    lerero: lereroLang[activeLang],
    navbar: navbarLang[activeLang],
  };
};

export default useActiveLanguage;
