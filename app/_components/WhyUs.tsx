'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Globe2, Zap, DollarSign, Clock, Users, ArrowRight } from 'lucide-react'

const features = [
  { icon: ShieldCheck, title: 'Match-Standard Security', description: 'Our security stack meets NIST, ISO 27001, and SOC 2 Type II standards — built for enterprises, accessible to all.' },
  { icon: Globe2, title: 'Global Infrastructure', description: 'Anycast DNS nodes across 6 continents ensure sub-20ms resolution times and true geographic redundancy.' },
  { icon: Zap, title: 'Real-Time Threat Response', description: 'Automated detection paired with human-led incident response means threats are contained in minutes, not hours.' },
  { icon: DollarSign, title: 'Transparent Pricing', description: 'No hidden renewal fees, no surprise charges. Every plan includes a clear breakdown and 30-day money-back guarantee.' },
  { icon: Clock, title: '24/7 Expert Support', description: 'Reach a certified security engineer any time via live chat, phone, or dedicated Slack channel.' },
  { icon: Users, title: 'Built for Teams', description: 'Role-based access controls, audit logs, SSO integration, and multi-seat management for security-conscious orgs.' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
}

export default function WhyUs() {
  return (
    <section id="security" className="py-16 lg:py-24" style={{ background: 'linear-gradient(135deg, #EFF8FF 0%, #F0FFF9 100%)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Feature card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          style={{ background: '#FFFFFF', borderRadius: 24, boxShadow: '0 4px 24px rgba(0,0,0,0.06)', padding: 'clamp(28px, 4vw, 48px)' }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left */}
            <div className="lg:sticky lg:top-28">
              <p className="text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: '#9CA3AF', letterSpacing: '0.12em' }}>
                03 / 04 — Why Zane360
              </p>
              <h2 style={{ fontFamily: 'var(--font-plus-jakarta)', fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 400, lineHeight: 1.15, color: '#000' }}>
                The platform that{' '}
                <em style={{ fontStyle: 'italic', color: '#FF9838' }}>never sleeps.</em>
              </h2>
              <p className="mt-5 text-base leading-relaxed" style={{ color: '#6B7280' }}>
                We designed Zane360 around one principle: your digital assets deserve the same level of protection as your physical ones. Every feature exists to give you certainty.
              </p>
              <motion.button
                className="mt-8 flex items-center gap-2 text-sm font-medium"
                style={{ background: '#0F0F0F', color: '#FFFFFF', borderRadius: 300, padding: '12px 24px' }}
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              >
                View All Features <ArrowRight size={14} />
              </motion.button>

              {/* Feature image */}
              <div className="mt-8" style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,0.08)' }}>
                <div className="flex items-center gap-1.5" style={{ background: '#1C1C1E', padding: '10px 16px' }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF5F57' }} />
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FEBC2E' }} />
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28C840' }} />
                </div>
                <img
                  src="https://www.bcs.org/media/oqcfoa5k/cyber-security-warning.jpg"
                  alt="Security platform"
                  className="w-full object-cover"
                  style={{ height: 220, display: 'block' }}
                />
              </div>
            </div>

            {/* Right: feature grid */}
            <div className="grid sm:grid-cols-2 gap-5">
              {features.map((f, i) => {
                const Icon = f.icon
                return (
                  <motion.div
                    key={f.title}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-40px' }}
                    className="p-5 rounded-2xl"
                    style={{ background: '#FAF9F7', border: '1px solid rgba(0,0,0,0.05)', transition: 'transform 0.2s ease, box-shadow 0.2s ease' }}
                    whileHover={{ y: -3, boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: 'rgba(255,152,56,0.10)' }}
                    >
                      <Icon size={18} style={{ color: '#FF9838' }} />
                    </div>
                    <h3 className="text-sm font-semibold mb-2" style={{ color: '#000', fontFamily: 'var(--font-plus-jakarta)' }}>{f.title}</h3>
                    <p className="text-xs leading-relaxed" style={{ color: '#6B7280', lineHeight: 1.65 }}>{f.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
