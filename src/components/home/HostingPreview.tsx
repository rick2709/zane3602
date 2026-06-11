"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: 4,
    popular: false,
    features: ["1 Website", "10GB SSD Storage", "Free SSL Certificate", "Email Hosting", "99.9% Uptime", "Basic Support"],
  },
  {
    name: "Business",
    price: 12,
    popular: true,
    features: ["5 Websites", "50GB SSD Storage", "Free SSL Certificate", "Priority Support", "Daily Backups", "Performance CDN"],
  },
  {
    name: "Enterprise",
    price: 29,
    popular: false,
    features: ["Unlimited Websites", "200GB SSD Storage", "Dedicated IP", "Advanced Security", "Custom Solutions", "24/7 Monitoring"],
  },
];

export default function HostingPreview() {
  return (
    <section className="section-pad px-4" style={{ background: "var(--section-alt)" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span
            className="text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full inline-block mb-4"
            style={{ color: "var(--primary)", background: "var(--icon-bg)", border: "1px solid var(--icon-border)" }}
          >
            Hosting Plans
          </span>
          <h2 className="font-grotesk font-bold text-3xl sm:text-4xl lg:text-5xl" style={{ color: "var(--text)" }}>
            Fast, Reliable, and{" "}
            <span className="gradient-text">Scalable Hosting</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map(({ name, price, popular, features }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className={`relative rounded-2xl p-7 flex flex-col gap-6 transition-all duration-300 ${popular ? "glow-border-animated" : ""}`}
              style={{
                background: popular ? "var(--icon-bg)" : "var(--card-bg)",
                border: popular ? undefined : "1px solid var(--border-col)",
              }}
            >
              {popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="flex items-center gap-1 px-4 py-1 rounded-full text-xs font-bold text-white"
                    style={{ background: "linear-gradient(135deg, var(--primary), var(--cyan))" }}>
                    <Zap className="w-3 h-3" /> MOST POPULAR
                  </span>
                </div>
              )}

              <div>
                <h3 className="font-grotesk font-bold text-xl mb-1" style={{ color: "var(--text)" }}>{name}</h3>
                <div className="flex items-end gap-1">
                  <span className="font-grotesk font-bold text-4xl" style={{ color: "var(--text)" }}>${price}</span>
                  <span className="text-sm mb-1.5" style={{ color: "var(--muted)" }}>/mo</span>
                </div>
              </div>

              <ul className="flex flex-col gap-3 flex-1">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm" style={{ color: "var(--muted)" }}>
                    <Check className="w-4 h-4 flex-shrink-0" style={{ color: "var(--success)" }} />
                    {f}
                  </li>
                ))}
              </ul>

              <Link href="/hosting"
                className={`w-full text-center py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${popular ? "btn-primary animate-pulse-ring" : "btn-ghost"}`}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-8"
        >
          <Link href="/hosting" className="text-sm font-medium" style={{ color: "var(--cyan)" }}>
            View full pricing details →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
