import { SiteFooter, SiteHeader } from '@/components/site-shell'

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <section className="contact-page">
        <div className="contact-inner">
          <div className="contact-copy">
            <p className="section-kicker contact-kicker">CONTACT CYFAMOD SMS</p>
            <h1>Ready to move your school operations into <em>one connected system?</em></h1>
            <p className="hero-text">Book a demo, ask about the mobile apps, apply as a referral agent, or start a school onboarding conversation with the Cyfamod team.</p>
            <div className="contact-proof">
              <span>Admin dashboard</span>
              <span>Staff app</span>
              <span>Student app</span>
              <span>CBT</span>
              <span>Referral programme</span>
            </div>
          </div>
          <form className="contact-form" action="https://formspree.io/f/xaewbkvv" method="POST">
            <label>
              <span>What do you need? <strong aria-hidden="true">*</strong></span>
              <select name="inquiry_type" required defaultValue="">
                <option value="" disabled>Select an inquiry type</option>
                <option value="Book a product demo">Book a product demo</option>
                <option value="Sign up my school">Sign up my school</option>
                <option value="Referral agent interest">Referral agent interest</option>
                <option value="Corporate marketer application">Corporate marketer application</option>
                <option value="Staff app walkthrough">Staff app walkthrough</option>
                <option value="Student app walkthrough">Student app walkthrough</option>
                <option value="CBT inquiry">CBT inquiry</option>
                <option value="General inquiry">General inquiry</option>
              </select>
            </label>
            <div className="form-grid">
              <label>
                <span>Full name <strong aria-hidden="true">*</strong></span>
                <input name="name" type="text" autoComplete="name" required />
              </label>
              <label>
                <span>Email address <strong aria-hidden="true">*</strong></span>
                <input name="email" type="email" autoComplete="email" required />
              </label>
            </div>
            <div className="form-grid">
              <label>
                <span>Phone number</span>
                <input name="phone" type="tel" autoComplete="tel" />
              </label>
              <label>
                <span>School / organisation</span>
                <input name="organisation" type="text" />
              </label>
            </div>
            <label>
              <span>Message <strong aria-hidden="true">*</strong></span>
              <textarea name="message" rows={5} placeholder="Tell us what you want to achieve with Cyfamod SMS." required />
            </label>
            <button className="button button-primary contact-submit" type="submit">Send inquiry <span aria-hidden="true">↗</span></button>
          </form>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
