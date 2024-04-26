/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/common/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/icons/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",
        transparentBackground: {
          500: "#f1f5f9cc",
          600: "#e2e8f099",
        },
        grayBackground: "#334155",
        borderBackground: "#e5e7eb",
      },
    },
  },
  plugins: [],
};
export default config;
