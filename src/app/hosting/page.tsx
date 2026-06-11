"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Zap, Server, Plus, Minus, MessageCircle } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";
import StarField from "@/components/StarField";

const plans = [
  {
    name: "Starter",
    monthlyPrice: 4,
    annualPrice: 3.2,
    description: "Perfect for personal sites and small projects.",
    features: [
      { text: "1 Website", included: true },
      { text: "10GB SSD Storage", included: true },
      { text: "Free SSL Certificate", included: true },
      { text: "Email Hosting (5 accounts)", included: true },
      { text: "99.9% Uptime SLA", included: true },
      { text: "Daily Backups", included: false },
      { text: "Priority Support", included: false },
      { text: "Dedicated IP", included: false },
      { text: "Advanced Security", included: false },
    ],
    popular: false,
    cta: "Get Started Free",
  },
  {
    name: "Business",
    monthlyPrice: 12,
    annualPrice: 9.6,
    description: "Ideal for growing businesses and professional sites.",
    features: [
      { text: "5 Websites", included: true },
      { text: "50GB SSD Storage", included: true },
      { text: "Free SSL Certificate", included: true },
      { text: "Email Hosting (50 accounts)", included: true },
      { text: "99.9% Uptime SLA", included: true },
      { text: "Daily Backups", included: true },
      { text: "Priority Support", included: true },
      { text: "Dedicated IP", included: false },
      { text: "Advanced Security", included: false },
    ],
    popular: true,
    cta: "Start Business Plan",
  },
  {
    name: "Enterprise",
    monthlyPrice: 29,
    annualPrice: 23.2,
    description: "Full-scale hosting for demanding applications.",
    features: [
      { text: "Unlimited Websites", included: true },
      { text: "200GB SSD Storage", included: true },
      { text: "Free SSL Certificate", included: true },
      { text: "Unlimited Email Accounts", included: true },
      { text: "99.99% Uptime SLA", included: true },
      { text: "Daily Backups", included: true },
      { text: "24/7 Priority Support", included: true },
      { text: "Dedicated IP", included: true },
      { text: "Advanced Security Suite", included: true },
    ],
    popular: false,
    cta: "Contact Sales",
  },
];

const faqs = [
  {
    q: "Can I upgrade my plan later?",
    a: "Yes, you can upgrade or downgrade your hosting plan at any time from your dashboard. Changes take effect immediately with prorated billing.",
  },
  {
    q: "Do you offer a money-back guarantee?",
    a: "We offer a 30-day money-back guarantee on all hosting plans. If you're not satisfied, contact us within 30 days for a full refund.",
  },
  {
    q: "Is WordPress included?",
    a: "All plans include one-click WordPress installation. The Business and Enterprise plans also include managed WordPress updates and security.",
  },
  {
    q: "What kind of support do you offer?",
    a: "We provide 24/7 support via live chat and email. Enterprise customers also get phone support and a dedicated account manager.",
  },
  {
    q: "Where are your servers located?",
    a: "Our primary data centers are in South Africa and Europe, with CDN nodes globally to ensure fast load times wherever your visitors are.",
  },
];

