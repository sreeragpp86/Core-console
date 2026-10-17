import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-bg/80 backdrop-blur-md">
      <div className="relative flex flex-col items-center gap-4">
        {/* Pulsing Accent Glow with Animated Monogram */}
        <div className="relative flex h-16 w-16 items-center justify-center">
          <div className="absolute inset-0 animate-ping rounded-full bg-accent-primary/20 duration-1000" />
          <div className="absolute inset-0 animate-spin rounded-full border-2 border-accent-primary border-t-transparent" />
          <span className="font-mono text-sm font-bold tracking-tight text-primary">SP</span>
        </div>
        <p className="font-mono text-xs font-medium uppercase tracking-widest text-secondary animate-pulse">
          INITIALIZING...
        </p>
      </div>
    </div>
  );
}
