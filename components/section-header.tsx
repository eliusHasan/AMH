"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  align = "center",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`max-w-3xl mb-12 sm:mb-16 ${
        isCenter ? "mx-auto text-center" : "text-left"
      }`}
    >
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 border border-primary/20 mb-3"
        >
          {badge}
        </motion.span>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight leading-tight"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
