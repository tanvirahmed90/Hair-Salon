export interface ServiceItem {
  id: string
  name: string
  price: string
  subtitle: string
  description: string
  duration: string
  iconName: string
  popular?: boolean
  details?: string[]
}

export interface PortfolioItem {
  id: string
  title: string
  category: string
  stylist: string
  image: string
  briefNote: string
  tags: string[]
}

export interface StylistItem {
  id: string
  name: string
  role: string
  specialtyChip: string
  bio: string
  image: string
  experience: string
}

export interface TestimonialItem {
  id: string
  quote: string
  author: string
  location: string
  service: string
  rating: number
}

export interface BookingFormData {
  serviceId: string
  stylistId: string
  date: string
  time: string
  clientName: string
  clientEmail: string
  clientPhone: string
  notes?: string
}
