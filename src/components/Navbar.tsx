"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, X, Menu } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/domains", label: "Domains" },
  { href: "/hosting", label: "Hosting" },
  { href: "/cybersecurity", label: "Cybersecurity" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "var(--nav-bg)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid var(--nav-border)" : "none",
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.1)" : "none",
        }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Shield className="w-7 h-7" style={{ color: "var(--cyan)" }} />
              <div className="absolute inset-0 blur-md rounded-full opacity-40 group-hover:opacity-70 transition-all"
                style={{ backgroundColor: "var(--cyan)" }} />
            </div>
            <span className="font-grotesk font-bold text-xl tracking-wide" style={{ color: "var(--text)" }}>
              ZANE<span className="gradient-text">360</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: pathname === link.href ? "var(--cyan)" : "var(--muted)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--highlight)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = pathname === link.href ? "var(--cyan)" : "var(--muted)")}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA + Theme toggle */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Link href="#" className="btn-ghost text-sm px-4 py-2 rounded-lg font-medium">
              Sign In
            </Link>
            <Link href="/domains" className="btn-primary text-sm px-5 py-2 rounded-lg font-semibold animate-pulse-ring">
              Get Started
            </Link>
          </div>

          {/* Mobile: theme toggle + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="p-2 transition-colors"
              style={{ color: "var(--muted)" }}
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 z-40 flex flex-col justify-center items-center md:hidden"
            style={{ background: "var(--overlay-bg)", backdropFilter: "blur(24px)" }}
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
              className="flex flex-col items-center gap-8"
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.href}
                  variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                >
                  <Link
                    href={link.href}
                    className="font-grotesk text-3xl font-bold transition-colors"
                    style={{ color: "var(--text)" }}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                className="flex gap-4 mt-4"
              >
                <Link href="#" className="btn-ghost px-6 py-3 rounded-xl text-base font-semibold">
                  Sign In
                </Link>
                <Link href="/domains" className="btn-primary px-6 py-3 rounded-xl text-base font-semibold">
                  Get Started
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
