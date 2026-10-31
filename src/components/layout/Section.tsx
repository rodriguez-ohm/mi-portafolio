import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  number: string
  label: string
  title: string
  children: ReactNode
}

function Section({ id, number, label, title, children }: SectionProps) {
  const titleId = `${id}-title`

  return (
    <section id={id} aria-labelledby={titleId} className="py-16 lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 md:px-8 lg:grid-cols-12 lg:gap-8">
        <p className="font-mono text-label text-accent uppercase lg:col-span-3">
          {number} — {label}
        </p>

        <div className="lg:col-span-9">
          <h2 id={titleId} className="font-display text-section">
            {title}
          </h2>
          <div className="mt-8">{children}</div>
        </div>
      </div>
    </section>
  )
}

export default Section
