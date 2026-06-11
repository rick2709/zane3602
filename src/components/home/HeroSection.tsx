"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Lock, ArrowRight } from "lucide-react";
import StarField from "@/components/StarField";
import { useRouter } from "next/navigation";

const tlds = [".com", ".co.zw", ".org", ".net", ".io"];

const trustItems = [
  "SSL Secured", "99.9% Uptime", "24/7 Support", "DDoS Protected", "Free DNS Management",
  "SSL Secured", "99.9% Uptime", "24/7 Support", "DDoS Protected", "Free DNS Management",
];

const headlineWords = ["Your", "Domain.", "Your", "Brand."];

export default function HeroSection() {
  const [query, setQuery] = useState("");
  const [activeTld, setActiveTld] = useState(".com");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) router.push(`/domains?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
      {/* Star background */}
      <div className="absolute inset-0" style={{ opacity: "var(--star-opacity)" }}>
        <StarField />
      </div>

      {/* Glow orbs */}
      <div className="blob w-[600px] h-[600px] -top-32 left-1/2 -translate-x-1/2"
        style={{ background: "radial-gradient(circle, var(--primary) 0%, var(--cyan) 50%, transparent 70%)" }} />
      <div className="blob w-96 h-96 bottom-0 right-0"
        style={{ background: "radial-gradient(circle, var(--cyan), transparent 70%)" }} />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 text-center overflow-hidden">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
          style={{
            background: "var(--icon-bg)",
            border: "1px solid var(--input-border)",
            color: "var(--cyan)",
          }}
        >
          <Lock className="w-4 h-4" />
          Trusted by 10,000+ businesses worldwide
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="font-grotesk font-bold leading-tight mb-4"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "var(--text)" }}
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {headlineWords.map((word, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
              }}
              className="inline-block mr-3"
            >
              {word}
            </motion.span>
          ))}
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1, ease: "easeOut" } },
            }}
            className="gradient-text inline-block"
          >
            Secured.
          </motion.span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          Premium domain registration, blazing-fast hosting, and AI-powered cybersecurity — all in one place.
        </motion.p>

        {/* Search bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-4"
        >
          <form
            onSubmit={handleSearch}
            className="flex items-center gap-2 w-full max-w-2xl mx-auto p-2 rounded-2xl"
            style={{
              background: "var(--input-bg)",
              border: "1px solid var(--input-border)",
              boxShadow: "0 0 30px rgba(37,99,235,0.08)",
            }}
          >
            <Search className="w-5 h-5 ml-2 flex-shrink-0" style={{ color: "var(--muted)" }} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search your perfect domain..."
              className="flex-1 min-w-0 bg-transparent outline-none text-base font-mono py-2 px-2"
              style={{ color: "var(--text)" }}
            />
            <button type="submit" className="btn-primary px-6 py-2.5 rounded-xl font-semibold text-sm flex items-center gap-2 flex-shrink-0">
              <Search className="w-4 h-4" />
              <span className="hidden sm:inline">Search</span>
            </button>
          </form>

          {/* TLD pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-3">
            {tlds.map((tld) => (
              <button
                key={tld}
                onClick={() => setActiveTld(tld)}
                className="px-3 py-1 rounded-full text-xs font-mono font-medium transition-all duration-200"
                style={{
                  background: activeTld === tld ? "var(--pill-active)" : "var(--pill-bg)",
                  border: `1px solid ${activeTld === tld ? "var(--cyan)" : "var(--border-col)"}`,
                  color: activeTld === tld ? "var(--cyan)" : "var(--muted)",
                }}
              >
                {tld}
              </button>
            ))}
          </div>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Link href="/domains" className="btn-primary px-8 py-3.5 rounded-xl font-semibold text-base flex items-center gap-2 w-full sm:w-auto justify-center">
            Search Domains <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/cybersecurity" className="btn-ghost px-8 py-3.5 rounded-xl font-semibold text-base w-full sm:w-auto justify-center">
            Explore Security Plans
          </Link>
        </motion.div>

        {/* Trust marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="overflow-hidden rounded-xl py-3"
          style={{ borderTop: "1px solid var(--border-col)" }}
        >
          <div className="flex animate-marquee whitespace-nowrap gap-8">
            {trustItems.map((item, i) => (
              <span key={i} className="text-sm font-medium flex items-center gap-2" style={{ color: "var(--muted)" }}>
                <span className="w-1 h-1 rounded-full inline-block" style={{ backgroundColor: "var(--cyan)" }} />
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
