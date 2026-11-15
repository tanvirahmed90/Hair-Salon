import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight, Scissors } from 'lucide-react'

interface NavbarProps {
  onOpenBooking: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'About', href: '#why-us' },
    { label: 'Team', href: '#team' },
    { label: 'Book', href: '#book' },
  ]

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false)
    if (href === '#book') {
      onOpenBooking()
      return
    }
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#130e0c]/90 backdrop-blur-md border-b border-border shadow-2xl py-3.5'
            : 'bg-[#130e0c]/60 backdrop-blur-[12px] border-b border-white/[0.04] py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Left: Wordmark */}
          <a
            href="#"
            className="group flex items-center gap-2.5 text-accent font-sans font-medium uppercase tracking-[0.2em] text-sm md:text-base select-none transition-opacity hover:opacity-90"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent transition-transform group-hover:scale-150 duration-200" />
            STUDIO NORA
          </a>

          {/* Right Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-7 text-[12px] uppercase font-sans font-medium tracking-[0.16em] text-foreground/75">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link.href)}
                  className="transition-colors hover:text-accent relative py-1 text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Terracotta Button */}
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-accent-hover text-[#130e0c] font-sans font-medium text-xs uppercase tracking-label transition-all duration-200 shadow-sm hover:shadow-terracotta-glow active:scale-[0.98]"
            >
              <span>Book now</span>
              <span className="text-sm">→</span>
            </button>
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="px-3 py-1.5 bg-accent text-[#130e0c] font-sans font-medium text-[11px] uppercase tracking-label"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-foreground/80 hover:text-accent transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[60px] z-40 bg-[#130e0c]/98 backdrop-blur-xl border-b border-border px-6 py-8 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-6">
              <div className="label-caps text-muted-foreground pb-2 border-b border-white/5">
                Navigation
              </div>
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link.href)}
                  className="text-left font-headline text-3xl tracking-wide text-pearl hover:text-accent transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-sm font-sans text-muted-foreground">0{navLinks.indexOf(link) + 1}</span>
                </button>
              ))}

              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false)
                    onOpenBooking()
                  }}
                  className="w-full py-3.5 bg-accent text-[#130e0c] font-sans font-medium text-xs uppercase tracking-label flex items-center justify-center gap-2"
                >
                  <span>Book appointment now</span>
                  <span>→</span>
                </button>
                <div className="text-center text-[10px] uppercase font-sans tracking-label text-muted-foreground pt-1">
                  14 Pembridge Road, Notting Hill · 020 7946 0912
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
