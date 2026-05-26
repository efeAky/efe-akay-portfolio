export interface ProjectImage {
  src: string
  caption: string
}

export interface Project {
  slug: string
  title: string
  image: string
  isLive: boolean
  description?: string
  technologies?: string[]
  liveUrl?: string
  githubUrl?: string
  images?: ProjectImage[]
}