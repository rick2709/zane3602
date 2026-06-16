'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Menu, Layers } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#domains' },
  { label: 'Projects', href: '#gallery' },
  { label: 'Security', href: '#security' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNav = (href: string) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Floating pill navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="flex items-center justify-between w-full"
          style={{
            maxWidth: 900,
            background: '#FFFFFF',
            borderRadius: 50,
            padding: '8px 8px 8px 20px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
          }}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #e53e3e 0%, #c53030 100%)' }}
            >
              <Layers size={15} color="#FFFFFF" />
            </div>
            <span className="text-base font-semibold" style={{ color: '#000', fontFamily: 'var(--font-wix)' }}>
              Zane360
            </span>
          </a>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center">
            {navLinks.map((link) => (
              <motion.button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="px-4 py-2 rounded-full"
                style={{ color: '#232529', fontFamily: 'var(--font-wix)', fontSize: 14, fontWeight: 400 }}
                whileHover={{ backgroundColor: '#F5F3F0' }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15 }}
              >
                {link.label}
              </motion.button>
            ))}
          </nav>

          {/* Right: lime CTA + hamburger */}
          <div className="flex items-center gap-2">
            <motion.button
              onClick={() => handleNav('#contact')}
              className="hidden sm:flex items-center"
              style={{
                background: '#EBFFB1',
                border: '1px solid #ADE900',
                borderRadius: 70,
                padding: '9px 20px',
                color: '#000000',
                fontFamily: 'var(--font-wix)',
                fontSize: 14,
                fontWeight: 600,
              }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Get Started
            </motion.button>
            <button
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-full"
              style={{ background: '#F5F3F0' }}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={18} color="#000" /> : <Menu size={18} color="#000" />}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[72px] left-4 right-4 z-40 md:hidden rounded-2xl overflow-hidden"
            style={{ background: '#FFFFFF', boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}
          >
            <nav className="flex flex-col p-3 gap-0.5">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNav(link.href)}
                  className="text-left px-4 py-3 rounded-xl transition-colors"
                  style={{ color: '#000', fontFamily: 'var(--font-wix)', fontSize: 14, fontWeight: 400 }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#F5F3F0')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNav('#contact')}
                className="mt-2 w-full py-3 text-center rounded-full"
                style={{ background: '#EBFFB1', border: '1px solid #ADE900', color: '#000', fontFamily: 'var(--font-wix)', fontSize: 14, fontWeight: 600 }}
              >
                Get Started
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
