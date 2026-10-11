import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { HERO } from '../data/content'
import Link from './Link'
import { Button, Eyebrow } from './Primitives'

export default function Hero() {
  return <section className="hero dark" aria-label="Actuate Builders">
    <img className="hero-background" src={HERO.image} alt={HERO.alt} fetchPriority="high" loading="eager" width="1920" height="1280" />
    <div className="hero-shade" />
    <div className="hero-project"><span className="hero-number">01</span><span>{HERO.projectName}</span><small>Featured project</small></div>
    <Link className="hero-project-card" href={`/our-works/${HERO.projectSlug}`}><span className="small-label">Built by Actuate</span><h2>{HERO.projectName}</h2><p>{HERO.location}</p><div><span>Office fit-out</span><ArrowUpRight size={20} /></div></Link>
    <div className="hero-bottom"><div className="hero-copy"><Eyebrow>Actuate Builders Incorporated</Eyebrow><h1>Built with purpose.<br />Made for <em>what’s next.</em></h1><div className="short-rule" /><p>Spaces that move businesses forward.<br />Design, construction, and fit-out across the Philippines.</p><Button href="/contact">Let’s build together</Button></div><a className="hero-scroll" href="#about" aria-label="Explore Actuate"><span>Explore</span><ArrowDown size={20} /></a></div>
  </section>
}
