export function SectionTitle({ eyebrow, title, description }) {
  return (
    <header className="mx-auto max-w-2xl text-center">
      {eyebrow ? (
        <p className="text-sm font-medium tracking-wide text-violet-300/90">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-pretty text-base text-white/70 sm:text-lg">
          {description}
        </p>
      ) : null}
    </header>
  )
}

