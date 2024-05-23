"use client"

import { Header } from '@/components/Header';
import clsx from 'clsx';
import { Inter, Lexend, Gochi_Hand } from 'next/font/google';
import '@/styles/globals.css';
import { ToastSlot } from '@/components/common/toasts';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { useTheme } from '@/store';
import { useEffect } from 'react';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
});

const gochiHand = Gochi_Hand({
  subsets: ['latin'],
  variable: '--font-gochi-hand',
  display: 'swap',
  weight: '400',
});

// export const metadata = {
//   title: {
//     template: '%s - oussama ennadafy',
//     default:
//       'oussama - Developer, freelancer, and general technology enthusiast',
//   },
// };

export default function RootLayout({ children }) {
  const theme = useTheme(state => state.theme);
  useEffect(() => {

    // const hours = new Date().getHours()
    // const isDayTime = hours > 6 && hours < 20;
    // console.log(isDayTime);

  }, [])
  return (
    <html className={`${theme}`} lang="en">
      <body
        className={clsx(
          'font-sans',
          inter.variable,
          lexend.variable,
          gochiHand.variable,
          "bg-white dark:bg-gray-950 antialiased"
        )}
      >
        <ToastSlot />
        <SpeedInsights />
        <Analytics />
        <Header />
        {children}
      </body>
    </html>
  )
};