export default function HostingPage() {
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Server className="w-12 h-12 mx-auto mb-4" style={{ color: "#2563EB" }} />
            <h1 className="font-grotesk font-bold text-4xl sm:text-5xl text-white mb-4">
              Simple,{" "}
              <span className="gradient-text">Transparent Pricing</span>
            </h1>
            <p className="text-lg mb-8" style={{ color: "#7A92B5" }}>
              No hidden fees. No surprises. Just fast, reliable hosting at fair prices.
            </p>

            {/* Monthly / Annual toggle */}
            <div className="inline-flex items-center gap-3 p-1 rounded-xl" style={{ background: "rgba(13,21,38,0.8)", border: "1px solid rgba(26,39,68,0.8)" }}>
              <button
                onClick={() => setAnnual(false)}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all"
                style={{
                  background: !annual ? "linear-gradient(135deg, #2563EB, #06B6D4)" : "transparent",
                  color: !annual ? "white" : "#7A92B5",
                }}
              >
                Monthly
              </button>
              <button
                onClick={() => setAnnual(true)}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2"
                style={{
                  background: annual ? "linear-gradient(135deg, #2563EB, #06B6D4)" : "transparent",
                  color: annual ? "white" : "#7A92B5",
                }}
              >
                Annual
                <span
                  className="text-xs px-2 py-0.5 rounded-full font-bold"
                  style={{ background: "rgba(16,185,129,0.2)", color: "#10B981" }}
                >
                  Save 20%
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map(({ name, monthlyPrice, annualPrice, description, features, popular, cta }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className={`relative rounded-2xl p-7 flex flex-col gap-6 ${popular ? "glow-border-animated" : ""}`}
              style={{
                background: popular ? "rgba(37,99,235,0.08)" : "rgba(13,21,38,0.7)",
                border: popular ? undefined : "1px solid rgba(26,39,68,0.8)",
                boxShadow: popular ? "0 0 50px rgba(37,99,235,0.15)" : undefined,
              }}
            >
              {popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="flex items-center gap-1 px-4 py-1 rounded-full text-xs font-bold text-white"
                    style={{ background: "linear-gradient(135deg, #2563EB, #06B6D4)" }}>
                    <Zap className="w-3 h-3" /> MOST POPULAR
                  </span>
                </div>
              )}

              <div>
                <h3 className="font-grotesk font-bold text-xl text-white mb-1">{name}</h3>
                <p className="text-xs mb-4" style={{ color: "#7A92B5" }}>{description}</p>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={annual ? "annual" : "monthly"}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-end gap-1"
                  >
                    <span className="font-grotesk font-bold text-4xl text-white">
                      ${annual ? annualPrice.toFixed(0) : monthlyPrice}
                    </span>
                    <span className="text-sm mb-1.5" style={{ color: "#7A92B5" }}>/mo</span>
                  </motion.div>
                </AnimatePresence>
                {annual && (
                  <p className="text-xs mt-1" style={{ color: "#10B981" }}>
                    Billed annually — save ${((monthlyPrice - annualPrice) * 12).toFixed(0)}/year
                  </p>
                )}
              </div>

              <ul className="flex flex-col gap-3 flex-1">
                {features.map((f) => (
                  <li key={f.text} className="flex items-center gap-2.5 text-sm">
                    <Check
                      className="w-4 h-4 flex-shrink-0"
                      style={{ color: f.included ? "#10B981" : "#1A2744" }}
                    />
                    <span style={{ color: f.included ? "#7A92B5" : "#3A4A64", textDecoration: f.included ? undefined : "line-through" }}>
                      {f.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="#"
                className={`w-full text-center py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 ${popular ? "btn-primary" : "btn-ghost"}`}
              >
                {cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 pb-20">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-grotesk font-bold text-3xl text-white text-center mb-10"
          >
            Frequently Asked <span className="gradient-text">Questions</span>
          </motion.h2>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="rounded-xl overflow-hidden"
                style={{ background: "rgba(13,21,38,0.7)", border: "1px solid rgba(26,39,68,0.8)" }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-medium text-white text-sm">{faq.q}</span>
                  {openFaq === i ? (
                    <Minus className="w-4 h-4 flex-shrink-0" style={{ color: "#06B6D4" }} />
                  ) : (
                    <Plus className="w-4 h-4 flex-shrink-0" style={{ color: "#7A92B5" }} />
                  )}
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed" style={{ color: "#7A92B5" }}>
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center p-10 rounded-2xl"
            style={{ background: "rgba(37,99,235,0.08)", border: "1px solid rgba(37,99,235,0.25)" }}
          >
            <MessageCircle className="w-10 h-10 mx-auto mb-4" style={{ color: "#06B6D4" }} />
            <h3 className="font-grotesk font-bold text-2xl text-white mb-2">
              Not sure which plan is right for you?
            </h3>
            <p className="mb-6" style={{ color: "#7A92B5" }}>
              Our team is happy to help you find the perfect fit for your project.
            </p>
            <Link href="#" className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-base">
              Chat with our team <MessageCircle className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
