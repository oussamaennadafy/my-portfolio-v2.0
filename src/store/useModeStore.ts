import { create } from 'zustand'

interface storeType {
  mode: "light" | "dark",
  setMode: (mode: "light" | "dark") => void
  toggleMode: () => void,
}

export const useModeStore = create<storeType>((set, get) => ({
  mode: "dark",
  setMode: (mode: "light" | "dark") => {
    const htmlElement = document.getElementsByTagName("html").item(0);
    mode === "light" ? htmlElement.classList.remove("dark") : htmlElement.classList.add("dark");
    set({ mode });
  },
  toggleMode: () => {
    const htmlElement = document.getElementsByTagName("html").item(0);
    htmlElement.classList.toggle("dark");
    const mode = get().mode
    set({ mode: mode === "light" ? "dark" : "light" });
  }
}));