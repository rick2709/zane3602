'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTABand() {
  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden" style={{ background: '#F16120' }}>
      {/* Abstract blob shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute"
          style={{
            width: 500,
            height: 500,
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            background: 'rgba(255,255,255,0.06)',
            top: -140,
            left: -100,
          }}
        />
        <div
          className="absolute"
          style={{
            width: 380,
            height: 380,
            borderRadius: '40% 60% 70% 30% / 50% 60% 40% 50%',
            background: 'rgba(255,255,255,0.05)',
            bottom: -100,
            right: -80,
          }}
        />
        <div
          className="absolute"
          style={{
            width: 240,
            height: 240,
            borderRadius: '50% 50% 40% 60% / 40% 50% 50% 60%',
            background: 'rgba(255,255,255,0.04)',
            top: '30%',
            right: '15%',
          }}
        />
      </div>

      {/* White card */}
      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          style={{
            background: '#FAF9F7',
            borderRadius: 20,
            padding: 'clamp(32px, 5vw, 56px)',
            textAlign: 'center',
          }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: '#9CA3AF', letterSpacing: '0.12em' }}>
            Get Started Today
          </p>

          <h2
            style={{
              fontFamily: 'var(--font-plus-jakarta)',
              fontSize: 'clamp(30px, 4vw, 48px)',
              fontWeight: 400,
              lineHeight: 1.15,
              color: '#000',
              marginBottom: 16,
            }}
          >
            One platform.{' '}
            <em style={{ fontStyle: 'italic', color: '#FF9838' }}>Total protection.</em>
          </h2>

          <p className="text-base leading-relaxed mb-8 max-w-md mx-auto" style={{ color: '#6B7280' }}>
            Join 500,000+ businesses that trust Zane360 to secure their domains and defend their digital infrastructure.
          </p>

          {/* Input + CTA row */}
          <div
            className="flex flex-col sm:flex-row gap-3 mb-6"
            style={{
              background: '#FFFFFF',
              borderRadius: 16,
              padding: '8px 8px 8px 20px',
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
            }}
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 outline-none text-sm bg-transparent"
              style={{ color: '#000', fontFamily: 'var(--font-inter)' }}
            />
            <motion.button
              className="flex items-center justify-center gap-2 text-sm font-medium whitespace-nowrap"
              style={{ background: '#0F0F0F', color: '#FFFFFF', borderRadius: 12, padding: '12px 20px' }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Get Started Free <ArrowRight size={14} />
            </motion.button>
          </div>

          <p className="text-xs" style={{ color: '#9CA3AF' }}>
            No credit card required · 30-day money-back guarantee · Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  )
}
