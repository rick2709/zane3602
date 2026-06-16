'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const team = [
  { name: 'Amara Osei', role: 'CEO & Co-Founder', seed: 'amara' },
  { name: 'Lena Hartmann', role: 'Chief Security Officer', seed: 'lena' },
  { name: 'Diego Vargas', role: 'Head of Engineering', seed: 'diego' },
  { name: 'Priya Nair', role: 'VP of Product', seed: 'priya' },
  { name: 'Kwame Asante', role: 'Lead Domain Architect', seed: 'kwame' },
  { name: 'Sophie Müller', role: 'Director of Partnerships', seed: 'sophie' },
]

const CARD_WIDTH = 260
const GAP = 16

export default function Team() {
  const [index, setIndex] = useState(0)
  const constraintsRef = useRef(null)
  const visibleCount = 3

  const canPrev = index > 0
  const canNext = index < team.length - visibleCount
  const prev = () => setIndex((i) => Math.max(0, i - 1))
  const next = () => setIndex((i) => Math.min(team.length - visibleCount, i + 1))

  return (
    <section
      className="py-16 lg:py-24 overflow-hidden"
      style={{
        background: '#FFFFFF',
        backgroundImage: 'radial-gradient(circle, rgba(220,180,210,0.25) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#9CA3AF', letterSpacing: '0.12em' }}>
              04 / 04 — The Team
            </p>
            <h2 style={{ fontFamily: 'var(--font-plus-jakarta)', fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 400, color: '#000' }}>
              People behind{' '}
              <em style={{ fontStyle: 'italic', color: '#FF9838' }}>Zane360.</em>
            </h2>
          </div>

          <div className="flex items-center gap-2">
            {[{ fn: prev, can: canPrev, Icon: ChevronLeft }, { fn: next, can: canNext, Icon: ChevronRight }].map(({ fn, can, Icon }, idx) => (
              <motion.button
                key={idx}
                onClick={fn}
                disabled={!can}
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{
                  background: can ? '#FF9838' : '#F5F3F0',
                  color: can ? '#FFFFFF' : '#9CA3AF',
                  cursor: can ? 'pointer' : 'not-allowed',
                  transition: 'background 0.2s',
                }}
                whileHover={can ? { scale: 1.08 } : {}}
                whileTap={can ? { scale: 0.93 } : {}}
              >
                <Icon size={17} />
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Carousel */}
        <div ref={constraintsRef} className="overflow-hidden">
          <motion.div
            animate={{ x: -(index * (CARD_WIDTH + GAP)) }}
            transition={{ type: 'spring', stiffness: 260, damping: 32 }}
            drag="x"
            dragConstraints={{ right: 0, left: -((team.length - visibleCount) * (CARD_WIDTH + GAP)) }}
            dragElastic={0.08}
            onDragEnd={(_, info) => { if (info.offset.x < -60) next(); if (info.offset.x > 60) prev() }}
            className="flex cursor-grab active:cursor-grabbing"
            style={{ gap: GAP, willChange: 'transform' }}
          >
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.07, duration: 0.5 }}
                whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(0,0,0,0.10)' }}
                className="flex-shrink-0 rounded-2xl overflow-hidden"
                style={{
                  width: CARD_WIDTH,
                  background: '#FFFFFF',
                  border: '1px solid #E5E5E5',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.05)',
                  transition: 'box-shadow 0.2s ease, transform 0.2s ease',
                }}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={`https://picsum.photos/seed/${member.seed}/300/300`}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 55%, rgba(0,0,0,0.04) 100%)' }} />
                </div>
                <div className="px-5 pb-5 pt-4">
                  <h3 className="font-semibold text-sm" style={{ color: '#000', fontFamily: 'var(--font-plus-jakarta)' }}>{member.name}</h3>
                  <p className="text-xs mt-0.5" style={{ color: '#9CA3AF' }}>{member.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: team.length - visibleCount + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className="rounded-full transition-all duration-300"
              style={{ width: i === index ? 24 : 8, height: 8, background: i === index ? '#FF9838' : '#E5E5E5' }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
