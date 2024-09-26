"use client";

import useActiveLanguage from "@/hooks/use-active-language";
import { useMemo } from "react";
import Content from "../content";
import LereroLMSContents from "@/data/projects/lerero-lms";

const LereroLMS = () => {
  const { lereroLMS: lang } = useActiveLanguage();

  const contents = useMemo(() => {
    return LereroLMSContents.map((item) => ({ ...item, description: lang[item.id as keyof typeof lang] }));
  }, [lang]);

  return <Content contents={contents}></Content>;
};

export default LereroLMS;
