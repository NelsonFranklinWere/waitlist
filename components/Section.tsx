import { ReactNode } from 'react'

interface SectionProps {
  id?: string
  children: ReactNode
  className?: string
  background?: 'white' | 'gray' | 'blue'
}

export default function Section({
  id,
  children,
  className = '',
  background = 'white'
}: SectionProps) {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    blue: 'bg-och-blue text-white'
  }

  return (
    <section
      id={id}
      className={`section-padding ${backgroundClasses[background]} ${className}`}
    >
      <div className="container-max">
        {children}
      </div>
    </section>
  )
}


