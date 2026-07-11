"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Send, CheckCircle2, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Email is required");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
    setError("");
    setSubscribed(true);
    setEmail("");
    setTimeout(() => {
      setSubscribed(false);
    }, 4000);
  };

  return (
    <footer className="border-t border-border/40 bg-secondary/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Identity */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-md shadow-primary/20 ring-1 ring-black/5">
                <Image
                  src="/kodenri-mark.png"
                  alt="Kodenri logo"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>
              <span className="font-heading font-extrabold text-lg tracking-tight bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
                Kodenri
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Architecting cutting-edge enterprise software, deep-tech AI integrations, and high-performance digital experiences.
            </p>
            <div className="pt-2 text-xs text-muted-foreground/80">
              <span className="font-medium text-foreground">Headquarters:</span> Dhaka, Bangladesh
            </div>
          </div>

          {/* Core Services Links */}
          <div>
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-foreground mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {[
                "AI Solutions",
                "Web Development",
                "Mobile Apps",
                "Cloud & DevOps",
                "UI/UX Design",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    <span>{service}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-foreground mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/about", label: "About Us" },
                { href: "/technologies", label: "Tech Stack" },
                { href: "/careers", label: "Careers" },
                { href: "/blog", label: "Insights Blog" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-foreground mb-4">
              Newsletter
            </h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to receive software and AI engineering insights.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative flex items-center">
                <input
                  type="email"
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-sm px-4 py-2.5 pr-10 rounded-lg bg-background border border-border/60 focus:border-primary/60 focus:outline-none focus:ring-1 focus:ring-primary/60 transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-1 p-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  aria-label="Subscribe"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <AnimatePresence mode="wait">
                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="text-xs text-destructive font-medium"
                  >
                    {error}
                  </motion.p>
                )}
                {subscribed && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="text-xs text-emerald-500 font-semibold flex items-center gap-1"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Subscribed successfully!</span>
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>

        {/* Legal and Copyright */}
        <div className="border-t border-border/40 pt-8 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>
            © {new Date().getFullYear()} Kodenri. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
