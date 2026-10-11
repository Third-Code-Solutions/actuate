import { useEffect, useRef, useState } from 'react'
import { Button, PageHero, SectionHeading } from '../components/Primitives'
import { COMPANY, SERVICES, ABOUT_IMAGES } from '../data/content'

const EMPTY_FORM = { name: '', company: '', email: '', phone: '', type: '', message: '' }

export default function ContactPage() {
  const [form, setForm] = useState(EMPTY_FORM)
  const [draft, setDraft] = useState(null)
  const draftHeading = useRef(null)
  useEffect(() => { if (draft) draftHeading.current?.focus() }, [draft])
  const update = (key) => (event) => {
    event.target.setCustomValidity('')
    setForm((current) => ({ ...current, [key]: event.target.value }))
    setDraft(null)
  }
  const submit = (event) => {
    event.preventDefault()
    for (const key of ['name', 'message']) {
      if (!form[key].trim()) {
        const input = event.currentTarget.elements.namedItem(key)
        input.setCustomValidity(key === 'name' ? 'Please enter your name.' : 'Please describe your project.')
        input.reportValidity()
        return
      }
    }
    const subject = `Project enquiry: ${form.type || 'General enquiry'} — ${form.name.trim()}`
    const body = `Hello Actuate Builders,\n\n${form.message.trim()}\n\nName: ${form.name.trim()}\nCompany: ${form.company.trim() || 'Not provided'}\nEmail: ${form.email.trim()}\nPhone: ${form.phone.trim() || 'Not provided'}\nService: ${form.type || 'General enquiry'}`
    setDraft({ subject, body, href: `mailto:${COMPANY.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}` })
  }
  return (
    <>
      <PageHero eyebrow="Contact Actuate" title={<>Every project starts<br />with a conversation.</>} description="Tell us what you have in mind. Let’s discuss your space, your priorities, and what comes next." image={ABOUT_IMAGES[0].src} alt={ABOUT_IMAGES[0].alt} breadcrumb={[{ label: 'Contact' }]} />
      <section className="section">
        <div className="container contact-layout">
          <div>
            <SectionHeading eyebrow="Project enquiries" title="Tell us about your project." />
            <p id="contact-handoff" className="contact-note">Prepare an email draft below, then review and send it using your email app. This form does not send or store your enquiry.</p>
            <form className="contact-form" onSubmit={submit} aria-describedby="contact-handoff">
              <div className="field-row">
                <div className="field"><label htmlFor="contact-name">Full name <span>(required)</span></label><input id="contact-name" name="name" autoComplete="name" required maxLength={100} value={form.name} onChange={update('name')} /></div>
                <div className="field"><label htmlFor="contact-company">Company <span>(optional)</span></label><input id="contact-company" name="company" autoComplete="organization" maxLength={150} value={form.company} onChange={update('company')} /></div>
              </div>
              <div className="field-row">
                <div className="field"><label htmlFor="contact-email">Email <span>(required)</span></label><input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} value={form.email} onChange={update('email')} /></div>
                <div className="field"><label htmlFor="contact-phone">Phone <span>(optional)</span></label><input id="contact-phone" name="phone" type="tel" autoComplete="tel" maxLength={40} value={form.phone} onChange={update('phone')} /></div>
              </div>
              <div className="field"><label htmlFor="contact-type">Service of interest <span>(optional)</span></label><select id="contact-type" name="type" value={form.type} onChange={update('type')}><option value="">General enquiry</option>{SERVICES.map((service) => <option key={service.slug}>{service.title}</option>)}</select></div>
              <div className="field"><label htmlFor="contact-message">About your project <span>(required)</span></label><textarea id="contact-message" name="message" required maxLength={2000} rows={6} value={form.message} onChange={update('message')} placeholder="Share your project scope, location, and preferred timeline." /></div>
              <button type="submit" className="button button-primary">Prepare email draft <span aria-hidden="true">↗</span></button>
            </form>
            {draft && <section className="email-draft" aria-labelledby="draft-heading"><h3 id="draft-heading" tabIndex={-1} ref={draftHeading}>Your email draft is ready.</h3><p>No message has been sent. Open your email app to review and send, or copy the draft into your preferred email service.</p><Button href={draft.href}>Open email app</Button><p><strong>To:</strong> <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></p><div className="field"><label htmlFor="email-draft-text">Email draft — select to copy</label><textarea id="email-draft-text" readOnly rows={12} value={`To: ${COMPANY.email}\nSubject: ${draft.subject}\n\n${draft.body}`} onFocus={(event) => event.target.select()} /></div></section>}
          </div>
          <aside className="contact-details dark">
            <h2>Let’s connect.</h2>
            <div><h3>Project enquiries</h3><a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></div>
            {COMPANY.phone && <div><h3>Call us</h3><a href={COMPANY.phoneHref.startsWith('tel:') ? COMPANY.phoneHref : `tel:${COMPANY.phoneHref}`}>{COMPANY.phone}</a></div>}
            <div><h3>Visit</h3><address>{COMPANY.address}</address></div>
            <div><h3>Careers</h3><a href={`mailto:${COMPANY.careerEmail}`}>{COMPANY.careerEmail}</a></div>
            <div><h3>Suppliers</h3><a href={`mailto:${COMPANY.supplierEmail}`}>{COMPANY.supplierEmail}</a></div>
          </aside>
        </div>
      </section>
    </>
  )
}
