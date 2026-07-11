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
  Users,
  BadgeCheck,
  Clock,
  Handshake,
  UserCheck,
  MessageSquare,
  RefreshCw,
  FileText,
  Lock,
  Search,
  LifeBuoy,
  Zap,
  DollarSign,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SectionHeader } from "@/components/section-header";

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

// Service catalog — titles for the first six match the landing page cards
const services = [
  {
    id: "ai-automation",
    icon: Workflow,
    title: "AI Automation",
    desc: "Reduce manual work by up to 80% with intelligent chatbots, AI assistants, workflow automation, and document processing — orchestrated with n8n, Make, Zapier, and Temporal, and tailored to your business needs.",
    checklist: [
      "n8n, Make & Zapier workflows",
      "Intelligent chatbots & AI assistants",
      "Document processing & OCR",
      "AI agents (LangGraph, CrewAI)",
    ],
    image: "/hero-robot.png",
    cta: "/contact?service=ai-automation",
  },
  {
    id: "ai-solutions",
    icon: Bot,
    title: "AI Solutions",
    desc: "Custom AI systems built on ChatGPT, Claude, Gemini, and open-source models — from RAG pipelines with vector databases to fine-tuned domain assistants that keep your proprietary data private.",
    checklist: [
      "LLM integration & fine-tuning",
      "RAG pipelines & vector databases",
      "LangChain / LlamaIndex frameworks",
      "TensorFlow & PyTorch models",
    ],
    image: "/services-ai.png",
    cta: "/contact?service=ai-solutions",
  },
  {
    id: "web-platforms",
    icon: Globe,
    title: "Web Platforms",
    desc: "Fast, secure, SEO-friendly, and scalable web applications that help businesses attract customers, automate operations, and increase revenue — built with React, Next.js, Vue, and Angular.",
    checklist: [
      "React, Next.js, Vue & Angular",
      "Top Core Web Vitals scores",
      "SEO-friendly architecture",
      "Conversion-focused builds",
    ],
    image: "/services-web.png",
    cta: "/contact?service=web-platforms",
  },
  {
    id: "mobile-apps",
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "High-performance Android and iOS applications from a single codebase with Flutter and React Native — cutting development costs while delivering an exceptional user experience.",
    checklist: [
      "Flutter & React Native",
      "Single codebase, both stores",
      "Real-time sync & offline support",
      "App Store & Play deployment",
    ],
    image: "/services-mobile.png",
    cta: "/contact?service=mobile-apps",
  },
  {
    id: "backend-apis",
    icon: Server,
    title: "Backend & API Development",
    desc: "Secure, scalable, and high-performance backend systems with robust API architecture and third-party integrations — engineered with Node.js, NestJS, Express, and .NET on cloud-ready server architectures.",
    checklist: [
      "Node.js, NestJS & .NET services",
      "PostgreSQL & MongoDB schemas",
      "REST, GraphQL & WebSocket APIs",
      "JWT & OAuth 2.0 authentication",
    ],
    image: "/services-backend.png",
    cta: "/contact?service=backend-apis",
  },
  {
    id: "cloud-devops",
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "Deployment and management of systems on AWS, Google Cloud, and Microsoft Azure with performance optimization, security, and reliability enhancements — including Cloudflare CDN, DNS management, and DDoS protection.",
    checklist: [
      "AWS, GCP & Azure environments",
      "Kubernetes & Docker clusters",
      "CI/CD pipelines & IaC templates",
      "Cloudflare CDN & DDoS protection",
    ],
    image: "/services-cloud.png",
    cta: "/contact?service=cloud-devops",
  },
  {
    id: "ui-ux-design",
    icon: Palette,
    title: "UI/UX Design",
    desc: "Intuitive, visually appealing, and user-centric interfaces focused on usability, accessibility, and seamless customer experience — designed with Figma, Adobe XD, Framer, and Sketch.",
    checklist: [
      "Figma, Adobe XD & Framer",
      "Design systems & prototypes",
      "WCAG accessibility standards",
      "Conversion-focused layouts",
    ],
    image: "/services-design.png",
    cta: "/contact?service=ui-ux-design",
  },
  {
    id: "qa-automation",
    icon: ShieldCheck,
    title: "QA & Software Testing",
    desc: "Comprehensive quality assurance to ensure stable, reliable, and error-free applications — automation, unit, integration, smoke, and regression testing across all devices.",
    checklist: [
      "Selenium, Cypress & Playwright",
      "Jest unit & integration suites",
      "Postman API testing",
      "Smoke & regression coverage",
    ],
    image: "/services-testing.png",
    cta: "/contact?service=qa-testing",
  },
  {
    id: "sla-support",
    icon: Wrench,
    title: "System Maintenance & Support",
    desc: "Ongoing maintenance, monitoring, and technical support to ensure smooth, secure, long-term operation after deployment — including bug fixing, performance optimization, updates, and system monitoring.",
    checklist: [
      "3 months free support after launch",
      "Bug fixing & performance tuning",
      "Security audits & updates",
      "24/7 system monitoring",
    ],
    image: "/services-support.png",
    cta: "/contact?service=maintenance",
  },
];

