import { ABOUT_IMAGES } from '../data/content'
import { Button, Eyebrow, Picture } from './Primitives'
export default function ContactCTA() {
  return <section className="closing-cta dark"><div className="cta-content"><Eyebrow>Your next chapter</Eyebrow><h2>Have a vision?<br /><em>Let’s Actuate it.</em></h2><p>Bring us your ideas. Let’s explore what your next space could become.</p><Button href="/contact">Start a conversation</Button></div><Picture src={ABOUT_IMAGES[0].src} alt={ABOUT_IMAGES[0].alt} /></section>
}
