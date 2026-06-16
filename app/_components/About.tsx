'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-16 lg:py-24" style={{ background: 'linear-gradient(135deg, #FFF0F5 0%, #F0FFFE 100%)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          style={{
            background: '#FFFFFF',
            borderRadius: 24,
            boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
            padding: 'clamp(28px, 4vw, 48px)',
          }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <p
                className="uppercase mb-6"
                style={{ color: '#9CA3AF', fontFamily: 'var(--font-wix)', fontSize: 12, fontWeight: 500, letterSpacing: '0.08em' }}
              >
                01 / 04
              </p>
              <h2
                style={{
                  fontFamily: 'var(--font-miso)',
                  fontSize: 'clamp(32px, 4.5vw, 42px)',
                  fontWeight: 400,
                  lineHeight: 1.05,
                  color: '#000000',
                }}
              >
                Your digital identity,{' '}
                <em style={{ fontStyle: 'normal', color: '#e53e3e' }}>secured.</em>
              </h2>
              <p className="mt-5 leading-relaxed" style={{ color: '#6B7280', fontFamily: 'var(--font-miso)', fontSize: 22, fontWeight: 400 }}>
                Zane360 was built for businesses that understand the internet is where trust is won or lost. We combine world-class domain registration across 50+ country-code TLDs with enterprise-grade cybersecurity services — all from a single, unified dashboard.
              </p>
              <p className="mt-4 text-base leading-relaxed" style={{ color: '#6B7280' }}>
                Real-time threat monitoring, automated SSL issuance, and always-on DNS protection — so you can focus on growth, not vulnerabilities.
              </p>

              <div className="mt-8 flex flex-wrap gap-4 items-center">
                <motion.button
                  className="flex items-center gap-2 font-semibold"
                  style={{ background: '#0F0F0F', color: '#FFFFFF', borderRadius: 300, padding: '12px 24px', fontFamily: 'var(--font-wix)', fontSize: 14 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Learn More <ArrowRight size={14} />
                </motion.button>
                <div className="grid grid-cols-3 gap-6 ml-2">
                  {[{ num: '500K+', label: 'Domains' }, { num: '50+', label: 'Countries' }, { num: '99.9%', label: 'Uptime' }].map(({ num, label }) => (
                    <div key={label}>
                      <div className="text-lg font-semibold" style={{ color: '#000', fontFamily: 'var(--font-miso)' }}>{num}</div>
                      <div style={{ color: '#9CA3AF', fontFamily: 'var(--font-wix)', fontSize: 13 }}>{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: browser mockup */}
            <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,0.10)' }}>
              <div
                className="flex items-center gap-1.5"
                style={{ background: '#1C1C1E', padding: '10px 16px' }}
              >
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF5F57' }} />
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FEBC2E' }} />
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28C840' }} />
              </div>
              <img
                src="https://www.theforage.com/blog/wp-content/uploads/2022/12/what-is-cybersecurity.jpg"
                alt="Cybersecurity platform"
                className="w-full object-cover"
                style={{ height: 280, display: 'block' }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
