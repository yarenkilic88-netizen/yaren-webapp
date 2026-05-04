import { Container } from '../shared/ui/Container.jsx'
import { site } from '../site/personal.js'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-white/10 bg-zinc-950">
      <Container className="py-10">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-white/50">
            © {year} {site.fullName}. Built with React + Tailwind.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm sm:justify-end">
            <a className="text-white/60 hover:text-white" href="#top">
              Back to top
            </a>
            <a
              className="text-white/60 hover:text-white"
              href={site.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="text-white/60 hover:text-white"
              href={site.linkedinUrl}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