const whyChooseUs = [
  { icon: UserCheck, title: "Dedicated Project Manager", tint: "text-sky-500 bg-sky-500/10 border-sky-500/20" },
  { icon: MessageSquare, title: "Free Consultation & Requirement Analysis", tint: "text-violet-500 bg-violet-500/10 border-violet-500/20" },
  { icon: RefreshCw, title: "Agile Development Process", tint: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20" },
  { icon: FileText, title: "Weekly Progress Reports", tint: "text-amber-500 bg-amber-500/10 border-amber-500/20" },
  { icon: Lock, title: "NDA & Data Security Assurance", tint: "text-rose-500 bg-rose-500/10 border-rose-500/20" },
  { icon: Search, title: "SEO-Friendly Development", tint: "text-cyan-500 bg-cyan-500/10 border-cyan-500/20" },
  { icon: Cloud, title: "Scalable Cloud Infrastructure", tint: "text-indigo-500 bg-indigo-500/10 border-indigo-500/20" },
  { icon: LifeBuoy, title: "3 Months Free Support After Launch", tint: "text-teal-500 bg-teal-500/10 border-teal-500/20" },
  { icon: Zap, title: "Fast Delivery & Transparent Communication", tint: "text-orange-500 bg-orange-500/10 border-orange-500/20" },
  { icon: DollarSign, title: "Competitive Pricing", tint: "text-lime-600 bg-lime-500/10 border-lime-500/20" },
];

const engagementModels = [
  {
    icon: Users,
    name: "Dedicated Team",
    desc: "A full-time development team works exclusively on your project under your direction or with our project manager — full control, high productivity, and scalability for long-term needs.",
    bestFor: "Ongoing product development, startups, and companies requiring continuous updates.",
  },
  {
    icon: BadgeCheck,
    name: "Fixed-Price",
    desc: "A clearly defined project scope, timeline, and cost agreed before development begins. We deliver on time and within budget, ensuring quality and accountability at every stage.",
    bestFor: "Projects with well-defined requirements and clear deliverables.",
  },
  {
    icon: Clock,
    name: "Hourly / Time-Based",
    desc: "Development tasks are billed on actual working hours. This flexible model lets you adjust workload and priorities according to business needs.",
    bestFor: "Maintenance, feature updates, or short-term development support.",
  },
  {
    icon: Handshake,
    name: "Partnership / Collaboration",
    desc: "For clients or consultants with local networks, we jointly deliver software solutions — Kodenri provides development expertise while partners manage client relationships and coordination.",
    bestFor: "Agencies, consultants, or IT professionals seeking a reliable development partner.",
  },
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
                    We offer a full range of software development and digital solutions designed to meet diverse business needs — delivering reliable, scalable, and cost-effective systems through advanced technology and professional collaboration.
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
                      href="#engagement-models"
                      className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-foreground border border-border bg-secondary/50 hover:bg-secondary/80 transition-all duration-300 hover:-translate-y-0.5"
                    >
                      Engagement Models
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

        {/* ── Services — Alternating Rows ── */}
        <section className="py-20 sm:py-28 px-4 bg-secondary/5">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              badge="Services"
              title="How We Help You"
              subtitle="A full range of software development and digital solutions designed to meet diverse business needs."
            />

            <div className="space-y-20 sm:space-y-28">
              {services.map((service, index) => {
                const Icon = service.icon;
                const imageRight = index % 2 === 1;
                return (
                  <motion.div
                    key={service.id}
                    id={service.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center"
                  >
                    {/* Image — rounded card with soft glow */}
                    <div className={`relative flex justify-center ${imageRight ? "md:order-2" : ""}`}>
                      {/* Soft glow behind image */}
                      <div className="absolute inset-8 -z-10 rounded-3xl bg-primary/15 blur-3xl" />
                      <div className="group relative w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden border border-border/40 shadow-2xl shadow-black/15 ring-1 ring-black/5">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                      </div>
                    </div>

                    {/* Text */}
                    <div className={`space-y-5 text-left ${imageRight ? "md:order-1" : ""}`}>
                      <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-foreground tracking-tight">
                        {service.title}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {service.desc}
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-muted-foreground/80">
                        {service.checklist.map((item) => (
                          <li key={item} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" /> {item}
                          </li>
                        ))}
                      </ul>
                      <div className="pt-2">
                        <Link
                          href={service.cta}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold bg-primary text-primary-foreground hover:bg-primary/95 transition-all duration-300 shadow-md shadow-primary/15 hover:-translate-y-0.5"
                        >
                          Learn More <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Why Choose Us ── */}
        <section className="py-20 sm:py-28 px-4 border-t border-border/20">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              badge="Why Choose Us"
              title="Built Around Your Success"
              subtitle="Every engagement includes the guarantees and working practices that make delivery predictable and transparent."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {whyChooseUs.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="glass-card group p-5 rounded-2xl border border-border/40 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4 text-left"
                  >
                    <div className={`w-11 h-11 rounded-xl border flex items-center justify-center group-hover:scale-105 transition-transform duration-300 ${item.tint}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-semibold text-foreground leading-snug">
                      {item.title}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Engagement Models ── */}
        <section id="engagement-models" className="py-20 sm:py-28 px-4 border-t border-border/20 bg-secondary/5">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              badge="Engagement Models"
              title="Flexible Ways to Work Together"
              subtitle="Each model is designed to ensure transparency, efficiency, and smooth communication throughout the development process."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {engagementModels.map((model, i) => {
                const Icon = model.icon;
                return (
                  <motion.div
                    key={model.name}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="glass-card p-6.5 rounded-2xl border border-border/40 flex flex-col justify-between text-left"
                  >
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-xl bg-[#0474C4]/15 border border-[#0474C4]/30 flex items-center justify-center text-[#0474C4]">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-heading font-bold text-lg text-foreground">{model.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{model.desc}</p>
                    </div>
                    <div className="pt-5 border-t border-border/30 mt-5">
                      <span className="text-xs text-muted-foreground/80 leading-relaxed">
                        <span className="font-semibold text-primary">Best for:</span> {model.bestFor}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
