import Link from '../components/Link'
import { Breadcrumb, Eyebrow, Picture, SectionHeading } from '../components/Primitives'
import ContactCTA from '../components/ContactCTA'
import NotFoundPage from './NotFoundPage'
import { ARTICLES } from '../data/content'

export default function ArticlePage({ slug }) {
  const article = ARTICLES.find((item) => item.slug === slug)
  if (!article) return <NotFoundPage />
  const related = ARTICLES.filter((item) => item.slug !== slug).slice(0, 2)
  return (
    <>
      <div className="article-cover"><Picture src={article.image} alt={article.imageAlt || article.title} loading="eager" /><div className="container"><Breadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: article.title }]} /></div></div>
      <article className="container">
        <header className="article-header"><Eyebrow>{article.category}</Eyebrow>{article.date && <p className="article-date">{article.date}</p>}<h1>{article.title}</h1></header>
        <div className="article-body">
          <p className="article-lead">{article.excerpt}</p>
          {article.sections.map((section) => <section key={section.title}><h2>{section.title}</h2>{(Array.isArray(section.body) ? section.body : section.body.split('\n\n')).map((paragraph, index) => <p key={index}>{paragraph}</p>)}</section>)}
          {article.source && <p className="article-source">Based on <a href={article.source}>Actuate&apos;s original article</a>.</p>}
          <Link className="text-link article-back" href="/blog">← Back to all articles</Link>
        </div>
      </article>
      {related.length > 0 && <section className="section"><div className="container"><SectionHeading eyebrow="Continue reading" title="More perspectives." /><div className="article-grid">{related.map((item) => <article className="article-card" key={item.slug}><Link href={`/blog/${item.slug}`}><Picture src={item.image} alt={item.imageAlt || item.title} /><Eyebrow>{item.category}</Eyebrow><h3>{item.title}</h3><p>{item.excerpt}</p><span className="text-link">Read article <span aria-hidden="true">↗</span></span></Link></article>)}</div></div></section>}
      <ContactCTA />
    </>
  )
}
