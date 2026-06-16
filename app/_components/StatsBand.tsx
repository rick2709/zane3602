'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 500, suffix: 'K+', label: 'Domains Registered' },
  { value: 99.9, suffix: '%', label: 'Uptime Guaranteed', decimal: true },
  { value: 24, suffix: '/7', label: 'Threat Monitoring' },
  { value: 50, suffix: '+', label: 'Countries Served' },
]

const logos = ['Acme Corp', 'NovaTech', 'QuantumIO', 'Meridian', 'Starlux', 'PeakSystems']

function StatCounter({ value, suffix, label, decimal }: {
  value: number; suffix: string; label: string; decimal?: boolean
}) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const duration = 1800, steps = 60
    const increment = value / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) { setCount(value); clearInterval(timer) }
      else setCount(decimal ? Math.round(current * 10) / 10 : Math.floor(current))
    }, duration / steps)
    return () => clearInterval(timer)
  }, [inView, value, decimal])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div
        className="mb-1"
        style={{ color: '#e53e3e', fontFamily: 'var(--font-miso)', fontSize: 48, fontWeight: 400 }}
      >
        {decimal ? count.toFixed(count === value ? 1 : 0) : count}{suffix}
      </div>
      <div style={{ color: '#9CA3AF', fontFamily: 'var(--font-wix)', fontSize: 13 }}>{label}</div>
    </motion.div>
  )
}

export default function StatsBand() {
  return (
    <section className="py-16 lg:py-20" style={{ background: '#FAF9F7' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Trusted by */}
        <p
          className="text-center uppercase mb-8"
          style={{ color: '#9CA3AF', fontFamily: 'var(--font-wix)', fontSize: 12, fontWeight: 500, letterSpacing: '0.08em' }}
        >
          Trusted by companies worldwide
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-16">
          {logos.map((name, i) => (
            <motion.span
              key={name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              className="font-semibold"
              style={{ color: '#C4C4C4', letterSpacing: '0.06em', fontFamily: 'var(--font-wix)', fontSize: 14 }}
            >
              {name}
            </motion.span>
          ))}
        </div>

        {/* Divider */}
        <div className="mb-16 h-px" style={{ background: 'linear-gradient(to right, transparent, #E5E5E5, transparent)' }} />

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((s) => <StatCounter key={s.label} {...s} />)}
        </div>
      </div>
    </section>
  )
}
