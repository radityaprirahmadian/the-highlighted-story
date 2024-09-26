"use client";

import useActiveLanguage from "@/hooks/use-active-language";
import { useMemo } from "react";
import Content from "../content";
import avanaDashboardContents from "@/data/projects/avana-dashboard";

const AvanaDashboard = () => {
  const { avanaDashboard: lang } = useActiveLanguage();

  const contents = useMemo(() => {
    return avanaDashboardContents.map((item) => ({ ...item, description: lang[item.id as keyof typeof lang] }));
  }, [lang]);

  return <Content contents={contents}></Content>;
};

export default AvanaDashboard;
