"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { CheckCircle2, ArrowUpRight, TrendingUp, Calendar, User, Sparkles } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { portfolioProjects } from "@/data/portfolio";

const categories = [
  { id: "all", label: "All Cases" },
  { id: "ai", label: "Artificial Intelligence" },
  { id: "web", label: "Web Development" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "cloud", label: "Cloud & DevOps" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredProjects = selectedCategory === "all"
    ? portfolioProjects
    : portfolioProjects.filter(p => p.category === selectedCategory);

  return (
    <>
      <Navbar />

      <main className="flex-grow bg-background">
        
        {/* ── Immersive Split Header ── */}
        <section className="relative pt-40 pb-20 px-4 overflow-hidden bg-background min-h-[60vh] flex items-center">
          {/* Circuit Board Background */}
          <div className="absolute inset-0 -z-10 bg-background">
            <Image
              src="/hero-circuit.png"
              alt="Technology circuit network"
              fill
              className="object-cover object-center opacity-30 dark:opacity-85 mix-blend-overlay dark:mix-blend-normal"
              priority
            />
            {/* Theme-aware gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/75 to-background/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Side: Header Copy */}
              <div className="lg:col-span-7 text-left space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6"
                >
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-primary bg-primary/10 border border-primary/20">
                    <Sparkles className="w-3.5 h-3.5 text-primary" />
                    Case Studies
                  </span>
                  <h1 className="font-heading font-black text-5xl sm:text-7xl text-foreground tracking-tight leading-[1.05]">
                    Enterprise <br />
                    <span className="bg-gradient-to-r from-primary via-accent to-[#5379AE] bg-clip-text text-transparent drop-shadow-md">
                      Project Portfolio
                    </span>
                  </h1>
                  <p className="text-base sm:text-xl text-muted-foreground leading-relaxed max-w-xl">
                    Real-world products engineered to achieve verifiable performance improvements and operational scale.
                  </p>
                </motion.div>
              </div>

              {/* Right Side: Case Study KPI Dashboard Mockup */}
              <div className="lg:col-span-5 w-full relative">
                {/* Decorative glow behind dashboard */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-primary/10 blur-[80px] -z-10" />
                
                <motion.div
                  initial={{ opacity: 0, x: 30, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                  className="rounded-2xl border border-border/60 bg-card/85 backdrop-blur-md shadow-2xl overflow-hidden text-left"
                >
                  {/* Top Header Bar */}
                  <div className="flex items-center justify-between px-4 py-3 bg-muted/40 border-b border-border/40">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-[10px] font-mono text-muted-foreground select-none font-semibold">case_study_metrics.json</span>
                    <TrendingUp className="w-3.5 h-3.5 text-primary" />
                  </div>
                  
                  {/* Dashboard Core Content */}
                  <div className="p-6 space-y-6">
                    {/* SVG Line Graph */}
                    <div className="h-28 w-full border-b border-border/30 relative flex items-end">
                      <svg className="w-full h-full overflow-visible" viewBox="0 0 100 50">
                        {/* Shaded Area */}
                        <path
                          d="M 0 50 Q 25 35 50 15 T 100 5 L 100 50 Z"
                          fill="url(#gradient-area)"
                          opacity="0.15"
                        />
                        {/* Rising Curve */}
                        <motion.path
                          d="M 0 50 Q 25 35 50 15 T 100 5"
                          fill="none"
                          stroke="hsl(var(--primary))"
                          strokeWidth="2"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                        {/* Dot indicator */}
                        <circle cx="100" cy="5" r="4.5" fill="hsl(var(--primary))" className="animate-ping" />
                        <circle cx="100" cy="5" r="3.5" fill="hsl(var(--primary))" />
                        
                        <defs>
                          <linearGradient id="gradient-area" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="hsl(var(--primary))" />
                            <stop offset="100%" stopColor="transparent" />
                          </linearGradient>
                        </defs>
                      </svg>
                      
                      {/* Floating Chart Label */}
                      <div className="absolute top-2 left-2 px-2.5 py-1 rounded bg-primary/10 text-[9px] font-bold text-primary font-mono border border-primary/20">
                        Aggregate Efficiency Trend
                      </div>
                    </div>

                    {/* KPI metrics row */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3.5 rounded-xl border border-border bg-background/50 text-left">
                        <span className="text-[10px] text-muted-foreground font-black uppercase tracking-wider block">AI Processing Speed</span>
                        <span className="text-xl sm:text-2xl font-black text-foreground mt-1 block">-85% Time</span>
                      </div>
                      <div className="p-3.5 rounded-xl border border-border bg-background/50 text-left">
                        <span className="text-[10px] text-muted-foreground font-black uppercase tracking-wider block">E-Com Sales Boost</span>
                        <span className="text-xl sm:text-2xl font-black text-foreground mt-1 block">+42% Conv</span>
                      </div>
                    </div>

                    {/* Status Checklist */}
                    <div className="space-y-2 pt-1">
                      <div className="flex items-center gap-2 text-xxs font-mono text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Edge CDN Server Sync Status: SUCCESSFUL</span>
                      </div>
                      <div className="flex items-center gap-2 text-xxs font-mono text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span>Terraform Multi-Region Pipeline: ONLINE</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Category Filters ── */}
        <section className="py-8 px-4 border-y border-border/20 bg-secondary/5">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide border transition-all duration-300 cursor-pointer ${
                  selectedCategory === c.id
                    ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20"
                    : "bg-card border-border/80 hover:border-primary/45 text-muted-foreground hover:text-foreground"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </section>

        {/* ── Portfolio Grid List ── */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-16">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    id={project.id}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6 }}
                    className="glass-card p-6 sm:p-10 rounded-[32px] border border-border/40 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 scroll-mt-28 hover:shadow-xl hover:shadow-primary/[0.02] transition-shadow duration-300"
                  >
                    {/* Left: Image & Metric Wrapper */}
                    <div className="lg:col-span-5 relative group/image overflow-hidden rounded-2xl border border-border/50 bg-secondary/15 flex flex-col justify-between p-6 min-h-[320px]">
                      {/* Case study rendered image */}
                      <div className="absolute inset-0 -z-10">
                        <Image
                          src={project.imageUrl}
                          alt={project.title}
                          fill
                          className="object-cover object-center group-hover/image:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
                      </div>

                      {/* Glassmorphic Metrics Card */}
                      <div className="self-start relative z-10">
                        <div className="inline-flex flex-col gap-1 px-4 py-2.5 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 shadow-lg text-left">
                          <span className="text-[10px] font-black text-primary uppercase tracking-widest">
                            {project.metrics.label}
                          </span>
                          <span className="text-2xl sm:text-3xl font-black text-white tracking-tight glow-text">
                            {project.metrics.value}
                          </span>
                        </div>
                      </div>

                      {/* Client details overlay */}
                      <div className="pt-4 border-t border-white/15 space-y-2 mt-auto w-full relative z-10 text-left">
                        <div className="flex items-center gap-2.5 text-xs text-white/85">
                          <User className="w-3.5 h-3.5 text-primary" />
                          <span><span className="font-semibold text-white">Client:</span> {project.clientName}</span>
                        </div>
                        <div className="flex items-center gap-2.5 text-xs text-white/85">
                          <Calendar className="w-3.5 h-3.5 text-primary" />
                          <span><span className="font-semibold text-white">Duration:</span> {project.duration}</span>
                        </div>
                      </div>
                    </div>

                    {/* Right: Detailed Case Content */}
                    <div className="lg:col-span-7 flex flex-col justify-between text-left space-y-8">
                      <div className="space-y-6">
                        <div>
                          <span className="text-xs font-black text-primary uppercase tracking-widest">
                            {project.categoryLabel}
                          </span>
                          <h2 className="font-heading font-black text-2xl sm:text-3.5xl text-foreground tracking-tight mt-2 leading-none">
                            {project.title}
                          </h2>
                        </div>

                        <p className="text-sm sm:text-base text-muted-foreground/95 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Deliverables List */}
                        <div className="space-y-3.5">
                          <h4 className="text-xs font-black uppercase tracking-widest text-foreground">
                            Key Deliverables
                          </h4>
                          <ul className="space-y-2.5">
                            {project.features.map((feature) => (
                              <li
                                key={feature}
                                className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground/90 leading-relaxed"
                              >
                                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Footing Tech Badges & CTA */}
                      <div className="pt-6 border-t border-border/20 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 text-xxs font-semibold rounded-lg bg-secondary/50 border border-border/40 text-muted-foreground/90"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <Link
                          href="/contact"
                          className="group inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/95 transition-all duration-300 hover:-translate-y-0.5 shadow-md shadow-primary/15 font-bold text-xs sm:text-sm"
                        >
                          <span>Request Similar Setup</span>
                          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
