"use client";
import { motion } from "framer-motion";
import { Shield, Zap, Lock, Eye, Bug, Wifi, Search, Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";
import ShieldGraphic from "@/components/ShieldGraphic";
import StarField from "@/components/StarField";

const services = [
  {
    icon: Wifi,
    title: "DDoS Protection",
    description: "Enterprise-grade mitigation that absorbs attacks of any size. Automatic detection and blocking with no downtime.",
    color: "#EF4444",
  },
  {
    icon: Lock,
    title: "Web Application Firewall",
    description: "Block SQL injection, XSS, and other OWASP top-10 threats before they reach your application.",
    color: "#2563EB",
  },
  {
    icon: Shield,
    title: "SSL Certificate Management",
    description: "Free SSL installation, auto-renewal, and HTTPS enforcement across all your domains.",
    color: "#06B6D4",
  },
  {
    icon: Bug,
    title: "Malware Scanning & Removal",
    description: "Daily automated scans with real-time alerts and one-click removal of identified threats.",
    color: "#F59E0B",
  },
  {
    icon: Eye,
    title: "24/7 Security Monitoring",
    description: "AI-powered monitoring that learns your traffic patterns and flags anomalies instantly.",
    color: "#8B5CF6",
  },
  {
    icon: Search,
    title: "Security Audit",
    description: "Comprehensive penetration testing and vulnerability assessment by certified security experts.",
    color: "#10B981",
  },
];

const steps = [
  {
    number: "01",
    title: "Scan",
    description: "Our AI scans your entire digital infrastructure — domains, servers, apps, and code — for known vulnerabilities.",
    icon: Search,
    color: "#2563EB",
  },
  {
    number: "02",
    title: "Detect",
    description: "Real-time threat intelligence identifies zero-day exploits, suspicious traffic, and active intrusion attempts.",
    icon: Eye,
    color: "#06B6D4",
  },
  {
    number: "03",
    title: "Protect",
    description: "Automated response blocks threats instantly while our team provides a detailed report and remediation steps.",
    icon: Shield,
    color: "#10B981",
  },
];

const tiers = [
  {
    name: "Essential",
    price: 19,
    description: "Fundamental security for small businesses and personal sites.",
    features: [
      "SSL Certificate (1 domain)",
      "Basic DDoS Protection",
      "Web Application Firewall",
      "Weekly Malware Scans",
      "Email Alerts",
      "Security Dashboard",
    ],
    popular: false,
    cta: "Get Essential",
  },
  {
    name: "Enterprise",
    price: 79,
    description: "Full-spectrum protection for businesses with mission-critical assets.",
    features: [
      "SSL Certificates (Unlimited)",
      "Advanced DDoS Mitigation",
      "AI-Powered WAF",
      "Real-Time Malware Monitoring",
      "24/7 SOC Team",
      "Dedicated Security Manager",
      "Quarterly Penetration Test",
      "Compliance Reporting",
    ],
    popular: true,
    cta: "Get Enterprise",
  },
];

export default function CybersecurityPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden">
        <div className="absolute inset-0"><StarField /></div>
        <div
          className="blob w-[600px] h-[600px] top-0 left-1/2 -translate-x-1/2"
          style={{ background: "radial-gradient(circle, rgba(37,99,235,0.2), rgba(6,182,212,0.1) 50%, transparent 70%)" }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span
                className="text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full inline-block mb-4"
                style={{ color: "#38BDF8", background: "rgba(56,189,248,0.1)", border: "1px solid rgba(56,189,248,0.2)" }}
              >
                Cybersecurity Solutions
              </span>
              <h1 className="font-grotesk font-bold text-4xl sm:text-5xl text-white mb-5 leading-tight">
                Protect What{" "}
                <span className="gradient-text">Matters Most</span>
              </h1>
              <p className="text-lg leading-relaxed mb-8" style={{ color: "#7A92B5" }}>
                Enterprise-grade security designed for businesses of all sizes. AI-powered threat detection, real-time monitoring, and expert response — 24/7.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#audit" className="btn-primary px-7 py-3.5 rounded-xl font-semibold text-base flex items-center gap-2">
                  Request Free Security Audit <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="#plans" className="btn-ghost px-7 py-3.5 rounded-xl font-semibold text-base">
                  View Plans
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ShieldGraphic />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="section-pad px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-white">
              Comprehensive{" "}
              <span className="gradient-text">Security Services</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, description, color }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5, boxShadow: `0 20px 50px ${color}18` }}
                className="glass rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: `${color}15`, border: `1px solid ${color}30` }}
                >
                  <Icon className="w-6 h-6" style={{ color }} />
                </div>
                <div>
                  <h3 className="font-grotesk font-bold text-lg text-white mb-2">{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#7A92B5" }}>{description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        className="section-pad px-4"
        style={{ background: "rgba(13,21,38,0.3)" }}
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-white">
              How It <span className="gradient-text">Works</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connector line (desktop only) */}
            <div
              className="hidden md:block absolute top-12 left-1/3 right-1/3 h-px"
              style={{ background: "linear-gradient(90deg, transparent, rgba(37,99,235,0.4), rgba(6,182,212,0.4), transparent)" }}
            />

            {steps.map(({ number, title, description, icon: Icon, color }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex flex-col items-center text-center gap-4"
              >
                <div className="relative">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center"
                    style={{ background: `${color}15`, border: `2px solid ${color}40` }}
                  >
                    <Icon className="w-8 h-8" style={{ color }} />
                  </div>
                  <span
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: "linear-gradient(135deg, #2563EB, #06B6D4)" }}
                  >
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-grotesk font-bold text-xl text-white">{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#7A92B5" }}>{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-pad px-4" id="plans">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-white">
              Security <span className="gradient-text">Pricing</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {tiers.map(({ name, price, description, features, popular, cta }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className={`relative rounded-2xl p-7 flex flex-col gap-6 ${popular ? "glow-border-animated" : ""}`}
                style={{
                  background: popular ? "rgba(37,99,235,0.08)" : "rgba(13,21,38,0.7)",
                  border: popular ? undefined : "1px solid rgba(26,39,68,0.8)",
                  boxShadow: popular ? "0 0 40px rgba(37,99,235,0.15)" : undefined,
                }}
              >
                {popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="flex items-center gap-1 px-4 py-1 rounded-full text-xs font-bold text-white"
                      style={{ background: "linear-gradient(135deg, #2563EB, #06B6D4)" }}>
                      <Zap className="w-3 h-3" /> RECOMMENDED
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="font-grotesk font-bold text-xl text-white mb-1">{name}</h3>
                  <p className="text-xs mb-4" style={{ color: "#7A92B5" }}>{description}</p>
                  <div className="flex items-end gap-1">
                    <span className="font-grotesk font-bold text-4xl text-white">${price}</span>
                    <span className="text-sm mb-1.5" style={{ color: "#7A92B5" }}>/mo</span>
                  </div>
                </div>

                <ul className="flex flex-col gap-3 flex-1">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm" style={{ color: "#7A92B5" }}>
                      <Check className="w-4 h-4 flex-shrink-0" style={{ color: "#10B981" }} />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="#"
                  className={`w-full text-center py-3.5 rounded-xl font-semibold text-sm ${popular ? "btn-primary" : "btn-ghost"}`}
                >
                  {cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Free audit CTA */}
      <section className="px-4 pb-24" id="audit">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative text-center p-12 rounded-2xl overflow-hidden"
            style={{ background: "linear-gradient(135deg, rgba(37,99,235,0.12), rgba(6,182,212,0.08))", border: "1px solid rgba(37,99,235,0.3)" }}
          >
            <div
              className="blob w-64 h-64 left-0 top-0"
              style={{ background: "radial-gradient(circle, #2563EB, transparent 70%)" }}
            />
            <Shield className="w-14 h-14 mx-auto mb-4 relative z-10" style={{ color: "#06B6D4" }} />
            <h2 className="font-grotesk font-bold text-3xl text-white mb-3 relative z-10">
              Request a Free Security Audit
            </h2>
            <p className="text-base mb-8 max-w-xl mx-auto relative z-10" style={{ color: "#7A92B5" }}>
              Our certified security experts will scan your infrastructure and deliver a detailed vulnerability report — completely free of charge.
            </p>
            <Link
              href="#"
              className="btn-primary inline-flex items-center gap-2 px-9 py-4 rounded-xl font-bold text-base relative z-10"
            >
              Get My Free Audit <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
