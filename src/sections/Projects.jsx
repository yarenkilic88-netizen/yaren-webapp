import { Container } from '../shared/ui/Container.jsx'
import { SectionTitle } from '../shared/ui/SectionTitle.jsx'
import { Button } from '../shared/ui/Button.jsx'

const projects = [
  {
    title: 'Project One',
    description: 'Short description about what it does and why it’s useful.',
    tags: ['React', 'UI'],
    href: '#',
  },
  {
    title: 'Project Two',
    description: 'Another project. You can link to GitHub or a live demo.',
    tags: ['Tailwind', 'Design'],
    href: '#',
  },
  {
    title: 'Project Three',
    description: 'A small app idea you can finish in a weekend.',
    tags: ['Forms', 'Validation'],
    href: '#',
  },
]

export function Projects() {
  return (
    <section id="projects" className="border-t border-white/10 bg-zinc-950">
      <Container className="py-16 sm:py-24">
        <SectionTitle
          eyebrow="Projects"
          title="Things I’m building"
          description="Replace these with your own projects and links."
        />

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-3">
          {projects.map((p) => (
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
                <Button as="a" href={p.href} variant="secondary" size="sm">
                  View
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

