'use client'

import { motion } from 'framer-motion'
import { Plus, Mic, ArrowRight } from 'lucide-react'

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number]

const suggestions = [
  'Register a .com domain with WHOIS privacy',
  'Set up enterprise SSL certificates',
  'Get 24/7 threat monitoring',
  'Protect against DDoS attacks',
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{
        background:
          'radial-gradient(97.22% 78.13% at 50% -17.36%, rgb(93,179,207) 22%, rgba(145,201,220,0.56) 58%, rgba(250,249,247,0) 86%), linear-gradient(rgb(34,201,255) -26%, rgb(250,249,247) 24%)',
      }}
    >
      {/* Spacer so content clears the floating navbar */}
      <div style={{ height: 88 }} />

      {/* Centered content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 pb-24">

        {/* Category label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.5, ease }}
          className="text-xs font-semibold uppercase tracking-widest mb-6"
          style={{ color: '#232529', letterSpacing: '0.12em' }}
        >
          International Domains &amp; Cybersecurity
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.65, ease }}
          className="text-center mb-10"
          style={{
            fontFamily: 'var(--font-plus-jakarta)',
            fontSize: 'clamp(38px, 5.5vw, 60px)',
            fontWeight: 400,
            lineHeight: 1.1,
            color: '#000000',
            maxWidth: 620,
          }}
        >
          Secure your digital presence,{' '}
          <em style={{ fontStyle: 'italic', color: '#FF9838' }}>effortlessly.</em>
        </motion.h1>

        {/* Input card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.42, duration: 0.65, ease }}
          className="w-full"
          style={{
            maxWidth: 600,
            background: '#FFFFFF',
            borderRadius: 20,
            boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
            padding: '20px 24px',
            marginBottom: 20,
          }}
        >
          <textarea
            rows={3}
            placeholder="What domain or security solution are you looking for today?"
            className="w-full resize-none outline-none text-base"
            style={{
              border: 'none',
              background: 'transparent',
              color: '#000',
              fontFamily: 'var(--font-inter)',
              lineHeight: 1.6,
            }}
          />

          {/* Action row */}
          <div
            className="flex items-center gap-3 mt-3 pt-3"
            style={{ borderTop: '1px solid #F0F0F0' }}
          >
            <button
              className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
              style={{ background: '#F5F3F0' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#EBEBEB')}
              onMouseLeave={e => (e.currentTarget.style.background = '#F5F3F0')}
            >
              <Plus size={15} color="#6B7280" />
            </button>

            <div className="flex items-center gap-2">
              <div className="w-8 h-4 rounded-full relative" style={{ background: '#E5E5E5' }}>
                <div
                  className="w-3 h-3 rounded-full absolute top-0.5 left-0.5"
                  style={{ background: '#FFF', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }}
                />
              </div>
              <span className="text-xs" style={{ color: '#9CA3AF' }}>Plan</span>
            </div>

            <div className="flex-1" />

            <button
              className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
              style={{ background: '#F5F3F0' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#EBEBEB')}
              onMouseLeave={e => (e.currentTarget.style.background = '#F5F3F0')}
            >
              <Mic size={14} color="#6B7280" />
            </button>

            <motion.button
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: '#FF5722' }}
              whileHover={{ scale: 1.08, background: '#E64A19' }}
              whileTap={{ scale: 0.94 }}
            >
              <ArrowRight size={17} color="#FFFFFF" />
            </motion.button>
          </div>
        </motion.div>

        {/* Suggestion chips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.62, duration: 0.55 }}
          className="flex flex-col items-center gap-3"
        >
          <span
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: '#9CA3AF', letterSpacing: '0.12em' }}
          >
            Not sure where to start? Try one of these:
          </span>
          <div className="flex flex-wrap justify-center gap-2 max-w-xl">
            {suggestions.map((s) => (
              <motion.button
                key={s}
                className="px-4 py-2 text-xs font-medium"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E0E0E0',
                  borderRadius: 999,
                  color: '#232529',
                  transition: 'border-color 0.2s, color 0.2s',
                }}
                whileHover={{ borderColor: '#FF9838', color: '#FF9838', scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                {s}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
