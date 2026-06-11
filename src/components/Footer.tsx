"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, X, Globe, Mail, Send } from "lucide-react";

const columns = [
  {
    title: "Products",
    links: ["Domains", "Web Hosting", "Email Hosting", "SSL Certificates", "VPS Hosting"],
    hrefs: ["/domains", "/hosting", "#email", "#ssl", "#vps"],
  },
  {
    title: "Security",
    links: ["DDoS Protection", "Web Firewall", "Malware Removal", "Security Audit", "SSL Management"],
    hrefs: ["/cybersecurity", "/cybersecurity", "/cybersecurity", "/cybersecurity", "/cybersecurity"],
  },
  {
    title: "Company",
    links: ["About Us", "Blog", "Careers", "Contact", "Privacy Policy", "Terms of Service"],
    hrefs: ["#about", "#blog", "#careers", "#contact", "#privacy", "#terms"],
  },
];

const socials = [
  { icon: X,    href: "#", label: "X / Twitter" },
  { icon: Globe, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "#", label: "Email" },
  { icon: Send, href: "#", label: "Telegram" },
];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ borderTop: "1px solid var(--border-col)", background: "var(--surface)" }}
      id="footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 w-fit">
              <Shield className="w-6 h-6" style={{ color: "var(--cyan)" }} />
              <span className="font-grotesk font-bold text-lg" style={{ color: "var(--text)" }}>
                ZANE<span className="gradient-text">360</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
              Powering Zimbabwe&apos;s digital future with premium domains, hosting, and cybersecurity.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ y: -3 }}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{ background: "var(--icon-bg)", border: "1px solid var(--border-col)" }}
                >
                  <Icon className="w-4 h-4" style={{ color: "var(--muted)" }} />
                </motion.a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-grotesk font-bold text-sm mb-4 tracking-wide" style={{ color: "var(--text)" }}>{col.title}</h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link, i) => (
                  <li key={link}>
                    <Link href={col.hrefs[i]} className="text-sm transition-colors duration-200 hover:text-[var(--cyan)]"
                      style={{ color: "var(--muted)" }}>
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t py-5 px-4" style={{ borderColor: "var(--border-col)" }}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-sm"
          style={{ color: "var(--muted)" }}>
          <span>© 2026 Zane360. All rights reserved.</span>
          <span>Made in Zimbabwe 🇿🇼</span>
        </div>
      </div>
    </footer>
  );
}
