"use client";

import useActiveLanguage from "@/hooks/use-active-language";
import { useMemo } from "react";
import Content from "../content";
import plnContents from "@/data/projects/pln";

const PLN = () => {
  const { pln: lang } = useActiveLanguage();

  const contents = useMemo(() => {
    return plnContents.map((item) => ({ ...item, description: lang[item.id as keyof typeof lang] }));
  }, [lang]);

  return <Content contents={contents}></Content>;
};

export default PLN;
