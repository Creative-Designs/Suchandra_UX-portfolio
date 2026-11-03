"use client"

import { useEffect, useState } from "react"

interface OnThisPageNavProps {
  sections: { heading: string; id: string }[]
}

export function OnThisPageNav({ sections }: OnThisPageNavProps) {
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null)

  useEffect(() => {
    const sectionElements = sections
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null)

    if (sectionElements.length === 0) return

    const updateActiveSection = () => {
      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 1
      ) {
        setActiveSectionId(sectionElements[sectionElements.length - 1].id)
        return
      }

      const activationLine = window.innerHeight * 0.3
      const currentSection = [...sectionElements]
        .reverse()
        .find((section) => section.getBoundingClientRect().top <= activationLine)

      setActiveSectionId((currentSection ?? sectionElements[0]).id)
    }

    const observer = new IntersectionObserver(updateActiveSection, {
      rootMargin: "-25% 0px -65% 0px",
    })

    sectionElements.forEach((section) => observer.observe(section))
    updateActiveSection()

    return () => observer.disconnect()
  }, [sections])

  return (
    <nav
      aria-label="On this page"
      className="h-fit rounded-xl border border-line bg-paper-raised p-5 dark:border-dark-line dark:bg-dark-raised lg:sticky lg:top-24"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink dark:text-dark-ink">
        On this page
      </p>
      <ol className="mt-4 flex flex-wrap gap-x-4 gap-y-2 lg:flex-col lg:gap-3">
        {sections.map(({ heading, id }) => {
          const isActive = id === activeSectionId

          return (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={isActive ? "location" : undefined}
                onClick={() => setActiveSectionId(id)}
                className={`text-sm transition-colors ${
                  isActive
                    ? "font-semibold text-accent dark:text-dark-accent"
                    : "text-ink-muted hover:text-accent dark:text-dark-muted dark:hover:text-dark-accent"
                }`}
              >
                {heading}
              </a>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
