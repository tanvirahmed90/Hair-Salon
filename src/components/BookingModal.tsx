import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Check, Calendar as CalendarIcon, Clock, User, Scissors, CheckCircle2, ChevronRight, Phone, Mail } from 'lucide-react'
import { SERVICES_DATA, STYLISTS_DATA } from '../data/content'
import { BookingFormData } from '../types'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  initialServiceId?: string
  initialStylistId?: string
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialServiceId,
  initialStylistId,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1)
  const [formData, setFormData] = useState<BookingFormData>({
    serviceId: initialServiceId || SERVICES_DATA[0].id,
    stylistId: initialStylistId || STYLISTS_DATA[0].id,
    date: '2026-11-18',
    time: '11:30 AM',
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    notes: '',
  })
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

  // Reset or update when props change
  React.useEffect(() => {
    if (initialServiceId) {
      setFormData((prev) => ({ ...prev, serviceId: initialServiceId }))
    }
    if (initialStylistId) {
      setFormData((prev) => ({ ...prev, stylistId: initialStylistId }))
    }
  }, [initialServiceId, initialStylistId])

  if (!isOpen) return null

  const selectedService = SERVICES_DATA.find((s) => s.id === formData.serviceId) || SERVICES_DATA[0]
  const selectedStylist = STYLISTS_DATA.find((s) => s.id === formData.stylistId) || STYLISTS_DATA[0]

  const availableDates = [
    { label: 'Wed, 18 Nov', value: '2026-11-18' },
    { label: 'Thu, 19 Nov', value: '2026-11-19' },
    { label: 'Fri, 20 Nov', value: '2026-11-20' },
    { label: 'Sat, 21 Nov', value: '2026-11-21' },
    { label: 'Mon, 23 Nov', value: '2026-11-23' },
  ]

  const timeSlots = [
    '09:30 AM',
    '11:00 AM',
    '11:30 AM',
    '01:00 PM',
    '02:30 PM',
    '04:00 PM',
    '05:30 PM',
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.clientName || !formData.clientPhone) return
    setIsSubmitted(true)
  }

  const resetAndClose = () => {
    setIsSubmitted(false)
    setCurrentStep(1)
    onClose()
  }

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={resetAndClose}
          className="fixed inset-0 bg-[#130e0c]/85 backdrop-blur-md"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-2xl bg-surface border border-border shadow-2xl p-6 sm:p-10 z-10 my-8 overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={resetAndClose}
            className="absolute top-5 right-5 text-muted-foreground hover:text-accent p-2 transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          {!isSubmitted ? (
            <div>
              {/* Header */}
              <div className="mb-6">
                <div className="label-caps text-accent mb-1 flex items-center gap-2">
                  <span className="w-2 h-[2px] bg-accent" />
                  <span>Studio Nora · Online Reservation</span>
                </div>
                <h3 className="font-headline text-3xl sm:text-4xl text-pearl uppercase tracking-wide">
                  Reserve Your Chair
                </h3>
                <p className="font-sans font-light text-muted-foreground text-xs sm:text-sm mt-1">
                  Step {currentStep} of 3 — Personalized appointments with dedicated master stylists.
                </p>
              </div>

              {/* Progress Steps Indicators */}
              <div className="grid grid-cols-3 gap-2 mb-8">
                {[
                  { step: 1, label: 'Service & Stylist' },
                  { step: 2, label: 'Date & Time' },
                  { step: 3, label: 'Guest Details' },
                ].map((s) => (
                  <div
                    key={s.step}
                    onClick={() => s.step < currentStep && setCurrentStep(s.step)}
                    className={`h-1.5 transition-all duration-300 ${
                      currentStep >= s.step ? 'bg-accent' : 'bg-surface-raised'
                    } ${s.step < currentStep ? 'cursor-pointer hover:opacity-80' : ''}`}
                  />
                ))}
              </div>

              {/* Step 1: Service & Stylist Selection */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <label className="block label-caps text-foreground/80 mb-2">
                      Select Desired Service
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-56 overflow-y-auto pr-1">
                      {SERVICES_DATA.map((srv) => (
                        <div
                          key={srv.id}
                          onClick={() => setFormData({ ...formData, serviceId: srv.id })}
                          className={`p-3.5 border cursor-pointer transition-all ${
                            formData.serviceId === srv.id
                              ? 'border-accent bg-accent/10 shadow-sm'
                              : 'border-border bg-[#130e0c]/60 hover:border-white/20'
                          }`}
                        >
                          <div className="flex justify-between items-start mb-1">
                            <span className="font-sans font-medium text-sm text-foreground">
                              {srv.name}
                            </span>
                            <span className="font-headline text-accent text-base">
                              {srv.price}
                            </span>
                          </div>
                          <span className="block text-[11px] font-light text-muted-foreground">
                            {srv.duration} · {srv.subtitle}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block label-caps text-foreground/80 mb-2">
                      Select Master Stylist
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {STYLISTS_DATA.map((stylist) => (
                        <div
                          key={stylist.id}
                          onClick={() => setFormData({ ...formData, stylistId: stylist.id })}
                          className={`p-3 border cursor-pointer flex items-center gap-3 transition-all ${
                            formData.stylistId === stylist.id
                              ? 'border-accent bg-accent/10'
                              : 'border-border bg-[#130e0c]/60 hover:border-white/20'
                          }`}
                        >
                          <img
                            src={stylist.image}
                            alt={stylist.name}
                            className="w-10 h-10 object-cover flex-shrink-0 filter contrast-[1.05]"
                          />
                          <div>
                            <div className="font-headline text-base text-pearl uppercase leading-tight">
                              {stylist.name}
                            </div>
                            <div className="text-[10px] text-muted-foreground font-sans truncate max-w-[110px]">
                              {stylist.specialtyChip.split('&')[0]}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="px-6 py-3 bg-accent text-[#130e0c] font-sans font-medium text-xs uppercase tracking-label flex items-center gap-2 hover:bg-accent-hover transition-colors"
                    >
                      <span>Continue to Date & Time</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Date & Time */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <label className="block label-caps text-foreground/80 mb-2">
                      Choose Appointment Date (London Studio)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                      {availableDates.map((date) => (
                        <button
                          key={date.value}
                          type="button"
                          onClick={() => setFormData({ ...formData, date: date.value })}
                          className={`py-3 px-2 text-center border transition-all text-xs font-sans ${
                            formData.date === date.value
                              ? 'border-accent bg-accent text-[#130e0c] font-medium'
                              : 'border-border bg-[#130e0c]/60 text-foreground hover:border-white/20'
                          }`}
                        >
                          {date.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block label-caps text-foreground/80 mb-2">
                      Available Time Slots with {selectedStylist.name}
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setFormData({ ...formData, time: slot })}
                          className={`py-2.5 px-3 text-center border transition-all text-xs font-sans ${
                            formData.time === slot
                              ? 'border-accent bg-accent/20 text-accent font-medium'
                              : 'border-border bg-[#130e0c]/60 text-foreground/80 hover:border-white/20'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="p-3 bg-[#130e0c]/80 border border-border text-xs text-muted-foreground flex items-center justify-between">
                    <span>
                      Estimated Session: <strong className="text-foreground">{selectedService.duration}</strong>
                    </span>
                    <span className="text-accent font-medium">Free Consultation Included</span>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="px-4 py-2.5 text-xs font-sans uppercase tracking-label text-muted-foreground hover:text-foreground"
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(3)}
                      className="px-6 py-3 bg-accent text-[#130e0c] font-sans font-medium text-xs uppercase tracking-label flex items-center gap-2 hover:bg-accent-hover transition-colors"
                    >
                      <span>Continue to Details</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Guest Details Form */}
              {currentStep === 3 && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block label-caps text-foreground/80 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rachel Sterling"
                        value={formData.clientName}
                        onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                        className="w-full bg-[#130e0c] border border-border px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent"
                      />
                    </div>

                    <div>
                      <label className="block label-caps text-foreground/80 mb-1.5">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +44 7700 900123"
                        value={formData.clientPhone}
                        onChange={(e) => setFormData({ ...formData, clientPhone: e.target.value })}
                        className="w-full bg-[#130e0c] border border-border px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block label-caps text-foreground/80 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rachel@example.co.uk"
                      value={formData.clientEmail}
                      onChange={(e) => setFormData({ ...formData, clientEmail: e.target.value })}
                      className="w-full bg-[#130e0c] border border-border px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent"
                    />
                  </div>

                  <div>
                    <label className="block label-caps text-foreground/80 mb-1.5">
                      Hair History & Special Requests (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Previous balayage 6 months ago, fine hair, aiming for warm beige tones..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-[#130e0c] border border-border px-3.5 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent resize-none"
                    />
                  </div>

                  {/* Summary preview */}
                  <div className="p-3.5 bg-[#130e0c] border border-border/80 text-xs font-sans space-y-1">
                    <div className="flex justify-between text-muted-foreground">
                      <span>Service:</span>
                      <span className="text-foreground font-medium">{selectedService.name} ({selectedService.price})</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Stylist & Time:</span>
                      <span className="text-foreground font-medium">{selectedStylist.name} · {formData.date} at {formData.time}</span>
                    </div>
                  </div>

                  <div className="pt-3 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="px-4 py-2.5 text-xs font-sans uppercase tracking-label text-muted-foreground hover:text-foreground"
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      className="px-8 py-3.5 bg-accent hover:bg-accent-hover text-[#130e0c] font-sans font-medium text-xs uppercase tracking-label shadow-lg flex items-center gap-2 transition-all active:scale-[0.98]"
                    >
                      <span>Confirm Studio Nora Reservation</span>
                      <span>✓</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          ) : (
            /* Confirmation Screen */
            <div className="py-6 text-center space-y-5">
              <div className="w-16 h-16 mx-auto bg-accent/15 border border-accent flex items-center justify-center text-accent">
                <CheckCircle2 size={36} />
              </div>

              <div>
                <div className="label-caps text-accent mb-1">
                  Reservation Confirmed · Reference #SN-9284
                </div>
                <h3 className="font-headline text-3xl sm:text-4xl text-pearl uppercase">
                  We Look Forward to Welcoming You
                </h3>
                <p className="font-sans font-light text-muted-foreground text-sm max-w-md mx-auto mt-2">
                  Thank you, <strong className="text-foreground">{formData.clientName}</strong>. A confirmation SMS & calendar invite have been dispatched to {formData.clientPhone}.
                </p>
              </div>

              <div className="bg-[#130e0c] border border-border p-5 max-w-md mx-auto text-left space-y-2 text-xs font-sans">
                <div className="flex justify-between border-b border-white/[0.06] pb-2">
                  <span className="text-muted-foreground">Service:</span>
                  <span className="font-medium text-foreground">{selectedService.name}</span>
                </div>
                <div className="flex justify-between border-b border-white/[0.06] pb-2">
                  <span className="text-muted-foreground">Dedicated Stylist:</span>
                  <span className="font-medium text-foreground">{selectedStylist.name}</span>
                </div>
                <div className="flex justify-between border-b border-white/[0.06] pb-2">
                  <span className="text-muted-foreground">Date & Slot:</span>
                  <span className="font-medium text-accent">{formData.date} at {formData.time}</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-muted-foreground">Location:</span>
                  <span className="font-medium text-foreground">14 Pembridge Rd, Notting Hill W11</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={resetAndClose}
                  className="px-8 py-3 bg-accent text-[#130e0c] font-sans font-medium text-xs uppercase tracking-label hover:bg-accent-hover transition-colors"
                >
                  Return to Studio Nora
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
