import { Container } from '../shared/ui/Container.jsx'
import { Button } from '../shared/ui/Button.jsx'

const nav = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
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
          Yaren<span className="text-violet-400">.</span>
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
        </nav>
        <div className="flex items-center gap-2">
          <Button as="a" href="#contact" variant="secondary" size="sm">
            Contact
          </Button>
        </div>
      </Container>
    </header>
  )
}

