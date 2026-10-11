import { useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { SERVICES } from '../data/content'
import { Button, Picture, SectionHeading } from './Primitives'
import Link from './Link'
export default function Services() {
  const [active, setActive] = useState(0)
  const tabs = useRef([])
  const service = SERVICES[active]
  function onKeyDown(event, index) {
    const direction = ['ArrowDown', 'ArrowRight'].includes(event.key) ? 1 : ['ArrowUp', 'ArrowLeft'].includes(event.key) ? -1 : 0
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? SERVICES.length - 1 : (index + direction + SERVICES.length) % SERVICES.length
    if (direction || ['Home', 'End'].includes(event.key)) { event.preventDefault(); setActive(next); tabs.current[next]?.focus() }
  }
  return <section className="section services-section dark"><div className="container"><SectionHeading eyebrow="What we do" title={<>One vision.<br />Every detail considered.</>} /><div className="services-split"><div className="service-tabs" role="tablist" aria-label="Our services" aria-orientation="vertical">{SERVICES.map((item,i) => <button ref={el => { tabs.current[i] = el }} key={item.slug} id={`service-tab-${i}`} type="button" role="tab" aria-selected={active === i} aria-controls="service-panel" tabIndex={active === i ? 0 : -1} onClick={() => setActive(i)} onKeyDown={event => onKeyDown(event,i)}><span className="tab-number">{String(i+1).padStart(2,'0')}</span><span className="tab-text"><span className="tab-title">{item.title}</span>{active === i && <span className="tab-description">{item.short}</span>}</span><ArrowUpRight size={18} /></button>)}</div><div id="service-panel" role="tabpanel" tabIndex={0} aria-labelledby={`service-tab-${active}`} className="service-panel"><div key={service.slug} className="service-visual"><Picture src={service.image} alt={service.title} /><div className="service-visual-caption"><p className="small-label">{String(active+1).padStart(2,'0')} — {service.title}</p><h3>{service.short}</h3><Link href={`/services/${service.slug}`} className="round-link" aria-label={`Explore ${service.title}`}><ArrowUpRight /></Link></div></div><div className="service-foot"><span>Built around your business.</span><Link href={`/services/${service.slug}`}>Explore service <ArrowUpRight size={16} /></Link></div></div></div><Button href="/services" variant="outline-light">All services</Button></div></section>
}
