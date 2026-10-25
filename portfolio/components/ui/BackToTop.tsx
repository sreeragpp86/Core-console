"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronUp } from "lucide-react";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [footerInView, setFooterInView] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setFooterInView(entry.isIntersecting);
      },
      { root: null, threshold: 0.05 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
  };

  const show = isVisible && !footerInView;

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.85, y: 12 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.85, y: 12 }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.2, ease: "easeOut" }}
          data-neu-btn=""
          aria-label="Back to top"
          title="Scroll back to top"
          className="fixed z-40 flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-surface/90 text-primary shadow-lg backdrop-blur-md transition-colors hover:border-accent-primary/40 hover:text-accent-primary dark:border-white/10 dark:bg-[#121214]/90 right-4 sm:right-6 bottom-[calc(1rem+env(safe-area-inset-bottom,0px))] sm:bottom-6"
        >
          <ChevronUp className="h-4 w-4" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
