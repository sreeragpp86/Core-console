"use client";
import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  href?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export const MagneticButton = ({
  children,
  className,
  strength = 1,
  href,
  target,
  rel,
  type = "button",
  disabled,
  onClick,
  ...props
}: MagneticButtonProps) => {
  const ref = useRef<HTMLButtonElement & HTMLAnchorElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    // Calculate distance from center
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;

    // Limit the movement
    x.set(deltaX * 0.2 * strength);
    y.set(deltaY * 0.2 * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.slice(1);
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
      }
    }
    onClick?.(e);
  };

  const commonClasses = cn(
    "relative inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 active:scale-95 cursor-pointer select-none",
    "bg-primary text-bg hover:opacity-90",
    className
  );

  if (href) {
    return (
      <motion.a
        ref={ref}
        href={href}
        target={target}
        rel={rel}
        onClick={handleClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ x: springX, y: springY }}
        className={commonClasses}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref}
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={commonClasses}
      {...props}
    >
      {children}
    </motion.button>
  );
};

