import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { notFound } from "next/navigation"
import { Container } from "@/components/ui/container"
import { caseStudies } from "@/data/content"

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>
}

function getSectionId(heading: string, index: number) {
  const headingSlug = heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")

  return `section-${index + 1}-${headingSlug}`
}

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params
  const caseStudy = caseStudies.find((study) => study.slug === slug)

  if (!caseStudy) return {}

  return {
    title: `${caseStudy.title} — Suchandra Das`,
    description: caseStudy.summary,
  }
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params
  const caseStudy = caseStudies.find((study) => study.slug === slug)

  if (!caseStudy) notFound()

  const otherCaseStudies = caseStudies.filter((study) => study.slug !== caseStudy.slug)

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-sm dark:border-dark-line dark:bg-dark-bg/90">
        <Container className="flex h-16 items-center justify-between gap-4">
          <Link
            href="/"
            className="text-sm font-semibold tracking-tight text-ink dark:text-dark-ink"
          >
            Suchandra Das
          </Link>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink-muted transition-colors hover:text-ink dark:text-dark-muted dark:hover:text-dark-ink"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>Back to selected work</span>
          </Link>
        </Container>
      </header>

      <main>
        <article>
          <Container className="pb-16 pt-12 sm:pb-24 sm:pt-20">
            <header className="mx-auto max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent dark:text-dark-accent sm:text-sm">
                {caseStudy.category}
              </p>
              <h1 className="mt-4 max-w-3xl font-serif text-3xl font-medium leading-tight text-ink text-balance sm:text-5xl dark:text-dark-ink">
                {caseStudy.title}
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-ink-muted sm:text-lg dark:text-dark-muted">
                {caseStudy.summary}
              </p>

              <dl className="mt-8 grid gap-5 border-y border-line py-5 text-sm dark:border-dark-line sm:grid-cols-3">
                <div>
                  <dt className="font-medium text-ink dark:text-dark-ink">Role</dt>
                  <dd className="mt-1 leading-relaxed text-ink-muted dark:text-dark-muted">
                    {caseStudy.role}
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-ink dark:text-dark-ink">Timeframe</dt>
                  <dd className="mt-1 text-ink-muted dark:text-dark-muted">
                    {caseStudy.timeframe}
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-ink dark:text-dark-ink">Environment</dt>
                  <dd className="mt-1 text-ink-muted dark:text-dark-muted">
                    {caseStudy.environment}
                  </dd>
                </div>
              </dl>

              <div className="mt-6 flex flex-wrap gap-2">
                {caseStudy.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-accent-tint px-3 py-1 text-xs font-medium text-accent dark:bg-dark-accentTint dark:text-dark-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            <figure className="mx-auto mt-10 max-w-5xl sm:mt-14">
              <img
                src={caseStudy.cover}
                alt={caseStudy.coverAlt}
                className="aspect-[16/9] w-full rounded-2xl border border-line bg-paper-raised object-cover dark:border-dark-line dark:bg-dark-raised"
              />
            </figure>

            <div className="mx-auto mt-14 grid max-w-5xl gap-10 lg:mt-20 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-16">
              <nav
                aria-label="On this page"
                className="h-fit rounded-xl border border-line bg-paper-raised p-5 dark:border-dark-line dark:bg-dark-raised lg:sticky lg:top-24"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink dark:text-dark-ink">
                  On this page
                </p>
                <ol className="mt-4 flex flex-wrap gap-x-4 gap-y-2 lg:flex-col lg:gap-3">
                  {caseStudy.sections.map((section, index) => (
                    <li key={`${section.heading}-${index}`}>
                      <a
                        href={`#${getSectionId(section.heading, index)}`}
                        className="text-sm text-ink-muted transition-colors hover:text-accent dark:text-dark-muted dark:hover:text-dark-accent"
                      >
                        {section.heading}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>

              <div className="min-w-0">
                <div className="mb-10 border-l-2 border-accent pl-5 dark:border-dark-accent sm:pl-7">
                  <p className="text-xl font-serif leading-relaxed text-ink text-balance dark:text-dark-ink sm:text-2xl">
                    {caseStudy.summary}
                  </p>
                </div>

                <div className="space-y-12 sm:space-y-16">
                  {caseStudy.sections.map((section, index) => (
                    <section
                      key={`${section.heading}-${index}`}
                      id={getSectionId(section.heading, index)}
                      className="scroll-mt-24"
                    >
                      <h2 className="font-serif text-2xl font-medium text-ink sm:text-3xl dark:text-dark-ink">
                        {section.heading}
                      </h2>
                      <div className="mt-5 space-y-4">
                        {section.body.map((paragraph, paragraphIndex) => (
                          <p
                            key={paragraphIndex}
                            className="text-base leading-8 text-ink-muted dark:text-dark-muted"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>

                      {section.image ? (
                        <figure className="mt-8">
                          <img
                            src={section.image}
                            alt={section.imageAlt ?? ""}
                            className="w-full rounded-xl border border-line bg-paper-raised dark:border-dark-line dark:bg-dark-raised"
                          />
                          {section.imageCaption ? (
                            <figcaption className="mt-3 text-center text-sm text-ink-soft dark:text-dark-muted">
                              {section.imageCaption}
                            </figcaption>
                          ) : null}
                        </figure>
                      ) : null}
                    </section>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </article>

        <section className="border-t border-line py-14 dark:border-dark-line sm:py-20">
          <Container>
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent dark:text-dark-accent">
                  Keep exploring
                </p>
                <h2 className="mt-2 font-serif text-2xl font-medium text-ink dark:text-dark-ink">
                  More case studies
                </h2>
              </div>
              <Link
                href="/#work"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted hover:text-ink dark:text-dark-muted dark:hover:text-dark-ink"
              >
                All selected work
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {otherCaseStudies.map((study) => (
                <li key={study.slug}>
                  <Link
                    href={`/work/${study.slug}`}
                    className="group flex h-full flex-col rounded-xl border border-line bg-paper-raised p-5 transition-colors hover:border-line-strong dark:border-dark-line dark:bg-dark-raised dark:hover:border-dark-accent/40"
                  >
                    <span className="text-xs font-medium uppercase tracking-[0.1em] text-accent dark:text-dark-accent">
                      {study.category}
                    </span>
                    <span className="mt-2 flex-1 font-medium text-ink dark:text-dark-ink">
                      {study.title}
                    </span>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm text-ink-muted group-hover:text-ink dark:text-dark-muted dark:group-hover:text-dark-ink">
                      View case study
                      <ArrowUpRight
                        className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      </main>
    </>
  )
}
