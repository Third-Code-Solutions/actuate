import { useEffect } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import WorksPage from './pages/WorksPage'
import ContactPage from './pages/ContactPage'
import BlogPage from './pages/BlogPage'
import CareersPage from './pages/CareersPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import ProjectDetailPage from './pages/ProjectDetailPage'
import ArticlePage from './pages/ArticlePage'
import NotFoundPage from './pages/NotFoundPage'
import { PageHero } from './components/Primitives'
import { SERVICES, PROJECTS, ARTICLES } from './data/content'
import { usePathname } from './router'

function resolveRoute(path) {
  const simple = {
    '/': { component: HomePage, title: 'Built with purpose', description: 'Actuate Builders Incorporated: design, construction, office fit-out, joinery, and property technology in the Philippines. Building with purpose since 2010.' },
    '/about': { component: AboutPage, title: 'About Actuate', description: 'Meet Actuate Builders Incorporated. Our story, our people, and our approach to construction and interiors.' },
    '/services': { component: ServicesPage, title: 'Our services', description: 'Explore Actuate’s construction, office fit-out, joinery, property technology, Smart Spaces, and consulting services.' },
    '/our-works': { component: WorksPage, title: 'Our Works', description: 'Explore Actuate’s office fit-out projects for Alternergy, Etiqa, and AFNI.' },
    '/blog': { component: BlogPage, title: 'Ideas & Insights', description: 'Practical perspectives on construction, design, and business spaces from Actuate Builders.' },
    '/careers': { component: CareersPage, title: 'Careers', description: 'Explore careers with Actuate Builders and connect with our recruitment team.' },
    '/contact': { component: ContactPage, title: 'Contact Actuate', description: 'Discuss your project with Actuate Builders. Find our Taguig office, phone, and project enquiry email.' },
  }
  if (simple[path]) return simple[path]
  const [category, slug, extra] = path.slice(1).split('/')
  if (!extra && slug) {
    const data = category === 'services' ? SERVICES : category === 'our-works' ? PROJECTS : category === 'blog' ? ARTICLES : []
    const item = data.find(item => item.slug === slug)
    if (item) return { component: category === 'services' ? ServiceDetailPage : category === 'our-works' ? ProjectDetailPage : ArticlePage, slug, title: item.title || item.name, description: item.description || item.excerpt }
  }
  if (path === '/privacy') return { component: PrivacyPage, title: 'Privacy & your information', description: 'How this Actuate website handles contact details and email drafts.' }
  return { component: NotFoundPage, title: 'Page not found', description: 'This page could not be found. Explore Actuate Builders services and projects.', notFound: true }
}
function PrivacyPage() {
  return <><PageHero eyebrow="Your information" title="Privacy, plainly explained." breadcrumb="Privacy" /><section className="section"><div className="container prose"><h2>Contacting Actuate</h2><p>The contact form prepares an email draft in your browser. It does not submit your details to a form backend or save them in browser storage. You choose whether to open your email app and send the message.</p><p>When you send an email, your email provider and Actuate receive the information you include. Avoid sharing sensitive documents in an initial enquiry. This website serves its fonts locally, and Vercel provides hosting.</p><p>For Actuate’s company privacy terms, read the <a className="text-link" href="https://abi-ph.com/privacy-policy/">official privacy policy</a>.</p></div></section></>
}
export default function App() {
  const location = usePathname()
  const rawPath = location.split('#')[0]
  const pathname = rawPath.replace(/^\/(works|projects)(?=\/|$)/, '/our-works').replace(/^\/project\//, '/our-works/').replace(/^\/service\//, '/services/').replace(/^\/blogs(?=\/|$)/, '/blog').replace(/^\/contact-us$/, '/contact')
  const route = resolveRoute(pathname)
  const Page = route.component
  useEffect(() => {
    document.title = `${route.title} | Actuate Builders`
    document.querySelector('meta[name="description"]')?.setAttribute('content', route.description)
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', `https://actuate-beta.vercel.app${pathname === '/' ? '' : pathname}`)
    document.querySelector('meta[name="robots"]')?.setAttribute('content', route.notFound ? 'noindex,follow' : 'index,follow')
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', document.title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', route.description)
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', `https://actuate-beta.vercel.app${pathname === '/' ? '' : pathname}`)
    const hash = window.location.hash.slice(1)
    const target = hash && document.getElementById(hash)
    if (target) target.scrollIntoView({ behavior: 'instant' })
    else window.scrollTo({ top: 0, behavior: 'instant' })
    document.getElementById('main')?.focus({ preventScroll: true })
  }, [location, pathname, route.title, route.description, route.notFound])
  return <><Nav key={pathname} pathname={pathname} /><main id="main" tabIndex={-1}><Page key={pathname} slug={route.slug} /></main><Footer /></>
}
