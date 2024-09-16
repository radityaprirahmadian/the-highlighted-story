"use client";
import { create } from "zustand";

export const langOptions = {
  id: "id",
  en: "en",
};

interface LanguageInterface {
  activeLang: string;
  setActiveLang: (active: string) => void;
}

const initialValue = {
  activeLang: (typeof window !== "undefined" ? window.localStorage.getItem("lang") : langOptions.en) as string,
};

const useLanguage = create<LanguageInterface>()((set) => ({
  ...initialValue,
  setActiveLang: (active) =>
    set(() => {
      localStorage.setItem("lang", active.toString());
      return { activeLang: active };
    }),
}));

export default useLanguage;
