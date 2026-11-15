import React from 'react'
import { FOOTER_CONTENT } from '../data/content'
import { ArrowUp, MapPin, Clock, Phone, Mail } from 'lucide-react'

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-[#130e0c] text-foreground border-t border-border pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/[0.06]">
          {/* Brand Column (span 5) */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              {/* Inter 500 uppercase "STUDIO NORA" in terracotta */}
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-accent" />
                <h3 className="font-sans font-medium uppercase tracking-[0.2em] text-accent text-lg">
                  {FOOTER_CONTENT.wordmark}
                </h3>
              </div>
              <p className="font-sans font-light text-muted-foreground text-sm max-w-sm leading-relaxed mb-6">
                {FOOTER_CONTENT.tagline} An uncompromising dedication to women's hair artistry, natural texture enhancement, and dimensional colour craft.
              </p>
            </div>

            {/* Social Links: Instagram · TikTok · Google */}
            <div className="flex items-center gap-6">
              {FOOTER_CONTENT.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans font-medium text-xs uppercase tracking-label text-foreground/75 hover:text-accent transition-colors"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Hours & Visit (span 4) */}
          <div className="md:col-span-4 space-y-4">
            <div className="label-caps text-accent mb-4">Studio Visit</div>
            <div className="flex items-start gap-3 text-sm text-foreground/80 font-light font-sans">
              <MapPin size={16} className="text-accent flex-shrink-0 mt-0.5" />
              <span>{FOOTER_CONTENT.address}</span>
            </div>
            <div className="flex items-start gap-3 text-sm text-foreground/80 font-light font-sans">
              <Clock size={16} className="text-accent flex-shrink-0 mt-0.5" />
              <span>{FOOTER_CONTENT.hours} (Walk-ins welcome Mondays)</span>
            </div>
            <div className="flex items-start gap-3 text-sm text-foreground/80 font-light font-sans">
              <Phone size={16} className="text-accent flex-shrink-0 mt-0.5" />
              <span>+44 (0) 20 7946 0912</span>
            </div>
          </div>

          {/* Back to top (span 3) */}
          <div className="md:col-span-3 flex flex-col md:items-end justify-between">
            <div className="label-caps text-muted-foreground mb-4">London Sanctuary</div>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2.5 border border-border bg-surface hover:border-accent text-xs font-sans uppercase tracking-label text-foreground hover:text-accent transition-all group"
            >
              <span>Back to top</span>
              <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Bar: Copyright string */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-muted-foreground">
          <p className="text-center sm:text-left text-muted-foreground/80">
            {FOOTER_CONTENT.copyright}
          </p>
          <div className="label-caps text-muted-foreground/50 text-[9px]">
            Designed with precision · Notting Hill
          </div>
        </div>
      </div>
    </footer>
  )
}
