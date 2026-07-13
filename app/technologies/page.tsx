"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  Code,
  Server,
  Cpu,
  Cloud,
  Smartphone,
  CheckCircle,
  ExternalLink,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const techCategories = [
  { id: "ai", label: "AI & Machine Learning", icon: Cpu },
  { id: "frontend", label: "Frontend & UI", icon: Code },
  { id: "backend", label: "Backend & Databases", icon: Server },
  { id: "devops", label: "Cloud & DevOps", icon: Cloud },
  { id: "mobile", label: "Mobile Apps", icon: Smartphone },
];

const techStack = {
  ai: [
    { name: "Python", purpose: "Core scripting language for neural net modeling, statistical math, and data pipeline runs.", experience: "Advanced" },
    { name: "LlamaIndex", purpose: "Semantic vector document retrieval and context indexing pipelines for custom RAG setups.", experience: "Advanced" },
    { name: "LangChain / CrewAI", purpose: "Orchestrator frameworks to design multi-agent decision chains and tool executions.", experience: "Advanced" },
    { name: "Pinecone / Qdrant", purpose: "Ultra-low latency vector engines storing embeddings for semantic contract queries.", experience: "Intermediate" },
  ],
  frontend: [
    { name: "Next.js 15 / React 19", purpose: "Server-side rendering (SSR), dynamic edge streaming, and partial pre-rendering.", experience: "Expert" },
    { name: "TypeScript", purpose: "Strict typing across all layers, preventing run-time bugs and easing refactor operations.", experience: "Expert" },
    { name: "Tailwind CSS", purpose: "Utility CSS framework providing fast layout compilation and theme-dependent stylings.", experience: "Expert" },
    { name: "Framer Motion", purpose: "Physics-based micro-animations, layout animations, and card state transitions.", experience: "Expert" },
  ],
  backend: [
    { name: "Node.js / Express", purpose: "High-performance REST API services and asynchronous background socket channels.", experience: "Advanced" },
    { name: "PostgreSQL", purpose: "Relational database with transactional safety, indexing capabilities, and pgvector tools.", experience: "Advanced" },
    { name: "Prisma ORM", purpose: "Type-safe database mapping, relationship modeling, and automated SQL migrations.", experience: "Advanced" },
    { name: "Redis", purpose: "In-memory key-value cache layer to dramatically speed up read queries and session state.", experience: "Intermediate" },
  ],
  devops: [
    { name: "AWS Cloud", purpose: "Host secure virtual environments, serverless grids, file databases, and CDN engines.", experience: "Advanced" },
    { name: "Terraform", purpose: "Infrastructure as Code (IaC) to code resource pipelines and deploy environments.", experience: "Advanced" },
    { name: "Docker", purpose: "Microservices containerization to align dependencies across staging and production.", experience: "Advanced" },
    { name: "Kubernetes / EKS", purpose: "Container orchestration with automated auto-scaling and high availability clusters.", experience: "Intermediate" },
  ],
  mobile: [
    { name: "React Native", purpose: "Build native mobile products sharing single codebase pipelines across iOS and Android.", experience: "Advanced" },
    { name: "Bluetooth LE (BLE)", purpose: "Sensor synchronization with low-energy diagnostics hardware and wearables.", experience: "Intermediate" },
    { name: "Zustand / Redux", purpose: "State stores sync variables across screen steps and offline buffers.", experience: "Advanced" },
    { name: "Expo CLI", purpose: "Rapid prototyping, over-the-air (OTA) updates, and modular SDK libraries integration.", experience: "Advanced" },
  ],
};

// Hero orbital animation — badges orbit the core on two counter-rotating rings
const orbitOuter = [
  { label: "React 19", angle: 0 },
  { label: "AWS Cloud", angle: 90 },
  { label: "TypeScript", angle: 180 },
  { label: "Docker", angle: 270 },
];
const orbitInner = [
  { label: "Next.js 15", angle: 30 },
  { label: "Python", angle: 150 },
  { label: "PostgreSQL", angle: 270 },
];

