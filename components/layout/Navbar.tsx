'use client'

import { useEffect, useState } from 'react'

const navItems = [
  { label: 'Overview', href: '#overview' },
  { label: 'Bio', href: '#bio' },
  { label: 'Projects', href: '#projects' },
]

export default function Navbar() {
  const [active, setActive] = useState('overview')
  const [scrolled, setScrolled] = useState(false)
  const [intro, setIntro] = useState(true)

  useEffect(() => {
    // Show light on first open for 3 seconds
    const introTimer = setTimeout(() => {
      setIntro(false)
    }, 3000)

    let timeout: ReturnType<typeof setTimeout>

    const handleScroll = () => {
      setScrolled(true)
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        setScrolled(false)
      }, 3000)

      const sections = ['overview', 'bio', 'projects']
      for (const section of sections.reverse()) {
        const el = document.getElementById(section)
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(section)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timeout)
      clearTimeout(introTimer)
    }
  }, [])

  function scrollTo(href: string) {
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const showGlow = scrolled || intro

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        showGlow
          ? 'bg-surface/90 backdrop-blur-md shadow-[0_8px_60px_rgba(192,193,255,0.25)]'
          : 'bg-transparent shadow-none'
      }`}
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter h-16 flex items-center justify-between">
        <span className="text-white font-bold text-xl">Efe Akay</span>
        <div className="flex items-center gap-2">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.href)}
              className={`px-4 py-2 rounded-lg text-label-md transition-all duration-200 ${
                active === item.href.replace('#', '')
                  ? 'bg-primary text-on-primary'
                  : 'text-on-surface-variant hover:text-primary hover:bg-white/5'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}