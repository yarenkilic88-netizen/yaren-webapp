import { Container } from '../shared/ui/Container.jsx'
import { SectionTitle } from '../shared/ui/SectionTitle.jsx'

const points = [
  {
    title: 'Simple structure',
    text: 'You’ll add content as sections, and interactive parts as features. No big “components” mess.',
  },
  {
    title: 'Reusable UI',
    text: 'Buttons, inputs, cards live in shared UI so you don’t copy/paste styles everywhere.',
  },
  {
    title: 'Ready to grow',
    text: 'Later you can add public APIs, forms + validation, and even Firebase/Supabase without a rewrite.',
  },
]

export function About() {
  return (
    <section id="about" className="border-t border-white/10 bg-zinc-950">
      <Container className="py-16 sm:py-24">
        <SectionTitle
          eyebrow="About"
          title="A beginner-friendly architecture"
          description="Organized enough to scale, simple enough to learn quickly."
        />

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
          {points.map((p) => (
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

