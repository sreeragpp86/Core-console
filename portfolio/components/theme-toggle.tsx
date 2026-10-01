"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

// Both icons render on the server; CSS picks the right one, so there is no flash or hydration mismatch.
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-secondary transition-colors hover:text-primary"
    >
      <Sun className="hidden h-4 w-4 dark:block" />
      <Moon className="h-4 w-4 dark:hidden" />
    </button>
  );
}
