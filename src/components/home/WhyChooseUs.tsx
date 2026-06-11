"use client";
import { motion } from "framer-motion";
import { Zap, Shield, Globe, MessageCircle } from "lucide-react";

const features = [
  { icon: Zap, title: "Blazing Fast", description: "NVMe SSD servers with sub-100ms response times and global CDN delivery.", color: "#F59E0B" },
  { icon: Shield, title: "Always Secure", description: "Enterprise firewall + AI monitoring, active 24/7 to keep you protected.", color: "#10B981" },
  { icon: Globe, title: "Local Expertise", description: "Zimbabwe-based team delivering world-class standards with local understanding.", color: "var(--cyan)" },
  { icon: MessageCircle, title: "Real Support", description: "Reach real humans via live chat, email, or phone — no bots, no queues.", color: "var(--primary)" },
];

const miniStats = [
  { value: "99.9%", label: "Uptime SLA" },
  { value: "<2min", label: "Avg Response" },
  { value: "5★", label: "Customer Rating" },
  { value: "2018", label: "Est. in Zimbabwe" },
];

export default function WhyChooseUs() {
  return (
    <section className="section-pad px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full inline-block mb-4"
              style={{ color: "var(--primary)", background: "var(--icon-bg)", border: "1px solid var(--icon-border)" }}
            >
              Why Zane360
            </span>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight" style={{ color: "var(--text)" }}>
              Why{" "}<span className="gradient-text">10,000+</span>{" "}Businesses Choose Zane360
            </h2>
            <p className="mt-6 text-base leading-relaxed" style={{ color: "var(--muted)" }}>
              We combine local roots with global standards, giving you reliable infrastructure, transparent pricing, and support from people who actually care about your business.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {miniStats.map(({ value, label }) => (
                <div key={label} className="p-4 rounded-xl"
                  style={{ background: "var(--card-bg)", border: "1px solid var(--border-col)" }}>
                  <div className="font-grotesk font-bold text-2xl gradient-text">{value}</div>
                  <div className="text-xs mt-1" style={{ color: "var(--muted)" }}>{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="flex flex-col gap-5">
            {features.map(({ icon: Icon, title, description, color }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ x: 4 }}
                className="flex items-start gap-4 p-5 rounded-xl transition-all duration-200"
                style={{ background: "var(--card-bg)", border: "1px solid var(--border-col)" }}
              >
                <div className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "var(--icon-bg)", border: "1px solid var(--icon-border)" }}>
                  <Icon className="w-5 h-5" style={{ color }} />
                </div>
                <div>
                  <h3 className="font-grotesk font-bold text-base mb-1" style={{ color: "var(--text)" }}>{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
