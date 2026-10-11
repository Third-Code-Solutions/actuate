import { Button, Eyebrow, PageHero, Picture, SectionHeading } from '../components/Primitives'
import Projects from '../components/Projects'
import ContactCTA from '../components/ContactCTA'
import { ABOUT_IMAGES } from '../data/content'

const values = [
  { title: 'Agile', body: 'A responsive approach to the changing needs of construction, technology, and the people who use our spaces.' },
  { title: 'Bold', body: 'The ambition to take on meaningful work and help build a world-class Philippines.' },
  { title: 'Innovative', body: 'Bringing construction and property technology together to create spaces for the way we work today.' },
]

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Actuate" title={<>Built on purpose.<br />Driven by people.</>} description="Actuate Builders Inc. brings construction, interiors, and property technology together in the Philippines." image={ABOUT_IMAGES[0].src} alt={ABOUT_IMAGES[0].alt} breadcrumb={[{ label: 'About' }]} />
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Our principles" title="What drives every build." description="Agile. Bold. Innovative. The values behind Actuate's name and approach." />
          <div className="values-grid">{values.map((value, index) => <article className="value-card" key={value.title}><Eyebrow>{String(index + 1).padStart(2, '0')}</Eyebrow><h3>{value.title}</h3><p>{value.body}</p></article>)}</div>
        </div>
      </section>
      <section className="section dark">
        <div className="container split">
          <div className="about-images">{ABOUT_IMAGES.slice(0, 2).map((image) => <Picture key={image.src} src={image.src} alt={image.alt} />)}</div>
          <div className="prose">
            <SectionHeading eyebrow="Our story" title={<>From interiors<br />to possibilities.</>} />
            <p>Founded in 2010, ABI began with interior fit-outs for BPO companies. By 2012, the business had expanded into a full-service general contractor.</p>
            <p>Today, Actuate brings structural work, building systems, joinery, and property technology together. Our work spans construction and the spaces people use every day.</p>
            <Button href="/services" variant="outline-light">Discover our expertise</Button>
          </div>
        </div>
      </section>
      <Projects />
      <ContactCTA />
    </>
  )
}
