"use client";

import useActiveLanguage from "@/hooks/use-active-language";
import { useMemo } from "react";
import Content from "../content";
import masjidRamahContents from "@/data/projects/masjid-ramah";

const MasjidRamah = () => {
  const { masjidRamah: lang } = useActiveLanguage();

  const contents = useMemo(() => {
    return masjidRamahContents.map((item) => ({ ...item, description: lang[item.id as keyof typeof lang] }));
  }, [lang]);

  return <Content contents={contents}></Content>;
};

export default MasjidRamah;
