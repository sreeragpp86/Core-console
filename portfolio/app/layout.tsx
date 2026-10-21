import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppThemeProvider } from "@/components/ThemeProvider";
import { Nav } from "@/components/nav";
import { SkipToContent } from "@/components/ui/SkipToContent";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";
import { BackToTop } from "@/components/ui/BackToTop";
import { CookieBanner } from "@/components/ui/CookieBanner";
import { BackgroundCanvas } from "@/components/ui/BackgroundCanvas";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sreerag.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sreerag P P | Full-Stack Developer & CTO",
    template: "%s | Sreerag P P",
  },
  description:
    "Developer portfolio of Sreerag P P — Chief Technology Officer @ Infocyle, Full-Stack Developer, and Distributed Systems Engineer.",
  keywords: [
    "Sreerag P P",
    "Sreerag",
    "Full-Stack Developer",
    "CTO",
    "Infocyle",
    "Software Engineer",
    "Next.js",
    "FastAPI",
    "Python",
    "React",
    "Portfolio",
  ],
  authors: [{ name: "Sreerag P P", url: siteUrl }],
  creator: "Sreerag P P",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Sreerag P P | Full-Stack Developer & CTO",
    description:
      "Full-Stack Developer & Tech Founder. Architecting high-performance systems and fluid user experiences.",
    siteName: "Sreerag P P",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Sreerag P P — Full-Stack Developer & CTO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sreerag P P | Full-Stack Developer & CTO",
    description:
      "Full-Stack Developer & Tech Founder. Architecting high-performance systems and fluid user experiences.",
    images: ["/opengraph-image.png"],
    creator: "@sreeragpp86",
  },
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
  verification: {
    google: "Jt6_pJh3w7JPvYDYIiS_6SnOW2kFv_v0X3gExgsyZCs",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Style Template: "neumorphic" (default) or "original".
  // Change data-style to "original" to switch back to the original style anytime.
  return (
    <html lang="en" data-style="neumorphic" suppressHydrationWarning>
      <body className={inter.className}>
        <AppThemeProvider>
          <SkipToContent />
          <ScrollProgressBar />
          <BackgroundCanvas />
          <Nav />
          {children}
          <BackToTop />
          <CookieBanner />
        </AppThemeProvider>
      </body>
    </html>
  );
}
