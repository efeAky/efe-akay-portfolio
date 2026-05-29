'use client'

import { motion } from 'framer-motion'
import ProjectsGrid from '@/components/projects/ProjectsGrid'
import type { Project } from '@/lib/types'

interface ProjectsSectionProps {
  projects: Project[]
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-24 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="w-full max-w-5xl mx-auto"
      >
        <ProjectsGrid projects={projects} />
      </motion.div>
    </section>
  )
}