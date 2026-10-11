import { useScrollReveal } from '../hooks/useScrollReveal'

// Content is always visible; intersection only adds a short entrance animation.
export default function ScrollReveal({ children, className = '' }) {
  const [ref, seen] = useScrollReveal()
  return <div ref={ref} className={`${className} ${seen ? 'reveal-enter' : ''}`}>{children}</div>
}
