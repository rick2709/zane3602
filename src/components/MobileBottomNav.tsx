"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Home, Globe, Server, Shield, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const tabs = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/domains", icon: Globe, label: "Domains" },
  { href: "/hosting", icon: Server, label: "Hosting" },
  { href: "/cybersecurity", icon: Shield, label: "Security" },
  { href: "#account", icon: User, label: "Account" },
];

export default function MobileBottomNav() {
  const pathname = usePathname();
  const [footerVisible, setFooterVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;
    observerRef.current = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observerRef.current.observe(footer);
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <motion.nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0D1526]/95 backdrop-blur-xl border-t border-[#1A2744]"
      initial={{ y: 100 }}
      animate={{ y: footerVisible ? 100 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-around py-2 pb-safe">
        {tabs.map(({ href, icon: Icon, label }) => {
          const active = pathname === href;
          return (
            <Link key={href} href={href} className="flex flex-col items-center gap-1 px-3 py-1 relative">
              <motion.div
                whileTap={{ scale: 0.85 }}
                animate={{ scale: active ? 1.15 : 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <Icon
                  className="w-6 h-6 transition-colors duration-200"
                  style={{ color: active ? "#06B6D4" : "#7A92B5" }}
                />
              </motion.div>
              <span
                className="text-[10px] font-medium transition-colors duration-200"
                style={{ color: active ? "#06B6D4" : "#7A92B5" }}
              >
                {label}
              </span>
              {active && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full"
                  style={{ background: "linear-gradient(90deg, #2563EB, #06B6D4)", boxShadow: "0 0 8px #06B6D4" }}
                />
              )}
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}
