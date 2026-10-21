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

export const metadata: Metadata = {
  title: "Sreerag P P | Full-Stack Developer & CTO",
  description: "Developer portfolio of Sreerag P P, Full-Stack Developer & CTO @ Infocyle.",
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
