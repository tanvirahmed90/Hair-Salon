import React from 'react'
import { motion, Variants } from 'framer-motion'
import { HERO_CONTENT } from '../data/content'
import { ArrowRight, Sparkles } from 'lucide-react'

interface HeroProps {
  onOpenBooking: () => void
  onExploreWork: () => void
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreWork }) => {
  // Stagger animation container
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  }

  // Aggressive stagger fade-up (y: 40 -> 0, 0.6s)
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <section className="relative w-full min-h-screen flex items-center bg-[#130e0c] overflow-hidden">
      {/* 1. Full-bleed editorial portrait photography */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_CONTENT.heroImage}
          alt="Studio Nora Editorial Hair Styling"
          className="w-full h-full object-cover object-center select-none filter contrast-[1.08] brightness-[0.92]"
          loading="eager"
        />

        {/* 2. Composition-independent overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to right, rgba(19,14,12,0.96) 0%, rgba(19,14,12,0.78) 48%, rgba(19,14,12,0.20) 100%)',
          }}
        />

        {/* Supplementary vertical gradient for small screens */}
        <div className="absolute inset-0 md:hidden bg-gradient-to-t from-[#130e0c] via-[#130e0c]/70 to-transparent pointer-events-none" />

        {/* Subtle vignette border */}
        <div className="absolute inset-0 ring-1 ring-inset ring-white/5 pointer-events-none" />
      </div>

      {/* 3. Large background text: "NORA" at opacity: 0.03, centered vertically, z-index: 1 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.035 }}
        transition={{ duration: 1.8, delay: 1.5, ease: 'easeOut' }}
        className="absolute inset-y-0 right-0 flex items-center justify-center pointer-events-none select-none z-[1] overflow-hidden pr-2 md:pr-12"
      >
        <span
          className="font-headline tracking-tighter text-pearl uppercase leading-none font-bold"
          style={{ fontSize: 'clamp(240px, 35vw, 520px)' }}
        >
          {HERO_CONTENT.bgWatermark}
        </span>
      </motion.div>

      {/* 4. Left-aligned content: z-index: 10, max-width: 560px, padding-left: 6vw */}
      <div className="relative z-10 w-full pt-28 pb-20 max-w-7xl mx-auto px-6 md:px-0">
        <div style={{ paddingLeft: 'clamp(0px, 6vw, 5rem)', maxWidth: '620px' }}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >
            {/* Terracotta uppercase label */}
            <motion.div variants={itemVariants} className="mb-4 inline-flex items-center gap-2">
              <span className="w-2 h-[2px] bg-accent" />
              <span className="label-caps text-accent font-medium">
                {HERO_CONTENT.label}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-headline text-pearl uppercase font-normal leading-[0.88] tracking-tight mb-5"
              style={{ fontSize: 'clamp(72px, 10vw, 136px)' }}
            >
              YOUR HAIR.<br />
              YOUR STORY.<br />
              <span className="text-accent underline decoration-accent/30 decoration-2 underline-offset-4">
                OUR CRAFT.
              </span>
            </motion.h1>

            {/* Subheading: Inter 300 muted pearl */}
            <motion.p
              variants={itemVariants}
              className="font-sans font-light text-foreground/80 text-base md:text-lg leading-relaxed mb-8 max-w-[500px]"
            >
              {HERO_CONTENT.subheading}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto"
            >
              {/* Primary Filled Terracotta Button */}
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-4 bg-accent hover:bg-accent-hover text-[#130e0c] font-sans font-medium text-xs uppercase tracking-label transition-all duration-200 shadow-md hover:shadow-terracotta-glow flex items-center justify-center gap-2.5 active:scale-[0.98]"
              >
                <span>{HERO_CONTENT.ctaPrimary}</span>
              </button>

              {/* Secondary Ghost Button */}
              <button
                onClick={onExploreWork}
                className="w-full sm:w-auto px-7 py-4 bg-transparent hover:bg-white/[0.04] text-pearl border border-border hover:border-accent/60 font-sans font-medium text-xs uppercase tracking-label transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                <span>{HERO_CONTENT.ctaSecondary}</span>
                <span className="text-accent group-hover:translate-x-1 transition-transform">↓</span>
              </button>
            </motion.div>

            {/* Trust Chips: Inter 500 label styling */}
            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-white/[0.08] w-full flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-sans text-muted-foreground"
            >
              {HERO_CONTENT.trustChips.map((chip, idx) => (
                <React.Fragment key={chip}>
                  <div className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent/80" />
                    <span className="label-caps text-foreground/70 tracking-wider">
                      {chip}
                    </span>
                  </div>
                  {idx < HERO_CONTENT.trustChips.length - 1 && (
                    <span className="text-white/20 select-none hidden sm:inline">·</span>
                  )}
                </React.Fragment>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative vertical coordinates label */}
      <div className="hidden lg:block absolute bottom-8 right-8 z-10 label-caps text-muted-foreground/60 select-none">
        51°30'40.5"N 0°11'58.2"W · LONDON
      </div>
    </section>
  )
}
