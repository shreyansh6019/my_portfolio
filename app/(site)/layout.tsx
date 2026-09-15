import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { siteConfig } from "@/config/sitemap";

import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import { personStructuredData } from "@/lib/structured-data";

const ScrollProgress = dynamic(
  () => import("@/components/layout/ScrollProgress")
);

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// const inter = Inter({
//   subsets: ["latin"],
//   display: "swap",
// });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },

  description:
    siteConfig.description,

  applicationName: "Shreyansh Portfolio",

  keywords: [
    "Shreyansh Nigam",
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Portfolio",
    "Redux Toolkit",
    "Redux Saga",
    "Tailwind CSS",
    "Web Performance",
    "Frontend Engineer",
  ],

  authors: [
    {
      name: siteConfig.name,
    },
  ],

  creator: siteConfig.name,

  publisher: siteConfig.name,

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.siteName,

    title: siteConfig.title,

    description:
      "Frontend Developer specializing in React, Next.js, TypeScript, and modern frontend architecture.",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shreyansh Nigam Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: siteConfig.title,

    description: siteConfig.description,

    images: ["/og-image.png"],
  },

  icons: {
    icon: [
      // { url: "/favicon.ico" },
      { url: "/icon.svg" },
    ],
    // apple: [
    //   { url: "/apple-icon.png", sizes: "180x180" },
    // ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personStructuredData),
          }}
        />
        <ThemeProvider>
          <ScrollProgress />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}