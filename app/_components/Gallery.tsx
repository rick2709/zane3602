'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

const images = [
  { src: 'https://www.maryville.edu/mpress/wp-content/uploads/sites/64/2016/05/cybersecurity.F.jpg', alt: 'Cybersecurity' },
  { src: 'https://www.theforage.com/blog/wp-content/uploads/2022/12/what-is-cybersecurity.jpg', alt: 'What is Cybersecurity' },
  { src: 'https://d13kjxnqnhcmn2.cloudfront.net/AcuCustom/Sitename/DAM/085/Cyber_trends_2025_-_Main1.jpg', alt: 'Cyber Trends 2025' },
  { src: 'https://www.bcs.org/media/oqcfoa5k/cyber-security-warning.jpg', alt: 'Cybersecurity Warning' },
  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8e2tSzygvgjJMXqIutph1Sjl1tbh50aCJ6A&s', alt: 'Cybersecurity Operations' },
  { src: 'https://www.maryville.edu/mpress/wp-content/uploads/sites/64/2016/05/cybersecurity.F.jpg', alt: 'Network Security' },
  { src: 'https://d13kjxnqnhcmn2.cloudfront.net/AcuCustom/Sitename/DAM/085/Cyber_trends_2025_-_Main1.jpg', alt: 'Security Trends' },
  { src: 'https://www.bcs.org/media/oqcfoa5k/cyber-security-warning.jpg', alt: 'Threat Intelligence' },
]

const IMG_W = 360
const GAP = 16

export default function Gallery() {
  const constraintsRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState<'prompt' | 'application'>('application')
  const maxDrag = (images.length - 1) * (IMG_W + GAP)

  return (
    <section
      id="gallery"
      className="py-16 lg:py-24 overflow-hidden"
      style={{
        background: '#FFFFFF',
        backgroundImage: 'radial-gradient(circle, rgba(220,180,210,0.25) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }}
    >
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-6"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#9CA3AF', letterSpacing: '0.12em' }}>
              In Action
            </p>
            <h2 style={{ fontFamily: 'var(--font-plus-jakarta)', fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 400, color: '#000' }}>
              Infrastructure built for{' '}
              <em style={{ fontStyle: 'italic', color: '#FF9838' }}>scale.</em>
            </h2>
          </div>

          {/* Tab switcher */}
          <div
            className="flex items-center p-1 rounded-full"
            style={{ background: '#F5F3F0' }}
          >
            {(['prompt', 'application'] as const).map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="px-5 py-2 text-xs font-semibold capitalize rounded-full"
                style={{
                  background: activeTab === tab
                    ? 'linear-gradient(135deg, #FF9838 0%, #FF5722 100%)'
                    : 'transparent',
                  color: activeTab === tab ? '#FFFFFF' : '#6B7280',
                  transition: 'color 0.2s',
                }}
                whileTap={{ scale: 0.97 }}
              >
                {tab === 'prompt' ? 'Prompt' : 'Application'}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Horizontal drag strip */}
      <div
        ref={constraintsRef}
        className="overflow-hidden select-none"
        style={{ paddingLeft: 'max(1rem, calc((100vw - 1280px) / 2 + 1rem))' }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -maxDrag }}
          dragElastic={0.04}
          className="flex cursor-grab active:cursor-grabbing"
          style={{ gap: GAP, width: 'max-content' }}
        >
          {images.map((img, i) => (
            <motion.div
              key={img.alt + i}
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="flex-shrink-0 relative rounded-2xl overflow-hidden group"
              style={{
                width: IMG_W,
                height: 240,
                border: '1px solid rgba(0,0,0,0.06)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.60) 0%, transparent 60%)' }}
              />
              <span
                className="absolute bottom-3 left-4 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ color: 'rgba(255,255,255,0.90)', fontFamily: 'var(--font-inter)' }}
              >
                {img.alt}
              </span>
            </motion.div>
          ))}
          <div style={{ width: 'max(1rem, calc((100vw - 1280px) / 2 + 1rem))', flexShrink: 0 }} />
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 flex justify-end">
        <span className="text-xs" style={{ color: '#9CA3AF', fontFamily: 'var(--font-geist-mono)' }}>
          ← drag to explore →
        </span>
      </div>
    </section>
  )
}
