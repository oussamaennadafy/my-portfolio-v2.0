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
  const theme: any = JSON.parse(localStorage?.getItem("theme"))?.state?.theme || getBrowserDefaultTheme();
  return theme;
};

export const useTheme = create(
  persist<themeStoreType>(
    (set, get) => ({
      theme: getInitialUserTheme(),
      setTheme: (newTheme) => {
        // get html element
        const htmlElement = document.getElementsByTagName("html").item(0);

        // get current theme
        const currentTheme = get().theme;

        // re-paint the ui for the user
        htmlElement.classList.replace(currentTheme, newTheme);

        // update store data
        set({ theme: newTheme });
      },
      toggleTheme: () => {
        // get html element
        const htmlElement = document.getElementsByTagName("html").item(0);


        // get current theme
        const currentTheme = get().theme;

        // derived toggled theme
        const newTheme = currentTheme === "light" ? "dark" : "light";

        // re-paint the ui for the user
        htmlElement.classList.replace(currentTheme, newTheme);

        console.log({ currentTheme, newTheme });

        // update store data
        set({ theme: newTheme });
      },
    }),
    {
      name: 'theme', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    },
  ),
)