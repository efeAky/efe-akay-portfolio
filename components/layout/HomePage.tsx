import Navbar from '@/components/layout/Navbar'
import OverviewSection from '@/components/layout/OverviewSection'
import BioSection from '@/components/layout/BioSection'
import ProjectsSection from '@/components/layout/ProjectsSection'
import ContactModal from '@/components/ui/ContactModal'
import type { Project } from '@/lib/types'

interface HomePageProps {
  projects: Project[]
}

export default function HomePage({ projects }: HomePageProps) {
  return (
    <>
      <Navbar />
      <ContactModal />
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <OverviewSection />
        <BioSection />
        <ProjectsSection projects={projects} />
      </main>
    </>
  )
}