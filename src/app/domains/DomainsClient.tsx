"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, CheckCircle, XCircle, ShoppingCart, ArrowRight, Globe } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Footer from "@/components/Footer";
import StarField from "@/components/StarField";

const tldCategories = {
  Popular: [".com", ".net", ".org", ".io"],
  Business: [".co.zw", ".biz", ".company", ".business"],
  Tech: [".dev", ".tech", ".app", ".cloud"],
  Africa: [".co.zw", ".africa", ".joburg", ".capetown"],
};

const mockResults = () => [
  { tld: ".com", available: Math.random() > 0.4, price: "$12.99/yr" },
  { tld: ".co.zw", available: true, price: "$18.00/yr" },
  { tld: ".net", available: Math.random() > 0.3, price: "$13.99/yr" },
  { tld: ".org", available: true, price: "$11.99/yr" },
  { tld: ".io", available: Math.random() > 0.5, price: "$42.00/yr" },
  { tld: ".dev", available: true, price: "$16.99/yr" },
];

export default function DomainsClient() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [activeCategory, setActiveCategory] = useState("Popular");
  const [results, setResults] = useState<{ tld: string; available: boolean; price: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [cart, setCart] = useState<string[]>([]);

  const performSearch = (q: string) => {
    setLoading(true);
    setSearched(false);
    setTimeout(() => {
      setResults(mockResults());
      setSearched(true);
      setLoading(false);
    }, 900);
  };

  useEffect(() => {
    const q = searchParams.get("q");
    if (q) {
      setQuery(q);
      performSearch(q);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) performSearch(query.trim());
  };

  const addToCart = (domain: string) => {
    setCart((prev) => prev.includes(domain) ? prev : [...prev, domain]);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0"><StarField /></div>
        <div
          className="blob w-96 h-96 top-0 left-1/2 -translate-x-1/2"
          style={{ background: "radial-gradient(circle, #2563EB, transparent 70%)" }}
        />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Globe className="w-12 h-12 mx-auto mb-4" style={{ color: "#06B6D4" }} />
            <h1 className="font-grotesk font-bold text-4xl sm:text-5xl text-white mb-4">
              Find Your{" "}
              <span className="gradient-text">Perfect Domain</span>
            </h1>
            <p className="text-lg mb-10" style={{ color: "#7A92B5" }}>
              Search across 50+ extensions. Instant availability. One-click registration.
            </p>

            {/* Search bar */}
            <form onSubmit={handleSearch} className="flex gap-2 max-w-xl mx-auto">
              <div
                className="flex-1 flex items-center gap-2 px-4 py-3.5 rounded-xl"
                style={{ background: "rgba(13,21,38,0.9)", border: "1px solid rgba(37,99,235,0.4)" }}
              >
                <Search className="w-5 h-5 flex-shrink-0" style={{ color: "#7A92B5" }} />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="yourdomain"
                  className="flex-1 bg-transparent outline-none font-mono text-base"
                  style={{ color: "#F0F6FF" }}
                />
              </div>
              <button type="submit" className="btn-primary px-6 py-3.5 rounded-xl font-semibold">
                Search
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Category filters */}
      <section className="px-4 pb-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {Object.keys(tldCategories).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
                style={{
                  background: activeCategory === cat ? "linear-gradient(135deg, #2563EB, #06B6D4)" : "rgba(26,39,68,0.8)",
                  color: activeCategory === cat ? "white" : "#7A92B5",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 justify-center mt-3">
            {tldCategories[activeCategory as keyof typeof tldCategories].map((tld) => (
              <span
                key={tld}
                className="px-3 py-1 rounded-lg text-xs font-mono font-medium"
                style={{ background: "rgba(6,182,212,0.1)", border: "1px solid rgba(6,182,212,0.2)", color: "#06B6D4" }}
              >
                {tld}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          {loading && (
            <div className="text-center py-16">
              <div className="inline-flex items-center gap-3 text-sm" style={{ color: "#7A92B5" }}>
                <div className="w-5 h-5 border-2 border-t-transparent rounded-full animate-spin" style={{ borderColor: "#2563EB", borderTopColor: "transparent" }} />
                Checking availability...
              </div>
            </div>
          )}

          <AnimatePresence>
            {searched && !loading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col gap-3"
              >
                <p className="text-sm mb-2" style={{ color: "#7A92B5" }}>
                  Results for <span className="font-mono text-white font-medium">&ldquo;{query}&rdquo;</span>
                </p>
                {results.map((r, i) => (
                  <motion.div
                    key={r.tld}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: i * 0.07 }}
                    className="flex items-center justify-between p-5 rounded-xl"
                    style={{
                      background: "rgba(13,21,38,0.7)",
                      border: `1px solid ${r.available ? "rgba(16,185,129,0.25)" : "rgba(239,68,68,0.2)"}`,
                    }}
                  >
                    <div className="flex items-center gap-3">
                      {r.available
                        ? <CheckCircle className="w-5 h-5" style={{ color: "#10B981" }} />
                        : <XCircle className="w-5 h-5" style={{ color: "#EF4444" }} />
                      }
                      <span className="font-mono font-medium text-base text-white">
                        {query}{r.tld}
                      </span>
                      <span
                        className="text-xs px-2 py-0.5 rounded-full font-semibold hidden sm:inline"
                        style={{
                          background: r.available ? "rgba(16,185,129,0.12)" : "rgba(239,68,68,0.12)",
                          color: r.available ? "#10B981" : "#EF4444",
                        }}
                      >
                        {r.available ? "Available" : "Taken"}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-white text-sm">{r.price}</span>
                      {r.available && (
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => addToCart(`${query}${r.tld}`)}
                          className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-all"
                          style={{
                            background: cart.includes(`${query}${r.tld}`)
                              ? "rgba(16,185,129,0.15)"
                              : "linear-gradient(135deg, #2563EB, #06B6D4)",
                            color: cart.includes(`${query}${r.tld}`) ? "#10B981" : "white",
                            border: cart.includes(`${query}${r.tld}`) ? "1px solid rgba(16,185,129,0.3)" : "none",
                          }}
                        >
                          {cart.includes(`${query}${r.tld}`) ? (
                            <><CheckCircle className="w-3.5 h-3.5" /> Added</>
                          ) : (
                            <><ShoppingCart className="w-3.5 h-3.5" /> Add to Cart</>
                          )}
                        </motion.button>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {!loading && !searched && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center py-16"
            >
              <Globe className="w-16 h-16 mx-auto mb-4 opacity-20" style={{ color: "#06B6D4" }} />
              <p className="text-base" style={{ color: "#7A92B5" }}>Enter a domain name above to check availability</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Transfer banner */}
      <section className="px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <div
            className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 sm:p-8 rounded-2xl"
            style={{ background: "rgba(37,99,235,0.08)", border: "1px solid rgba(37,99,235,0.25)" }}
          >
            <div>
              <h3 className="font-grotesk font-bold text-xl text-white mb-1">Already have a domain?</h3>
              <p className="text-sm" style={{ color: "#7A92B5" }}>Transfer it to Zane360 and get a free year of hosting.</p>
            </div>
            <Link href="#transfer" className="btn-ghost px-6 py-3 rounded-xl font-semibold text-sm flex items-center gap-2 whitespace-nowrap">
              Transfer Domain <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
