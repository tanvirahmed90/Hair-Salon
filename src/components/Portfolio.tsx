import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { PORTFOLIO_DATA } from '../data/content'
import { PortfolioItem } from '../types'
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react'

interface PortfolioProps {
  onOpenLightbox: (item: PortfolioItem) => void
}

export const Portfolio: React.FC<PortfolioProps> = ({ onOpenLightbox }) => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollBy = (offset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' })
    }
  }

  return (
    <section id="portfolio" className="relative py-28 md:py-36 bg-[#130e0c] border-t border-border/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div>
          <div className="label-caps text-accent mb-3 flex items-center gap-2">
            <span className="w-2 h-[2px] bg-accent" />
            <span>Lookbook · Editorial Archive</span>
          </div>
          <h2
            className="font-headline text-pearl uppercase font-normal leading-[0.9] tracking-tight"
            style={{ fontSize: 'clamp(52px, 7vw, 90px)' }}
          >
            OUR WORK
          </h2>
        </div>

        {/* Carousel manual controls */}
        <div className="flex items-center gap-3">
          <span className="label-caps text-muted-foreground mr-2 hidden sm:inline">
            Scroll or Drag
          </span>
          <button
            onClick={() => scrollBy(-320)}
            className="w-10 h-10 border border-border bg-surface hover:border-accent hover:text-accent flex items-center justify-center transition-colors text-foreground"
            aria-label="Previous portfolio images"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scrollBy(320)}
            className="w-10 h-10 border border-border bg-surface hover:border-accent hover:text-accent flex items-center justify-center transition-colors text-foreground"
            aria-label="Next portfolio images"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* 5-image horizontal strip, height: 340px, min-width: 260px per image, overflow-x: auto on mobile, 2px gap, scale on hover 1.02, no border-radius */}
      <div className="w-full">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto no-scrollbar scroll-smooth px-6 md:px-10 py-4 gap-[2px]"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {PORTFOLIO_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              onClick={() => onOpenLightbox(item)}
              className="relative flex-none h-[340px] min-w-[260px] md:min-w-[320px] lg:min-w-[360px] group cursor-pointer overflow-hidden bg-surface"
              style={{ scrollSnapAlign: 'start' }}
            >
              {/* Image with 1.02 scale on hover, no border radius */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.02] filter contrast-[1.05]"
                loading="lazy"
              />

              {/* Composition editorial overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#130e0c]/95 via-[#130e0c]/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Frame borders */}
              <div className="absolute inset-0 ring-1 ring-inset ring-white/5 group-hover:ring-accent/40 transition-colors pointer-events-none" />

              {/* Bottom Card Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end transform transition-transform duration-300">
                <div className="label-caps text-accent mb-1 tracking-widest text-[9px]">
                  {item.category}
                </div>
                <h3 className="font-headline text-2xl text-pearl tracking-wide uppercase mb-1">
                  {item.title}
                </h3>
                <div className="flex items-center justify-between text-xs text-muted-foreground font-sans">
                  <span>By {item.stylist}</span>
                  <span className="flex items-center gap-1 text-accent text-[10px] uppercase font-medium tracking-label opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye size={12} /> View Look
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Micro indicator footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mt-6 flex justify-between items-center text-xs text-muted-foreground font-sans">
        <span className="label-caps text-[10px] text-muted-foreground">
          Bespoke formulations · 100% genuine Studio Nora clients
        </span>
        <span className="label-caps text-accent text-[10px]">
          5 Featured Works
        </span>
      </div>
    </section>
  )
}
