
import { SiteFooter, SiteHeader } from '@/components/site-shell'

const steps = [
  { n: '01', title: 'Apply', body: 'Submit your interest as a referral agent or corporate marketer through the contact form.' },
  { n: '02', title: 'Get approved', body: 'The Cyfamod team reviews your application and confirms which track fits your access to schools.' },
  { n: '03', title: 'Introduce schools', body: 'Share your referral code and link, or run demos and follow-up directly with school decision-makers.' },
  { n: '04', title: 'Earn on conversion', body: 'When an introduced school becomes a paying customer, the conversion is tracked back to you for commission.' },
]

const faqs = [
  { q: 'What counts as a qualifying conversion?', a: 'A school you introduced signs up and becomes an active, paying Cyfamod SMS customer. The exact qualification rules are confirmed when your application is approved.' },
  { q: 'Do I need to be a registered business?', a: 'No. Both tracks are open to individuals as well as organisations — what matters is genuine access to school owners and administrators.' },
  { q: 'How is commission paid?', a: 'Commission is percentage-based and tied to eligible school payments. Exact rates and payout timing are set out in your programme terms after approval.' },
  { q: 'Can I do both tracks at once?', a: 'Most partners start on one track. If you have both a referral network and capacity for active sales work, raise it when you apply.' },
]

export default function PartnersPage() {
  return (
    <main><SiteHeader />
      <section className="subpage partners-subpage">
      <div className="subpage-inner">
        <p className="eyebrow">CYFAMOD PARTNER PROGRAMME</p>
        <h1>Partner with Cyfamod SMS. <em>Earn from school adoption.</em></h1>
        <p className="hero-text">Full programme details: how the two tracks work, what happens after you apply, and how conversions are tracked and paid.</p>
        <div className="subpage-grid">
          <article>
            <div className="subpage-card-image"><img src="/assets/lifestyle/referral-agent.png" alt="Cyfamod referral agent standing outside a Nigerian school gate with a tablet" /></div>
            <span className="section-kicker">REFERRAL AGENT · BEST FOR NETWORKS</span><h2>Refer schools through tracked links.</h2><p>Introduce school owners and administrators with an approved code, then earn when eligible referred schools become paying customers.</p><a className="button button-primary" href="/contact">Become a referral agent <span aria-hidden="true">↗</span></a>
          </article>
          <article>
            <div className="subpage-card-image"><img src="/assets/lifestyle/corporate-marketer.png" alt="Corporate marketer shaking hands with a school proprietor in an office" /></div>
            <span className="section-kicker">CORPORATE MARKETER · BEST FOR SALES</span><h2>Convert schools through active sales.</h2><p>Find school owners and administrators, arrange demos, follow up, then earn when qualified schools become paying customers.</p><a className="button button-secondary" href="/contact">Apply as a corporate marketer <span aria-hidden="true">↗</span></a>
          </article>
        </div>

        <div className="step-grid-wrap">
          <span className="section-kicker">HOW IT WORKS</span>
          <h2>From application to <em>payout in four steps.</em></h2>
          <div className="step-grid">
            {steps.map(s => (
              <div className="step-card" key={s.n}>
                <span className="step-number">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="partner-faq">
          <span className="section-kicker">FREQUENTLY ASKED</span>
          <h2>Programme questions, <em>answered.</em></h2>
          <div className="faq-grid">
            {faqs.map(f => (
              <div key={f.q}>
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="marketer-cta">
          <h2>Ready to bring Cyfamod SMS to schools you know?</h2>
          <p>Tell us which track fits you and we'll follow up on eligibility and next steps.</p>
          <a href="/contact">Start your application <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      </section><SiteFooter />
    </main>
  )
}
