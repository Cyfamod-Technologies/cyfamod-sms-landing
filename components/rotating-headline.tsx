'use client'

import { useEffect, useState } from 'react'

const defaultPhrases = [
  'Automate Administration.',
  'Track Attendance.',
  'Generate Results.',
  'Export Reports.',
  'Run CBT.',
  'Power Continuous Assessment Tests.',
  'Simplify Assessments.',
]

const ROTATE_MS = 2600

interface RotatingHeadlineProps {
  phrases?: string[]
  gradient?: boolean
}

export function RotatingHeadline({ phrases = defaultPhrases, gradient = false }: RotatingHeadlineProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % phrases.length)
    }, ROTATE_MS)
    return () => clearInterval(id)
  }, [phrases])

  return (
    <span className="cd-headline-slide" aria-live="polite">
      <span className="cd-words-wrapper">
        {phrases.map((phrase, i) => (
          <b
            key={phrase}
            className={`${i === index ? 'is-visible' : 'is-hidden'} ${gradient ? 'theme-gradient' : ''}`}
          >
            {phrase}
          </b>
        ))}
      </span>
    </span>
  )
}
