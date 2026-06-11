"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, Home, Search } from "lucide-react";
import StarField from "@/components/StarField";

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="absolute inset-0"><StarField /></div>
      <div
        className="blob w-80 h-80 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ background: "radial-gradient(circle, #2563EB, transparent 70%)" }}
      />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center"
      >
        <Shield className="w-16 h-16 mx-auto mb-6" style={{ color: "#06B6D4", opacity: 0.5 }} />
        <div className="font-grotesk font-bold text-8xl sm:text-9xl gradient-text mb-4">404</div>
        <h1 className="font-grotesk font-bold text-2xl sm:text-3xl text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-base mb-10 max-w-md" style={{ color: "#7A92B5" }}>
          This domain doesn&apos;t seem to exist — yet. Let&apos;s get you back to safe ground.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary px-7 py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2">
            <Home className="w-4 h-4" /> Back Home
          </Link>
          <Link href="/domains" className="btn-ghost px-7 py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2">
            <Search className="w-4 h-4" /> Search Domains
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
