'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import SocialLinks from '@/components/profile/SocialLinks'
import SkillBadges from '@/components/profile/SkillBadges'
import DownloadResumeButton from '@/components/ui/DownloadResumeButton'

export default function OverviewSection() {
  return (
    <section id="overview" className="min-h-screen flex items-center justify-center py-24 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-center"
      >
        {/* Left — Avatar, Name, Title, Links */}
        <div className="flex flex-col items-center text-center gap-4 shrink-0 w-full md:w-[240px]">
          <div className="relative w-[180px] h-[180px]">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse-slow" />
            <Image
              src="/EfeAkayPhoto.jpg"
              alt="Efe Akay"
              fill
              sizes="180px"
              className="rounded-full object-cover border-4 border-surface-container-high shadow-2xl"
              style={{ objectPosition: 'center 20%' }}
              priority
            />
          </div>
          <div className="space-y-1">
            <h1 className="text-3xl font-bold text-white">Efe Akay</h1>
            <p className="text-lg font-medium text-primary">Full-Stack Developer</p>
          </div>
          <SocialLinks />
        </div>

        {/* Right — Headline, Bio, Skills, Resume */}
        <div className="flex flex-col gap-6 flex-grow w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
            From Ideas to Scalable Web Applications.
          </h2>
          <p className="text-body-md md:text-body-lg text-on-surface-variant">
            I specialize in building secure and scalable web applications using modern frameworks. I efficiently leverage AI tools to streamline development, enhance debugging, and support architectural integrity. I am always eager to adopt new technologies and take on new challenges.
          </p>
          <SkillBadges />
          <DownloadResumeButton />
        </div>
      </motion.div>
    </section>
  )
}