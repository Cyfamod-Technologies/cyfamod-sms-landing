import { ArrowUpRight, Briefcase, CalendarDays, ClipboardCheck, Database, GraduationCap, LayoutDashboard, Search, Settings, Share2, ShieldCheck, Star, UserRound, UsersRound } from 'lucide-react'
import { SiteFooter, SiteHeader } from '@/components/site-shell'
import { RotatingHeadline } from '@/components/rotating-headline'
import { Reveal } from '@/components/reveal'

const assets = {
  staffDashboard: '/assets/staff-dashboard.png',
  staffStudents: '/assets/staff-students.png',
  staffResults: '/assets/staff-results.png',
  studentResults: '/assets/student-results.png',
  staffIcon: '/assets/staff-app-icon.png',
  studentIcon: '/assets/student-app-icon.png',
  playstoreStaff: '/assets/playstore-staff-proof.png',
  playstoreStudent: '/assets/playstore-student-proof.png',
}

const lifestyle = {
  clutteredDesk: '/assets/lifestyle/cluttered-desk.png',
  schoolHallway: '/assets/lifestyle/school-hallway.png',
  referralAgent: '/assets/lifestyle/referral-agent.png',
  corporateMarketer: '/assets/lifestyle/corporate-marketer.png',
  teacherUsingApp: '/assets/lifestyle/teacher-using-app.png',
}

const stakeholders = {
  principalMale: '/assets/stakeholders/principal-male.png',
  principalFemale: '/assets/stakeholders/principal-female.png',
  teacherFemale: '/assets/stakeholders/teacher-female.png',
  parentMother: '/assets/stakeholders/parent-mother.png',
  studentMale: '/assets/stakeholders/student-male.png',
}

const testimonialsRow1 = [
  {
    name: 'Dr. Adebayo Oluwaseun',
    role: 'School Principal • Lagos',
    avatar: '/assets/testimonials/dr-adebayo.png',
    quote: 'From fee management to broadsheets, everything is automated. It handles all our campuses seamlessly.',
  },
  {
    name: 'Mrs. Ngozi Adekunle',
    role: 'Vice Principal (Academics) • Abuja',
    avatar: '/assets/testimonials/mrs-ngozi.png',
    quote: 'Auto-calculated positions and instant broadsheets cut our end-of-term grading from two weeks to one afternoon.',
  },
  {
    name: 'Emeka Nwosu',
    role: 'Mathematics & Science Lead • Port Harcourt',
    avatar: '/assets/testimonials/emeka-nwosu.png',
    quote: "Daily attendance and test score entry take seconds. It's the most intuitive tool I've used in the classroom.",
  },
  {
    name: 'Chidi Okafor',
    role: 'Senior Physics Teacher • Ibadan',
    avatar: '/assets/testimonials/chidi-okafor.png',
    quote: 'Publishing CBT exams and grading hundreds of student answers is now instant. Zero exam leakages, zero marking stress.',
  },
]

const testimonialsRow2 = [
  {
    name: 'Mrs. Funmi Balogun',
    role: 'Parent & PTA Executive • Lekki',
    avatar: '/assets/testimonials/parent-1.png',
    quote: "Checking terminal results, fee receipts, and daily attendance on the parent portal is seamless. Total peace of mind.",
  },
  {
    name: 'Tobi Adeyemi',
    role: 'SS3 Student • Valedictorian',
    avatar: '/assets/testimonials/student-2.png',
    quote: 'Taking practice CBT exams on the student app prepared me for WAEC and JAMB. The interface is clean and super fast.',
  },
  {
    name: 'Alhaji Ibrahim Danladi',
    role: 'Proprietor & Board Chair • Kano',
    avatar: '/assets/testimonials/dr-adebayo.png',
    quote: 'Consolidating school finances, student records, and staff payroll gave our board total operational transparency.',
  },
  {
    name: 'Grace Kalu',
    role: 'Examination Officer • Enugu',
    avatar: '/assets/testimonials/mrs-ngozi.png',
    quote: 'Bulk result sheet generation and automated broadsheet compiling eliminated term-end errors completely.',
  },
]

const testimonialRotatingPhrases = [
  'Connected School Portals.',
  'Fast Term Reports.',
  'Paperless Student Admissions.',
  'Instant Parent Updates.',
  'Stress-Free CBT Testing.',
  'Instant Result Notifications.',
  'Unified School Operations.',
]

const Arrow = () => <ArrowUpRight aria-hidden="true" size={16} />
const iconMap = { administration: Database, attendance: UsersRound, results: ClipboardCheck, assessments: GraduationCap }

