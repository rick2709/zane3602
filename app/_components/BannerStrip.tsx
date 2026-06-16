'use client'

export default function BannerStrip() {
  return (
    <div
      style={{
        height: 64,
        background:
          'radial-gradient(ellipse 80% 100% at 50% 50%, #FF7F47 0%, #FFAE53 40%, rgba(255,174,83,0.2) 70%, transparent 100%)',
        position: 'relative',
      }}
    />
  )
}
