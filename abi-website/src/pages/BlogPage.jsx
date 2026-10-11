import { useState } from 'react'
import Link from '../components/Link'
import { Button, Eyebrow, PageHero, Picture, SectionHeading } from '../components/Primitives'
import ContactCTA from '../components/ContactCTA'
import { ARTICLES } from '../data/content'

export default function BlogPage() {
  const [category, setCategory] = useState('All articles')
  const [featured, ...rest] = ARTICLES
  const categories = ['All articles', ...new Set(ARTICLES.map((article) => article.category))]
  const filtered = category === 'All articles' ? rest : ARTICLES.filter((article) => article.category === category)
  return (
    <>
      <PageHero eyebrow="The Actuate journal" title={<>Ideas for<br />better spaces.</>} description="Perspectives on construction, workplace design, and the technology shaping our built environment." image={featured?.image} alt={featured?.imageAlt || featured?.title} breadcrumb={[{ label: 'Blog' }]} />
      {featured && <section className="section"><div className="container split article-featured"><Picture src={featured.image} alt={featured.imageAlt || featured.title} /><div className="prose"><Eyebrow>Featured / {featured.category}</Eyebrow>{featured.date && <p className="article-date">{featured.date}</p>}<h2>{featured.title}</h2><p>{featured.excerpt}</p><Button href={`/blog/${featured.slug}`} variant="outline">Read article</Button></div></div></section>}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Continue exploring" title="From the journal." />
          <div className="filter-bar" role="group" aria-label="Filter articles by category">{categories.map((item) => <button type="button" key={item} aria-pressed={category === item} className={category === item ? 'active' : ''} onClick={() => setCategory(item)}>{item}</button>)}</div>
          <p className="filter-count" role="status">{filtered.length} {filtered.length === 1 ? 'article' : 'articles'}{category === 'All articles' ? ' beyond our featured story' : ''}</p>
          <div className="article-grid">{filtered.map((article) => <article className="article-card" key={article.slug}><Link href={`/blog/${article.slug}`}><Picture src={article.image} alt={article.imageAlt || article.title} /><Eyebrow>{article.category}</Eyebrow>{article.date && <p className="article-date">{article.date}</p>}<h3>{article.title}</h3><p>{article.excerpt}</p><span className="text-link">Read article <span aria-hidden="true">↗</span></span></Link></article>)}</div>
        </div>
      </section>
      <ContactCTA />
    </>
  )
}
