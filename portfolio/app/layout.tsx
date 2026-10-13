import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppThemeProvider } from "@/components/ThemeProvider";
import { Nav } from "@/components/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sreerag P P | Full-Stack Developer & CTO",
  description: "Developer portfolio of Sreerag P P, Full-Stack Developer & CTO @ Infocyle.",
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
          <Nav />
          {children}
        </AppThemeProvider>
      </body>
    </html>
  );
}
