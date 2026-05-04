import { Container } from '../shared/ui/Container.jsx'
import { SectionTitle } from '../shared/ui/SectionTitle.jsx'
import { aboutPoints } from '../site/personal.js'

export function About() {
  return (
    <section id="about" className="border-t border-white/10 bg-zinc-950">
      <Container className="py-16 sm:py-24">
        <SectionTitle
          eyebrow="About"
          title="Background & engineering approach"
          description="A concise overview of my formal training, independent study, and how I intend to grow as a software engineer."
        />

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
          {aboutPoints.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10"
            >
              <p className="text-base font-semibold text-white">{p.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

