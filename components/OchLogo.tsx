import Image from 'next/image'

interface OchLogoProps {
  src?: string
  alt?: string
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function OchLogo({
  src = '/OCH Side Profila Blue Logo.png',
  alt = 'OCH Logo',
  className = '',
  size = 'md'
}: OchLogoProps) {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16'
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={size === 'sm' ? 32 : size === 'md' ? 48 : 64}
      height={size === 'sm' ? 32 : size === 'md' ? 48 : 64}
      className={`${sizeClasses[size]} ${className} object-contain`}
    />
  )
}


