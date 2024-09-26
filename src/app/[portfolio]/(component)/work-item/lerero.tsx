"use client";

import useActiveLanguage from "@/hooks/use-active-language";
import { useMemo } from "react";
import Content from "../content";
import LereroContents from "@/data/works/lerero";

const Lerero = () => {
  const { lerero: lang } = useActiveLanguage();

  const contents = useMemo(() => {
    return LereroContents.map((item) => ({ ...item, description: lang[item.id as keyof typeof lang] }));
  }, [lang]);

  return <Content contents={contents}></Content>;
};

export default Lerero;
