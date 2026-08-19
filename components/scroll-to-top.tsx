'use client'

import { useEffect, useRef, useState } from 'react'

export function ScrollToTop() {
  const [isActive, setIsActive] = useState(false)
  const pathRef = useRef<SVGPathElement>(null)

  useEffect(() => {
    const path = pathRef.current
    if (!path) return

    const totalLength = path.getTotalLength()
    path.style.strokeDasharray = `${totalLength} ${totalLength}`
    path.style.strokeDashoffset = `${totalLength}`

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      
      if (scrollHeight > 0) {
        const offset = totalLength - (scrollTop * totalLength) / scrollHeight
        path.style.strokeDashoffset = `${offset}`
      }

      setIsActive(scrollTop > 50)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      type="button"
      className={`rbt-progress-parent ${isActive ? 'rbt-backto-top-active' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      <svg className="rbt-back-circle" width="100%" height="100%" viewBox="-1 -1 102 102" aria-hidden="true">
        <path ref={pathRef} d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
      <span className="rbt-progress-icon" aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </span>
    </button>
  )
}
