import React, { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Portfolio } from './components/Portfolio'
import { WhyUs } from './components/WhyUs'
import { Team } from './components/Team'
import { Testimonials } from './components/Testimonials'
import { BookingCTA } from './components/BookingCTA'
import { Footer } from './components/Footer'
import { BookingModal } from './components/BookingModal'
import { LightboxModal } from './components/LightboxModal'
import { PortfolioItem } from './types'

export function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [initialServiceId, setInitialServiceId] = useState<string | undefined>()
  const [initialStylistId, setInitialStylistId] = useState<string | undefined>()
  const [lightboxItem, setLightboxItem] = useState<PortfolioItem | null>(null)

  const handleOpenBooking = (serviceId?: string, stylistId?: string) => {
    setInitialServiceId(serviceId)
    setInitialStylistId(stylistId)
    setIsBookingOpen(true)
  }

  const handleExploreWork = () => {
    const portfolioElem = document.getElementById('portfolio')
    if (portfolioElem) {
      portfolioElem.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleBookLook = (category: string) => {
    // Map category to a relevant service if matched
    if (category.toLowerCase().includes('colour') || category.toLowerCase().includes('balayage')) {
      handleOpenBooking('colour-balayage')
    } else if (category.toLowerCase().includes('precision') || category.toLowerCase().includes('cut')) {
      handleOpenBooking('cut-style')
    } else {
      handleOpenBooking('blow-dry')
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-background relative">
      {/* 1. Navbar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Sections */}
      <main>
        {/* 2. Hero */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onExploreWork={handleExploreWork}
        />

        {/* 3. Services */}
        <Services onSelectService={(serviceId) => handleOpenBooking(serviceId)} />

        {/* 4. Portfolio */}
        <Portfolio onOpenLightbox={(item) => setLightboxItem(item)} />

        {/* 5. Why Studio Nora */}
        <WhyUs onOpenBooking={() => handleOpenBooking()} />

        {/* 6. Team */}
        <Team onSelectStylist={(stylistId) => handleOpenBooking(undefined, stylistId)} />

        {/* 7. Testimonials */}
        <Testimonials />

        {/* 8. Booking CTA */}
        <BookingCTA onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialServiceId={initialServiceId}
        initialStylistId={initialStylistId}
      />

      {/* Portfolio Lightbox Modal */}
      <LightboxModal
        item={lightboxItem}
        onClose={() => setLightboxItem(null)}
        onBookLook={handleBookLook}
      />
    </div>
  )
}

export default App
