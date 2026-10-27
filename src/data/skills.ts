import type { Skill } from '../types/skill'

export const skills: Skill[] = [
  {
    name: 'React',
    icon: '/icons/react.svg',
    category: 'Frontend',
    usage: 'Construyo interfaces con componentes reutilizables y una sola responsabilidad.',
  },
  {
    name: 'TypeScript',
    icon: '/icons/typescript.svg',
    category: 'Frontend',
    usage: 'Tipo los datos y las props en modo estricto para detectar errores antes de ejecutar.',
  },
  {
    name: 'Tailwind CSS',
    icon: '/icons/tailwindcss.svg',
    category: 'Frontend',
    usage: 'Llevo un sistema de diseño a código con tokens de color, tipografía y espaciado.',
  },
  {
    name: 'HTML y CSS',
    icon: '/icons/html5.svg',
    category: 'Frontend',
    usage: 'Escribo HTML semántico y maquetas responsive con Flexbox y Grid.',
  },
  {
    name: 'Git y GitHub',
    icon: '/icons/github.svg',
    category: 'Herramientas',
    usage: 'Trabajo con ramas, commits convencionales, pull requests y tablero Kanban.',
  },
  {
    name: 'Vite',
    icon: '/icons/vite.svg',
    category: 'Herramientas',
    usage: 'Desarrollo con recarga instantánea y genero builds optimizados para producción.',
  },
  {
    name: 'Figma',
    icon: '/icons/figma.svg',
    category: 'Herramientas',
    usage: 'Diseño la interfaz y su sistema de diseño antes de escribir código.',
  },
  {
    name: 'Accesibilidad',
    icon: '/icons/accessibility.svg',
    category: 'Otras',
    usage: 'Verifico contraste WCAG AA, navegación con teclado y textos alternativos.',
  },
  {
    name: 'Arduino',
    icon: '/icons/arduino.svg',
    category: 'Otras',
    usage: 'Programo microcontroladores y leo sensores, experiencia que traigo de la electrónica.',
  },
]
