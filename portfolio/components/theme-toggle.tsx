"use client";
import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [targetTheme, setTargetTheme] = useState<"light" | "dark">("light");
  const [origin, setOrigin] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isAnimating) return;

    const nextTheme = isDark ? "light" : "dark";

    // Capture button center coordinates (top-right corner origin)
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    setOrigin({ x, y });
    setTargetTheme(nextTheme);

    // If user prefers reduced motion, switch directly
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTheme(nextTheme);
      return;
    }

    setIsAnimating(true);

    // Switch theme smoothly at the soft peak of the light wash (~320ms)
    const switchTimer = setTimeout(() => {
      setTheme(nextTheme);
    }, 320);

    // Silky cleanup after complete dissipation (~900ms)
    const finishTimer = setTimeout(() => {
      setIsAnimating(false);
    }, 900);

    return () => {
      clearTimeout(switchTimer);
      clearTimeout(finishTimer);
    };
  };

  // SSR fallback to prevent layout shift & hydration mismatch
  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl border border-black/5 bg-surface/50 text-secondary transition-colors dark:border-white/10"
      >
        <Sun className="hidden h-4 w-4 dark:block" />
        <Moon className="h-4 w-4 dark:hidden" />
      </button>
    );
  }

  return (
    <>
      <motion.button
        ref={buttonRef}
        type="button"
        aria-label="Toggle theme"
        onClick={handleToggle}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="group relative inline-flex h-9 w-9 items-center justify-center rounded-xl border border-black/5 bg-surface/80 text-secondary shadow-sm transition-all hover:bg-surface hover:text-primary hover:shadow dark:border-white/10"
      >
        {/* Subtle hover radiance */}
        <span
          className={`absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
            isDark ? "bg-amber-400/10" : "bg-indigo-500/10"
          }`}
        />

        {/* Animated Icons Container */}
        <div className="relative flex h-4 w-4 items-center justify-center">
          {/* Sun Icon (shown in dark mode to switch to light) */}
          <motion.div
            initial={false}
            animate={{
              scale: isDark ? 1 : 0,
              rotate: isDark ? 0 : 90,
              opacity: isDark ? 1 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 240,
              damping: 20,
              mass: 0.8,
            }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <Sun className="h-4 w-4 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.6)] dark:text-amber-300" />
          </motion.div>

          {/* Moon Icon (shown in light mode to switch to dark) */}
          <motion.div
            initial={false}
            animate={{
              scale: isDark ? 0 : 1,
              rotate: isDark ? -90 : 0,
              opacity: isDark ? 0 : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 240,
              damping: 20,
              mass: 0.8,
            }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <Moon className="h-4 w-4 text-indigo-500 drop-shadow-[0_0_8px_rgba(99,102,241,0.5)] dark:text-indigo-400" />
          </motion.div>
        </div>
      </motion.button>

      {/* Light Fading In from Corner Overlay */}
      {mounted &&
        isAnimating &&
        createPortal(
          <div
            className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden"
            aria-hidden="true"
          >
            {/* Luminous expanding wave originating from the corner switch */}
            <motion.div
              initial={{ scale: 0.15, opacity: 0 }}
              animate={{
                scale: [0.15, 1.4, 2.8],
                opacity: [0, 0.96, 0.9, 0],
              }}
              transition={{
                duration: 0.9,
                times: [0, 0.35, 0.55, 1],
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                position: "absolute",
                left: origin.x,
                top: origin.y,
                width: "140vmax",
                height: "140vmax",
                transform: "translate(-50%, -50%)",
                background:
                  targetTheme === "light"
                    ? "radial-gradient(circle, rgba(255, 255, 255, 0.98) 0%, rgba(254, 243, 199, 0.82) 22%, rgba(224, 231, 255, 0.55) 48%, rgba(250, 250, 250, 0.25) 75%, transparent 100%)"
                    : "radial-gradient(circle, rgba(9, 9, 11, 0.98) 0%, rgba(15, 23, 42, 0.88) 25%, rgba(49, 46, 129, 0.5) 52%, rgba(9, 9, 11, 0.25) 78%, transparent 100%)",
                filter: "blur(32px)",
                willChange: "transform, opacity",
              }}
            />

            {/* Radiant Corner Spark / Corona directly at the switch */}
            <motion.div
              initial={{ scale: 0.25, opacity: 0 }}
              animate={{
                scale: [0.25, 1.45, 2.1],
                opacity: [0, 0.95, 0],
              }}
              transition={{
                duration: 0.7,
                times: [0, 0.32, 1],
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                position: "absolute",
                left: origin.x,
                top: origin.y,
                width: "420px",
                height: "420px",
                transform: "translate(-50%, -50%)",
                background:
                  targetTheme === "light"
                    ? "radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(251, 191, 36, 0.75) 35%, rgba(245, 158, 11, 0.3) 60%, transparent 80%)"
                    : "radial-gradient(circle, rgba(99, 102, 241, 0.85) 0%, rgba(79, 70, 229, 0.45) 42%, transparent 75%)",
                filter: "blur(16px)",
                willChange: "transform, opacity",
              }}
            />
          </div>,
          document.body
        )}
    </>
  );
}
