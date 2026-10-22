export type SkillCategory = 'Frontend' | 'Herramientas' | 'Otras'

export interface Skill {
  name: string
  icon: string
  category: SkillCategory
  usage: string
}
