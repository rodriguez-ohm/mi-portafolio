import type { ReactNode } from 'react'

type CardProps = {
  children: ReactNode
  as?: 'article' | 'li' | 'div'
}

function Card({ children, as: Element = 'div' }: CardProps) {
  return <Element className="rounded-sm border border-line bg-surface p-6">{children}</Element>
}

export default Card
