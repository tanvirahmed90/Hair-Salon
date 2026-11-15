import React from 'react'
import { motion } from 'framer-motion'
import { BOOKING_CTA_CONTENT } from '../data/content'
import { Calendar, ArrowRight } from 'lucide-react'

interface BookingCTAProps {
  onOpenBooking: () => void
}

export const BookingCTA: React.FC<BookingCTAProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="book-cta"
      className="relative w-full py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: 'hsl(18, 42%, 55%)' }}
    >
      {/* Editorial background accent texture lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(#130e0c_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 text-center flex flex-col items-center">
        {/* Bebas Neue clamp(52px, 7vw, 90px) dark */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-headline text-[#130e0c] uppercase font-normal leading-[0.92] tracking-tight mb-5"
          style={{ fontSize: 'clamp(52px, 7vw, 96px)' }}
        >
          {BOOKING_CTA_CONTENT.headline}
        </motion.h2>

        {/* Inter 300 dark */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-sans font-light text-[#130e0c]/90 text-base md:text-xl max-w-xl mx-auto mb-10 leading-relaxed"
        >
          {BOOKING_CTA_CONTENT.description}
        </motion.p>

        {/* "Book now →" dark button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <button
            onClick={onOpenBooking}
            className="group px-10 py-5 bg-[#130e0c] hover:bg-[#1a1411] text-pearl font-sans font-medium text-xs md:text-sm uppercase tracking-label transition-all duration-300 shadow-2xl flex items-center gap-3 active:scale-[0.98]"
          >
            <span>{BOOKING_CTA_CONTENT.ctaButton}</span>
            <span className="text-accent group-hover:translate-x-1 transition-transform">
              →
            </span>
          </button>
        </motion.div>

        {/* "New clients welcome · Consultations always free · Walk-ins Mondays" Inter 10px dark 70% */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-sans font-medium text-[10px] uppercase tracking-label text-[#130e0c]/70"
        >
          {BOOKING_CTA_CONTENT.microcopy}
        </motion.p>
      </div>
    </section>
  )
}
