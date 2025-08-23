// AboutStore.js
import { create } from "zustand";

const useAboutStore = create((set) => ({
  AboutState: false,                     // default state
  showAbout: () => set({ AboutState: true }),  // update state
  hideAbout: () => set({ AboutState: false }), // update state
}));

export default useAboutStore;
