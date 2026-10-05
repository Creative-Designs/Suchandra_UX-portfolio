"use client"

import { useEffect, useState } from "react"

/**
 * Tracks the user's `prefers-reduced-motion` setting so components can
 * disable or simplify Framer Motion animations accordingly.
 */
export function useReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState(false)

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReduced(query.matches)

    const handleChange = (event: MediaQueryListEvent) => setPrefersReduced(event.matches)
    query.addEventListener("change", handleChange)
    return () => query.removeEventListener("change", handleChange)
  }, [])

  return prefersReduced
}
