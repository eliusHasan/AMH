"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Shield, Lightbulb, Target, Rocket, Users, Globe, Award, TrendingUp } from "lucide-react";
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
  { value: "1,000+", label: "Projects Delivered", icon: Rocket },
  { value: "99%", label: "Client Satisfaction", icon: Award },
  { value: "50+", label: "Global Partners", icon: Globe },
  { value: "24/7", label: "Support Available", icon: TrendingUp },
];

const values = [
  {
    icon: Shield,
    title: "Uncompromising Integrity",
    desc: "We prioritize security, transparency, and data privacy in all integrations, ensuring your intellectual property remains yours.",
    color: "bg-blue-500/10 border-blue-500/20 text-blue-400",
  },
  {
    icon: Lightbulb,
    title: "Continuous Innovation",
    desc: "We stay at the vanguard of technologies, integrating state-of-the-art AI advancements and optimizing architecture efficiency.",
    color: "bg-[#5379AE]/10 border-[#5379AE]/20 text-[#A8C4EC]",
  },
  {
    icon: Target,
    title: "Results-Driven Delivery",
    desc: "We design products that achieve verifiable business outcomes, whether cutting processing timelines or scaling user throughput.",
    color: "bg-[#0474C4]/10 border-[#0474C4]/20 text-[#A8C4EC]",
  },
  {
    icon: Users,
    title: "Client-First Partnership",
    desc: "We treat every client engagement as a long-term partnership, not a transaction — deeply invested in your success at every stage.",
    color: "bg-[#06457F]/10 border-[#06457F]/20 text-[#A8C4EC]",
  },
];

const milestones = [
  {
    year: "2023",
    title: "Company Founded",
    desc: "Kodenri was established in Dhaka, Bangladesh, with a mission to deliver world-class enterprise software development solutions.",
  },
  {
    year: "2024",
    title: "Deep-Tech Expansion",
    desc: "Successfully integrated advanced AI/LLM models for leading healthcare and legal operations, shifting focus towards intelligent applications.",
  },
  {
    year: "2025",
    title: "Global Partner Scaling",
    desc: "Reached key scaling markers, delivering microservices cloud migrations and native mobile products for partners in the US, EU, and Asia.",
  },
  {
    year: "2026",
    title: "Next-Gen AI Systems",
    desc: "Established a dedicated AI systems wing, designing private VPC document agent solutions and cutting-edge Web architectures.",
  },
];

const team = [
  {
    name: "Elius Ahmed",
    role: "Founder & Lead Architect",
    bio: "Ex-enterprise systems designer with 10+ years architecting web architectures and cloud-native database networks.",
    img: "/team-elius.png",
    initials: "EA",
    color: "from-[#0474C4]/30 to-[#06457F]/30",
  },
  {
    name: "Dr. Aris Thorne",
    role: "Head of AI Research",
    bio: "PhD in Machine Learning. Specialist in semantic search, private RAG pipeline design, and neural networks.",
    img: "/team-aris.png",
    initials: "AT",
    color: "from-[#5379AE]/30 to-[#2C444C]/30",
  },
  {
    name: "Marcus Vance",
    role: "Principal Cloud Engineer",
    bio: "Kubernetes expert and IaC designer, specializing in low-downtime database scaling and automated multi-cloud setups.",
    img: "/team-marcus.png",
    initials: "MV",
    color: "from-[#06457F]/30 to-[#262B40]/30",
  },
];

