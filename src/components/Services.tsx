import React from 'react'
import { motion } from 'framer-motion'
import { SERVICES_DATA } from '../data/content'
import {
  Scissors,
  Sparkles,
  Sun,
  Wind,
  ShieldCheck,
  Layers,
  ArrowRight,
  Clock,
} from 'lucide-react'

interface ServicesProps {
  onSelectService: (serviceId: string) => void
}

const iconMap: Record<string, React.ReactNode> = {
  Scissors: <Scissors className="w-5 h-5 text-accent stroke-[1.5]" />,
  Sparkles: <Sparkles className="w-5 h-5 text-accent stroke-[1.5]" />,
  Sun: <Sun className="w-5 h-5 text-accent stroke-[1.5]" />,
  Wind: <Wind className="w-5 h-5 text-accent stroke-[1.5]" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-accent stroke-[1.5]" />,
  Layers: <Layers className="w-5 h-5 text-accent stroke-[1.5]" />,
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="relative py-28 md:py-36 bg-[#130e0c] border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="label-caps text-accent mb-3 flex items-center gap-2">
              <span className="w-2 h-[2px] bg-accent" />
              <span>Studio Menu · Bespoke Haircraft</span>
            </div>
            <h2
              className="font-headline text-pearl uppercase font-normal leading-[0.9] tracking-tight"
              style={{ fontSize: 'clamp(52px, 7vw, 90px)' }}
            >
              WHAT WE DO
            </h2>
          </div>

          <p className="font-sans font-light text-muted-foreground text-sm md:text-base max-w-md leading-relaxed">
            Every appointment begins with in-depth texture, growth, and undertone analysis. Transparent pricing with no hidden add-ons.
          </p>
        </div>

        {/* 6-service 3×2 grid, dark surface cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-surface border border-border p-8 flex flex-col justify-between transition-all duration-300 hover:border-accent hover:shadow-[0_0_18px_hsl(18_42%_55%_/_0.12)]"
            >
              {/* Card Header: Icon & Terracotta Price Tag */}
              <div>
                <div className="flex items-start justify-between mb-6">
                  <div className="w-11 h-11 bg-[#130e0c] border border-border/80 flex items-center justify-center transition-colors group-hover:border-accent/40">
                    {iconMap[service.iconName] || <Scissors className="w-5 h-5 text-accent" />}
                  </div>

                  <div className="text-right">
                    <span className="font-headline text-accent text-2xl tracking-wide">
                      {service.price}
                    </span>
                    <span className="block label-caps text-muted-foreground text-[9px] mt-0.5">
                      {service.subtitle}
                    </span>
                  </div>
                </div>

                {/* Service Name: Inter 500 */}
                <h3 className="font-sans font-medium text-xl text-foreground mb-1 group-hover:text-accent transition-colors">
                  {service.name}
                </h3>

                {/* Duration indicator */}
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4">
                  <Clock className="w-3.5 h-3.5 text-muted-foreground/70" />
                  <span className="font-light">{service.duration}</span>
                  {service.popular && (
                    <span className="ml-2 px-1.5 py-0.5 bg-accent/15 text-accent text-[9px] font-sans font-medium uppercase tracking-label">
                      Signature
                    </span>
                  )}
                </div>

                {/* Description: Inter 300 muted */}
                <p className="font-sans font-light text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Bullet details */}
                {service.details && (
                  <ul className="space-y-1.5 mb-8 border-t border-white/[0.05] pt-4">
                    {service.details.map((detail, dIdx) => (
                      <li key={dIdx} className="text-xs font-light text-foreground/70 flex items-start gap-2">
                        <span className="text-accent text-[10px] mt-0.5">✦</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Action: Book service */}
              <button
                onClick={() => onSelectService(service.id)}
                className="w-full pt-4 border-t border-border/70 flex items-center justify-between text-xs font-sans font-medium uppercase tracking-label text-foreground/80 hover:text-accent transition-colors group/btn"
              >
                <span>Reserve this service</span>
                <span className="text-accent group-hover/btn:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
