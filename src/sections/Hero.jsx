import { Container } from '../shared/ui/Container.jsx'
import { Button } from '../shared/ui/Button.jsx'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-[44rem] -translate-x-1/2 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute top-40 left-1/2 h-72 w-[44rem] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <Container className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-white/70 ring-1 ring-white/10">
            Frontend-only • React + Tailwind • Single page
          </p>
          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Build a clean, modern website that scales as you learn.
          </h1>
          <p className="mt-6 text-pretty text-base text-white/70 sm:text-lg">
            This project is structured with sections, features, and shared UI so
            it stays organized when you add forms, API calls, and new content.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button as="a" href="#projects" size="lg">
              View projects
            </Button>
            <Button as="a" href="#about" variant="secondary" size="lg">
              Learn more
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              { k: 'Architecture', v: 'sections/features/shared' },
              { k: 'No backend', v: 'static deploy friendly' },
              { k: 'Fast UI', v: 'Tailwind + reusable components' },
            ].map((item) => (
              <div
                key={item.k}
                className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10"
              >
                <p className="text-sm font-medium text-white">{item.k}</p>
                <p className="mt-1 text-sm text-white/60">{item.v}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

