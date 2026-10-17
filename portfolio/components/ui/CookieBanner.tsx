"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const COOKIE_STORAGE_KEY = "portfolio_cookie_consent";

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem(COOKIE_STORAGE_KEY);
      if (!consent) {
        // Subtle delayed entrance so it doesn't obstruct initial page render
        const timer = setTimeout(() => setShow(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // In case localStorage is blocked/sandboxed
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem(COOKIE_STORAGE_KEY, "accepted");
    } catch {}
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.aside
          role="region"
          aria-label="Cookie consent"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.95 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          data-neu-card=""
          className="fixed bottom-4 left-4 z-40 max-w-sm rounded-2xl border border-black/5 bg-surface/90 p-4 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-[#121214]/90"
        >
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs text-secondary leading-relaxed font-sans">
              This site uses minimal cookies for analytics.
            </p>
            <button
              type="button"
              onClick={handleAccept}
              data-neu-btn=""
              className="shrink-0 rounded-full px-3.5 py-1.5 text-xs font-mono font-medium text-primary hover:text-accent-primary transition-colors border border-black/5 dark:border-white/10 active:scale-95"
            >
              Accept
            </button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
