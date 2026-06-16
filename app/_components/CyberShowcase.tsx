'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, Eye, Zap } from 'lucide-react'

const cyberImages = [
  'https://www.maryville.edu/mpress/wp-content/uploads/sites/64/2016/05/cybersecurity.F.jpg',
  'https://www.theforage.com/blog/wp-content/uploads/2022/12/what-is-cybersecurity.jpg',
  'https://d13kjxnqnhcmn2.cloudfront.net/AcuCustom/Sitename/DAM/085/Cyber_trends_2025_-_Main1.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8e2tSzygvgjJMXqIutph1Sjl1tbh50aCJ6A&s',
  'https://www.bcs.org/media/oqcfoa5k/cyber-security-warning.jpg',
]

const features = [
  { icon: Shield, label: 'Threat Detection', desc: '24/7 real-time monitoring' },
  { icon: Lock, label: 'Zero Trust', desc: 'Identity-first security model' },
  { icon: Eye, label: 'SOC-as-a-Service', desc: 'Expert analysts on call' },
  { icon: Zap, label: '15-min SLA', desc: 'Rapid incident response' },
]

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number]

export default function CyberShowcase() {
  return (
    <section
      id="security"
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ background: '#FAF9F7' }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="mb-12 lg:mb-16"
        >
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: '#9CA3AF', letterSpacing: '0.12em' }}
          >
            Cybersecurity
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-miso)',
              fontSize: 'clamp(32px, 3.5vw, 44px)',
              fontWeight: 400,
              lineHeight: 1.15,
              color: '#000',
              maxWidth: 560,
            }}
          >
            Enterprise-grade protection{' '}
            <em style={{ fontStyle: 'italic', color: '#FF9838' }}>for every business.</em>
          </h2>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">

          {/* Large feature card — left, spans 2 rows */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease, delay: 0.05 }}
            className="lg:row-span-2 rounded-2xl overflow-hidden relative"
            style={{ minHeight: 420, background: '#1C1C1E' }}
          >
            <img
              src={cyberImages[0]}
              alt="Cybersecurity operations"
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-2"
                style={{ color: '#FF9838', letterSpacing: '0.10em' }}
              >
                Threat Intelligence
              </p>
              <h3
                className="font-normal text-white mb-2"
                style={{ fontFamily: 'var(--font-miso)', fontSize: 22, fontWeight: 300, lineHeight: 1.3 }}
              >
                Global threat monitoring, around the clock
              </h3>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>
                Our SOC analysts watch your systems 24/7, correlating signals across DNS, endpoints, and network traffic.
              </p>
            </div>
          </motion.div>

          {/* Top-right: medium card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease, delay: 0.1 }}
            className="rounded-2xl overflow-hidden relative"
            style={{ minHeight: 200, background: '#1C1C1E' }}
          >
            <img
              src={cyberImages[1]}
              alt="Cybersecurity training"
              className="absolute inset-0 w-full h-full object-cover opacity-55"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: '#FF9838', letterSpacing: '0.10em' }}>
                Education &amp; Compliance
              </p>
              <h3 style={{ fontFamily: 'var(--font-miso)', fontSize: 18, fontWeight: 300, color: '#fff' }}>
                Security awareness for your entire team
              </h3>
            </div>
          </motion.div>

          {/* Top-right second column: white feature grid */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease, delay: 0.15 }}
            className="rounded-2xl p-6 grid grid-cols-2 gap-3"
            style={{ background: '#FFFFFF', border: '1px solid #E5E5E5', minHeight: 200 }}
          >
            {features.map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="flex flex-col gap-2 p-3 rounded-xl"
                style={{ background: '#FAF9F7', border: '1px solid #F0F0F0' }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: 'rgba(255,152,56,0.12)' }}
                >
                  <Icon size={15} color="#FF9838" />
                </div>
                <p className="text-xs font-semibold" style={{ color: '#000' }}>{label}</p>
                <p className="text-xs leading-snug" style={{ color: '#9CA3AF' }}>{desc}</p>
              </div>
            ))}
          </motion.div>

          {/* Bottom-middle: wide image card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease, delay: 0.2 }}
            className="rounded-2xl overflow-hidden relative"
            style={{ minHeight: 200, background: '#1C1C1E' }}
          >
            <img
              src={cyberImages[2]}
              alt="Cyber trends 2025"
              className="absolute inset-0 w-full h-full object-cover opacity-55"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: '#FF9838', letterSpacing: '0.10em' }}>
                2025 Trends
              </p>
              <h3 style={{ fontFamily: 'var(--font-miso)', fontSize: 18, fontWeight: 300, color: '#fff' }}>
                Ahead of emerging threats
              </h3>
            </div>
          </motion.div>

          {/* Bottom-right: stat card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease, delay: 0.25 }}
            className="rounded-2xl p-6 flex flex-col justify-between"
            style={{ background: '#0F0F0F', minHeight: 200 }}
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: 'rgba(255,255,255,0.4)', letterSpacing: '0.10em' }}>
                Platform stats
              </p>
              <div className="flex flex-col gap-4">
                {[
                  { num: '500K+', label: 'Businesses protected' },
                  { num: '99.99%', label: 'Uptime guaranteed' },
                  { num: '50+', label: 'Countries served' },
                ].map(({ num, label }) => (
                  <div key={label}>
                    <p className="text-2xl font-light text-white" style={{ fontFamily: 'var(--font-miso)' }}>{num}</p>
                    <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.45)' }}>{label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="w-full h-px mt-6"
              style={{ background: 'rgba(255,255,255,0.08)' }}
            />
          </motion.div>
        </div>

        {/* Bottom wide card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease, delay: 0.3 }}
          className="rounded-2xl overflow-hidden relative"
          style={{ height: 220, background: '#1C1C1E' }}
        >
          <img
            src={cyberImages[4]}
            alt="Cyber security warning"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="px-8 max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#FF9838', letterSpacing: '0.10em' }}>
                Incident Response
              </p>
              <h3
                className="font-normal text-white mb-2"
                style={{ fontFamily: 'var(--font-miso)', fontSize: 22, fontWeight: 300, lineHeight: 1.3 }}
              >
                When it matters most, we respond in 15 minutes.
              </h3>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Automated playbooks + human-led containment for every severity level.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
