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
import { SectionHeader } from "@/components/section-header";

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
    window.location.href = `mailto:sharif.rahman@gmail.com?subject=${subject}&body=${body}`;

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
              <a href="mailto:sharif.rahman@gmail.com" className="text-primary font-semibold hover:underline">
                sharif.rahman@gmail.com
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
        {/* Intro */}
        <section className="relative py-16 px-4 overflow-hidden text-center">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-primary/5 blur-[120px] -z-10" />

          <div className="max-w-4xl mx-auto space-y-6">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 border border-primary/20">
              Get in Touch
            </span>
            <h1 className="font-heading font-extrabold text-4xl sm:text-6xl text-foreground tracking-tight leading-tight">
              Connect With Us
            </h1>
            <p className="text-base sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Discuss system requirements, stack migrations, or request a custom digital service quote.
            </p>
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
                      <a href="mailto:sharif.rahman@gmail.com" className="text-xs sm:text-sm mt-0.5 hover:text-primary transition-colors">
                        sharif.rahman@gmail.com
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
