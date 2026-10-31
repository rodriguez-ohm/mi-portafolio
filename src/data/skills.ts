import type { Skill } from '../types/skill'
export const skillsTitle = 'Mi caja de herramientas'

export const skillsIntro = 'Hoja de especificaciones: las herramientas que uso y para qué las uso.'

export const skills: Skill[] = [
  {
    name: 'React',
    icon: '/icons/react.svg',
    category: 'Frontend',
    usage: 'Interfaces con componentes reutilizables',
  },
  {
    name: 'TypeScript',
    icon: '/icons/typescript.svg',
    category: 'Frontend',
    usage: 'Tipado estricto, sin any',
  },
  {
    name: 'JavaScript ES6+',
    icon: '/icons/javascript.svg',
    category: 'Frontend',
    usage: 'Lógica e interactividad',
  },
  {
    name: 'HTML semántico',
    icon: '/icons/html5.svg',
    category: 'Frontend',
    usage: 'Estructura accesible para lectores de pantalla',
  },
  {
    name: 'Tailwind CSS',
    icon: '/icons/tailwindcss.svg',
    category: 'Frontend',
    usage: 'Estilos a partir de un sistema de diseño',
  },
  {
    name: 'Git y GitHub',
    icon: '/icons/github.svg',
    category: 'Herramientas',
    usage: 'Ramas, pull requests y tablero Kanban',
  },
  {
    name: 'Vite',
    icon: '/icons/vite.svg',
    category: 'Herramientas',
    usage: 'Entorno de desarrollo y build',
  },
  {
    name: 'ESLint y Prettier',
    icon: '/icons/eslint.svg',
    category: 'Herramientas',
    usage: 'Calidad y formato automático del código',
  },
  {
    name: 'Figma',
    icon: '/icons/figma.svg',
    category: 'Herramientas',
    usage: 'Bocetos y sistema de diseño',
  },
  {
    name: 'Vercel',
    icon: '/icons/vercel.svg',
    category: 'Herramientas',
    usage: 'Despliegue continuo desde main',
  },
  {
    name: 'Accesibilidad WCAG',
    icon: '/icons/accessibility.svg',
    category: 'Otras',
    usage: 'Contraste AA y navegación con teclado',
  },
  {
    name: 'Electrónica',
    icon: '/icons/chip.svg',
    category: 'Otras',
    usage: 'Diseño y depuración de circuitos',
  },
  {
    name: 'Instrumentación',
    icon: '/icons/oscilloscope.svg',
    category: 'Otras',
    usage: 'Medición y análisis de señales',
  },
]
