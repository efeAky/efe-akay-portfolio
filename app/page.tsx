import HomePage from '@/components/layout/HomePage'
import { projects } from '@/lib/data/projects'

export default async function Page() {
  return <HomePage projects={projects} />
}