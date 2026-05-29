export default function DownloadResumeButton() {
  return (
    <a
       href="/EfeAkayResume.pdf"
      download
      className="inline-flex items-center gap-2 bg-primary text-on-primary font-semibold py-4 px-6 rounded-xl hover:bg-primary/90 transition-all duration-200 text-label-md w-fit shadow-lg hover:scale-105 active:scale-95"
    >
      Download Resume
    </a>
  )
}