import { Button, PageHero } from '../components/Primitives'

export default function NotFoundPage() {
  return <PageHero eyebrow="404 / Page not found" title={<>A different<br />way forward.</>} description="We couldn't find this page. Explore our work or return to the homepage." breadcrumb={[{ label: 'Page not found' }]}><Button href="/">Back to home</Button><Button href="/our-works" variant="outline-light">Explore our work</Button></PageHero>
}
