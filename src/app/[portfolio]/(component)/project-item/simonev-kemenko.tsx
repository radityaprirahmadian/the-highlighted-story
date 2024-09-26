"use client";

import useActiveLanguage from "@/hooks/use-active-language";
import { useMemo } from "react";
import Content from "../content";
import simonevKemenkoContents from "@/data/projects/simonev-kemenko";

const SimonevKemenko = () => {
  const { simonevKemenko: lang } = useActiveLanguage();

  const contents = useMemo(() => {
    return simonevKemenkoContents.map((item) => ({ ...item, description: lang[item.id as keyof typeof lang] }));
  }, [lang]);

  return <Content contents={contents}></Content>;
};

export default SimonevKemenko;
