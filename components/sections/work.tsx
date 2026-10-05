"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { Container } from "@/components/ui/container"
import { SectionHeading } from "@/components/ui/section-heading"
import { CaseStudyDialog } from "@/components/work/case-study-dialog"
import { caseStudies, type CaseStudy } from "@/data/content"

export function Work() {
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudy | null>(null)

  return (
    <section id="work" className="border-t border-line py-20 sm:py-28 dark:border-dark-line">
      <Container>
        <SectionHeading
          eyebrow="Selected work"
          title="Case studies from enterprise and fintech products"
          description="A few projects that reflect how I work: evidence-led, systems-minded, and grounded in real operational constraints."
        />

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {caseStudies.map((study) => (
            <button
              key={study.slug}
              type="button"
              onClick={() => setActiveCaseStudy(study)}
              className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-paper-raised text-left transition-colors hover:border-line-strong dark:border-dark-line dark:bg-dark-raised dark:hover:border-dark-accent/40"
            >
              <div className="overflow-hidden">
                <img
                  src={study.cover || "/placeholder.svg"}
                  alt={study.coverAlt}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-medium uppercase tracking-[0.1em] text-accent dark:text-dark-accent">
                  {study.category}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-ink dark:text-dark-ink">{study.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted dark:text-dark-muted">
                  {study.summary}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-ink dark:text-dark-ink">
                  View case study
                  <ArrowUpRight
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </button>
          ))}
        </div>
      </Container>

      <CaseStudyDialog caseStudy={activeCaseStudy} onClose={() => setActiveCaseStudy(null)} />
    </section>
  )
}
