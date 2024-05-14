"use client"

import getBrowserDefaultTheme from '@/utils/getBrowserDefaultTheme';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type themeType = "dark" | "light";

interface themeStoreType {
  theme: themeType,
  setTheme: (theme: themeType) => void,
  toggleTheme: () => void,
};

const getInitialUserTheme = (): themeType => {
  const theme: any = JSON.parse(localStorage?.getItem("theme")) || getBrowserDefaultTheme();
  return theme;
};

export const useTheme = create(
  persist<themeStoreType>(
    (set, get) => ({
      theme: getInitialUserTheme(),
      setTheme: (theme) => {
        // get html element
        const htmlElement = document.getElementsByTagName("html").item(0);

        // re-paint the ui for the user
        theme === "light" ? htmlElement.classList.remove("dark") : htmlElement.classList.add("dark");

        // update store data
        set({ theme });
      },
      toggleTheme: () => {
        // get html element
        const htmlElement = document.getElementsByTagName("html").item(0);

        // re-paint the ui for the user
        htmlElement.classList.toggle("dark");

        // get current theme
        const currentTheme = get().theme;

        // derived toggled theme
        const newTheme = currentTheme === "light" ? "dark" : "light"

        // update store data
        set({ theme: newTheme });
      },
    }),
    {
      name: 'theme-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    },
  ),
)
// export const useThemee = create<themeStoreType>((set, get) => ({
//   theme: getInitialUserTheme(),
//   setTheme: (theme: themeType) => {
//     // get html element
//     const htmlElement = document.getElementsByTagName("html").item(0);

//     // re-paint the ui for the user
//     theme === "light" ? htmlElement.classList.remove("dark") : htmlElement.classList.add("dark");

//     // update store data
//     set({ theme });

//     // sync localStorage with store data
//     localStorage.setItem("theme", JSON.stringify(theme));
//   },
//   toggleTheme: () => {

//     // sync localStorage with store data
//     localStorage.setItem("theme", JSON.stringify(newTheme));
//   }
// }));