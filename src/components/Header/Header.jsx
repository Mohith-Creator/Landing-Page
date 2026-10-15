import { useState, useEffect } from 'react'
import { Menu, X, Hexagon } from 'lucide-react'
import Button from '../Button/Button'
import './Header.css'

export default function Header({ onStartTrial }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Solutions', href: '#showcase' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Resources', href: '#faq' },
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="#" className="header-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <Hexagon size={28} strokeWidth={2.5} className="logo-icon" />
          <span className="logo-text">FlowPilot</span>
        </a>

        <nav className={`header-nav ${mobileOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>{link.label}</a>
              </li>
            ))}
          </ul>
          <div className="nav-actions">
            <a href="#" className="nav-login" onClick={(e) => e.preventDefault()}>Log in</a>
            <Button variant="primary" size="sm" onClick={() => { setMobileOpen(false); onStartTrial(); }}>
              Start Free Trial
            </Button>
          </div>
        </nav>

        <button
          className="mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  )
}
