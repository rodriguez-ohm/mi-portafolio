import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    title: 'Portafolio profesional',
    category: 'Sitio web',
    problem:
      'Reúne mi perfil, proyectos y contacto en un sitio rápido y accesible, para que un reclutador conozca mi trabajo en menos de un minuto.',
    image: '/projects/portfolio.webp',
    imageAlt:
      'Página de inicio del portafolio con el nombre Isleni Rodríguez sobre un bloque color vino',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    repoUrl: 'https://github.com/rodriguez-ohm/mi-portafolio',
    demoUrl: 'https://mi-portafolio.vercel.app',
  },
  {
    title: 'Calculadora de resistencias',
    category: 'Herramienta',
    problem:
      'Traduce las bandas de color de una resistencia a su valor y tolerancia, y al revés, sin tablas impresas ni errores de lectura.',
    image: '/projects/resistor-calculator.webp',
    imageAlt: 'Resistencia con cuatro bandas de color y su valor calculado en ohmios',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    repoUrl: 'https://github.com/rodriguez-ohm/resistor-calculator',
    demoUrl: 'https://resistor-calculator.vercel.app',
  },
  {
    title: 'Panel de sensores',
    category: 'Dashboard',
    problem:
      'Muestra en tiempo real las lecturas de temperatura y humedad de un microcontrolador y avisa cuando un valor sale de rango.',
    image: '/projects/sensor-dashboard.webp',
    imageAlt: 'Panel con gráficas de temperatura y humedad y una alerta de valor fuera de rango',
    technologies: ['React', 'TypeScript', 'Recharts', 'WebSocket'],
    repoUrl: 'https://github.com/rodriguez-ohm/sensor-dashboard',
    demoUrl: 'https://sensor-dashboard.vercel.app',
  },
]
