"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Bot,
  Globe,
  Smartphone,
  Cloud,
  ArrowUpRight,
  Plus,
  Minus,
  CheckCircle,
  Terminal,
  Activity,
  Cpu,
  Layers,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SectionHeader } from "@/components/section-header";
import { portfolioProjects } from "@/data/portfolio";

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

// FAQ data
const faqs = [
  {
    question: "What industries does AMH Info Tech specialize in?",
    answer: "We partner with enterprises across healthcare, fintech, luxury retail, logistics, and education. We specialize in engineering solutions that adapt to strict compliance frameworks like HIPAA and PCI-DSS.",
  },
  {
    question: "How long does a typical software development project take?",
    answer: "A standard enterprise web or mobile application takes between 3 to 6 months from initial discovery to deployment. Smaller proof-of-concepts (PoCs) or AI integrations can be completed in 4 to 8 weeks.",
  },
  {
    question: "Do you offer post-launch support and maintenance?",
    answer: "Yes, we offer flexible post-launch SLA support plans covering security audits, performance monitoring, database tuning, cloud cost optimization, and framework updates.",
  },
  {
    question: "How do you handle data privacy when integrating AI?",
    answer: "We design cloud-native AI setups using private VPC deployments and RAG architectures. Your proprietary data never feeds back into public AI model training sets.",
  },
];

