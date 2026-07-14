"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  User,
  MessageSquare,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

// Slugs must match the ?service= deep links on the services page
const serviceOptions: { value: string; label: string }[] = [
  { value: "general", label: "General Query / Quote" },
  { value: "ai-automation", label: "AI Automation" },
  { value: "ai-solutions", label: "AI Solutions" },
  { value: "web-platforms", label: "Web Platforms" },
  { value: "mobile-apps", label: "Mobile Apps" },
  { value: "backend-apis", label: "Backend & API Development" },
  { value: "cloud-devops", label: "Cloud & DevOps" },
  { value: "ui-ux-design", label: "UI/UX Design" },
  { value: "qa-testing", label: "QA & Software Testing" },
  { value: "maintenance", label: "System Maintenance & Support" },
];

const serviceLabel = (value: string) =>
  serviceOptions.find((o) => o.value === value)?.label ?? "General Query / Quote";

// Contact form component that uses useSearchParams
function ContactFormContent() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service") || "general";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("general");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  // Set the service from search params if present (ignore unknown slugs)
  useEffect(() => {
    if (serviceOptions.some((o) => o.value === serviceParam)) {
      setService(serviceParam);
    }
  }, [serviceParam]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!name) newErrors.name = "Full name is required";
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!message) newErrors.message = "Message details are required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent(
      `[${serviceLabel(service)}] Inquiry from ${name}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nService: ${serviceLabel(service)}\n\n${message}`
    );
    window.location.href = `mailto:md.sharif.rahman@gmail.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
    // Reset after some time
    setTimeout(() => {
      setName("");
      setEmail("");
      setService("general");
      setMessage("");
      setErrors({});
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div className="glass-card p-6.5 sm:p-8 rounded-3xl border border-border/40 relative overflow-hidden">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="py-16 text-center space-y-4"
          >
            <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-md">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="font-heading font-bold text-2xl text-foreground">
              Opening Your Email App...
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed">
              Your message has been prepared — just hit send in your email app. If nothing opened, email us directly at{" "}
              <a href="mailto:md.sharif.rahman@gmail.com" className="text-primary font-semibold hover:underline">
                md.sharif.rahman@gmail.com
              </a>.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div className="space-y-1.5">
              <label htmlFor="contact-name" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Full Name
              </label>
              <div className="relative flex items-center">
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Alex Mercer"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full text-sm px-4 py-2.5 pl-10 rounded-lg bg-secondary/20 border border-border/60 focus:border-primary/60 focus:outline-none transition-colors"
                />
                <User className="w-4 h-4 text-muted-foreground/60 absolute left-3.5" />
              </div>
              {errors.name && <p className="text-xxs text-destructive font-semibold">{errors.name}</p>}
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label htmlFor="contact-email" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Email Address
              </label>
              <div className="relative flex items-center">
                <input
                  id="contact-email"
                  type="email"
                  placeholder="alex@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-sm px-4 py-2.5 pl-10 rounded-lg bg-secondary/20 border border-border/60 focus:border-primary/60 focus:outline-none transition-colors"
                />
                <Mail className="w-4 h-4 text-muted-foreground/60 absolute left-3.5" />
              </div>
              {errors.email && <p className="text-xxs text-destructive font-semibold">{errors.email}</p>}
            </div>

            {/* Service */}
            <div className="space-y-1.5">
              <label htmlFor="contact-service" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Select Service
              </label>
              <select
                id="contact-service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full text-sm px-4 py-2.5 rounded-lg bg-secondary/20 border border-border/60 focus:border-primary/60 focus:outline-none transition-colors text-foreground"
              >
                {serviceOptions.map((o) => (
                  <option key={o.value} value={o.value} className="bg-background text-foreground">
                    {o.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div className="space-y-1.5">
              <label htmlFor="contact-message" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Project Details
              </label>
              <div className="relative flex items-start">
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="Outline your product requirements, current stack, and timelines..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full text-sm px-4 py-2.5 pl-10 rounded-lg bg-secondary/20 border border-border/60 focus:border-primary/60 focus:outline-none transition-colors resize-none"
                />
                <MessageSquare className="w-4 h-4 text-muted-foreground/60 absolute left-3.5 top-3.5" />
              </div>
              {errors.message && <p className="text-xxs text-destructive font-semibold">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-2 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/95 transition-colors cursor-pointer shadow-lg shadow-primary/10 flex items-center justify-center gap-2"
            >
              <span>Send Message</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Contact() {
  return (
    <>
      <Navbar />

      <main className="flex-grow pt-24">
        {/* ── Hero: Copy + Animated Chat ── */}
        <section className="relative py-16 sm:py-20 px-4 overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-primary/5 blur-[120px] -z-10" />

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">

              {/* Left: Copy */}
              <div className="lg:col-span-6 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6"
                >
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 border border-primary/20">
                    Get in Touch
                  </span>
                  <h1 className="font-heading font-extrabold text-4xl sm:text-6xl text-foreground tracking-tight leading-tight">
                    Let&apos;s Start{" "}
                    <span className="bg-gradient-to-r from-primary via-accent to-[#5379AE] bg-clip-text text-transparent">
                      a Conversation
                    </span>
                  </h1>
                  <p className="text-base sm:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
                    Discuss system requirements, stack migrations, or request a custom digital service quote.
                  </p>

                  {/* Quick contact chips */}
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
                    <a
                      href="mailto:md.sharif.rahman@gmail.com"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/60 bg-card/70 backdrop-blur-sm text-xs font-semibold text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors duration-300"
                    >
                      <Mail className="w-3.5 h-3.5 text-primary" />
                      md.sharif.rahman@gmail.com
                    </a>
                    <a
                      href="tel:+8801996338844"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/60 bg-card/70 backdrop-blur-sm text-xs font-semibold text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors duration-300"
                    >
                      <Phone className="w-3.5 h-3.5 text-primary" />
                      +880 1996-338844
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Right: Animated Chat Mockup */}
              <div className="lg:col-span-6 relative">
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
                  className="relative max-w-md mx-auto"
                >
                  {/* Glow */}
                  <div className="absolute -inset-8 bg-primary/12 blur-[90px] rounded-full -z-10" />

                  {/* Chat window */}
                  <div className="rounded-3xl border border-border/50 bg-card/85 backdrop-blur-xl shadow-2xl shadow-primary/10 overflow-hidden">
                    {/* Header */}
                    <div className="flex items-center gap-3 px-5 py-4 border-b border-border/40 bg-secondary/20">
                      <div className="relative">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-primary to-[#5379AE] flex items-center justify-center text-white text-xs font-black">
                          K
                        </div>
                        <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-card" />
                      </div>
                      <div className="text-left">
                        <div className="text-sm font-bold text-foreground leading-none">Kodenri Team</div>
                        <div className="text-[10px] text-emerald-500 font-semibold mt-1">Online — replies within 24h</div>
                      </div>
                    </div>

                    {/* Messages */}
                    <div className="p-5 space-y-3.5">
                      <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.45 }}
                        className="flex justify-start"
                      >
                        <div className="max-w-[80%] rounded-2xl rounded-tl-md bg-secondary/40 border border-border/40 px-4 py-2.5 text-xs sm:text-sm text-foreground text-left">
                          Hi! 👋 Tell us about your project.
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4, duration: 0.45 }}
                        className="flex justify-end"
                      >
                        <div className="max-w-[80%] rounded-2xl rounded-tr-md bg-primary text-primary-foreground px-4 py-2.5 text-xs sm:text-sm text-left shadow-md shadow-primary/20">
                          We need AI automation for our operations.
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.1, duration: 0.45 }}
                        className="flex justify-start"
                      >
                        <div className="max-w-[80%] rounded-2xl rounded-tl-md bg-secondary/40 border border-border/40 px-4 py-2.5 text-xs sm:text-sm text-foreground text-left">
                          Perfect fit — let&apos;s scope it on a free discovery call.
                        </div>
                      </motion.div>

                      {/* Typing indicator */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.8, duration: 0.4 }}
                        className="flex justify-end"
                      >
                        <div className="rounded-2xl rounded-tr-md bg-secondary/40 border border-border/40 px-4 py-3 flex items-center gap-1.5">
                          {[0, 1, 2].map((dot) => (
                            <motion.span
                              key={dot}
                              animate={{ opacity: [0.25, 1, 0.25] }}
                              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: dot * 0.2 }}
                              className="w-1.5 h-1.5 rounded-full bg-muted-foreground"
                            />
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Floating chip: response time */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-5 -right-2 sm:-right-7 flex items-center gap-2 rounded-full border border-border/50 bg-card/90 backdrop-blur-xl px-4 py-2 shadow-xl"
                  >
                    <Clock className="w-3.5 h-3.5 text-primary" />
                    <span className="text-[10px] font-bold text-foreground whitespace-nowrap">Replies within 24h</span>
                  </motion.div>

                  {/* Floating chip: free consultation */}
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-5 -left-2 sm:-left-7 flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 backdrop-blur-xl px-4 py-2 shadow-xl"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-[10px] font-bold text-foreground whitespace-nowrap">Free Consultation</span>
                  </motion.div>
                </motion.div>
              </div>

            </div>
          </div>
        </section>

        {/* Content Layout */}
        <section className="py-12 pb-24 px-4 bg-secondary/5 border-t border-border/20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Sidebar Details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="glass-card p-6.5 sm:p-8 rounded-3xl border border-border/40 space-y-6">
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-foreground">
                  Contact Information
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Have a question or want to start a project? Feel free to reach out to us using the details below or fill out the form.
                </p>

                <div className="space-y-4.5 pt-2">
                  <div className="flex items-start gap-3 text-sm text-muted-foreground">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground">Headquarters Office</h4>
                      <p className="text-xs sm:text-sm mt-0.5">Mirpur Road, Dhaka, Bangladesh</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground">Business Inquiries</h4>
                      <a href="mailto:md.sharif.rahman@gmail.com" className="text-xs sm:text-sm mt-0.5 hover:text-primary transition-colors">
                        md.sharif.rahman@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground">Phone Support</h4>
                      <a href="tel:+8801996338844" className="text-xs sm:text-sm mt-0.5 hover:text-primary transition-colors">
                        +880 1996-338844
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground">Operational Hours</h4>
                      <p className="text-xs sm:text-sm mt-0.5">Mon - Fri: 9:00 AM - 6:00 PM (GMT+6)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Headquarters map */}
              <div className="glass-card rounded-3xl border border-border/40 overflow-hidden">
                <iframe
                  title="Kodenri Headquarters — Mirpur Road, Dhaka, Bangladesh"
                  src="https://www.google.com/maps?q=Mirpur+Road,+Dhaka,+Bangladesh&output=embed"
                  className="w-full h-64 border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Form wrapped in Suspense to prevent build-time errors */}
            <div className="lg:col-span-7">
              <Suspense fallback={
                <div className="glass-card p-8 rounded-3xl border border-border/40 h-[450px] flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full border-4 border-primary/30 border-t-primary animate-spin" />
                </div>
              }>
                <ContactFormContent />
              </Suspense>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
