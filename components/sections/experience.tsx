import { Container } from "@/components/ui/container"
import { SectionHeading } from "@/components/ui/section-heading"
import { experience } from "@/data/content"

export function Experience() {
  return (
    <section id="experience" className="border-t border-line py-20 sm:py-28 dark:border-dark-line">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="8–9 years designing enterprise software"
          description="Across fintech, B2B tooling, and SaaS platforms — building toward systems that outlast any single feature."
        />

        <ol className="mt-12 space-y-10">
          {experience.map((job) => (
            <li
              key={`${job.company}-${job.period}`}
              className="grid grid-cols-1 gap-4 border-t border-line pt-8 sm:grid-cols-[200px_1fr] dark:border-dark-line"
            >
              <div>
                <p className="text-sm font-medium text-ink dark:text-dark-ink">{job.period}</p>
                <p className="mt-1 text-sm text-ink-soft dark:text-dark-muted">{job.company}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-ink dark:text-dark-ink">{job.role}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted dark:text-dark-muted">
                  {job.summary}
                </p>
                <ul className="mt-4 space-y-2">
                  {job.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-3 text-sm leading-relaxed text-ink-muted dark:text-dark-muted"
                    >
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent dark:bg-dark-accent" aria-hidden="true" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
