
import { SiteFooter, SiteHeader } from '@/components/site-shell'

export default function PartnersPage() {
  return (
    <main><SiteHeader />
      <section className="subpage">
      <div className="subpage-inner">
        <p className="eyebrow">CYFAMOD PARTNER PROGRAMME</p>
        <h1>Partner with Cyfamod SMS. <em>Earn from school adoption.</em></h1>
        <p className="hero-text">Introduce Cyfamod SMS to school decision-makers through a referral or corporate marketing track.</p>
        <div className="subpage-grid">
          <article><span className="section-kicker">REFERRAL AGENT</span><h2>Refer schools through tracked links.</h2><p>Introduce school owners and administrators with an approved code, then earn when eligible referred schools become paying customers.</p><a className="button button-primary" href="/contact">Become a referral agent <span aria-hidden="true">↗</span></a></article>
          <article><span className="section-kicker">CORPORATE MARKETER</span><h2>Convert schools through active sales.</h2><p>Find school owners and administrators, arrange demos, follow up, then earn when qualified schools become paying customers.</p><a className="button button-secondary" href="/contact">Apply as a corporate marketer <span aria-hidden="true">↗</span></a></article>
        </div>
      </div>
      </section><SiteFooter />
    </main>
  )
}
