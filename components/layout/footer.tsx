import { Container } from "@/components/ui/container"
import { profile } from "@/data/content"

export function Footer() {
  return (
    <footer className="border-t border-line dark:border-dark-line">
      <Container className="flex flex-col gap-4 py-10 text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between dark:text-dark-muted">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with Next.js and Tailwind CSS.
        </p>
        <div className="flex items-center gap-6">
          <a
            href={`mailto:${profile.email}`}
            className="transition-colors hover:text-ink dark:hover:text-dark-ink"
          >
            Email
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-ink dark:hover:text-dark-ink"
          >
            LinkedIn
          </a>
          <a href="#top" className="transition-colors hover:text-ink dark:hover:text-dark-ink">
            Back to top
          </a>
        </div>
      </Container>
    </footer>
  )
}
