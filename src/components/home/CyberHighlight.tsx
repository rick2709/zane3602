"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import ShieldGraphic from "@/components/ShieldGraphic";

const features = [
  "AI-Powered Threat Detection",
  "Real-Time DDoS Protection",
  "SSL Certificate Management",
  "Malware Scanning & Removal",
  "Web Application Firewall (WAF)",
  "24/7 Security Monitoring",
];

export default function CyberHighlight() {
  return (
    <section className="section-pad px-4 relative overflow-hidden" style={{ background: "var(--section-alt)" }}>
      <div className="blob w-[500px] h-[500px] -left-40 top-1/2 -translate-y-1/2"
        style={{ background: "radial-gradient(circle, var(--primary), transparent 70%)" }} />
      <div className="blob w-[400px] h-[400px] -right-20 bottom-0"
        style={{ background: "radial-gradient(circle, var(--cyan), transparent 70%)" }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full inline-block mb-4"
              style={{ color: "var(--highlight)", background: "var(--icon-bg)", border: "1px solid var(--icon-border)" }}
            >
              Cybersecurity
            </span>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl mb-6 leading-tight" style={{ color: "var(--text)" }}>
              Your Business Deserves{" "}
              <span className="gradient-text">Enterprise-Grade Security</span>
            </h2>

            <ul className="flex flex-col gap-3 mb-8">
              {features.map((feature, i) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center gap-3 text-sm font-medium"
                  style={{ color: "var(--muted)" }}
                >
                  <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: "var(--success)" }} />
                  {feature}
                </motion.li>
              ))}
            </ul>

            <Link href="/cybersecurity" className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-base">
              Protect My Business <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <ShieldGraphic />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
