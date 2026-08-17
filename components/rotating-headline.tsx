'use client'

import { useEffect, useState } from 'react'

// Faithful port of HiStudy's cd-headline "slide" rotator (see
// notes/ideas for landing/histudy.pixcelsthemes.com/livepreview/histudy/assets/js/vendor/text-type.js)
// as a small React component instead of the original jQuery plugin: one
// phrase gets `is-visible` at a time, cycling on an interval, with a
// CSS slide+fade transition doing the actual animation.
const phrases = [
  'Automate Administration.',
  'Track Attendance.',
  'Generate Results.',
  'Export Reports.',
  'Run CBT.',
  'Power Continuous Assessment Tests.',
  'Simplify Assessments.',
]

const ROTATE_MS = 2600

export function RotatingHeadline() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    // Respect prefers-reduced-motion by not rotating at all - the first
    // phrase just stays put instead of cycling every 2.6s.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % phrases.length)
    }, ROTATE_MS)
    return () => clearInterval(id)
  }, [])

  return (
    <span className="cd-headline-slide" aria-live="polite">
      <span className="cd-words-wrapper">
        {phrases.map((phrase, i) => (
          <b key={phrase} className={i === index ? 'is-visible' : 'is-hidden'}>
            {phrase}
          </b>
        ))}
      </span>
    </span>
  )
}
