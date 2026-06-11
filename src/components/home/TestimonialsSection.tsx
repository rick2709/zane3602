"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  { quote: "Zane360 moved our entire infrastructure in 48 hours. Zero downtime. Incredible.", name: "Sarah M.", company: "FinTech Startup", avatar: "https://picsum.photos/seed/sarah1/80/80" },
  { quote: "Their cybersecurity team stopped a major attack before we even knew about it.", name: "James K.", company: "E-Commerce Store", avatar: "https://picsum.photos/seed/james2/80/80" },
  { quote: "Best domain prices in Zimbabwe, and the support is actually helpful.", name: "Tafara N.", company: "Digital Agency", avatar: "https://picsum.photos/seed/tafara3/80/80" },
  { quote: "Finally a local hosting company that delivers international-quality service.", name: "Linda C.", company: "NGO Director", avatar: "https://picsum.photos/seed/linda4/80/80" },
];

export default function TestimonialsSection() {
  return (
    <section className="section-pad overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span
            className="text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full inline-block mb-4"
            style={{ color: "var(--cyan)", background: "var(--icon-bg)", border: "1px solid var(--icon-border)" }}
          >
            What Clients Say
          </span>
          <h2 className="font-grotesk font-bold text-3xl sm:text-4xl" style={{ color: "var(--text)" }}>
            Trusted by Businesses{" "}
            <span className="gradient-text">Across Africa</span>
          </h2>
        </motion.div>
      </div>

      <div className="overflow-x-auto scrollbar-hide pb-4" style={{ WebkitOverflowScrolling: "touch" }}>
        <motion.div className="flex gap-5 px-4 w-max" drag="x" dragConstraints={{ right: 0, left: -1000 }}>
          {[...testimonials, ...testimonials].map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % testimonials.length) * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-7 flex flex-col gap-5 cursor-grab active:cursor-grabbing select-none"
              style={{ width: "320px", flexShrink: 0 }}
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} className="w-4 h-4" fill="var(--primary)" style={{ color: "var(--primary)" }} />
                ))}
              </div>
              <p className="text-sm leading-relaxed italic" style={{ color: "var(--muted)" }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <Image src={t.avatar} alt={t.name} width={44} height={44}
                  className="rounded-full" style={{ border: "2px solid var(--icon-border)" }} unoptimized />
                <div>
                  <div className="font-semibold text-sm" style={{ color: "var(--text)" }}>{t.name}</div>
                  <div className="text-xs" style={{ color: "var(--muted)" }}>{t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
