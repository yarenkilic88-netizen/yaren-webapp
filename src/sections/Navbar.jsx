import { Container } from '../shared/ui/Container.jsx'
import { Button } from '../shared/ui/Button.jsx'
import { site } from '../site/personal.js'

const nav = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Portfolio' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#top"
          className="text-sm font-semibold tracking-tight text-white"
        >
          {site.displayName}
          <span className="text-violet-400">.</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-white/70 hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <a
            href={site.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-white/70 hover:text-white"
          >
            GitHub
          </a>
          <a
            href={site.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-white/70 hover:text-white"
          >
            LinkedIn
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <Button
            as="a"
            href={site.githubUrl}
            variant="ghost"
            size="sm"
            className="hidden sm:inline-flex"
            target="_blank"
            rel="noreferrer"
          >
            @{site.handle}
          </Button>
          <Button as="a" href="#contact" variant="secondary" size="sm">
            Contact
          </Button>
        </div>
      </Container>
    </header>
  )
}

