'use client'

import { useEffect, useRef, useState } from 'react'

// Wraps a section so it fades/slides in the first time it scrolls into
// view, instead of the whole page being static once loaded. Plain
// IntersectionObserver, no animation library - fires once per section,
// then disconnects. Respects prefers-reduced-motion by skipping the
// observer entirely and rendering already-visible.
export function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`reveal${visible ? ' reveal-in' : ''}`}>
      {children}
    </div>
  )
}
