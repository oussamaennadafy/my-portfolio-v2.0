import type { Metadata } from "next";

export const appMetadata: Metadata = {
  metadataBase: new URL("https://oussama-ennadafy-v2.vercel.app"),
  title: {
    default: "Oussama Ennadafy - Full Stack Developer",
    template: "%s | Oussama Ennadafy",
  },
  description:
    "I'm Oussama Ennadafy, a passionate Full Stack Developer and Freelancer based in Morocco. I specialize in building modern, scalable, and user-focused applications with Next.js, Flutter, React Native, and more.",
  keywords: [
    "Oussama Ennadafy",
    "Full Stack Developer",
    "Next.js Portfolio",
    "React Native",
    "Flutter",
    "Freelance Developer Morocco",
    "Mobile Development",
    "Web Development",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "NestJS",
    "Prisma",
    "PostgreSQL",
  ],
  authors: [
    { name: "Oussama Ennadafy", url: "https://oussama-ennadafy-v2.vercel.app" },
  ],
  creator: "Oussama Ennadafy",
  publisher: "Oussama Ennadafy",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph for social sharing
  openGraph: {
    title: "Oussama Ennadafy | Full Stack Developer Portfolio",
    description:
      "Explore my portfolio showcasing projects, skills, and experience as a Full Stack Developer specialized in Next.js, React Native, Flutter, and scalable web/mobile solutions.",
    url: "https://oussama-ennadafy-v2.vercel.app/",
    siteName: "Oussama Ennadafy Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://oussama-ennadafy-v2.vercel.app/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Oussama Ennadafy - Full Stack Developer Portfolio Preview",
      },
    ],
  },

  // Twitter card (X)
  twitter: {
    card: "summary_large_image",
    title: "Oussama Ennadafy | Full Stack Developer",
    description:
      "Full Stack Developer portfolio built with Next.js, React Native, and Flutter. Explore my projects, skills, and experience.",
    creator: "@yourTwitterHandle", // if you have one
    images: ["https://oussama-ennadafy-v2.vercel.app/opengraph-image.png"],
  },

  // Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  // Manifest (PWA support if you add it)
  manifest: "/site.webmanifest",

  // Theme & Colors (for accessibility / UI)
  themeColor: "#0f172a",
  colorScheme: "dark light",

  // Alternates (for SEO, languages, canonical link)
  alternates: {
    canonical: "https://oussama-ennadafy-v2.vercel.app",
    languages: {
      "en-US": "https://oussama-ennadafy-v2.vercel.app/en",
      "fr-FR": "https://oussama-ennadafy-v2.vercel.app/fr",
    },
  },

  // App links (for deep linking if you add mobile apps later)
  appLinks: {
    ios: {
      url: "yourapp://",
      app_store_id: "123456789",
    },
    android: {
      package: "com.yourapp",
      app_name: "Oussama Portfolio",
    },
  },

  // Verification (for Google, Bing, etc.)
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};
