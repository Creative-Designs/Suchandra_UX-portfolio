import { ArrowUpRight, Mail } from "lucide-react"
import { Container } from "../ui/container"
import { profile } from "../../data/content"

export function Contact() {
  return (
    <section id="contact" className="border-t border-line py-20 sm:py-28 dark:border-dark-line">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 rounded-2xl border border-line bg-paper-raised p-8 sm:p-12 lg:flex-row lg:items-end dark:border-dark-line dark:bg-dark-raised">
          <div className="max-w-xl">
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-accent dark:text-dark-accent">
              Contact
            </p>
            <h2 className="mt-3 text-display-md font-serif font-medium text-ink text-balance dark:text-dark-ink">
              Open to new opportunities
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted dark:text-dark-muted">
              I'm currently exploring Lead and Senior UX roles in enterprise, fintech, and
              B2B product teams. If you're hiring or just want to talk shop, I'd love to
              hear from you.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-soft dark:bg-dark-accent dark:text-dark-bg dark:hover:opacity-90"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-line-strong dark:border-dark-line dark:text-dark-ink dark:hover:bg-dark-bg"
            >
              LinkedIn
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
