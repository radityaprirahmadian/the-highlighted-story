"use client";

import useActiveLanguage from "@/hooks/use-active-language";
import { useMemo } from "react";
import Content from "../content";
import avanaContents from "@/data/works/avana";

const Avana = () => {
  const { avana: lang } = useActiveLanguage();

  const contents = useMemo(() => {
    return avanaContents.map((item) => ({ ...item, description: lang[item.id as keyof typeof lang] }));
  }, [lang]);

  return <Content contents={contents}></Content>;
};

export default Avana;
