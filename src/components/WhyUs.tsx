import React from 'react'
import { motion } from 'framer-motion'
import { WHY_US_CONTENT } from '../data/content'
import { Check } from 'lucide-react'

interface WhyUsProps {
  onOpenBooking: () => void
}

export const WhyUs: React.FC<WhyUsProps> = ({ onOpenBooking }) => {
  return (
    <section id="why-us" className="relative py-28 md:py-36 bg-[#130e0c] border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text Content (span 7) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <div className="label-caps text-accent mb-3 flex items-center gap-2">
              <span className="w-2 h-[2px] bg-accent" />
              <span>Our Philosophy · Studio Standard</span>
            </div>

            {/* Bebas Neue large pearl headline */}
            <h2
              className="font-headline text-pearl uppercase font-normal leading-[0.92] tracking-tight mb-8"
              style={{ fontSize: 'clamp(48px, 6vw, 84px)' }}
            >
              {WHY_US_CONTENT.headline}
            </h2>

            {/* Inter 300 muted paragraphs */}
            <div className="space-y-5 mb-10 text-muted-foreground font-sans font-light text-base md:text-lg leading-relaxed max-w-xl">
              {WHY_US_CONTENT.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* 4 terracotta check points (lucide Check) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-10 pt-4 border-t border-white/[0.08]">
              {WHY_US_CONTENT.checkpoints.map((checkpoint, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-none bg-accent/15 border border-accent/40 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-accent stroke-[2.5]" />
                  </div>
                  <span className="font-sans text-xs md:text-sm font-normal text-foreground/90 tracking-wide">
                    {checkpoint}
                  </span>
                </div>
              ))}
            </div>

            {/* Interactive touchpoint */}
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-surface hover:bg-surface-raised border border-accent/40 hover:border-accent text-pearl font-sans font-medium text-xs uppercase tracking-label transition-all duration-200"
            >
              <span>Meet with a stylist</span>
              <span className="text-accent">→</span>
            </button>
          </motion.div>

          {/* Right Column: Image (span 5) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface border border-border group">
              {/* Image brief: stylist and client in consultation, intimate salon setting, warm light, genuine connection */}
              <img
                src={WHY_US_CONTENT.image}
                alt="Stylist and client consultation at Studio Nora"
                className="w-full h-full object-cover object-center filter contrast-[1.05] brightness-[0.9] transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Composition editorial tint */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#130e0c]/90 via-[#130e0c]/20 to-transparent pointer-events-none" />

              {/* Inset Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#130e0c]/90 backdrop-blur-md border border-border/80">
                <div className="label-caps text-accent text-[9px] mb-1">
                  Private Salon Suites
                </div>
                <div className="font-headline text-lg text-pearl tracking-wide uppercase">
                  One Client. One Stylist. Zero Rushing.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
