import Image from 'next/image'

interface OchLogoProps {
  src?: string
  alt?: string
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function OchLogo({
  src,
  alt = 'OCH Logo',
  className = '',
  size = 'md'
}: OchLogoProps) {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16'
  }

  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        width={size === 'sm' ? 32 : size === 'md' ? 48 : 64}
        height={size === 'sm' ? 32 : size === 'md' ? 48 : 64}
        className={`${sizeClasses[size]} ${className}`}
      />
    )
  }

  // Fallback text logo
  return (
    <div className={`flex items-center justify-center bg-och-blue text-white font-bold rounded-lg ${sizeClasses[size]} ${className}`}>
      <span className={`text-${size === 'sm' ? 'sm' : size === 'md' ? 'lg' : 'xl'}`}>
        OCH
      </span>
    </div>
  )
}


