"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Award, Rocket, Globe, TrendingUp, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const stats = [
  { value: "10+", label: "Years with Japanese Enterprises", icon: Award },
  { value: "2026", label: "Kodenri Founded", icon: Rocket },
  { value: "100+", label: "Projects Delivered", icon: Globe },
  { value: "24/7", label: "Support Available", icon: TrendingUp },
];

// Values rooted in the Japanese engineering culture the team grew up in
const values = [
  {
    jp: "改善",
    name: "Kaizen",
    title: "Continuous Improvement",
    desc: "Every sprint, every release, every process gets a little better. We refine relentlessly — small, disciplined improvements compound into world-class software.",
  },
  {
    jp: "ものづくり",
    name: "Monozukuri",
    title: "Craftsmanship in Engineering",
    desc: "Software is a craft. We take deep pride in clean architecture, careful naming, and details users never see but always feel.",
  },
  {
    jp: "おもてなし",
    name: "Omotenashi",
    title: "Anticipating Client Needs",
    desc: "True service means solving problems before they are spoken. We listen closely, communicate transparently, and deliver more than the spec asks.",
  },
  {
    jp: "信頼",
    name: "Shinrai",
    title: "Trust & Reliability",
    desc: "Deadlines are honored. Data is protected. Promises are kept. Long-term trust — not one-off transactions — is how we measure success.",
  },
];

const journey = [
  {
    label: "The Roots",
    title: "Learning the Japanese Way",
    desc: "Our engineers began their careers building software with and for Japanese companies — absorbing an engineering culture defined by precision, discipline, and uncompromising quality.",
  },
  {
    label: "The Experience",
    title: "A Decade of Enterprise Delivery",
    desc: "Over more than ten years, the team delivered mission-critical systems for Japanese enterprises — web platforms, mobile products, backend infrastructure, and automation — gathering deep, hard-won expertise.",
  },
  {
    label: "2026",
    title: "Kodenri Is Born",
    desc: "In 2026, the team united that experience under one name and founded Kodenri — bringing Japanese engineering standards to clients around the world.",
  },
  {
    label: "Today",
    title: "Building What the Future Needs",
    desc: "Today Kodenri designs AI systems, web and mobile platforms, and cloud infrastructure with the same care we learned in Japan — for partners everywhere.",
  },
];

