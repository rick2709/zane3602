"use client";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export default function ShieldGraphic() {
  return (
    <div className="relative w-72 h-72 mx-auto flex items-center justify-center">
      <div className="absolute inset-0 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)" }} />

      {/* Ring 1 */}
      <motion.div
        className="absolute inset-4 rounded-full"
        style={{ border: "1px solid rgba(37,99,235,0.3)" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full"
          style={{ backgroundColor: "var(--primary)", boxShadow: "0 0 8px var(--primary)" }} />
      </motion.div>

      {/* Ring 2 */}
      <motion.div
        className="absolute inset-10 rounded-full"
        style={{ border: "1px solid rgba(6,182,212,0.4)" }}
        animate={{ rotate: -360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full"
          style={{ backgroundColor: "var(--cyan)", boxShadow: "0 0 8px var(--cyan)" }} />
      </motion.div>

      {/* Ring 3 */}
      <motion.div
        className="absolute inset-16 rounded-full"
        style={{ border: "1px solid rgba(56,189,248,0.25)" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
          style={{ backgroundColor: "var(--highlight)", boxShadow: "0 0 6px var(--highlight)" }} />
      </motion.div>

      {/* Center shield */}
      <motion.div
        className="relative z-10 flex items-center justify-center w-24 h-24 rounded-2xl"
        style={{
          background: "linear-gradient(135deg, rgba(37,99,235,0.2), rgba(6,182,212,0.2))",
          border: "1px solid rgba(6,182,212,0.4)",
          boxShadow: "0 0 30px rgba(6,182,212,0.25), inset 0 0 20px rgba(6,182,212,0.05)",
        }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <Shield className="w-12 h-12" style={{ color: "var(--cyan)" }} />
      </motion.div>
    </div>
  );
}
