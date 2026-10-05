"use client"

import { useEffect, useRef } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { X } from "lucide-react"
import type { CaseStudy } from "@/data/content"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

interface CaseStudyDialogProps {
  caseStudy: CaseStudy | null
  onClose: () => void
}

export function CaseStudyDialog({ caseStudy, onClose }: CaseStudyDialogProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (!caseStudy) return

    const previouslyFocused = document.activeElement as HTMLElement | null
    closeButtonRef.current?.focus()
    document.body.style.overflow = "hidden"

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
      previouslyFocused?.focus()
    }
  }, [caseStudy, onClose])

  return (
    <AnimatePresence>
      {caseStudy ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
        >
          <motion.div
            className="absolute inset-0 bg-ink/50 backdrop-blur-sm dark:bg-black/70"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-study-title"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-t-2xl border border-line bg-paper p-6 shadow-xl sm:rounded-2xl sm:p-10 dark:border-dark-line dark:bg-dark-bg"
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close case study"
              className="absolute right-5 top-5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-muted transition-colors hover:border-line-strong hover:text-ink dark:border-dark-line dark:text-dark-muted dark:hover:text-dark-ink"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>

            <p className="text-sm font-medium uppercase tracking-[0.12em] text-accent dark:text-dark-accent">
              {caseStudy.category}
            </p>
            <h2
              id="case-study-title"
              className="mt-3 max-w-xl text-2xl font-serif font-medium text-ink text-balance sm:text-3xl dark:text-dark-ink"
            >
              {caseStudy.title}
            </h2>

            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 border-y border-line py-4 text-sm text-ink-muted dark:border-dark-line dark:text-dark-muted">
              <p>
                <span className="font-medium text-ink dark:text-dark-ink">Role: </span>
                {caseStudy.role}
              </p>
              <p>
                <span className="font-medium text-ink dark:text-dark-ink">Timeframe: </span>
                {caseStudy.timeframe}
              </p>
            </div>

            <img
              src={caseStudy.cover || "/placeholder.svg"}
              alt={caseStudy.coverAlt}
              className="mt-6 w-full rounded-xl border border-line object-cover dark:border-dark-line"
            />

            <div className="mt-8 space-y-8">
              {caseStudy.sections.map((section) => (
                <div key={section.heading}>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-ink dark:text-dark-ink">
                    {section.heading}
                  </h3>
                  <div className="mt-3 space-y-3">
                    {section.body.map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-sm leading-relaxed text-ink-muted dark:text-dark-muted"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2 border-t border-line pt-6 dark:border-dark-line">
              {caseStudy.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-accent-tint px-3 py-1 text-xs font-medium text-accent dark:bg-dark-accentTint dark:text-dark-accent"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
