/* eslint-disable react-hooks/set-state-in-effect */

"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { flushSync } from "react-dom";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";

    // Compatibilidad con navegadores sin View Transitions
    const doc = document as Document & {
      startViewTransition?: (callback: () => void) => unknown;
    };

    if (!doc.startViewTransition) {
      setTheme(nextTheme);
      return;
    }

    doc.startViewTransition(() => {
      flushSync(() => {
        setTheme(nextTheme);
      });
    });
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Cambiar tema"
      className="
        rounded-full border border-border
        bg-card p-3 text-foreground
        transition-colors hover:bg-background
      "
    >
      {theme === "dark" ? (
        <Sun size={18} />
      ) : (
        <Moon size={18} />
      )}
    </button>
  );
}
