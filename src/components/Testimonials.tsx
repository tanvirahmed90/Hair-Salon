import React from 'react'
import { motion } from 'framer-motion'
import { TESTIMONIALS_DATA } from '../data/content'
import { Star, Quote } from 'lucide-react'

export const Testimonials: React.FC = () => {
  return (
    <section className="relative py-28 md:py-36 bg-surface-raised border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="label-caps text-accent mb-3 inline-flex items-center gap-2">
            <span className="w-2 h-[2px] bg-accent" />
            <span>Client Dispatches · Reviews</span>
            <span className="w-2 h-[2px] bg-accent" />
          </div>
          <h2
            className="font-headline text-pearl uppercase font-normal leading-[0.9] tracking-tight mb-4"
            style={{ fontSize: 'clamp(44px, 5.5vw, 76px)' }}
          >
            IN THEIR OWN WORDS
          </h2>
          <p className="font-sans font-light text-muted-foreground text-sm">
            Over 600 five-star salon reviews across Google and Treatwell London.
          </p>
        </div>

        {/* 3 cards: 5-star row in terracotta, Inter 300 italic pearl quote, client name + service in Inter 10px muted */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="bg-surface border border-border p-8 flex flex-col justify-between relative group hover:border-accent/60 transition-colors"
            >
              {/* Subtle decorative quote glyph */}
              <div className="absolute top-6 right-6 text-white/[0.04] select-none pointer-events-none group-hover:text-accent/10 transition-colors">
                <Quote size={48} />
              </div>

              <div>
                {/* 5-star row in terracotta */}
                <div className="flex items-center gap-1 mb-6 text-accent">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-accent text-accent"
                    />
                  ))}
                </div>

                {/* Inter 300 italic pearl quote */}
                <p className="font-sans font-light italic text-pearl text-base md:text-[17px] leading-relaxed mb-8">
                  "{item.quote}"
                </p>
              </div>

              {/* Client name + service in Inter 10px muted */}
              <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between">
                <div>
                  <div className="font-sans font-medium text-xs text-foreground uppercase tracking-wider">
                    {item.author}
                  </div>
                  <div className="label-caps text-muted-foreground text-[10px] mt-0.5">
                    {item.location}
                  </div>
                </div>

                <div className="text-right">
                  <span className="label-caps text-accent text-[9px] bg-accent/10 px-2 py-0.5">
                    {item.service}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
