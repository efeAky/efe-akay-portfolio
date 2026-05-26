import Sidebar from '@/components/layout/Sidebar'
import ProjectsGrid from '@/components/projects/ProjectsGrid'
import type { Project } from '@/lib/types'

interface HomePageProps {
  projects: Project[]
}

export default function HomePage({ projects }: HomePageProps) {
  return (
    <main className="min-h-screen max-w-container-max mx-auto px-margin-mobile md:px-gutter pt-16 pb-16">
      <div className="flex flex-col xl:flex-row gap-stack-lg items-start">
        <Sidebar />
        <section className="grow space-y-stack-md">
          <h2 className="text-4xl font-bold text-on-surface">My Projects</h2>
          <ProjectsGrid projects={projects} />
        </section>
      </div>
    </main>
  )
}