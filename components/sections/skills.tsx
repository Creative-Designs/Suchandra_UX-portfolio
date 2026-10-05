import { Container } from "@/components/ui/container"
import { SectionHeading } from "@/components/ui/section-heading"
import { skillGroups } from "@/data/content"

export function Skills() {
  return (
    <section id="skills" className="border-t border-line py-20 sm:py-28 dark:border-dark-line">
      <Container>
        <SectionHeading eyebrow="Skills" title="What I bring to a team" />

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-ink dark:text-dark-ink">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {group.skills.map((skill) => (
                  <li key={skill} className="text-sm leading-relaxed text-ink-muted dark:text-dark-muted">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
