"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by waiting until mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-secondary/50 border border-border/40 animate-pulse" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-10 h-10 rounded-full flex items-center justify-center bg-secondary/30 hover:bg-secondary/70 border border-border/30 hover:border-primary/30 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? "dark" : "light"}
          initial={{ y: -10, opacity: 0, rotate: -45 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 10, opacity: 0, rotate: 45 }}
          transition={{ duration: 0.2 }}
          className="text-foreground"
        >
          {isDark ? (
            <Sun className="w-5 h-5 text-amber-400 fill-amber-400" />
          ) : (
            <Moon className="w-5 h-5 text-indigo-600 fill-indigo-600" />
          )}
        </motion.div>
      </AnimatePresence>
    </button>
  );
}
