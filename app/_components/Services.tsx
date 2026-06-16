'use client'

import { motion } from 'framer-motion'
import { Globe, Shield, Lock, Activity, Server, ArrowRight, Check } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Domain Registration & Transfer',
    description: 'Register, transfer, and manage international domains across 500+ TLDs with instant activation.',
    bullets: ['500+ TLD extensions', 'Bulk domain management', 'Auto-renewal protection', 'Free WHOIS privacy'],
  },
  {
    icon: Shield,
    title: 'Managed Cybersecurity',
    description: 'End-to-end security operations tailored for modern businesses — perimeter defence to incident response.',
    bullets: ['SOC-as-a-Service', 'Vulnerability scanning', 'Penetration testing', 'Compliance reporting'],
  },
  {
    icon: Lock,
    title: 'SSL & DNS Protection',
    description: 'Wildcard SSL certificates, DNSSEC, and DDoS-resilient name servers to keep your sites trusted.',
    bullets: ['Wildcard & multi-domain SSL', 'DNSSEC signing', 'Anycast DNS network', 'DDoS mitigation'],
  },
  {
    icon: Activity,
    title: 'Threat Monitoring & Response',
    description: '24/7 real-time threat intelligence with automated response playbooks and dedicated handlers.',
    bullets: ['Real-time alerting', 'Automated playbooks', '15-min response SLA', 'Forensic reporting'],
  },
  {
    icon: Server,
    title: 'Web Hosting & Infrastructure',
    description: 'High-availability cloud hosting with global edge caching, automated backups, and one-click scaling.',
    bullets: ['99.9% uptime SLA', 'Global CDN', 'Daily automated backups', 'One-click scaling'],
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.09, duration: 0.55, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
}

export default function Services() {
  return (
    <section id="domains" className="py-16 lg:py-24" style={{ background: 'linear-gradient(135deg, #FFFCEB 0%, #FFF5CC 50%, #FFFCEB 100%)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="uppercase mb-4" style={{ color: '#9CA3AF', fontFamily: 'var(--font-wix)', fontSize: 12, fontWeight: 500, letterSpacing: '0.08em' }}>
            02 / 04 — Our Services
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 style={{ fontFamily: 'var(--font-miso)', fontSize: 'clamp(32px, 4.5vw, 42px)', fontWeight: 400, lineHeight: 1.05, color: '#000', maxWidth: 480 }}>
              Everything you need,{' '}
              <em style={{ fontStyle: 'normal', color: '#e53e3e' }}>in one place.</em>
            </h2>
            <p className="text-sm max-w-xs" style={{ color: '#6B7280', lineHeight: 1.6 }}>
              From your first domain to enterprise-grade threat defence — Zane360 covers every layer of your digital presence.
            </p>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(0,0,0,0.10)' }}
                className="group flex flex-col rounded-2xl p-6 cursor-pointer"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(0,0,0,0.04)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.05)',
                  transition: 'box-shadow 0.2s ease, transform 0.2s ease',
                }}
              >
                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: 'rgba(229,62,62,0.10)' }}
                >
                  <Icon size={20} style={{ color: '#e53e3e' }} />
                </div>

                <h3 className="mb-2" style={{ color: '#000', fontFamily: 'var(--font-miso)', fontSize: 'clamp(18px, 2.5vw, 22px)', fontWeight: 400, lineHeight: 1.2 }}>
                  {service.title}
                </h3>
                <p className="leading-relaxed mb-5" style={{ color: '#6B7280', fontFamily: 'var(--font-wix)', fontSize: 14 }}>{service.description}</p>

                <ul className="flex flex-col gap-2 mb-6">
                  {service.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2" style={{ color: '#6B7280', fontFamily: 'var(--font-wix)', fontSize: 14 }}>
                      <Check size={12} style={{ color: '#e53e3e', flexShrink: 0 }} />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <motion.a
                    href="#"
                    className="inline-flex items-center gap-1.5 font-medium"
                    style={{ color: '#e53e3e', fontFamily: 'var(--font-wix)', fontSize: 12 }}
                    whileHover={{ gap: '0.5rem' }}
                  >
                    Learn More <ArrowRight size={13} />
                  </motion.a>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