type Workflow = { key: keyof typeof iconMap; title: string; description: string; rows: string[] }
const workflows: Workflow[] = [
  { key: 'administration', title: 'Administration', description: 'Set up the structure of the school once and keep daily records organised.', rows: ['Student biodata, admissions, classes, and sessions', 'Staff records, subjects, and class assignments'] },
  { key: 'attendance', title: 'Attendance', description: 'Record presence quickly and give school leaders better visibility into daily participation.', rows: ['Student attendance by class', 'Staff attendance and attendance reports'] },
  { key: 'results', title: 'Results & Reports', description: 'Move from raw scores to useful academic reports without rebuilding spreadsheets every term.', rows: ['Score entry, grading, and result checking', 'Bulk result printing and performance reports'] },
  { key: 'assessments', title: 'CBT & Assessments', description: 'Support digital tests and assessment workflows from the same school platform.', rows: ['Computer Based Testing setup and quiz links', 'Score review, approval, and academic record syncing'] },
]

function Button({ children, href = '/contact', light = false }: { children: React.ReactNode; href?: string; light?: boolean }) { return <a className={`button ${light ? 'button-light' : 'button-primary'}`} href={href}>{children}<Arrow /></a> }
function Header() { return <SiteHeader /> }

function DashboardPreview() {
  return (
    <div className="dashboard-preview" aria-label="School administrator dashboard preview">
      <aside className="dashboard-sidebar">
        <div className="school-badge"><span>DIS</span><small>school</small></div>
        <button aria-label="Open dashboard menu">☰</button>
        <nav>
          <a className="active" href="#platform"><LayoutDashboard size={14} aria-hidden="true" /> <span>Dashboard</span></a>
          <a href="#platform"><Database size={14} aria-hidden="true" /> <span>Management</span></a>
          <a href="#platform"><UsersRound size={14} aria-hidden="true" /> <span>Users</span></a>
          <a href="#platform"><ShieldCheck size={14} aria-hidden="true" /> <span>Assign</span></a>
          <a href="#platform"><CalendarDays size={14} aria-hidden="true" /> <span>Attendance</span></a>
          <a href="#platform"><ClipboardCheck size={14} aria-hidden="true" /> <span>CBT</span></a>
          <a href="/contact"><Settings size={14} aria-hidden="true" /> <span>Settings</span></a>
        </nav>
      </aside>
      <div className="dashboard-main">
        <div className="dashboard-topbar">
          <span className="search-line"><Search size={16} aria-hidden="true" /> Find Something . . .</span>
          <span className="admin-chip"><strong>School Administrator</strong><small>admin</small></span>
        </div>
        <div className="dashboard-content">
          <p className="dashboard-kicker">Home <span>›</span> Admin</p>
          <h2>Admin Dashboard</h2>
          <div className="metric-grid">
            <article><span className="metric-icon"><CalendarDays size={23} /></span><span><small>2024/2025 Students</small><strong>188</strong><a href="#platform">View students →</a></span></article>
            <article><span className="metric-icon"><UsersRound size={23} /></span><span><small>Total Students</small><strong>206</strong><a href="#platform">View students →</a></span></article>
            <article><span className="metric-icon"><GraduationCap size={23} /></span><span><small>Teachers</small><strong>15</strong><a href="#platform">View staff →</a></span></article>
            <article><span className="metric-icon"><UserRound size={23} /></span><span><small>Parents</small><strong>27</strong><a href="#platform">View parents →</a></span></article>
          </div>
          <div className="dashboard-lower">
            <article><h3>Quick stats</h3><p>See the counts that keep your school operations moving: students, teachers, parents, sessions, and performance.</p></article>
            <article><h3>Tips</h3><p>Add new students, onboard teachers, invite parents, or manage school settings from the relevant workspace.</p></article>
          </div>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero section hero-with-bg" id="top">
      <div className="hero-copy">
        <div className="hero-top">
          <p className="eyebrow">CYFAMOD SMS <span>•</span> SCHOOL MANAGEMENT SYSTEM</p>
          <h1>Control school operations<br /><em className="gradient-text">from one dashboard.</em></h1>
          <p className="hero-rotator"><RotatingHeadline /></p>
        </div>

        <div className="hero-bottom">
          <div className="hero-actions">
            <Button>Book a product demo</Button>
            <a className="text-link" href="#platform">View platform capabilities <Arrow /></a>
          </div>

          {/* Social Proof Avatar Cluster */}
          <div className="hero-social-proof">
            <div className="avatar-cluster">
              <img src={stakeholders.principalMale} alt="School Principal" />
              <img src={stakeholders.teacherFemale} alt="Teacher" />
              <img src={stakeholders.parentMother} alt="Parent" />
              <img src={stakeholders.studentMale} alt="Student" />
            </div>
            <div className="avatar-proof-text">
              <div className="stars-mini">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} fill="currentColor" stroke="none" />
                ))}
              </div>
              <span><strong>5.0 Rating</strong> • Trusted by administrators, teachers & parents</span>
            </div>
          </div>

          <div className="hero-proof">
            <strong>Admin dashboard first. Mobile apps connected.</strong>
            <span>A complete school management system for administrators, staff, students, and parents.</span>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <DashboardPreview />
      </div>
    </section>
  )
}

