interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-medium uppercase tracking-[0.14em] text-accent dark:text-dark-accent">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-display-md font-serif font-medium text-ink text-balance dark:text-dark-ink">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-ink-muted dark:text-dark-muted">
          {description}
        </p>
      ) : null}
    </div>
  )
}
