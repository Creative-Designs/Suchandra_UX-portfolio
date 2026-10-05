import type { ReactNode } from "react"

export function Container({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`mx-auto w-full max-w-content px-6 sm:px-8 lg:px-10 ${className}`}>
      {children}
    </div>
  )
}
