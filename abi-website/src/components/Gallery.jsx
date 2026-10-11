import { useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, X, Maximize2 } from 'lucide-react'
import { Picture, SectionHeading } from './Primitives'
export default function Gallery({ images, title = 'A closer look' }) {
  const [selected, setSelected] = useState(0)
  const dialog = useRef(null)
  if (!images?.length) return null
  const change = direction => setSelected(index => (index + direction + images.length) % images.length)
  return <section className="section gallery-section"><div className="container"><SectionHeading eyebrow="In the details" title={title} /><div className="gallery-grid">{images.map((image,i) => <button key={image.src} onClick={() => { setSelected(i); dialog.current.showModal() }} aria-label={`Enlarge ${image.alt}`}><Picture src={image.src} alt={image.alt} /><Maximize2 size={19} /></button>)}</div></div><dialog className="lightbox" ref={dialog} aria-label={title} onKeyDown={event => { if (event.key === 'ArrowRight') change(1); if (event.key === 'ArrowLeft') change(-1) }}><button className="icon-button lightbox-close" aria-label="Close gallery" onClick={() => dialog.current.close()}><X /></button><img src={images[selected].src} alt={images[selected].alt} /><div className="lightbox-controls"><button className="icon-button" aria-label="Previous image" onClick={() => change(-1)}><ArrowLeft /></button><p aria-live="polite">{selected+1} / {images.length} — {images[selected].alt}</p><button className="icon-button" aria-label="Next image" onClick={() => change(1)}><ArrowRight /></button></div></dialog></section>
}
