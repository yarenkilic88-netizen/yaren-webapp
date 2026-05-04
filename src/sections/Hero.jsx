import { Container } from '../shared/ui/Container.jsx'
import { Button } from '../shared/ui/Button.jsx'
import { site } from '../site/personal.js'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-[44rem] -translate-x-1/2 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute top-40 left-1/2 h-72 w-[44rem] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <Container className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-full bg-white/5 px-3 py-1.5 text-xs font-medium text-white/75 ring-1 ring-white/10">
            <span>{site.universityLine}</span>
            <span className="hidden text-white/30 sm:inline" aria-hidden>
              ·
            </span>
            <span className="text-white/60">{site.location}</span>
          </p>
          <p className="mt-8 text-sm font-medium tracking-wide text-violet-300/95">
            {site.fullName}
          </p>
          <h1 className="mt-2 text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            {site.tagline}
          </h1>
          <p className="mt-6 text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
            {site.intro}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button as="a" href="#projects" size="lg">
              Portfolio & roadmap
            </Button>
            <Button as="a" href="#about" variant="secondary" size="lg">
              Background & approach
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {site.heroHighlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white/5 p-4 text-left ring-1 ring-white/10"
              >
                <p className="text-sm font-medium text-white">{item.title}</p>
                <p className="mt-1.5 text-sm leading-snug text-white/60">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
