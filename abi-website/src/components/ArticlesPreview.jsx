import { ARTICLES } from '../data/content'
import { Picture, SectionHeading } from './Primitives'
import Link from './Link'
import { ArrowUpRight } from 'lucide-react'
export default function ArticlesPreview() {
  return <section className="section articles-preview"><div className="container"><SectionHeading eyebrow="Ideas & insights" title="Before you break ground." /><div className="editorial-grid">{ARTICLES.slice(0,4).map((article,i) => <Link key={article.slug} href={`/blog/${article.slug}`} className={`editorial-card ${i === 0 ? 'editorial-feature' : ''}`}><div className="article-image"><Picture src={article.image} alt={article.imageAlt || article.title} /></div><div><p className="small-label">{article.category}</p><h3>{article.title}</h3>{i === 0 && <p>{article.excerpt}</p>}<span className="text-link">Read story <ArrowUpRight size={16} /></span></div></Link>)}</div><Link href="/blog" className="all-articles text-link">Explore all insights <ArrowUpRight size={17} /></Link></div></section>
}
