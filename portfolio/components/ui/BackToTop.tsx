"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 16 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          data-neu-btn=""
          aria-label="Back to top"
          title="Scroll back to top"
          className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-surface/90 text-primary shadow-lg backdrop-blur-md transition-colors hover:border-accent-primary/40 hover:text-accent-primary dark:border-white/10 dark:bg-[#121214]/90"
        >
          <ChevronUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
