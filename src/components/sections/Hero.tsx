import { profile } from '../../data/profile'
import { cvUrl } from '../../data/social'
import Button from '../ui/Button'
import HeroGraphic from './HeroGraphic'

function Hero() {
  return (
    <section id="home" className="bg-brand text-on-brand">
      <div className="mx-auto grid min-h-[calc(100svh-8rem)] max-w-6xl content-center items-center gap-8 px-5 py-16 md:px-8 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="font-mono text-label text-on-brand-muted uppercase">01 — Inicio</p>
          <h1 className="mt-6 font-display text-hero">{profile.name}</h1>
          <p className="mt-3 font-display text-section">
            {profile.role} <span className="text-brand-accent">{profile.roleHighlight}</span>
          </p>
          <p className="mt-6 max-w-prose text-body text-on-brand-muted">{profile.tagline}</p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#projects" surface="brand">
              Ver proyectos
            </Button>
            <Button href={cvUrl} download variant="secondary" surface="brand">
              Descargar CV
            </Button>
          </div>
        </div>

        <div className="hidden lg:col-span-6 lg:block">
          <HeroGraphic />
        </div>
      </div>
    </section>
  )
}

export default Hero
