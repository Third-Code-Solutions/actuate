import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Menu, X, ChevronDown } from 'lucide-react'
import { SERVICES } from '../data/content'
import Link from './Link'

const links = [['/', 'Home'], ['/about', 'About'], ['/services', 'Services'], ['/our-works', 'Our Works'], ['/blog', 'Blog']]
const logo = '/img/Abi-Horizontal-Stack-Full-Color-RGB-1064px@72ppi.png'
export default function Nav({ pathname }) {
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const dialog = useRef(null)
  const toggle = useRef(null)
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 32)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])
  const closeMenu = () => dialog.current?.close()
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="header-inner">
        <Link href="/" className="logo" aria-label="Actuate Builders home"><img src={logo} alt="Actuate Builders Incorporated" width="213" height="36" /></Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([href, label]) => href === '/services' ? <div className="nav-group" key={href} onKeyDown={event => { if (event.key === 'Escape') { setServicesOpen(false); toggle.current?.focus() } }}>
            <Link href={href} aria-current={pathname.startsWith(href) ? 'page' : undefined}>{label}</Link>
            <button ref={toggle} className="submenu-toggle" aria-label="Service menu" aria-expanded={servicesOpen} aria-controls="service-menu" onClick={() => setServicesOpen(!servicesOpen)}><ChevronDown size={13} /></button>
            {servicesOpen && <div className="nav-dropdown" id="service-menu">{SERVICES.map(service => <Link key={service.slug} href={`/services/${service.slug}`} onClick={() => setServicesOpen(false)}>{service.title}<ArrowUpRight size={14} /></Link>)}</div>}
          </div> : <Link key={href} href={href} aria-current={pathname === href ? 'page' : undefined}>{label}</Link>)}
        </nav>
        <Link href="/contact" className="header-cta">Let’s talk <ArrowUpRight size={16} /></Link>
        <button className="menu-toggle" aria-label="Open menu" onClick={() => dialog.current.showModal()}><Menu /></button>
      </div>
    </header>
    <dialog ref={dialog} className="mobile-menu" aria-label="Main navigation menu">
      <div className="menu-top"><Link href="/" className="logo" onClick={closeMenu}><img src={logo} alt="Actuate Builders Incorporated" width="213" height="36" /></Link><button className="icon-button" aria-label="Close menu" onClick={closeMenu}><X /></button></div>
      <nav aria-label="Mobile navigation">{[...links, ['/careers', 'Careers'], ['/contact', 'Contact']].map(([href,label], i) => <Link key={href} href={href} onClick={closeMenu} aria-current={pathname === href ? 'page' : undefined}><span>{String(i+1).padStart(2,'0')}</span>{label}<ArrowUpRight size={20} /></Link>)}</nav>
      <p>Built with purpose. Since 2010.</p>
    </dialog>
  </>
}
