import { Container } from '../shared/ui/Container.jsx'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-white/10 bg-zinc-950">
      <Container className="py-10">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-white/50">
            © {year} Yaren. Built with React + Tailwind.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <a className="text-white/60 hover:text-white" href="#top">
              Back to top
            </a>
            <a
              className="text-white/60 hover:text-white"
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

