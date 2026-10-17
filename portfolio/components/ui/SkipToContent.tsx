import React from "react";

export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:inline-flex focus:items-center focus:gap-2 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2.5 focus:text-xs focus:font-semibold focus:text-bg focus:shadow-2xl focus:outline-none focus:ring-2 focus:ring-accent-primary transition-transform duration-200"
    >
      Skip to main content
    </a>
  );
}
