import { useEffect, useState } from 'react'
import { contactIntro, contactTitle } from '../../data/contact'
import { email, socialLinks } from '../../data/social'
import Section from '../layout/Section'
import Button from '../ui/Button'
import ContactCard from './ContactCard'

type CopyStatus = 'idle' | 'copied' | 'error'

const statusMessages: Record<CopyStatus, string> = {
  idle: '',
  copied: 'Correo copiado al portapapeles.',
  error: 'No se pudo copiar. Selecciona el correo y cópialo a mano.',
}

function Contact() {
  const [status, setStatus] = useState<CopyStatus>('idle')

  useEffect(() => {
    if (status !== 'copied') return

    const timer = setTimeout(() => setStatus('idle'), 2000)
    return () => clearTimeout(timer)
  }, [status])

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(email)
      setStatus('copied')
    } catch {
      setStatus('error')
    }
  }

  return (
    <Section id="contact" number="05" label="Contacto" title={contactTitle}>
      <p className="text-ink-muted">{contactIntro}</p>

      <div className="mt-12">
        <p className="font-mono text-label text-ink-muted uppercase">Correo</p>
        <a
          href={`mailto:${email}`}
          className="mt-2 inline-block rounded-sm font-display text-section wrap-anywhere underline decoration-accent decoration-2 underline-offset-8 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          {email}
        </a>

        <div className="mt-6">
          <Button variant="secondary" onClick={handleCopyEmail}>
            {status === 'copied' ? 'Copiado' : 'Copiar correo'}
          </Button>
          <p aria-live="polite" className={status === 'error' ? 'mt-3 text-ink-muted' : 'sr-only'}>
            {statusMessages[status]}
          </p>
        </div>
      </div>

      <ul className="mt-12 grid gap-6 md:grid-cols-3">
        {socialLinks.map((link) => (
          <ContactCard key={link.label} link={link} />
        ))}
      </ul>
    </Section>
  )
}

export default Contact
