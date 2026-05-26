export default function SocialLinks() {
  return (
    <div className="flex gap-4 pt-1 pb-2">
      
      <a
        href="https://github.com/efeAky"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-primary font-medium transition-all duration-200 hover:bg-primary/10 px-3 py-1.5 rounded-lg border border-primary/30 hover:border-primary/60"
      >
        <span className="text-label-md">GitHub</span>
      </a>
      
      <a
        href="https://www.linkedin.com/in/efeakay"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-primary font-medium transition-all duration-200 hover:bg-primary/10 px-3 py-1.5 rounded-lg border border-primary/30 hover:border-primary/60"
      >
        <span className="text-label-md">LinkedIn</span>
      </a>

      <a
        href="https://app.joinhandshake.com/profiles/efeakay"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-primary font-medium transition-all duration-200 hover:bg-primary/10 px-3 py-1.5 rounded-lg border border-primary/30 hover:border-primary/60"
      >
        <span className="text-label-md">Handshake</span>
      </a>

    </div>
  )
}