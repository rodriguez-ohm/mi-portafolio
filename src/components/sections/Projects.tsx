import { projects, projectsTitle } from '../../data/projects'
import Section from '../layout/Section'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <Section id="projects" number="04" label="Proyectos" title={projectsTitle}>
      <ul className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </ul>
    </Section>
  )
}

export default Projects
