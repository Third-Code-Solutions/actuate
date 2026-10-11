import { useState } from 'react'
import { Button, Eyebrow, PageHero, Picture } from '../components/Primitives'
import Link from '../components/Link'
import ContactCTA from '../components/ContactCTA'
import { PROJECTS, HERO } from '../data/content'

export default function WorksPage() {
  const [category, setCategory] = useState('All projects')
  const categories = ['All projects', ...new Set(PROJECTS.map((project) => project.category))]
  const projects = category === 'All projects' ? PROJECTS : PROJECTS.filter((project) => project.category === category)
  return (
    <>
      <PageHero eyebrow="Our works" title={<>Spaces built<br />with purpose.</>} description="A closer look at Actuate projects, from construction to completed workplaces." image={HERO.image} alt={HERO.alt} breadcrumb={[{ label: 'Our Works' }]} />
      <section className="section">
        <div className="container">
          <div className="filter-bar" role="group" aria-label="Filter projects by category">
            {categories.map((item) => <button type="button" key={item} aria-pressed={category === item} className={category === item ? 'active' : ''} onClick={() => setCategory(item)}>{item}</button>)}
          </div>
          <p className="filter-count" role="status">{projects.length} {projects.length === 1 ? 'project' : 'projects'}</p>
          <div className="project-story">
            {projects.map((project, index) => (
              <article className={`project-story-row ${index % 2 ? 'reverse' : ''}`} key={project.slug}>
                <div>
                  <Picture src={project.image} alt={`${project.name}, ${project.location}`} />
                  {project.gallery.length > 1 && <div className="project-thumbnails">{project.gallery.slice(0, 4).map((image) => <Link key={image.src} href={`/our-works/${project.slug}#project-gallery`} aria-label={`View ${project.name} gallery`}><Picture src={image.src} alt={image.alt} /></Link>)}</div>}
                </div>
                <div className="prose">
                  <Eyebrow>{String(index + 1).padStart(2, '0')} / {project.category}</Eyebrow>
                  <h2>{project.name}</h2>
                  <p className="project-location">{project.location}</p>
                  <p>{project.description}</p>
                  {project.period && <p className="project-period">{project.period}</p>}
                  <Button href={`/our-works/${project.slug}`} variant="outline">Explore project</Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  )
}
