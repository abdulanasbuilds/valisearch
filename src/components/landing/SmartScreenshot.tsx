import { useState } from 'react'

interface SmartScreenshotProps {
  src: string
  alt: string
  fallback: React.ReactNode
  className?: string
}

export function SmartScreenshot({ 
  src, alt, fallback, className 
}: SmartScreenshotProps) {
  const [imgError, setImgError] = useState(false)

  if (imgError) {
    return <>{fallback}</>
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setImgError(true)}
    />
  )
}
