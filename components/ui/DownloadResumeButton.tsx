export default function DownloadResumeButton() {
  return (
    <a
      href="/EfeAkayResume.pdf"
      download
      className="w-full bg-primary text-on-primary font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-lg glass-btn-hover hover:bg-primary/90 border border-transparent hover:border-white/10"
    >
      Download Resume
    </a>
  )
}