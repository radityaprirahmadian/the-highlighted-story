"use client";

import AvanaDashboard from "@/app/[portfolio]/(component)/project-item/avana-dashboard";
import BNI from "@/app/[portfolio]/(component)/project-item/bni";
import LereroLMS from "@/app/[portfolio]/(component)/project-item/lerero-lms";
import MasjidRamah from "@/app/[portfolio]/(component)/project-item/masjid-ramah";
import PLN from "@/app/[portfolio]/(component)/project-item/pln";
import PPBS from "@/app/[portfolio]/(component)/project-item/ppbs";
import SimonevKemenko from "@/app/[portfolio]/(component)/project-item/simonev-kemenko";
import Avana from "@/app/[portfolio]/(component)/work-item/avana";
import Docheck from "@/app/[portfolio]/(component)/work-item/docheck";
import Lerero from "@/app/[portfolio]/(component)/work-item/lerero";

import itemType from "@/constant/item-type";
import projectType from "@/constant/selected-projects";
import workType from "@/constant/selected-works";

const paramsType = "type";

const generateSelectedPortfolioType = ({
  params,
  searchParams,
}: {
  params: { portfolio: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const handleCheckType = () => {
    let slug;

    for (let key in searchParams) {
      if (key === paramsType) {
        slug = String(searchParams[key]).toLocaleLowerCase();
        break;
      }
    }

    return slug as string;
  };

  const availableWorks = {
    [workType.avana.slug]: {
      name: workType.avana.text,
      component: <Avana />,
    },
    [workType.docheck.slug]: {
      name: workType.docheck.text,
      component: <Docheck />,
    },
    [workType.rekalogi.slug]: {
      name: workType.rekalogi.text,
      component: <Avana />,
    },
    [workType.lerero.slug]: {
      name: workType.lerero.text,
      component: <Lerero />,
    },
  };

  const availableProjects = {
    [projectType.masjidRamahKemenag.slug]: {
      name: projectType.masjidRamahKemenag.text,
      component: <MasjidRamah />,
    },
    [projectType.plnIconPlus.slug]: {
      name: projectType.plnIconPlus.text,
      component: <PLN />,
    },
    [projectType.bniBlueBirdTraveloka.slug]: {
      name: projectType.bniBlueBirdTraveloka.text,
      component: <BNI />,
    },
    [projectType.ppbs.slug]: {
      name: projectType.ppbs.text,
      component: <PPBS />,
    },
    [projectType.lereroLMS.slug]: {
      name: projectType.lereroLMS.text,
      component: <LereroLMS />,
    },
    [projectType.simonevKemenko.slug]: {
      name: projectType.simonevKemenko.text,
      component: <SimonevKemenko />,
    },
    [projectType.avana.slug]: {
      name: projectType.avana.text,
      component: <AvanaDashboard />,
    },
  };

  const availablePathname = {
    [itemType.works.slug]: {
      name: itemType.works.text,
      availableItems: availableWorks,
    },
    [itemType.projects.slug]: {
      name: itemType.projects.text,
      availableItems: availableProjects,
    },
  };

  const selectedPortfolioType = availablePathname[params.portfolio];

  return { selectedPortfolioType, portfolioItem: handleCheckType() };
};

export default generateSelectedPortfolioType;
