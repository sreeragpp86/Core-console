'use client';

import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';

export function Nav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const navContainerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const isHome = pathname === '/';

  const links = [
    { href: isHome ? '#about' : '/#about', label: 'About' },
    { href: isHome ? '#projects' : '/#projects', label: 'Projects' },
    { href: isHome ? '#contact' : '/#contact', label: 'Contact' },
    { href: '/resume', label: 'Resume' },
  ];

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Close on outside click or touch
  useEffect(() => {
    if (!isOpen) return;
    const handleOutside = (e: MouseEvent | TouchEvent) => {
      if (navContainerRef.current && !navContainerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('touchstart', handleOutside);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('touchstart', handleOutside);
    };
  }, [isOpen]);

  // Hide the portfolio nav on Resume page (placed after all hooks to prevent React hook order mismatch)
  if (pathname === '/resume') return null;

  return (
    <header ref={navContainerRef} className="sticky top-0 z-50 border-b border-black/5 bg-bg/80 backdrop-blur-md dark:border-white/10">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 md:px-12 lg:px-24" aria-label="Primary">
        <Link
          href={isHome ? '#main-content' : '/'}
          onClick={() => setIsOpen(false)}
          className="text-sm font-bold tracking-tight text-primary hover:opacity-80 transition-opacity"
        >
          Sreerag P P
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {links.map((l) => {
            const isResume = l.href === '/resume';
            const isActive = isResume && pathname === '/resume';

            return (
              <Link
                key={l.label}
                href={l.href}
                className={`transition-colors ${
                  isActive
                    ? 'text-primary font-bold'
                    : 'text-secondary hover:text-primary'
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <ThemeToggle />
        </div>

        {/* Mobile Navigation Controls */}
        <div className="flex md:hidden items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation-menu"
            data-neu-btn=""
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-surface text-primary shadow-sm transition-colors hover:border-accent-primary/40 dark:border-white/10"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation-menu"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.98 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.2, ease: 'easeOut' }}
            className="md:hidden border-b border-black/5 bg-surface/95 px-4 py-4 shadow-xl backdrop-blur-xl dark:border-white/10"
          >
            <div className="mx-auto flex flex-col space-y-1 max-w-7xl">
              {links.map((l) => {
                const isResume = l.href === '/resume';
                const isActive = isResume && pathname === '/resume';

                return (
                  <Link
                    key={l.label}
                    href={l.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-accent-primary/10 text-accent-primary font-semibold'
                        : 'text-secondary hover:bg-black/5 hover:text-primary dark:hover:bg-white/5'
                    }`}
                  >
                    <span>{l.label}</span>
                    {isResume && (
                      <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded-full bg-accent-primary/15 text-accent-primary">
                        CV
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
