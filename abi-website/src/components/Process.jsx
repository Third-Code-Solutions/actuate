import { SectionHeading } from './Primitives'
const steps = [
  ['Share your vision', 'Tell us about your business, your space, and what you want to achieve.'],
  ['Shape the brief', 'Discuss design, scope, budget, and the practical needs of your project.'],
  ['Build with purpose', 'Bring the agreed plans to life through coordinated construction and fit-out.'],
  ['Make it yours', 'Review the completed space and prepare for the next chapter of your business.'],
]
export default function Process() {
  return <section className="section process-section"><div className="container"><SectionHeading eyebrow="From idea to built space" title="Great spaces start with a conversation." /><ol className="process-grid">{steps.map(([title,body],i) => <li key={title}><span className="process-number">0{i+1}</span><div className="process-line" /><h3>{title}</h3><p>{body}</p></li>)}</ol></div></section>
}
