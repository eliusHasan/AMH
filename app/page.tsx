"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Globe,
  Smartphone,
  Cloud,
  CheckCircle,
  Workflow,
  Palette,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SectionHeader } from "@/components/section-header";

// Hero Animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
} as const;

const itemVariants = {
  hidden: { y: 25, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
} as const;

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex-grow">
        {/* ═══════════════════════════════════════════════════════════
              HERO SECTION — Premium Centered Layout
        ════════════════════════════════════════════════════════════ */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-8">

          {/* ── Full-bleed Circuit Board Background ── */}
          <div className="absolute inset-0 -z-20">
            <motion.div
              animate={{ scale: [1, 1.05, 1], x: [0, 8, -8, 0], y: [0, -6, 6, 0] }}
              transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-[-5%] w-[110%] h-[110%]"
            >
              <Image
                src="/hero-circuit.png"
                alt="Circuit board background"
                fill
                className="object-cover object-center"
                priority
                quality={90}
              />
            </motion.div>
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/85" />
            {/* Subtle blue brand tint overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-950/50 via-transparent to-[#06457F]/30" />
          </div>

          {/* ── Main Content: Split Layout ── */}
          <div className="max-w-7xl mx-auto w-full pt-28 pb-16 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-10 items-center">

              {/* Left: Copy */}
              <div className="lg:col-span-6 text-center lg:text-left">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-7"
                >
                  {/* Badge */}
                  <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-white bg-[#0474C4]/30 border border-[#A8C4EC]/30 backdrop-blur-sm">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A8C4EC] opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#A8C4EC]" />
                      </span>
                      Enterprise AI & Cloud Engineering
                    </div>
                  </motion.div>

                  {/* Headline */}
                  <motion.h1
                    variants={itemVariants}
                    className="font-heading font-black text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.05]"
                  >
                    <span className="text-white drop-shadow-lg">Build What</span>
                    <br />
                    <span className="bg-gradient-to-r from-[#A8C4EC] via-[#5379AE] to-[#0474C4] bg-clip-text text-transparent drop-shadow-lg">
                      the Future Needs
                    </span>
                  </motion.h1>

                  {/* Subheadline */}
                  <motion.p
                    variants={itemVariants}
                    className="text-base sm:text-lg text-white/75 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                  >
                    Kodenri architects high-performance AI systems, cloud-native platforms, and enterprise software that scales to millions — built by engineers who care.
                  </motion.p>

                  {/* CTA Buttons */}
                  <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
                  >
                    <Link
                      id="hero-primary-cta"
                      href="/contact"
                      className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5"
                    >
                      Start Your Project
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-white border border-white/25 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                    >
                      Explore Services
                    </Link>
                  </motion.div>

                  {/* Trust bar */}
                  <motion.div
                    variants={itemVariants}
                    className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-3 text-xs text-white/40"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                    <span>No lock-in contracts</span>
                    <span className="mx-2 text-border">·</span>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Free discovery call</span>
                    <span className="mx-2 text-border">·</span>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                    <span>100% client data privacy</span>
                  </motion.div>
                </motion.div>
              </div>

              {/* Right: Animated Deploy Console */}
              <div className="lg:col-span-6 relative">
                <motion.div
                  initial={{ opacity: 0, y: 40, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
                  className="relative max-w-lg mx-auto"
                >
                  {/* Glow behind console */}
                  <div className="absolute -inset-10 bg-primary/20 blur-[110px] rounded-full -z-10" />

                  {/* Code window */}
                  <div className="rounded-2xl border border-white/15 bg-[#0b1220]/85 backdrop-blur-xl shadow-2xl shadow-black/50 overflow-hidden">
                    {/* Title bar */}
                    <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                      </div>
                      <span className="font-mono text-[10px] text-white/50">kodenri.deploy.ts</span>
                      <span className="text-[9px] font-bold uppercase tracking-wider text-[#A8C4EC] bg-[#0474C4]/20 border border-[#A8C4EC]/20 px-2 py-0.5 rounded">
                        TypeScript
                      </span>
                    </div>

                    {/* Code body */}
                    <div className="p-5 sm:p-6 font-mono text-[11px] sm:text-[12.5px] leading-[1.9] text-left">
                      <div className="text-white/35">{"// build what the future needs"}</div>
                      <div>
                        <span className="text-[#A8C4EC]">const</span>
                        <span className="text-white/85"> project = </span>
                        <span className="text-[#A8C4EC]">await</span>
                        <span className="text-sky-300"> kodenri</span>
                        <span className="text-white/85">.build({"{"}</span>
                      </div>
                      <div className="pl-5">
                        <span className="text-white/85">stack: [</span>
                        <span className="text-emerald-300">&quot;Next.js&quot;</span>
                        <span className="text-white/85">, </span>
                        <span className="text-emerald-300">&quot;AI&quot;</span>
                        <span className="text-white/85">, </span>
                        <span className="text-emerald-300">&quot;AWS&quot;</span>
                        <span className="text-white/85">],</span>
                      </div>
                      <div className="pl-5">
                        <span className="text-white/85">quality: </span>
                        <span className="text-emerald-300">&quot;enterprise&quot;</span>
                        <span className="text-white/85">,</span>
                      </div>
                      <div className="text-white/85">{"});"}</div>
                      <div className="h-3" />
                      <div>
                        <span className="text-[#A8C4EC]">await</span>
                        <span className="text-white/85"> project.deploy({"{ "}</span>
                        <span className="text-white/85">region: </span>
                        <span className="text-emerald-300">&quot;global&quot;</span>
                        <span className="text-white/85">{" });"}</span>
                        <motion.span
                          animate={{ opacity: [1, 0, 1] }}
                          transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
                          className="inline-block w-[7px] h-[14px] bg-[#A8C4EC] ml-1 align-middle"
                        />
                      </div>
                      <div className="h-3" />
                      <div className="text-emerald-400">✓ Live in 1.2s — zero downtime</div>
                    </div>
                  </div>

                  {/* Floating: deployment status */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-7 -right-3 sm:-right-8 rounded-xl border border-white/15 bg-white/10 backdrop-blur-xl px-4 py-3 shadow-xl flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-bold text-white">Deployment successful</div>
                      <div className="text-[10px] text-white/55 font-mono">main → production · 12s</div>
                    </div>
                  </motion.div>

                  {/* Floating: uptime stat */}
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-8 -left-3 sm:-left-8 rounded-xl border border-white/15 bg-white/10 backdrop-blur-xl px-5 py-3.5 shadow-xl text-left"
                  >
                    <div className="text-xl font-black text-white leading-none">24/7</div>
                    <div className="text-[10px] uppercase tracking-wider text-white/55 font-semibold mt-1.5">Support</div>
                  </motion.div>

                  {/* Floating: AI engine chip */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-1/2 -right-4 sm:-right-10 hidden sm:flex items-center gap-2 rounded-full border border-[#A8C4EC]/25 bg-[#0474C4]/25 backdrop-blur-xl px-4 py-2 shadow-xl"
                  >
                    <Bot className="w-3.5 h-3.5 text-[#A8C4EC]" />
                    <span className="text-[10px] font-bold text-white whitespace-nowrap">AI Engine Active</span>
                  </motion.div>
                </motion.div>
              </div>

            </div>
          </div>

          {/* ── Bottom Fade ── */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent -z-10" />
        </section>

        {/* Services Highlight Section */}
        <section className="py-20 sm:py-28 px-4 border-t border-border/20 bg-secondary/5">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              badge="Services"
              title="Transformative Tech Offerings"
              subtitle="End-to-end software engineering and system architecture configured for modern enterprise requirements."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Workflow,
                  title: "AI Automation",
                  desc: "Business process automation with n8n, Zapier, and Make — connecting your CRM, APIs, and internal tools into hands-free AI workflows.",
                  color: "from-pink-500/20 to-rose-500/20 border-pink-500/10",
                  href: "/services#ai-automation",
                },
                {
                  icon: Bot,
                  title: "AI Solutions",
                  desc: "Custom LLMs, vector database setup, automated workflows, and RAG architectures protecting client privacy.",
                  color: "from-purple-500/20 to-indigo-500/20 border-purple-500/10",
                  href: "/services#ai-solutions",
                },
                {
                  icon: Smartphone,
                  title: "Mobile Apps",
                  desc: "Native iOS and Android systems built with Bluetooth pairings, real-time sync, and off-line support.",
                  color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/10",
                  href: "/services#mobile-apps",
                },
                {
                  icon: Cloud,
                  title: "Cloud & DevOps",
                  desc: "IaC with Terraform, Kubernetes clustering, secure CI/CD pipelines, and zero-downtime server migrations.",
                  color: "from-amber-500/20 to-orange-500/20 border-amber-500/10",
                  href: "/services#cloud-devops",
                },
                {
                  icon: Globe,
                  title: "Web Platforms",
                  desc: "Ultra-fast Next.js React sites engineered for top core web vitals performance, SEO, and conversions.",
                  color: "from-blue-500/20 to-indigo-500/20 border-blue-500/10",
                  href: "/services#web-platforms",
                },
                {
                  icon: Palette,
                  title: "UI/UX Design",
                  desc: "Conversion-focused interfaces, design systems, and interactive prototypes crafted for clarity, accessibility, and brand impact.",
                  color: "from-cyan-500/20 to-sky-500/20 border-cyan-500/10",
                  href: "/services#ui-ux-design",
                },
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`glass-card p-6.5 rounded-2xl border flex flex-col justify-between`}
                >
                  <div className="space-y-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${service.color} flex items-center justify-center border border-white/5`}>
                      <service.icon className="w-6 h-6 text-foreground" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                  <div className="pt-6">
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group/link"
                    >
                      <span>Explore service</span>
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Spotlight */}
        <section className="py-20 sm:py-28 px-4 border-t border-border/20 bg-secondary/5">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              badge="Expertise"
              title="Modern Tech Frameworks"
              subtitle="We build products using modern, future-proof frameworks to guarantee fast render budgets and absolute system stability."
            />

            <div className="space-y-5">
              {[
                {
                  reverse: false,
                  items: [
                    { name: "Next.js 15", category: "Frontend" },
                    { name: "React 19", category: "Frontend" },
                    { name: "TypeScript", category: "Language" },
                    { name: "Tailwind CSS", category: "Styling" },
                    { name: "Framer Motion", category: "Animations" },
                    { name: "Node.js", category: "Backend" },
                  ],
                },
                {
                  reverse: true,
                  items: [
                    { name: "Python / FastAPI", category: "AI & ML" },
                    { name: "LlamaIndex", category: "AI & ML" },
                    { name: "PostgreSQL", category: "Database" },
                    { name: "Docker", category: "DevOps" },
                    { name: "Kubernetes", category: "DevOps" },
                    { name: "AWS Cloud", category: "Cloud" },
                  ],
                },
              ].map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
                >
                  <motion.div
                    className="flex w-max"
                    animate={{ x: row.reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
                    transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                  >
                    {[...row.items, ...row.items].map((tech, index) => (
                      <div
                        key={`${tech.name}-${index}`}
                        className="glass-card p-4.5 mx-2 rounded-xl border border-border/50 text-center flex flex-col justify-center items-center flex-none min-w-44"
                      >
                        <span className="font-heading font-bold text-sm sm:text-base text-foreground whitespace-nowrap">
                          {tech.name}
                        </span>
                        <span className="text-xxs text-primary font-medium tracking-wider uppercase mt-1">
                          {tech.category}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-20 sm:py-28 px-4 border-t border-border/20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent -z-10" />
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-foreground tracking-tight leading-tight">
              Ready to Accelerate Your Digital Transformation?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Partner with Kodenri to deliver enterprise-grade products custom engineered for your performance target.
            </p>
            <div className="pt-2">
              <Link
                id="cta-bottom-button"
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary/95 transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/35 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Get a Custom Quote</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
