"use client";

import useActiveLanguage from "@/hooks/use-active-language";
import { useMemo } from "react";
import Content from "../content";
import docheckContents from "@/data/works/docheck";

const Docheck = () => {
  const { docheck: lang } = useActiveLanguage();

  const contents = useMemo(() => {
    return docheckContents.map((item) => ({ ...item, description: lang[item.id as keyof typeof lang] }));
  }, [lang]);

  return <Content contents={contents}></Content>;
};

export default Docheck;
