import React from 'react'
import { motion } from 'framer-motion'
import { STYLISTS_DATA } from '../data/content'
import { Calendar, Award } from 'lucide-react'

interface TeamProps {
  onSelectStylist: (stylistId: string) => void
}

export const Team: React.FC<TeamProps> = ({ onSelectStylist }) => {
  return (
    <section id="team" className="relative py-28 md:py-36 bg-[#130e0c] border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="label-caps text-accent mb-3 flex items-center gap-2">
              <span className="w-2 h-[2px] bg-accent" />
              <span>Master Artisans · Notting Hill Resident Team</span>
            </div>
            <h2
              className="font-headline text-pearl uppercase font-normal leading-[0.9] tracking-tight"
              style={{ fontSize: 'clamp(52px, 7vw, 90px)' }}
            >
              YOUR STYLISTS
            </h2>
          </div>

          <p className="font-sans font-light text-muted-foreground text-sm md:text-base max-w-md leading-relaxed">
            Every stylist at Studio Nora brings specialized London salon pedigree, continuous Paris/Milan master training, and relentless attention to client nuance.
          </p>
        </div>

        {/* 3 stylist cards: portrait (square, no border-radius), Bebas Neue name, terracotta specialty chip, Inter 300 bio. Hover: terracotta border + glow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STYLISTS_DATA.map((stylist, index) => (
            <motion.div
              key={stylist.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              className="group relative bg-surface border border-border p-6 flex flex-col justify-between transition-all duration-300 hover:border-accent hover:shadow-[0_0_22px_hsl(18_42%_55%_/_0.15)]"
            >
              <div>
                {/* Square portrait, no border-radius */}
                <div className="relative aspect-square w-full mb-6 overflow-hidden bg-[#130e0c] border border-border/80">
                  <img
                    src={stylist.image}
                    alt={stylist.name}
                    className="w-full h-full object-cover object-center filter contrast-[1.05] brightness-[0.92] transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#130e0c]/80 via-transparent to-transparent pointer-events-none" />

                  {/* Experience pill on image corner */}
                  <div className="absolute top-3 left-3 bg-[#130e0c]/90 border border-border px-2.5 py-1 text-[9px] font-sans font-medium uppercase tracking-label text-foreground/80">
                    {stylist.experience}
                  </div>
                </div>

                {/* Bebas Neue Name */}
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-headline text-3xl md:text-4xl text-pearl uppercase tracking-wide group-hover:text-accent transition-colors">
                    {stylist.name}
                  </h3>
                </div>

                {/* Terracotta Specialty Chip */}
                <div className="inline-block bg-accent/15 border border-accent/30 px-3 py-1 mb-4">
                  <span className="label-caps text-accent text-[10px]">
                    {stylist.specialtyChip}
                  </span>
                </div>

                {/* Role subtitle */}
                <div className="text-xs font-sans text-muted-foreground uppercase tracking-wider mb-4">
                  {stylist.role}
                </div>

                {/* Inter 300 Bio */}
                <p className="font-sans font-light text-muted-foreground text-sm leading-relaxed mb-6">
                  {stylist.bio}
                </p>
              </div>

              {/* Action Button: Book with this stylist */}
              <button
                onClick={() => onSelectStylist(stylist.id)}
                className="w-full py-3 bg-[#130e0c] hover:bg-accent border border-border group-hover:border-accent hover:text-[#130e0c] text-foreground font-sans font-medium text-xs uppercase tracking-label transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Calendar size={13} />
                <span>Book with {stylist.name.split(' ')[0]}</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
