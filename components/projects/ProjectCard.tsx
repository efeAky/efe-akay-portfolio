import Image from 'next/image'
import Link from 'next/link'
import type { Project } from '@/lib/types'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="glass-card rounded-xl overflow-hidden cursor-pointer group transition-all duration-700">
        <div className="relative overflow-hidden aspect-video xl:aspect-16/10">
          <Image
            src={project.image}
            alt={project.title}
            fill
            quality={100}
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-surface to-transparent opacity-60" />
          {project.isLive && (
            <span className="absolute top-4 right-4 bg-primary text-on-primary px-3 py-1 rounded-full text-label-sm">
              Live Now
            </span>
          )}
        </div>
        <div className="p-6 space-y-3">
          <h3 className="text-headline-md group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <span className="inline-flex items-center gap-1 text-primary text-label-md">
            Click for details →
          </span>
        </div>
      </div>
    </Link>
  )
}