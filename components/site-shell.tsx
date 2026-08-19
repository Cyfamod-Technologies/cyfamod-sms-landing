import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'

// spinner-logo.png is a full wordmark lockup - the icon AND the
// "cyfamod-sms / school management system" text already baked into one
// image, meant to stand alone (see PlatformSpinner below). Using it in
// BrandLockup - squeezed into a small square, cropping out its own
// baked-in text - while *also* rendering that same text live in HTML
// next to it produced a visible "logo behind a logo" duplicate. The
// header/footer need an icon-only mark instead, paired with live text.
const brandMark = '/assets/cyfamod-sms-mark-updated.png'
const platformLogo = '/assets/spinner-logo.png'

function BrandLockup({ footer = false }: { footer?: boolean }) {
  return (
    <>
      <img src={brandMark} alt="" />
      <span className={footer ? 'brand-copy brand-copy-footer' : 'brand-copy'}>
        <strong>cyfamod-sms</strong>
        <small>school management system</small>
      </span>
    </>
  )
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" aria-label="Cyfamod SMS home" className="site-brand site-brand-wide">
        <BrandLockup />
      </Link>
      <nav aria-label="Primary navigation">
        <Link href="/#platform">Platform</Link>
        <Link href="/mobile-apps">Mobile apps</Link>
        <div className="nav-dropdown">
          <Link href="/partners">Partners</Link>
          <div className="nav-dropdown-menu" aria-label="Partner programme links">
            <Link href="/partners">Partner programme</Link>
            <Link href="/referrals">Referral agents</Link>
            <Link href="/partners/corporate-marketer">Corporate marketers</Link>
          </div>
        </div>
        <Link href="/contact">Contact</Link>
      </nav>
      <div className="header-actions">
        <ThemeToggle />
        <Link className="header-cta" href="/contact">Book a demo <span aria-hidden="true">↗</span></Link>
      </div>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand-block"><Link href="/" aria-label="Cyfamod SMS home" className="site-brand site-brand-wide footer-logo-only">
          <BrandLockup footer />
        </Link></div>
        <div className="footer-links">
          <Link href="/#platform">Platform</Link>
          <Link href="/mobile-apps">Mobile apps</Link>
          <Link href="/partners">Partners</Link>
          <Link href="/referrals">Referrals</Link>
          <Link href="/contact">Email us</Link>
        </div>
        <span className="footer-copy"><span>© 2026 Cyfamod SMS</span><span>Product of <a href="https://cyfamod.com" target="_blank" rel="noreferrer">Cyfamod Technologies</a></span></span>
      </div>
    </footer>
  )
}

export function PlatformSpinner() {
  return <div className="platform-spinner" aria-label="Loading Cyfamod SMS" role="status"><img src={platformLogo} alt="" /></div>
}
