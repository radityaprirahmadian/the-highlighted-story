import useLanguage from "@/store/use-language";
import introductionLang from "@/lang/section/introduction";

const useActiveLanguage = () => {
  const activeLang = useLanguage((state) => state.activeLang);

  return {
    introduction: introductionLang[activeLang],
  };
};

export default useActiveLanguage;
