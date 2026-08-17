'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FaqItem {
  question: string
  answer: string
}

const leftFaqs: FaqItem[] = [
  {
    question: 'What is Cyfamod SMS?',
    answer:
      'A complete school management system built specifically for Nigerian schools. It unifies administrative records, daily attendance, grade computing, result generation, and CBT into one connected web dashboard with dedicated mobile apps for staff and students.',
  },
  {
    question: 'Do I need to install anything on school computers?',
    answer:
      'No installation is required. School leaders and administrators access the complete platform securely through any web browser. Teachers and students can download their respective dedicated apps directly from Google Play.',
  },
  {
    question: 'What core workflows can an administrator manage?',
    answer:
      'Administrators manage student admissions, bio-data, academic sessions, staff subject allocation, real-time daily attendance, broadsheet publishing, and automated end-of-term student result generation.',
  },
]

const rightFaqs: FaqItem[] = [
  {
    question: 'How does the Computer-Based Testing (CBT) work?',
    answer:
      'Teachers can easily configure question banks, time limits, and assessment parameters. Students take exams on web or mobile devices, with instant auto-grading that syncs directly into termly report sheets.',
  },
  {
    question: 'Can agents or marketers partner with Cyfamod SMS?',
    answer:
      'Yes. We provide structured tracks for Referral Agents who introduce schools via unique referral links/codes, and Corporate Marketers who handle end-to-end demo onboarding and account conversions.',
  },
  {
    question: 'How do we get started or request a walkthrough?',
    answer:
      'Simply click "Book a product demo" to schedule a tailored walkthrough with our technical team. We will guide your leadership through the live system and help structure your school setup.',
  },
]

const avatars = [
  '/assets/faq/avatar-1.png',
  '/assets/faq/avatar-2.png',
  '/assets/faq/avatar-3.png',
  '/assets/faq/avatar-4.png',
  '/assets/faq/avatar-5.png',
  '/assets/faq/avatar-6.png',
  '/assets/faq/avatar-7.png',
  '/assets/faq/avatar-8.png',
  '/assets/faq/avatar-9.png',
  '/assets/faq/avatar-10.png',
]

function FaqColumn({
  items,
  openIndex,
  onToggle,
  columnOffset,
}: {
  items: FaqItem[]
  openIndex: number | null
  onToggle: (index: number) => void
  columnOffset: number
}) {
  return (
    <div className="faq-column">
      {items.map((faq, idx) => {
        const globalIdx = columnOffset + idx
        const isOpen = openIndex === globalIdx
        return (
          <div className={`faq-item ${isOpen ? 'faq-item-open' : ''}`} key={faq.question}>
            <button
              type="button"
              className="faq-trigger"
              onClick={() => onToggle(globalIdx)}
              aria-expanded={isOpen}
            >
              <span>{faq.question}</span>
              <span className="faq-icon-wrap">
                <ChevronDown size={18} className={`faq-chevron ${isOpen ? 'faq-chevron-open' : ''}`} />
              </span>
            </button>
            {isOpen && (
              <div className="faq-content">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="faq section" id="faq">
      <div className="faq-header">
        <div className="section-kicker">FREQUENTLY ASKED QUESTIONS</div>
        <div className="avatar-cluster" aria-hidden="true">
          {avatars.map((src, i) => (
            <img key={i} src={src} alt="" className="avatar-cluster-img" />
          ))}
        </div>
        <h2>Everything you need to know <em>about the platform.</em></h2>
      </div>

      <div className="faq-2col-grid">
        <FaqColumn
          items={leftFaqs}
          openIndex={openIndex}
          onToggle={handleToggle}
          columnOffset={0}
        />
        <FaqColumn
          items={rightFaqs}
          openIndex={openIndex}
          onToggle={handleToggle}
          columnOffset={leftFaqs.length}
        />
      </div>
    </section>
  )
}

