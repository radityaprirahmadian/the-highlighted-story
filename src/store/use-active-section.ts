import { create } from "zustand";

interface ActiveSectionInterface {
  activeSection: {
    no: number;
    title: string;
  };
  previousSection: {
    no: number;
    title: string;
  };
  setActiveSection: (active: { no: number; title: string }) => void;
  setPreviousSection: (prev: { no: number; title: string }) => void;
  reset: () => void;
}

const initialValue = {
  activeSection: {
    no: 0,
    title: "",
  },
  previousSection: {
    no: 0,
    title: "",
  },
};

const useActiveSection = create<ActiveSectionInterface>()((set) => ({
  ...initialValue,
  setActiveSection: (active) =>
    set((state) => {
      if (state.activeSection.no !== active.no) {
        return { activeSection: active, previousSection: state.activeSection };
      } else {
        return { activeSection: active, previousSection: state.previousSection };
      }
    }),
  setPreviousSection: (prev) => set((state) => ({ ...state, previousSection: prev })),
  reset: () => set(initialValue),
}));

export default useActiveSection;
