import { Container } from "@/components/ui/container"
import { SectionHeading } from "@/components/ui/section-heading"
import { principles } from "@/data/content"

export function About() {
  return (
    <section id="about" className="border-t border-line py-20 sm:py-28 dark:border-dark-line">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="How I approach enterprise design"
          description="Most of my work lives in products where the hard part isn't the interface — it's the underlying complexity. I focus on making that complexity legible, without pretending it isn't there."
        />

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
          {principles.map((principle) => (
            <div key={principle.title} className="border-t border-line pt-5 dark:border-dark-line">
              <h3 className="text-base font-semibold text-ink dark:text-dark-ink">{principle.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted dark:text-dark-muted">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
