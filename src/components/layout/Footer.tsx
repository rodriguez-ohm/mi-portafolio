import { socialLinks } from '../../data/social'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="flex flex-col gap-1">
          <p className="font-mono text-label text-ink uppercase">
            &copy; {currentYear} Isleni Rodríguez
          </p>
          <p className="text-ink-muted">
            Diseñado y construido con React, TypeScript y Tailwind CSS.
          </p>
        </div>

        <ul className="flex flex-wrap gap-x-8 gap-y-2">
          {socialLinks.map((link) => (
            <li key={link.url}>
              <a
                href={link.url}
                className="inline-block rounded-sm py-2 font-mono text-label text-ink-muted uppercase focus-ring hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
