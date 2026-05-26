import ProjectDetail from '@/components/projects/ProjectDetail'
import { projects } from '@/lib/data/projects'

export default function Page() {
  const project = projects.find((p) => p.slug === 'exercise-tracker')!
  return (
    <main className="min-h-screen max-w-container-max mx-auto px-margin-mobile md:px-gutter pt-16 pb-16 overflow-y-auto">
      <ProjectDetail project={project} />
    </main>
  )
}