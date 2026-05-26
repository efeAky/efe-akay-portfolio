const skills = [
  'JavaScript/TypeScript',
  'Next.js',
  'React',
  'Node.js',
  'SQL',
  'MongoDB',
  'Git',
  'Python',
  'C++',
]

export default function SkillBadges() {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="px-2.5 py-1 bg-surface-container-high text-on-surface-variant rounded text-label-sm border border-outline-variant/30"
        >
          {skill}
        </span>
      ))}
    </div>
  )
}