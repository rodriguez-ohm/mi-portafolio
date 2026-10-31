import { skills, skillsIntro, skillsTitle } from '../../data/skills'
import type { SkillCategory } from '../../types/skill'
import Section from '../layout/Section'

const categories: SkillCategory[] = ['Frontend', 'Herramientas', 'Otras']

function Skills() {
  return (
    <Section id="skills" number="03" label="Habilidades" title={skillsTitle}>
      <p className="text-ink-muted">{skillsIntro}</p>

      <table className="mt-8 w-full text-left">
        <caption className="sr-only">Tecnologías que uso, agrupadas por categoría</caption>
        <thead>
          <tr>
            <th
              scope="col"
              className="w-2/5 pb-3 font-mono text-label font-normal text-ink-muted uppercase"
            >
              Tecnología
            </th>
            <th
              scope="col"
              className="pb-3 font-mono text-label font-normal text-ink-muted uppercase"
            >
              Cómo la uso
            </th>
          </tr>
        </thead>

        {categories.map((category) => (
          <tbody key={category} className="border-t-2 border-line-strong">
            <tr>
              <th
                scope="rowgroup"
                colSpan={2}
                className="pt-5 pb-2 font-mono text-label font-normal text-accent uppercase"
              >
                {category}
              </th>
            </tr>

            {skills
              .filter((skill) => skill.category === category)
              .map((skill) => (
                <tr key={skill.name} className="border-t border-line">
                  <td className="py-3 pr-4 align-top font-medium">
                    <span className="flex items-center gap-3">
                      <span aria-hidden="true" className="size-4 shrink-0 rounded-sm bg-line" />
                      {skill.name}
                    </span>
                  </td>
                  <td className="py-3 align-top text-ink-muted">{skill.usage}</td>
                </tr>
              ))}
          </tbody>
        ))}
      </table>
    </Section>
  )
}

export default Skills
