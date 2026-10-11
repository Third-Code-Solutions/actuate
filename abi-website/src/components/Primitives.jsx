import { ArrowUpRight } from 'lucide-react'
import Link from './Link'
import ScrollReveal from './ScrollReveal'

export function Picture({ src, alt, className = '', ...props }) {
  return <img src={src} alt={alt} className={className} loading="lazy" decoding="async" {...props} />
}
export function Button({ href, children, variant = 'primary', className = '', ...props }) {
  return <Link href={href} className={`button button-${variant} ${className}`} {...props}><span>{children}</span><ArrowUpRight size={17} aria-hidden="true" /></Link>
}
export function Eyebrow({ children }) { return <p className="eyebrow"><span aria-hidden="true" />{children}</p> }
export function SectionHeading({ eyebrow, title, description }) {
  return <ScrollReveal className="section-heading"><Eyebrow>{eyebrow}</Eyebrow><h2>{title}</h2>{description && <p>{description}</p>}</ScrollReveal>
}
export function Breadcrumb({ items }) {
  return <nav className="breadcrumb" aria-label="Breadcrumb"><ol><li><Link href="/">Home</Link></li>{items.map((item, i) => <li key={`${item.label}-${i}`}>{item.href ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}</li>)}</ol></nav>
}
export function PageHero({ eyebrow, title, description, image, alt = '', breadcrumb, children }) {
  const items = Array.isArray(breadcrumb) ? breadcrumb : [{ label: breadcrumb || title }]
  return <section className={`page-hero dark ${image ? 'page-hero-image' : ''}`}>
    <div className="container"><Breadcrumb items={items} /><div className="page-hero-grid"><div><Eyebrow>{eyebrow}</Eyebrow><h1>{title}</h1>{description && <p className="hero-description">{description}</p>}{children}</div>{image && <div className="page-hero-photo"><Picture src={image} alt={alt} loading="eager" /></div>}</div></div>
  </section>
}
