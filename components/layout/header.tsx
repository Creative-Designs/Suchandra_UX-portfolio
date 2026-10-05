"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { Container } from "@/components/ui/container"
import { ThemeToggle } from "@/components/layout/theme-toggle"
import { navLinks, profile } from "@/data/content"

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false)
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [menuOpen])

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-sm dark:border-dark-line dark:bg-dark-bg/90">
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#top"
          className="text-sm font-semibold tracking-tight text-ink dark:text-dark-ink"
        >
          {profile.name}
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-muted transition-colors hover:text-ink dark:text-dark-muted dark:hover:text-dark-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center justify-center rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-soft dark:bg-dark-accent dark:text-dark-bg dark:hover:opacity-90"
          >
            Download resume
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink dark:border-dark-line dark:text-dark-ink"
          >
            {menuOpen ? <X className="h-4 w-4" aria-hidden="true" /> : <Menu className="h-4 w-4" aria-hidden="true" />}
          </button>
        </div>
      </Container>

      {menuOpen ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-line bg-paper px-6 py-4 dark:border-dark-line dark:bg-dark-bg md:hidden"
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-base text-ink-muted hover:text-ink dark:text-dark-muted dark:hover:text-dark-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center justify-center rounded-full bg-accent px-4 py-2 text-sm font-medium text-white dark:bg-dark-accent dark:text-dark-bg"
              >
                Download resume
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