const orbitPos = (angle: number, radius: number) => ({
  left: `${50 + radius * Math.cos((angle * Math.PI) / 180)}%`,
  top: `${50 + radius * Math.sin((angle * Math.PI) / 180)}%`,
});

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function Technologies() {
  const [activeTab, setActiveTab] = useState<keyof typeof techStack>("ai");

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
                    Tech Stack
                  </span>
                  <h1 className="font-heading font-black text-5xl sm:text-7xl text-foreground tracking-tight leading-[1.05]">
                    Enterprise <br />
                    <span className="bg-gradient-to-r from-primary via-accent to-[#5379AE] bg-clip-text text-transparent drop-shadow-md">
                      Technology Stack
                    </span>
                  </h1>
                  <p className="text-base sm:text-xl text-muted-foreground leading-relaxed max-w-xl">
                    Our engineering choices focus on type-safety, speed, scale, and long-term codebase maintenance.
                  </p>
                </motion.div>
              </div>

              {/* Right Side: Orbital Technology Core Animation */}
              <div className="lg:col-span-5 relative w-full h-[380px] sm:h-[480px] flex items-center justify-center">
                <div className="relative w-[320px] h-[320px] sm:w-[440px] sm:h-[440px]">

                  {/* Ambient glow */}
                  <div className="absolute inset-0 m-auto w-52 h-52 rounded-full bg-primary/15 blur-[100px]" />

                  {/* Orbit ring guides */}
                  <div className="absolute inset-0 rounded-full border border-primary/15" />
                  <div className="absolute inset-[22%] rounded-full border border-dashed border-primary/25" />
                  <div className="absolute inset-[38%] rounded-full border border-primary/10" />

                  {/* Radar sweep */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full"
                    style={{ background: "conic-gradient(from 0deg, rgba(4,116,196,0.16), transparent 30%)" }}
                  />

                  {/* Outer orbit — badges circle clockwise, labels stay upright */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0"
                  >
                    {orbitOuter.map((node) => (
                      <div
                        key={node.label}
                        className="absolute -translate-x-1/2 -translate-y-1/2"
                        style={orbitPos(node.angle, 50)}
                      >
                        <motion.div
                          animate={{ rotate: -360 }}
                          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                          className="px-3.5 py-2 rounded-xl border border-border bg-card/90 shadow-md flex items-center gap-2 backdrop-blur-md text-[10px] font-bold text-foreground font-mono whitespace-nowrap"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                          <span>{node.label}</span>
                        </motion.div>
                      </div>
                    ))}
                  </motion.div>

                  {/* Inner orbit — counter-rotates for depth */}
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0"
                  >
                    {orbitInner.map((node) => (
                      <div
                        key={node.label}
                        className="absolute -translate-x-1/2 -translate-y-1/2"
                        style={orbitPos(node.angle, 28)}
                      >
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                          className="px-3 py-1.5 rounded-lg border border-primary/25 bg-primary/10 shadow-sm flex items-center gap-1.5 backdrop-blur-md text-[9px] font-bold text-primary font-mono whitespace-nowrap"
                        >
                          <div className="w-1 h-1 rounded-full bg-primary" />
                          <span>{node.label}</span>
                        </motion.div>
                      </div>
                    ))}
                  </motion.div>

                  {/* Glowing core */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute -inset-5 rounded-full bg-primary/25 blur-2xl animate-pulse" />
                      <div className="absolute -inset-3 rounded-full border border-primary/30 animate-ping [animation-duration:3s]" />
                      <motion.div
                        animate={{ scale: [1, 1.06, 1] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-primary to-[#5379AE] flex items-center justify-center text-white shadow-2xl shadow-primary/40 relative border border-white/20"
                      >
                        <Cpu className="w-8 h-8 sm:w-10 sm:h-10" />
                      </motion.div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Tab Selection Section ── */}
        <section className="py-8 px-4 border-y border-border/20 bg-secondary/5">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3">
            {techCategories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id as keyof typeof techStack)}
                  className={`flex items-center gap-2.5 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold tracking-wide border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20"
                      : "bg-card border-border/80 hover:border-primary/45 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* ── Tech Details Dashboard ── */}
        <section className="py-24 px-4 bg-secondary/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left Side: Why We Choose This Stack Info Card */}
              <div className="lg:col-span-4 glass-card p-8 rounded-3xl border border-border/50 bg-card/85 backdrop-blur-md shadow-lg flex flex-col justify-between h-fit text-left">
                <div className="space-y-6">
                  <h3 className="font-heading font-black text-2xl text-foreground tracking-tight">
                    Why We Choose This Stack
                  </h3>
                  <p className="text-sm text-muted-foreground/95 leading-relaxed">
                    We select technologies that avoid legacy technical debt. By focusing on type-safety (TypeScript), server-side rendering (Next.js), and container systems (Docker/Kubernetes), we build products that scale efficiently.
                  </p>
                  <div className="space-y-3.5 pt-2">
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm text-muted-foreground/90">
                      <CheckCircle className="w-4.5 h-4.5 text-primary flex-shrink-0" />
                      <span>Production-ready architectures</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm text-muted-foreground/90">
                      <CheckCircle className="w-4.5 h-4.5 text-primary flex-shrink-0" />
                      <span>Secure VPC server sandboxes</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm text-muted-foreground/90">
                      <CheckCircle className="w-4.5 h-4.5 text-primary flex-shrink-0" />
                      <span>Perfect Core Web Vital scores</span>
                    </div>
                  </div>
                </div>
                <div className="pt-8 border-t border-border/20 mt-8">
                  <Link
                    href="/contact"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/95 transition-all duration-300 shadow-md shadow-primary/15 hover:-translate-y-0.5 text-xs sm:text-sm"
                  >
                    <span>Request Stack Audit</span>
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right Side: Technologies List Grid */}
              <div className="lg:col-span-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                  >
                    {techStack[activeTab].map((t, index) => (
                      <div
                        key={t.name}
                        className="group relative p-6 sm:p-8 rounded-[24px] border border-border/40 bg-card/65 backdrop-blur-sm hover:border-primary/40 hover:-translate-y-1.5 transition-all duration-300 shadow-sm hover:shadow-lg overflow-hidden flex flex-col justify-between min-h-[200px] text-left"
                      >
                        {/* Large Background Offset Number */}
                        <div className="absolute -top-3 -right-3 text-7xl font-black text-foreground/[0.02] group-hover:text-primary/5 transition-colors duration-300 pointer-events-none select-none font-mono">
                          0{index + 1}
                        </div>

                        <div className="space-y-4 relative z-10">
                          <div className="flex items-center justify-between gap-4">
                            <h4 className="font-heading font-black text-lg text-foreground tracking-tight">
                              {t.name}
                            </h4>
                            <span className="text-[10px] font-extrabold tracking-wider uppercase px-2.5 py-1 rounded-lg bg-primary/10 border border-primary/20 text-primary">
                              {t.experience}
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-muted-foreground/95 leading-relaxed">
                            {t.purpose}
                          </p>
                        </div>
                        
                        {/* Sliding accent line on hover */}
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