export default function About() {
  return (
    <>
      <Navbar />

      <main className="flex-grow">

        {/* ── Hero Banner with Story & Stats ── */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-background">
          {/* Background image */}
          <div className="absolute inset-0 -z-10 bg-background">
            <Image
              src="/about-hero.png"
              alt="Kodenri team at work"
              fill
              className="object-cover object-center opacity-30 dark:opacity-85 mix-blend-overlay dark:mix-blend-normal"
              priority
            />
            {/* Theme-aware gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/75 to-background/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-40 w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

              {/* Left Side: Our Story */}
              <div className="lg:col-span-7 text-left">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6"
                >
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 border border-primary/20">
                    Our Story
                  </span>
                  <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-foreground tracking-tight leading-tight">
                    Forged in Japan,{" "}
                    <span className="bg-gradient-to-r from-primary via-accent to-[#5379AE] bg-clip-text text-transparent drop-shadow-sm">
                      Built for the World
                    </span>
                  </h1>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
                    For over a decade, the Kodenri team engineered software alongside Japanese companies — absorbing a culture of precision, craftsmanship, and reliability. In 2026, we brought that experience together and founded Kodenri.
                  </p>
                </motion.div>
              </div>

              {/* Right Side: Stats Grid */}
              <div className="lg:col-span-5 w-full">
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      custom={i}
                      initial="hidden"
                      animate="visible"
                      variants={fadeUp}
                      className="p-5 rounded-2xl border border-border/50 bg-card/85 backdrop-blur-md shadow-lg hover:border-primary/30 hover:bg-card transition-all duration-300 flex flex-col gap-3 text-left"
                    >
                      <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                        <stat.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-heading font-black text-2xl sm:text-3xl text-foreground">{stat.value}</div>
                        <div className="text-[10px] text-muted-foreground font-semibold tracking-wider uppercase mt-1">{stat.label}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── The Kodenri Story ── */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Panel */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
                <Image
                  src="/about-mission.png"
                  alt="Kodenri — engineering excellence"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#06457F]/40 to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 bg-card border border-border/40 shadow-xl rounded-2xl px-5 py-4 backdrop-blur-sm">
                <div className="text-2xl font-black text-primary">2026</div>
                <div className="text-xs text-muted-foreground font-medium">Kodenri Founded</div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">Why Kodenri Exists</span>
                <h2 className="font-heading font-black text-3xl sm:text-4xl text-foreground leading-tight mb-4">
                  Japanese Engineering Discipline, Delivered Worldwide
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Working inside Japan&apos;s demanding enterprise environment for years taught us something rare: quality is not a feature — it is a habit. Rigorous code review, meticulous testing, punctual delivery, and total respect for the client&apos;s trust were simply how work was done.
                </p>
              </div>
              <div>
                <p className="text-muted-foreground leading-relaxed">
                  In 2026 we founded Kodenri to bring that standard to businesses everywhere. Every project we take on — AI automation, web platforms, mobile apps, or cloud infrastructure — is built with the same discipline our team practiced with Japanese partners for over a decade.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold bg-primary text-primary-foreground hover:bg-primary/95 transition-all duration-300 shadow-md shadow-primary/15 hover:-translate-y-0.5"
                >
                  Work With Us <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Values — Japanese Principles ── */}
        <section className="py-28 px-4 border-t border-border/20 bg-secondary/5 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

              {/* Left Side: Header */}
              <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-5 text-left">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 border border-primary/20">
                  Our Values
                </span>
                <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight leading-tight">
                  Principles We <br />
                  <span className="bg-gradient-to-r from-[#0474C4] to-[#5379AE] bg-clip-text text-transparent">
                    Brought Home
                  </span>
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-sm">
                  Four principles from Japanese engineering culture shape every line of code we write and every relationship we build.
                </p>
              </div>

              {/* Right Side: Values List */}
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12">
                  {values.map((v, i) => (
                    <motion.div
                      key={v.name}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUp}
                      className="group flex flex-col items-start border-t border-border/50 pt-8 relative overflow-hidden text-left"
                    >
                      {/* Top glowing line indicator on hover */}
                      <div className="absolute top-0 left-0 h-[2px] bg-[#0474C4] w-0 group-hover:w-full transition-all duration-300" />

                      <div className="flex items-baseline gap-3 mb-1">
                        <span className="font-heading text-2xl font-black text-primary/80 select-none">{v.jp}</span>
                        <span className="font-mono text-xs font-bold text-muted-foreground uppercase tracking-widest">{v.name}</span>
                      </div>
                      <h3 className="font-heading font-bold text-lg text-foreground tracking-tight mb-3">
                        {v.title}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground/90 leading-relaxed">
                        {v.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Journey Timeline ── */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">Journey</span>
              <h2 className="font-heading font-black text-3xl sm:text-4xl text-foreground mb-4">From Japan to Kodenri</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                A decade of enterprise experience, distilled into one company.
              </p>
            </motion.div>

            <div className="relative pl-8 sm:pl-16 border-l-2 border-primary/20 space-y-12">
              {journey.map((m, i) => (
                <motion.div
                  key={m.label}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="relative group"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[37px] sm:-left-[53px] top-1 w-5 h-5 rounded-full bg-background border-2 border-primary group-hover:bg-primary transition-colors duration-300 shadow-md shadow-primary/20" />

                  <div className="p-6 rounded-2xl border border-border/40 bg-card/60 backdrop-blur-sm hover:border-primary/30 transition-colors duration-300">
                    <span className="inline-block text-xs font-extrabold text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-3">
                      {m.label}
                    </span>
                    <h3 className="font-heading font-bold text-lg text-foreground mb-2">{m.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Closing CTA ── */}
        <section className="py-20 sm:py-24 px-4 border-t border-border/20 text-center relative overflow-hidden bg-secondary/5">
          <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent -z-10" />
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-foreground tracking-tight leading-tight">
              Experience the Kodenri Standard
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              A decade of Japanese enterprise discipline, now working for your business.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary/95 transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/35 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Start a Conversation</span>
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
