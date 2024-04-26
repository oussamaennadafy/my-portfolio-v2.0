import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./home/components/Header";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "developer m9adew",
  description: "a powerfull developer that has the ability to develop good software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
