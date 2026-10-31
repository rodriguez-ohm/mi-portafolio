import { about } from '../../data/about'
import Section from '../layout/Section'

function About() {
  return (
    <Section id="about" number="02" label="Sobre mí" title={about.title}>
      <div className="grid gap-8 lg:grid-cols-9">
        <div
          aria-hidden="true"
          className="flex aspect-4/5 max-w-60 items-center justify-center rounded-sm bg-line font-mono text-label text-ink-muted uppercase lg:col-span-3 lg:max-w-none"
        >
          Tu foto
        </div>

        <div className="lg:col-span-6">
          <div className="space-y-4">
            {about.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <dl className="mt-8">
            {about.strengths.map((strength) => (
              <div
                key={strength.name}
                className="grid gap-1 border-t border-line py-4 sm:grid-cols-[12rem_1fr] sm:gap-6"
              >
                <dt className="font-mono text-label text-accent uppercase">{strength.name}</dt>
                <dd className="text-ink-muted">{strength.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  )
}

export default About
