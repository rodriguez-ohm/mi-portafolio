import type { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  surface?: 'page' | 'brand'
  href?: string
  download?: boolean
  onClick?: () => void
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-sm px-5 py-3 font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2'

const styles = {
  page: {
    primary: 'bg-accent text-on-accent hover:opacity-90 focus-visible:outline-accent',
    secondary: 'border border-line-strong text-ink hover:bg-surface focus-visible:outline-accent',
  },
  brand: {
    primary:
      'bg-brand-accent text-on-brand-accent hover:opacity-90 focus-visible:outline-brand-accent',
    secondary:
      'border border-on-brand-muted text-on-brand hover:border-on-brand focus-visible:outline-brand-accent',
  },
}

function Button({
  children,
  variant = 'primary',
  surface = 'page',
  href,
  download,
  onClick,
}: ButtonProps) {
  const className = `${base} ${styles[surface][variant]}`

  if (href) {
    return (
      <a href={href} download={download} className={className}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
    </button>
  )
}

export default Button
