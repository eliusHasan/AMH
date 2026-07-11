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

  // Set the service from search params if present
  useEffect(() => {
    if (serviceParam) {
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

    setSubmitted(true);
    // Reset after some time
    setTimeout(() => {
      setName("");
      setEmail("");
      setService("general");
      setMessage("");
      setErrors({});
      setSubmitted(false);
    }, 3000);
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
              Message Sent!
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed">
              Thank you for contacting Kodenri. A technology advisor will audit your details and respond within 24 business hours.
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
                <option value="general" className="bg-background text-foreground">General Query / Quote</option>
                <option value="ai-solutions" className="bg-background text-foreground">AI Solutions</option>
                <option value="web-development" className="bg-background text-foreground">Web Application Engineering</option>
                <option value="mobile-apps" className="bg-background text-foreground">Native Mobile Apps</option>
                <option value="cloud-devops" className="bg-background text-foreground">Cloud & DevOps</option>
                <option value="ui-ux-design" className="bg-background text-foreground">UI/UX Design</option>
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
                      <a href="mailto:contact@kodenri.com" className="text-xs sm:text-sm mt-0.5 hover:text-primary transition-colors">
                        contact@kodenri.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground">Phone Support</h4>
                      <a href="tel:+88029999999" className="text-xs sm:text-sm mt-0.5 hover:text-primary transition-colors">
                        +880 (2) 999-9999
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

              {/* Geographic HQ representation */}
              <div className="glass-card p-6.5 rounded-3xl border border-border/40 h-64 flex flex-col justify-between relative overflow-hidden bg-gradient-to-tr from-primary/5 to-transparent">
                {/* Simulated Geopoint Graphic */}
                <div className="absolute inset-0 bg-[radial-gradient(rgba(124,58,237,0.05)_1px,transparent_1px)] bg-[size:16px_16px] -z-10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-primary/20 bg-primary/5 animate-pulse -z-10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center -z-10">
                  <div className="w-4 h-4 rounded-full bg-primary animate-ping" />
                </div>

                <div className="space-y-1.5">
                  <h4 className="font-heading font-bold text-base text-foreground">
                    Dhaka Geopoint
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    Main engineering and systems administration core.
                  </p>
                </div>
                <div className="text-xxs text-primary font-bold uppercase tracking-wider">
                  Operational Core Active
                </div>
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
