import { cvUrl } from '../../data/social'
import type { SocialLink } from '../../types/social'
import Card from '../ui/Card'

interface ContactCardProps {
  link: SocialLink
}

function ContactCard({ link }: ContactCardProps) {
  const isDownload = link.url === cvUrl

  return (
    <Card as="li">
      <a
        href={link.url}
        download={isDownload ? true : undefined}
        target={isDownload ? undefined : '_blank'}
        rel={isDownload ? undefined : 'noopener noreferrer'}
        className="group -m-6 block rounded-sm p-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <span className="flex items-center justify-between font-mono text-label text-ink-muted uppercase">
          {link.label}
          <span aria-hidden="true" className="text-accent">
            ↗
          </span>
        </span>
        <span className="mt-3 block font-display text-card wrap-anywhere decoration-accent underline-offset-4 group-hover:underline">
          {link.detail}
        </span>
        {!isDownload && <span className="sr-only"> (se abre en una pestaña nueva)</span>}
      </a>
    </Card>
  )
}

export default ContactCard
