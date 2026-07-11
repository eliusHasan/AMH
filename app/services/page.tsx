"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import {
  Bot,
  Globe,
  Smartphone,
  Server,
  Cloud,
  Palette,
  ShieldCheck,
  Wrench,
  Workflow,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Terminal,
  Activity,
  Cpu
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const consoleLines = [
  { text: "kodenri init --services", color: "text-[#A8C4EC]" },
  { text: "✔ AI Agent Core: ACTIVE (12ms latency)", color: "text-emerald-400" },
  { text: "✔ Edge CDN Server Component Cache: HIT", color: "text-emerald-400" },
  { text: "✔ Terraform multi-region replica: ONLINE", color: "text-cyan-400" },
  { text: "✔ Uptime rate verified at 99.98%", color: "text-sky-400" },
];

export default function Services() {
  return (
    <>
      <Navbar />

      <main className="flex-grow bg-background">
        
        {/* ── Immersive Split Header ── */}
        <section className="relative pt-40 pb-28 px-4 overflow-hidden bg-background min-h-[75vh] flex items-center">
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
              
              {/* Left Side: Bold Header Details */}
              <div className="lg:col-span-7 text-left space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6"
                >
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-primary bg-primary/10 border border-primary/20">
                    <Sparkles className="w-3.5 h-3.5 text-primary" />
                    Capabilities
                  </span>
                  <h1 className="font-heading font-black text-5xl sm:text-7xl text-foreground tracking-tight leading-[1.05]">
                    What We <br />
                    <span className="bg-gradient-to-r from-primary via-accent to-[#5379AE] bg-clip-text text-transparent drop-shadow-md">
                      Build &amp; Optimize
                    </span>
                  </h1>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
                    We partner with enterprises to engineer scalable software products, automate operations with AI agent architectures, and secure cloud environments.
                  </p>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4 pt-2">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold bg-primary text-primary-foreground hover:bg-primary/95 transition-all duration-300 shadow-lg shadow-primary/20 hover:-translate-y-0.5"
                    >
                      <span>Request a Quote</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a
                      href="#workflows"
                      className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-foreground border border-border bg-secondary/50 hover:bg-secondary/80 transition-all duration-300 hover:-translate-y-0.5"
                    >
                      Explore Workflows
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Right Side: Professional Terminal Mockup */}
              <div className="lg:col-span-5 w-full">
                <motion.div
                  initial={{ opacity: 0, x: 30, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                  className="rounded-2xl border border-white/10 bg-[#131622]/90 backdrop-blur-md shadow-2xl overflow-hidden text-left font-mono text-xs text-white/90"
                >
                  {/* Header bar */}
                  <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-[10px] text-white/40 select-none">kodenri-terminal.sh</span>
                    <Terminal className="w-3.5 h-3.5 text-white/35" />
                  </div>
                  
                  {/* Console Output */}
                  <div className="p-5 space-y-3 font-mono text-[11px] sm:text-xs">
                    {consoleLines.map((line, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + idx * 0.15, duration: 0.4 }}
                        className={`flex gap-2 items-start ${line.color}`}
                      >
                        <span className="text-white/35 select-none">{idx + 1}</span>
                        <span>{line.text}</span>
                      </motion.div>
                    ))}
                    
                    {/* Pulsing prompt line */}
                    <div className="flex gap-2 items-center text-white/50 pt-2">
                      <span className="text-white/35 select-none">{consoleLines.length + 1}</span>
                      <span className="w-1.5 h-3.5 bg-[#A8C4EC] animate-pulse" />
                    </div>
                  </div>
                </motion.div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Bento Grid Section ── */}
        <section className="py-24 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-[minmax(320px,_auto)]">

              {/* Card 1: AI Automation (col-span-12 - Full width) */}
              <motion.div
                id="ai-automation"
                custom={0}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="lg:col-span-12 group relative p-8 sm:p-10 rounded-3xl border border-border/30 bg-card/65 backdrop-blur-sm hover:border-[#0474C4]/40 hover:-translate-y-1.5 transition-all duration-300 shadow-sm hover:shadow-lg overflow-hidden flex flex-col justify-between"
              >
                {/* Large Background Offset Number */}
                <div className="absolute -top-3 -right-3 text-8xl font-black text-foreground/[0.02] group-hover:text-[#0474C4]/5 transition-colors duration-300 pointer-events-none select-none font-mono">
                  01
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start h-full">
                  <div className="md:col-span-7 space-y-6 text-left relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-[#0474C4]/15 border border-[#0474C4]/30 flex items-center justify-center text-[#0474C4] group-hover:scale-105 transition-all duration-300">
                      <Workflow className="w-6 h-6" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-heading font-black text-2xl sm:text-3xl text-foreground tracking-tight">AI Automation &amp; Integrations</h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        Automate repetitive business processes end-to-end with n8n, Zapier, and Make. We connect your CRM, email, spreadsheets, and internal APIs into intelligent workflows that route data, trigger AI agents, and eliminate manual busywork around the clock.
                      </p>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-muted-foreground/80">
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#0474C4]" /> n8n &amp; Zapier workflow design</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#0474C4]" /> CRM &amp; ERP integrations</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#0474C4]" /> AI-powered lead routing</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#0474C4]" /> Scheduled data sync jobs</li>
                    </ul>
                  </div>

                  {/* Workflow Pipeline Visual */}
                  <div className="md:col-span-5 relative z-10 w-full h-full min-h-[180px] rounded-2xl border border-border/20 bg-secondary/15 p-5 flex flex-col justify-center">
                    {[
                      { label: "Trigger — New CRM lead arrives", color: "text-emerald-500 border-emerald-500/30 bg-emerald-500/10" },
                      { label: "AI Agent — Qualify & enrich data", color: "text-[#0474C4] border-[#0474C4]/30 bg-[#0474C4]/10" },
                      { label: "n8n — Update pipeline & CRM", color: "text-amber-500 border-amber-500/30 bg-amber-500/10" },
                      { label: "Notify — Slack + email report", color: "text-violet-500 border-violet-500/30 bg-violet-500/10" },
                    ].map((node, i, arr) => (
                      <div key={node.label} className="flex flex-col items-start">
                        <div className={`w-full px-4 py-2.5 rounded-lg border font-mono text-[11px] sm:text-xs ${node.color}`}>
                          {node.label}
                        </div>
                        {i < arr.length - 1 && <div className="w-px h-3.5 bg-border/70 ml-6" />}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-border/20 mt-8 flex justify-between items-center relative z-10">
                  <span className="text-xs text-muted-foreground/60 font-semibold uppercase tracking-wider">n8n · Zapier · Make</span>
                  <Link href="/contact?service=ai-automation" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-[#0474C4] text-white hover:bg-[#0474C4]/95 transition-all shadow-md">
                    Request Info <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>

              {/* Card 2: AI Solutions (col-span-8 - Wide) */}
              <motion.div
                id="ai-solutions"
                custom={1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="lg:col-span-8 group relative p-8 sm:p-10 rounded-3xl border border-border/30 bg-card/65 backdrop-blur-sm hover:border-[#0474C4]/40 hover:-translate-y-1.5 transition-all duration-300 shadow-sm hover:shadow-lg overflow-hidden flex flex-col justify-between"
              >
                {/* Large Background Offset Number */}
                <div className="absolute -top-3 -right-3 text-8xl font-black text-foreground/[0.02] group-hover:text-[#0474C4]/5 transition-colors duration-300 pointer-events-none select-none font-mono">
                  02
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start h-full">
                  <div className="md:col-span-7 space-y-6 text-left relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-[#0474C4]/15 border border-[#0474C4]/30 flex items-center justify-center text-[#0474C4] group-hover:scale-105 transition-all duration-300">
                      <Bot className="w-6 h-6" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-heading font-black text-2xl sm:text-3xl text-foreground tracking-tight">AI &amp; Intelligent Agents</h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        Deploy private LLM pipelines, implement fast semantic search vectors, and design automated agent frameworks to scale complex operations.
                      </p>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-muted-foreground/80">
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#0474C4]" /> Private VPC models</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#0474C4]" /> RAG system pipelines</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#0474C4]" /> Custom Agent scripts</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#0474C4]" /> Semantic search vectors</li>
                    </ul>
                  </div>

                  {/* Visual Decorator Image */}
                  <div className="md:col-span-5 relative w-full h-full min-h-[180px] rounded-2xl border border-border/20 overflow-hidden shadow-inner bg-secondary/15">
                    <Image
                      src="/services-ai.png"
                      alt="AI & Intelligent Agents"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  </div>
                </div>
                
                <div className="pt-6 border-t border-border/20 mt-8 flex justify-between items-center relative z-10">
                  <span className="text-xs text-muted-foreground/60 font-semibold uppercase tracking-wider">AI Integration SLA</span>
                  <Link href="/contact?service=ai-solutions" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-[#0474C4] text-white hover:bg-[#0474C4]/95 transition-all shadow-md">
                    Request Info <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>

              {/* Card 2: Web Dev (col-span-4 - Square) */}
              <motion.div
                id="web-platforms"
                custom={2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="lg:col-span-4 group relative p-8 rounded-3xl border border-border/30 bg-card/65 backdrop-blur-md hover:border-[#0474C4]/40 hover:-translate-y-1.5 transition-all duration-300 shadow-sm hover:shadow-lg overflow-hidden flex flex-col justify-between text-left"
              >
                {/* Large Background Offset Number */}
                <div className="absolute -top-3 -right-3 text-8xl font-black text-foreground/[0.02] group-hover:text-[#0474C4]/5 transition-colors duration-300 pointer-events-none select-none font-mono">
                  03
                </div>

                <div className="space-y-6 relative z-10">
                  {/* Visual Decorator Image */}
                  <div className="relative w-full h-36 rounded-2xl overflow-hidden border border-border/20 bg-secondary/15">
                    <Image
                      src="/services-web.png"
                      alt="Web Engineering"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0474C4]/15 border border-[#0474C4]/30 flex items-center justify-center text-[#0474C4] group-hover:scale-105 transition-all duration-300">
                      <Globe className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading font-black text-xl text-foreground tracking-tight">Web Engineering</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Build high-performance web systems using Next.js, fully optimized for Lighthouse metrics and search engine indexes.
                  </p>
                </div>
                <div className="pt-5 border-t border-border/20 mt-5 flex justify-between items-center relative z-10">
                  <span className="text-xxs font-mono text-[#0474C4]">SEO Optimized</span>
                  <Link href="/contact?service=web-development" className="text-xs font-bold text-[#0474C4] hover:underline flex items-center gap-1">
                    Details <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>

              {/* Card 3: Mobile Apps (col-span-4 - Square) */}
              <motion.div
                id="mobile-apps"
                custom={3}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="lg:col-span-4 group relative p-8 rounded-3xl border border-border/30 bg-card/65 backdrop-blur-md hover:border-[#0474C4]/40 hover:-translate-y-1.5 transition-all duration-300 shadow-sm hover:shadow-lg overflow-hidden flex flex-col justify-between text-left"
              >
                {/* Large Background Offset Number */}
                <div className="absolute -top-3 -right-3 text-8xl font-black text-foreground/[0.02] group-hover:text-[#0474C4]/5 transition-colors duration-300 pointer-events-none select-none font-mono">
                  04
                </div>

                <div className="space-y-6 relative z-10">
                  {/* Visual Decorator Image */}
                  <div className="relative w-full h-36 rounded-2xl overflow-hidden border border-border/20 bg-secondary/15">
                    <Image
                      src="/services-mobile.png"
                      alt="Mobile Products"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0474C4]/15 border border-[#0474C4]/30 flex items-center justify-center text-[#0474C4] group-hover:scale-105 transition-all duration-300">
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading font-black text-xl text-foreground tracking-tight">Mobile Products</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Deliver native iOS &amp; Android platforms featuring BLE sensor integrations, offline sync states, and secure local databases.
                  </p>
                </div>
                <div className="pt-5 border-t border-border/20 mt-5 flex justify-between items-center relative z-10">
                  <span className="text-xxs font-mono text-[#0474C4]">Cross-platform</span>
                  <Link href="/contact?service=mobile-apps" className="text-xs font-bold text-[#0474C4] hover:underline flex items-center gap-1">
                    Details <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>

              {/* Card 4: Backend Services (col-span-8 - Wide) */}
              <motion.div
                id="backend-apis"
                custom={4}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="lg:col-span-8 group relative p-8 sm:p-10 rounded-3xl border border-border/30 bg-card/65 backdrop-blur-md hover:border-[#0474C4]/40 hover:-translate-y-1.5 transition-all duration-300 shadow-sm hover:shadow-lg overflow-hidden flex flex-col justify-between"
              >
                {/* Large Background Offset Number */}
                <div className="absolute -top-3 -right-3 text-8xl font-black text-foreground/[0.02] group-hover:text-[#0474C4]/5 transition-colors duration-300 pointer-events-none select-none font-mono">
                  05
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start h-full">
                  <div className="md:col-span-7 space-y-6 text-left relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-[#0474C4]/15 border border-[#0474C4]/30 flex items-center justify-center text-[#0474C4] group-hover:scale-105 transition-all duration-300">
                      <Server className="w-6 h-6" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-heading font-black text-2xl sm:text-3xl text-foreground tracking-tight">Backend &amp; High-Speed APIs</h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        Architect microservices and high-throughput APIs using Go and Node.js. Models designed for secure load migrations.
                      </p>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-muted-foreground/80">
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#0474C4]" /> Go &amp; Node microservices</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#0474C4]" /> GraphQL / REST APIs</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#0474C4]" /> SQL &amp; NoSQL schemas</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#0474C4]" /> Redis caching tiers</li>
                    </ul>
                  </div>

                  {/* Visual Decorator Image */}
                  <div className="md:col-span-5 relative w-full h-full min-h-[180px] rounded-2xl border border-border/20 overflow-hidden shadow-inner bg-secondary/15">
                    <Image
                      src="/services-backend.png"
                      alt="Backend & APIs"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  </div>
                </div>
                
                <div className="pt-6 border-t border-border/20 mt-8 flex justify-between items-center relative z-10">
                  <span className="text-xs text-muted-foreground/60 font-semibold uppercase tracking-wider">Fast delivery APIs</span>
                  <Link href="/contact?service=backend-apis" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-[#0474C4] text-white hover:bg-[#0474C4]/95 transition-all shadow-md">
                    Request Info <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>

              {/* Card 5: Cloud DevOps (col-span-8 - Wide) */}
              <motion.div
                id="cloud-devops"
                custom={5}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="lg:col-span-8 group relative p-8 sm:p-10 rounded-3xl border border-border/30 bg-card/65 backdrop-blur-sm hover:border-[#0474C4]/40 hover:-translate-y-1.5 transition-all duration-300 shadow-sm hover:shadow-lg overflow-hidden flex flex-col justify-between"
              >
                {/* Large Background Offset Number */}
                <div className="absolute -top-3 -right-3 text-8xl font-black text-foreground/[0.02] group-hover:text-[#0474C4]/5 transition-colors duration-300 pointer-events-none select-none font-mono">
                  06
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start h-full">
                  <div className="md:col-span-7 space-y-6 text-left relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-[#0474C4]/15 border border-[#0474C4]/30 flex items-center justify-center text-[#0474C4] group-hover:scale-105 transition-all duration-300">
                      <Cloud className="w-6 h-6" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-heading font-black text-2xl sm:text-3xl text-foreground tracking-tight">Cloud &amp; DevOps</h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        Automate application deployments using Terraform, manage container clusters with Kubernetes, and verify build health with CI/CD grids.
                      </p>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-muted-foreground/80">
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#0474C4]" /> Terraform (IaC) templates</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#0474C4]" /> Kubernetes clusters</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#0474C4]" /> Automated CI/CD steps</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#0474C4]" /> Datadog build reviews</li>
                    </ul>
                  </div>

                  {/* Visual Decorator Image */}
                  <div className="md:col-span-5 relative w-full h-full min-h-[180px] rounded-2xl border border-border/20 overflow-hidden shadow-inner bg-secondary/15">
                    <Image
                      src="/services-cloud.png"
                      alt="Cloud & DevOps"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  </div>
                </div>
                
                <div className="pt-6 border-t border-border/20 mt-8 flex justify-between items-center relative z-10">
                  <span className="text-xs text-muted-foreground/60 font-semibold uppercase tracking-wider">AWS / GCP environments</span>
                  <Link href="/contact?service=cloud-devops" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-[#0474C4] text-white hover:bg-[#0474C4]/95 transition-all shadow-md">
                    Request Info <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>

              {/* Card 6: UI UX Design (col-span-4 - Square) */}
              <motion.div
                id="ui-ux-design"
                custom={6}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="lg:col-span-4 group relative p-8 rounded-3xl border border-border/30 bg-card/65 backdrop-blur-md hover:border-[#0474C4]/40 hover:-translate-y-1.5 transition-all duration-300 shadow-sm hover:shadow-lg overflow-hidden flex flex-col justify-between text-left"
              >
                {/* Large Background Offset Number */}
                <div className="absolute -top-3 -right-3 text-8xl font-black text-foreground/[0.02] group-hover:text-[#0474C4]/5 transition-colors duration-300 pointer-events-none select-none font-mono">
                  07
                </div>

                <div className="space-y-6 relative z-10">
                  {/* Visual Decorator Image */}
                  <div className="relative w-full h-36 rounded-2xl overflow-hidden border border-border/20 bg-secondary/15">
                    <Image
                      src="/services-design.png"
                      alt="Product UI/UX"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0474C4]/15 border border-[#0474C4]/30 flex items-center justify-center text-[#0474C4] group-hover:scale-105 transition-all duration-300">
                      <Palette className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading font-black text-xl text-foreground tracking-tight">Product UI/UX</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Design pixel-perfect layout interfaces in Figma matching WCAG 2.1 AA web accessibility checks.
                  </p>
                </div>
                <div className="pt-5 border-t border-border/20 mt-5 flex justify-between items-center relative z-10">
                  <span className="text-xxs font-mono text-[#0474C4]">Accessible systems</span>
                  <Link href="/contact?service=ui-ux-design" className="text-xs font-bold text-[#0474C4] hover:underline flex items-center gap-1">
                    Details <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>

              {/* Card 7: QA Testing (col-span-4 - Square) */}
              <motion.div
                id="qa-automation"
                custom={7}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="lg:col-span-4 group relative p-8 rounded-3xl border border-border/30 bg-card/65 backdrop-blur-md hover:border-[#0474C4]/40 hover:-translate-y-1.5 transition-all duration-300 shadow-sm hover:shadow-lg overflow-hidden flex flex-col justify-between text-left"
              >
                {/* Large Background Offset Number */}
                <div className="absolute -top-3 -right-3 text-8xl font-black text-foreground/[0.02] group-hover:text-[#0474C4]/5 transition-colors duration-300 pointer-events-none select-none font-mono">
                  08
                </div>

                <div className="space-y-6 relative z-10">
                  {/* Visual Decorator Image */}
                  <div className="relative w-full h-36 rounded-2xl overflow-hidden border border-border/20 bg-secondary/15">
                    <Image
                      src="/services-testing.png"
                      alt="QA Automation"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0474C4]/15 border border-[#0474C4]/30 flex items-center justify-center text-[#0474C4] group-hover:scale-105 transition-all duration-300">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading font-black text-xl text-foreground tracking-tight">QA Automation</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Build end-to-end automated test scripts using Playwright and Cypress to lock in core systems stability.
                  </p>
                </div>
                <div className="pt-5 border-t border-border/20 mt-5 flex justify-between items-center relative z-10">
                  <span className="text-xxs font-mono text-[#0474C4]">End-to-End verified</span>
                  <Link href="/contact?service=qa-testing" className="text-xs font-bold text-[#0474C4] hover:underline flex items-center gap-1">
                    Details <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>

              {/* Card 8: SLA Support (col-span-8 - Wide) */}
              <motion.div
                id="sla-support"
                custom={8}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="lg:col-span-8 group relative p-8 sm:p-10 rounded-3xl border border-border/30 bg-card/65 backdrop-blur-md hover:border-[#0474C4]/40 hover:-translate-y-1.5 transition-all duration-300 shadow-sm hover:shadow-lg overflow-hidden flex flex-col justify-between"
              >
                {/* Large Background Offset Number */}
                <div className="absolute -top-3 -right-3 text-8xl font-black text-foreground/[0.02] group-hover:text-[#0474C4]/5 transition-colors duration-300 pointer-events-none select-none font-mono">
                  09
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start h-full">
                  <div className="md:col-span-7 space-y-6 text-left relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-[#0474C4]/15 border border-[#0474C4]/30 flex items-center justify-center text-[#0474C4] group-hover:scale-105 transition-all duration-300">
                      <Wrench className="w-6 h-6" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-heading font-black text-2xl sm:text-3xl text-foreground tracking-tight">SLA Support &amp; Maintenance</h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        Secure query caching, framework updates, database indexing reviews, and guaranteed code migrations.
                      </p>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-muted-foreground/80">
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#0474C4]" /> Guaranteed emergency SLAs</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#0474C4]" /> Active security audits</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#0474C4]" /> Database query scaling</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#0474C4]" /> Frame upgrades</li>
                    </ul>
                  </div>

                  {/* Visual Decorator Image */}
                  <div className="md:col-span-5 relative w-full h-full min-h-[180px] rounded-2xl border border-border/20 overflow-hidden shadow-inner bg-secondary/15">
                    <Image
                      src="/services-support.png"
                      alt="SLA Support"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  </div>
                </div>
                
                <div className="pt-6 border-t border-border/20 mt-8 flex justify-between items-center relative z-10">
                  <span className="text-xs text-muted-foreground/60 font-semibold uppercase tracking-wider">Ongoing support networks</span>
                  <Link href="/contact?service=maintenance" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-[#0474C4] text-white hover:bg-[#0474C4]/95 transition-all shadow-md">
                    Request Info <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── Workflow Process (Typographic Redesign) ── */}
        <section id="workflows" className="py-28 px-4 border-t border-border/20 bg-background relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              
              {/* Left Side: Header */}
              <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-5 text-left">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-[#0474C4] bg-[#0474C4]/10 border border-[#0474C4]/20">
                  Workflows
                </span>
                <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight leading-tight">
                  How We <br />
                  <span className="bg-gradient-to-r from-[#0474C4] to-[#5379AE] bg-clip-text text-transparent">
                    Collaborate
                  </span>
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-sm">
                  Our engineering workflow is structured to guarantee velocity, security, and transparent communications at every milestone.
                </p>
              </div>

              {/* Right Side: Minimalist Typographic List */}
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12">
                  {[
                    { step: "01", name: "Technical Discovery", desc: "We audit your systems, outline data structures, and detail interface layouts." },
                    { step: "02", name: "System Architecture", desc: "We design databases, define API contracts, and draft technical paths." },
                    { step: "03", name: "Sprints & Delivery", desc: "We build features in modular sprints, providing weekly demo builds." },
                    { step: "04", name: "Validation & Launch", desc: "We run Playwright suites, complete light sweeps, and deploy to CDN Edge." },
                  ].map((p, i) => (
                    <motion.div
                      key={p.step}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUp}
                      className="group flex flex-col items-start border-t border-border/50 pt-8 relative overflow-hidden text-left"
                    >
                      {/* Top glowing line indicator on hover */}
                      <div className="absolute top-0 left-0 h-[2px] bg-[#0474C4] w-0 group-hover:w-full transition-all duration-300" />
                      
                      <div className="flex items-center gap-3 mb-4">
                        <span className="font-mono text-sm font-bold text-[#0474C4]">
                          {p.step}.
                        </span>
                        <h3 className="font-heading font-bold text-lg text-foreground tracking-tight font-heading">
                          {p.name}
                        </h3>
                      </div>
                      <p className="text-sm sm:text-base text-muted-foreground/90 leading-relaxed">
                        {p.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