function WorkflowCard({ workflow }: { workflow: Workflow }) {
  const Icon = iconMap[workflow.key]
  return (
    <article className="workflow-card">
      <span className="workflow-icon"><Icon size={44} strokeWidth={1.4} /></span>
      <span className="workflow-label">{workflow.key}</span>
      <h3>{workflow.title}</h3>
      <p className="workflow-description">{workflow.description}</p>
      <ul>{workflow.rows.map(row => <li key={row}><ClipboardCheck size={15} />{row}</li>)}</ul>
      <a href="/contact">Learn more <Arrow /></a>
    </article>
  )
}

function Platform() {
  return (
    <section className="platform section" id="platform">
      <div className="section-heading">
        <div>
          <div className="section-kicker">THE CYFAMOD SMS PLATFORM</div>
          <h2>Run your school with clarity. <em>Everything in one place.</em></h2>
        </div>
      </div>

      <div className="workflow-grid">
        {workflows.map(workflow => <WorkflowCard key={workflow.key} workflow={workflow} />)}
      </div>

      <div className="cbt-feature">
        <div>
          <span className="section-kicker">FOR MODERN ASSESSMENT</span>
          <h3>Computer Based Testing, without the complexity.</h3>
          <p>Load assessments, manage candidate context, and keep academic records moving in one trusted workflow.</p>
          <a className="button button-secondary" href="/contact">Talk to us about CBT <Arrow /></a>
        </div>
        <div className="cbt-screen">
          <img src={assets.staffResults} alt="Cyfamod staff result entry screen for selecting a class and subject" />
        </div>
      </div>
    </section>
  )
}

function Apps() {
  return (
    <section className="apps section" id="apps">
      <div className="apps-heading">
        <div>
          <div className="section-kicker">LIVE ON GOOGLE PLAY</div>
          <h2>School tools that<br /><em>move with you.</em></h2>
        </div>
      </div>

      {/* Lifestyle context banner */}
      <div className="apps-lifestyle-banner">
        <img src={lifestyle.teacherUsingApp} alt="Nigerian teacher using school management app on her phone in a classroom with students" />
        <div className="apps-lifestyle-overlay">
          <span>Used daily by teachers, students, and parents across Nigerian schools.</span>
        </div>
      </div>

      <div className="app-showcase">
        <article className="app-card app-card-staff">
          <div className="app-meta">
            <img src={assets.staffIcon} alt="Cyfamod SMS Staff app logo" />
            <div>
              <span>CYFAMOD-SMS</span>
              <h3>Staff app</h3>
            </div>
          </div>
          <p>Classes, students, and activity in one staff app.</p>
          <img className="app-screen" src={assets.staffStudents} alt="Cyfamod staff app student search and filter screen" />
        </article>
        <article className="app-card app-card-student">
          <div className="app-meta">
            <img src={assets.studentIcon} alt="Cyfamod SMS Student app logo" />
            <div>
              <span>CYFAMOD-SMS</span>
              <h3>Student app</h3>
            </div>
          </div>
          <p>School information, results, and updates in one app.</p>
          <img className="app-screen" src={assets.studentResults} alt="Cyfamod student app results download screen" />
        </article>
      </div>
      <div className="play-store-evidence">
        <article>
          <div className="play-store-proof-heading">
            <div>
              <strong>Cyfamod SMS Staff</strong>
              <span>Google Play listing evidence</span>
            </div>
          </div>
          <img className="play-store-proof-image" src={assets.playstoreStaff} alt="Google Play listing for Cyfamod SMS Staff" />
        </article>
        <article>
          <div className="play-store-proof-heading">
            <div>
              <strong>Cyfamod SMS Student</strong>
              <span>Google Play listing evidence</span>
            </div>
          </div>
          <img className="play-store-proof-image" src={assets.playstoreStudent} alt="Google Play listing for Cyfamod SMS Student" />
        </article>
      </div>
    </section>
  )
}

