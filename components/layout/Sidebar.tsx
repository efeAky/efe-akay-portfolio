import ProfileCard from '@/components/profile/ProfileCard'
import SkillBadges from '@/components/profile/SkillBadges'
import DownloadResumeButton from '@/components/ui/DownloadResumeButton'

export default function Sidebar() {
  return (
    <aside className="w-full xl:w-[320px] 2xl:w-[380px] xl:sticky xl:top-16 space-y-stack-md shrink-0">
      <ProfileCard />
      <SkillBadges />
      <DownloadResumeButton />
    </aside>
  )
}