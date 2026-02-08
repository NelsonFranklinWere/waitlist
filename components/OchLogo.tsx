import Image from 'next/image'

interface OchLogoProps {
  src?: string
  alt?: string
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
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
    lg: 'h-16 w-16',
    xl: 'h-24 w-24',
    '2xl': 'h-32 w-32'
  }

  const widthMap = {
    sm: 32,
    md: 48,
    lg: 64,
    xl: 96,
    '2xl': 128
  }

  const heightMap = {
    sm: 32,
    md: 48,
    lg: 64,
    xl: 96,
    '2xl': 128
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={widthMap[size as keyof typeof widthMap] || 96}
      height={heightMap[size as keyof typeof heightMap] || 96}
      className={`${sizeClasses[size as keyof typeof sizeClasses] || sizeClasses.xl} ${className} object-contain`}
    />
  )
}


