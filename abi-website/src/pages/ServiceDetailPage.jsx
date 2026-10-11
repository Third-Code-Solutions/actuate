import { Button, PageHero, SectionHeading } from '../components/Primitives'
import Link from '../components/Link'
import Projects from '../components/Projects'
import ContactCTA from '../components/ContactCTA'
import NotFoundPage from './NotFoundPage'
import { SERVICES } from '../data/content'

export default function ServiceDetailPage({ slug }) {
  const service = SERVICES.find((item) => item.slug === slug)
  if (!service) return <NotFoundPage />
  return (
    <>
      <PageHero eyebrow="Our services" title={service.title} description={service.short} image={service.image} alt={service.title} breadcrumb={[{ label: 'Services', href: '/services' }, { label: service.title }]}>
        <Button href="/contact">Discuss your project</Button>
      </PageHero>
      <section className="section">
        <div className="container split service-detail-intro">
          <div className="prose">
            <SectionHeading eyebrow="Service overview" title="What we deliver." />
            <p>{service.description}</p>
            <p>Tell us about your site, priorities, and project stage. We can discuss the scope that fits your requirements.</p>
            <Button href="/contact" variant="outline">Start a conversation</Button>
          </div>
          <div className="service-capability">
            <h2>Key capabilities</h2>
            <ul className="capabilities">{service.capabilities.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        </div>
      </section>
      <Projects />
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Explore more" title="Our other services." />
          <div className="numbered-list">
            {SERVICES.filter((item) => item.slug !== slug).map((item, index) => (
              <Link href={`/services/${item.slug}`} key={item.slug}><span>{String(index + 1).padStart(2, '0')}</span><h3>{item.title}</h3><span aria-hidden="true">↗</span></Link>
            ))}
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  )
}
