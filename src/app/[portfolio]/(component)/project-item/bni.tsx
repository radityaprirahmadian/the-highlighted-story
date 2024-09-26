"use client";

import useActiveLanguage from "@/hooks/use-active-language";
import { useMemo } from "react";
import Content from "../content";
import bniContents from "@/data/projects/bni";

const BNI = () => {
  const { bni: lang } = useActiveLanguage();

  const contents = useMemo(() => {
    return bniContents.map((item) => ({ ...item, description: lang[item.id as keyof typeof lang] }));
  }, [lang]);

  return <Content contents={contents}></Content>;
};

export default BNI;
