"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface CopyEmailButtonProps {
  className?: string;
  showText?: boolean;
  text?: string;
  copiedText?: string;
  email?: string;
}

export function CopyEmailButton({
  className,
  showText = true,
  text = "Copy Email",
  copiedText = "Copied!",
  email = "sreeragpp81@gmail.com",
}: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email to clipboard:", err);
    }
  };

  return (
    <motion.button
      type="button"
      onClick={handleCopy}
      whileTap={{ scale: 0.96 }}
      data-neu-btn=""
      title={`Copy ${email} to clipboard`}
      aria-label={`Copy ${email} to clipboard`}
      className={cn(
        "relative inline-flex items-center justify-center gap-2 rounded-xl px-3.5 py-2 text-xs font-mono font-medium transition-all duration-300",
        "border border-black/5 bg-surface text-secondary hover:text-primary dark:border-white/10",
        copied
          ? "border-emerald-500/50 text-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.25)]"
          : "hover:border-accent-primary/30",
        className
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        {copied ? (
          <motion.span
            key="check"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.6, opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="flex items-center gap-1.5 text-emerald-500 font-semibold"
          >
            <Check className="h-3.5 w-3.5" />
            {showText && <span>{copiedText}</span>}
          </motion.span>
        ) : (
          <motion.span
            key="copy"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.6, opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="flex items-center gap-1.5"
          >
            <Copy className="h-3.5 w-3.5 text-secondary" />
            {showText && <span>{text}</span>}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
