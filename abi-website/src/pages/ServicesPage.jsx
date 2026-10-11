import { Button, Eyebrow, PageHero, Picture, SectionHeading } from '../components/Primitives'
import Process from '../components/Process'
import ContactCTA from '../components/ContactCTA'
import { SERVICES } from '../data/content'

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Our expertise" title={<>From vision<br />to built reality.</>} description="Construction, interiors, and technology. Explore the services that bring your project together." image={SERVICES[0].image} alt={SERVICES[0].title} breadcrumb={[{ label: 'Services' }]} />
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="What we do" title="Expertise at every stage." description="Choose a service to explore its scope and start a conversation about your requirements." />
          <div className="service-list">
            {SERVICES.map((service, index) => (
              <article className={`service-row ${index % 2 ? 'reverse' : ''}`} key={service.slug}>
                <Picture src={service.image} alt={service.title} />
                <div className="prose">
                  <Eyebrow>{String(index + 1).padStart(2, '0')} / Our services</Eyebrow>
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                  <ul className="capabilities">{service.capabilities.slice(0, 3).map((item) => <li key={item}>{item}</li>)}</ul>
                  <Button href={`/services/${service.slug}`} variant="outline">Explore service</Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Process />
      <ContactCTA />
    </>
  )
}
