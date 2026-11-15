# STUDIO NORA — Women's Hair Studio | Notting Hill, London

A dark, editorial women's hair salon website built with **React**, **Vite**, **TypeScript**, **Tailwind CSS**, and **Framer Motion** (`framer-motion` / `motion`).

---

## 🎨 Design System

### Colors
- **Background**: `hsl(20 8% 7%)` — near-black warm `#130e0c`
- **Foreground / Pearl**: `hsl(38 18% 90%)` — warm pearl
- **Accent / Terracotta**: `hsl(18 42% 55%)` — terracotta `#c17a54`
- **Surface**: `hsl(20 6% 11%)` — deep warm card surface
- **Surface Raised**: `hsl(20 5% 15%)` — elevated section surface
- **Muted Foreground**: `hsl(38 8% 55%)` — soft warm secondary
- **Border**: `hsl(20 5% 18%)` — subtle division line

### Typography
- **Headlines**: `Bebas Neue` — full condensed, maximum scale (`clamp(72px, 10vw, 140px)` for hero)
- **Body**: `Inter` (weights 300, 400, 500)
- **Labels**: `Inter 500` uppercase 10px with letter-spacing `0.16em`

---

## 🌟 Sections & Features

1. **Sticky Navbar**
   - Near-black background with `backdrop-filter: blur(12px)`
   - Left: Wordmark `"STUDIO NORA"` in terracotta with `letter-spacing: 0.2em`
   - Right: Navigation links (`Services` · `Portfolio` · `About` · `Team` · `Book`) + `"Book now →"` terracotta button
   - Mobile responsive slide-over drawer

2. **Editorial Hero Section**
   - Full-viewport height with composition-independent gradient overlay
   - Large background watermark `"NORA"` in Bebas Neue (`opacity: 0.035`, 1.5s delayed fade-in)
   - Left-aligned content:
     - Inter 500 uppercase 10px terracotta label: `"Hair Studio · Notting Hill, London"`
     - Bebas Neue headline: `"YOUR HAIR. YOUR STORY. OUR CRAFT."` with terracotta accent
     - Inter 300 muted pearl subheading
     - Filled terracotta CTA + Ghost CTA
     - Trust chips: `"10+ Years · Notting Hill · Walk-ins Welcome Mondays"`
   - Aggressive stagger fade-up animation on mount (`y: 40 → 0`, `0.6s`, `0.08s` delay per element)

3. **Services ("WHAT WE DO")**
   - Bebas Neue `clamp(52px, 7vw, 90px)` pearl headline
   - 6 dark surface cards with hover terracotta border + glow:
     - **Cut & Style** (from £65 — consultation included)
     - **Colour & Balayage** (from £95 — bespoke blending)
     - **Highlights** (from £85 — foils and freehand)
     - **Blow-Dry** (from £40 — in-salon finish)
     - **Keratin Treatment** (from £150 — 12-week smoothing)
     - **Extensions** (from £200 — tape, bonds, or clip)
   - Integrated click-to-book action per service

4. **Portfolio ("OUR WORK")**
   - 5-image horizontal strip (`height: 340px`, `min-width: 260px`, `gap: 2px`, no border-radius)
   - Scale `1.02` on hover with smooth swipe/scroll
   - High-resolution editorial photography matching briefs (Balayage, Sleek Blowout, Curls, Precision Bob, Copper Velvet)
   - Click to inspect full look in an editorial Lightbox

5. **Why Studio Nora ("WE DON'T DO CONVEYOR BELT HAIR")**
   - Split layout: left editorial manifest & 4 terracotta check points, right consultation photography
   - Checkpoints:
     - *Dedicated stylist every visit*
     - *No hidden pricing*
     - *Colour consultations always free*
     - *Cancellation up to 24hrs*

6. **Team ("YOUR STYLISTS")**
   - 3 stylist cards with square portraits (no border-radius), Bebas Neue names, terracotta specialty chips, and bios:
     - **Nora Vance** (Founder & Creative Director)
     - **Elena Rossi** (Senior Colour Specialist)
     - **Maya Chen** (Texture Specialist & Master Stylist)

7. **Testimonials ("IN THEIR OWN WORDS")**
   - Raised surface section
   - 5-star terracotta rows, Inter 300 italic pearl quotes, client name + service

8. **Booking CTA Banner**
   - Full-width terracotta background (`hsl(18 42% 55%)`)
   - Dark headline: `"READY FOR YOUR BEST HAIR?"`
   - Dark button: `"Book now →"`
   - Microcopy: `"New clients welcome · Consultations always free · Walk-ins Mondays"`

9. **Footer**
   - Near-black background with terracotta wordmark `"STUDIO NORA"`
   - Social links (`Instagram`, `TikTok`, `Google`)
   - Address and hours: `"© 2026 Studio Nora · 14 Pembridge Road, Notting Hill, London W11 · Mon–Sat 9am–7pm"`

10. **Interactive Booking Experience**
    - 3-step reservation flow (Service & Stylist selection → Date & Time slot → Guest details & Notes)
    - Booking reference generation & confirmation screen

---

## 🚀 Running the Project

```bash
# Start development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```
