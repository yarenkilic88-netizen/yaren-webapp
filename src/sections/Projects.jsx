import { Container } from '../shared/ui/Container.jsx'
import { SectionTitle } from '../shared/ui/SectionTitle.jsx'
import { Button } from '../shared/ui/Button.jsx'
import { projectCards } from '../site/personal.js'

export function Projects() {
  return (
    <section id="projects" className="border-t border-white/10 bg-zinc-950">
      <Container className="py-16 sm:py-24">
        <SectionTitle
          eyebrow="Portfolio"
          title="Code, repositories, and direction"
          description="Artifacts that represent where I am today on my coding journey — plus a public statement of where I am steering next."
        />

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-3">
          {projectCards.map((p) => (
            <article
              key={p.title}
              className="flex flex-col rounded-2xl bg-white/5 p-6 ring-1 ring-white/10"
            >
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-white/70">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-white/70 ring-1 ring-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6">
                <Button
                  as="a"
                  href={p.href}
                  variant="secondary"
                  size="sm"
                  target={p.href.startsWith('http') ? '_blank' : undefined}
                  rel={p.href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  {p.linkLabel ?? 'Open'}
                </Button>
              </div>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-white/50">
          Content for this section is maintained in{' '}
          <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs text-violet-200">
            src/site/personal.js
          </code>
          .
        </p>
      </Container>
    </section>
  )
}

