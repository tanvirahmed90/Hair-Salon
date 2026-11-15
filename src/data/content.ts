import { ServiceItem, PortfolioItem, StylistItem, TestimonialItem } from '../types'

export const HERO_CONTENT = {
  label: 'Hair Studio · Notting Hill, London',
  headline: 'YOUR HAIR.\nYOUR STORY.\nOUR CRAFT.',
  headlineAccent: 'OUR CRAFT.',
  subheading: 'Expert cuts, colour, and styling for women who know exactly what they want — and those still discovering it',
  ctaPrimary: 'Book an appointment →',
  ctaSecondary: 'See our work',
  trustChips: ['10+ Years', 'Notting Hill', 'Walk-ins Welcome Mondays'],
  heroImage: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=2000&q=85',
  bgWatermark: 'NORA',
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'cut-style',
    name: 'Cut & Style',
    price: 'from £65',
    subtitle: 'Consultation included',
    description: 'Precision scissor and razor work tailored to face structure, growth patterns, and natural movement. Includes bespoke wash, scalp massage, and signature editorial blow-dry finish.',
    duration: '60 min',
    iconName: 'Scissors',
    popular: true,
    details: ['15-min face shape & texture consultation', 'Organic botanical cleanse & scalp release', 'Precision wet & dry texturising', 'Editorial heat styling and home care guide'],
  },
  {
    id: 'colour-balayage',
    name: 'Colour & Balayage',
    price: 'from £95',
    subtitle: 'Bespoke blending',
    description: 'Hand-painted dimensional contouring engineered for an effortless, soft grow-out. Custom toner formulation ensuring radiant light reflection with zero harsh demarcation.',
    duration: '150 min',
    iconName: 'Sparkles',
    popular: true,
    details: ['Individual colour mapping consultation', 'Freehand clay lightening application', 'pH-balancing gloss toner bath', 'Olaplex structural bonding shield'],
  },
  {
    id: 'highlights',
    name: 'Highlights',
    price: 'from £85',
    subtitle: 'Foils and freehand',
    description: 'From micro-fine babylights to high-impact Scandinavian blonde weaves. Meticulous foil placement delivering maximum brightness with total hair fibre integrity.',
    duration: '120 min',
    iconName: 'Sun',
    details: ['Full head, half head, or face-framing options', 'Micro-fine weave density technique', 'Targeted root drop for longevity', 'Nourishing moisture seal'],
  },
  {
    id: 'blow-dry',
    name: 'Blow-Dry',
    price: 'from £40',
    subtitle: 'In-salon finish',
    description: 'The definitive London blowout. From high-gloss glass hair to undone Parisian volume and undone texture that holds for days without feeling weighed down.',
    duration: '45 min',
    iconName: 'Wind',
    details: ['Deep clarifying cleanse', 'Velvet thermal heat protection', 'Round brush tension smoothing', 'Custom flexible finishing spray'],
  },
  {
    id: 'keratin-treatment',
    name: 'Keratin Treatment',
    price: 'from £150',
    subtitle: '12-week smoothing',
    description: 'Formaldehyde-free bio-protein infusion that eliminates frizz, repels humidity, and cuts your morning blow-dry time in half while preserving your natural body and bounce.',
    duration: '120 min',
    iconName: 'ShieldCheck',
    details: ['Formaldehyde-free organic formula', 'Restores damaged keratin chains', 'Locks out rain and humidity', 'Results last up to 3 full months'],
  },
  {
    id: 'extensions',
    name: 'Extensions',
    price: 'from £200',
    subtitle: 'Tape, bonds, or clip',
    description: '100% ethically sourced European Remy hair matched strand-by-strand to your exact hue, density, and wave pattern. Invisible attachment for undetectable volume or length.',
    duration: '180 min',
    iconName: 'Layers',
    details: ['Consultation & exact shade matching', 'Premium double-drawn Remy hair', 'Weightless ultra-flat medical-grade tape', 'Maintenance & refit cycle support'],
  },
]

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'port-1',
    title: 'Warm Honey Balayage',
    category: 'Colour & Balayage',
    stylist: 'Elena Rossi',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80',
    briefNote: 'Close-up of perfect balayage colour, warm blonde tones, editorial beauty photography',
    tags: ['Balayage', 'Warm Blonde', 'Face Frame'],
  },
  {
    id: 'port-2',
    title: 'Editorial Brunette Blowout',
    category: 'Cut & Style',
    stylist: 'Nora Vance',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80',
    briefNote: 'Sleek blow-dry finish on brunette, studio lighting, fashion-editorial quality',
    tags: ['Glass Hair', 'Gloss Finish', 'Volume'],
  },
  {
    id: 'port-3',
    title: 'Hydrated Curl Architecture',
    category: 'Texture & Cut',
    stylist: 'Maya Chen',
    image: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&w=1200&q=80',
    briefNote: 'Curly hair transformation, vibrant and natural, warm light',
    tags: ['Natural Texture', 'Pattern Release', 'Bounce'],
  },
  {
    id: 'port-4',
    title: 'Sharp Micro Bob',
    category: 'Precision Cut',
    stylist: 'Nora Vance',
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1200&q=80',
    briefNote: 'Short precision cut, dramatic editorial, strong lighting',
    tags: ['Precision Cut', 'Architectural', 'Blunt Edge'],
  },
  {
    id: 'port-5',
    title: 'Copper Velvet Gloss',
    category: 'Creative Colour',
    stylist: 'Elena Rossi',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1200&q=80',
    briefNote: 'Hair colour close-up — rich red tones, high-gloss finish',
    tags: ['Copper Gloss', 'Dimension', 'High Shine'],
  },
]