function Partners() {
  return (
    <section className="partners section" id="partners">
      <div className="partner-intro">
        <div className="section-kicker">CYFAMOD PARTNER PROGRAMME</div>
        <h2>Refer schools.<br /><em>Earn commission.</em></h2>
        <p>Cyfamod SMS is open to approved agents and corporate marketers who can bring the platform to school decision-makers. Every track is built around clear introductions, tracked conversions, and programme terms.</p>
        <div className="partner-stats">
          <div><strong>2</strong><span>Partner tracks</span></div>
          <div><strong>100%</strong><span>Conversions tracked</span></div>
          <div><strong>0</strong><span>Setup fees for agents</span></div>
        </div>
        <Button href="/partners" light>Explore partner tracks</Button>
      </div>
      <div className="partner-tracks">
        <article>
          <div className="partner-card-image">
            <img src={lifestyle.referralAgent} alt="Cyfamod referral agent standing outside a Nigerian school gate with a tablet" />
          </div>
          <span className="track-label">TRACK A</span>
          <h3>Referral agent</h3>
          <p>Share a referral code or link with school owners and administrators. Eligible school payments can qualify for percentage-based commission.</p>
          <a href="/contact">Become a referral agent <Arrow /></a>
        </article>
        <article>
          <div className="partner-card-image">
            <img src={lifestyle.corporateMarketer} alt="Corporate marketer shaking hands with a school proprietor in an office" />
          </div>
          <span className="track-label">TRACK B</span>
          <h3>Corporate marketer</h3>
          <p>Find schools, arrange demos, manage follow-up, and support conversion into paying school customers.</p>
          <a href="/contact">Apply as a corporate marketer <Arrow /></a>
        </article>
      </div>
    </section>
  )
}

