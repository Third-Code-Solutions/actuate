import { PageHero, Picture, SectionHeading } from '../components/Primitives'
import Gallery from '../components/Gallery'
import Projects from '../components/Projects'
import ContactCTA from '../components/ContactCTA'
import NotFoundPage from './NotFoundPage'
import { PROJECTS } from '../data/content'

export default function ProjectDetailPage({ slug }) {
  const project = PROJECTS.find((item) => item.slug === slug)
  if (!project) return <NotFoundPage />
  const detail = project.gallery.find((item) => item.src !== project.image) || { src: project.image, alt: project.name }
  return (
    <>
      <PageHero eyebrow={project.category} title={project.name} description={project.location} image={project.image} alt={`${project.name}, ${project.location}`} breadcrumb={[{ label: 'Our Works', href: '/our-works' }, { label: project.name }]} />
      <div className="project-meta"><dl className="container"><div><dt>Project</dt><dd>{project.name}</dd></div><div><dt>Location</dt><dd>{project.location}</dd></div><div><dt>Category</dt><dd>{project.category}</dd></div>{project.period && <div><dt>Project period</dt><dd>{project.period}</dd></div>}</dl></div>
      <section className="section">
        <div className="container split">
          <div className="prose">
            <SectionHeading eyebrow="About this project" title="Project overview." />
            <p>{project.description}</p>
            {project.challenge && <><h3>The brief</h3><p>{project.challenge}</p></>}
            {project.solution && <><h3>The work</h3><p>{project.solution}</p></>}
          </div>
          <Picture src={detail.src} alt={detail.alt} />
        </div>
      </section>
      <div className="dark" id="project-gallery"><Gallery images={project.gallery} title="Project photography." /></div>
      <Projects exclude={slug} />
      <ContactCTA />
    </>
  )
}
