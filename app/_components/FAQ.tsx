'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'How do I register an international domain?',
    a: 'Simply search for your desired domain name in the Zane360 dashboard. We support 500+ TLD extensions across 50+ countries. Once you find an available domain, complete registration in under 2 minutes with instant activation and free WHOIS privacy included.',
  },
  {
    q: 'What cybersecurity services do you offer?',
    a: 'Our cybersecurity suite includes managed SOC-as-a-Service, 24/7 threat monitoring, vulnerability scanning, penetration testing, DDoS protection, Web Application Firewall (WAF), and incident response. Every plan includes real-time alerting and a dedicated security engineer.',
  },
  {
    q: 'Do you provide SSL certificates?',
    a: 'Yes — we offer free Domain Validation (DV) SSL certificates on all hosting plans, plus Organisation Validation (OV) and Extended Validation (EV) certificates for businesses that need the highest level of trust. Wildcard and multi-domain SAN certificates are also available.',
  },
  {
    q: 'How does threat monitoring work?',
    a: 'Our platform collects signals from your DNS, web traffic, and network endpoints in real time. Machine-learning models flag anomalies and our SOC team reviews alerts 24/7. When a genuine threat is detected, automated playbooks begin containment while a human analyst coordinates response — all within our 15-minute SLA.',
  },
  {
    q: 'What support do you offer after onboarding?',
    a: 'Every customer gets access to our 24/7 live chat, email, and phone support. Business and Enterprise plan subscribers receive a dedicated Customer Success Manager, priority response queues, and an optional private Slack channel with direct access to our security engineers.',
  },
]

function FAQItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div style={{ borderBottom: '1px solid #E5E5E5' }}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-6 py-5 text-left"
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
      >
        <span
          style={{ color: '#000', fontFamily: 'var(--font-miso)', fontSize: 'clamp(18px, 2.5vw, 22px)', fontWeight: 400, lineHeight: 1.2 }}
        >
          {q}
        </span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
          style={{ color: open ? '#e53e3e' : '#9CA3AF' }}
        >
          {open ? <Minus size={18} /> : <Plus size={18} />}
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <p className="pb-5 leading-relaxed" style={{ color: '#6B7280', fontFamily: 'var(--font-wix)', fontSize: 14 }}>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="py-16 lg:py-24" style={{ background: '#FFFFFF' }}>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="uppercase mb-4" style={{ color: '#9CA3AF', fontFamily: 'var(--font-wix)', fontSize: 12, fontWeight: 500, letterSpacing: '0.08em' }}>
            FAQ
          </p>
          <h2 style={{ fontFamily: 'var(--font-miso)', fontSize: 'clamp(32px, 4.5vw, 42px)', fontWeight: 400, lineHeight: 1.05, color: '#000' }}>
            Common{' '}
            <em style={{ fontStyle: 'normal', color: '#e53e3e' }}>questions.</em>
          </h2>
          <p className="mt-4 text-base" style={{ color: '#6B7280', lineHeight: 1.6 }}>
            Can&apos;t find what you&apos;re looking for?{' '}
            <a href="#contact" style={{ color: '#e53e3e', textDecoration: 'underline', textUnderlineOffset: 3 }}>
              Talk to our team.
            </a>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          style={{ borderTop: '1px solid #E5E5E5' }}
        >
          {faqs.map((item, i) => (
            <FAQItem
              key={i}
              q={item.q}
              a={item.a}
              open={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