export default function About() {
  return (
    <>
      <Navbar />

      <main className="flex-grow">

        {/* ── Hero Banner with Side-by-Side Story & Stats ── */}
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
                    Empowering Enterprises{" "}
                    <span className="bg-gradient-to-r from-primary via-accent to-[#5379AE] bg-clip-text text-transparent drop-shadow-sm">
                      Through Tech
                    </span>
                  </h1>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
                    Kodenri is a premium software engineering agency partnering with visionary businesses to build secure, scalable, and intelligent applications that drive real-world results.
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

        {/* ── Mission & Story with Image ── */}
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
                  alt="Our mission — engineering excellence"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#06457F]/40 to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 bg-card border border-border/40 shadow-xl rounded-2xl px-5 py-4 backdrop-blur-sm">
                <div className="text-2xl font-black text-primary">2023</div>
                <div className="text-xs text-muted-foreground font-medium">Founded in Dhaka, BD</div>
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
                <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">Our Mission</span>
                <h2 className="font-heading font-black text-3xl sm:text-4xl text-foreground leading-tight mb-4">
                  Engineering Intelligence at Scale
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  To engineer secure, intelligent, and highly scalable software solutions that accelerate digital transformation, helping organizations achieve market leadership through premium technology integrations.
                </p>
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">Our Vision</span>
                <p className="text-muted-foreground leading-relaxed">
                  To be recognized globally as a premium technology partner, celebrated for our commitment to data integrity, design excellence, and innovative software architecture that helps businesses scale beyond limits.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <div className="flex-1 p-5 rounded-2xl border border-border/40 bg-card/60 backdrop-blur-sm">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-3">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div className="font-bold text-foreground text-sm mb-1">Global Reach</div>
                  <div className="text-xs text-muted-foreground">Clients across US, EU & Asia</div>
                </div>
                <div className="flex-1 p-5 rounded-2xl border border-border/40 bg-card/60 backdrop-blur-sm">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-3">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div className="font-bold text-foreground text-sm mb-1">Enterprise-Grade</div>
                  <div className="text-xs text-muted-foreground">HIPAA & PCI-DSS compliant</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Core Values (Typographic Redesign) ── */}
        <section className="py-28 px-4 border-t border-border/20 bg-background relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              
              {/* Left Side: Header */}
              <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-5 text-left">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 border border-primary/20">
                  Core Values
                </span>
                <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight leading-tight">
                  What Guides <br />
                  <span className="bg-gradient-to-r from-[#0474C4] to-[#5379AE] bg-clip-text text-transparent">
                    Our Code
                  </span>
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-sm">
                  Our principles shape every line of code we write and every client relationship we build.
                </p>
              </div>

              {/* Right Side: Minimalist Typographic List */}
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12">
                  {values.map((v, i) => (
                    <motion.div
                      key={v.title}
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
                        <span className="font-mono text-sm font-bold text-primary">
                          0{i + 1}.
                        </span>
                        <h3 className="font-heading font-bold text-lg text-foreground tracking-tight">
                          {v.title}
                        </h3>
                      </div>
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

        {/* ── Timeline ── */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">Timeline</span>
              <h2 className="font-heading font-black text-3xl sm:text-4xl text-foreground mb-4">Our Journey So Far</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                From a focused startup to a globally recognized engineering agency.
              </p>
            </motion.div>

            <div className="relative pl-8 sm:pl-16 border-l-2 border-primary/20 space-y-12">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
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
                      {m.year}
                    </span>
                    <h3 className="font-heading font-bold text-lg text-foreground mb-2">{m.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Team ── */}
        <section className="py-24 px-4 bg-secondary/10 border-t border-border/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">Team</span>
              <h2 className="font-heading font-black text-3xl sm:text-4xl text-foreground mb-4">Meet the Architects</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Highly specialized engineers delivering world-class enterprise software solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, i) => (
                <motion.div
                  key={member.name}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="group relative rounded-3xl overflow-hidden border border-border/40 bg-card/80 backdrop-blur-sm hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 shadow-lg"
                >
                  {/* Avatar / image area */}
                  <div className={`relative aspect-[4/3] bg-gradient-to-br ${member.color} overflow-hidden`}>
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                      onError={() => {}} // gracefully fallback
                    />
                    {/* Fallback initials shown under image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-5xl font-black text-foreground/20 select-none">{member.initials}</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <h3 className="font-heading font-bold text-lg text-foreground">{member.name}</h3>
                    <p className="text-xs text-primary font-semibold tracking-wider uppercase mt-1 mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
