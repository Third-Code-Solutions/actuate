import { Button, Eyebrow, PageHero, Picture, SectionHeading } from '../components/Primitives'
import { COMPANY, ABOUT_IMAGES } from '../data/content'

export default function CareersPage() {
  const email = `mailto:${COMPANY.careerEmail}?subject=${encodeURIComponent('Career interest — Actuate Builders')}`
  return (
    <>
      <PageHero eyebrow="Careers at Actuate" title={<>Build your future.<br />Shape what comes next.</>} description="Bring your experience, curiosity, and commitment to the people behind our projects." image={ABOUT_IMAGES[1].src} alt={ABOUT_IMAGES[1].alt} breadcrumb={[{ label: 'Careers' }]}><Button href="#career-interest">Introduce yourself</Button></PageHero>
      <section className="section">
        <div className="container split careers-intro">
          <div className="prose"><SectionHeading eyebrow="Work with us" title="Good spaces begin with people." /><p>Construction brings many disciplines together. If your background is in engineering, project delivery, design, technology, or operations, tell Actuate what you can bring to the team.</p><p>Explore current listings on the official careers portal, or send an expression of interest to the careers team.</p><Button href={COMPANY.careerPortal} variant="outline">Visit careers portal</Button></div>
          <Picture src={ABOUT_IMAGES[0].src} alt={ABOUT_IMAGES[0].alt} />
        </div>
      </section>
      <section className="section dark" id="career-interest">
        <div className="container split">
          <div><Eyebrow>Your next chapter</Eyebrow><h2>Start with<br />a conversation.</h2></div>
          <div className="prose"><p>Introduce yourself, share your area of expertise, and attach your CV in your email. Contact the careers team for current opportunities and role requirements.</p><Button href={email}>Email the careers team</Button><p><a href={`mailto:${COMPANY.careerEmail}`}>{COMPANY.careerEmail}</a></p><p className="contact-note">This opens your email app. Add your CV and review your message before sending.</p></div>
        </div>
      </section>
    </>
  )
}
