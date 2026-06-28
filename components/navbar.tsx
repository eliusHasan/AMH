"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/technologies", label: "Tech" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Only the home page uses a transparent hero overlay navbar
  const isHomePage = pathname === "/";
  // Navbar is "dark/transparent mode" only on home page when not scrolled
  const isTransparent = isHomePage && !scrolled;

  // Monitor scroll for visual adjustments
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile navigation on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? "py-3 bg-transparent"
          : "py-2 bg-background/90 backdrop-blur-md border-b border-border/30 shadow-lg shadow-black/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-lg shadow-md shadow-primary/20 group-hover:scale-105 transition-transform duration-300">
              A
            </div>
            <span className={`font-heading font-extrabold text-xl tracking-tight transition-all duration-300 ${
              isTransparent ? "text-white" : "bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent"
            }`}>
              AMH <span className={isTransparent ? "font-light text-cyan-300" : "font-light text-primary"}>Info Tech</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-2 rounded-lg text-sm font-medium tracking-wide transition-colors duration-200 ${
                    isTransparent
                      ? "text-white/80 hover:text-white"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className={`absolute inset-0 rounded-lg -z-10 ${
                        isTransparent
                          ? "bg-white/10 border border-white/20"
                          : "bg-secondary/50 border border-border/40"
                      }`}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions: Theme Toggle & Contact Button */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/contact"
              className={`relative inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer ${
                isTransparent
                  ? "bg-white/15 text-white border border-white/25 hover:bg-white/25 backdrop-blur-sm"
                  : "bg-primary text-primary-foreground hover:bg-primary/95 shadow-md shadow-primary/10 hover:shadow-primary/20"
              }`}
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg focus:outline-none cursor-pointer transition-colors ${
                isTransparent
                  ? "text-white hover:bg-white/10"
                  : "text-foreground hover:bg-secondary/50"
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden w-full border-b border-border/40 bg-background/95 backdrop-blur-md overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-1.5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                      isActive
                        ? "bg-secondary text-primary border-l-4 border-primary"
                        : "text-muted-foreground hover:bg-secondary/40 hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-border/40 px-4">
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center gap-1.5 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-md shadow-primary/15"
                >
                  <span>Get in Touch</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
