import type { ReactNode } from 'react'

type TagProps = {
  children: ReactNode
}

function Tag({ children }: TagProps) {
  return (
    <span className="inline-flex items-center rounded-sm border border-line px-2 py-1 font-mono text-label text-ink-muted uppercase">
      {children}
    </span>
  )
}

export default Tag