function SchoolMarquee() {
  return (
    <section className="school-proof" aria-label="Cyfamod SMS school network">
      <div className="school-proof-heading">
        <span className="section-kicker">SCHOOL NETWORK</span>
        <h2>Trusted by schools</h2>
      </div>
      <div className="school-marquee">
        <div className="school-marquee-inner">
          <div className="marquee-track">
            {[1, 2, 3].map(copy => (
              <div className="marquee-group" key={copy}>
                {['abssmx.com.ng','al-hawa.com.ng','an-nur.com.ng','elbethelacademy.com','gdsc.com.ng','hamzawiyya.com.ng','hill-top.com.ng','querencia.com.ng','highpointschools.com','ellaschool.com'].map(name => (
                  <strong key={`${copy}-${name}`}>{name}</strong>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return <SiteFooter />
}

function SingleTestimonialCard({ t, gradientClass = 'bg-theme-gradient-odd' }: { t: typeof testimonialsRow1[0]; gradientClass?: string }) {
  return (
    <div className={`single-column-20 ${gradientClass}`}>
      <div className="rbt-testimonial-box style-2">
        <div className="inner">
          <div className="testimonial-stars" aria-label="5 out of 5 stars">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={15} fill="currentColor" stroke="none" />
            ))}
          </div>
          <div className="description">
            <p className="subtitle-3">"{t.quote}"</p>
            <div className="clint-info-wrapper">
              <div className="thumb">
                <img src={t.avatar} alt={t.name} />
              </div>
              <div className="client-info">
                <h5 className="title">{t.name}</h5>
                <span className="role">{t.role}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function TestimonialsSection() {
  return (
    <div className="rbt-splash-testimonial-area position-relative" id="testimonials">
      <div className="wrapper">
        <div className="section-title text-center">
          <span className="subtitle bg-primary-opacity">A FEW WORDS FROM OUR COMMUNITY</span>
          <h2 className="title">
            Hear From Educators, Parents & Students About
            <span className="testimonials-rotator-line">
              <RotatingHeadline phrases={testimonialRotatingPhrases} gradient />
            </span>
          </h2>
        </div>
      </div>

      <div className="splash-testimonial-all-wrapper pb--60">
        {/* Row 1: Right-to-Left */}
        <div className="scroll-animation-wrapper no-overlay mt--50">
          <div className="scroll-animation scroll-right-left">
            {testimonialsRow1.map((t, idx) => (
              <SingleTestimonialCard key={`r1-a-${idx}`} t={t} gradientClass="bg-theme-gradient-odd" />
            ))}
            {testimonialsRow1.map((t, idx) => (
              <SingleTestimonialCard key={`r1-b-${idx}`} t={t} gradientClass="bg-theme-gradient-odd" />
            ))}
          </div>
        </div>

        {/* Row 2: Left-to-Right */}
        <div className="scroll-animation-wrapper no-overlay mt--30">
          <div className="scroll-animation scroll-left-right">
            {testimonialsRow2.map((t, idx) => (
              <SingleTestimonialCard key={`r2-a-${idx}`} t={t} gradientClass="bg-theme-gradient-even" />
            ))}
            {testimonialsRow2.map((t, idx) => (
              <SingleTestimonialCard key={`r2-b-${idx}`} t={t} gradientClass="bg-theme-gradient-even" />
            ))}
          </div>
        </div>

        {/* Row 3: Right-to-Left */}
        <div className="scroll-animation-wrapper no-overlay mt--50">
          <div className="scroll-animation scroll-right-left">
            {testimonialsRow1.map((t, idx) => (
              <SingleTestimonialCard key={`r3-a-${idx}`} t={t} gradientClass="bg-theme-gradient-odd" />
            ))}
            {testimonialsRow1.map((t, idx) => (
              <SingleTestimonialCard key={`r3-b-${idx}`} t={t} gradientClass="bg-theme-gradient-odd" />
            ))}
          </div>
        </div>

        {/* Semi-Opaque Center Overlay CTA (Exact HiStudy Class Architecture) */}
        <div className="read-more-review">
          <div className="section-title text-center mb--30">
            <h5 className="title color-white">
              Verified Reviews From <br /> School Stakeholders
            </h5>
          </div>
          <a
            className="rbt-btn btn-gradient hover-icon-reverse btn-xxl"
            href="/contact"
            aria-label="Explore School Case Studies"
          >
            <span className="icon-reverse-wrapper">
              <span className="btn-text"> ⭐ Explore School Case Studies</span>
              <span className="btn-icon">↗</span>
              <span className="btn-icon">↗</span>
            </span>
          </a>
          <div className="section-title text-center mt--20">
            <h5 className="title rbt-title-style-2 color-white">
              4.95 / 5.0 Rating <br /> based on <strong className="color-white">100+</strong> school stakeholder reviews.
            </h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <section className="trust-strip">
        <div className="section trust-inner">
          <span className="trust-label">One connected school system</span>
          <span>ADMINISTRATION</span>
          <span>STAFF</span>
          <span>STUDENTS</span>
          <span>RESULTS</span>
          <span>CBT</span>
        </div>
      </section>
      <Reveal>
        <section className="problem section">
          <div className="section-kicker">THE EVERYDAY PROBLEM</div>
          <div className="problem-grid">
            <div className="problem-left">
              <h2>Replace scattered records with <em>centralised school control.</em></h2>
              <p>Many schools still manage records, attendance, payments, results, and parent communication across notebooks, spreadsheets, WhatsApp messages, and manual reports.</p>
              <p>Cyfamod SMS brings those daily operations into one organised school management system so leaders can work from accurate information.</p>
              <a className="text-link" href="#platform">See what is connected <Arrow /></a>
            </div>
            <div className="problem-image">
              <img src={lifestyle.clutteredDesk} alt="Cluttered Nigerian school administrator desk with paper registers, handwritten report cards, a Nokia phone, and a calculator" />
              <span className="problem-image-caption">The reality for most schools today — scattered records, manual processes, and zero visibility.</span>
            </div>
          </div>
        </section>
      </Reveal>
      <Reveal><Platform /></Reveal>
      <Reveal><Apps /></Reveal>
      <Reveal><Partners /></Reveal>
      <Reveal><TestimonialsSection /></Reveal>
      <Reveal><SchoolMarquee /></Reveal>
      <Reveal>
        <section className="final-cta section" id="contact">
          <div>
            <div className="section-kicker">BOOK A DEMO</div>
            <h2>Manage school operations<br /><em>from one platform.</em></h2>
            <p>See the admin dashboard, staff app, student app, CBT, results, attendance, and reports working together in one connected system.</p>
          </div>
          <div className="cta-panel">
            <span>Request a guided product walkthrough.</span>
            <Button>Book a product demo</Button>
            <small>Built for Nigerian school operations.</small>
          </div>
        </section>
      </Reveal>
      <Footer />
    </main>
  )
}
