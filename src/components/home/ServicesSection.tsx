"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, Server, Shield, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    iconColor: "var(--cyan)",
    title: "Domain Registration",
    description: "Find and register your perfect domain from $9/year. Search across 50+ TLDs including .com, .co.zw, .org, .io and more.",
    href: "/domains",
  },
  {
    icon: Server,
    iconColor: "var(--primary)",
    title: "Web Hosting",
    description: "SSD-powered cloud hosting with one-click installs, free SSL, and daily backups. Plans from $4/month.",
    href: "/hosting",
  },
  {
    icon: Shield,
    iconColor: "var(--highlight)",
    title: "Cybersecurity",
    description: "AI-powered threat detection, DDoS protection, firewall management, and SSL certificates to keep your business safe.",
    href: "/cybersecurity",
  },
];

export default function ServicesSection() {
  return (
    <section className="section-pad px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span
            className="text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full inline-block mb-4"
            style={{ color: "var(--cyan)", background: "var(--icon-bg)", border: "1px solid var(--icon-border)" }}
          >
            What We Offer
          </span>
          <h2 className="font-grotesk font-bold text-3xl sm:text-4xl lg:text-5xl" style={{ color: "var(--text)" }}>
            Everything You Need to{" "}
            <span className="gradient-text">Own the Web</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, iconColor, title, description, href }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-7 group cursor-pointer flex flex-col gap-5 transition-all duration-300"
            >
              <motion.div
                className="w-14 h-14 rounded-xl flex items-center justify-center"
                style={{ background: "var(--icon-bg)", border: "1px solid var(--icon-border)" }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Icon className="w-7 h-7" style={{ color: iconColor }} />
              </motion.div>

              <div>
                <h3 className="font-grotesk font-bold text-xl mb-2" style={{ color: "var(--text)" }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{description}</p>
              </div>

              <Link
                href={href}
                className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all duration-200 mt-auto"
                style={{ color: iconColor }}
              >
                Learn More <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
