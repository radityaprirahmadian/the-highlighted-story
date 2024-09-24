"use client";

import Avana from "@/app/[portfolio]/(component)/work-item/avana";

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
      component: <Avana />,
    },
    [workType.rekalogi.slug]: {
      name: workType.rekalogi.text,
      component: <Avana />,
    },
    [workType.lerero.slug]: {
      name: workType.lerero.text,
      component: <Avana />,
    },
  };

  const availableProjects = {
    [projectType.masjidRamahKemenag.slug]: {
      name: projectType.masjidRamahKemenag.text,
      component: <Avana />,
    },
    [projectType.plnIconPlus.slug]: {
      name: projectType.plnIconPlus.text,
      component: <Avana />,
    },
    [projectType.bniBlueBirdTraveloka.slug]: {
      name: projectType.bniBlueBirdTraveloka.text,
      component: <Avana />,
    },
    [projectType.ppbs.slug]: {
      name: projectType.ppbs.text,
      component: <Avana />,
    },
    [projectType.lereroLMS.slug]: {
      name: projectType.lereroLMS.text,
      component: <Avana />,
    },
    [projectType.simonevKemenko.slug]: {
      name: projectType.simonevKemenko.text,
      component: <Avana />,
    },
    [projectType.avana.slug]: {
      name: projectType.avana.text,
      component: <Avana />,
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
