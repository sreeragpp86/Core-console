import { ThemeToggle } from "./theme-toggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-bg/80 backdrop-blur-md dark:border-white/10">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 md:px-12 lg:px-24" aria-label="Primary">
        <a href="#top" className="text-sm font-bold tracking-tight text-primary hover:opacity-80 transition-opacity">
          Sreerag P P
        </a>
        <div className="flex items-center gap-4 sm:gap-6 text-sm font-medium">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-secondary transition-colors hover:text-primary">
              {l.label}
            </a>
          ))}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
