import type { Project } from '../../types/project'
import Card from '../ui/Card'
import Tag from '../ui/Tag'

type ProjectCardProps = {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  const links = [
    { label: 'Ver demo', url: project.demoUrl },
    { label: 'Código', url: project.repoUrl },
  ]

  return (
    <Card as="li">
      <div
        aria-hidden="true"
        className="-mx-6 -mt-6 mb-6 flex aspect-16/10 items-center justify-center rounded-t-sm bg-line font-mono text-label text-ink-muted uppercase"
      >
        Captura del proyecto
      </div>

      <p className="font-mono text-label text-accent uppercase">{project.category}</p>
      <h3 className="mt-2 font-display text-card">{project.title}</h3>
      <p className="mt-3 text-ink-muted">{project.problem}</p>

      <ul aria-label="Tecnologías" className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <li key={technology}>
            <Tag>{technology}</Tag>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-6">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-sm font-medium text-accent underline-offset-4 focus-ring hover:underline"
          >
            {link.label}
            <span className="sr-only"> de {project.title} (se abre en una pestaña nueva)</span>
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-3.5"
            >
              <path d="M6 3H3v10h10v-3M9 3h4v4M13 3 7 9" />
            </svg>
          </a>
        ))}
      </div>
    </Card>
  )
}

export default ProjectCard
