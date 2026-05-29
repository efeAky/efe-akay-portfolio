'use client'

import { useState } from 'react'
import ContactForm from '@/components/ui/ContactForm'

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full md:w-[420px] bg-surface-container border-l border-outline-variant/30 shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-outline-variant/30">
          <h2 className="text-xl font-bold text-on-surface">Contact Me</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-on-surface-variant hover:text-on-surface transition-colors text-xl font-bold"
          >
            ✕
          </button>
        </div>
        <div className="p-6 overflow-y-auto h-full">
          <ContactForm />
        </div>
      </div>

      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-secondary text-on-secondary font-bold py-3 px-4 rounded-full flex items-center gap-3 shadow-xl hover:shadow-secondary/20 hover:-translate-y-1 transition-all glass-btn-hover hover:bg-secondary/90 border border-transparent hover:border-white/10"
          >
            Contact Me
          </button>
        </div>
      )}
    </>
  )
}