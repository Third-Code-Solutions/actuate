import { ArrowUpRight } from 'lucide-react'
import { PROJECTS } from '../data/content'
import Link from './Link'
import { Picture, SectionHeading } from './Primitives'
export default function Projects({ exclude }) {
  return <section className="section projects-section dark"><div className="container"><div className="section-top"><SectionHeading eyebrow="Our work" title={exclude ? 'More spaces. More possibilities.' : 'Purpose, made tangible.'} description="A closer look at the spaces we’ve brought to life." /><Link className="text-link" href="/our-works">View all projects <ArrowUpRight size={18} /></Link></div><div className="project-grid">{PROJECTS.filter(project => project.slug !== exclude).map((project,i) => <Link href={`/our-works/${project.slug}`} className="project-card" key={project.slug}><div className="project-card-image"><Picture src={project.image} alt={`${project.name} office fit-out by Actuate Builders`} /><span className="project-index">0{i+1}</span><span className="round-link"><ArrowUpRight /></span></div><p className="small-label">{project.category} · {project.location}</p><h3>{project.name}</h3></Link>)}</div></div></section>
}
