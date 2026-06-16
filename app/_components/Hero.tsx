'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, ArrowRight } from 'lucide-react'

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number]

const tldPricing = [
  { ext: '.com', price: '$12.99/yr' },
  { ext: '.co.zw', price: '$8.99/yr' },
  { ext: '.africa', price: '$14.99/yr' },
  { ext: '.org', price: '$10.99/yr' },
  { ext: '.net', price: '$11.99/yr' },
  { ext: '.io', price: '$39.99/yr' },
]

const popularExtensions = ['.com', '.africa', '.co.zw', '.io', '.tech', '.ai', '.org', '.net']

export default function Hero() {
  const [query, setQuery] = useState('')

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{
        background:
          'radial-gradient(97.22% 78.13% at 50% -17.36%, rgb(93,179,207) 22%, rgba(145,201,220,0.56) 58%, rgba(250,249,247,0) 86%), linear-gradient(rgb(34,201,255) -26%, rgb(250,249,247) 24%)',
      }}
    >
      {/* Spacer for floating navbar */}
      <div style={{ height: 88 }} />

      {/* Centered content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 pb-20">

        {/* Category label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5, ease }}
          className="uppercase mb-6"
          style={{ color: '#232529', fontFamily: 'var(--font-wix)', fontSize: 12, fontWeight: 500, letterSpacing: '0.08em' }}
        >
          International Domains &amp; Cybersecurity
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.65, ease }}
          className="text-center mb-8"
          style={{
            fontFamily: 'var(--font-miso)',
            fontSize: 42,
            fontWeight: 400,
            lineHeight: 1.1,
            color: '#000000',
            maxWidth: 620,
          }}
        >
          Find your perfect domain,{' '}
          <em style={{ fontStyle: 'italic', color: '#FF9838' }}>register instantly.</em>
        </motion.h1>

        {/* Domain search card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.38, duration: 0.65, ease }}
          className="w-full"
          style={{
            maxWidth: 640,
            background: '#FFFFFF',
            borderRadius: 20,
            boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
            padding: '20px 20px 16px',
          }}
        >
          {/* Search row */}
          <div className="flex gap-2 mb-4">
            <div
              className="flex-1 flex items-center gap-3 px-4 rounded-xl"
              style={{ border: '1.5px solid #E5E5E5', background: '#FAFAFA' }}
            >
              <Search size={16} color="#9CA3AF" style={{ flexShrink: 0 }} />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for your perfect domain…"
                className="flex-1 py-3 text-sm outline-none bg-transparent"
                style={{ color: '#000', fontFamily: 'var(--font-wix)' }}
              />
            </div>
            <motion.button
              className="px-6 py-3 text-sm font-semibold text-white rounded-xl whitespace-nowrap"
              style={{ background: '#0F0F0F' }}
              whileHover={{ background: '#333', scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              Search
            </motion.button>
          </div>

          {/* TLD pricing row */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tldPricing.map(({ ext, price }) => (
              <motion.button
                key={ext}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs"
                style={{
                  background: '#FAF9F7',
                  border: '1px solid #E5E5E5',
                  transition: 'border-color 0.2s, background 0.2s',
                }}
                whileHover={{ borderColor: '#FF9838', background: '#FFF8F3' }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="font-semibold" style={{ color: '#000' }}>{ext}</span>
                <span style={{ color: '#9CA3AF' }}>{price}</span>
              </motion.button>
            ))}
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: '#F0F0F0', marginBottom: 14 }} />

          {/* Popular extensions */}
          <div>
            <p
              className="text-xs font-semibold uppercase mb-3"
              style={{ color: '#9CA3AF', letterSpacing: '0.10em' }}
            >
              Popular extensions
            </p>
            <div className="flex flex-wrap items-center gap-2">
              {popularExtensions.map((ext) => (
                <motion.button
                  key={ext}
                  onClick={() => setQuery(ext)}
                  className="px-3 py-1.5 text-xs font-medium rounded-full"
                  style={{
                    background: '#F5F3F0',
                    border: '1px solid #E5E5E5',
                    color: '#232529',
                    transition: 'all 0.15s',
                  }}
                  whileHover={{ background: '#EBFFB1', borderColor: '#ADE900', color: '#000' }}
                  whileTap={{ scale: 0.95 }}
                >
                  {ext}
                </motion.button>
              ))}
              <motion.a
                href="#"
                className="flex items-center gap-1 text-xs font-medium ml-1"
                style={{ color: '#FF9838' }}
                whileHover={{ gap: '6px' }}
              >
                See all pricing <ArrowRight size={11} />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