export const WHY_US_CONTENT = {
  headline: "WE DON'T DO CONVEYOR BELT HAIR",
  paragraphs: [
    'Every single appointment at Studio Nora begins with an unhurried, one-to-one consultation. We don’t run back-to-back thirty-minute slots or double-stack clients under drying hoods. When you are in our chair, the entire space and our focused creative attention belong strictly to you.',
    'Colour formulas are mixed specifically for your unique undertone and hair integrity, always guided by the same stylist from initial brushstroke to the final reveal. We believe hairdressing is an intimate craft of listening, architecture, and enduring care.',
  ],
  checkpoints: [
    'Dedicated stylist every visit',
    'No hidden pricing',
    'Colour consultations always free',
    'Cancellation up to 24hrs',
  ],
  image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=80',
}

export const STYLISTS_DATA: StylistItem[] = [
  {
    id: 'nora-vance',
    name: 'Nora Vance',
    role: 'Founder & Creative Director',
    specialtyChip: 'Precision Cuts & Editorial Vision',
    bio: 'Trained at Vidal Sassoon London with over 14 years shaping editorial campaigns and salon excellence. Nora approaches each client as an individual canvas, focusing on bone structure and effortless geometry.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    experience: '14+ Years Experience',
  },
  {
    id: 'elena-rossi',
    name: 'Elena Rossi',
    role: 'Senior Colour Specialist',
    specialtyChip: 'Bespoke Balayage & Glossing',
    bio: 'Renowned for low-maintenance, sun-bathed blonde contouring and rich autumnal tones. Elena’s custom blends grow out without hard regrowth lines, protecting long-term hair health.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
    experience: '9 Years Experience',
  },
  {
    id: 'maya-chen',
    name: 'Maya Chen',
    role: 'Texture Specialist & Master Stylist',
    specialtyChip: 'Curls, Keratin & Extensions',
    bio: 'A certified curly-hair architect and smoothing specialist. Maya transforms unruly, damaged, or transitioning textures into vibrant, resilient hair with natural movement and mirror shine.',
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80',
    experience: '8 Years Experience',
  },
]

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    quote: "I've been coming to Studio Nora for 3 years. The colour work is genuinely exceptional — I get compliments every time I leave.",
    author: 'Rachel S.',
    location: 'Notting Hill',
    service: 'Balayage & Gloss',
    rating: 5,
  },
  {
    id: 'test-2',
    quote: 'Finally a salon that actually listens. Nora spent twenty minutes analyzing my curl texture before touching a pair of scissors. The resulting cut is sheer perfection.',
    author: 'Claire T.',
    location: 'Kensington',
    service: 'Precision Cut & Texture Style',
    rating: 5,
  },
  {
    id: 'test-3',
    quote: 'The balayage grow-out is completely seamless. No harsh lines, just effortless dimension that lasted over five months. Studio Nora is in a league of its own.',
    author: 'Sophie M.',
    location: 'Holland Park',
    service: 'Dimensional Balayage & Olaplex',
    rating: 5,
  },
]

export const BOOKING_CTA_CONTENT = {
  headline: 'READY FOR YOUR BEST HAIR?',
  description: 'Book online in 60 seconds — choose your service, stylist, and time',
  ctaButton: 'Book now →',
  microcopy: 'New clients welcome · Consultations always free · Walk-ins Mondays',
}

export const FOOTER_CONTENT = {
  wordmark: 'STUDIO NORA',
  tagline: 'Dark, editorial women’s hair studio rooted in Notting Hill.',
  socials: [
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'TikTok', href: 'https://tiktok.com' },
    { label: 'Google', href: 'https://google.com' },
  ],
  address: '14 Pembridge Road, Notting Hill, London W11',
  hours: 'Mon–Sat 9am–7pm',
  copyright: '© 2026 Studio Nora · 14 Pembridge Road, Notting Hill, London W11 · Mon–Sat 9am–7pm',
}
