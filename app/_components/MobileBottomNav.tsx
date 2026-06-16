'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Home, Globe, Shield, Tag, HelpCircle } from 'lucide-react'

const tabs = [
  { icon: Home, label: 'Home', href: '#hero' },
  { icon: Globe, label: 'Domains', href: '#domains' },
  { icon: Shield, label: 'Security', href: '#security' },
  { icon: Tag, label: 'Pricing', href: '#pricing' },
  { icon: HelpCircle, label: 'FAQ', href: '#faq' },
]

const sectionIds = ['hero', 'domains', 'security', 'pricing', 'faq']

export default function MobileBottomNav() {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const handleTap = (href: string) => {
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setActive(id)
  }

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      style={{
        background: 'rgba(255,255,255,0.96)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderTop: '1px solid #E5E5E5',
        paddingBottom: 'env(safe-area-inset-bottom, 0px)',
      }}
    >
      <div className="flex items-center justify-around px-2 pt-2 pb-2">
        {tabs.map(({ icon: Icon, label, href }) => {
          const id = href.replace('#', '')
          const isActive = active === id
          return (
            <motion.button
              key={label}
              onClick={() => handleTap(href)}
              whileTap={{ scale: 0.84 }}
              className="flex flex-col items-center gap-1 px-3 py-1 rounded-2xl relative"
              style={{ minWidth: 52 }}
            >
              {isActive && (
                <motion.div
                  layoutId="mobile-nav-pill"
                  className="absolute inset-0 rounded-2xl"
                  style={{ background: 'rgba(229,62,62,0.10)' }}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <Icon
                size={20}
                className="relative z-10"
                style={{ color: isActive ? '#e53e3e' : '#9CA3AF' }}
              />
              <span
                className="relative z-10 text-[10px] font-semibold tracking-wide"
                style={{ color: isActive ? '#e53e3e' : '#9CA3AF', fontFamily: 'var(--font-wix)' }}
              >
                {label}
              </span>
            </motion.button>
          )
        })}
      </div>
    </nav>
  )
}
