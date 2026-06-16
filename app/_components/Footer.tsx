'use client'

import { motion } from 'framer-motion'
import { Layers } from 'lucide-react'

const navCols = [
  { heading: 'Company', links: ['About Us', 'Careers', 'Blog', 'Press', 'Partners'] },
  { heading: 'Product', links: ['Domain Registration', 'Managed Security', 'SSL Certificates', 'Web Hosting', 'DNS Protection'] },
  { heading: 'Resources', links: ['Help Center', 'Status Page', 'Contact Us', 'Security Reports', 'SLA'] },
  { heading: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR', 'Acceptable Use'] },
]

export default function Footer() {
  return (
    <footer className="py-16" style={{ background: '#FFFFFF', borderTop: '1px solid #E5E5E5' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 pb-12" style={{ borderBottom: '1px solid #E5E5E5' }}>

          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #FF9838 0%, #FF5722 100%)' }}
              >
                <Layers size={15} color="#FFFFFF" />
              </div>
              <span className="text-base font-semibold" style={{ color: '#000', fontFamily: 'var(--font-wix)' }}>
                Zane360
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: '#6B7280', lineHeight: 1.65 }}>
              International domain registrar and cybersecurity solutions provider. Protecting businesses across 50+ countries.
            </p>
          </div>

          {/* Nav columns */}
          {navCols.map((col) => (
            <div key={col.heading}>
              <h4
                className="mb-4"
                style={{
                  fontFamily: 'var(--font-wix)',
                  fontSize: 16,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.10em',
                  color: '#232529',
                }}
              >
                {col.heading}
              </h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      style={{ color: '#000', textDecoration: 'none', fontFamily: 'var(--font-wix)', fontSize: 16, fontWeight: 400 }}
                      whileHover={{ textDecoration: 'underline' }}
                      transition={{ duration: 0.15 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: '#9CA3AF' }}>
            © 2026 Zane360. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: '#9CA3AF' }}>
            Secured by Zane360 · <span style={{ color: '#22c55e' }}>All systems operational</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
