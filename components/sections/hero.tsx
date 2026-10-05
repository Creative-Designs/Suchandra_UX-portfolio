"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Container } from "@/components/ui/container"
import { profile, targetEnvironments } from "@/data/content"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

export function Hero() {
  const prefersReducedMotion = useReducedMotion()

  const transition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }

  return (
    <section id="top" className="relative overflow-hidden pt-20 pb-24 sm:pt-28 sm:pb-32">
      <Container>
        <motion.p
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
          className="text-sm font-medium uppercase tracking-[0.14em] text-accent dark:text-dark-accent"
        >
          {profile.role} · {profile.location}
        </motion.p>

        <motion.h1
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: prefersReducedMotion ? 0 : 0.06 }}
          className="mt-5 max-w-3xl text-display-lg font-serif font-medium text-ink text-balance dark:text-dark-ink"
        >
          {profile.positioning}
        </motion.h1>

        <motion.p
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: prefersReducedMotion ? 0 : 0.12 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted dark:text-dark-muted"
        >
          {profile.summary}
        </motion.p>

        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: prefersReducedMotion ? 0 : 0.18 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#work"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-soft dark:bg-dark-accent dark:text-dark-bg dark:hover:opacity-90"
          >
            View selected work
            <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-line-strong dark:border-dark-line dark:text-dark-ink dark:hover:bg-dark-raised"
          >
            Get in touch
          </a>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...transition, delay: prefersReducedMotion ? 0 : 0.26 }}
          className="mt-16 border-t border-line pt-6 dark:border-dark-line"
        >
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-ink-soft dark:text-dark-muted">
            Designing for
          </p>
          <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-muted dark:text-dark-muted">
            {targetEnvironments.map((env) => (
              <li key={env}>{env}</li>
            ))}
          </ul>
        </motion.div>
      </Container>
    </section>
  )
}
