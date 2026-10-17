'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';

export function Nav() {
  const pathname = usePathname();

  // Hide the portfolio nav on Resume page
  if (pathname === '/resume') return null;

  const isHome = pathname === '/';

  const links = [
    { href: isHome ? '#about' : '/#about', label: 'About' },
    { href: isHome ? '#projects' : '/#projects', label: 'Projects' },
    { href: isHome ? '#contact' : '/#contact', label: 'Contact' },
    { href: '/resume', label: 'Resume' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-bg/80 backdrop-blur-md dark:border-white/10">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 md:px-12 lg:px-24" aria-label="Primary">
        <Link
          href={isHome ? '#main-content' : '/'}
          className="text-sm font-bold tracking-tight text-primary hover:opacity-80 transition-opacity"
        >
          Sreerag P P
        </Link>
        <div className="flex items-center gap-3 sm:gap-4 md:gap-6 text-sm font-medium">
          {links.map((l) => {
            const isResume = l.href === '/resume';
            const isActive = isResume && pathname === '/resume';

            return (
              <Link
                key={l.label}
                href={l.href}
                className={`transition-colors ${
                  isResume ? 'inline-block' : 'hidden sm:inline-block'
                } ${
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
      </nav>
    </header>
  );
}
