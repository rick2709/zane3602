"use client";
import { motion } from "framer-motion";
import { Activity, Globe, Users, Headphones } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";

const stats = [
  { icon: Activity, value: 99.9, suffix: "%",  label: "Uptime Guarantee" },
  { icon: Globe,    value: 10000, suffix: "+", label: "Domains Registered" },
  { icon: Users,   value: 500,   suffix: "+", label: "Business Clients" },
  { icon: Headphones, value: 24, suffix: "/7", label: "Live Support" },
];

export default function StatsBar() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-2xl"
          style={{
            background: "var(--stat-bg)",
            border: "1px solid var(--border-col)",
            backdropFilter: "blur(16px)",
          }}
        >
          {stats.map(({ icon: Icon, value, suffix, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center gap-2 py-4"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-1"
                style={{ background: "var(--icon-bg)", border: "1px solid var(--icon-border)" }}
              >
                <Icon className="w-6 h-6" style={{ color: "var(--cyan)" }} />
              </div>
              <div className="font-grotesk font-bold text-3xl sm:text-4xl gradient-text">
                <AnimatedCounter end={value} suffix={suffix} />
              </div>
              <div className="text-sm font-medium" style={{ color: "var(--muted)" }}>
                {label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
