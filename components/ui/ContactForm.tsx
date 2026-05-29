'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })

      if (res.ok) {
        setStatus('success')
        setName('')
        setEmail('')
        setMessage('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="w-full space-y-stack-md pb-24">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold text-on-surface">Contact Me</h1>
        <p className="text-body-md text-on-surface-variant">
          Fill out the form and I will get back to you.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1">
          <label className="text-label-md text-on-surface-variant">Name</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full bg-surface-container-high text-on-surface px-4 py-3 rounded-xl border border-outline-variant/30 focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        <div className="space-y-1">
          <label className="text-label-md text-on-surface-variant">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full bg-surface-container-high text-on-surface px-4 py-3 rounded-xl border border-outline-variant/30 focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        <div className="space-y-1">
          <label className="text-label-md text-on-surface-variant">Message</label>
          <textarea
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message..."
            rows={4}
            className="w-full bg-surface-container-high text-on-surface px-4 py-3 rounded-xl border border-outline-variant/30 focus:outline-none focus:border-primary transition-colors resize-none"
          />
        </div>

        {status === 'success' && (
          <div className="w-full bg-secondary/10 border border-secondary/30 rounded-xl px-4 py-3">
            <p className="text-secondary text-body-md text-center">Message sent successfully!</p>
          </div>
        )}

        {status === 'error' && (
          <div className="w-full bg-error/10 border border-error/30 rounded-xl px-4 py-3">
            <p className="text-error text-body-md text-center">Something went wrong. Please try again.</p>
          </div>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-primary text-on-primary font-bold py-3 px-8 rounded-xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {status === 'loading' ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  )
}