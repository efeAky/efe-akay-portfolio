'use client'

import { motion } from 'framer-motion'

export default function BioSection() {
  return (
    <section id="bio" className="min-h-screen flex items-center justify-center py-24 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-6"
      >
        {/* Left — About Me */}
        <div className="flex-grow glass-card rounded-xl p-6 md:p-8 flex flex-col gap-4 hover:shadow-[0_0_30px_rgba(192,193,255,0.15)] transition-all duration-300">
          <h2 className="text-2xl font-bold text-white">About Me</h2>
          <p className="text-body-md text-on-surface-variant">
            I build secure and scalable applications across the full stack — from{' '}
            <span className="text-primary">Next.js</span> frontends to{' '}
            <span className="text-primary">Node.js</span>{' '}
            <span className="text-primary">RESTful APIs</span>. I actively use AI tools —{' '}
            <span className="text-primary">Claude</span>,{' '}
            <span className="text-primary">ChatGPT</span>,{' '}
            <span className="text-primary">Gemini</span>, and{' '}
            <span className="text-primary">Stitch</span> — as a core part of my development
            process, not just as assistants but as tools that make me faster, sharper, and more
            effective.
          </p>
          <p className="text-body-md text-on-surface-variant">
            My background in object-oriented programming with{' '}
            <span className="text-primary">C++</span> and{' '}
            <span className="text-primary">Python</span> gives me a solid understanding of
            programming fundamentals — memory management, data structures, and algorithmic
            thinking. This foundation allows me to write cleaner, more efficient code and approach
            problems with a deeper technical perspective.
          </p>
        </div>

        {/* Right — Education + Languages stacked */}
        <div className="flex flex-col gap-6 w-full md:w-[280px] shrink-0">

          {/* Education Card */}
          <div className="glass-card rounded-xl p-6 flex flex-col gap-3 hover:shadow-[0_0_30px_rgba(192,193,255,0.15)] transition-all duration-300">
            <h2 className="text-2xl font-bold text-white">Education</h2>
            <p className="text-on-surface-variant">College of Southern Nevada</p>
            <p className="text-on-surface-variant">Computer Science</p>
            <p className="text-on-surface-variant">May 2026</p>
            <p className="text-on-surface-variant">GPA <span className="text-primary">3.70</span></p>
          </div>

          {/* Languages Card */}
          <div className="glass-card rounded-xl p-6 flex flex-col gap-3 hover:shadow-[0_0_30px_rgba(192,193,255,0.15)] transition-all duration-300">
            <h2 className="text-2xl font-bold text-white">Languages</h2>
            <p className="text-on-surface-variant"><span className="text-primary">English</span> Advanced</p>
            <p className="text-on-surface-variant"><span className="text-primary">Turkish</span> Native</p>
          </div>

        </div>
      </motion.div>
    </section>
  )
}