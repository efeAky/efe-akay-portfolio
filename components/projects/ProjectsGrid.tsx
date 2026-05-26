import type { Project } from '@/lib/types'
import ProjectCard from '@/components/projects/ProjectCard'

interface ProjectsGridProps {
  projects: Project[]
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  )
}