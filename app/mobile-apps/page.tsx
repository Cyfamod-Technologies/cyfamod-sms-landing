import { SiteFooter, SiteHeader } from '@/components/site-shell'

export default function MobileAppsPage() {
  return (
    <main><SiteHeader />
      <section className="subpage mobile-apps-page">
      <div className="subpage-inner">
        <p className="eyebrow">CYFAMOD SMS MOBILE APPS</p>
        <h1>Two mobile apps.<br /><em>One connected school platform.</em></h1>
        <p className="hero-text">Staff and students get focused mobile tools while the school stays managed from the central Cyfamod SMS platform.</p>
        <div className="mobile-app-stack">
          <article className="mobile-feature-card mobile-feature-staff">
            <div>
              <span className="section-kicker">STAFF APP</span>
              <h2>Put daily staff work in every teacher's hand.</h2>
              <p>Classes, students, attendance, results, and school activity stay connected to the central Cyfamod SMS platform.</p>
              <a className="button app-cta-button" href="/contact">Book a staff app walkthrough <span aria-hidden="true">↗</span></a>
            </div>
            <div className="phone-frame"><img src="/assets/sms-staff-feature-graphic.png" alt="Cyfamod SMS Staff app feature graphic" /></div>
          </article>
          <article className="mobile-feature-card mobile-feature-student">
            <div>
              <span className="section-kicker">STUDENT APP</span>
              <h2>Give students one place for school updates.</h2>
              <p>Results, school information, and academic updates stay easy to access from the same connected school system.</p>
              <a className="button app-cta-button" href="/contact">Book a student app walkthrough <span aria-hidden="true">↗</span></a>
            </div>
            <div className="phone-frame"><img src="/assets/sms-student-feature-graphic.png" alt="Cyfamod SMS Student app feature graphic" /></div>
          </article>
        </div>
      </div>
      </section><SiteFooter />
    </main>
  )
}
