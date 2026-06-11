"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, CheckCircle, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const exampleResults = [
  { domain: "yourbrand.com",   available: true,  price: "$12/yr" },
  { domain: "yourbrand.co.zw", available: true,  price: "$18/yr" },
  { domain: "yourbrand.net",   available: true,  price: "$14/yr" },
  { domain: "yourbrand.io",    available: false, price: "$42/yr" },
];

export default function DomainMiniSection() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) router.push(`/domains?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <section className="section-pad px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full inline-block mb-4"
              style={{ color: "var(--cyan)", background: "var(--icon-bg)", border: "1px solid var(--icon-border)" }}
            >
              Domain Search
            </span>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl mb-4 leading-tight" style={{ color: "var(--text)" }}>
              Find Your Perfect Domain{" "}
              <span className="gradient-text">in Seconds</span>
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--muted)" }}>
              Search across 50+ extensions. Instant availability check. One-click registration.
            </p>

            <form onSubmit={handleSearch} className="flex gap-2 mb-4">
              <div
                className="flex-1 flex items-center gap-2 px-4 py-3 rounded-xl"
                style={{ background: "var(--input-bg)", border: "1px solid var(--input-border)" }}
              >
                <Search className="w-4 h-4 flex-shrink-0" style={{ color: "var(--muted)" }} />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="yourdomain"
                  className="flex-1 min-w-0 bg-transparent outline-none text-sm font-mono"
                  style={{ color: "var(--text)" }}
                />
              </div>
              <button type="submit" className="btn-primary px-5 py-3 rounded-xl font-semibold text-sm flex items-center gap-1.5">
                Search <ArrowRight className="w-4 h-4" />
              </button>
            </form>
            <Link href="/domains" className="text-sm font-medium" style={{ color: "var(--cyan)" }}>
              Browse all available extensions →
            </Link>
          </motion.div>

          {/* Right — example results */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-3"
          >
            {exampleResults.map((result, i) => (
              <motion.div
                key={result.domain}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 + 0.3 }}
                whileHover={{ x: 4 }}
                className="flex items-center justify-between p-4 rounded-xl"
                style={{
                  background: "var(--card-bg)",
                  border: `1px solid ${result.available ? "rgba(16,185,129,0.25)" : "rgba(239,68,68,0.2)"}`,
                }}
              >
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0"
                    style={{ color: result.available ? "var(--success)" : "var(--danger)" }} />
                  <span className="font-mono font-medium text-sm" style={{ color: "var(--text)" }}>{result.domain}</span>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-semibold hidden sm:inline"
                    style={{
                      background: result.available ? "rgba(16,185,129,0.12)" : "rgba(239,68,68,0.12)",
                      color: result.available ? "var(--success)" : "var(--danger)",
                    }}
                  >
                    {result.available ? "Available" : "Taken"}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold" style={{ color: "var(--text)" }}>{result.price}</span>
                  {result.available && (
                    <Link href="/domains" className="text-xs px-3 py-1.5 rounded-lg font-semibold btn-primary">
                      Register
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