export default function Home() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

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

          {/* ── Main Content ── */}
          <div className="max-w-5xl mx-auto w-full text-center pt-20 pb-12">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div variants={itemVariants} className="flex justify-center">
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
                className="font-heading font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05]"
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
                className="text-base sm:text-lg md:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed"
              >
                AMH Info Tech architects high-performance AI systems, cloud-native platforms, and enterprise software that scales to millions — built by engineers who care.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
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
                  id="hero-secondary-cta"
                  href="/portfolio"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold text-white border border-white/30 hover:border-white/60 hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-sm"
                >
                  View Our Work
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </motion.div>

              {/* Trust bar */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap items-center justify-center gap-2 pt-4 text-xs text-white/40"
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

              {/* Floating Metric Cards */}
              <motion.div
                variants={itemVariants}
                className="relative mt-10 h-32 flex items-center justify-center"
              >
                {/* Card 1 — left */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute left-0 sm:left-4 md:left-12 lg:left-0 top-0 z-10 flex items-center gap-3 px-4 py-3 rounded-2xl border border-white/10 bg-black/50 backdrop-blur-xl shadow-2xl shadow-black/30"
                >
                  <div className="w-9 h-9 rounded-xl bg-violet-500/15 border border-violet-500/20 flex items-center justify-center text-violet-500">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-white/50">System Uptime</div>
                    <div className="text-base font-black text-white">99.98%</div>
                  </div>
                </motion.div>

                {/* Card 2 — center */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="relative z-20 flex items-center gap-3 px-5 py-3.5 rounded-2xl border border-[#0474C4]/40 bg-[#06457F]/40 backdrop-blur-xl shadow-2xl shadow-[#0474C4]/20 ring-1 ring-[#0474C4]/20"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center text-primary">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-white/50">Projects Delivered</div>
                    <div className="text-lg font-black text-white">1,000+</div>
                  </div>
                </motion.div>

                {/* Card 3 — right */}
                <motion.div
                  animate={{ y: [0, -7, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute right-0 sm:right-4 md:right-12 lg:right-0 top-0 z-10 flex items-center gap-3 px-4 py-3 rounded-2xl border border-white/10 bg-black/50 backdrop-blur-xl shadow-2xl shadow-black/30"
                >
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/15 border border-cyan-500/20 flex items-center justify-center text-cyan-500">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-white/50">AI Accuracy</div>
                    <div className="text-base font-black text-white">99%</div>
                  </div>
                </motion.div>
              </motion.div>

            </motion.div>
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Bot,
                  title: "AI Solutions",
                  desc: "Custom LLMs, vector database setup, automated workflows, and RAG architectures protecting client privacy.",
                  color: "from-purple-500/20 to-indigo-500/20 border-purple-500/10",
                },
                {
                  icon: Globe,
                  title: "Web Platforms",
                  desc: "Ultra-fast Next.js React sites engineered for top core web vitals performance, SEO, and conversions.",
                  color: "from-blue-500/20 to-indigo-500/20 border-blue-500/10",
                },
                {
                  icon: Smartphone,
                  title: "Mobile Apps",
                  desc: "Native iOS and Android systems built with Bluetooth pairings, real-time sync, and off-line support.",
                  color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/10",
                },
                {
                  icon: Cloud,
                  title: "Cloud & DevOps",
                  desc: "IaC with Terraform, Kubernetes clustering, secure CI/CD pipelines, and zero-downtime server migrations.",
                  color: "from-amber-500/20 to-orange-500/20 border-amber-500/10",
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
                      href="/services"
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

        {/* Portfolio Showcase Section */}
        <section className="py-20 sm:py-28 px-4 border-t border-border/20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
              <div className="max-w-xl">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 border border-primary/20 mb-3">
                  Featured Work
                </span>
                <h2 className="font-heading font-extrabold text-3xl sm:text-4.5xl text-foreground tracking-tight">
                  Engineered to Deliver Real Business Value
                </h2>
              </div>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-1.5 px-4.5 py-2 text-sm font-semibold rounded-lg bg-secondary/50 text-foreground border border-border/40 hover:bg-secondary mt-4 md:mt-0 transition-colors self-start cursor-pointer"
              >
                <span>View All Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {portfolioProjects.slice(0, 2).map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="glass-card p-5.5 sm:p-7.5 rounded-2xl border flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                        {project.categoryLabel}
                      </span>
                      <span className="text-xs text-muted-foreground font-medium">
                        Client: {project.clientName}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Metric Spotlight */}
                    <div className="p-4 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-between">
                      <span className="text-xs sm:text-sm font-medium text-muted-foreground">
                        {project.metrics.label}
                      </span>
                      <span className="text-xl sm:text-2xl font-extrabold text-primary glow-text">
                        {project.metrics.value}
                      </span>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs rounded bg-secondary/50 border border-border/40 text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border/30 mt-6 flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">Timeline: {project.duration}</span>
                    <Link
                      href={`/portfolio#${project.id}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-foreground hover:text-primary transition-colors group/link"
                    >
                      <span>Read Case Study</span>
                      <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
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

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { name: "Next.js 15", category: "Frontend" },
                { name: "React 19", category: "Frontend" },
                { name: "TypeScript", category: "Language" },
                { name: "Tailwind CSS", category: "Styling" },
                { name: "Framer Motion", category: "Animations" },
                { name: "Node.js", category: "Backend" },
                { name: "Python / FastAPI", category: "AI & ML" },
                { name: "LlamaIndex", category: "AI & ML" },
                { name: "PostgreSQL", category: "Database" },
                { name: "Docker", category: "DevOps" },
                { name: "Kubernetes", category: "DevOps" },
                { name: "AWS Cloud", category: "Cloud" },
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="glass-card p-4.5 rounded-xl border border-border/50 text-center flex flex-col justify-center items-center"
                >
                  <span className="font-heading font-bold text-sm sm:text-base text-foreground">
                    {tech.name}
                  </span>
                  <span className="text-xxs text-primary font-medium tracking-wider uppercase mt-1">
                    {tech.category}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 sm:py-28 px-4 border-t border-border/20">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              badge="Client Reviews"
              title="What Partners Say About AMH"
              subtitle="We collaborate with teams around the world, engineering solutions that increase operations efficiency."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  quote: "AMH Info Tech exceeded our expectations. Their execution of our Document AI intelligence engine reduced contract lookup timelines by 85%. Absolute game-changer.",
                  author: "Reginald Shaw",
                  role: "Managing Director, Apex Legal Partners",
                  rating: 5,
                },
                {
                  quote: "Their Next.js frontend expertise is state-of-the-art. Our conversion rate increased by 42% in the first two months post-launch. Highly recommended agency.",
                  author: "Sophia Moretti",
                  role: "Chief Operating Officer, Velluto Goods",
                  rating: 5,
                },
                {
                  quote: "Migrating our financial systems to serverless Kubernetes was smooth. The blue-green delivery pipeline setup works cleanly without any downtime.",
                  author: "Tanvir Rahman",
                  role: "VP of Engineering, Nexus Finance",
                  rating: 5,
                },
              ].map((t, i) => (
                <motion.div
                  key={t.author}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass-card p-6.5 rounded-2xl border flex flex-col justify-between"
                >
                  <p className="text-sm sm:text-base text-muted-foreground italic leading-relaxed">
                    "{t.quote}"
                  </p>
                  <div className="pt-6 border-t border-border/40 mt-6">
                    <h4 className="font-heading font-bold text-sm text-foreground">
                      {t.author}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-0.5">{t.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 sm:py-28 px-4 border-t border-border/20 bg-secondary/5">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              badge="FAQ"
              title="Frequently Asked Questions"
              subtitle="Answers to common queries about our collaboration model and technical workflows."
            />

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isActive = activeFAQ === index;
                return (
                  <div
                    key={index}
                    className="glass-card rounded-xl border border-border/40 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex items-center justify-between px-6 py-5.5 text-left font-heading font-semibold text-foreground text-sm sm:text-base cursor-pointer focus:outline-none"
                    >
                      <span>{faq.question}</span>
                      {isActive ? (
                        <Minus className="w-5 h-5 text-primary flex-shrink-0 ml-4" />
                      ) : (
                        <Plus className="w-5 h-5 text-muted-foreground flex-shrink-0 ml-4" />
                      )}
                    </button>

                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: isActive ? "auto" : 0,
                        opacity: isActive ? 1 : 0,
                      }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-border/20 text-sm text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  </div>
                );
              })}
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
              Partner with AMH Info Tech to deliver enterprise-grade products custom engineered for your performance target.
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
