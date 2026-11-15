import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Sparkles, User, Calendar, ArrowRight } from 'lucide-react'
import { PortfolioItem } from '../types'

interface LightboxModalProps {
  item: PortfolioItem | null
  onClose: () => void
  onBookLook: (serviceCategory: string) => void
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  onClose,
  onBookLook,
}) => {
  if (!item) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#130e0c]/90 backdrop-blur-md"
        />

        {/* Modal content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-4xl bg-surface border border-border shadow-2xl overflow-hidden z-10 flex flex-col md:flex-row"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-9 h-9 bg-[#130e0c]/80 border border-border text-foreground hover:text-accent flex items-center justify-center transition-colors"
            aria-label="Close lightbox"
          >
            <X size={18} />
          </button>

          {/* Large image view (no border radius) */}
          <div className="w-full md:w-3/5 aspect-square md:aspect-auto md:min-h-[460px] bg-[#130e0c] relative">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover object-center filter contrast-[1.05]"
            />
          </div>

          {/* Editorial Details side */}
          <div className="w-full md:w-2/5 p-6 md:p-8 flex flex-col justify-between bg-surface">
            <div>
              <div className="label-caps text-accent mb-2">
                {item.category}
              </div>

              <h3 className="font-headline text-3xl md:text-4xl text-pearl uppercase tracking-wide leading-tight mb-2">
                {item.title}
              </h3>

              <div className="text-xs font-sans text-muted-foreground flex items-center gap-1.5 mb-6">
                <span>Crafted by</span>
                <strong className="text-foreground">{item.stylist}</strong>
              </div>

              <p className="font-sans font-light text-muted-foreground text-xs md:text-sm leading-relaxed mb-6">
                {item.briefNote}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="label-caps text-[9px] bg-[#130e0c] border border-border px-2.5 py-1 text-foreground/80"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action */}
            <div className="pt-4 border-t border-white/[0.08]">
              <button
                onClick={() => {
                  onClose()
                  onBookLook(item.category)
                }}
                className="w-full py-3.5 bg-accent hover:bg-accent-hover text-[#130e0c] font-sans font-medium text-xs uppercase tracking-label transition-colors flex items-center justify-center gap-2"
              >
                <span>Consult On This Look</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
