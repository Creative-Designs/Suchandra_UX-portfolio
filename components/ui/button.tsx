import type { AnchorHTMLAttributes, ReactNode } from "react"

type Variant = "primary" | "secondary" | "ghost"

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
  variant?: Variant
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-soft dark:bg-dark-accent dark:text-dark-bg dark:hover:opacity-90",
  secondary:
    "bg-transparent text-ink border border-line hover:border-line-strong hover:bg-paper-raised dark:text-dark-ink dark:border-dark-line dark:hover:bg-dark-raised",
  ghost:
    "bg-transparent text-ink-muted hover:text-ink dark:text-dark-muted dark:hover:text-dark-ink",
}

export function ButtonLink({ children, variant = "primary", className = "", ...rest }: ButtonLinkProps) {
  return (
    <a
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200 ${variantClasses[variant]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  )
}
