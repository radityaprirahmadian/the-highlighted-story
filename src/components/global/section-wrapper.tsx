import { ReactElement, RefObject, useEffect } from "react";
import useActiveSection from "@/store/use-active-section";
import sectionSettings from "@/constant/section-settings";

const navbarHeight = 80;
const SectionWrapper = ({
  parentRef,
  elementRef,
  children,
  sectionNumber,
}: {
  parentRef: RefObject<HTMLElement>;
  elementRef: RefObject<HTMLElement>;
  children: ReactElement;
  sectionNumber: number;
}) => {
  const setActiveSection = useActiveSection((state) => state.setActiveSection);
  const activeSection = useActiveSection((state) => state.activeSection);

  useEffect(() => {
    const handleScroll = () => {
      if (parentRef.current && elementRef.current) {
        // Hitung jarak antara bagian atas section2 dan bagian atas scrollableDiv
        const sectionDiv = elementRef.current.getBoundingClientRect().top;
        const scrollableDivTop = parentRef.current.getBoundingClientRect().top;

        // Periksa apakah bagian atas section2 sudah menyentuh bagian atas scrollableDiv
        if (activeSection.no === sectionNumber - 1 && sectionDiv - navbarHeight <= scrollableDivTop) {
          setActiveSection({ no: sectionNumber, title: sectionSettings[sectionNumber].title });
        }

        if (activeSection.no === sectionNumber && sectionDiv - navbarHeight > scrollableDivTop) {
          setActiveSection({ no: sectionNumber - 1, title: sectionSettings[sectionNumber - 1].title });
        }
      }
    };

    // Tambahkan event listener untuk scroll
    const scrollableDiv = parentRef.current;
    if (scrollableDiv) {
      scrollableDiv.addEventListener("scroll", handleScroll);
    }

    // Hapus event listener ketika komponen tidak lagi diperlukan
    return () => {
      if (scrollableDiv) {
        scrollableDiv.removeEventListener("scroll", handleScroll);
      }
    };
  }, [activeSection.no]);

  return children;
};

export default SectionWrapper;
