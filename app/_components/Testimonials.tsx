'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    quote: 'Zane360 gave us a unified view of our entire domain portfolio across 12 countries. The DNS protection alone has saved us from three attempted hijacks this year.',
    name: 'Fatima Al-Rashid',
    role: 'CTO, MercaTrade Group',
    img: 'fatima',
  },
  {
    quote: 'Switching to Zane360 for managed security was the best decision we made in 2024. Their response team had a ransomware attempt contained in under 20 minutes.',
    name: 'Marcus Webb',
    role: 'Head of IT, NovaBuild Ltd',
    img: 'marcus',
  },
  {
    quote: "The platform is genuinely world-class. Clean dashboard, instant SSL provisioning, and customer support that actually knows what they're talking about.",
    name: 'Yuki Tanaka',
    role: 'Founder, Tanaka Digital',
    img: 'yuki',
  },
  {
    quote: 'We needed .ke, .ng, and .za domains alongside enterprise DDoS protection. Zane360 handled everything in one contract. Outstanding.',
    name: 'Chidi Okeke',
    role: 'VP Engineering, AfriCommerce',
    img: 'chidi',
  },
]

const slideVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 48 : -48 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -48 : 48 }),
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const go = (next: number) => {
    setDirection(next > current ? 1 : -1)
    setCurrent((next + testimonials.length) % testimonials.length)
  }

  const t = testimonials[current]

  return (
    <section id="pricing" className="py-16 lg:py-24" style={{ background: '#FAF9F7' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#9CA3AF', letterSpacing: '0.12em' }}>
            Testimonials
          </p>
          <h2 style={{ fontFamily: 'var(--font-miso)', fontSize: 'clamp(32px, 3.5vw, 42px)', fontWeight: 400, color: '#000' }}>
            Trusted by{' '}
            <em style={{ fontStyle: 'italic', color: '#FF9838' }}>leaders.</em>
          </h2>
        </motion.div>

        {/* Card */}
        <div
          className="relative rounded-2xl p-8 sm:p-12 overflow-hidden mb-8"
          style={{ background: '#FFFFFF', border: '1px solid #E5E5E5', boxShadow: '0 4px 24px rgba(0,0,0,0.05)' }}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} style={{ color: '#FF9838', fontSize: '1rem' }}>★</span>
                ))}
              </div>

              <p
                className="leading-relaxed mb-8"
                style={{ color: '#000', fontFamily: 'var(--font-miso)', fontSize: 22, fontWeight: 300 }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0" style={{ border: '2px solid #E5E5E5' }}>
                  <img src={`https://picsum.photos/seed/${t.img}/120/120`} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-semibold" style={{ color: '#000', fontFamily: 'var(--font-wix)', fontSize: 14 }}>{t.name}</div>
                  <div className="mt-0.5" style={{ color: '#9CA3AF', fontFamily: 'var(--font-wix)', fontSize: 13 }}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                className="rounded-full transition-all duration-300"
                style={{ width: i === current ? 24 : 8, height: 8, background: i === current ? '#FF9838' : '#E5E5E5' }}
              />
            ))}
          </div>
          <div className="flex gap-2">
            {[ChevronLeft, ChevronRight].map((Icon, idx) => (
              <motion.button
                key={idx}
                onClick={() => go(current + (idx === 0 ? -1 : 1))}
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{
                  background: idx === 1 ? '#FF9838' : '#F5F3F0',
                  color: idx === 1 ? '#FFF' : '#6B7280',
                  transition: 'background 0.2s',
                }}
                whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.93 }}
              >
                <Icon size={17} />
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
